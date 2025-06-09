import * as module from "bestHackSvr2.js"
function runner(ns,threads, target){
  ns.run("remoteWG.js",threads,target);
}
/** @param {NS} ns */
export async function main(ns) {
  let target = module.default(ns);
  const host = ns.getHostname();
  let freeRam = ns.getServerMaxRam(host) - ns.getServerUsedRam(host);
  if (host == "home") {
    freeRam = freeRam - 15;
  }
  else { freeRam = freeRam - 5; }

  if (target == "" || target == null) {
    target = "n00dles";
  }

  let currMon = true;
  let wgRam = ns.getScriptRam("remoteWG.js","home");
  let aioRam = ns.getScriptRam("remoteAIO.js","home");

  let maxWG = Math.floor(freeRam / wgRam).toFixed(0);
  let exitMaxWG = Math.floor(ns.getServerMaxRam(host)/wgRam).toFixed(0);

  const maxMoney = ns.getServerMaxMoney(target);

  /*ns.scp("bestHackSvr2.js",target,"home");
  await ns.sleep(100);*/
  ns.scp("remoteWG.js",target,"home");
  ns.scp("remoteAIO.js",target,"home");

  if(ns.getServerMaxRam(host)<=8){
    return;
  }
  if (!ns.getRunningScript("remoteWG.js") && maxWG > 0) {
    //ns.scp("remoteWG.js",target,"home");
    //await ns.sleep(100);
    ns.run("remoteWG.js", maxWG, target);
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
    //ns.scp("remoteAIO.js",target,"home");
    //await ns.sleep(100);
    ns.run("remoteAIO.js", maxAIO, target);
  }
}