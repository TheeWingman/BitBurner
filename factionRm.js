/** @param {NS} ns */
export async function main(ns) {
  while(true){
    await ns.sleep(0);
  const doc = eval("document");
  doc.getElementsByClassName("MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1w6ue5s")[0]?.remove();

  }
}