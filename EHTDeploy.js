/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];
  //await ns.prompt("Hostname?", {type:"text"});
  const maxRam = ns.getServerMaxRam(target);
  let maxThreads = Math.round(maxRam/2.45);
  if((maxThreads*2.45)>maxRam){
    --maxThreads;
  }
  ns.scp("early-hack-template.js", target);
  ns.exec("early-hack-template.js", target, maxThreads);
}