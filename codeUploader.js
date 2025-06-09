/** @param {NS} ns */
export async function main(ns) {
  ns.clearLog();
  ns.ui.openTail();
  ns.disableLog('ALL');

  let files = ns.ls("home");
  let filename = null;
  let fileContent = null;
  let fnlFile = [];
  //let fnlString = "[";
  for (const file of files) {
    if (!file.includes(".txt")) {
      filename = file;
      fileContent = JSON.stringify(ns.read(file));
      fnlFile.push({ filename, fileContent });
    }
  }
  /*for(const file of fnlFile){
    fnlString += file;
  }
  fnlString += "]";*/
  ns.write("githubCode.txt", JSON.stringify(fnlFile), "w");
  ns.print(fnlFile);
}