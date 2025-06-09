import bestHack from "bestHackSvr2.js"
/** @param {NS} ns */
export async function main(ns) {
  const best= bestHack(ns);
  const pservs= ns.getPurchasedServers();

  for(const pserv of pservs){
    ns.killall(pserv);
    let maxRam= ns.getServerMaxRam(pserv);
    let threads= Math.round(maxRam/2.4);
    if(threads*2.4 >= maxRam){--threads;}
    ns.scp("remoteAIO.js",pserv,"home");
    ns.exec("remoteAIO.js",pserv,threads,best);
  }
}