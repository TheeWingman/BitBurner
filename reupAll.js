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
	const servers = list_servers(ns).filter(s => ns.hasRootAccess(s)).concat(['home']);
    for(const server of servers) {
        if(server != "home"){
            ns.killall(server);
        }
        ns.scp("autoBestHack.js",server,"home");
        ns.scp("bestHackSvr2.js",server,"home");
        ns.scp("remoteWG.js",server,"home");
        ns.scp("remoteAIO.js",server,"home");
		ns.exec("autoBestHack.js",server);
    }
}