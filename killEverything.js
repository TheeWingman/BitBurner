import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));//.concat(['home']);

  for(const server of servers){
    if(server == "home"){
      const psts = ns.ps("home");
      for(const pst of psts){
        if(pst.filename != "gui/process-list.js" && pst.filename != "startupDeploy.js" && pst.filename != "purchase-server-16gb.js" && pst.filename != "killEverything.js" && pst.filename != "analyze-server.js" && pst.filename != "karmaOV.js"){
          ns.kill(pst.pid);
        }
      }
    }
    else{ ns.killall(server); }

  }
}