/** @param {NS} ns */
export async function main(ns) {
  const host = ns.args[0];
  await ns.weaken(host);
}