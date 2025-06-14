import * as mod from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  try {
    let pctHack = ns.args[0];
    let tgtSrv = ns.args[1];
    let hackSvr = ns.args[2];

    ns.disableLog('ALL');
    /*if (hackSvr == "pserv-24") {
      ns.ui.openTail();
    }*/

    ns.print(pctHack);
    ns.print(tgtSrv);
    ns.print(hackSvr);

    if (tgtSrv == null) {
      tgtSrv = "joesguns";
    }
    if (hackSvr == null) {
      hackSvr = "pserv-0";
    }
    //--------------------------------------
    const hackRam = await mod.doGetScriptRam(ns,"/Batchers/remoteHack.js");
    const growRam = await mod.doGetScriptRam(ns,"/Batchers/remoteGrow.js");
    const weakRam = await mod.doGetScriptRam(ns,"/Batchers/remoteWeak.js");

    let hackT = 0;
    let growT = 0;
    let weakTA = 0;
    let weakTB = 0;
    let possLoops = 0;
    let maxRam = 0;
    if (hackSvr.includes("hacknet")) {
      let index = Number(hackSvr.split("r-")[1]);
      //ns.tprint(`Node-${index}`);
      maxRam = await mod.proxy(ns,"hacknet.getNodeStats",index).ram;
      //ns.tprint(`Node-${index} has ${(maxRam)}`);
    }
    else { maxRam = await mod.proxy(ns,"getServerMaxRam",hackSvr); }
    //ns.print(maxRam);
    let maxMoney = await mod.doGetServerMaxMoney(ns,tgtSrv);
    let timeHack = await mod.getHckTimeBasic(ns, tgtSrv);
    //ns.print(maxMoney);
    //ns.print(timeHack);
    let timeWeak = timeHack * 4;
    let timeGrow = timeHack * 3.2;
    let growWait = timeWeak - timeGrow;
    let hackWait = timeWeak - timeHack;
    let hackAmt = maxMoney * (pctHack/100);
    let currMon = maxMoney - hackAmt;

    growT = await mod.getGrowThreads(ns, tgtSrv, currMon, await mod.proxy(ns, "getServerMinSecurityLevel", tgtSrv));
    //Math.ceil(ns.growthAnalyze(tgtSrv, (maxMoney/ (maxMoney*(1-((pctHack+.05)/100))))));
    //ns.print(growT);

    hackT = Math.floor(await mod.proxy(ns,"hackAnalyzeThreads",tgtSrv, hackAmt));
    //ns.print(hackT);

    let weakStr = await mod.weakenStr(ns);

    weakTA = Math.ceil(await mod.proxy(ns,"hackAnalyzeSecurity",hackT) / weakStr);
    //ns.print(weakTA)

    weakTB = Math.ceil(await mod.proxy(ns,"growthAnalyzeSecurity",growT) / weakStr);
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
      if (possLoops > 50) { possLoops = 50; }
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