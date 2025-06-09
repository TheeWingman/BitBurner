/** @param {NS} ns */
export async function main(ns) {
  let host = ns.args[0];
  await ns.grow(host);
}