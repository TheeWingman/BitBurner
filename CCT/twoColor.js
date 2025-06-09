import { tester } from "CCT/tester.js";

/** @param {NS} ns
 * @param {Array} data
 */
export function twoColor(data, ns) {
  let conns = [];
  let answer = [];
  for(let i=0; i<data[0]; i++){
    answer.push(null);
  }

  for (let a = 0; a < data[0]; a++) {
    conns.push([]);
    for (const i of data[1]) {
      if (i[0] == a) { conns[a].push(i[1]); }
      else if (i[1] == a) { conns[a].push(i[0]); }
      conns[a].sort((a,b) => a - b);
    }
  }
  for(let i=0; i<conns.length; i++){
    let cLn = conns[i].length;
    for(let prev=0; prev < cLn; prev++){
      for(let curr=prev+1; curr < cLn; curr++){
        if(conns[i][prev] == conns[i][curr]){
          conns[i].splice(prev,1);
          cLn -= 1;
        }
      }

    }
  }
  /*ns.print(answer);
  ns.print("Connections");
  for (let i = 0; i < conns.length; i++) {
    ns.print(`Point ${i}: ${conns.at(i)}`);
  }*/

  function color(node, prevNodeColor) {
    if (prevNodeColor == null) {
      answer[node] = 0;
    }
    if (prevNodeColor == 0) {
      answer[node] = 1;
    }
    else { answer[node] = 0; }

    for (let i = 0; i < conns[node].length; i++) {
      //ns.print(answer);
      /*if(answer.at(conns[node][i]) == prevNodeColor){
        answer=[];
        return;
      }*/
      if (answer.at(conns[node][i]) == null) {
        color(conns[node][i], answer[node]);
      }
    }
  }
  /*for (let i = 0; i < conns.length; i++) {
    if (conns[i].length == 1) {
      color(i);
      break;
    }
  }*/
  for(let i=0; i<answer.length; i++){
    if(answer[i] == null){
      color(i);
    }
  }
  //if (answer[0] == null) { color(0); }

  blankArr: for(let i = 0; i < answer.length; i++){
    for(let a=0; a < conns[i].length; a++){
      if(answer.at(i) == answer.at(conns[i][a])){
        //ns.print(`Connected Nodes have same Color`);
        answer = [];
        //ns.print(answer);
        return answer;
      }
    }
  }
  if(answer.findIndex(i => i == null) != -1){
    answer[answer.findIndex(i => i == null)] = 0;
  }
  // Determine if any have only 1 connection
  //If no points have only 1 connection, default to point 0
  return answer;
}

/** @param {NS} ns */
export async function main(ns) {
  //ns.ui.openTail();
  ns.disableLog('ALL');
  let failed = false;
  for(let a=0; a<20; a++){
  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Proper 2-Coloring of a Graph") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Proper 2-Coloring of a Graph");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const ans = twoColor(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(ans);
  if(ns.codingcontract.attempt(ans, contractName) == ""){
    failed = true;
    break;
  }
  }
  if(failed){
    ns.alert(`Test of 20 failed`);
  }
  else { ns.alert(`Test Successful`); }
}