/** @param {NS} ns */
export async function main(ns) {
    ns.ui.openTail();
    ns.disableLog('ALL');
   const unis = ["Rothman University","ZB Institute of Technology","Summit University"];
    for(const uni of unis){
        ns.print(uni);
        ns.print(ns.formulas.work.universityGains(ns.getPlayer(),"Leadership",uni).chaExp.toFixed(2)+"x Exp Multiplier for Charisma");
        ns.print(`${ns.formulas.work.universityGains(ns.getPlayer(),"Algorithms",uni).hackExp.toFixed(2)}x Exp Multiplier for Hacking`);
    }
}