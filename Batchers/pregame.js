import * as module from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  ns.clearLog();
  ns.disableLog('ALL');
  let tgtSrv = ns.args[0];
  const hackSvr = ns.args[1];

  if (hackSvr == "n00dles") {
    //ns.ui.openTail()
  }

  let maxRam = await module.getServerAvailRam(ns, hackSvr);
  //ns.print(`maxRam:   ${maxRam}`)
  //const growRam = await module.doGetScriptRam(ns, "/Batchers/remoteGrow.js");
  //ns.print(`growRam:  ${growRam}`)
  const weakRam = await module.doGetScriptRam(ns, "/Batchers/remoteWeak.js");
  //ns.print(`weakRam:  ${weakRam}`)

  //let growT = 1;
  //let weakT = 1;
  let tPerLoop = 0;
  let currMon = await module.getMoneyAvail(ns, tgtSrv);
  //ns.print(`currMon:  ${currMon}`)
  //let maxMon = await module.doGetServerMaxMoney(ns, tgtSrv);
  //ns.print(`maxMon:   ${maxMon}`)
  let minSec = await module.doGetServerMinSec(ns, tgtSrv);
  //ns.print(`minSec:   ${minSec}`)
  let currSec = await module.doGetServerCurSec(ns, tgtSrv);
  //ns.print(`currSec:  ${currSec}`)
  let weakStr = await module.weakenStr(ns);
  //ns.print(`weakStr:  ${weakStr}`)
  let timeHack = await module.getHckTimeBasic(ns, tgtSrv);
  //ns.print(`timeHack: ${timeHack}`)
  let timeGrow = timeHack * 3.2;
  let timeWeak = timeHack * 4;
  let growWait = timeWeak - timeGrow;
  try {
    //ns.ui.openTail();
    let availableThreads = Math.floor(maxRam / weakRam)
    ns.print(`# of poss threads: ${availableThreads}`)
    tPerLoop = Math.ceil(weakStr / .004) + 1
    let weakThreads = Math.ceil(availableThreads / tPerLoop);
    ns.print(`# Weak Threads: ${weakThreads}`)
    let growThreads = availableThreads - weakThreads
    ns.print(`# Grow Threads: ${growThreads}`)
    if (availableThreads > 0) {
      if (currSec > minSec) {
        weakThreads = Math.min(Math.ceil((currSec - minSec) / weakStr), availableThreads)
        ns.print(weakThreads)
        ns.exec("/Batchers/remoteWeak.js", hackSvr, weakThreads, tgtSrv)
      }
      else if (availableThreads > 1) {
        ns.exec("/Batchers/remoteGrow.js", hackSvr, growThreads, tgtSrv, growWait)
        ns.exec("/Batchers/remoteWeak.js", hackSvr, weakThreads, tgtSrv)
      }
    }
  } catch (error) {
    ns.tprint(error);
  }
}