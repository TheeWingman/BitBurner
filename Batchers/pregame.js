/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  let tgtSrv = ns.args[0];
  const hackSvr = ns.args[1];

  let indexString = "blank";
  let maxRam = 0;
  //ns.tprint(hackSvr.toString().includes("hacknet"));
  if(hackSvr.includes("hacknet")){
    indexString = hackSvr.split("r-")[1];
    //ns.tprint(indexString);
    const index = Number(indexString);
    //ns.tprint(index.toString());
    maxRam = ns.hacknet.getNodeStats(index).ram;
    //ns.tprint(maxRam.toString());
  }
  else {
    maxRam = ns.getServerMaxRam(hackSvr);
  }
  const growRam = ns.getScriptRam("/Batchers/remoteGrow.js", "home");
  const weakRam = ns.getScriptRam("/Batchers/remoteWeak.js", "home");

  let growT = 1;
  let weakT = 1;
  let possLoops = 0;
  let temp = ns.getServer(tgtSrv);
  let timeGrow = ns.getGrowTime(tgtSrv);
  let timeWeak = ns.getWeakenTime(tgtSrv);
  let growWait = timeWeak - timeGrow;
  try {
    if (ns.fileExists("Formulas.exe", "home")) {
      if (temp.moneyAvailable != temp.moneyMax) {
        growT = Math.ceil(ns.formulas.hacking.growThreads(temp, ns.getPlayer(), temp.moneyMax));
      }
      weakT = Math.max(Math.ceil(temp.hackDifficulty / ns.weakenAnalyze(1)), Math.ceil(ns.growthAnalyzeSecurity(growT)/ ns.weakenAnalyze(1)));

      possLoops = Math.floor(maxRam / ((growRam*growT)+(weakRam*weakT)));
    }
    if (!ns.fileExists("Formulas.exe", "home") || possLoops == 0) {
      growT = Math.ceil((maxRam * (9 / 13)) / growRam);
      weakT = Math.ceil((maxRam * (3 / 13)) / weakRam);
    }
    if ((growT * growRam) > maxRam) {
      growT = Math.ceil((maxRam - Math.max((weakT * weakRam) / growRam), Math.ceil(ns.growthAnalyzeSecurity(growT)/ns.weakenAnalyze(1))));
    }
    if (temp.hackDifficulty == temp.minDifficulty) {
      weakT = Math.ceil(ns.growthAnalyzeSecurity(growT) / ns.weakenAnalyze(1));
    }
    possLoops = Math.floor(maxRam / ((growT * growRam) + (weakT * weakRam)));
    ns.print(`
    GrowT; ${growT}
    WeakT: ${weakT}
    PossLoops; ${possLoops}`);
    if (possLoops > 0 && weakT > 0) {
      while (possLoops > 0) {
        ns.exec("/Batchers/remoteGrow.js", hackSvr, growT, tgtSrv, growWait);
        ns.exec("/Batchers/remoteWeak.js", hackSvr, weakT, tgtSrv, 10);
        --possLoops;
      }
    }
  } catch (error) {
    ns.tprint(error);
  }
}