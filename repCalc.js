/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  ns.clearLog();
  const favorRep = await ns.prompt(`What do you want to calculate?\nY: Favor Gain based on rep  |  N: Rep to desired Favor`)
  if(!favorRep){
    ns.print(`${ns.formatNumber(ns.formulas.reputation.calculateFavorToRep(await ns.prompt("How much Favor?", {type: "text"})))} Rep needed to reach desired favor`);
  }
  else {
    ns.print(`Rep required for ${ns.formatNumber(ns.formulas.reputation.calculateRepToFavor(await ns.prompt("How much Rep?", {type: "text"})))} Favor`);
  }
}