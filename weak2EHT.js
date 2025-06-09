/** @param {NS} ns */
export async function main(ns) {
  /*Once NUKED, weaken to security min with 
  ONLY weaken script(s), once current sec 
  level == min level, kill weaken scripts 
  and run EHT script*/
  const flags = ns.flags([
        ['refreshrate', 200],
        ['help', false],
    ])
  const target = flags._[0];
  //const target= await ns.prompt("Target?",{type:"text"});
  if(flags._.length == 0){
    ns.tprint("Enter server as arg");
    return;}
  const maxRam= ns.getServerMaxRam(target);
  let currMon= true
  let maxWG= (maxRam/2.1).toFixed(0);
  let maxEHT= (maxRam/2.45).toFixed(0);

  const maxMoney = ns.getServerMaxMoney(target);
  ns.scp("weakGrow.js",target,"home");
  if(maxWG>0){
    ns.exec("weakGrow.js",target, maxWG);
  }

  while(currMon){
  if(ns.getServerMoneyAvailable(target) != maxMoney){
   await ns.sleep(1000);
  }
  else{currMon=false;}
  }

  ns.scriptKill("weakGrow.js",target);
  ns.scp("early-hack-template.js", target, "home");
  if(maxEHT>0){
    ns.exec("early-hack-template.js",target,maxEHT);
  }
}