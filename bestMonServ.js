function sortArrayByTwoFields(arr, field1, field2) {
  arr.sort((a, b) => {
    if (b[field1] < a[field1]) return -1;
    if (b[field1] > a[field1]) return 1;
    if (a[field2] < b[field2]) return -1;
    if (a[field2] > b[field2]) return 1;
    return 0;
  });
  return arr;
}
import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog(`ALL`);
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  const fullSvrs = [];
  const sortedSvrs = [];
  for(const server of servers){
    fullSvrs.push(ns.getServer(server));
  }
  sortArrayByTwoFields(fullSvrs,'moneyMax','minDifficulty');
  for(const i of fullSvrs){
    let name = i.hostname;
    let minSec = i.minDifficulty;
    let maxMoney = i.moneyMax;
    i.hackDifficulty=i.minDifficulty;
    i.moneyAvailable = i.moneyMax;
    let monCycle = (ns.hackAnalyze(i.hostname)* maxMoney)*(1000/ns.formulas.hacking.weakenTime(i,ns.getPlayer()));//Money per Thread per WeakTime@MinSec
    sortedSvrs.push({name, minSec, monCycle});
  }
  sortedSvrs.sort((a,b) => a.monCycle - b.monCycle);
  for(const server of sortedSvrs){
    const temp = ns.getServer(server.name);
    temp.hackDifficulty = temp.minDifficulty;
    if(ns.formulas.hacking.weakenTime(temp,ns.getPlayer()) <= 150000 && ns.getServerMaxMoney(server.name) > 0 && ns.hackAnalyzeChance(server.name) > .98){
      ns.print(`Name: ${server.name} | Sec: ${server.minSec} | $: ${ns.formatNumber(server.monCycle)} Thread/Sec @ MinSec\nWeaken Time @ MinSec: ${ns.tFormat(ns.formulas.hacking.weakenTime(temp,ns.getPlayer()))}
      `);
      //ns.print("");
    }
  }
}
