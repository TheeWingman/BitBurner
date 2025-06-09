import { tester } from "CCT/tester.js";

/** @param {Array} data
 * @param {NS} nd
 */
export function ast1(data, ns) {
  let answer = 0;
  for(let bDays=0; bDays<data.length; bDays++){
    for(let sDays=bDays+1; sDays< data.length; sDays++){
      answer = Math.max(answer, (data[sDays] - data[bDays]));
    }
  }
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
    if (info.type == "Algorithmic Stock Trader I") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Algorithmic Stock Trader I");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = ast1(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}