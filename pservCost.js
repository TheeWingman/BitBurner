/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail()
  ns.print(ns.getPurchasedServerCost(ns.args[0]))
}