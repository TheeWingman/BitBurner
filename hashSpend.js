import { list_servers } from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('ALL');
  ns.ui.openTail();
  let hashMax = ns.hacknet.hashCapacity();
  let hash = ns.hacknet.numHashes();
  let upgrades = ns.hacknet.getHashUpgrades();
  let upChoice = ns.args[0] != null ? ns.args[0].toString() : "";
  let alrdyRun = ns.ps("home").filter(s => s.filename == "hashSpend.js").length;
  //ns.tprint(alrdyRun);

  const servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).filter(s => !s.includes("hacknet")).filter(s => !s.includes("pserv")).filter(s => s != "home");
  servers.sort();

  if (alrdyRun > 1) {
    let toKill = ns.ps("home")[ns.ps("home").findIndex(s => s.filename == "hashSpend.js")].pid;
    ns.kill(toKill);
  }
  let prevOrNo = false;
  if (upChoice == "") {
    if (ns.peek(100) != "NULL PORT DATA") {
      prevOrNo = await ns.prompt("Do you want to use the last upgrade choice?\nPrevious Upgrade: " + ns.peek(100));
    }
    if (prevOrNo) {
      upChoice = ns.readPort(100);
    }
    else {
      ns.clearPort(100);
      upChoice = await ns.prompt("What upgrade would you like to do?", { type: "select", choices: upgrades });
    }
  }

  let upCost = ns.hacknet.hashCost(upChoice);
  if (upChoice == "" || upChoice == null) {
    ns.alert("Must Select Upgrade");
    return;
  }
  //ns.tprint(ns.peek(100));
  ns.writePort(100, upChoice);
  let tgt = "";
  while (true) {
    ns.clearLog();
    ns.print(`
    Max Hashes: ${ns.formatNumber(hashMax)}
    Hashes: ${ns.formatNumber(hash, 2)}
    ${upChoice}: ${ns.formatNumber(ns.hacknet.hashCost(upChoice))}`);
    hashMax = ns.hacknet.hashCapacity();
    hash = ns.hacknet.numHashes();
    upCost = ns.hacknet.hashCost(upChoice);
    if (upChoice == "Reduce Minimum Security" || upChoice == "Increase Maximum Money") {
      if (tgt == "") {
        tgt = await ns.prompt("What server do you want to affect?", { type: "select", choices: servers });
      }
      /*if (ns.ps("home").findIndex(s => s.filename.includes("Batchers")) != -1) {
        tgt = ns.ps("home").find(s => s.filename.includes("Batchers")).args[0];
      }
      else {
        tgt = "joesguns";
      }*/
      //ns.print(tgt);
      if (/*ns.getWeakenTime(tgt) > 45000 &&*/ upChoice == "Reduce Minimum Security") {
        if (upCost <= hash) {
          ns.hacknet.spendHashes(upChoice, tgt);
        }
        else {
          while (upCost > hashMax) {
            if (hash == hashMax) {
              ns.hacknet.spendHashes("Sell for Money");
            }
            await ns.sleep(100);
          }
        }
      }
      else if (upChoice == "Increase Maximum Money" && ns.getServerMaxMoney(tgt) < 1000000000) {
        if (upCost <= hash) {
          ns.hacknet.spendHashes(upChoice, tgt);
        }
        else {
          while (upCost > hashMax) {
            if (hash == hashMax) {
              ns.hacknet.spendHashes("Sell for Money")
            }
          }
        }
      }
    }
    if (upChoice == "Company Favor") {
      const companies = [];
      let companiesEnum = JSON.stringify(ns.enums.CompanyName).replaceAll(`":"`, `:`).replaceAll(`{"`, "").replaceAll(`"}`, "").split(`","`);
      for (let i = 0; i < companiesEnum.length; i++) {
        companiesEnum[i] = companiesEnum[i].slice(companiesEnum[i].indexOf(":") + 1);
      }
      companiesEnum.sort();
      for (const comp of companiesEnum) {
        companies.push(comp);
      }
      let company = await ns.prompt("Which company do you want to get favor for?", { type: "select", choices: companies })
      if (company == null || company == "") {
        ns.alert("Must Select Company");
        return;
      }
      while (true) {
        hashMax = ns.hacknet.hashCapacity();
        hash = ns.hacknet.numHashes();
        upCost = ns.hacknet.hashCost(upChoice);
        ns.clearLog();
        ns.print(`
        Max Hashes: ${ns.formatNumber(hashMax)}
        Hashes: ${ns.formatNumber(hash, 2)}
        ${upChoice}: $${ns.formatNumber(upCost)}`);
        if (hash >= upCost) {
          ns.hacknet.spendHashes(upChoice, company);
        }
        else {
          while (upCost > hashMax) {
            if (hash == hashMax) {
              ns.hacknet.spendHashes("Sell for Money");
            }
          }
        }
        await ns.sleep(10);
        ns.ui.renderTail();
      }
    }
    if (upChoice == "Improve Studying") {
      if (upCost <= hash) {
        ns.hacknet.spendHashes(upChoice);
      }
      else {
        while (upCost > hashMax) {
          if (hash == hashMax - 4) {
            ns.hacknet.spendHashes("Sell for Money");
          }
          await ns.sleep(100);
        }
      }
    }
    if (upChoice == "Generate Coding Contract") {
      if (upCost <= hash) {
        //let most = Math.floor(hash / upCost);
        ns.hacknet.spendHashes(upChoice);
      }
    }
    if (upChoice == "Improve Gym Training") {
      if (upCost <= hash) {
        //let most = Math.floor(hash / upCost);
        ns.hacknet.spendHashes(upChoice);
      }
    }
    if (upChoice == "Sell for Money" && hash >= upCost) {
      ns.ui.closeTail();
      let most = Math.floor(hash / upCost);
      ns.hacknet.spendHashes(upChoice, undefined, most);
      //ns.print("should be spending");
    }
    await ns.sleep(10);
    ns.ui.renderTail();
  }
}