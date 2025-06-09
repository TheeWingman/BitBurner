import { tester } from "CCT/tester.js";

/** @param {Array} data 
 * @type {String} input
 * @type {String} ciphText
*/
export function vigCiph(data, ns) {
  let input = data[0];
  let ciphText = data[1];
  const alphabet = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26 };
  let newString = "";
  let shiftLet = 0;
  for (let letter = 0; letter < input.length; letter++) {
    const alpha = Object.entries(alphabet);
    let currLet = input.at(letter);
    let alphaPos = alpha.find(ind => ind[0] == currLet)[1];
    //ns.print(`alphaPos: ${alphaPos}`);
    if (shiftLet >= ciphText.length) { shiftLet = 0; }
    let ciphPos = alpha.find(ind => ind[0] == ciphText.at(shiftLet))[1];
    //ns.print(`ciphPos: ${ciphPos}`);
    let finalPos = alphaPos + ciphPos - 1;
    if (finalPos > 26) {
      finalPos -= 26;
    }
    //ns.print(`finalPos: ${finalPos}`);
    newString += alpha.find(ind => ind[1] == finalPos)[0];
    shiftLet++;
  }
  return newString;
}

/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');

  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Encryption II: Vigenère Cipher") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Encryption II: Vigenère Cipher");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = vigCiph(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}