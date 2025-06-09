import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('sleep');
  ns.disableLog('getServerMaxMoney');
  ns.disableLog('getServerMoneyAvailable');
  ns.disableLog('getServerSecurityLevel');
  ns.disableLog('getServerMinSecurityLevel');
  const target = ns.args[0];
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  if (!ns.getRunningScript("batcherPort.js")) {
    ns.run("batcherPort.js", 1, target);
  }
  for (const server of servers) {
    ns.scp("remoteHack.js", server, "home");
    ns.scp("remoteGrow.js", server, "home");
    ns.scp("remoteWeak.js", server, "home");
    const maxRam = ns.getServerMaxRam(server);
    let growT = 0;
    let weakT = 0;
    if (maxRam <= 16) {
      weakT = 2;
      growT = Math.floor((maxRam - 3.5) / 1.75);
    }
    else {
      let temp = Math.floor((maxRam / 1.75) / 5);
      growT = Math.floor(temp * 5) - temp;
      weakT = Math.floor(temp/2);
    }
    if (weakT < 1) { weakT = 1; }
    if (growT < 1) { growT = 1; }

    ns.exec("remoteWeak.js", server, weakT, target);
    ns.exec("remoteGrow.js", server, growT, target);
    ns.exec("remoteWeak.js", server, weakT, target);
  }
  while (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) || ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
    await ns.sleep(1000);
  }
  for (const server of servers) {
    ns.killall(server);
    const maxRam = ns.getServerMaxRam(server);
    const left = maxRam - (1.7 + (1.75 * 2));
    let growT = Math.floor(left / 1.75);
    if (growT < 1) { growT = 1; }

    ns.exec("remoteHack.js", server, 1, target);
    ns.exec("remoteWeak.js", server, 1, target);
    ns.exec("remoteGrow.js", server, growT, target);
    ns.exec("remoteWeak.js", server, 1, target);
  }
}