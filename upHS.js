/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  ns.ui.openTail();
  //ns.atExit(ns.ui.closeTail);
  let maxHackServs = ns.hacknet.maxNumNodes();
  let running = true;
  while (running) {
    //ns.clearLog();
    let hackServs = ns.hacknet.numNodes();
    let lowestCost = [null, Infinity, null, 1];
    let plrMon = ns.getServerMoneyAvailable("home");
    let currHash = ns.hacknet.numHashes();
    let maxHash = ns.hacknet.hashCapacity();
    let plr = ns.getPlayer();

    if (hackServs <= 0) { ns.hacknet.purchaseNode(); }

    for (let h = 0; h < hackServs; h++) {
      let hS = ns.hacknet.getNodeStats(h)

      //ns.print(ns.formatNumber(ns.formulas.hacknetServers.coreUpgradeCost(hS.cores,11,plr.mults.hacknet_node_core_cost)))
      let coreCost = [ns.hacknet.getCoreUpgradeCost(h), 1];
      coreLoop: for (let i = 1; i < Infinity; i++) {
        //ns.print(`Core: [${ns.formatNumber(coreCost[0])}, ${coreCost[1]}]`)
        if (plrMon < coreCost[0]) {
          coreCost = [ns.formulas.hacknetServers.coreUpgradeCost(hS.cores, i - 2, plr.mults.hacknet_node_core_cost), i - 2];
          break coreLoop;
        }
        else {
          coreCost = [ns.formulas.hacknetServers.coreUpgradeCost(hS.cores, i, plr.mults.hacknet_node_core_cost), i];
        }
      }
      let ramCost = [ns.hacknet.getRamUpgradeCost(h), 1];
      ramLoop: for (let i = 1; i < Infinity; i++) {
        if (plrMon < ramCost[0]) {
          ramCost = [ns.formulas.hacknetServers.ramUpgradeCost(hS.ram, i - 2, plr.mults.hacknet_node_ram_cost), i - 2]
          break ramLoop;
        }
        else {
          ramCost = [ns.formulas.hacknetServers.ramUpgradeCost(hS.ram, i, plr.mults.hacknet_node_ram_cost), i];
        }
      }
      let lvlCost = [ns.hacknet.getLevelUpgradeCost(h), 1];
      lvlLoop: for (let i = 1; i < Infinity; i++) {
        if (plrMon < lvlCost[0]) {
          lvlCost = [ns.formulas.hacknetServers.levelUpgradeCost(hS.level, i - 2, plr.mults.hacknet_node_level_cost), i - 2];
          break lvlLoop;
        }
        else {
          lvlCost = [ns.formulas.hacknetServers.levelUpgradeCost(hS.level, i, plr.mults.hacknet_node_level_cost), i];
        }
      }
      let cacheCost = [ns.hacknet.getCacheUpgradeCost(h), 1];
      cacheLoop: for (let i = 1; i < Infinity; i++) {
        if (plrMon < cacheCost[0]) {
          cacheCost = [ns.formulas.hacknetServers.cacheUpgradeCost(hS.cache, i - 2), i - 2]
          break cacheLoop;
        }
        else {
          cacheCost = [ns.formulas.hacknetServers.cacheUpgradeCost(hS.cache, i), i];
        }
      }
      let purchCost = [ns.hacknet.getPurchaseNodeCost(), 1];
      purchLoop: for (let i = 1; i < Infinity; i++) {
        if (plrMon < purchCost[0]) {
          purchCost = [ns.formulas.hacknetServers.hacknetServerCost(hackServs + i - 2, plr.mults.hacknet_node_purchase_cost), i - 2];
          break purchLoop;
        }
        else {
          purchCost = [ns.formulas.hacknetServers.hacknetServerCost(hackServs + i, plr.mults.hacknet_node_purchase_cost), i];
        }

      }
      let min = Infinity;
      if (coreCost[0] > 0) { min = Math.min(min, coreCost[0]); }
      if (ramCost[0] > 0) { min = Math.min(min, ramCost[0]) }
      if (lvlCost[0] > 0) { min = Math.min(min, lvlCost[0]) }
      if (purchCost[0] > 0 && purchCost[1] > 0) { min = Math.min(min, purchCost[0]) }
      if (currHash == maxHash) { min = Math.min(min, cacheCost[0]) }
      //ns.print(`\nMin: ${min}`);
      let lowOnSrv = "";
      let lowMax = null;
      ns.print(`\nCore: ${coreCost}`);
      ns.print(`\nRam: ${ramCost}`);
      ns.print(`\nLevel: ${lvlCost}`);
      ns.print(`\nCache: ${cacheCost}`);
      ns.print(`\nPurch: ${purchCost}`);
      if (min == coreCost[0]) { lowOnSrv = "Core"; lowMax = coreCost[1]; }

      else if (min == ramCost[0]) { lowOnSrv = "Ram"; lowMax = ramCost[1] }
      else if (min == lvlCost[0]) { lowOnSrv = "Level"; lowMax = lvlCost[1]; }
      else if (min == cacheCost[0]) { lowOnSrv = "Cache"; lowMax = cacheCost[1]; }
      else if (min == purchCost[0]) { lowOnSrv = "New Server"; lowMax = purchCost[1]; }
      /*else {
        min = Infinity;
        if (coreCost[0] > 0) { min = Math.min(min, coreCost[0]); }
        if (ramCost[0] > 0) { min = Math.min(min, ramCost[0]) }
        if (lvlCost[0] > 0) { min = Math.min(min, lvlCost[0]) }
        if (currHash == maxHash) { min = Math.min(min, cacheCost[0]) }

        if (min == coreCost[0]) { lowOnSrv = "Core"; lowMax = coreCost[1]; }
        else if (min == ramCost[0]) { lowOnSrv = "Ram"; lowMax = ramCost[1] }
        else if (min == lvlCost[0]) { lowOnSrv = "Level"; lowMax = lvlCost[1]; }
        else if (min == cacheCost[0]) { lowOnSrv = "Cache"; lowMax = cacheCost[1]; }
      }*/

      if (min < lowestCost[1]) {
        lowestCost = [lowOnSrv, min, h, lowMax];
      }
    }
    ns.print(`\nMy $: ${ns.formatNumber(plrMon)}`);
    ns.print(`[${lowestCost[0]}, ${ns.formatNumber(lowestCost[1])}, ${lowestCost[2]}, ${lowestCost[3]}]`);
    let lowName = lowestCost[0];
    let lowIdx = lowestCost[2];
    let lowMon = lowestCost[1];
    let lowQty = lowestCost[3];

    if (plrMon >= lowMon) {
      if (lowName == "Core") {
        ns.hacknet.upgradeCore(lowIdx, lowQty);
      }
      else if (lowName == "Ram") {
        ns.hacknet.upgradeRam(lowIdx, lowQty);
      }
      else if (lowName == "Level") {
        ns.hacknet.upgradeLevel(lowIdx, lowQty);
      }
      else if (lowName == "Cache") {
        ns.hacknet.upgradeCache(lowIdx, lowQty);
      }
      else if (lowName == "New Server") {
        for (let i = 0; i < lowQty; i++) {
          await ns.hacknet.purchaseNode();
        }
      }
      if (lowName == null) {
        ns.print(`\nNo Upgrades Available`);
      }
      else {
        ns.print(`\nPurchased ${lowName}, ${lowQty} times on Hacknet Server ${lowIdx} for ${ns.formatNumber(lowMon)}`);
      }
    }
    if (lowMon == -1 && hackServs == maxHackServs) {
      return ns.alert("Hacknet Servers Maxed Out");
    }
    await ns.sleep(10000);
  }
}