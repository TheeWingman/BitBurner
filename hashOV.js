/** @param {NS} ns */
export async function main(ns) {
  const doc = globalThis['document'];
  const slot0 = doc.getElementById("overview-extra-hook-0");
  slot0.innerHTML = "";
  const slot0Child1 = doc.createElement('th');
  const slot0Child2 = doc.createElement('td');
  const hashStatic = doc.createElement('p');
  hashStatic.innerHTML = "Hash:";
  let hashAmt = doc.createElement('p');
  if(slot0.hasChildNodes()){

  slot0.removeChild(slot0Child1);
  slot0.removeChild(slot0Child2);
  }
  slot0Child1.appendChild(hashStatic);
  hashStatic.style.color = "red";
  //slot0Child1.style.paddingLeft = "0px";
  slot0Child2.appendChild(hashAmt);
  /*slot0Child1.style.paddingRight = "50px";
  slot0Child2.style.paddingLeft = "0px"
  slot0Child2.style.paddingRight = "0px";*/
  hashAmt.style.color = "red";
  hashAmt.style.textAlign = "right";
  slot0.appendChild(slot0Child1);
  slot0.appendChild(slot0Child2);
  while(true){

    hashAmt.innerHTML = `${ns.formatNumber(ns.hacknet.numHashes())} / ${ns.formatNumber(ns.hacknet.hashCapacity())}`;
    await ns.sleep(20);
  }
}