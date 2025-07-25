import { list_servers } from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  if (ns.args.includes("killEnd")) {
    ns.atExit(() =>
      ns.run("killOnAll.js", 1, "sameOrRemoteAIO.js")
    );
  }
  let prevServs = [];
  let frstLoop = true;
  while (true) {
    ns.clearLog();
    let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(r => ns.getServerMaxRam(r) > 4).filter(h => !h.includes("hacknet"));
    for (const s of servers) {
      let free = ns.getServerMaxRam(s) - ns.getServerUsedRam(s);
      let soraRam = ns.getScriptRam("sameOrRemoteAIO.js");
      if (!frstLoop && prevServs.findIndex(a => a == s) == -1) {
        ns.run("killEverything.js");
      }
      ns.scp("sameOrRemoteAIO.js", s, "home");
      if (!ns.scriptRunning("sameOrRemoteAIO.js", s) && free > soraRam) {
        ns.exec("sameOrRemoteAIO.js", s, 1, ns.args[0]);
        prevServs.push(s);
      }
    }
    frstLoop = false;
    await ns.sleep(1000);
  }
}