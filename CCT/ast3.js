import {tester} from "CCT/tester.js";
/*export function ast2(data) {
  const input = data;
  let highest = input.at(0);
  let lowest = input.at(0);
  let dayHigh = 0;
  let dayLow = 0;
  let ans = 0;
  const noBuy = [];
  const noSell = [];
  for (let day = 0; day < input.length; day++) {
    if (input.at(day) > highest) {
      highest = input.at(day);
      dayHigh = day;
    }
    if (input.at(day) < lowest) {
      lowest = input.at(day);
      dayLow = day;
    }
  }
  while (ans = 0) {
    if (dayLow < dayHigh) {
      ans = highest - lowest;
    }
    if (dayLow > dayHigh) {
      noBuy.push(lowest);
      lowest = highest;
      dayLow = 0;
      for (let day = 0; day < input.length; day++) {
        if (input.at(day) < lowest && noBuy.findIndex(s => s == input.at(day)) != -1) {
          lowest = input.at(day);
          dayLow = day;
        }
      }
    }
  }
  for(let i = 0; i < input.length; i++){
    if(dayHigh > dayLow){
      if(ans != Math.max(ans, (highest-lowest))){
      ans = highest - lowest;
      }
      else {
        dayHigh = 0;
      }
    }
    if(dayHigh < dayLow){
      noSell.push(highest);
      highest = lowest;
      dayHigh = 0;
      for(let day = 0; day < input.length; day++){
        if(input.at(day) > highest && noSell.findIndex(s => s == input.at(day)) != -1){
          highest = input.at(day);
          dayHigh = day;
        }
      }
    }
  }
  return ans;
}*/

/** @param {Array} data
 *  @param {NS} ns
 */
export function ast3(data, ns){
  let answer = 0;
  let fstBest = 0;
  let sndBest = 0;
  for(let bDay = 0; bDay < data.length-1; bDay++){
    for(let sDay = bDay+1; sDay < data.length; sDay++){
      //if(Math.max(fstBest, data[sDay] - data[bDay]) != fstBest){
        fstBest = data[sDay]-data[bDay];
        //bestIdx = [bDay, sDay];
      //}
      for(let bDay2 = sDay+1; bDay2 < data.length-1; bDay2++){
        for(let sDay2 = bDay2+1; sDay2 < data.length; sDay2++){
          sndBest = Math.max(sndBest, data[sDay2] - data[bDay2]);
        }
      }
      answer= Math.max(answer, fstBest + sndBest);
      //ns.print(`Total Best: ${answer}`);
      fstBest = 0;
      sndBest = 0;
    }
  }
  /*ns.print(`1st Best: ${fstBest}`);
  ns.print(`Index of buy & sell: ${bestIdx}`);
  for(let bDay = 0; bDay<bestIdx[0]; bDay++){
    for(let sDay = bDay+1; sDay<bestIdx[0]; sDay++){
      sndBest= Math.max(sndBest, data[sDay] - data[bDay]);
      sndIdx = [bDay, sDay];
    }
  }
  for(let bDay = bestIdx[1]+1; bDay < data.length; bDay++){
    for(let sDay = bDay+1; sDay < data.length; sDay++){
      sndBest = Math.max(sndBest, data[sDay] - data[bDay]);
      sndIdx = [bDay, sDay];
    }
  }
  ns.print(`2nd Best: ${sndBest}`);
  ns.print(`Index of buy & sell: ${sndIdx}`);
  answer = fstBest + sndBest;*/
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
    if (info.type == "Algorithmic Stock Trader III") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Algorithmic Stock Trader III");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = ast3(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}