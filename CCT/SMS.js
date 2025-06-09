import { tester } from "CCT/tester.js";

/** @param {Array} data
 * @param {NS} ns
 */
export function sms(data, ns) {
  let input = data;
  let sums = [];
  let currMax = -999999;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    for (let b = i; b < input.length; b++) {
      sums.push(input.at(b));
    }
    for (let c = 0; c < sums.length; c++) {
      sum += Number(sums.at(c));
      if (sum > currMax) {
        currMax = sum;
      }
    }
    //ns.print(sum);
    //ns.print(sums);
    sums = [];
    sum = 0;
  }
  return currMax;
}
/*if (i == 0) {
  sum = (Number(input.at(i)) + Number(input.at(i + 1)));
  currMax = Number(input.at(i));
  //answer.push([currMax]);
  answer = currMax
  if (sum > currMax) {
    currMax = (Number(input.at(i)) + Number(input.at(i + 1)));
    //answer = [];
    //answer.push([input.at(i), input.at(i + 1)]);
    answer = currMax;
  }
}
else if (input.at(i + 1) == undefined) {
  sum = Number(input.at(i))
  if (sum > currMax){
    currMax = sum;
    //answer = [];
    //answer.push([input.at(i)]);
    answer = currMax;
  }
}
else {
  sum = (Number(input.at(i - 1)) + Number(input.at(i)) + Number(input.at(i + 1)));
  if(sum > currMax){
    //answer = [];
    currMax = sum;
    //answer.push([input.at(i-1), input.at(i), input.at(i+1)]);
    answer = currMax;
  }
  sum = (Number(input.at(i)) + Number(input.at(i + 1)));
  if(sum > currMax){
    //answer = [];
    currMax = sum;
    //answer.push([input.at(i), input.at(i+1)]);
    answer = currMax;
  }
  sum = Number(input.at(i));
  if(sum > currMax){
    //answer = [];
    currMax = sum;
    //answer.push([input.at(i)]);
    answer = currMax;
  }
}
}

return answer;
}*/

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
    if (info.type == "Subarray with Maximum Sum") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Subarray with Maximum Sum");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = sms(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}