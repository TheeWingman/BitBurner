/** @param {NS} ns */
export async function main(ns) {
  const doc = globalThis['document'];
  const slot0 = doc.getElementById("overview-extra-hook-0");
  slot0.innerHTML = "";
  const slot0Child1 = doc.createElement('th');
  const slot0Child2 = doc.createElement('td');
  const karmaStatic = doc.createElement('p');
  karmaStatic.innerHTML = "Karma:";
  let karmaAmt = doc.createElement('p');
  if(slot0.hasChildNodes()){

  slot0.removeChild(slot0Child1);
  slot0.removeChild(slot0Child2);
  }
  slot0Child1.appendChild(karmaStatic);
  karmaStatic.style.color = "red";
  //slot0Child1.style.paddingLeft = "0px";
  slot0Child2.appendChild(karmaAmt);
  /*slot0Child1.style.paddingRight = "50px";
  slot0Child2.style.paddingLeft = "0px"
  slot0Child2.style.paddingRight = "0px";*/
  karmaAmt.style.color = "red";
  karmaAmt.style.textAlign = "right";
  slot0.appendChild(slot0Child1);
  slot0.appendChild(slot0Child2);
  while(true){
    karmaAmt.innerHTML = ns.heart.break().toFixed(3);
    await ns.sleep(1000);
  }
}