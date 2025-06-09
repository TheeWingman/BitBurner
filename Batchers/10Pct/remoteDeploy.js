/** @param {NS} ns */
export async function main(ns) {
  try {
    let tgtSrv = ns.args[0];
    let hackSvr = ns.args[1];

    ns.disableLog('ALL');
    /*if (hackSvr == "pserv-24") {
      ns.ui.openTail();
    }*/

    if (tgtSrv == null) {
      tgtSrv = "joesguns";
    }
    if (hackSvr == null) {
      hackSvr = "pserv-0";
    }
    //--------------------------------------
    const hackRam = ns.getScriptRam("/Batchers/remoteHack.js", "home");
    const growRam = ns.getScriptRam("/Batchers/remoteGrow.js", "home");
    const weakRam = ns.getScriptRam("/Batchers/remoteWeak.js", "home");

    let hackT = 0;
    let growT = 0;
    let weakTA = 0;
    let weakTB = 0;
    let possLoops = 0;
    let maxRam = 0;
    if (hackSvr.includes("hacknet") && ns.args[2] != "noHS") {
      let index = Number(hackSvr.split("r-")[1]);
      //ns.tprint(`Node-${index}`);
      maxRam = ns.hacknet.getNodeStats(index).ram;
      //ns.tprint(`Node-${index} has ${(maxRam)}`);
    }
    else { maxRam = ns.getServerMaxRam(hackSvr); }
    let maxMoney = ns.getServerMaxMoney(tgtSrv);
    let timeWeak = ns.getWeakenTime(tgtSrv);
    let timeGrow = ns.getGrowTime(tgtSrv);
    let timeHack = ns.getHackTime(tgtSrv);
    let growWait = timeWeak - timeGrow;
    let hackWait = timeWeak - timeHack;

    growT = Math.ceil(ns.growthAnalyze(tgtSrv, (maxMoney/ (maxMoney*.9))));

    hackT = Math.ceil(ns.hackAnalyzeThreads(tgtSrv, (maxMoney*.1)));

    weakTA = Math.max(Math.ceil(ns.hackAnalyzeSecurity(hackT) / ns.weakenAnalyze(1)), 1);

    weakTB = Math.max(Math.ceil(ns.growthAnalyzeSecurity(growT) / ns.weakenAnalyze(1)), 1);

    possLoops = Math.floor(maxRam / ((growT * growRam) + (hackT * hackRam) + (weakTA * weakRam) + (weakTB * weakRam)));

    ns.print(`
    possLoops: ${possLoops}
    hackT: ${hackT}
    growT: ${growT}
    weakTA: ${weakTA}
    weakTB: ${weakTB}
    Ram Needed: ${((growT*growRam)+(hackRam*hackT)+(weakRam*weakTA)+(weakRam*weakTB))}`);

    if (possLoops > 0) {
      if (possLoops > 100) { possLoops = 100; }
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
    ns.tprint(error);
  }
}