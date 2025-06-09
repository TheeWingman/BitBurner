/** @param {NS} ns */
export async function main(ns) {
  ns.scriptKill("gui/process-list.js","home");
  ns.run("moveOV.js");
  await ns.sleep(10000);
  ns.run("gui/process-list.js");
}