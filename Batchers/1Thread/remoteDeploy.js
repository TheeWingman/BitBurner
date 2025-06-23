import * as mod from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  try {
  let tgtSrv = ns.args[0];
  let hackSvr = ns.args[1];

  if (hackSvr == null) {
    hackSvr = "pserv-0"
  }

  ns.disableLog('ALL');
  if (hackSvr == "pserv-0") {
    //ns.ui.openTail();
  }

  if (tgtSrv == null) {
    tgtSrv = "foodnstuff";
  }
  //--------------------------------------
  const hackRam = ns.getScriptRam("/Batchers/remoteHack.js");
  const growRam = ns.getScriptRam("/Batchers/remoteGrow.js");
  const weakRam = ns.getScriptRam("/Batchers/remoteWeak.js");

  let hackT = 0;
  let growT = 0;
  let weakTA = 0;
  let weakTB = 0;
  let possLoops = 0;

  let maxRam = ns.getServerMaxRam(hackSvr);
  //let minSec = ns.getServerMinSecurityLevel(tgtSrv);

  let timeHack = ns.getHackTime(tgtSrv);
  let timeWeak = timeHack * 4;
  let timeGrow = timeHack * 3.2;
  let growWait = timeWeak - timeGrow;
  let hackWait = timeWeak - timeHack;

  let tgt = ns.getServer(tgtSrv)
  tgt.hackDifficulty = tgt.minDifficulty
  let maxMoney = tgt.moneyMax
  let plr = ns.getPlayer()

  let hack1T = ns.formulas.hacking.hackPercent(tgt, plr)
  let weakenStr = ns.weakenAnalyze(1)
  let afterHackMon = maxMoney * (1-hack1T);
  tgt.moneyAvailable = afterHackMon

  hackT = 1;

  growT = ns.formulas.hacking.growThreads(tgt,plr,tgt.moneyMax)

  weakTA = Math.ceil(ns.hackAnalyzeSecurity(hackT) / weakenStr)

  weakTB = Math.ceil(ns.growthAnalyzeSecurity(growT) / weakenStr);

  possLoops = Math.floor(maxRam / ((growT * growRam) + (hackT * hackRam) + (weakTA * weakRam) + (weakTB * weakRam)));

  ns.print(`
    1 LOOP #s:
    possLoops: ${possLoops}
    growT: ${growT}
    weakTA: ${weakTA}
    weakTB: ${weakTB}`)

  if (possLoops > 0) {
    if (possLoops > 100) { possLoops = 100; }
    /*ns.print(`TOTALS:
      hackT: ${hackT * possLoops}
      weaakTA: ${weakTA * possLoops}
      growT: ${growT * possLoops}
      weakTB: ${weakTB * possLoops}`);*/

    hackT *= possLoops;

    afterHackMon = maxMoney - (maxMoney * (hack1T * possLoops));
    tgt.moneyAvailable = afterHackMon

    growT = ns.formulas.hacking.growThreads(tgt, plr, tgt.moneyMax)

    weakTA = Math.ceil(ns.hackAnalyzeSecurity(hackT) / weakenStr);

    weakTB = Math.ceil(ns.growthAnalyzeSecurity(growT) / weakenStr)

    ns.print(`TOTALS:
    PossLoops: ${possLoops}
    Hack: ${hackT}
    WeakTA: ${weakTA}
    Grow: ${growT}
    WeakTB: ${weakTB}`)

    /*ns.print(`Weak: ${timeWeak}`)
    ns.print(`Grow: ${timeGrow}`)
    ns.print(`Hack: ${timeHack}`)
    ns.print(`growWait: ${growWait}`)
    ns.print(`hackWait: ${hackWait}`)*/ 
    ns.writePort(ns.pid, hackT)
    ns.exec("/Batchers/remoteHack.js", hackSvr, hackT, tgtSrv, hackWait);
    ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTA, tgtSrv);
    ns.exec("/Batchers/remoteGrow.js", hackSvr, growT, tgtSrv, growWait);
    ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTB, tgtSrv);
  }
  //--------------------------------------
  } catch (error) {
    ns.print(error);
    ns.ui.openTail();
    ns.exit()
  }
}