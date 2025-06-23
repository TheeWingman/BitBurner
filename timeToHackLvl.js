/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail()
  ns.disableLog('ALL')
  let plr = ns.getPlayer()
  let endLvl = ns.args[0] != null ? ns.args[0] : 2500
  let xpNeeded = ns.formulas.skills.calculateExp(endLvl, (plr.mults.hacking_exp * ns.getBitNodeMultipliers().HackExpGain))
  //let xpToGo = initXpToGo
  let initXp = plr.exp.hacking
  let currLvl = 1
  let currXp = plr.exp.hacking
  let xpSec = 0
  let secCtr = 0
  while(currXp == initXp || secCtr < 60){
    plr = ns.getPlayer()
    ns.clearLog()
    ns.print(ns.formatPercent(plr.mults.hacking_exp * ns.getBitNodeMultipliers().HackExpGain))
    ns.print(`\nInitial: ${ns.formatNumber(initXp)}\nCurrent: ${ns.formatNumber(currXp)}`)
    ns.print(`\nPrepping Xp/Sec Calc\n${secCtr} Sec Elapsed`)
    await ns.sleep(1000)
    currXp = plr.exp.hacking
    secCtr++
  }
  plr = ns.getPlayer()
  currXp = plr.exp.hacking
  xpSec = (currXp - initXp) / secCtr
  //xpToGo -= (currXp-initXp)
  while(currLvl < endLvl){
    ns.clearLog()
    ns.print(`\nXp/Sec:   ${ns.formatNumber(xpSec)}\nCurrXp:   ${ns.formatNumber(currXp)}\nXpNeeded: ${ns.formatNumber(xpNeeded)}`)
    plr = ns.getPlayer()
    currLvl = plr.skills.hacking
    currXp = plr.exp.hacking
    //xpToGo = ns.formulas.skills.calculateExp(endLvl, (plr.mults.hacking_exp * ns.getBitNodeMultipliers().HackExpGain))

    let timeToGo = ((xpNeeded - currXp) / xpSec)
    timeToGo /= 1000
    ns.print(`\n${ns.tFormat(timeToGo)}\nUntil Desired Hack Level`)
    await ns.sleep(1000)
  }
}