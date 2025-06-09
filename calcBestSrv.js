import * as module from "bestHackSvr2.js";

export default function calcBest(ns) {
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  const bestServer= module.default(ns);
  const minSecServers=[];
  const growSort=[];
  const moneySort=[];
  const comboServers=[];
  const bestServers=[];
  const bestThreads=[];
  for(const server of servers){
    let temp = ns.getServer(server);
    let plrLvl = ns.getHackingLevel()/2;
    let tempHL = ns.getServerRequiredHackingLevel(server);
    let tempMM = ns.getServerMaxMoney(server);
    temp.hackDifficulty=temp.minDifficulty;
    temp.moneyAvailable = 0;
    if(!temp.hostname.includes("pserv-")){
      if(tempHL <= plrLvl && tempMM!=0){
        minSecServers.push(temp);
      }
    }
  }
  //minSecServers.sort((a,b) => a.hackDifficulty - b.hackDifficulty);
  for(const server of minSecServers){
    let tempName = server.hostname;
    let tempTime = (ns.getGrowTime(server.hostname));
    let tempMoney = (server.moneyMax);
    growSort.push({tempName,tempTime});
    moneySort.push({tempName,tempMoney});
  }
  growSort.sort((a,b) => a.tempTime - b.tempTime);
  moneySort.sort((a,b) => a.tempMoney - b.tempMoney);
  for(let i=0; i < moneySort.length; ++i){
    let name= growSort[i].tempName;
    let time= ns.tFormat(growSort[i].tempTime);
    let money= ns.formatNumber(moneySort[i].tempMoney);
    comboServers.push({name, time, money});
  }
  bestServers.sort((a,b) => a.time - b.time);
  for(let i=0; i < comboServers.length; ++i){
    //ns.tprint(bestServers.at(i).name);
    if(comboServers.at(i).name == bestServer){
      let pos= i;
      bestServers.push(comboServers.at(pos));
      --pos;
      bestServers.push(comboServers.at(pos));
      --pos;
      bestServers.push(comboServers.at(pos));
    }
  }
  for(const thread of bestServers){
    let serv= ns.getServer(thread.name);
    let growT=ns.formulas.hacking.growThreads(serv,ns.getPlayer(),serv.moneyMax);
    let weakenT=ns.formatNumber((ns.growthAnalyzeSecurity(growT,serv.name) / 0.05),0);
    let name= thread.name;
    let timeToGrow= thread.time;
    bestThreads.push({name,timeToGrow,growT,weakenT});
  }
  return bestThreads;
}

export async function main(ns){
  const all= calcBest(ns);
  for(const a of all){
    ns.tprint(a);
  }
}