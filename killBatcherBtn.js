/** @param {NS} ns */
export function killer(ns) {
  if (ns.ps("home").find(a => a.filename.includes("Batchers"))) {
    while(ns.ps("home").findIndex(a => a.filename.includes("Batchers")) != -1){
      ns.kill(ns.ps("home").at(ns.ps("home").findIndex(a => a.filename.includes("Batchers"))).pid)
    }
    ns.alert("All batchers are D E D");
  }
  else {
    ns.alert("No batchers are running!");
  }
}
/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog('sleep')
  if(ns.ps("home").filter(a => a.filename == "killBatcherBtn.js").length > 1){
    ns.kill(ns.ps("home").at(ns.ps("home").findIndex(a => a.filename == "killBatcherBtn.js")).pid);
  }
  const doc = globalThis['document'];
  const hook1 = doc.querySelector('div.MuiCollapse-wrapperInner.MuiCollapse-vertical > div.MuiBox-root'); 
  //doc.getElementById("overview-extra-hook-1");
  //hook1.innerText = "  ";
  const kbBtn = doc.createElement("button");
  kbBtn.setAttribute("id", "kbBtn");
  const btnText = doc.createTextNode("X_X Batcher");
  const rmKB = doc.getElementById("kbBtn");
  if (rmKB != null) { rmKB.remove(); }
  kbBtn.appendChild(btnText);
  kbBtn.style.color = "black";
  kbBtn.style.backgroundColor = "red";
  kbBtn.style.borderRadius = "8px";


  // When clicked
  kbBtn.addEventListener("click", () => killer(ns));

  hook1.insertBefore(kbBtn, hook1.lastChild)
  ns.atExit(() => hook1.removeChild(kbBtn))
  while (true) await ns.asleep(10)
}