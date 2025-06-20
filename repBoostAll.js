import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  /*ns.ui.openTail();
  ns.disableLog('ALL');
  ns.enableLog('exec');*/
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s));
  for(const server of servers){
    ns.scp("repBoost.js",server,"home");
    if(ns.scriptRunning("repBoost.js",server)){
    ns.scriptKill("repBoost.js",server);
    }
  }
  const rbRam = ns.getScriptRam("repBoost.js","home");
  for(const server of servers){
    const used = ns.getServerUsedRam(server);
    let max = ns.getServerMaxRam(server);
    if(server.includes("pserv-") && ns.args.includes("noPserv")){
      max = 0;
    }
    if(server.includes("hacknet-") && ns.args.includes("noHS")){
      max = 0;
    }
    const free = max-used;
    let thread = Math.floor(free/rbRam);
    /*ns.print(thread);
    thread = thread.toFixed(0);*/
    if((thread*rbRam) >= free){
      thread--;
    }
    /*ns.print(`
    Threads: ${thread}
    Server: ${server}
    Is Pserv: ${RegExp(/pserv/).test(server)}`);*/
    if(thread > 0 && server != "home"){
      //ns.print(thread);
      ns.exec("repBoost.js",server,thread);
    }
  }
}