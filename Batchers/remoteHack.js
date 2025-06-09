/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	let timeHack = ns.args[1];
  await ns.hack(target, {additionalMsec: timeHack});
}