function scan(ns, parent, server, list) {
    const children = ns.scan(server);
    for (let child of children) {
        if (parent == child) {
            continue;
        }
        list.push(child);

        scan(ns, server, child, list);
    }
}

export function list_servers(ns) {
    const list = [];
    scan(ns, '', 'home', list);
    return list;
}

/** @param {NS} ns **/
export async function main(ns) {
    ns.disableLog('getServerUsedRam');
    ns.disableLog('getServerMaxRam');
    ns.disableLog('scan');
    const args = ns.flags([["help", false]]);
    if (args.help) {
        ns.tprint("This script lists all servers on which you can run scripts.");
        ns.tprint(`Usage: run ${ns.getScriptName()}`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()}`);
        return;
    }

    const servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
    for (const server of servers) {
        const used = ns.getServerUsedRam(server);
        const max = ns.getServerMaxRam(server);
        
        ns.tprint(`${server}: ${used} GB/${max} GB (${(100 * used / max).toFixed(2)}%)`);
        const pst = ns.ps(server);
        let scripts = [];
        let isThere = false;
        let ctr = 1;
        if (pst!=null) {
            for (const script of pst) {
                const name=script.filename;
                let argus=script.args;
                if(argus==""){
                  argus = "None";
                }
                for(const i of scripts){
                  if(name.toString() == i.name.toString()){
                    if(argus.toString() == i.argus.toString()){
                      i.ctr+=1;
                      isThere = true;
                      break;
                    }
                  }
                }
                if(isThere == false){
                  scripts.push({name, argus, ctr});
                }
                else{
                  isThere=false;
                }
            }
        }
        for(const i of scripts){
            ns.tprint(`${i.name}: ${i.argus}: Running ${i.ctr} Times`);
        }
    }
}