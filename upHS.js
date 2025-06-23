/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL')
  ns.ui.openTail()

  let maxHS = ns.hacknet.maxNumNodes()
  let pS = "\n"
  let minCost = Infinity

  while (minCost > 0) {
    ns.ui.resizeTail(330, 200)
    ns.ui.moveTail(645,619)
    let lows = [];
    let numHS = ns.hacknet.numNodes()
    minCost = Infinity
    let hash = ns.hacknet.numHashes()
    let maxHash = ns.hacknet.hashCapacity()

    if (numHS < 1) ns.hacknet.purchaseNode()

    for (let i = 0; i < numHS; i++) {
      let initMinCost = minCost
      let cacheCost = ns.hacknet.getCacheUpgradeCost(i)
      let coreCost = ns.hacknet.getCoreUpgradeCost(i)
      let lvlCost = ns.hacknet.getLevelUpgradeCost(i,5)
      let purchCost = ns.hacknet.getPurchaseNodeCost()
      let ramCost = ns.hacknet.getRamUpgradeCost(i)

      if (hash == maxHash && numHS < maxHS) {
        minCost = Math.min(minCost, cacheCost, coreCost, lvlCost, purchCost, ramCost)
      }
      else if (hash == maxHash && numHS == maxHS) {
        minCost = Math.min(minCost, cacheCost, coreCost, lvlCost, ramCost)
      }
      else if (hash < maxHash && numHS == maxHS) {
        minCost = Math.min(minCost, coreCost, lvlCost, ramCost)
      }
      else {
        minCost = Math.min(minCost, coreCost, lvlCost, purchCost, ramCost)
      }

      if (minCost != initMinCost) {
        if (minCost == cacheCost) {
          lows = [i, "Cache"]
        }
        else if (minCost == coreCost) {
          lows = [i, "Core"]
        }
        else if (minCost == lvlCost) {
          lows = [i, "Level"]
        }
        else if (minCost == purchCost) {
          lows = [(numHS + 1), "newHS"]
        }
        else if (minCost == ramCost) {
          lows = [i, "Ram"]
        }
      }
    }

    ns.clearLog()

    if (lows[1] == "Cache") {
      ns.hacknet.upgradeCache(lows[0])
      pS += `\nPurchased Cache on HS-${lows[0]} for ${ns.formatNumber(minCost)}`
    }
    else if (lows[1] == "Core") {
      ns.hacknet.upgradeCore(lows[0])
      pS += `\nPurchased Core on HS-${lows[0]} for ${ns.formatNumber(minCost)}`
    }
    else if (lows[1] == "Level") {
      ns.hacknet.upgradeLevel(lows[0],5)
      pS += `\nPurchased Level on HS-${lows[0]} for ${ns.formatNumber(minCost)}`
    }
    else if (lows[1] == "newHS") {
      ns.hacknet.purchaseNode()
      pS += `\nPurchased New Server (HS-${lows[0]}) for ${ns.formatNumber(minCost)}`
    }
    else if (lows[1] == "Ram") {
      ns.hacknet.upgradeRam(lows[0])
      pS += `\nPurchased Ram on HS-${lows[0]} for ${ns.formatNumber(minCost)}`
    }
    ns.print(pS)
    ns.ui.renderTail()
    await ns.sleep(100)
  }
  ns.alert("Hacknet is MAXED OUT")
}