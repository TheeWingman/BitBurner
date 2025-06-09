/** @param {NS} ns */
export async function main(ns) {
  let host = ns.getHostname();
  let tgt = ns.args[0] != null ? ns.args[0] : host
  ns.scp("weak.js",host,"home")
  ns.scp("hack.js",host,"home")
  ns.scp("grow.js",host,"home")

  while(true){
    let threads = 0;
    let freeRam = ns.getServerMaxRam(host) - ns.getServerUsedRam(host) - .01;
    let money = ns.getServerMaxMoney(tgt) - ns.getServerMoneyAvailable(tgt);
    let sec = ns.getServerSecurityLevel(tgt) - ns.getServerMinSecurityLevel(tgt);
    if(sec > 0){
      threads = Math.floor(freeRam / ns.getScriptRam("weak.js"));
      ns.run("weak.js",threads,tgt);
      await ns.sleep(ns.getWeakenTime(tgt) + 100);
    }
    else if(money > 0){
      threads = Math.floor(freeRam / ns.getScriptRam("grow.js"));
      ns.run("grow.js",threads,tgt);
      await ns.sleep(ns.getGrowTime(tgt) + 100);
    }
    else {
      threads = Math.floor(freeRam / ns.getScriptRam("hack.js"));
      ns.run("hack.js",threads,tgt);
      await ns.sleep(ns.getHackTime(tgt) + 100);
    }
  }
}