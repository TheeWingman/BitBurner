/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.ui.moveTail(200,1600);
  ns.ui.resizeTail(425, 125);
  ns.ui.setTailTitle("hash2Mon.js");
  ns.disableLog('ALL');
  ns.atExit(ns.ui.closeTail);
  let hashPerSec = 0;
  while (true) {
    ns.clearLog();
    let plrMon = ns.getServerMoneyAvailable("home");
    hashPerSec = 0;
    for (let i = 0; i < ns.hacknet.numNodes(); i++) {
      hashPerSec += ns.hacknet.getNodeStats(i).production;
    }
    let monPerSec = (hashPerSec / 4) * 1000000;
    if (ns.args[0] != null && ns.args[0] != "" && ns.args[0] != undefined) {
      let toMon = ns.args[0].toString();
      toMon = toMon.replace(/,/g, ``);
      //ns.tprint(toMon);
      toMon = Number(toMon);
      let timeToMon = Math.ceil((toMon - plrMon) / (monPerSec / 1000));
      if(timeToMon <= 0){
        return ns.alert("Target Money Reached");
      }
      ns.print(`
      ${ns.formatNumber(hashPerSec)} Hashes/Sec
      $${ns.formatNumber(monPerSec)}/Sec
      ${ns.tFormat(timeToMon)} Until $${ns.formatNumber(toMon)}
      `)
    }
    else {
      ns.print(`
    ${ns.formatNumber(hashPerSec)} Hashes/Sec
    $${ns.formatNumber(monPerSec)} /Sec
    `);
    }
    ns.ui.renderTail();
    await ns.sleep(20);
  }
}