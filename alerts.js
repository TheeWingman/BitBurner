/** @param {NS} ns */
export async function main(ns) {
  const svr = ns.getServerRequiredHackingLevel("run4theh111z");
  const plrLvl = ns.getHackingLevel();
  let cantHack = true
  while(cantHack){
    if(svr <= plrLvl && ns.hasRootAccess("run4theh111z")){
    ns.alert("Server: Run4theh111z can be backdoor'd");
    cantHack = false;
    return;
    }
    await ns.sleep(60000);
  }
}