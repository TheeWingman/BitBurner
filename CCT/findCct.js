import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export function findCct(ns) {
  const contracts = [];
  const servers = module.list_servers(ns).concat(['home']);
  for (const serv of servers) {
    let list = ns.ls(serv, ".cct");
    for (const i of list) {
      let cct = i;
      contracts.push({ serv, cct });
    }
  }
  return contracts;
}
export async function main(ns) {
  ns.tprint(findCct(ns));
}