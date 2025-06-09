import { tester } from "CCT/tester.js";

/** @param {Array} data */
export function overlap(data, ns) {
  let input = data;

  // Sort intervals based on start values
    input.sort((a, b) => a[0] - b[0]);

    const res = [];
    res.push(input[0]);

    for (let i = 1; i < input.length; i++) {
        const last = res[res.length - 1];
        const curr = input[i];

        // If current interval overlaps with the last merged
        // interval, merge them 
        if (curr[0] <= last[1]) 
            last[1] = Math.max(last[1], curr[1]);
        else 
            res.push(curr);
    }
    //ns.print(res);
    return res;
}

/** @param {NS} ns */
export async function main(ns) {
  //ns.ui.openTail();
  ns.disableLog('ALL');

  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Merge Overlapping Intervals") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Merge Overlapping Intervals");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = overlap(contractData, ns);
  ns.print(`${contractInfo}\n\n`);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(overlap(contractData, ns), contractName));
}