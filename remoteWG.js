/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];
  const minSec = ns.getServerMinSecurityLevel(target);

  while(true){
    if(ns.getServerSecurityLevel(target) != minSec){
      await ns.weaken(target);
    }
    else{await ns.grow(target);}
 }
}