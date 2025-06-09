import {tester} from "CCT/tester.js";
/** @param {String} data */
export function rleCompress(data){
  const input = data;
  let currChar = "";
  let numCurr = 0;
  let final = "";
  for(let index = 0; index < input.length; index++){
    if(input.charAt(index) !== currChar && index != 0){
      final += `${numCurr}${currChar}`;
      currChar = input.charAt(index);
      numCurr=0;
    }
    if(index == 0){
      currChar = input.charAt(0);
      numCurr=0;
    }
    if(input.charAt(index) === currChar){
      numCurr++;
    }
    if(numCurr === 10){
      final += `9${currChar}`;
      numCurr=1;
    }
    if(index === input.length -1){
      final += `${numCurr}${currChar}`;
    }
  }
  return final;
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
    if (info.type == "Compression I: RLE Compression") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Compression I: RLE Compression");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  ns.print(contractInfo);
  ns.print(`${contractData}\n`);
  const ans = rleCompress(contractData);
  ns.print(ans);
  ns.alert(ns.codingcontract.attempt(ans, contractName));
}