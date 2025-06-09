/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  const types = ns.codingcontract.getContractTypes();
  for(const type of types){
    ns.print(type);
  }
}