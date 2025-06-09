/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];
  const port = ns.getServerNumPortsRequired(target);
  let port5 = false;
  if (ns.fileExists("SQLInject.exe", "home")) {
    port5 = true;
  }
  let port4 = false;
  if (ns.fileExists("HTTPWorm.exe", "home")) {
    port4 = true;
  }
  let port3 = false;
  if (ns.fileExists("relaySMTP.exe", "home")) {
    port3 = true;
  }
  let port2 = false;
  if (ns.fileExists("FTPCrack.exe", "home")) {
    port2 = true;
  }
  let port1 = false;
  if (ns.fileExists("BruteSSH.exe", "home")) {
    port1 = true;
  }

  try{
  if (port == 5 && port5 && port4 && port3 && port2 && port1) {
    ns.sqlinject(target);
    ns.httpworm(target);
    ns.relaysmtp(target);
    ns.ftpcrack(target);
    ns.brutessh(target);
    ns.nuke(target);
  }
  else if (port == 4 && port4 && port3 && port2 && port1) {
    ns.httpworm(target);
    ns.relaysmtp(target);
    ns.ftpcrack(target);
    ns.brutessh(target);
    ns.nuke(target);
  }
  else if (port == 3 && port3 && port2 && port1) {
    ns.relaysmtp(target);
    ns.ftpcrack(target);
    ns.brutessh(target);
    ns.nuke(target);
  }
  else if (port == 2 && port2 && port1) {
    ns.ftpcrack(target);
    ns.brutessh(target);
    ns.nuke(target);
  }
  else if (port == 1 && port1) {
    ns.brutessh(target);
    ns.nuke(target);
  }
  else if (port == 0 && ns.hasRootAccess(target) == false) {
    ns.nuke(target);
  }
  } catch(error){
    ns.tprint(error);
  }
}