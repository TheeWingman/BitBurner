/** @param {NS} ns */
export async function main(ns) {
  if(ns.args[0] == null){
    ns.tprint("Must enter a Number (Either Rep or Don)");
    return;
  }
  const donOrRep = await ns.prompt("Y for Rep from Don   |   N for Don to Rep",{type: "boolean"});
  if(!donOrRep){
    const calc = ns.formulas.reputation.donationForRep(ns.args[0],ns.getPlayer());
    ns.tprint(`$${(ns.formatNumber(calc))} to get ${ns.args[0]} Rep`);
  }
  else{
    const calc = ns.formulas.reputation.repFromDonation(ns.args[0],ns.getPlayer());
    ns.tprint(`${ns.formatNumber(calc)} Rep Gained`)
  }
}