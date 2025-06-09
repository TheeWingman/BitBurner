/*As a rule of thumb, your hacking target should be the svr with highest max money that's required hacking level is under 1/2 of your hacking level.*/

export function myScan(ns, parent, server, list) {
  const children = ns.scan(server);
  for (let child of children) {
    if (parent == child) {
      continue;
    }
    list.push(child);
        
    myScan(ns, server, child, list);
    }
}

export function list_servers(ns) {
  const list = [];
  myScan(ns, '', 'home', list);
  return list;
}

/** @param {NS} ns */
export async function main(ns) {
  const pickMe= bestHack(ns);
  ns.tprint(`The best server to hack is: ${pickMe}`)
  }
  

export default function bestHack(ns){
  const servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
  const plrHack = ns.getHackingLevel();
  let maxMon = 0
  let bestSvr = ""
  for(const server of servers) {
     const money = ns.getServerMaxMoney(server);
     const lvl = ns.getServerRequiredHackingLevel(server);
       
     if((lvl*2) <= plrHack && money > maxMon){
       maxMon = money;
       bestSvr = server;
     }
  }
  return bestSvr;
}