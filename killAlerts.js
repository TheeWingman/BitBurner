const doc = eval("document");

function simulateKeyPress(element, key, keyCode) {
  const event = new KeyboardEvent('keydown', {
    key: key,
    code: key,
    which: keyCode,
    keyCode: keyCode,
    bubbles: true,
    cancelable: true
  });

  element.dispatchEvent(event);
}

/** @param {NS} ns */
function btnClicker(ns){
	const alertClose = doc.querySelectorAll(' span.MuiTypography-root.MuiTypography-body1 > div');
  ns.tprint(alertClose);
  if(alertClose == null || alertClose == {}){
    ns.alert("There are no alerts");
  }
  else{
    for(let i=0; i < alertClose.length; i++){
      simulateKeyPress(alertClose.at(i), 'Esc', 27);
    }
  }
}
/** @param {NS} ns */
export async function main(ns){
  const btnBox = doc.querySelector('div.MuiCollapse-wrapperInner.MuiCollapse-vertical > div.MuiBox-root');
  const kaBtn = doc.createElement("button");
  kaBtn.setAttribute("id", "kaBtn");
  const btnText = doc.createTextNode("KA");
  const rmKA = doc.getElementById("kaBtn");
  if(rmKA != null){rmKA.remove();}
  kaBtn.appendChild(btnText);
  btnBox.insertBefore(kaBtn, btnBox.lastChild);
  kaBtn.style.color = "white";
  kaBtn.style.backgroundColor = "blue";
  kaBtn.style.borderRadius = "8px";
  
  // Event listener for the close button to simulate escape
  kaBtn.addEventListener("click", btnClicker(ns));
}