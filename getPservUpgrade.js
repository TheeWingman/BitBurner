/** @param {NS} ns */
export async function main(ns) {
  const server = "pserv-"+ns.args[0];
  const upRam = ns.args[1];
  const upCost = ns.formatNumber(ns.getPurchasedServerUpgradeCost(server,upRam));
  if(ns.args[0] == null || ns.args[1] == null || ns.args[0] == 'help'){
    ns.tprint("Enter pserv number as arg 1 and RAM amt as arg 2");
  }
  ns.tprint(`${server} to ${(ns.formatRam(upRam))} costs $${upCost}`)
}