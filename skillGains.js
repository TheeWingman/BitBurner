/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  let plr = ns.getPlayer();
  let gyms = [];
  let l = ns.enums.LocationName;
  gyms.push(l.AevumCrushFitnessGym);
  gyms.push(l.AevumSnapFitnessGym);
  gyms.push(l.Sector12IronGym);
  gyms.push(l.Sector12PowerhouseGym);
  gyms.push(l.VolhavenMilleniumFitnessGym);
  for (const gym of gyms) {
    let str = ns.formulas.work.gymGains(plr, "str", gym);
    let def = ns.formulas.work.gymGains(plr, "def", gym);
    let dex = ns.formulas.work.gymGains(plr, "dex", gym);
    let agi = ns.formulas.work.gymGains(plr, "agi", gym);
    ns.print(`
    Gym: ${gym}
    Str: ${str.strExp.toFixed(2)}
    Def: ${def.defExp.toFixed(2)}
    Dex: ${dex.dexExp.toFixed(2)}
    Agi: ${agi.agiExp.toFixed(2)}`);
  }
}