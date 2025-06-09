/*export const main = ns => {
  const doc = eval("document");
  doc.getElementById("overview-extra-hook-0").innerHTML = `${}`;
}*/

export async function main(ns){
  await ns.sleep(100);
  const doc = eval("document");
  const ovBox = doc.querySelector('div.react-draggable-dragged');
  ovBox.style.setProperty("transform",'translate(0px,1030px)');
  //-735px,1480px
  //ns.tprint(style.getPropertyValue("transform"));
}