/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];

  if(ns.fileExists(target)){
    let ans= await ns.prompt("Are you sure you want to wipe this file?",{type:"boolean"});
    if(ans){
      ns.clear(target);
      ns.write(target, "/** @param {NS} ns */\nexport async function main(ns) {\n\n}","w")
      ns.tprint("File wiped to new JS state");
    }
    else{ns.tprint("File ((NOT)) wiped");}
  }
}