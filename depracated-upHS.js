/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  //ns.ui.openTail();
  //ns.atExit(ns.ui.closeTail);
  let hackServs = ns.hacknet.numNodes();
  const maxHackServs = ns.hacknet.maxNumNodes();

  let runnin = true;
  let upgraded = [];

  while (runnin) {
    let bestIdx = 0;
    let lowestCost = Infinity;
    let plrMon = ns.getServerMoneyAvailable("home");

    hackServs = ns.hacknet.numNodes();
    if(hackServs < 1){
      ns.hacknet.purchaseNode();
    }
    for (let hserv = 0; hserv < hackServs; hserv++) {
      let upCostRam = ns.hacknet.getRamUpgradeCost(hserv);
      let upCostCores = ns.hacknet.getCoreUpgradeCost(hserv);
      let upCostLvl = ns.hacknet.getLevelUpgradeCost(hserv);
      let newServ = ns.hacknet.getPurchaseNodeCost();
      let cacheUp = ns.hacknet.getCacheUpgradeCost(hserv);
      if (upCostCores < lowestCost && upCostCores > 0) {
        lowestCost = upCostCores;
        bestIdx = hserv;
      }
      if (upCostLvl < lowestCost && upCostLvl > 0) {
        lowestCost = upCostLvl;
        bestIdx = hserv;
      }
      if (upCostRam < lowestCost && upCostRam > 0) {
        lowestCost = upCostRam;
        bestIdx = hserv;
      }
      if (newServ < lowestCost && hackServs < maxHackServs) {
        lowestCost = newServ;
        bestIdx = hserv;
      }
      if (cacheUp < lowestCost && cacheUp > 0 && ns.hacknet.numHashes() >= ns.hacknet.hashCapacity() - 50){
        lowestCost = cacheUp;
        bestIdx = hserv;
      }
    }
      if (lowestCost == upCostCores && plrMon > upCostCores & upCostCores > 0) {
        ns.hacknet.upgradeCore(bestIdx);
        ns.print(`Upgraded Cores on node-${bestIdx}`);
      }
      else if (lowestCost == upCostLvl && plrMon > upCostLvl && upCostLvl > 0) {
        ns.hacknet.upgradeLevel(bestIdx);
        ns.print(`Upgraded lvl on node-${bestIdx}`);
      }
      
      else if (lowestCost == upCostRam && plrMon > upCostRam && upCostRam > 0) {
        ns.hacknet.upgradeRam(bestIdx);
        ns.print(`Upgraded Ram on node-${bestIdx}`);
      }
      else if (lowestCost == newServ && plrMon > newServ && hackServs < maxHackServs) {
        ns.hacknet.purchaseNode();
        ns.print(`Purchased new node`);
      }
      else if(lowestCost == cacheUp && plrMon > cacheUp){
        ns.hacknet.upgradeCache(bestIdx);
        ns.print(`Purchased Cache on node-${bestIdx}`);
      }
      if (lowestCost <= 0 && upgraded.findIndex(s => s === hserv) != -1) {
        upgraded.push(bestIdx);
      }
    if (upgraded.length >= maxHackServs) {
      runnin = false;
      ns.alert("Servers upgraded to desired Everything");
    }
    await ns.sleep(1000);
  }
}
