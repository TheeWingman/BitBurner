import { tester } from "CCT/tester.js";

/** @param {Array} data
 *  @param {NS} ns
 */
export function pig2(data, ns) {
  let answer = 0;
  let numbers = [];
  let rightBlock = false;
  let downBlock = false;
  for (let i = 0; i < data.length; i++) {
    numbers.push([]);
    for (let j = 0; j < data[i].length; j++) {
      if (!j + 1 >= data[i].length && data[i][j + 1] == 1) {
        rightBlock = true;
      }
      if (!i + 1 >= data.length && data[i + 1][j] == 1) {
        downBlock = true;
      }
      if(!rightBlock || !downBlock){
        numbers[numbers.length - 1].push(1);
      }
      if (i > 0 && j != 0) {
          numbers[i][j] = numbers[i - 1][j] + numbers[i][j - 1];
      }
    }
  }
  answer = numbers[data.length -1][data[0].length-1];
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
    if (info.type == "Unique Paths in a Grid II") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Unique Paths in a Grid II");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = pig2(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  //ns.alert(ns.codingcontract.attempt(answer, contractName));
}