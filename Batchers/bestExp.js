import {list_servers} from "bestHackSvr2.js";
import * as mod from "SphyxOS/util.js";
import * as arrSort from "arrSort2.js"

/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL')
  ns.clearLog()
  let servers = list_servers(ns).filter(s => s.includes("pserv-"))
  let tgt = ns.args[0] != null ? ns.args[0] : "joesguns"
  let plr = ns.getPlayer()
  let tgtSrv = ns.getServer(tgt)
  tgtSrv.hackDifficulty = tgtSrv.minDifficulty
  let tgtMaxMon = tgtSrv.moneyMax
  //let tgtMinSec = tgtSrv.minDifficulty
  let expGain = []
  let svrRam = []
  //let ttlRam = 0
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
    tgtSrv.moneyAvailable = tgtMaxMon - hackAmt
    
    let growT = Math.ceil(ns.formulas.hacking.growThreads(tgtSrv, plr, tgtMaxMon))
    let hackT = Math.floor(ns.hackAnalyzeThreads(tgt, hackAmt))
    let weakTA = Math.ceil(ns.hackAnalyzeSecurity(hackT, tgt) / weakStr)
    let weakTB = Math.ceil(ns.growthAnalyzeSecurity(growT, tgt) / weakStr)

    let ramUse = ((growT*gwRam) + (hackT*hackRam) + (weakTA*gwRam) + (weakTB*gwRam))

    let loops = 0

    svrRam.forEach(svr => {
      loops += Math.min(Math.floor(svr/ramUse), 50)
    })
    
    let ttlThreads = (growT+hackT+weakTA+weakTB)*loops

    let eG = ttlThreads * ns.formulas.hacking.hackExp(tgtSrv, plr)
    
    expGain.push([i, eG, ttlThreads])
  }

  let maxGain = 0
  let maxPct = 0
  let maxThreads = 0
  //ns.clearLog()
  //ns.print(monStolen)
  
  arrSort.sortArrayByTwoFields(expGain, 1, true, 2, false)
  //monStolen.sort((a,b) => b[1]-a[1]).sort((a,b) => a[2]-b[2])
  //ns.print(monStolen)
  for(const pct of expGain){
    ns.print(`${pct[0]}% : ${ns.formatNumber(pct[1])} XP : ${ns.formatNumber(pct[2])}`)
    maxGain = Math.max(maxGain, pct[1])
    if(maxGain == pct[1]) maxPct = pct[0]; maxThreads = pct[2]

  }
  ns.ui.openTail()
  ns.print(`\nThe pct that gains the most is:\n${maxPct}% who gains ${ns.formatNumber(maxGain)} XP, using ${ns.formatNumber(maxThreads)} Threads`)
}