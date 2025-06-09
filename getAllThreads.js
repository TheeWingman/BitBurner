import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export default function getAllThreads(ns){
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
  const script = ns.args[0];
  const argus = ns.args[1];
  let totalThread=0;
  for(const server of servers){
    for(const pst of ns.ps(server)){
      if(pst.filename == script && pst.args == argus){
        totalThread = totalThread + pst.threads;
      }
    }
  }
  return totalThread;
}
export async function main(ns) {
  const scpt = ns.args[0];
  const rgu = ns.args[1];
  const totals = getAllThreads(ns);
  ns.tprint(`Total # of threads running for ${scpt}|${rgu}: ${totals}`);
}