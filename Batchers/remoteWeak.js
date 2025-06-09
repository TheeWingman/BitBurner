/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];
  let waitWeak = ns.args[1];
  if(waitWeak == null){
    waitWeak = 0;
  }
  await ns.weaken(target, {additionalMsec: waitWeak});
}