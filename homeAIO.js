import * as module from "scrPrgBar.js";
/** @param {NS} ns */
export async function main(ns) {
  let target = ns.args[0];
  const host = ns.getHostname();
  let freeRam = ns.getServerMaxRam(host) - ns.getServerUsedRam(host);
  freeRam -= 5;
  let currMon = true;
  let wgRam = ns.getScriptRam("remoteWG.js");
  let aioRam = ns.getScriptRam("remoteAIO.js");

  let maxWG = Math.floor(freeRam / wgRam).toFixed(0);

  const maxMoney = ns.getServerMaxMoney(target);

  if (maxWG > 0 && ns.getServerMoneyAvailable(target) < maxMoney && !ns.getRunningScript("remoteWG.js")){
    await ns.run("remoteWG.js", maxWG, target);
    //ns.run("scrPrgBar.js",1,"home","remoteWG.js",target);
  }
  while (currMon) {
    if (ns.getServerMoneyAvailable(target) != maxMoney) {
      await ns.sleep(1000);
    }
    else { currMon = false; }
  }
  ns.scriptKill("remoteWG.js", host);
  //ns.scriptKill("scrPrgBar.js",host);
  
  await ns.sleep(100);
  let maxAIO = Math.floor(freeRam / aioRam).toFixed(0);
  if (maxAIO > 0) {
    await ns.run("remoteAIO.js", maxAIO, target);
    //ns.run("scrPrgBar.js",1,"home","remoteAIO.js",target);
  }
}