import { tester } from "CCT/tester.js";
/** @param {String} data
 * @param {NS} ns
*/
export function lzDe(data, ns) {
  //ns.ui.openTail();
  if (data.length == 0) {
		return "";
	}
	data = data.split("");
	let answer = "";
	while (data.length > 0) {
		let chunklength = parseInt(data.shift());
		if (chunklength > 0) {
			answer = answer.concat(data.splice(0, chunklength).join(""));
		}
		if (data.length > 0) {
			chunklength = parseInt(data.shift());
			if (chunklength != 0) {
				let rewind = parseInt(data.shift());
				for (let i = 0; i < chunklength; i++) {
					answer = answer.concat(answer[answer.length - rewind]);
				}
			}
		}
	}
  return answer;
  /*let isType1 = true;

  for (let i = 0; i < input.length; i++) {
    ns.print(`Curr Char: ${input.at(i)}`);
    ns.print(`Type 1: ${isType1}`);
    if (input.at(i) == "0") {
      if(isNaN(parseInt(input.at(i + 2))) && input.at(i + 2) != undefined){
        isType1 = true;
      }
      else { isType1 = false; }
    }
    /*if(!isNaN(parseInt(input.at(i))) && !isNaN(parseInt(input.at(i+1))) && isNaN(parseInt(input.at(input.at(i+2))))){
      let sec3 = "";
      let secLn = Number(input.at(i));
      let ctr3 = i + 1;
    }
    else if (isType1) {
      let lngth = parseInt(input.at(i));
      ns.print(`Length: ${lngth}`);
      if(lngth + i >= input.length){
        continue;
      }
      for(let ctr = i+1; ctr <= i + lngth; ctr++) {
        decoded += input.at(ctr);
      }
      /*let decLn = decoded.length;
      let a = 0;
      while(decoded.length < decLn + lngth){
        if(a >= sec1.length){ a = 0;}
        decoded += sec1.at(a);
        a++;
      }
      //ns.print(decoded);
      i += lngth
      isType1 = false;
    }
    else {
      let sec2 = "";
      //ns.print(`decLn: ${decoded.length}`);
      let start = Number(decoded.length - input.at(i + 1));
      let numLets = Number(input.at(i));
      /*ns.print(`start: ${start}`);
      ns.print(`numLets: ${numLets}`);
      ns.print(`sum of ^^: ${start + numLets}`);
      ns.print(`Reduce numLets: ${decoded.length < start + numLets}`);
      //ns.print(`numLets: ${numLets}`);
      if (decoded.length < (start + numLets)) {
        numLets = decoded.length - start;
      }
      //ns.print(`numLets: ${numLets}`);
      for (let l = start; l < start + numLets; l++) {
        sec2 += decoded.at(l);
        //ns.print(`sec2: ${sec2}`);
      }
      let c = 0;
      let decLnCurr = decoded.length;
      while (decoded.length < decLnCurr + Number(input.at(i)) && sec2.length > 0) {
        if (c >= sec2.length) { c = 0; }
        decoded += sec2.at(c);
        c++;
      }
      i++;
      isType1 = true;
      //ns.print(decoded);
    }
  }*/
  //ns.print(decoded);
  //return decoded;
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
    if (info.type == "Compression II: LZ Decompression") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Compression II: LZ Decompression");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = lzDe(contractData, ns);
  ns.print(contractInfo);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(lzDe(contractData, ns), contractName));
}