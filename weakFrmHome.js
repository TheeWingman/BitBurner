/** @param {NS} ns */
export async function main(ns) {
  const target = await ns.prompt("Target?", {type:"text"});
  const maxRam = ns.getServerMaxRam(target);
  let maxThreads = Math.round(maxRam/1.8);
  if(maxThreads*1.8 > maxRam)
    --maxThreads;
  while(true){
    await ns.weaken(target,maxThreads);
  }
}