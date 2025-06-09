/** @param {NS} ns */
export async function main(ns) {
  const host= ns.getHostname();
  const minSec = ns.getServerMinSecurityLevel(host);
  while(true){
    if(ns.getServerSecurityLevel(host)>minSec){
      await ns.weaken(host);
    }
    else{
      await ns.grow(host);
    }
  }
}