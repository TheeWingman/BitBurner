/** @param {NS} ns */
export async function main(ns) {
  const flags = ns.flags([
    ['refreshrate', 200],
    ['help', false],
  ])
  const target = flags._[0];

  if(ns.fileExists(target)){
    let ans= await ns.prompt("Are you sure you want to wipe this file?",{type:"boolean"});
    if(ans){
      ns.clear(target);
      ns.tprint("File wiped");
    }
    else{ns.tprint("File ((NOT)) wiped");}
  }
}