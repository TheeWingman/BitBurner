/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  ns.atExit(ns.ui.closeTail);
  while(true){
    ns.clearLog();
    const srvrs = ns.getPurchasedServers();
    for (const srvr of srvrs) {
      let maxRam = ns.getServerMaxRam(srvr);
      let usedRam = ns.getServerUsedRam(srvr);
      //let script = ns.ps(srvr);
      let name = "";
      let arg = "";
      for (const script of ns.ps(srvr)) {
        name = script.filename;
        arg = script.args;
        }
        ns.print(srvr + ": " + ns.formatRam(usedRam) + "/ " + ns.formatRam(maxRam) + " | " + name + ": " + arg);
    }
    await ns.sleep(1000);
  }
}