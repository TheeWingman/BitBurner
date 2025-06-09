import * as module from "bestHackSvr2.js";
/** @param {NS} ns */
export async function main(ns) {
  const servers = module.list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
  const mstArr = [];
  let fnlArr = [];
  let threadCt = 0;
  let argsName = "";
  let scriptName = "";
  if(mstArr.length==0){
  	for(const server of servers){
    	const pst = ns.ps(server);
    	for(let p=0; p<pst.length; p++){
      		scriptName = pst.at(p).filename;
      		argsName = pst.at(p).args;
      		threadCt = pst.at(p).threads;
			mstArr.push({scriptName, argsName, threadCt});
		}
	}
  }
  mstArr.sort((a,b) => a.scriptName - b.scriptName);
  let name="";
  let arg="";
  let thrd=0;
	//for(const i of mstArr){
		name=mstArr.at(0).scriptName;
		arg=mstArr.at(0).argsName;
		thrd=mstArr.at(0).threadCt;
		/*if(fnlArr.length!=0){
			for(let l1=0; l1<fnlArr.length; l1++){
				if(!name == fnlArr[l1]&&(l1+1)>=fnlArr.length){
					fnlArr.push(name,[arg,[thrd]]);
				}
        else{
          for(let l2=0; l2<fnlArr[l1].length; l2++){
            if(!arg==fnlArr[l1][l2]&&(l2+1)>=fnlArr[l1].length){
              fnlArr[l1].push(arg,[thrd]);
            }
            else{
              //fnlArr[l1][l2][0] += thrd;
            }
          }
        }
      }
    }
    else{*/
      fnlArr.push(name,arg,thrd);
    //}
  //}
  /*for(let l1=0; l1<fnlArr.length; l1++){
    ns.tprint(`${fnlArr[l1]}  VVV`);
    for(let l2=0; l2<fnlArr[l1].length; l2++){
      ns.tprint(`${fnlArr[l1][l2]}  VVV`);
      ns.tprint(fnlArr[l1][l2][0]);
    }
  }*/
  let test1=[];
  test1.push([name,[arg,[thrd]]]);
  for (let item of test1) {
    ns.tprint(`L1: ${item}`);
    for(let innerItem of test1[0]){
      ns.tprint(`L2: ${innerItem}`);
      for(let moreInner of innerItem){
        ns.tprint(`L3: ${moreInner}`);
      }
    }
  }
  
}