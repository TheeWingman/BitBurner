/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  let nodes = ns.hacknet.numNodes();
  for(let i = 0; i < nodes; i++){
    ns.print(`Hacknet server ${i} has ${ns.formatRam(ns.hacknet.getNodeStats(i).ram)}`)
  }
}