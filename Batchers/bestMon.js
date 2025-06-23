import {list_servers} from "bestHackSvr2.js";
import * as mod from "SphyxOS/util.js";
import * as arrSort from "arrSort2.js"

/** @param {NS} ns */
export async function main(ns) {
  let servers = list_servers(ns).filter(s => s.includes("pserv-"))
  let tgtSrv = ns.args[0] != null ? ns.args[0] : "foodnstuff"
  let tgtMaxMon = ns.getServerMaxMoney(tgtSrv)
  let tgtMinSec = ns.getServerMinSecurityLevel(tgtSrv)
  let monStolen = []
  let svrRam = []
  let ttlRam = 0
  let gwRam = await mod.doGetScriptRam(ns, "Batchers/remoteWeak.js")
  let hackRam = await mod.doGetScriptRam(ns, "Batchers/remoteHack.js")
  let weakStr = await mod.weakenStr(ns)
  for(const server of servers){
    svrRam.push(ns.getServerMaxRam(server));
  }
  
  for(let i=1; i <= 20; i++){
    let nthPct = i/100
    //let nthPctRm = 1 - nthPct
    let hackAmt = tgtMaxMon * nthPct
    let currMon = tgtMaxMon - hackAmt
    
    let growT = Math.ceil(await mod.getGrowThreads(ns, tgtSrv, currMon, tgtMinSec))
    let hackT = Math.floor(ns.hackAnalyzeThreads(tgtSrv, hackAmt))
    let weakTA = Math.ceil(ns.hackAnalyzeSecurity(hackT, tgtSrv) / weakStr)
    let weakTB = Math.ceil(ns.growthAnalyzeSecurity(growT, tgtSrv) / weakStr)

    let ramUse = ((growT*gwRam) + (hackT*hackRam) + (weakTA*gwRam) + (weakTB*gwRam))

    let loops = 0

    svrRam.forEach(svr => {
      loops += Math.min(Math.floor(svr/ramUse), 50)
    })
    
    let ttlThreads = (growT+hackT+weakTA+weakTB)*loops

    let mS = loops * hackAmt
    monStolen.push([i, mS, ttlThreads])
  }

  let maxSteal = 0
  let maxPct = 0
  let maxThreads = 0
  ns.disableLog('ALL')
  ns.clearLog()
  //ns.print(monStolen)
  
  arrSort.sortArrayByTwoFields(monStolen, 1, true, 2, false)
  //monStolen.sort((a,b) => b[1]-a[1]).sort((a,b) => a[2]-b[2])
  //ns.print(monStolen)
  for(const pct of monStolen){
    ns.print(`${pct[0]}% : $${ns.formatNumber(pct[1])}: ${ns.formatNumber(pct[2])}`)
    maxSteal = Math.max(maxSteal, pct[1])
    if(maxSteal == pct[1]) maxPct = pct[0]; maxThreads = pct[2]

  }
  ns.ui.openTail()
  ns.print(`\nThe pct that steals the most is:\n${maxPct}% who steals $${ns.formatNumber(maxSteal)} using ${ns.formatNumber(maxThreads)} Threads`)
}