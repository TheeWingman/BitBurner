import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
  for(const server of servers){
    ns.scriptKill(ns.args[0],server);
  }
}