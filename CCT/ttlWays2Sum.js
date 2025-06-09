import { tester } from "CCT/tester.js";

/** @param {NS} ns */
export function possibleSums(data) {
let answer = [1].concat((new Array(data + 1)).fill(0));
	for (let i = 1; i < data; i++) {
		for (let j = i; j <= data; j++) {
			answer[j] += answer[j - i];
		}
	}
	return answer[data];
}

/**@param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');

  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Total Ways to Sum") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Total Ways to Sum");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }

  const answer = possibleSums(contractData);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}