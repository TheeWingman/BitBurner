import {findCct} from "CCT/findCct.js";
/** @param {NS} ns */
export function allCct(ns) {
  const contracts = findCct(ns);
  const contractsInfo = [];
  for(const c of contracts){
    let contServ = c.serv;
    let contName = c.cct;
    let contInfo = ns.codingcontract.getContract(c.cct, c.serv);
    contractsInfo.push({contServ, contName, contInfo});
  }
  return contractsInfo;
}
/** @param {NS} ns */
export async function main(ns){
  ns.ui.openTail();
  ns.disableLog('ALL');
  const contractsInfo = allCct(ns);
  for(const c of contractsInfo){
    ns.print(c.contInfo.type)
    ns.print(c.contInfo.description);
    ns.print("");
  }
    /*if(c.contInfo.type == "Total Ways to Sum"){
      ns.print(c);
    }*/
}