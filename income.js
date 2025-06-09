/** @param {NS} ns */
export async function main(ns) {
  const monSrc= ns.getMoneySources().sinceInstall;
  /*const srcs= Object.entries(monSrc);
  for(const src of srcs){
    ns.tprint(src);
  }*/
  for(const source in monSrc){
    if(ns.formatNumber(monSrc[source], 2)== 0.00){
      continue;
    }
    else{
      ns.tprint(source+": $"+ns.formatNumber(monSrc[source], 2));
    }
  }
}