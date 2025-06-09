/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  while (true) {
    let exp = ns.formatNumber(ns.getTotalScriptExpGain(), 2);
    ns.clearLog();
    ns.print("Doesnt work with batchers!");
    ns.print(exp + " XP/Sec");
    ns.ui.renderTail();
    await ns.sleep(20);
  }
}