/*export const main = ns => {
  const doc = eval("document");
  doc.getElementById("overview-extra-hook-0").innerHTML = `${}`;
}*/

export async function main(ns){
  await ns.sleep(100);
  const doc = eval("document");
  const ovBox = doc.querySelector('div.react-draggable');
  ovBox.style.setProperty("transform",'translate(0px,950px)');
  //0px,1000px
  //ns.tprint(ovBox.style);
}