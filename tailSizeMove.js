/** @param {NS} ns */
export async function main(ns) {
  let scrPid="";
  const pst = ns.ps("home");
  for(const list of pst){
    if(list.filename == "scrPrgBar.js"){
      scrPid = list.pid;
    }
  }
  //Test for full server list
  /*const winSize = ns.ui.windowSize();
  ns.ui.resizeTail((winSize.at(0)-250),(winSize.at(1)-200),scrPid);
  ns.ui.moveTail(250,0,scrPid);
  ns.tprint(ns.ui.windowSize());*/

  //Test for tail by term line
  //ns.ui.moveTail(500,1400,scrPid);

  //Wait 5 secs
  //await ns.sleep(5000);
  
  //Put tail back to original
  ns.ui.resizeTail(250,300,scrPid);
  ns.ui.moveTail(0,1075,scrPid);
}