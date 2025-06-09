import { tester } from "CCT/tester.js";

export function arrJmpGm(data) {
  let ans = 0;
  const input = data;
  const quest = input.length -1;

  function findPoss(startIndex, numJumps) {
    for (let i = 1; i <= numJumps; i++) {
      if (i + startIndex == quest) {
        ans = 1;
        return;
      }
      findPoss(startIndex + i, input[startIndex + i]);
    }
  }
  findPoss(0, input[0]);
  return ans;
}

/*export function aJG2(data) {
  let answer = 0;
  let arrAns = [];
  const input = data;
  const quest = input.length;

  function findJump(startIndex, numJumps) {
    for (let i = 1; i <= numJumps; i++) {
      if (i + startIndex == quest) {
        answer = 1;//arrAns.push(jumpCtr);
        return;
      }
      if (i == numJumps) {
        return;
      }
      //console.log(`Start: ${startIndex} | Poss: ${numJumps} | Jumps: ${jumpCtr}`);
      findJump(startIndex + i, input[startIndex + i]);
    }
  }

  findJump(0, input[0]);
  /*for(const a of arrAns){
    answer = Math.max(answer, a);
  }
  return answer;
}*/

  /** @param {NS} ns */
  export async function main(ns) {
    ns.ui.openTail();
    ns.disableLog('ALL');
    //ns.enableLog('arrJmpGm');
    const list = ns.ls("home", ".cct");
    let contractName = "";
    let contractInfo = "";
    let contractData = [];

    for (const i of list) {
      let info = ns.codingcontract.getContract(i);
      if (info.type == "Array Jumping Game") {
        contractName = i;
        contractInfo = info.description;
        contractData = info.data;
      }
    }
    if (contractName == "") {
      const contract = tester(ns, "Array Jumping Game");
      contractName = contract.contract;
      contractInfo = contract.contractInfo.description;
      contractData = contract.contractInfo.data;
    }
    //ns.print(contractInfo);
    ns.print(contractData);
    const correct = (arrJmpGm(contractData));
    ns.print(correct);
    ns.alert(ns.codingcontract.attempt(correct, contractName));
  }