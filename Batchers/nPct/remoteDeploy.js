import * as mod from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  try {
    let pctHack = ns.args[0];
    let tgtSrv = ns.args[1];
    let hackSvr = ns.args[2]
    let maxLoops = ns.args[3] != null ? ns.args[3] : 50

    ns.disableLog('ALL');
    /*if (hackSvr == "pserv-24") {
      ns.ui.openTail();
    }*/

    ns.print(pctHack);
    ns.print(tgtSrv);
    ns.print(hackSvr);
    ns.print(maxLoops)

    if (tgtSrv == null) {
      tgtSrv = "joesguns";
    }
    if (hackSvr == null) {
      hackSvr = "pserv-0";
    }
    //--------------------------------------
    const hackRam = ns.getScriptRam("/Batchers/remoteHack.js");
    const growRam = ns.getScriptRam("/Batchers/remoteGrow.js");
    const weakRam = ns.getScriptRam("/Batchers/remoteWeak.js");

    let hackT = 0;
    let growT = 0;
    let weakTA = 0;
    let weakTB = 0;
    let ttlThreads = 0
    let possLoops = 0;
    let maxRam = 0;
    maxRam = ns.getServerMaxRam(hackSvr);
    //ns.print(maxRam);
    let tgt = ns.getServer(tgtSrv)
    let plr = ns.getPlayer()
    let maxMoney = tgt.moneyMax;
    let timeHack = ns.getHackTime(tgtSrv);
    //ns.print(maxMoney);
    //ns.print(timeHack);
    let timeWeak = timeHack * 4;
    let timeGrow = timeHack * 3.2;
    let growWait = timeWeak - timeGrow;
    let hackWait = timeWeak - timeHack;
    let hackAmt = maxMoney * (pctHack/100);
    tgt.moneyAvailable = maxMoney - hackAmt;

    growT = ns.formulas.hacking.growThreads(tgt, plr, maxMoney);
    //Math.ceil(ns.growthAnalyze(tgtSrv, (maxMoney/ (maxMoney*(1-((pctHack+.05)/100))))));
    //ns.print(growT);

    hackT = Math.floor(ns.hackAnalyzeThreads(tgtSrv, hackAmt));
    //ns.print(hackT);

    let weakStr = ns.weakenAnalyze(1);

    weakTA = Math.ceil(ns.hackAnalyzeSecurity(hackT) / weakStr);
    //ns.print(weakTA)

    weakTB = Math.ceil(ns.growthAnalyzeSecurity(growT) / weakStr);
    //ns.print(weakTB);

    possLoops = Math.floor(maxRam / ((growT * growRam) + (hackT * hackRam) + (weakTA * weakRam) + (weakTB * weakRam)));

    ns.print(`
    possLoops: ${possLoops}
    hackT: ${hackT}
    growT: ${growT}
    weakTA: ${weakTA}
    weakTB: ${weakTB}
    Ram Needed: ${ns.formatRam(((growT*growRam)+(hackRam*hackT)+(weakRam*weakTA)+(weakRam*weakTB)))}`);

    if (possLoops > 0) {
      if (possLoops > maxLoops) { possLoops = maxLoops; }
      ttlThreads = possLoops * (hackT + growT + weakTA + weakTB)
      ns.writePort(ns.pid, [possLoops,ttlThreads])
      while (possLoops > 0) {
        ns.exec("/Batchers/remoteHack.js", hackSvr, hackT, tgtSrv, hackWait);
        ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTA, tgtSrv);
        ns.exec("/Batchers/remoteGrow.js", hackSvr, growT, tgtSrv, growWait);
        ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTB, tgtSrv);
        --possLoops;
      }
    }
    //--------------------------------------
  } catch (error) {
    ns.print(`${ns.args[2]}\n${error}\n\n`);
    ns.exit()
  }
}