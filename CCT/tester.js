/** @param {NS} ns */
export function tester(ns, type) {
  let contract = ns.codingcontract.createDummyContract(type);
  let contractInfo = ns.codingcontract.getContract(contract);
  return {contract, contractInfo};
}
export async function main(ns){
  ns.tprint(tester(ns,ns.args[0]))
}