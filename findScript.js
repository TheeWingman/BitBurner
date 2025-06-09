import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  const searchName = ns.args[0];
  const searchArgs = ns.args[1];
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
  for(const server of servers){
    if(ns.isRunning(searchName,server,searchArgs)){
      ns.tprint(server);
    }
  }
}