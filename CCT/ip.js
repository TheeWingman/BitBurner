import {tester} from "CCT/tester.js";

/** @param {String} data
 * @param {NS} ns
 */
export function genIP(data, ns){

}

/** @param {NS} ns */
export async function main(ns) {
ns.ui.openTail();
  ns.disableLog('ALL');

  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Generate IP Addresses") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Generate IP Addresses");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = genIP(contractData, ns);
  ns.print(contractInfo);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}