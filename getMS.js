/** @param {NS} ns */
export async function main(ns) {
  const host = "the-hub";
  const formHost = ns.getServer(host);
  const plr = ns.getPlayer();
  formHost.hackDifficulty = formHost.minDifficulty;
  formHost.moneyAvailable = formHost.moneyMax;
  ns.ui.openTail();
  ns.print("Grow: " + Math.floor(ns.getGrowTime(host)));
  ns.print("Hack: " + Math.floor(ns.getHackTime(host)));
  ns.print("Weak: " + Math.floor(ns.getWeakenTime(host)));
  ns.print("");
  ns.print("Form Grow: " + Math.floor(ns.formulas.hacking.growTime(formHost, plr)));
  ns.print("Form Hack: " + Math.floor(ns.formulas.hacking.hackTime(formHost, plr)));
  ns.print("Form Weak: " + Math.floor(ns.formulas.hacking.weakenTime(formHost, plr)));
}