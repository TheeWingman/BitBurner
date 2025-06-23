import { list_servers } from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  //ns.ui.openTail();
  ns.clearLog();
  ns.disableLog('ALL');
  //ns.enableLog('run');
  const servers = list_servers(ns).filter(s => !s.includes("hacknet")).filter(a => !a.includes("pserv")).filter(b => !b.includes("home"));
  servers.sort((a,b) => ns.getServerNumPortsRequired(a) - ns.getServerNumPortsRequired(b));
  let running = true;
  const broken = [];
  let loopCtr = 0;
  try {
    while (running) {
      ns.clearLog();
      loopCtr++;
      for (const server of servers) {
        let ports = ns.getServerNumPortsRequired(server);
        if (broken.findIndex(s => s === server) === -1) {
          if (ns.hasRootAccess(server)) {
            broken.push(server);
            ns.print(`Pushed ${server}`);
          }
          else {
            ns.print(`${server} | ${ports}`);
            ns.run("BnE.js", 1, server);
          }
        }
      }
      //ns.print(broken);
      ns.print(broken);
      ns.print(`Looped ${loopCtr} times`);
      if (broken.length >= 69) { running = false; }
      await ns.sleep(10000);
    }
    ns.alert("All servers nuked")
  } catch (error) {
    ns.tprint(error);
    ns.exit();
  }
}