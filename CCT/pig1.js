import {tester} from "CCT/tester.js";

/** @param {Array} data
 *  @param {NS} ns
 */
export function pig1(data, ns){
  let answer = 0;
  let numbers = []
	for (let i = 0; i < data[0]; i++) {
		numbers.push([]);
		for (let j = 0; j < data[1]; j++) {
			numbers[numbers.length - 1].push(1);
			if (i > 0 && j != 0) {
				numbers[i][j] = numbers[i - 1][j] + numbers[i][j - 1];
			}
		}
	}
	answer = numbers[data[0] - 1][data[1] - 1];
  return answer;
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
    if (info.type == "Unique Paths in a Grid I") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Unique Paths in a Grid I");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = pig1(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}