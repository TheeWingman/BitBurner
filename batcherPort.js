/** @param {NS} ns */
export async function main(ns) {
	const tgtSrv = ns.args[0];
  let timeWeak = ns.getWeakenTime(tgtSrv);
	let timeGrow = ns.getGrowTime(tgtSrv);
	let timeHack = ns.getHackTime(tgtSrv);
	let growWait = timeWeak-timeGrow;
	let hackWait = timeWeak-timeHack;

	ns.ui.openTail();
	ns.disableLog('ALL');
	ns.atExit(ns.ui.closeTail);
  while(true){
		ns.clearLog();
		timeWeak = ns.getWeakenTime(tgtSrv);
		timeGrow = ns.getGrowTime(tgtSrv);
		timeHack = ns.getHackTime(tgtSrv);
		ns.clearPort(1);
		ns.clearPort(2);
		growWait = Math.floor(timeWeak-timeGrow);
		hackWait = Math.floor(timeWeak-timeHack);
		ns.writePort(1,growWait);
		ns.writePort(2,hackWait);
		ns.print(`AddMsec Grow: ${ns.tFormat(growWait)}`);
		ns.print(`AddMsec Hack: ${ns.tFormat(hackWait)}`);
		ns.print(`Grow port: ${ns.tFormat(ns.peek(1))}`);
		ns.print(`Hack port; ${ns.tFormat(ns.peek(2))}`);
		await ns.sleep(1000);
	}
}