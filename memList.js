import * as util from "SphyxOS/util.js";

/** @param {NS} ns */
export async function main(ns) {
  ns.clearLog();
  ns.ui.openTail();
  ns.disableLog('ALL');

  const scripts = await util.proxy(ns, "ls", "home", ".js");
  let allScript = "";
  let scriptList = [];

  for (const script of scripts) {
    if (script.includes("SphyxOS")) { continue; }
    let scriptMem = await util.doGetScriptRam(ns, script);
    scriptList.push({ script, scriptMem });
  }

  scriptList.sort((a, b) => a.scriptMem - b.scriptMem);

  let doOnce = true;
  for (const script of scriptList) {
    if (doOnce && script.scriptMem >= 8) {
      allScript += `\n
          ---------- TOO HIGH ----------
          VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\n`;
      doOnce = false;
    }
    allScript += `\n       ${script.script}: ${ns.formatRam(script.scriptMem)}`;
  }

  ns.print(allScript);
}