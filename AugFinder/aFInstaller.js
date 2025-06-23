/**
 * @param {String} command
 * @return {Boolean}
 **/
export const inputTerminalCommand = (command) => {
	const terminalInput = globalThis["document"].getElementById("terminal-input")
	if (!terminalInput) {
		//ToastManager.instance.add("The terminal must be visible")
	} else if (terminalInput.hasAttribute("disabled")) {
		//ToastManager.instance.add("The terminal must not be in use")
	} else {
		terminalInput.value = command
		const handler = Object.keys(terminalInput)[1]
		terminalInput[handler].onChange({ target: terminalInput })
		terminalInput[handler].onKeyDown({ keyCode: 13, preventDefault: () => null })

		return true
	}

	return false
}


/**
 * @param {String[]} command
 * @return {Boolean}
 **/
export const inputTerminalCommands = (command) => inputTerminalCommand(command.join("; "))

/** @param {NS} ns */
export async function main(ns) {
  ns.rm("AugFinder/aF.txt");
  await ns.wget("https://raw.githubusercontent.com/TheeWingman/BitBurner/refs/heads/main/AugFinder/aF.txt", "AugFinder/aF.txt");
  const collection = JSON.parse(ns.read("AugFinder/aF.txt"));
  for(const item of collection){
    ns.write(item.filename, JSON.parse(item.fileContent),"w");
  }
  inputTerminalCommand(`alias aF="run AugFinder/findAugs.js"`);
}
