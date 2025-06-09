import { tester } from "CCT/tester.js";

/** @param {Array} data */
export function spiral(data, ns) {
  let answer = [];
  let mat = data;
  let matR = mat.length;
  let matC = mat[0].length;
  let used = [];

  let startRowDown = 1;
  let startColRight = 0;
  let endRowDown = matR;
  let endColRight = matC;
  let startRowUp = matR-1;
  let startColLeft = matC-1;
  let endRowUp = 1;
  let endColLeft = 0;

  let r = 0;
  let c = 0;

  let finish = [Math.ceil(matR/2), Math.ceil(matC/2)];

  breaker: while (true) {
    for(c = startColRight; c < endColRight; c++){
      answer.push(mat[r][c]);
      used.push([r,c]);
    } startColRight++; endColRight--; c--; r++;
    /*ns.print(`r: ${r} | c: ${c}`);
    ns.print(answer);
    ns.print(used);*/
    
    if(used.find(rC => rC[0] == r && rC[1] == c) != undefined){ break breaker; } 
    
    for(r = startRowDown; r < endRowDown; r++){
      answer.push(mat[r][c]);
      used.push([r,c]);
    } startRowDown++; endRowDown--; r--; c--;
    /*ns.print(`r: ${r} | c: ${c}`);
    ns.print(answer);
    ns.print(used);
    ns.print(used.find(rC => rC[0] == r && rC[1] == c));*/
    
    if(used.find(rC => rC[0] == r && rC[1] == c) != undefined){ break breaker; } 

    for(c = startColLeft - 1; c >= endColLeft; c--){
      answer.push(mat[r][c]);
      used.push([r,c]);
    } startColLeft--; endColLeft++; c++; r--;
    /*ns.print(`r: ${r} | c: ${c}`);
    ns.print(answer);
    ns.print(used);*/
    
    if(used.find(rC => rC[0] == r && rC[1] == c) != undefined){ break breaker; } 

    for(r = startRowUp - 1; r >= endRowUp; r--){
      answer.push(mat[r][c]);
      used.push([r,c]);
    } startRowUp--; endRowUp++; r++; c++;
    /*ns.print(`r: ${r} | c: ${c}`);
    ns.print(answer);
    ns.print(used);*/

    if(used.find(i => i[0] == r && i[1] == c) != undefined){
      break breaker;
    } 

    if(c > matC || r > matR || c < 0 || r < 0){
      break breaker;
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
    if (info.type == "Spiralize Matrix") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Spiralize Matrix");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = spiral(contractData, ns);
  ns.print(contractInfo);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}