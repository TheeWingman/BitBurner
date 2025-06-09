/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
  const timeGrow = ns.args[1];
  await ns.grow(target, {additionalMsec: timeGrow});
}