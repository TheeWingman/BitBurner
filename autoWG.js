
import * as module from "bestHackSvr2.js"
/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  let target = ns.args[0];
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  let monAtMax = false;
  const maxMoney = ns.getServerMaxMoney(target);
  const minSec = ns.getServerMinSecurityLevel(target);

  for(const server of servers){
    ns.killall(server);
    let freeRam = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
    let wgRam = ns.getScriptRam("remoteWG.js","home");
    let maxWG = Math.floor(freeRam / wgRam).toFixed(0);
    if(maxWG>0){
      ns.exec("remoteWG.js",server, maxWG, target);
    }
  }
  while (!monAtMax) {
    if (ns.getServerMoneyAvailable(target) < maxMoney || ns.getServerSecurityLevel(target) > minSec) {
      await ns.sleep(1000);
    }
    else { 
      monAtMax = true; 
      for(const server of servers){
        ns.scriptKill("remoteWG.js",server);
      }
    }
  }
  ns.alert("Server is at max money and min security");
}