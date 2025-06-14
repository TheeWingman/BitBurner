import * as module from "AugFinder/augs.js"

/** @param {NS} ns */
export async function main(ns) {
  ns.clearLog();
  ns.ui.openTail();
  let winSize = ns.ui.windowSize();
  ns.ui.moveTail((winSize[0] / 4), ((winSize[1] / 4) - 200));
  ns.disableLog('ALL');

  const opts = ["Hacking", "Rep", "Charisma", "Combat", "Crime", "Work", "BladeBurner", "Programs", "Search by Faction", "Search by Aug Name"];

  let choice = await ns.prompt("What kind of search do you want to perform?", { type: "select", choices: opts });

  let combatArr = ["strength", "defense", "dexterity", "agility"];

  let facts = [];
  Object.values(ns.enums.FactionName).forEach(fact => {
    facts.push(String(fact))
  });
  facts.sort();

  let imAugs = module.augments(ns);
  let augments = [];
  let augs = [];
  let search = "";
  /** @type {Object} augs */
  Object.keys(imAugs).forEach(aug => { augs.push(aug); });
  mainLoop: for (const aug of augs) {
    let matches = [];
    let costs = [];
    //ns.print(aug);
    for (const prop in imAugs[aug]) {
      //ns.print(prop);
      let propArr = prop.split("_").length > 1 ? prop.split("_") : prop.split("Cost");
      if (propArr[1] == "") {
        propArr.pop();
      }
      let propName = "";
      propArr.forEach(a => {
        //ns.print(a);
        if (!prop.includes("Cost")) {
          propName += ` ${a.charAt(0).toUpperCase() + a.slice(1)}`;
          //propA.concat(propA.slice(1));
        }
        else if (prop.includes("Cost")) {
          propName += ` ${a.charAt(0).toUpperCase() + a.slice(1)} Cost`;

        }
      });
      //ns.print(propName);

      //Finds aug with effects of chosen type
      if (choice == "Hacking") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("hacking"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            /*let costs = Object.keys(imAugs[aug]).filter(a => a.includes("Cost"));
            augments[augments.length - 1].push(costs);*/
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          //augments.push([imAugs[aug].factions])
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Rep") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("_rep"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Charisma") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("charisma"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Crime") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("crime"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Work") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("work"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "BladeBurner") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("bladeburner"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Programs") {
        let hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes("program"))
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push(imAugs[aug][prop])
          }
        }
      }

      if (choice == "Combat") {
        let hasChoice = false;
        for (const att of combatArr) {
          hasChoice = Object.keys(imAugs[aug]).findIndex(h => h.includes(att));
          if (hasChoice) { break; }
        }
        //ns.print(hasChoice)
        if (hasChoice != -1) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Search by Aug Name") {
        if (search == "") {
          search = await ns.prompt("What Aug do you want to details of?", { type: "select", choices: augs });
        }
        //ns.print(Object.keys(imAugs));
        let hasChoice = aug == search;
        //ns.print(hasChoice)
        if (hasChoice) {
          let alreadyPushed = augments.findIndex(a => a == search.toString()) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }

      if (choice == "Search by Faction") {
        if (search == "") {
          search = await ns.prompt("What Faction do you want the Augs of?", { type: "select", choices: facts });
        }
        //ns.print(Object.values(imAugs[aug][Object.keys(imAugs[aug]).indexOf("factions")]))
        let hasChoice = false;
        if (Object.keys(imAugs[aug]).includes("factions")) {
          for (const fact of Object.keys(imAugs[aug])) {
            if (fact == "factions") {
              //ns.print(imAugs[aug][fact])
              for (const name of imAugs[aug][fact]) {
                //ns.print(name)
                if (String(name) == search) hasChoice = true;
              }
            }
            //imAugs[aug][fact].includes(search);
          }
        }
        //ns.print(hasChoice)
        if (hasChoice) {
          let alreadyPushed = augments.findIndex(a => a == aug) != -1;
          if (!alreadyPushed) {
            augments.push([aug]);
            //augments.push([imAugs[aug].factions])
          }
          if (prop.includes("Cost")) {
            //ns.print(costs);
            if (costs.length > 0 && costs.findIndex(p => p[0] == prop) == -1) {
              costs.push([propName, imAugs[aug][prop]]);
            }
            else if (costs.length == 0) {
              costs.push([propName, imAugs[aug][prop]]);
            }
          }
          if (!prop.includes("Cost") && !prop.includes("info") && !prop.includes("factions") && !prop.includes("Special") && !prop.includes("prereqs") && !prop.includes("stats")) {
            //ns.print(imAugs[aug][prop]);
            matches.push([propName, imAugs[aug][prop]]);
          }
        }
      }
    }

    //Adds aug effects to aug in array
    if (matches != [] && matches.length > 0) {
      //ns.print(matches);
      //ns.print(augments[augments.length - 1]);
      augments[augments.length - 1].push(costs);
      augments[augments.length - 1].push(matches);
      if (imAugs[aug].factions != "" && choice != "Search by Faction") {
        augments[augments.length - 1].push(imAugs[aug].factions);
      }
      if (Object.keys(imAugs[aug]).findIndex(i => i.includes("prereq")) != -1) {
        augments[augments.length - 1].push(["prereqs", imAugs[aug].prereqs]);
        //ns.print(augments[augments.length - 1]);
      }
      /*if (choice == "Search by Aug Name") {
        augments[augments.length - 1].push(["info", imAugs[search].info]);
        break mainLoop;
      }*/
    }
  }
  //ns.print(facts);

  //Printer go BRRRRRRRRRRRRR
  let printString = `\n`;
  if (choice != "Search by Faction") {
    for (const a of augments) {
      //Aug Name
      printString += `  ${a[0]}\n`;

      //If it has prereqs
      if (a[4] != undefined && a[4][0] == "prereqs") {
        printString += `  ├ Prereq(s)\n`;
        for (let c = 0; c < a[4][1].length; c++) {
          if (c == a[4][1].length - 1) {
            printString += `  │ └ ${a[4][1][c]}\n`;
          }
          else {
            printString += `  │ ├ ${a[4][1][c]}\n`;
          }
        }
        printString += `  │\n  ├ Cost\n`;
      }
      else {
        printString += `  ├ Cost\n`;
      }
      for (let c = 0; c < a[1].length; c++) {
        if (c == 1) {
          printString += `  │ └${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
        }
        if (c == 0) {
          printString += `  │ ├${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
        }
      }

      //DECIDED WASNT WORTH THE WORK LOL 
      //Prints Info Property if searching specific Aug
      /*if (choice == "Search by Aug Name") {
        if(a[5] != undefined){
        printString += `  │\n  ├ Info\n`;
        printString += `  │ └ ${a[5][1]}\n`;
        }
        else {
          printString += `  │\n  ├ Info\n`;
        printString += `  │ └ ${a[4][1]}\n`;
        }
      }*/

      //Aug Effects
      printString += `  │\n  ├ Change(s)\n`;
      for (let b = 0; b < a[2].length; b++) {
        //ns.print(a[1][b]);
        let pctChange = "";
        if (!isNaN(Number(a[2][b][1])) && a[2][b][1] - 1 > 0) {
          pctChange = `+${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
        }
        else if (!isNaN(Number(a[2][b][1]))) {
          pctChange = `${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
        }

        if (a[2][b][1] != Infinity && !isNaN(Number(a[2][b][1])) && b < a[2].length - 1) {
          printString += `  │ ├${a[2][b][0]}: ${pctChange}\n`;
        }
        //If Aug is for Programs
        else if (choice == "Programs") {
          if (b == 0) {
            printString += `  │ └ Program(s)\n`;
          }
          for (let c = 0; c < a[2][b].length; c++) {
            if (c < a[2][b].length - 1) {
              printString += `  │   ├ ${a[2][b][c]}.exe\n`;
            }
            else {
              printString += `  │   └ ${a[2][b][c]}.exe\n`;
            }
          }
        }
        else if (b < a[2].length - 1) {
          printString += `  │ ├${a[2][b][0]}: ${a[2][b][1]}\n`;
        }
        else if (!isNaN(parseFloat(a[2][b][1]))) {
          printString += `  │ └${a[2][b][0]}: ${pctChange}\n`;
        }
        else {
          printString += `  │ └${a[2][b][0]}: ${a[2][b][1]}\n`;
        }
      }
      //Factions Aug is in
      printString += `  │\n  └ Faction(s)\n`;
      if (a[3] != undefined) {
        for (let b = 0; b < a[3].length; b++) {
          if (b == a[3].length - 1) {
            printString += `    └ ${a[3][b]}\n`;
          }
          else {
            printString += `    ├ ${a[3][b]}\n`;
          }
        }
      }
      else { printString += `    └ NONE`; }
      printString += `\n`;
    }
  }

  //IF SEARCHING BY FACTION
  else {
    printString += `  ${search}\n`;
    for (let aug = 0; aug < augments.length; aug++) {
      let a = augments[aug];
      //Aug name
      if (aug + 1 < augments.length) {
        printString += `  │\n  ├ ${a[0]}\n`;
      }
      else {
        printString += `  │\n  └ ${a[0]}\n`;
      }

      //If it has prereqs
      if (a[3] != undefined && a[3][0] == "prereqs") {
        if (aug + 1 < augments.length) {
          printString += `  │ ├ Prereq(s)\n`;
          for (let c = 0; c < a[3][1].length; c++) {
            if (c == a[3][1].length - 1) {
              printString += `  │ │ └ ${a[3][1][c]}\n`;
            }
            else {
              printString += `  │ │ ├ ${a[3][1][c]}\n`;
            }
          }
          printString += `  │ │\n  │ ├ Cost\n`;
        }
        else {
          printString += `    ├ Prereq(s)\n`;
          for (let c = 0; c < a[3][1].length; c++) {
            if (c == a[3][1].length - 1) {
              printString += `    │ └ ${a[3][1][c]}\n`;
            }
            else {
              printString += `    │ ├ ${a[3][1][c]}\n`;
            }
          }
        }
      }
      else {
        if (aug + 1 < augments.length) {
          printString += `  │ ├ Cost\n`;
        }
        else {
          printString += `    ├ Cost\n`
        }
      }
      for (let c = 0; c < a[1].length; c++) {
        if (aug + 1 < augments.length) {
          if (c == 1) {
            printString += `  │ │ └${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
          }
          if (c == 0) {
            printString += `  │ │ ├${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
          }
        }
        else {
          if (c == 1) {
            printString += `    │ └${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
          }
          if (c == 0) {
            printString += `    │ ├${a[1][c][0]}: ${ns.formatNumber(a[1][c][1])}\n`;
          }
        }
      }

      //DECIDED WASNT WORTH THE WORK LOL 
      //Prints Info Property if searching specific Aug
      /*if (choice == "Search by Aug Name") {
        if(a[5] != undefined){
        printString += `  │\n  ├ Info\n`;
        printString += `  │ └ ${a[5][1]}\n`;
        }
        else {
          printString += `  │\n  ├ Info\n`;
        printString += `  │ └ ${a[4][1]}\n`;
        }
      }*/

      //Aug Effects
      if (aug + 1 < augments.length) {
        printString += `  │ │\n  │ └ Change(s)\n`;
      }
      else {
        printString += `    │\n    └ Change(s)\n`;
      }
      for (let b = 0; b < a[2].length; b++) {
        //ns.print(a[1][b]);
        let pctChange = "";
        if (aug + 1 < augments.length) {
          //ns.print(a[2][b])
          if (!isNaN(Number(a[2][b][1])) && a[2][b][1] - 1 > 0) {
            pctChange = `+${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
          }
          else if (!isNaN(Number(a[2][b][1]))) {
            pctChange = `${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
          }

          if (a[2][b][1] != Infinity && !isNaN(Number(a[2][b][1])) && b < a[2].length - 1) {
            printString += `  │   ├ ${a[2][b][0]}: ${pctChange}\n`;
          }
          //If Aug has Programs
          else if (a[2][b].includes(" Programs")) {
            //let proIdx = a[2][b].indexOf(" Programs")
            printString += `  │   └ Program(s)\n`;
            //ns.print(a[2][b])
            for (let c = 0; c < a[2][b][1].length; c++) {
              //ns.print(a[2][b][proIdx])
              if (c < a[2][b][1].length - 1) {
                printString += `  │     ├ ${a[2][b][1][c]}.exe\n`;
              }
              else {
                printString += `  │     └ ${a[2][b][1][c]}.exe\n`;
              }
            }
          }
          else if (b < a[2].length - 1) {
            printString += `      ├ ${a[2][b][0]}: ${a[2][b][1]}\n`;
          }
          else if (!isNaN(parseFloat(a[2][b][1]))) {
            printString += `  │   └ ${a[2][b][0]}: ${pctChange}\n`;
          }
          else {
            printString += `  │   └ ${a[2][b][0]}: ${a[2][b][1]}\n`;
          }
        }
        else {
          //ns.print(a[2][b])
          if (!isNaN(Number(a[2][b][1])) && a[2][b][1] - 1 > 0) {
            pctChange = `+${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
          }
          else if (!isNaN(Number(a[2][b][1]))) {
            pctChange = `${ns.formatPercent(ns.formatNumber((a[2][b][1] - 1)))}`;
          }

          if (a[2][b][1] != Infinity && !isNaN(Number(a[2][b][1])) && b < a[2].length - 1) {
            printString += `      ├ ${a[2][b][0]}: ${pctChange}\n`;
          }
          //If Aug has Programs
          //ns.print(a[2][b].includes(" program")+":"+a[2][b].includes(" Programs"))
          else if (a[2][b].includes(" Programs")) {
            //let proIdx = a[2][b].indexOf(" Programs");
            printString += `  │   └ Program(s)\n`;
            //ns.print(a[2][b])
            for (let c = 0; c < a[2][b][1].length; c++) {
              if (c < a[2][b].length - 1) {
                printString += `  │     ├ ${a[2][b][1][c]}.exe\n`;
              }
              else {
                printString += `  │     └ ${a[2][b][1][c]}.exe\n`;
              }
            }
          }
          else if (b < a[2].length - 1) {
            printString += `      ├ ${a[2][b][0]}: ${a[2][b][1]}\n`;
          }
          else if (!isNaN(parseFloat(a[2][b][1]))) {
            printString += `      └ ${a[2][b][0]}: ${pctChange}\n`;
          }
          else {
            printString += `      └ ${a[2][b][0]}: ${a[2][b][1]}\n`;
          }
        }
      }
    }
  }
  ns.print(printString);
}