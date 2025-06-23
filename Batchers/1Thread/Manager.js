import { list_servers } from "/bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	ns.ui.openTail();
	const tgt = ns.args[0]
	ns.ui.setTailTitle(`Batcher 1T ${tgt}`)
	//ns.ui.moveTail(300, 1300);
	let srvrs = [];
	//let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(m => ns.getServerMaxRam(m) > 4);
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
	if (ns.args.includes("justPserv") && !ns.args.includes("noPserv")) {
		justPserv = true
	}
	else if(ns.args.includes("justPserv") && ns.args.includes("noPserv")){
		ns.alert("You can't do noPserv and justPserv")
		ns.exit()
	}



	try {
		let tgtSec = ns.getServerSecurityLevel(tgt);
		let tgtMinSec = ns.getServerMinSecurityLevel(tgt);
		let tgtMon = ns.getServerMoneyAvailable(tgt);
		let tgtMonMax = ns.getServerMaxMoney(tgt);
		let monHack = ns.formulas.hacking.hackPercent(ns.getServer(tgt), ns.getPlayer()) * tgtMonMax
		if (srvrs.length <= 0) {
			let loopCt = 0
			while (true) {
				let servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(r => ns.getServerMaxRam(r) > 4);
				let batchers = ns.ps("home").filter(a => a.filename.includes("Manager.js"))
				ns.ui.resizeTail(320, 110)
				if (batchers.length > 1) {
					ns.ui.moveTail(333, 935, batchers.at(1).pid)
					ns.ui.moveTail(655, 935, batchers.at(0).pid)
				}
				else {
					ns.ui.moveTail(655, 935)
				}
				let timeHack = Math.ceil(ns.formulas.hacking.weakenTime(ns.getServer(tgt), ns.getPlayer()))
				let hackCt = []
				let monPerLoop = 0

				if (justPserv) {
					srvrs = servers.filter(a => a.includes("pserv-"))
				}
				else if (noHS && noPserv) {
					srvrs = servers.filter(a => !a.includes("hacknet")).filter(b => !b.includes("pserv-"))
				}
				else if (noPserv) {
					srvrs = servers.filter(a => !a.includes("pserv-"))
				}
				else if (noHS){
					srvrs = servers.filter(a => !a.includes("hacknet"))
				}
				else {
					srvrs = servers
				}
				
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
				else { needsWG = false; }
				if (needsWG) {
					//while (tgtSec > tgtMinSec || tgtMon < tgtMonMax) {
					if (!ns.scriptRunning("Batchers/ctdnHackRdy.js", "home")) {
						ns.run("Batchers/ctdnHackRdy.js", 1, tgt)
					}
					loopCt = 0

					for (const srv of srvrs) {
						ns.print(`Ran pregame on ${srv}`);
						ns.run("/Batchers/pregame.js", 1, tgt, srv);
						ns.ui.renderTail();
						await ns.sleep(20);
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
					ns.clearLog();
					loopCt++;
					for (const srv of srvrs) {
						ns.print(`Ran remoteDeploy on ${srv}`);
						hackCt.push(ns.run("/Batchers/1Thread/remoteDeploy.js", 1, tgt, srv));
						ns.ui.renderTail();
						await ns.sleep(20);
					}
					ns.clearLog()
					//ns.print(`\nLooped ${loopCt} Times Without Issue`);

					hackCt.forEach(p => {
						let m = ns.readPort(p)
						if (m != "NULL PORT DATA") {
							//ns.print(m)
							monPerLoop += Number(m)
						}
					})
					//ns.print(`Hack Threads: ${monPerLoop}`)
					monPerLoop *= monHack
					while (timeHack > 0) {
						ns.clearLog()
						ns.print(timeHack)
						ns.print(`\n—— Looped ${loopCt} Times Without Issue\n—— ${ns.tFormat(timeHack)} until hack\n—— Will gain $${ns.formatNumber(monPerLoop)} This Loop`)
						timeHack -= 1000
						await ns.sleep(1000)
					}
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