/** @param {NS} ns */
export async function main(ns) {
  ns.run("hashOV.js");
  ns.run("SphyxOS/full/IPvGo.js");
  ns.run("wait2Break.js");
  ns.run("hashSpend.js",1,"Sell for Money");
  await ns.sleep(1000);
  //ns.run("Batchers/1Thread/Manager.js", 1, "foodnstuff", "noHS");
  ns.run("SoRADeploy.js",1,"n00dles");
  //ns.run("upHS.js");
  ns.run("purchase-server-16gb.js");
  /*let ctr = 0;
  while(ns.getServerMoneyAvailable("home") < 1000000000 && !ns.stock.hasWSEAccount() && !ns.stock.hasTIXAPIAccess()){
    if(ctr % 3600000 === 0){
      ns.alert("Buy Stock Acct and TIX API if able\n Will alert again in 1 hour otherwise");
    }
    ctr += 1000;
    await ns.sleep(1000);
  }
  ns.run("SphyxOS/full/mystocks.js",1,"selffund","quiet");*/
}