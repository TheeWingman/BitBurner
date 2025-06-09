function updateprogress(max_time, run_time) {
  let done = run_time > 0 ? Math.max(max_time / run_time, 1) : 0;
  let buffer = "[";
  if (done > 0){
    buffer = buffer.padEnd(Math.round(20 / done), "|");
  }
  if (done > 0){
    buffer += "*";
    buffer = buffer.padEnd(21, "-");
    buffer += "]";}
  return buffer;
}
/** @param {NS} ns */
export async function main(ns) {
  const tgtSrv = ns.args[0];
  const tgtScr = ns.args[1];
  const tgtArgs = ns.args[2];
  if(tgtSrv == null || tgtScr == null || tgtArgs ==null){
    ns.tprint("Must enter target server > target script > target args");
    return;
  }
  let toPrint= "";
  let notComp = true;
  let cmTime = 0;
  let currTime = 1;
  let currScr = "";
  let hgwScr = ""
  let scrLog = [];
  ns.ui.openTail();
  ns.ui.resizeTail(250,300);
  ns.ui.moveTail(0,1075);
  ns.disableLog('ALL');
  ns.atExit(ns.ui.closeTail);
  while(notComp){
    if(!ns.getRunningScript(tgtScr,tgtSrv,tgtArgs)){
      notComp = false;
    }
    ns.clearLog();
    scrLog = ns.getScriptLogs(tgtScr, tgtSrv, tgtArgs);
    currScr = scrLog.at((scrLog.length-1));
    //ns.print(currScr);
    if(scrLog.length>0){
    if(currScr.includes("weaken") && hgwScr != "Weaken"){
      cmTime = ns.getWeakenTime(tgtArgs);
      currTime = 0;
      hgwScr= "Weaken";
    }
    else if(currScr.includes("grow") && hgwScr != "Grow"){
      cmTime = ns.getGrowTime(tgtArgs);
      currTime = 1;
      hgwScr = "Grow";
    }
    else if(currScr.includes("hack") && hgwScr != "Hack"){
      cmTime = ns.getHackTime(tgtArgs);
      currTime = 1;
      hgwScr = "Hack";
    }
    ns.print('Script Run Time : Time to Complete');
    ns.print(ns.tFormat(currTime)+ " : "+ns.tFormat(cmTime));
    ns.print(`Current Script: ${hgwScr}`)
    toPrint = updateprogress(cmTime,currTime);
    ns.print(toPrint);
    currTime+=20;
    ns.ui.renderTail();
    await ns.sleep(20);
    }
  }
}