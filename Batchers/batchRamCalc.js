/** @param {NS} ns */
export async function main(ns) {
  ns.clearLog();
  ns.ui.openTail();
  ns.disableLog('ALL');
  const tgtSrv = ns.args[0];
  const hackRam = ns.getScriptRam("Batchers/remoteHack.js","home");
  const growRam = ns.getScriptRam("Batchers/remoteGrow.js","home");
  const weakRam = ns.getScriptRam("Batchers/remoteWeak.js","home");
  let hackT = 0;
  let growT = 0;
  let weakTA = 0;
  let weakTB = 0;
  let ramUse = 0;
  let nthPct = 0;
  let nthPctInv = 0;

  let maxMoney = ns.getServerMaxMoney(tgtSrv);
  ns.print(`For ${tgtSrv}:`);
  //  10 PERCENT BATCH
  for(let i=1; i<=10; i++){
    nthPct = i*.01;
    nthPctInv = 1 - (i*.01);
  growT = Math.ceil(ns.growthAnalyze(tgtSrv, (maxMoney / (maxMoney * nthPctInv))));

  hackT = Math.ceil(ns.hackAnalyzeThreads(tgtSrv, (maxMoney * nthPct)));

  weakTA = Math.max(Math.ceil(ns.hackAnalyzeSecurity(hackT) / ns.weakenAnalyze(1)), 1);

  weakTB = Math.max(Math.ceil(ns.growthAnalyzeSecurity(growT) / ns.weakenAnalyze(1)), 1);

  ramUse = Math.ceil((growT*growRam)+(hackRam*hackT)+(weakRam*weakTA)+(weakRam*weakTB));

  ns.print(`For 1 Loop of ${i}Pct:
        L hackT:  ${hackT}
          growT:  ${growT}
          weakTA: ${weakTA}
          weakTB: ${weakTB}
          Ram Needed: ${ns.formatRam(ramUse)}`);
  }
  //  1 THREAD BATCH

  growT = Math.ceil(ns.growthAnalyze(tgtSrv, (maxMoney / (maxMoney - (ns.hackAnalyze(tgtSrv) * maxMoney))))) + 1;

  hackT = 1;

  weakTA = Math.max(Math.ceil(ns.hackAnalyzeSecurity(hackT) / ns.weakenAnalyze(1)), 1);

  weakTB = Math.max(Math.ceil(ns.growthAnalyzeSecurity(growT) / ns.weakenAnalyze(1)), weakTA, 1);

  ramUse = Math.ceil((growRam*growT)+(hackRam*hackT)+(weakRam*weakTA)+(weakRam*weakTB));

  ns.print(`For 1 Loop of 1Thread:
        L hackT:  ${hackT}
          growT:  ${growT}
          weakTA: ${weakTA}
          weakTB: ${weakTB}
          Ram Needed: ${ns.formatRam(ramUse)}`);
}