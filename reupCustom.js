import * as module from "bestHackSvr2.js";
export async function main(ns){
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  for(const server of servers){
    if(ns.getServerMaxRam(server)>0){
      ns.killall(server);
      ns.exec("remoteBH.js","home",1,ns.args[0],server);
    }
  }
}