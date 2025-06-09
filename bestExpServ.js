function sortArrayByTwoFields(arr, field1, field2) {
  arr.sort((a, b) => {
    if (a[field1] < b[field1]) return -1;
    if (a[field1] > b[field1]) return 1;
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
  ns.disableLog('ALL');
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  const fullSvrs = [];
  const sortedSvrs = [];
  for(const server of servers){
    fullSvrs.push(ns.getServer(server));
  }
  for(const i of fullSvrs){
    let name = i.hostname;
    let minSec = i.minDifficulty;
    let expPerT = ns.formulas.hacking.hackExp(i,ns.getPlayer());
    let temp = ns.getServer(name);
    temp.hackDifficulty = temp.minDifficulty;
    let xpMin = expPerT*(60000/ns.formulas.hacking.weakenTime(temp,ns.getPlayer()));
    sortedSvrs.push({name, minSec, xpMin});
  }
  sortArrayByTwoFields(sortedSvrs, 'xpMin','minSec');
  for(const server of sortedSvrs){
    const plr = ns.getPlayer();
    let temp = ns.getServer(server.name);
    temp.hackDifficulty = temp.minDifficulty;
    if(Math.floor(ns.formulas.hacking.weakenTime(temp,plr) <= 150000) && temp.moneyMax > 0){
      ns.print(`Name: ${server.name} | Sec: ${server.minSec} | Exp/Min: ${ns.formatNumber(server.xpMin)}`);
      //ns.print("");
    }
  }
}
