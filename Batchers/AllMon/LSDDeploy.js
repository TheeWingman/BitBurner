import { list_servers } from "/bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	//ns.ui.openTail();
	ns.ui.moveTail(300, 1300);
	let srvrs = ns.args[1];
	const tgt = ns.args[0];
	let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(m => ns.getServerMaxRam(m) > 4);
	let needsWG = false;


	try {
		let tgtSec = ns.getServerSecurityLevel(tgt);
		let tgtMinSec = ns.getServerMinSecurityLevel(tgt);
		let tgtMon = ns.getServerMoneyAvailable(tgt);
		let tgtMonMax = ns.getServerMaxMoney(tgt);
		if (srvrs == null) {
			srvrs = servers;
			for (const srv of srvrs) {
				ns.scp("/Batchers/remoteHack.js", srv, "home");
				ns.scp("/Batchers/remoteWeak.js", srv, "home");
				ns.scp("/Batchers/remoteGrow.js", srv, "home");
				ns.scp("repBoost.js", srv, "home");
			}
			while (true) {
				tgtSec = ns.getServerSecurityLevel(tgt);
				tgtMon = ns.getServerMoneyAvailable(tgt);
				if (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
					needsWG = true;
				}
				if (needsWG) {
					while (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
						for (const srv of srvrs) {
							ns.print(`Ran pregame on ${srv}`);
							ns.run("/Batchers/pregame.js", 1, tgt, srv);
						}
						ns.print("Waiting on Max $ & Min Sec");
						ns.print(`$${ns.formatNumber(tgtMon)}/${ns.formatNumber(tgtMonMax)} | ${tgtSec.toFixed(3)}/${tgtMinSec.toFixed(3)}`);
						ns.print(ns.tFormat(ns.getWeakenTime(tgt)));
						await ns.sleep(ns.getWeakenTime(tgt) + 100);
						tgtMon = ns.getServerMoneyAvailable(tgt);
						tgtSec = ns.getServerSecurityLevel(tgt);
					}
					needsWG = false;
					ns.print("Done with pregame.js");
				}
				if(!needsWG){
					let loopCt = 0;
					ns.clearLog();
					loopCt++;
					for (const srv of srvrs) {
						//if (ns.getRunningScript("repBoost.js", srv)) {
						ns.print(`Ran LSD on ${srv}`);
						ns.run("/Batchers/AllMon/LSD.js", 1, tgt, srv);
						//}
						/*else {
							ns.print(`Ran LSD on ${srv} WITH repBoost.js`);
							ns.run("LSD.js", 1, tgt, srv, true);
						}*/
						//await ns.sleep(50);
					}
					ns.print(`Looped ${loopCt} Times`);
					//await ns.sleep(ns.getWeakenTime(tgt)+100);
				}
			}
		}
		else if (tgt == null) {
			ns.tprint("Must enter Target as arg");
			return;
		}
	} catch (err) {
		ns.tprint(err);
	}
}