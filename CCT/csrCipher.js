import {tester} from "CCT/tester.js";
/** @param {Array} data
 * @type {String} dataString
 * @type {Number} shift */
export function csrCipher(data, ns){
  const dataString = data[0];
  const shift = data[1];
  const alphabet = {'A': 1, 'B': 2, 'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26, ' ': Infinity};

  /*const cipher = [];
  for(const [letter, pos] of Object.entries(alphabet)){
    let newPos = pos + shift;
    if(newPos > 26){
      newPos -= 26;
    }
    cipher.push([letter, newPos]);
  }*/
  let newString = "";
  for(let letter= 0; letter < dataString.length; letter++){
    const alpha = Object.entries(alphabet);
    let currLet = dataString.charAt(letter);
    if(currLet != " "){
    //ns.print(`Current letter: ${currLet}`);
    let alphaPos = alpha.find(ind => ind[0] == currLet)[1];
    //ns.print(`Position of Orig Letter: ${alphaPos}`);
    let ciphPos = alphaPos - shift;
    if(ciphPos < 1){ ciphPos += 26; }
    //ns.print(`Position of Ciph Letter: ${ciphPos}`);
    newString += alpha.find(pos => pos[1] == ciphPos)[0];
    }
    else{ newString += " "; }
  }
  //ns.print(newString);
  return newString;
}
/** @param {NS} ns */
export async function main(ns) {
  //ns.ui.openTail();
  ns.disableLog('ALL');

  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Encryption I: Caesar Cipher") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Encryption I: Caesar Cipher");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  ns.print(contractInfo);
  ns.print(contractData);
  const answer = csrCipher(contractData, ns);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(csrCipher(contractData, ns), contractName));
}