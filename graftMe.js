/** @param {NS} ns */
export async function main(ns) {
  const canGraft = ns.grafting.getGraftableAugmentations();
  for(const aug of canGraft){
    ns.grafting.graftAugmentation(aug);
    ns.grafting.waitForOngoingGrafting();
  }
}