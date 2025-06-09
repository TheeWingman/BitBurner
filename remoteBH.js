import bestHack from "bestHackSvr2.js"

/** @param {NS} ns */
export async function main(ns) {
  let target = ns.args[0];
  const host = ns.args[1];

  let freeRam = ns.getServerMaxRam(host) - ns.getServerUsedRam(host);
  const wgRam = ns.getScriptRam("remoteWG.js","home");
  const aioRam = ns.getScriptRam("remoteAIO.js","home");
  if (host == "home") {
    freeRam = freeRam - 15;
  }

  if (target == "" || target == null) {
    target = "n00dles";
  }

  let currMon = true;

  let maxWG = Math.floor(freeRam / wgRam).toFixed(0);

  const maxMoney = ns.getServerMaxMoney(target);

  //ns.scp("bestHackSvr2.js",target,"home");

  if (!ns.getRunningScript("remoteWG.js") && maxWG > 0) {
    ns.scp("remoteWG.js",host,"home");
    ns.exec("remoteWG.js", host, maxWG, target);
  }
  while (currMon) {
    if (ns.getServerMoneyAvailable(target) != maxMoney) {
      await ns.sleep(1000);
    }
    else { currMon = false; }
  }
  ns.scriptKill("remoteWG.js", host);
  await ns.sleep(100);
  let maxAIO = Math.floor(freeRam / aioRam).toFixed(0);
  if (maxAIO > 0) {
    ns.scp("remoteAIO.js",host,"home");
    ns.exec("remoteAIO.js", host, maxAIO, target);
  }
}