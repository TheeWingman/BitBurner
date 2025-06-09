/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.atExit(ns.ui.closeTail);
  ns.disableLog('ALL');
  ns.enableLog('hacknet.upgradeCore');
  ns.enableLog('hacknet.upgradeRam');
  ns.enableLog('hacknet.upgradeLevel');
  let nodes = [];
  let coreMaxed = false;
  let ramMaxed = false;
  let lvlMaxed = false;
  let maxed = false;
  if (ns.hacknet.numNodes < 1) { ns.hacknet.purchaseNode(); }
  for (let i = 0; i < ns.hacknet.numNodes(); i++) {
    nodes.push(ns.hacknet.getNodeStats(i));
  }
  while (!maxed) {
    ns.clearLog();
    let node = 0
    let coreCost = ns.hacknet.getCoreUpgradeCost(node);
    let ramCost = ns.hacknet.getRamUpgradeCost(node);
    let lvlCost = ns.hacknet.getLevelUpgradeCost(node);
    ns.print(`
      Nodes: ${nodes.at(node)}
      Core Cost: ${coreCost}
      Ram Cost: ${ramCost}
      Lvl Cost: ${lvlCost}
      
      Core: ${coreMaxed}
      Ram: ${ramMaxed}
      Lvl: ${lvlMaxed}
      Maxed: ${maxed}`);
    if (coreCost != Infinity) {
      if (ns.getServerMoneyAvailable("home") >= coreCost) {
        while (coreCost != Infinity & ns.getServerMoneyAvailable("home") >= coreCost) {
          ns.hacknet.upgradeCore(node);
          await ns.sleep(20);
        }
        coreMaxed = true;
      }
    }
    else { coreMaxed = true; }
    if (ramCost != Infinity) {
      if (ns.getServerMoneyAvailable("home") >= ramCost) {
        while (ramCost != Infinity & ns.getServerMoneyAvailable("home") >= ramCost) {
          ns.hacknet.upgradeRam(node);
          await ns.sleep(20);
        }
        ramMaxed = true;
      }
    }
    else { ramMaxed = true; }
    if (lvlCost != Infinity) {
      if (ns.getServerMoneyAvailable("home") >= lvlCost) {
        while (lvlCost != Infinity && ns.getServerMoneyAvailable("home") >= lvlCost) {
          ns.hacknet.upgradeLevel(node);
          await ns.sleep(20);
        }
        lvlMaxed = true;
      }
    }
    else { lvlMaxed = true; }
    await ns.sleep(1000);
    if (coreMaxed && ramMaxed && lvlMaxed) {
      maxed = true;
    }
  }
  ns.alert("Hacknet node maxed out");
}