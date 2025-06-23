/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];
  let ans = null
  if(ns.args.find(a => a == "skip" || a == true) != undefined) ans = true
  if (ns.fileExists(target)) {
    ans = ans == null ? await ns.prompt("Are you sure you want to wipe this file?", { type: "boolean" }) : ans = ans;
    if (ans) {
      ns.clear(target);
      if (target.includes(".js")) {
        ns.write(target, "/** @param {NS} ns */\nexport async function main(ns) {\n  \n}", "w")
        ns.tprint("File wiped to new JS state");
      }
      else {
        ns.tprint("File wiped to blank state")
      }
    }
    else { ns.tprint("File ((NOT)) wiped"); }
  }
}