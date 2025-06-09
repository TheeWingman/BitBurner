/** @param {NS} ns */
export async function main(ns) {
  let servers = ns.getPurchasedServers();
  let i=0;
  for(const serv of servers){
    let newName="pserver-"+i;
    ns.renamePurchasedServer(serv,newName);
    ++i;
  }
  i=0;
  servers = ns.getPurchasedServers();
  for(const serv of servers){
    let newerName = "pserv-"+i;
    ns.renamePurchasedServer(serv,newerName);
    ++i;
  }
}