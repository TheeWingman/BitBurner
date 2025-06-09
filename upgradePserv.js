/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  ns.ui.openTail();
  ns.atExit(ns.ui.closeTail);
  const pservs = ns.getPurchasedServers();
  let upRAM = ns.args[0];
  let keepRunning = false;
  let noUp = false;
  if (upRAM == undefined) {
    keepRunning = true;
    noUp = true;
  }
  let runnin = true;
  let upgraded = [];
  while (runnin) {
    ns.clearLog();
    for (const pserv of pservs) {
      let maxRam = ns.getServerMaxRam(pserv);
      if (noUp) {
        upRAM = Math.min(Math.pow(2, (Math.log2(maxRam) + 1)), Math.pow(2,20));
      }
      let upCost = ns.getPurchasedServerUpgradeCost(pserv, upRAM);
      let plrMon = ns.getServerMoneyAvailable("home");
      if (maxRam == Math.pow(2, 20)) {
        if (upgraded.findIndex(i => i == pserv) == -1) {
          upgraded.push(pserv);
        }
      }
      if (plrMon > upCost && maxRam != upRAM) {
        /*let pst = ns.ps(pserv);
        let currentArg = "";
        if(pst.length > 0){
        currentArg = pst.at(0).args.toString();
        }
        ns.killall(pserv);*/
        ns.upgradePurchasedServer(pserv, upRAM);
        /*if(currentArg != ""){
        ns.exec("LSD.js", "home",1, currentArg, pserv);
        }*/
        upCost = -1;
      }
      if (upCost <= 0) {
        ns.print(pserv + " to " + ns.formatRam(upRAM) + " Cost: Purchased");
      }
      if (upCost > 0) {
        ns.print(pserv + " to " + ns.formatRam(upRAM) + " Cost: " + ns.formatNumber(upCost));
      }
      if (maxRam >= upRAM && !keepRunning) {
        if(upgraded.findIndex(i => i == pserv) == -1){
          upgraded.push(pserv);
        }
      }
    }
    /*ns.print(upgraded.length);
    ns.print(pservs.length);
    ns.print(upgraded);*/
    if (upgraded.length >= pservs.length) {
      runnin = false;
      ns.alert("Servers upgraded to desired Ram");
    }
    await ns.sleep(1000);
  }
}