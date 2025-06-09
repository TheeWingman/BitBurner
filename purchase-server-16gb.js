import bestHack from "bestHackSvr2.js";

/** @param {NS} ns */
export async function main(ns) {
// How much RAM each purchased server will have. In this case, it'll
    // be 8GB.
    const ram = 16;

    // Iterator we'll use for our loop
    let i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        /*let pservs= ns.getPurchasedServers();
        for(const pserv of pservs){
            if(pserv == ("pserv-"+i)){
                ++i;
            }
            else{*/
                // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let hostname = "pserv-"+i;
            ns.purchaseServer("pserv-" + i, ram);
                //ns.scp("autoBestHack.js", hostname,"home");
                //ns.scp("bestHackSvr2.js",hostname,"home");
                //ns.scp("remoteWG.js",hostname,"home");
            //ns.scp("remoteAIO.js",hostname,"home");
            //ns.exec("remoteAIO.js", hostname,3,bestHack(ns));
                ++i;
                //}
            //}
        }
        //Make the script wait for a second before looping again.
        //Removing this line will cause an infinite loop and crash the game.
        await ns.sleep(1000);
    }
}