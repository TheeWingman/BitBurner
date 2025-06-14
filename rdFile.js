/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  let fnlFile = [];
  let filename = "";
  let fileContent = "";
  filename = "AugFinder/augs.js";
  fileContent = JSON.stringify(ns.read("AugFinder/augs.js"));
  fnlFile.push({filename, fileContent});
  filename = "AugFinder/findAugs.js";
  fileContent = JSON.stringify(ns.read("AugFinder/findAugs.js"));
  fnlFile.push({filename, fileContent});
  ns.write("AugFinder/aF.txt", JSON.stringify(fnlFile),"w");
  ns.print(fnlFile);
}