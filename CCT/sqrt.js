import { tester } from "CCT/tester.js";

/** @param {NS} ns
 * @param {BigInt} data
 */
export function sqrt(data, ns) {
  let input = Number(data);
  let squirt = BigInt(Math.round(Math.sqrt(input)));
  ns.print(squirt);
  let answer = squirt.toString();
  /*var bigSqrt = function (value) {
    if (value < 2n) {
      return value;
    }

    if (value < 16n) {
      return BigInt(Math.sqrt(Number(value)) | 0);
    }

    let x0, x1;
    if (value < 4503599627370496n) {//1n<<52n
      x1 = BigInt(Math.sqrt(Number(value)) | 0) - 3n;
    } else {
      let vlen = value.toString().length;
      if (!(vlen & 1)) {
        x1 = 10n ** (BigInt(Math.round(vlen / 2)));
      } else {
        x1 = 4n * 10n ** (BigInt((Math.round(vlen / 2)) | 0));
      }
    }

    do {
      x0 = x1;
      x1 = ((value / x0) + x0) >> 1n;
    } while ((x0 !== x1 && x0 !== (x1 - 1n)));
    return x0;
  }
  answer = bigSqrt(input);*/

  return answer;
}

/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  let failed = false;
  let failIdx = -1;
  //for(let a=0; a<20; a++){
  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Square Root") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Square Root");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const ans = sqrt(contractData, ns);
  ns.print(contractInfo);
  ns.print(contractData);
  ns.print(ans);
  /*if(ns.codingcontract.attempt(ans, contractName) == ""){
    failed = true;
    failIdx = a;
    break;
  }
  }
  if(failed){
    ns.alert(`Test of 20 failed
    Failed at ${failIdx}`);
  }
  else { ns.alert(`Test Successful`); }*/
}