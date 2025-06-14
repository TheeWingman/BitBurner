import * as mod from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  //try {
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
  const hackRam = await mod.doGetScriptRam(ns, "/Batchers/remoteHack.js");
  const growRam = await mod.doGetScriptRam(ns, "/Batchers/remoteGrow.js");
  const weakRam = await mod.doGetScriptRam(ns, "/Batchers/remoteWeak.js");

  let hackT = 0;
  let growT = 0;
  let weakTA = 0;
  let weakTB = 0;
  let possLoops = 0;
  let maxRam = 0;

  if (hackSvr.includes("hacknet")) {
    let index = Number(hackSvr.split("r-")[1]);
    //ns.tprint(`Node-${index}`);
    maxRam = await mod.proxy(ns, "hacknet.getNodeStats", index).ram;
    //ns.tprint(`Node-${index} has ${(maxRam)}`);
  }
  else { maxRam = await mod.getServerAvailRam(ns, hackSvr); }
  let maxMoney = await mod.doGetServerMaxMoney(ns, tgtSrv);
  let minSec = await mod.doGetServerMinSec(ns, tgtSrv);
  let timeHack = await mod.getHckTimeBasic(ns, tgtSrv);
  let timeWeak = timeHack * 4;
  let timeGrow = timeHack * 3.2;
  let growWait = timeWeak - timeGrow;
  let hackWait = timeWeak - timeHack;
  let hack1T = await mod.proxy(ns, "hackAnalyze", tgtSrv)
  let afterHackMon = maxMoney - (maxMoney * hack1T);
  //let srv = ns.getServer(tgtSrv);
  //srv.moneyAvailable = afterHackMon

  hackT = 1;

  growT = await mod.getGrowThreads(ns, tgtSrv, afterHackMon, minSec);

  weakTA = Math.ceil(await mod.proxy(ns, "hackAnalyzeSecurity", hackT) / await mod.weakenStr(ns));

  weakTB = Math.ceil(await mod.proxy(ns, "growthAnalyzeSecurity", growT) / await mod.weakenStr(ns));

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

    growT = await mod.getGrowThreads(ns, tgtSrv, afterHackMon, await mod.proxy(ns, "getServerMinSecurityLevel", tgtSrv));

    weakTA = Math.ceil(await mod.proxy(ns, "hackAnalyzeSecurity", hackT) / await mod.weakenStr(ns));

    weakTB = Math.ceil(await mod.proxy(ns, "growthAnalyzeSecurity", growT) / await mod.weakenStr(ns));

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

    ns.exec("/Batchers/remoteHack.js", hackSvr, hackT, tgtSrv, hackWait);
    ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTA, tgtSrv);
    ns.exec("/Batchers/remoteGrow.js", hackSvr, growT, tgtSrv, growWait);
    ns.exec("/Batchers/remoteWeak.js", hackSvr, weakTB, tgtSrv);
  }
  //--------------------------------------
  /*} catch (error) {
    ns.print(error);
    ns.ui.openTail();
  }*/
}