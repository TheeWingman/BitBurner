import * as calc from "calcBestSrv.js";
import * as bstSrv from "bestHackSvr2.js";

export async function main(ns) {
  let bestServers = calc.default(ns);
  const servers = bstSrv.list_servers(ns).filter(s => ns.hasRootAccess(s));
  let totalThreads = 0;

  while(true){
  //for(let a = 0; a < bestServers.length; ++a){
    let i = bestServers.at(0);
    let growT=i.growT;
    let weakT=i.weakenT;
    let threadWeak = 0;
    let threadGrow = 0;
    let threadHack = 0;
    let hackScript = ns.getScriptRam("remoteHack.js","home");
    let growScript = ns.getScriptRam("remoteGrow.js","home");
    let weakScript = ns.getScriptRam("remoteWeak.js","home");
    let hackT = ns.hackAnalyzeThreads(i.name,ns.getServerMaxMoney(i.name));
    ns.tprint(growT);
    ns.tprint(weakT);
    for(const server of servers){
      let used = ns.getServerUsedRam(server);
      let max = ns.getServerMaxRam(server);
      //totalThreads = totalThreads + (max/growScript);
      /*if(a == 0){
        ns.killall(server);
        await ns.sleep(1000);
      }*/
      ns.tprint(`growT: ${growT}`);
      ns.tprint(`weakT: ${weakT}`);
      ns.tprint(`threadWeak: ${threadWeak}`);
      ns.tprint(`threadGrow: ${threadGrow}`);
      //ns.tprint(`totalThreads; ${totalThreads}`);
      ns.tprint("");
      ns.scp("remoteHack.js",server,"home");
      ns.scp("remoteWeak.js",server,"home");
      ns.scp("remoteGrow.js",server,"home");
      
      if(used < (max-weakScript)){
        //Deploy max amt of weak threads until weakT is 0
        if(weakT > 0){
          threadWeak = Math.floor((max/weakScript)).toFixed(0);
          if(threadWeak > weakT){
            ns.exec("remoteWeak.js",server,weakT,bestServers.at(0).name);
            //totalThreads = totalThreads+weakT;
            weakT = 0;
          }
          else{
            ns.exec("remoteWeak.js",server,threadWeak, bestServers.at(0).name);
            //totalThreads = totalThreads + threadWeak;
            weakT = weakT-threadWeak;
          }
        }
        //Then deploy max amt of grow threads until growT is 0
        if(growT > 0 && weakT <= 0){
          threadGrow = Math.floor((max/growScript)).toFixed(0);
          if(threadGrow > growT){
            ns.exec("remoteGrow.js",server,growT, bestServers.at(0).name);
            //totalThreads = totalThreads + growT;
            growT = 0;
          }
          else{
            ns.exec("remoteGrow.js",server,threadGrow, bestServers.at(0).name);
            //totalThreads = totalThreads + threadGrow;
            growT = growT-threadGrow;
          }
        }
        //then deploy remaining threads to hack
        if(weakT <= 0 && growT <= 0 && hackT > 0){
          threadHack = Math.floor((max/hackScript)).toFixed(0);
          if(threadHack > hackT){
            ns.exec("remoteHack.js",server,hackT,bestServers.at(0).name );
            //totalThreads = totalThreads + hackT;
            hackT=0;
          }
          else{
            ns.exec("remoteHack.js",server,threadHack, bestServers.at(0).name);
            //totalThreads = totalThreads + threadHack;
            hackT = hackT-threadHack;
          }
        }
      }
    }
  //}
 /* if(totalThreads > 0){
    ns.exec("weak2EHT.js","home",1,"joesguns");
  }*/
  await ns.sleep((ns.getWeakenTime(i.name)+60000));
}
}