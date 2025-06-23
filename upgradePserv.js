/** @param {NS} ns */
export async function main(ns) {
  //let doc = globalThis['document']
  /*let ov = doc.querySelector('div.react-draggable')
  let rightOfWin = Math.ceil(doc.querySelector('body').getBoundingClientRect().width)
  let sideOfOv = Math.ceil(ov.getBoundingClientRect().width)
  //ov.computedStyleMap().get("transform").toString().split(",").filter(a => a.includes("px")).at(0).split("(").at(1).slice(0, length-2)
  /*let pt = ""
  let widthOV = ov.attributes
  for(const a of widthOV){pt +=`\n${a}`}
  ns.tprint(pt)*/

  ns.disableLog('ALL');
  ns.ui.openTail();
  //ns.atExit(ns.ui.closeTail);
  const pservs = ns.getPurchasedServers();
  let upRAM = 0;
  let maxUpRAM = 0;
  if (ns.args.includes(",")) {
    let upRAMArr = ns.args[0].split(",");
    ns.tprint(upRAMArr);
    let upRAMString = "";
    for (const num of upRAMArr) { upRAMString += num; }
    maxUpRAM = Number(upRAMString);
  }
  else { maxUpRAM = ns.args[0]; }
  let keepRunning = false;
  let noUp = false;
  if (maxUpRAM == undefined) {
    keepRunning = true;
    noUp = true;
  }
  let runnin = true;
  let upgraded = [];
  while (runnin) {
    let doc = globalThis['document']
    let rightOfWin = Math.ceil(doc.querySelector('body').getBoundingClientRect().width)
    let sideOfOv = Math.ceil(doc.querySelector('div.react-draggable').getBoundingClientRect().width)
    ns.ui.moveTail((rightOfWin - sideOfOv - 450), 1050)
    ns.ui.resizeTail(450, 450)
    ns.clearLog();
    for (const pserv of pservs) {
      let maxRam = ns.getServerMaxRam(pserv);
      if (noUp) {
        upRAM = Math.min(Math.pow(2, (Math.log2(maxRam) + 1)), Math.pow(2, 20));
      }
      else {
        upRAM = Math.min(Math.pow(2, (Math.log2(maxRam) + 1)), maxUpRAM);
      }
      let upCost = ns.getPurchasedServerUpgradeCost(pserv, upRAM);
      let plrMon = ns.getServerMoneyAvailable("home");
      if (maxRam == Math.pow(2, 20)) {
        if (upgraded.findIndex(i => i == pserv) == -1) {
          upgraded.push(pserv);
        }
      }
      if (plrMon > upCost && maxRam < upRAM) {
        /*let pst = ns.ps(pserv);
        let currentArg = "";
        if(pst.length > 0){
        currentArg = pst.at(0).args.toString();
        }
        ns.killall(pserv);*/
        ns.upgradePurchasedServer(pserv, upRAM);
        /*if(currentArg != ""){
        ns.exec("LSD.js", "home",1, currentArg, pserv);
        }*/
        upCost = -1;
      }
      if (upCost <= 0) {
        ns.print(pserv + " to " + ns.formatRam(upRAM) + " Cost: Purchased");
      }
      if (upCost > 0) {
        ns.print(pserv + " to " + ns.formatRam(upRAM) + " Cost: " + ns.formatNumber(upCost));
      }
      if (maxRam >= upRAM && !keepRunning) {
        if (upgraded.findIndex(i => i == pserv) == -1) {
          upgraded.push(pserv);
        }
      }
    }
    /*ns.print(upgraded.length);
    ns.print(pservs.length);
    ns.print(upgraded);*/
    if (upgraded.length >= pservs.length) {
      runnin = false;
      ns.ui.closeTail()
      ns.alert("Servers upgraded to desired Ram");
    }
    await ns.sleep(5000);
  }
}