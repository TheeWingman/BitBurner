import { list_servers } from "/bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	ns.ui.openTail();
	ns.ui.moveTail(300, 1300);
	let srvrs = null;
	const tgt = ns.args[0];
	let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(m => ns.getServerMaxRam(m) > 4);
	let needsWG = false;
	let noHS = false;
	let noPserv = false;
	if (ns.args.includes("noHS")) {
		noHS = true;
	}
	if (ns.args.includes("noPserv")) {
		noPserv = true;
	}


	try {
		let tgtSec = ns.getServerSecurityLevel(tgt);
		let tgtMinSec = ns.getServerMinSecurityLevel(tgt);
		let tgtMon = ns.getServerMoneyAvailable(tgt);
		let tgtMonMax = ns.getServerMaxMoney(tgt);
		if (srvrs == null) {
			srvrs = servers;
			while (true) {
				srvrs = list_servers(ns).filter(s => ns.hasRootAccess(s));
				for (const srv of srvrs) {
					ns.scp("/Batchers/remoteHack.js", srv, "home");
					ns.scp("/Batchers/remoteWeak.js", srv, "home");
					ns.scp("/Batchers/remoteGrow.js", srv, "home");
					//ns.scp("repBoost.js", srv, "home");
				}
				tgtSec = ns.getServerSecurityLevel(tgt);
				tgtMon = ns.getServerMoneyAvailable(tgt);
				if (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
					needsWG = true;
				}
				else { needsWG = false;}
				if (needsWG) {
					//while (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
					srvrs = list_servers(ns).filter(s => ns.hasRootAccess(s));
					for (const srv of srvrs) {
						if (noHS && srv.includes("hacknet")) { }
						else if (noPserv && srv.includes("pserv-")) { }
						else {
							ns.print(`Ran pregame on ${srv}`);
							ns.run("/Batchers/pregame.js", 1, tgt, srv);
							ns.ui.renderTail();
							await ns.sleep(20);
							}
						}
						ns.print("Waiting on Max $ & Min Sec");
						ns.print(`$${ns.formatNumber(tgtMon)}/${ns.formatNumber(tgtMonMax)} | ${tgtSec.toFixed(3)}/${tgtMinSec.toFixed(3)}`);
						ns.print(ns.tFormat(ns.getWeakenTime(tgt)));
						await ns.sleep(ns.getWeakenTime(tgt) + 100);
						tgtMon = ns.getServerMoneyAvailable(tgt);
						tgtSec = ns.getServerSecurityLevel(tgt);
					}
					//ns.print("Done with pregame.js");
				//}
				else if (!needsWG) {
					let loopCt = 0;
					ns.clearLog();
					loopCt++;
					for (const srv of srvrs) {
						if (noHS && srv.includes("hacknet")) { }
						else if (noPserv && srv.includes("pserv-")) { }
						else {
							ns.print(`Ran remoteDeploy on ${srv}`);
							ns.run("/Batchers/1Thread/remoteDeploy.js", 1, tgt, srv);
							ns.ui.renderTail();
							await ns.sleep(20);
						}
					}
					ns.print(`Looped ${loopCt} Times`);
					await ns.sleep(ns.getWeakenTime(tgt) + 100);
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