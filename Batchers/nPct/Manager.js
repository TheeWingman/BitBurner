import { list_servers } from "/bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	ns.ui.openTail();
	ns.ui.moveTail(300, 1300);
	let srvrs = null;
	const pct = ns.args[0];
	const tgt = ns.args[1];
	let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(m => ns.getServerMaxRam(m) > 4);
	let needsWG = false;
	let noHS = false;
	let noPserv = false;
	let justPserv = false;
	if (ns.args.includes("noHS")) {
		noHS = true;
	}
	if (ns.args.includes("noPserv")) {
		noPserv = true;
	}
	if (ns.args.includes("justPserv") && !noPserv) {
		justPserv = true;
	}
	else if (ns.args.includes("justPserv") && noPserv) {
		ns.alert("Cant do noPserv and justPserv");
		ns.exit();
	}


	try {
		let loopCt = 0
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
				//ns.scp("repBoost.js", srv, "home");
			}
			while (true) {
				tgtSec = ns.getServerSecurityLevel(tgt);
				tgtMon = ns.getServerMoneyAvailable(tgt);
				if (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
					needsWG = true;
				}
				if (needsWG) {
					loopCt = 0
					while (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
						for (const srv of srvrs) {
							if (noHS && srv.includes("hacknet")) { }
							if (noPserv && srv.includes("pserv")) { }
							if (justPserv && !srv.includes("pserv")) { }
							else {
								ns.print(`Ran pregame on ${srv}`);
								ns.run("/Batchers/pregame.js", 1, tgt, srv);
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
					needsWG = false;
					//ns.print("Done with pregame.js");
				}
				if (!needsWG) {
					ns.clearLog();
					loopCt++;
					for (const srv of srvrs) {
						//ns.print(srv.includes("hacknet"))
						if (noHS && srv.includes("hacknet")) { continue; }
						else if (noPserv && srv.includes("pserv-")) { continue; }
						else if (justPserv && !srv.includes("pserv-")) { continue; }
						else {
							ns.print(`Ran remoteDeploy on ${srv}, hacking ${pct}%`);
							ns.run("/Batchers/nPct/remoteDeploy.js", 1, pct, tgt, srv);
							await ns.sleep(10);
							ns.ui.renderTail();
						}
					}
					//ns.print(`noHS: ${noHS}`);
					ns.print(`Looped ${loopCt} Times Without Issue`);
					await ns.sleep(ns.getWeakenTime(tgt)+10);
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