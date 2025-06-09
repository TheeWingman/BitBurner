import {list_servers} from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  const servers = list_servers(ns).filter(a => !a.includes("hacknet")).filter(b => !b.includes("pserv")).filter(c => c != "home").filter(d => d != "darkweb");
  //ns.tprint(servers);
  ns.tprint(servers.length);
}