/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  //ns.ui.moveTail(710, 820);
  //ns.ui.resizeTail(265, 110);
  ns.ui.setTailTitle("timeRep.js");
  ns.disableLog('ALL');
  /*ns.atExit(() => {
    ns.ui.closeTail()
    ns.alert("Reached desired Rep")
  });*/
  let doc = globalThis['document']
  let facWork = doc.querySelectorAll("[class*=reputation]")
  //let currRepObj = facWork.item(0).innerHTML
  let currRep = 0
  /*if (currRepObj.at(currRepObj.length - 1) == "k") {
    currRep = Number(currRepObj.slice(0, currRepObj.length - 1)) * 1000
  }
  else if (currRepObj.at(currRepObj.length - 1) == "m") {
    currRep = Number(currRepObj.slice(0, currRepObj.length - 1)) * 1000000
  }*/
  let endRep = Infinity

  while (currRep < endRep) {
    ns.ui.resizeTail(320,110)
    ns.ui.moveTail(655,800)
    let repGainObj = facWork.item(1).innerHTML.split(" ", 1).at(0)
    let repGain = null

    if (ns.args.includes(",")) {
      let repArr = ns.args[0].split(",");
      //ns.tprint(repArr);
      let repString = "";
      for (const num of repArr) { repString += num; }
      endRep = Number(repString);
    }
    else { endRep = ns.args[0] != null ? ns.args[0] : 2500000; }
    let work = ns.singularity.getCurrentWork()
    //ns.print(work.type)
    if(work.type == "FACTION"){
    currRep = ns.singularity.getFactionRep(work.factionName)
    }
    else if(work.type == "COMPANY"){
      currRep = ns.singularity.getCompanyRep(work.companyName)
    }

    ns.clearLog()
    repGain = Number(repGainObj) / 1000

    let repNeeded = endRep - currRep
    let timeRep = repNeeded / repGain
    /*ns.print(`currRep: ${currRepObj}`)
    ns.print(`repGain: ${repGain}`)
    ns.print(`repNeeded: ${repNeeded}`)
    ns.print(`timeRep: ${timeRep}`)*/
    ns.print(`\n—— Curr Rep: ${ns.formatNumber(currRep)} | ${repGainObj}/s\n—— ${ns.tFormat(timeRep)} until reaching ${ns.formatNumber(endRep)} Rep`)

    //ns.print(facWork)
    /*ns.print(currRepObj)
    ns.print(currRep)
    ns.print(repGainObj)
    ns.print(repGain)*/
    ns.ui.renderTail()
    currRep += (repGain * 10)
    await ns.sleep(10)
  }
  ns.ui.closeTail()
  ns.alert("Reached desired Rep")
}