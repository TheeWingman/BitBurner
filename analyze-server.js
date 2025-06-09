/** @param {NS} ns */
export async function main(ns) {
    const args = ns.flags([["help", false]]);
    const server = ns.args[0];
    if (args.help || !server) {
        ns.tprint("This script does a more detailed analysis of a server.");
        ns.tprint(`Usage: run ${ns.getScriptName()} SERVER`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()} n00dles`);
        return;
    }
    ns.disableLog('ALL');
    ns.ui.openTail();
    ns.ui.moveTail(300, 1200);
    ns.ui.resizeTail(400, 425);
    ns.atExit(ns.ui.closeTail);
    while (true) {
        ns.clearLog();
        let maxRam = ns.getServerMaxRam(server);
        let usedRam = ns.getServerUsedRam(server);
        let totalRam = usedRam / maxRam;
        let money = ns.getServerMoneyAvailable(server);
        let maxMoney = ns.getServerMaxMoney(server);
        let totalMoney = money / maxMoney;
        //if(totalMoney==NaN){totalMoney=0;}
        let minSec = ns.getServerMinSecurityLevel(server);
        let sec = ns.getServerSecurityLevel(server);
        ns.print(`


    

${server}:
    RAM        : ${usedRam.toFixed(2)} / ${maxRam.toFixed(2)} (${(totalRam * 100).toFixed(2)}%)
    $          : ${ns.formatNumber(money, 2)} / ${ns.formatNumber(maxMoney, 2)} (${(totalMoney * 100).toFixed(2)}%)
    security   : ${minSec.toFixed(2)} / ${sec.toFixed(2)}
    growth     : ${ns.getServerGrowth(server)}
    hack time  : ${ns.tFormat(ns.getHackTime(server))}
    grow time  : ${ns.tFormat(ns.getGrowTime(server))}
    weaken time: ${ns.tFormat(ns.getWeakenTime(server))}
    grow x2    : ${(ns.growthAnalyze(server, 2)).toFixed(2)} threads
    grow x3    : ${(ns.growthAnalyze(server, 3)).toFixed(2)} threads
    grow x4    : ${(ns.growthAnalyze(server, 4)).toFixed(2)} threads
    hack level : ${ns.getServerRequiredHackingLevel(server)}
    hack @ 1Thd: ${(ns.hackAnalyze(server) * 100).toFixed(2)}%
    hack 10%   : ${(.10 / ns.hackAnalyze(server)).toFixed(2)} threads
    hack 25%   : ${(.25 / ns.hackAnalyze(server)).toFixed(2)} threads
    hack 50%   : ${(.50 / ns.hackAnalyze(server)).toFixed(2)} threads
    hackChance : ${ns.formatPercent(ns.hackAnalyzeChance(server), 2)}
`);
        ns.ui.renderTail();
        await ns.sleep(100);
    }
}