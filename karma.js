/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  while (true) {
    ns.clearLog();
    ns.print(`Karma: ${ns.getPlayer().karma}`);
    ns.print(`Kills: ${ns.getPlayer().numPeopleKilled}`);
    await ns.sleep(20);
  }
}