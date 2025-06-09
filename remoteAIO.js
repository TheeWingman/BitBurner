/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];

  const moneyThresh = ns.getServerMaxMoney(target);
  const securityThresh = ns.getServerMinSecurityLevel(target);

  while(true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      await ns.grow(target);
    } else {
      await ns.hack(target);
    }
  }
}