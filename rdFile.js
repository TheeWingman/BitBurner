/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  JSON.stringify(ns.read("rdFile.js"));
}