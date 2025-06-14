import { list_servers } from "bestHackSvr2.js";
import * as util from "SphyxOS/util.js";

export function scriptsRun(ns, server) {
  const pst = ns.ps(server);
  let scripts = [];
  let isThere = false;
  let ctr = 1;
  if (pst != null) {
    for (const script of pst) {
      const name = script.filename;
      let argus = script.args;
      if (argus == "") {
        argus = "None";
      }
      for (const i of scripts) {
        if (name.toString() == i.name.toString()) {
          if (argus.toString() == i.argus.toString()) {
            i.ctr += 1;
            isThere = true;
            break;
          }
        }
      }
      if (isThere == false) {
        scripts.push({ name, argus, ctr });
      }
      else {
        isThere = false;
      }
    }
  }
  let scriptRet = "";
  for (const i of scripts) {
    scriptRet += ` | ${i.name}: ${i.argus}: ${i.ctr}`;
  }
  return scriptRet;
}
/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  const winSize = ns.ui.windowSize();
  ns.ui.resizeTail((winSize[0] - 250), (winSize[1] + 700));
  ns.ui.moveTail(250, 0);
  const servers = list_servers(ns).filter(s => ns.hasRootAccess(s));
  const serversGot = [];
  for (const server of servers) {
    if (!server.includes("hacknet")) {
      serversGot.push(await util.proxy(ns, "getServer", server));
    }
    else { serversGot.push(await util.proxy(ns, "hacknet.getNodeStats", server.split("r-")[1])); }
  }
  let scripts = ""
  let allData = "";
  ns.print("");
  for (const server of serversGot) {
    scripts = scriptsRun(ns, server.hostname);
    let ram = "";
    if (server.maxRam == undefined) {
      ram = server.ram;
      //used = server.ramUsed;  
    }
    else {
      ram = server.maxRam;
      //used = server.ramUsed;
    }

    if (server.hostname != undefined) {
      allData += `${server.hostname} | ${ns.formatRam(server.ramUsed)}/${ns.formatRam(ram)} | $${ns.formatNumber(server.moneyAvailable)}/${ns.formatNumber(server.moneyMax)} | Sec:${ns.formatNumber(server.hackDifficulty)}/${ns.formatNumber(server.minDifficulty)}${scripts}\n\n`;
    }
    else {
      allData += `${server.name} | ${ns.formatRam(server.ramUsed)}/${ns.formatRam(ram)} | $: ${ns.formatNumber(0)}/${ns.formatNumber(0)} | Sec: ${ns.formatNumber(0)}/${ns.formatNumber(0)}${scripts}\n\n`;
    }
  }
  ns.print(allData);
}