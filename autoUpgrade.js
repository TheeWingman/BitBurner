/** @param {NS} ns */
export async function main(ns) {
    const pservs= ns.getPurchasedServers();
	while(ns.getServerMaxRam("pserv-24") < 8192){
		for (const pserv of pservs) {
			let expo = Math.log2(ns.getServerMaxRam(pserv));
			let upRAM = Math.pow(2,(expo+1));
			let upCost = ns.getPurchasedServerUpgradeCost(pserv, upRAM);
    		let plrMon = ns.getServerMoneyAvailable("home");
    		let maxRam = ns.getServerMaxRam(pserv);

				if(maxRam > 4096){
					continue;
				}
    		else if (plrMon > upCost && maxRam != upRAM) {
      		ns.killall(pserv);
      		ns.upgradePurchasedServer(pserv, upRAM);
      		ns.exec("pservReup.js","home");
        }
    }
		await ns.sleep(1000);
  }
}