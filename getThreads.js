/** @param {NS} ns */
export async function main(ns) {
  const script = ns.args[0];
  const server = ns.args[1];
  if(!script || !server){
    ns.tprint("You must specify a script then a server as args");
    ns.tprint("I.e: run getThreads.js exp.js home");
    return;
  }
  const scriptRam= ns.getScriptRam(script,"home");
  const serverMax = ns.getServerMaxRam(server);
  const serverUsed = ns.getServerUsedRam(server);
  const serverFree = serverMax-serverUsed;
  const threads= (serverFree/scriptRam).toFixed(0);
  ns.tprint("The max amt of threads is: "+threads);
}