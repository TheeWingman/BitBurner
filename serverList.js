/** @param {NS} ns
 * @type {Document} doc
 */
const doc = eval("document");
function closePopup() {
  var popup = doc.getElementById('popup');
  popup.className = '';
}

export async function main(ns) {
  var win = doc.createElement('div');
  win.id = 'popup';
  win.style.color = 'white';
  win.style.height = '300px';
  win.style.width = '400px';
  //win.style.x = '300px';
  //win.style.y = `${screen.height-500}px`;
  win.innerHTML = 'hello world <a href="#" onclick="closePopup()">close</a>';
  doc.getElementsByTagName('body')[0].appendChild(win);
  await ns.sleep(60000);
  doc.remove(win);
}