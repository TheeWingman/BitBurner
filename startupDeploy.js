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

/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog("sleep");
  if (!ns.scriptRunning("purchase-server-16gb.js", "home") && ns.getPurchasedServers().length != ns.getPurchasedServerLimit()) {
    ns.run("purchase-server-16gb.js");
  }
  if(!ns.scriptRunning("upgradeHackServ.js","home") && ns.getPurchasedServerLimit() == 0){
    ns.run("upgradeHackServ.js");
  }

  //ns.run("moveOV.js");
  if (!ns.scriptRunning("gui/process-list.js", "home")) { ns.run("gui/process-list.js"); }

  const servers = list_servers(ns);
  const pservs = ns.getPurchasedServers();
  const servers0Port = [];
  const servers1Port = [];
  const servers2Port = [];
  const servers3port = [];
  const servers4port = [];
  const servers5port = [];
  //const plrHack = ns.getHackingLevel();
  //--------------------------------------
  for (const serv of servers) {
    if (ns.getServerNumPortsRequired(serv) == 0) {
      servers0Port.push(serv);
    }
    else if (ns.getServerNumPortsRequired(serv) == 1) {
      servers1Port.push(serv);
    }
    else if (ns.getServerNumPortsRequired(serv) == 2) {
      servers2Port.push(serv);
    }
    else if (ns.getServerNumPortsRequired(serv) == 3) {
      servers3port.push(serv);
    }
    else if (ns.getServerNumPortsRequired(serv) == 4) {
      servers4port.push(serv);
    }
    else if (ns.getServerNumPortsRequired(serv) == 5 && !pservs.includes(serv)) {
      servers5port.push(serv);
    }
  }
  //ns.tprint(servers5port);
  //--------------------------------------
  for (const server of servers0Port) {
    ns.nuke(server);
    /*ns.scp("autoBestHack.js",server,"home");
    ns.scp("bestHackSvr2.js",server,"home");
    ns.scp("remoteWG.js",server,"home");
    ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    //ns.run("EHTDeploy.js", 1, server);
  }
  ns.run("/Batchers/Startup/batchScripts.js");
  //--------------------------------------
  while (!ns.fileExists("BruteSSH.exe")) {
    await ns.sleep(1000);
  }
  //--------------------------------------
  for (const server of servers1Port) {
    ns.run("BnE.js", 1, server);
    /*ns.scp("autoBestHack.js",server,"home");
    ns.scp("bestHackSvr2.js",server,"home");
    ns.scp("remoteWG.js",server,"home");
    ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    /*if (ns.getServerMaxMoney(server) > 0) {
      ns.run("EHTDeploy.js", 1, server);
    }*/
  }
  //ns.exec("reupAll.js","home");
  //--------------------------------------
  while (!ns.fileExists("FTPCrack.exe")) {
    await ns.sleep(1000);
  }
  //--------------------------------------
  for (const server of servers2Port) {
    ns.run("BnE.js", 1, server);
    /*ns.scp("autoBestHack.js",server,"home");
    ns.scp("bestHackSvr2.js",server,"home");
    ns.scp("remoteWG.js",server,"home");
    ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    /*ns.scp("autoBestHack.js", server, "home");
    ns.scp("bestHackSvr2.js", server, "home");
    ns.exec("autoBestHack.js", server);*/
  }
  //ns.exec("reupAll.js","home");
  //--------------------------------------
  while (!ns.fileExists("relaySMTP.exe")) {
    await ns.sleep(1000);
  }
  //--------------------------------------
  for (const server of servers3port) {
    ns.run("BnE.js", 1, server);
    /* ns.scp("autoBestHack.js",server,"home");
     ns.scp("bestHackSvr2.js",server,"home");
     ns.scp("remoteWG.js",server,"home");
     ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    /*ns.scp("autoBestHack.js", server, "home");
    ns.scp("bestHackSvr2.js", server, "home");
    ns.exec("autoBestHack.js", server);*/
  }
  //ns.exec("reupAll.js","home");
  //--------------------------------------
  while (!ns.fileExists("HTTPWorm.exe")) {
    await ns.sleep(1000);
  }
  //--------------------------------------
  for (const server of servers4port) {
    ns.run("BnE.js", 1, server);
    /*ns.scp("autoBestHack.js",server,"home");
    ns.scp("bestHackSvr2.js",server,"home");
    ns.scp("remoteWG.js",server,"home");
    ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    /*ns.scp("autoBestHack.js", server, "home");
    ns.scp("bestHackSvr2.js", server, "home");
    ns.exec("autoBestHack.js", server);*/
  }
  //ns.exec("reupAll.js","home");
  //--------------------------------------
  while (!ns.fileExists("SQLInject.exe")) {
    await ns.sleep(1000);
  }
  //--------------------------------------
  for (const server of servers5port) {
    ns.run("BnE.js", 1, server);
    /*ns.scp("autoBestHack.js",server,"home");
    ns.scp("bestHackSvr2.js",server,"home");
    ns.scp("remoteWG.js",server,"home");
    ns.scp("remoteAIO.js",server,"home");*/
    await ns.sleep(20);
    /*ns.scp("autoBestHack.js", server, "home");
    ns.scp("bestHackSvr2.js", server, "home");
    ns.exec("autoBestHack.js", server);*/
  }
  //ns.exec("reupAll.js","home");
}