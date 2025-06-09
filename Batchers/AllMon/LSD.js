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
    let gotHack = ns.getServer(hackSvr);
    const maxRam = gotHack.maxRam;
    let gotTgt = ns.getServer(tgtSrv);
    gotTgt.moneyAvailable = 0; //CHANGE IF NOT TAKING FULL
    gotTgt.hackDifficulty = gotTgt.minDifficulty;
    let timeWeak = ns.getWeakenTime(tgtSrv);
    let timeGrow = ns.getGrowTime(tgtSrv);
    let timeHack = ns.getHackTime(tgtSrv);
    let growWait = timeWeak - timeGrow;
    let hackWait = timeWeak - timeHack;

    if (ns.fileExists("Formulas.exe", "home")) {

      growT = Math.ceil(ns.formulas.hacking.growThreads(gotTgt, ns.getPlayer(), gotTgt.moneyMax));
    }

    hackT = Math.floor(ns.hackAnalyzeThreads(tgtSrv, gotTgt.moneyMax));//CHANGE 2ND ARG TO AMT TAKING

    weakTA = Math.max(Math.ceil(ns.hackAnalyzeSecurity(hackT, tgtSrv) / ns.weakenAnalyze(1)), 1);

    weakTB = Math.max(Math.ceil(ns.growthAnalyzeSecurity(growT) / ns.weakenAnalyze(1)), weakTA, 1);

    possLoops = Math.floor(maxRam / ((growT * growRam) + (hackT * hackRam) + (weakTA * weakRam) + (weakTB * weakRam)));
    if (possLoops > 0) {
      if (possLoops > 100) { possLoops = 100; }
      ns.exec("/Batchers/remoteHack.js", hackSvr, hackT, tgtSrv, hackWait);
      ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTA, tgtSrv);
      ns.exec("/Batchers/remoteGrow.js", hackSvr, growT, tgtSrv, growWait + 10);
      ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTB, tgtSrv, 20);
      --possLoops;
    }
    //--------------------------------------
  } catch (error) {
    ns.tprint(error);
  }
}