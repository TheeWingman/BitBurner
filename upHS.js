/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  let maxHackServs = ns.hacknet.maxNumNodes();
  let running = true;
  while (running) {
    let hackServs = ns.hacknet.numNodes();
    let lowestCost = [null, Infinity, null];
    let plrMon = ns.getServerMoneyAvailable("home");
    let purchCost = ns.hacknet.getPurchaseNodeCost();
    let currHash = ns.hacknet.numHashes();
    let maxHash = ns.hacknet.hashCapacity();

    if(hackServs == 0){ ns.hacknet.purchaseNode(); }

    for (let h = 0; h < hackServs; h++) {
      let coreCost = ns.hacknet.getCoreUpgradeCost(h);
      let ramCost = ns.hacknet.getRamUpgradeCost(h);
      let lvlCost = ns.hacknet.getLevelUpgradeCost(h);
      let cacheCost = ns.hacknet.getCacheUpgradeCost(h);

      let min = Math.min(coreCost, ramCost, lvlCost, purchCost);
      if(currHash == maxHash){ min = Math.min(min, cacheCost); }
      let lowOnSrv = "";
      if(min == coreCost){ lowOnSrv = "Core"; }
      else if( min == ramCost){ lowOnSrv = "Ram"; }
      else if( min == lvlCost){ lowOnSrv = "Level"; }
      else if( min == cacheCost){ lowOnSrv = "Cache"; }
      else if( min == purchCost){ lowOnSrv = "Purchase"; }

      if(min < lowestCost[1]){
        lowestCost = [lowOnSrv, min, h];
      }
    }
    let lowName = lowestCost[0];
    let lowIdx = lowestCost[2];
    let lowMon = lowestCost[1];

    if(plrMon >= lowMon){
      if(lowName == "Core"){
        ns.hacknet.upgradeCore(lowIdx);
      }
      else if(lowName == "Ram"){
        ns.hacknet.upgradeRam(lowIdx);
      }
      else if(lowName == "Level"){
        ns.hacknet.upgradeLevel(lowIdx);
      }
      else if(lowName == "Cache"){
        ns.hacknet.upgradeCache(lowIdx);
      }
      else if(lowName == "Purchase"){
        ns.hacknet.purchaseNode();
      }
      ns.print(`\nPurchased ${lowName} on Hacknet Server ${lowIdx} for ${ns.formatNumber(lowMon)}`);
    }
    if(lowMon == -1 && hackServs == maxHackServs){
      return ns.alert("Hacknet Servers Maxed Out");
    }
    await ns.sleep(100);
  }
}