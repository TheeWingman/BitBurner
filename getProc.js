/** @param {NS} ns 
 * @type {document} doc */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  const doc = eval("document");
  const procBox = doc.querySelector('div.window--process-list');
  const allStyle = window.getComputedStyle(procBox);
  const procX = procBox.getAttribute("bottom");
  const procY = procBox.getAttribute("cx");
  let allData = "";
  for(const style of allStyle){
    allData += `${style.toString()}:${allStyle.getPropertyValue(style.toString())}\n`;
  }
  ns.print(allData);
  ns.tprint(`
  X = ${procX}
  Y = ${procY}`);
}