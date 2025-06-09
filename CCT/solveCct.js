import { allCct } from "CCT/cctList.js"
import { possibleSums } from "CCT/ttlWays2Sum.js";
import { arrJmpGm } from "CCT/arrJmpGm.js";
import { aJG2 } from "CCT/aJG2.js";
import { rleCompress } from "CCT/rleCompress.js";
import { lzDe } from "CCT/compressII.js";
import { minPathSumTri } from "CCT/minPathSumTri.js";
import { csrCipher } from "CCT/csrCipher.js";
import { overlap } from "CCT/overlap.js";
import { vigCiph } from "CCT/vigCipher.js";
import { spiral } from "CCT/spiral.js";
import { sms } from "CCT/SMS.js";
import { twoColor } from "CCT/twoColor.js";
import { ast1 } from "CCT/ast1.js";
import { ast3 } from "CCT/ast3.js";
import { pig1 } from "CCT/pig1.js";
import { pig2 } from "CCT/pig2.js";
/** @param {NS} ns */
function solve(type, name, serv, func, ns) {
  let response = ns.codingcontract.attempt(func, name, serv);
  let say = response;
  //let att = ns.codingcontract.getNumTriesRemaining(name, serv);
  //if (response == "") { say = `Failed Contract\nAttempts Remaining: ${att}`; }
  //else {
    ns.alert(`${type}\n${say}`);
  //}
}
/** @param {NS} ns */
export async function main(ns) {
  const list = allCct(ns);
  for (const l of list) {
    let data = l.contInfo.data;
    let type = l.contInfo.type;
    let name = l.contName;
    let serv = l.contServ;
    let numAtt = l.contInfo.numTriesRemaining;
    if (numAtt == 1) {
      ns.alert(`Only 1 try left on ${name} at ${serv}\n\nPlease Manually Attempt`);
    }
    else if (type == "Total Ways to Sum") {
      solve(type, name, serv, possibleSums(data), ns);
      //ns.alert(ns.codingcontract.attempt(possibleSums(data).toString(),name,serv));
    }
    else if (type == "Array Jumping Game") {
      solve(type, name, serv, arrJmpGm(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(arrJmpGm(data), name, serv)}`);
    }
    else if (type == "Compression I: RLE Compression") {
      solve(type, name, serv, rleCompress(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(rleCompress(data), name, serv)}`);
    }
    else if (type == "Array Jumping Game II") {
      solve(type, name, serv, aJG2(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(aJG2(data), name, serv)}`);
    }
    else if (type == "Minimum Path Sum in a Triangle") {
      solve(type, name, serv, minPathSumTri(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(minPathSumTri(data), name, serv)}`);
    }
    else if (type == "Encryption I: Caesar Cipher") {
      solve(type, name, serv, csrCipher(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(csrCipher(data), name, serv)}`);
    }
    else if (type == "Merge Overlapping Intervals") {
      solve(type, name, serv, overlap(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(overlap(data),name,serv)}`);
    }
    else if (type == "Encryption II: Vigenère Cipher") {
      solve(type, name, serv, vigCiph(data), ns)
    }
    else if (type == "Spiralize Matrix") {
      solve(type, name, serv, spiral(data), ns);
      //ns.alert(`${type}\n${ns.codingcontract.attempt(func(data),name,serv)}`);
    }
    else if (type == "Subarray with Maximum Sum") {
      solve(type, name, serv, sms(data), ns);
    }
    else if (type == "Proper 2-Coloring of a Graph") {
      solve(type, name, serv, twoColor(data), ns);
    }
    else if (type == "Compression II: LZ Decompression") {
      solve(type, name, serv, lzDe(data), ns);
    }
    else if (type == "Algorithmic Stock Trader I") {
      solve(type, name, serv, ast1(data), ns);
    }
    else if (type == "Algorithmic Stock Trader III") {
      solve(type, name, serv, ast3(data), ns);
    }
    else if (type == "Unique Paths in a Grid I") {
      solve(type, name, serv, pig1(data), ns);
    }
    else if (type == "Unique Paths in a Grid II") {
      //solve(type, name, serv, pig2(data), ns);
    }
  }
}