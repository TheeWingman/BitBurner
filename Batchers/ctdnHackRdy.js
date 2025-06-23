import { list_servers } from "bestHackSvr2.js";
import * as module from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail()
  ns.disableLog('ALL')
  let tgtSrv = ns.args[0] != null ? ns.args[0] : "foodnstuff"
  ns.ui.setTailTitle(`${tgtSrv} Pregame Ctdn`)
  let tgtMinSec = ns.getServerMinSecurityLevel(tgtSrv)
  let tgtMaxMon = ns.getServerMaxMoney(tgtSrv)
  let debug = ns.args[1] != null ? ns.args[1] : false

  while (ns.getServerSecurityLevel(tgtSrv) > tgtMinSec || ns.getServerMoneyAvailable(tgtSrv) < tgtMaxMon || debug) {
    
    ns.ui.moveTail(655,820)
    ns.ui.resizeTail(320,110)
    ns.clearLog()
    let servers = [];
    let srvList = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(b => !b.includes("hacknet"))//.filter(a => !a.includes("pserv-"))

    for (const srv of srvList) {
      servers.push([srv, ns.getServerMaxRam(srv)])
    }

    let ttlGrow = 0
    let ttlWeak = 0
    let currSec = ns.getServerSecurityLevel(tgtSrv)
    let currMon = ns.getServerMoneyAvailable(tgtSrv)
    let weakStr = ns.weakenAnalyze(1)

    for (const server of servers) {

      let maxRam = server[1];
      const weakRam = ns.getScriptRam("/Batchers/remoteWeak.js");
      let tPerLoop = 0;

      let availableThreads = Math.floor(maxRam / weakRam)
      tPerLoop = Math.ceil(weakStr / .004) + 1
      let weakThreads = Math.ceil(availableThreads / tPerLoop);
      let growThreads = availableThreads - weakThreads

      if (availableThreads > 0) {
        if (currSec > tgtMinSec) {
          weakThreads = Math.min(Math.ceil((currSec - tgtMinSec) / weakStr), availableThreads)
          //growThreads = availableThreads - weakThreads
          ttlWeak += weakThreads
          ttlGrow += growThreads
        }
        else if (availableThreads > 1) {
          ttlGrow += growThreads//ns.exec("/Batchers/remoteGrow.js", hackSvr, growThreads, tgtSrv, growWait)
          ttlWeak += weakThreads//ns.exec("/Batchers/remoteWeak.js", hackSvr, weakThreads, tgtSrv)
        }
      }
    }
    let secToGo = currSec - tgtMinSec
    let monToGo = tgtMaxMon - currMon
    let growLoops = null
    let growNeeded = Math.ceil(ns.growthAnalyze(tgtSrv, tgtMaxMon / currMon))
    growLoops = Math.ceil(growNeeded / ttlGrow)
    let growRate = Math.floor(growLoops * ns.getWeakenTime(tgtSrv))
    let weakNeeded = Math.ceil(secToGo / weakStr)
    let weakLoops = Math.ceil(weakNeeded / ttlWeak)
    let weakRate = Math.floor(weakLoops * ns.getWeakenTime(tgtSrv))
    let ctdn = growRate
    ns.print(`
    ttlGrow: ${ttlGrow}
    ttlWeak: ${ttlWeak}
    monToGo: ${monToGo}
    growLoops: ${growLoops}
    growNeeded: ${growNeeded}
    secToGo: ${secToGo}
    weakLoops: ${weakLoops}
    weakNeeded: ${weakNeeded}
    growRate: ${growRate}
    weakRate: ${weakRate}`)
    if (currSec > tgtMinSec) ctdn += weakRate
    //ctdn = ctdn/1000
    ns.print(ctdn)
    let initCtdn = ctdn
    while (ctdn > (initCtdn - ns.getWeakenTime(tgtSrv))) {
      ns.clearLog()
      //ns.print(initCtdn - ns.getWeakenTime(tgtSrv))
      //ns.print(ctdn)
      ns.print(`\nTime until server is ready to hack:\n${ns.tFormat(ctdn)}`)
      ns.ui.renderTail()
      await ns.sleep(1000)
      ctdn-=1000
    }
  }
  ns.clearLog()
  ns.print("Server is Ready!")
  await ns.sleep(10000)
  ns.ui.closeTail()
}