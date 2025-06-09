export function augments(ns){
  const CompletedProgramName = {bruteSsh:"bruteSsh", ftpCrack:"ftpCrack", relaySmtp:"relaySmtp", httpWorm:"httpWorm", sqlInject:"sqlInject", deepScan1:"deepScan1", deepScan2:"deepScan2", serverProfiler:"serverProfiler", autoLink:"autoLink", formulas:"formulas"};
  const augs = {
    // Alphabetical
    // === A === //
    ADRPheromone1: {
      repCost: 3.75e3,
      moneyCost: 1.75e7,
      info:
        "The body is genetically re-engineered so that it produces the ADR-V1 pheromone, " +
        "an artificial pheromone discovered by scientists. The ADR-V1 pheromone, when excreted, " +
        "triggers feelings of admiration and approval in other people.",
      company_rep: 1.1,
      faction_rep: 1.1,
      factions: [
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FourSigma,
      ],
    },
    ADRPheromone2: {
      repCost: 6.25e4,
      moneyCost: 5.5e8,
      info:
        "The body is genetically re-engineered so that it produces the ADR-V2 pheromone, " +
        "which is similar to but more potent than ADR-V1. This pheromone, when excreted, " +
        "triggers feelings of admiration, approval, and respect in others.",
      company_rep: 1.2,
      faction_rep: 1.2,
      factions: [
        ns.enums.FactionName.Silhouette,
        ns.enums.FactionName.FourSigma,
        ns.enums.FactionName.BachmanAssociates,
        ns.enums.FactionName.ClarkeIncorporated,
      ],
    },
    ArtificialBioNeuralNetwork: {
      repCost: 2.75e5,
      moneyCost: 3e9,
      info:
        "A network consisting of millions of nanoprocessors is embedded into the brain. " +
        "The network is meant to mimic the way a biological brain solves a problem, with each " +
        "nanoprocessor acting similar to the way a neuron would in a neural network. However, these " +
        "nanoprocessors are programmed to perform computations much faster than organic neurons, " +
        "allowing the user to solve much more complex problems at a much faster rate.",
      hacking_speed: 1.03,
      hacking_money: 1.15,
      hacking: 1.12,
      factions: [ns.enums.FactionName.BitRunners, ns.enums.FactionName.FulcrumSecretTechnologies],
    },
    ArtificialSynapticPotentiation: {
      repCost: 6.25e3,
      moneyCost: 8e7,
      info:
        "The body is injected with a chemical that artificially induces synaptic potentiation, " +
        "otherwise known as the strengthening of synapses. This results in enhanced cognitive abilities.",
      hacking_speed: 1.02,
      hacking_chance: 1.05,
      hacking_exp: 1.05,
      factions: [ns.enums.FactionName.TheBlackHand, ns.enums.FactionName.NiteSec],
    },
    // === B === //
    BeautyOfAphrodite: {
      repCost: 1e4,
      moneyCost: 1e6,
      info:
        "Pheromone extruder injected in the thoracodorsal nerve. Emits pleasing scent guaranteed to " +
        "make conversational partners more agreeable.",
      stats: "This augmentation makes the Bribe minigame easier by indicating the incorrect paths.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },/*
    BigDsBigBrain: {
      isSpecial: true,
      factions: [],
      repCost: Infinity,
      moneyCost: Infinity,
      info:
        "A chip containing the psyche of the greatest BitRunner to ever exist. " +
        "Installing this relic significantly increases ALL of your stats. " +
        "However, it may have unintended consequence on the users mental well-being.",
      stats: "Grants access to unimaginable power.",
      hacking: 2,
      strength: 2,
      defense: 2,
      dexterity: 2,
      agility: 2,
      charisma: 2,
      hacking_exp: 2,
      strength_exp: 2,
      defense_exp: 2,
      dexterity_exp: 2,
      agility_exp: 2,
      charisma_exp: 2,
      hacking_chance: 2,
      hacking_speed: 2,
      hacking_money: 2,
      hacking_grow: 2,
      company_rep: 2,
      faction_rep: 2,
      crime_money: 2,
      crime_success: 2,
      work_money: 2,
      hacknet_node_money: 2,
      hacknet_node_purchase_cost: 0.5,
      hacknet_node_ram_cost: 0.5,
      hacknet_node_core_cost: 0.5,
      hacknet_node_level_cost: 0.5,
      bladeburner_max_stamina: 2,
      bladeburner_stamina_gain: 2,
      bladeburner_analysis: 2,
      bladeburner_success_chance: 2,

      startingMoney: 1e12,
      programs: [
        CompletedProgramName.bruteSsh,
        CompletedProgramName.ftpCrack,
        CompletedProgramName.relaySmtp,
        CompletedProgramName.httpWorm,
        CompletedProgramName.sqlInject,
        CompletedProgramName.deepScan1,
        CompletedProgramName.deepScan2,
        CompletedProgramName.serverProfiler,
        CompletedProgramName.autoLink,
        CompletedProgramName.formulas,
      ],
    },*/
    BionicArms: {
      repCost: 6.25e4,
      moneyCost: 2.75e8,
      info: "Cybernetic arms created from plasteel and carbon fibers that completely replace the user's organic arms.",
      strength: 1.3,
      dexterity: 1.3,
      factions: [ns.enums.FactionName.Tetrads],
    },
    BionicLegs: {
      repCost: 1.5e5,
      moneyCost: 3.75e8,
      info: "Cybernetic legs, created from plasteel and carbon fibers, enhance running speed.",
      agility: 1.6,
      factions: [
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    BionicSpine: {
      repCost: 4.5e4,
      moneyCost: 1.25e8,
      info:
        "The spine is reconstructed using plasteel and carbon fibers. " +
        "It is now capable of stimulating and regulating neural signals " +
        "passing through the spinal cord, improving senses and reaction speed. " +
        "The 'Bionic Spine' also interfaces with all other 'Bionic' implants.",
      strength: 1.15,
      defense: 1.15,
      agility: 1.15,
      dexterity: 1.15,
      factions: [
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    BitWire: {
      repCost: 3.75e3,
      moneyCost: 1e7,
      info:
        "A small brain implant embedded in the cerebrum. This regulates and improves the brain's computing " +
        "capabilities.",
      hacking: 1.05,
      factions: [ns.enums.FactionName.CyberSec, ns.enums.FactionName.NiteSec],
    },
    BladeArmor: {
      repCost: 1.25e4,
      moneyCost: 1.375e9,
      info:
        `A powered exoskeleton suit designed as armor for ${ns.enums.FactionName.Bladeburners} units. This ` +
        "exoskeleton is incredibly adaptable and can protect the wearer from blunt, piercing, " +
        "concussive, thermal, chemical, and electric trauma. It also enhances the user's " +
        "physical abilities.",
      strength: 1.04,
      defense: 1.04,
      dexterity: 1.04,
      agility: 1.04,
      bladeburner_stamina_gain: 1.02,
      bladeburner_success_chance: 1.03,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeArmorEnergyShielding: {
      repCost: 2.125e4,
      moneyCost: 5.5e9,
      info:
        "Upgrades the BLADE-51b Tesla Armor with a plasma energy propulsion system " +
        "that is capable of projecting an energy shielding force field.",
      prereqs: ["BladeArmor"],
      defense: 1.05,
      bladeburner_success_chance: 1.06,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeArmorIPU: {
      repCost: 1.5e4,
      moneyCost: 1.1e9,
      info:
        "Upgrades the BLADE-51b Tesla Armor with an AI Information Processing " +
        "Unit that was specially designed to analyze Synthoid related data and " +
        "information.",
      prereqs: ["BladeArmor"],
      bladeburner_analysis: 1.15,
      bladeburner_success_chance: 1.02,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeArmorOmnibeam: {
      repCost: 6.25e4,
      moneyCost: 2.75e10,
      info:
        "Upgrades the BLADE-51b Tesla Armor Unibeam augmentation to use a " +
        "multiple-fiber system. This upgraded weapon uses multiple fiber laser " +
        "modules that combine together to form a single, more powerful beam of up to " +
        "2000MW.",
      prereqs: ["BladeArmorUnibeam"],
      bladeburner_success_chance: 1.1,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeArmorPowerCells: {
      repCost: 1.875e4,
      moneyCost: 2.75e9,
      info:
        "Upgrades the BLADE-51b Tesla Armor with Ion Power Cells, which are capable of " +
        "more efficiently storing and using power.",
      prereqs: ["BladeArmor"],
      bladeburner_success_chance: 1.05,
      bladeburner_stamina_gain: 1.02,
      bladeburner_max_stamina: 1.05,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeArmorUnibeam: {
      repCost: 3.125e4,
      moneyCost: 1.65e10,
      info:
        "Upgrades the BLADE-51b Tesla Armor with a concentrated deuterium-fluoride laser " +
        "weapon. Its precision and accuracy makes it useful for quickly neutralizing " +
        "threats while keeping casualties to a minimum.",
      prereqs: ["BladeArmor"],
      bladeburner_success_chance: 1.08,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladeRunner: {
      repCost: 2e4,
      moneyCost: 8.25e9,
      info:
        `A cybernetic foot augmentation that was specifically created for ${ns.enums.FactionName.Bladeburners} ` +
        "during the Synthoid Uprising. The organic musculature of the human foot " +
        "is enhanced with flexible carbon nanotube matrices that are controlled by " +
        "intelligent servo-motors.",
      agility: 1.05,
      bladeburner_max_stamina: 1.05,
      bladeburner_stamina_gain: 1.05,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BladesSimulacrum: {
      repCost: 1.25e3,
      moneyCost: 1.5e11,
      info:
        "A highly-advanced matter phase-shifter module that is embedded " +
        "in the brainstem and cerebellum. This augmentation allows " +
        "the user to project and control a holographic simulacrum within an " +
        "extremely large radius. These specially-modified holograms were specifically " +
        "weaponized by Bladeburner units to be used against Synthoids.",
      stats:
        "This augmentation allows you to perform Bladeburner actions and other actions (such as working, committing crimes, etc.) at the same time.",
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    BrachiBlades: {
      repCost: 1.25e4,
      moneyCost: 9e7,
      info: "A set of retractable plasteel blades that are implanted in the arm, underneath the skin.",
      strength: 1.15,
      defense: 1.15,
      crime_success: 1.1,
      crime_money: 1.15,
      factions: [ns.enums.FactionName.TheSyndicate],
    },
    // === C === //
    CRTX42AA: {
      repCost: 4.5e4,
      moneyCost: 2.25e8,
      info:
        "The CRTX42-AA gene is injected into the genome. " +
        "The CRTX42-AA is an artificially-synthesized gene that targets the visual and prefrontal " +
        "cortex and improves cognitive abilities.",
      hacking: 1.08,
      hacking_exp: 1.15,
      factions: [ns.enums.FactionName.NiteSec],
    },
    CashRoot: {
      repCost: 1.25e4,
      moneyCost: 1.25e8,
      info: "A collection of digital assets saved on a small chip. The chip is implanted into your wrist. A small jack in the chip allows you to connect it to a computer and upload the assets.",
      startingMoney: 1e6,
      programs: [CompletedProgramName.bruteSsh],
      factions: [ns.enums.FactionName.Sector12],
    },
    ChaosOfDionysus: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "Opto-occipito implant to process visual signals before brain interpretation.",
      stats: "This augmentation makes the Backwards minigame easier by flipping the words.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    CombatRib1: {
      repCost: 7.5e3,
      moneyCost: 2.375e7,
      info:
        "The rib cage is augmented to continuously release boosters into the bloodstream " +
        "which increase the oxygen-carrying capacity of blood.",
      strength: 1.1,
      defense: 1.1,
      factions: [
        ns.enums.FactionName.SlumSnakes,
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.Ishima,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    CombatRib2: {
      repCost: 1.875e4,
      moneyCost: 6.5e7,
      info:
        "An upgraded version of the 'Combat Rib' augmentation that adds potent stimulants which " +
        "improve focus and endurance while decreasing reaction time and fatigue.",
      prereqs: ["CombatRib1"],
      strength: 1.14,
      defense: 1.14,
      factions: [
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    CombatRib3: {
      repCost: 3.5e4,
      moneyCost: 1.2e8,
      info:
        "The latest version of the 'Combat Rib' augmentation releases advanced anabolic steroids that " +
        "improve muscle mass and physical performance while being safe and free of side effects.",
      prereqs: ["CombatRib1", "CombatRib2"],
      strength: 1.18,
      defense: 1.18,
      factions: [
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
        ns.enums.FactionName.TheCovenant,
      ],
    },
    CongruityImplant: {
      repCost: Infinity,
      moneyCost: 50e12,
      info:
        "Developed by a pioneer in Grafting research, this implant generates pulses of stability which seem to have a nullifying effect against the Entropy virus.\n\n" +
        "Note: For unknown reasons, the lowercase 'v' appears to be an integral component to its functionality.",
      stats: "This Augmentation removes the Entropy virus, and prevents it from affecting you again.",
      factions: [],
    },
    CordiARCReactor: {
      repCost: 1.125e6,
      moneyCost: 5e9,
      info:
        "The thoracic cavity is equipped with a small chamber designed " +
        "to hold and sustain hydrogen plasma. The plasma is used to generate " +
        "power through nuclear fusion, providing limitless amounts of clean " +
        "energy for the body.",
      strength: 1.35,
      defense: 1.35,
      dexterity: 1.35,
      agility: 1.35,
      strength_exp: 1.35,
      defense_exp: 1.35,
      dexterity_exp: 1.35,
      agility_exp: 1.35,
      factions: [ns.enums.FactionName.MegaCorp],
    },
    CranialSignalProcessorsG1: {
      repCost: 1e4,
      moneyCost: 7e7,
      info:
        "The first generation of Cranial Signal Processors. Cranial Signal Processors " +
        "are a set of specialized microprocessors that are attached to " +
        "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
        "so that the brain doesn't have to.",
      hacking_speed: 1.01,
      hacking: 1.05,
      factions: [ns.enums.FactionName.CyberSec, ns.enums.FactionName.NiteSec],
    },
    CranialSignalProcessorsG2: {
      repCost: 1.875e4,
      moneyCost: 1.25e8,
      info:
        "The second generation of Cranial Signal Processors. Cranial Signal Processors " +
        "are a set of specialized microprocessors that are attached to " +
        "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
        "so that the brain doesn't have to.",
      prereqs: ["CranialSignalProcessorsG1"],
      hacking_speed: 1.02,
      hacking_chance: 1.05,
      hacking: 1.07,
      factions: [ns.enums.FactionName.CyberSec, ns.enums.FactionName.NiteSec],
    },
    CranialSignalProcessorsG3: {
      repCost: 5e4,
      moneyCost: 5.5e8,
      info:
        "The third generation of Cranial Signal Processors. Cranial Signal Processors " +
        "are a set of specialized microprocessors that are attached to " +
        "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
        "so that the brain doesn't have to.",
      prereqs: ["CranialSignalProcessorsG1", "CranialSignalProcessorsG2"],
      hacking_speed: 1.02,
      hacking_money: 1.15,
      hacking: 1.09,
      factions: [ns.enums.FactionName.NiteSec, ns.enums.FactionName.TheBlackHand, ns.enums.FactionName.BitRunners],
    },
    CranialSignalProcessorsG4: {
      repCost: 1.25e5,
      moneyCost: 1.1e9,
      info:
        "The fourth generation of Cranial Signal Processors. Cranial Signal Processors " +
        "are a set of specialized microprocessors that are attached to " +
        "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
        "so that the brain doesn't have to.",
      prereqs: [
        "CranialSignalProcessorsG1",
        "CranialSignalProcessorsG2",
        "CranialSignalProcessorsG3",
      ],
      hacking_speed: 1.02,
      hacking_money: 1.2,
      hacking_grow: 1.25,
      factions: [ns.enums.FactionName.TheBlackHand, ns.enums.FactionName.BitRunners],
    },
    CranialSignalProcessorsG5: {
      repCost: 2.5e5,
      moneyCost: 2.25e9,
      info:
        "The fifth generation of Cranial Signal Processors. Cranial Signal Processors " +
        "are a set of specialized microprocessors that are attached to " +
        "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
        "so that the brain doesn't have to.",
      prereqs: [
        "CranialSignalProcessorsG1",
        "CranialSignalProcessorsG2",
        "CranialSignalProcessorsG3",
        "CranialSignalProcessorsG4",
      ],
      hacking: 1.3,
      hacking_money: 1.25,
      hacking_grow: 1.75,
      factions: [ns.enums.FactionName.BitRunners],
    },
    // === D === //
    DataJack: {
      repCost: 1.125e5,
      moneyCost: 4.5e8,
      info:
        "A brain implant that provides an interface for direct, wireless communication between a computer's main " +
        "memory and the mind. This implant allows the user to not only access a computer's memory, but also alter " +
        "and delete it.",
      hacking_money: 1.25,
      factions: [
        ns.enums.FactionName.BitRunners,
        ns.enums.FactionName.TheBlackHand,
        ns.enums.FactionName.NiteSec,
        ns.enums.FactionName.Chongqing,
        ns.enums.FactionName.NewTokyo,
      ],
    },
    DermaForce: {
      repCost: 1.5e4,
      moneyCost: 5e7,
      info:
        "Synthetic skin that is grafted onto the body. This skin consists of " +
        "millions of nanobots capable of projecting high-density muon beams, " +
        "creating an energy barrier around the user.",
      defense: 1.4,
      factions: [ns.enums.FactionName.Volhaven],
    },
    // === E === //
    EMS4Recombination: {
      repCost: 2.5e3,
      moneyCost: 2.75e8,
      info:
        "A DNA recombination of the EMS-4 Gene. This genetic engineering " +
        "technique was originally used on Bladeburners during the Synthoid uprising " +
        "to induce wakefulness and concentration, suppress fear, reduce empathy, " +
        "improve reflexes, and improve memory, among other things.",
      bladeburner_success_chance: 1.03,
      bladeburner_analysis: 1.05,
      bladeburner_stamina_gain: 1.02,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    ENM: {
      repCost: 1.5e4,
      moneyCost: 2.5e8,
      info:
        "A thin device embedded inside the arm containing a wireless module capable of connecting " +
        "to nearby networks. Once connected, the Netburner Module is capable of capturing and " +
        "processing all of the traffic on that network. By itself, the Embedded Netburner Module does " +
        "not do much, but a variety of very powerful upgrades can be installed that allow you to fully " +
        "control the traffic on a network.",
      hacking: 1.08,
      factions: [
        ns.enums.FactionName.BitRunners,
        ns.enums.FactionName.TheBlackHand,
        ns.enums.FactionName.NiteSec,
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    ENMAnalyzeEngine: {
      repCost: 6.25e5,
      moneyCost: 6e9,
      info:
        "Installs the Analyze Engine for the Embedded Netburner Module, which is a CPU cluster " +
        "that vastly outperforms the Netburner Module's native single-core processor.",
      prereqs: ["ENM"],
      hacking_speed: 1.1,
      factions: [
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.TheCovenant,
        ns.enums.FactionName.Illuminati,
      ],
    },
    ENMCore: {
      repCost: 175e3,
      moneyCost: 2.5e9,
      info:
        "The Core library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
        "This upgrade allows the Embedded Netburner Module to generate its own data on a network.",
      prereqs: ["ENM"],
      hacking_speed: 1.03,
      hacking_money: 1.1,
      hacking_chance: 1.03,
      hacking_exp: 1.07,
      hacking: 1.07,
      factions: [
        ns.enums.FactionName.BitRunners,
        ns.enums.FactionName.TheBlackHand,
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    ENMCoreV2: {
      repCost: 1e6,
      moneyCost: 4.5e9,
      info:
        "The Core V2 library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
        "This upgraded firmware allows the Embedded Netburner Module to control information on " +
        "a network by re-routing traffic, spoofing IP addresses, and altering the data inside network " +
        "packets.",
      prereqs: ["ENM", "ENMCore"],
      hacking_speed: 1.05,
      hacking_money: 1.3,
      hacking_chance: 1.05,
      hacking_exp: 1.15,
      hacking: 1.08,
      factions: [
        ns.enums.FactionName.BitRunners,
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.BladeIndustries,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
      ],
    },
    ENMCoreV3: {
      repCost: 1.75e6,
      moneyCost: 7.5e9,
      info:
        "The Core V3 library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
        "This upgraded firmware allows the Embedded Netburner Module to seamlessly inject code into " +
        "any device on a network.",
      prereqs: ["ENM", "ENMCore", "ENMcoreV2"],
      hacking_speed: 1.05,
      hacking_money: 1.4,
      hacking_chance: 1.1,
      hacking_exp: 1.25,
      hacking: 1.1,
      factions: [
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.TheCovenant,
        ns.enums.FactionName.Illuminati,
      ],
    },
    ENMDMA: {
      repCost: 1e6,
      moneyCost: 7e9,
      info:
        "This implant installs a Direct Memory Access (DMA) controller into the " +
        "Embedded Netburner Module. This allows the Module to send and receive data " +
        "directly to and from the main memory of devices on a network.",
      prereqs: ["ENM"],
      hacking_money: 1.4,
      hacking_chance: 1.2,
      factions: [
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.MegaCorp,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.TheCovenant,
        ns.enums.FactionName.Illuminati,
      ],
    },
    EnhancedMyelinSheathing: {
      repCost: 1e5,
      moneyCost: 1.375e9,
      info:
        "Electrical signals are used to induce a new, artificial form of myelinogenesis in the human body. " +
        "This process results in the proliferation of new, synthetic myelin sheaths in the nervous " +
        "system. These myelin sheaths can propagate neuro-signals much faster than their organic " +
        "counterparts, leading to greater processing speeds and better brain function.",
      hacking_speed: 1.03,
      hacking_exp: 1.1,
      hacking: 1.08,
      factions: [ns.enums.FactionName.FulcrumSecretTechnologies, ns.enums.FactionName.BitRunners, ns.enums.FactionName.TheBlackHand],
    },
    EnhancedSocialInteractionImplant: {
      repCost: 3.75e5,
      moneyCost: 1.375e9,
      info:
        "A cranial implant that greatly assists in the user's ability to analyze social situations " +
        "and interactions. The system uses a wide variety of factors such as facial expression, body " +
        "language, voice tone, and inflection to determine the best course of action during social " +
        "situations. The implant also uses deep learning software to continuously learn new behavior " +
        "patterns and how to best respond.",
      charisma: 1.6,
      charisma_exp: 1.6,
      factions: [
        ns.enums.FactionName.BachmanAssociates,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.ClarkeIncorporated,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.FourSigma,
      ],
    },
    EsperEyewear: {
      repCost: 1.25e3,
      moneyCost: 1.65e8,
      info:
        "Ballistic-grade protective and retractable eyewear that was designed specifically " +
        "for Bladeburner units. This " +
        "is implanted by installing a mechanical frame in the skull's orbit. " +
        "This frame interfaces with the brain and allows the user to " +
        "automatically extrude and extract the eyewear. The eyewear protects " +
        "against debris, shrapnel, lasers, blinding flashes, and gas. It is also " +
        "embedded with a data processing chip that can be programmed to display an " +
        "AR HUD to assist the user in field missions.",
      bladeburner_success_chance: 1.03,
      dexterity: 1.05,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    // === F === //
    FloodOfPoseidon: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "Transtinatium VVD reticulator used in optico-sterbing recognition.",
      stats: "This augmentation makes the Symbol matching minigame easier by indicating the correct choice.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    FocusWire: {
      repCost: 7.5e4,
      moneyCost: 9e8,
      info: "A cranial implant that stops procrastination by blocking specific neural pathways in the brain.",
      hacking_exp: 1.05,
      strength_exp: 1.05,
      defense_exp: 1.05,
      dexterity_exp: 1.05,
      agility_exp: 1.05,
      charisma_exp: 1.05,
      company_rep: 1.1,
      work_money: 1.2,
      factions: [
        ns.enums.FactionName.BachmanAssociates,
        ns.enums.FactionName.ClarkeIncorporated,
        ns.enums.FactionName.FourSigma,
        ns.enums.FactionName.KuaiGongInternational,
      ],
    },
    // === G === //
    GolemSerum: {
      repCost: 3.125e4,
      moneyCost: 1.1e10,
      info:
        "A serum that permanently enhances many aspects of human capabilities, " +
        "including strength, speed, immune system enhancements, and mitochondrial efficiency. The " +
        "serum was originally developed by the Chinese military in an attempt to " +
        "create super soldiers.",
      strength: 1.07,
      defense: 1.07,
      dexterity: 1.07,
      agility: 1.07,
      bladeburner_stamina_gain: 1.05,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    GrapheneBionicArms: {
      repCost: 5e5,
      moneyCost: 3.75e9,
      info:
        "An upgrade to the 'Bionic Arms' augmentation. It infuses the " +
        "prosthetic arms with an advanced graphene material " +
        "to make them stronger and lighter.",
      prereqs: ["BionicArms"],
      strength: 1.85,
      dexterity: 1.85,
      factions: [ns.enums.FactionName.TheDarkArmy],
    },
    GrapheneBionicLegs: {
      repCost: 7.5e5,
      moneyCost: 4.5e9,
      info:
        "An upgrade to the 'Bionic Legs' augmentation. The legs are fused " +
        "with graphene, greatly enhancing jumping ability.",
      prereqs: ["BionicLegs"],
      agility: 2.5,
      factions: [ns.enums.FactionName.MegaCorp, ns.enums.FactionName.ECorp, ns.enums.FactionName.FulcrumSecretTechnologies],
    },
    GrapheneBionicSpine: {
      repCost: 1.625e6,
      moneyCost: 6e9,
      info:
        "An upgrade to the 'Bionic Spine' augmentation. The spine is fused with graphene " +
        "which enhances durability and supercharges all body functions.",
      prereqs: ["BionicSpine"],
      strength: 1.6,
      defense: 1.6,
      agility: 1.6,
      dexterity: 1.6,
      factions: [ns.enums.FactionName.FulcrumSecretTechnologies, ns.enums.FactionName.ECorp],
    },
    GrapheneBoneLacings: {
      repCost: 1.125e6,
      moneyCost: 4.25e9,
      info: "Graphene is grafted and fused into the skeletal structure, enhancing bone density and tensile strength.",
      strength: 1.7,
      defense: 1.7,
      factions: [ns.enums.FactionName.FulcrumSecretTechnologies, ns.enums.FactionName.TheCovenant],
    },
    GrapheneBrachiBlades: {
      repCost: 2.25e5,
      moneyCost: 2.5e9,
      info:
        "An upgrade to the BrachiBlades augmentation. It infuses " +
        "the retractable blades with an advanced graphene material, " +
        "making them stronger and lighter.",
      prereqs: ["BrachiBlades"],
      strength: 1.4,
      defense: 1.4,
      crime_success: 1.1,
      crime_money: 1.3,
      factions: [ns.enums.FactionName.SpeakersForTheDead],
    },
    // === H === //
    HacknetNodeCPUUpload: {
      repCost: 3.75e3,
      moneyCost: 1.1e7,
      info:
        "Uploads the architecture and design details of a Hacknet Node's CPU into " +
        "the brain. This allows the user to engineer custom hardware and software " +
        "for the Hacknet Node that provides better performance.",
      hacknet_node_money: 1.15,
      hacknet_node_purchase_cost: 0.85,
      factions: [ns.enums.FactionName.Netburners],
    },
    HacknetNodeCacheUpload: {
      repCost: 2.5e3,
      moneyCost: 5.5e6,
      info:
        "Uploads the architecture and design details of a Hacknet Node's main-memory cache " +
        "into the brain. This allows the user to engineer custom cache hardware for the " +
        "Hacknet Node that offers better performance.",
      hacknet_node_money: 1.1,
      hacknet_node_level_cost: 0.85,
      factions: [ns.enums.FactionName.Netburners],
    },
    HacknetNodeCoreDNI: {
      repCost: 1.25e4,
      moneyCost: 6e7,
      info:
        "Installs a Direct-Neural Interface jack into the arm that is capable of connecting " +
        "to a Hacknet Node. This lets the user access and manipulate the Node's processing logic using " +
        "electrochemical signals.",
      hacknet_node_money: 1.45,
      factions: [ns.enums.FactionName.Netburners],
    },
    HacknetNodeKernelDNI: {
      repCost: 7.5e3,
      moneyCost: 4e7,
      info:
        "Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a " +
        "Hacknet Node. This lets the user access and manipulate the Node's kernel using " +
        "electrochemical signals.",
      hacknet_node_money: 1.25,
      factions: [ns.enums.FactionName.Netburners],
    },
    HacknetNodeNICUpload: {
      repCost: 1.875e3,
      moneyCost: 4.5e6,
      info:
        "Uploads the architecture and design details of a Hacknet Node's Network Interface Card (NIC) " +
        "into the brain. This allows the user to engineer a custom NIC for the Hacknet Node that " +
        "offers better performance.",
      hacknet_node_money: 1.1,
      hacknet_node_purchase_cost: 0.9,
      factions: [ns.enums.FactionName.Netburners],
    },
    HemoRecirculator: {
      moneyCost: 4.5e7,
      repCost: 1e4,
      info: "A heart implant that greatly increases the body's ability to effectively use and pump blood.",
      strength: 1.08,
      defense: 1.08,
      agility: 1.08,
      dexterity: 1.08,
      factions: [ns.enums.FactionName.Tetrads, ns.enums.FactionName.TheDarkArmy, ns.enums.FactionName.TheSyndicate],
    },
    HiveMind: {
      repCost: 1.5e6,
      moneyCost: 5.5e9,
      info:
        `A brain implant developed by ${ns.enums.FactionName.ECorp}. They do not reveal what ` +
        "exactly the implant does, but they promise that it will greatly " +
        "enhance your abilities.",
      hacking_grow: 3,
      stats:
        `Many hackers say that they can spoof money much better than normal after installing this augmentation. ` +
        `A leaked document from ${ns.enums.FactionName.ECorp} contains this weird message: "vnmehidi's gorw oprwe si ebesaccisl aiv sliguntayir".`,
      factions: [ns.enums.FactionName.ECorp],
    },
    HuntOfArtemis: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "Magneto-turboencabulator based on technology by Micha Eike Siemon, increases the user's electro-magnetic sensitivity.",
      stats:
        "This augmentation makes the Minesweeper minigame easier by showing the location of all mines and keeping their position.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    HydroflameLeftArm: {
      repCost: 1.25e6,
      moneyCost: 2.5e12,
      info:
        "The left arm of a legendary BitRunner who ascended beyond this world. " +
        "It projects a light blue energy shield that protects the exposed inner parts. " +
        "Even though it contains no weapons, the advanced tungsten titanium " +
        "alloy increases the user's strength to unbelievable levels.",
      strength: 2.8,
      factions: [ns.enums.FactionName.NWO],
    },
    HyperionV1: {
      repCost: 1.25e4,
      moneyCost: 2.75e9,
      info:
        "A pair of mini plasma cannons embedded into the hands. The Hyperion is capable " +
        "of rapidly firing bolts of high-density plasma. The weapon is meant to " +
        "be used against augmented enemies as the ionized " +
        "nature of the plasma disrupts the electrical systems of Augmentations. However, " +
        "it can also be effective against non-augmented enemies due to its high temperature " +
        "and concussive force.",
      bladeburner_success_chance: 1.06,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    HyperionV2: {
      repCost: 2.5e4,
      moneyCost: 5.5e9,
      info:
        "A pair of mini plasma cannons embedded into the hands. This augmentation " +
        "is more advanced and powerful than the original V1 model. This V2 model is " +
        "more power-efficient, more accurate, and can fire plasma bolts at a much " +
        "higher velocity than the V1 model.",
      prereqs: ["HyperionV1"],
      bladeburner_success_chance: 1.08,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    Hypersight: {
      repCost: 1.5e5,
      moneyCost: 2.75e9,
      info:
        "A bionic eye implant that enhances the user's sight far beyond that of a natural human. " +
        "Embedded circuitry within the implant provides the ability to detect heat and movement " +
        "through solid objects such as walls, thus providing 'x-ray vision'-like capabilities.",
      dexterity: 1.4,
      hacking_speed: 1.03,
      hacking_money: 1.1,
      factions: [ns.enums.FactionName.BladeIndustries, ns.enums.FactionName.KuaiGongInternational],
    },
    // === I === //
    INFRARet: {
      repCost: 7.5e3,
      moneyCost: 3e7,
      info: "A tiny chip that sits behind the retina. This implant lets the user visually detect infrared radiation.",
      crime_success: 1.25,
      crime_money: 1.1,
      dexterity: 1.1,
      factions: [ns.enums.FactionName.Ishima],
    },
    INTERLINKED: {
      repCost: 2.5e4,
      moneyCost: 5.5e9,
      info:
        "A drug which incites a DNA modification to the body's extracellular " +
        "matrix (ECM). This improves the ECM's ability to structurally " +
        "support the body, granting heightened strength and " +
        "durability.",
      strength_exp: 1.05,
      defense_exp: 1.05,
      dexterity_exp: 1.05,
      agility_exp: 1.05,
      bladeburner_max_stamina: 1.1,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    // === J === //
    // === K === //
    KnowledgeOfApollo: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "Neodynic retention fjengeln spoofer using -φ karmions, net positive effect on implantee's delta wave.",
      stats: "This augmentation makes the Wire Cutting minigame easier by indicating the incorrect wires.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    // === L === //
    LuminCloaking1: {
      repCost: 1.5e3,
      moneyCost: 5e6,
      info:
        "A skin implant that reinforces the skin with highly-advanced synthetic cells. These " +
        "cells, when powered, have a negative refractive index. As a result, they bend light " +
        "around the skin, making the user much harder to see with the naked eye.",
      agility: 1.05,
      crime_money: 1.1,
      factions: [ns.enums.FactionName.SlumSnakes, ns.enums.FactionName.Tetrads],
    },
    LuminCloaking2: {
      repCost: 5e3,
      moneyCost: 3e7,
      info:
        "This is a more advanced version of the LuminCloaking-V1 augmentation. This skin implant " +
        "reinforces the skin with highly-advanced synthetic cells. These " +
        "cells, when powered, are capable of not only bending light but also of bending heat, " +
        "making the user more resilient as well as stealthy.",
      prereqs: ["LuminCloaking1"],
      agility: 1.1,
      defense: 1.1,
      crime_money: 1.25,
      factions: [ns.enums.FactionName.SlumSnakes, ns.enums.FactionName.Tetrads],
    },
    // === M === //
    MightOfAres: {
      repCost: 1e4,
      moneyCost: 1e6,
      info:
        "Extra-ocular neurons taken from old martial arts master. Injecting them gives the user the ability to " +
        "predict the enemy's movement.",
      stats:
        "This augmentation makes the Slash minigame easier by showing you via an indicator when the sentinel is distracted.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    // === N === //
    NanofiberWeave: {
      repCost: 3.75e4,
      moneyCost: 1.25e8,
      info:
        "Synthetic nanofibers are woven into the skin's extracellular matrix using electrospinning, " +
        "which improves its regenerative and extracellular homeostasis abilities.",
      strength: 1.2,
      defense: 1.2,
      factions: [
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.BladeIndustries,
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.FulcrumSecretTechnologies,
      ],
    },
    Neotra: {
      repCost: 5.625e5,
      moneyCost: 2.875e9,
      info:
        "A highly-advanced techno-organic drug that is injected into the skeletal " +
        "and integumentary system. The drug permanently modifies the DNA of the " +
        "body's skin and bone cells, granting them the ability to repair " +
        "and restructure themselves.",
      strength: 1.55,
      defense: 1.55,
      factions: [ns.enums.FactionName.BladeIndustries],
    },
    NeuralAccelerator: {
      repCost: 2e5,
      moneyCost: 1.75e9,
      info:
        "A microprocessor that accelerates the processing " +
        "speed of biological neural networks. This is a cranial implant that is embedded inside the brain.",
      hacking: 1.1,
      hacking_exp: 1.15,
      hacking_money: 1.2,
      factions: [ns.enums.FactionName.BitRunners],
    },
    NeuralRetentionEnhancement: {
      repCost: 2e4,
      moneyCost: 2.5e8,
      info:
        "Chemical injections are used to permanently alter and strengthen the brain's neuronal " +
        "circuits, strengthening the ability to retain information.",
      hacking_exp: 1.25,
      factions: [ns.enums.FactionName.NiteSec],
    },
    Neuralstimulator: {
      repCost: 5e4,
      moneyCost: 3e9,
      info:
        "A cranial implant that intelligently stimulates certain areas of the brain " +
        "in order to improve cognitive functions.",
      hacking_speed: 1.02,
      hacking_chance: 1.1,
      hacking_exp: 1.12,
      factions: [
        ns.enums.FactionName.TheBlackHand,
        ns.enums.FactionName.Chongqing,
        ns.enums.FactionName.Sector12,
        ns.enums.FactionName.NewTokyo,
        ns.enums.FactionName.Aevum,
        ns.enums.FactionName.Ishima,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.BachmanAssociates,
        ns.enums.FactionName.ClarkeIncorporated,
        ns.enums.FactionName.FourSigma,
      ],
    },
    Neuregen: {
      repCost: 3.75e4,
      moneyCost: 3.75e8,
      info:
        "A drug that genetically modifies the neurons in the brain, " +
        "resulting in neurons that continuously " +
        "regenerate and strengthen themselves.",
      hacking_exp: 1.4,
      factions: [ns.enums.FactionName.Chongqing],
    },
    /*[NeuroFluxGovernor]: {
      repCost: 500,
      moneyCost: 750e3,
      info:
        "Undetectable adamantium nanobots injected in the user's bloodstream. The NeuroFlux Governor " +
        "monitors and regulates all aspects of the human body, essentially 'governing' the body. " +
        "By doing so, it improves the user's performance for most actions.",
      stats: `This special augmentation can be leveled up infinitely. Each level of this augmentation increases MOST multipliers by 1% (+${(
        donationBonus * 100
      ).toFixed(6)}%), stacking multiplicatively.`,
      isSpecial: true,
      hacking_chance: 1.01 + donationBonus,
      hacking_speed: 1.01 + donationBonus,
      hacking_money: 1.01 + donationBonus,
      hacking_grow: 1.01 + donationBonus,
      hacking: 1.01 + donationBonus,
      strength: 1.01 + donationBonus,
      defense: 1.01 + donationBonus,
      dexterity: 1.01 + donationBonus,
      agility: 1.01 + donationBonus,
      charisma: 1.01 + donationBonus,
      hacking_exp: 1.01 + donationBonus,
      strength_exp: 1.01 + donationBonus,
      defense_exp: 1.01 + donationBonus,
      dexterity_exp: 1.01 + donationBonus,
      agility_exp: 1.01 + donationBonus,
      charisma_exp: 1.01 + donationBonus,
      company_rep: 1.01 + donationBonus,
      faction_rep: 1.01 + donationBonus,
      crime_money: 1.01 + donationBonus,
      crime_success: 1.01 + donationBonus,
      hacknet_node_money: 1.01 + donationBonus,
      hacknet_node_purchase_cost: 1 / (1.01 + donationBonus),
      hacknet_node_ram_cost: 1 / (1.01 + donationBonus),
      hacknet_node_core_cost: 1 / (1.01 + donationBonus),
      hacknet_node_level_cost: 1 / (1.01 + donationBonus),
      work_money: 1.01 + donationBonus,
      factions: Object.values(ns.enums.FactionName).filter(
        (ns.enums.FactionName) =>
          ![ns.enums.FactionName.ShadowsOfAnarchy, ns.enums.FactionName.Bladeburners, ns.enums.FactionName.ChurchOfTheMachineGod].includes(
            ns.enums.FactionName,
          ),
      ),
    },*/
    Neurolink: {
      repCost: 8.75e5,
      moneyCost: 4.375e9,
      info:
        "A brain implant that provides a high-bandwidth, direct neural link between your " +
        `mind and the ${ns.enums.FactionName.BitRunners}' data servers, which reportedly contain ` +
        "the largest database of hacking tools and information in the world.",
      hacking: 1.15,
      hacking_exp: 1.2,
      hacking_chance: 1.1,
      hacking_speed: 1.05,
      programs: [CompletedProgramName.ftpCrack, CompletedProgramName.relaySmtp],
      factions: [ns.enums.FactionName.BitRunners],
    },
    NeuronalDensification: {
      repCost: 1.875e5,
      moneyCost: 1.375e9,
      info:
        "The brain is surgically re-engineered to have increased neuronal density " +
        "by decreasing the neuron gap junction. Then, the body is genetically modified " +
        "to enhance the production and capabilities of its neural stem cells.",
      hacking: 1.15,
      hacking_exp: 1.1,
      hacking_speed: 1.03,
      factions: [ns.enums.FactionName.ClarkeIncorporated],
    },
    NeuroreceptorManager: {
      repCost: 0.75e5,
      moneyCost: 5.5e8,
      info:
        "A brain implant carefully assembled around the synapses, which " +
        "micromanages the activity and levels of various neuroreceptor " +
        "chemicals and modulates electrical activity to optimize concentration, " +
        "allowing the user to multitask much more effectively.",
      stats:
        "This augmentation removes the penalty for not focusing on actions such as working in a job or working for a faction.",
      factions: [ns.enums.FactionName.TianDiHui],
    },
    Neurotrainer1: {
      repCost: 1e3,
      moneyCost: 4e6,
      info:
        "A decentralized cranial implant that improves the brain's ability to learn. It is " +
        "installed by releasing millions of nanobots into the human brain, each of which " +
        "attaches to a different neural pathway to enhance the brain's ability to retain " +
        "and retrieve information.",
      hacking_exp: 1.1,
      strength_exp: 1.1,
      defense_exp: 1.1,
      dexterity_exp: 1.1,
      agility_exp: 1.1,
      charisma_exp: 1.1,
      factions: [ns.enums.FactionName.CyberSec, ns.enums.FactionName.Aevum],
    },
    Neurotrainer2: {
      repCost: 1e4,
      moneyCost: 4.5e7,
      info:
        "A decentralized cranial implant that improves the brain's ability to learn. This " +
        "is a more powerful version of the Neurotrainer I augmentation, but it does not " +
        "require Neurotrainer I to be installed as a prerequisite.",
      hacking_exp: 1.15,
      strength_exp: 1.15,
      defense_exp: 1.15,
      dexterity_exp: 1.15,
      agility_exp: 1.15,
      charisma_exp: 1.15,
      factions: [ns.enums.FactionName.BitRunners, ns.enums.FactionName.NiteSec],
    },
    Neurotrainer3: {
      repCost: 2.5e4,
      moneyCost: 1.3e8,
      info:
        "A decentralized cranial implant that improves the brain's ability to learn. This " +
        "is a more powerful version of the Neurotrainer I and Neurotrainer II augmentation, " +
        "but it does not require either of them to be installed as a prerequisite.",
      hacking_exp: 1.2,
      strength_exp: 1.2,
      defense_exp: 1.2,
      dexterity_exp: 1.2,
      agility_exp: 1.2,
      charisma_exp: 1.2,
      factions: [ns.enums.FactionName.NWO, ns.enums.FactionName.FourSigma],
    },
    NuoptimalInjectorImplant: {
      repCost: 5e3,
      moneyCost: 2e7,
      info:
        "This torso implant automatically injects nootropic supplements into " +
        "the bloodstream to improve memory, increase focus, and provide other " +
        "cognitive enhancements.",
      company_rep: 1.2,
      factions: [
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.NewTokyo,
        ns.enums.FactionName.Chongqing,
        ns.enums.FactionName.ClarkeIncorporated,
        ns.enums.FactionName.FourSigma,
        ns.enums.FactionName.BachmanAssociates,
      ],
    },
    NutriGen: {
      repCost: 6.25e3,
      moneyCost: 2.5e6,
      info:
        "A thermal-powered artificial nutrition generator. Endogenously " +
        "synthesizes glucose, amino acids, and vitamins, and redistributes them " +
        "across the body. The device is powered by the body's naturally wasted " +
        "energy in the form of heat.",
      strength_exp: 1.2,
      defense_exp: 1.2,
      dexterity_exp: 1.2,
      agility_exp: 1.2,
      factions: [ns.enums.FactionName.NewTokyo],
    },
    nextSENS: {
      repCost: 4.375e5,
      moneyCost: 1.925e9,
      info:
        "The body is genetically re-engineered to maintain a state " +
        "of negligible senescence, preventing the body from " +
        "deteriorating with age.",
      hacking: 1.2,
      strength: 1.2,
      defense: 1.2,
      dexterity: 1.2,
      agility: 1.2,
      charisma: 1.2,
      factions: [ns.enums.FactionName.ClarkeIncorporated],
    },
    // === O === //
    OmniTekInfoLoad: {
      repCost: 6.25e5,
      moneyCost: 2.875e9,
      info:
        "OmniTek's data and information repository is uploaded " +
        "into your brain, enhancing your programming and " +
        "hacking abilities.",
      hacking: 1.2,
      hacking_exp: 1.25,
      factions: [ns.enums.FactionName.OmniTekIncorporated],
    },
    OrionShoulder: {
      repCost: 6.25e3,
      moneyCost: 5.5e8,
      info:
        "A bionic shoulder augmentation for the right shoulder. Using cybernetics, " +
        "the ORION-MKIV shoulder enhances the strength and dexterity " +
        "of the user's right arm. It also provides protection due to its " +
        "crystallized graphene plating.",
      defense: 1.05,
      strength: 1.05,
      dexterity: 1.05,
      bladeburner_success_chance: 1.04,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    // === P === //
    PCDNI: {
      repCost: 3.75e5,
      moneyCost: 3.75e9,
      info:
        "Installs a Direct-Neural Interface jack into your arm that is compatible with most " +
        "computers. Connecting to a computer through this jack allows you to interface with " +
        "it using the brain's electrochemical signals.",
      company_rep: 1.3,
      hacking: 1.08,
      factions: [
        ns.enums.FactionName.FourSigma,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.ECorp,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    PCDNINeuralNetwork: {
      repCost: 1.5e6,
      moneyCost: 7.5e9,
      info:
        "This is an additional installation that upgrades the functionality of the " +
        "PC Direct-Neural Interface augmentation. When connected to a computer, " +
        "the Neural Network upgrade allows the user to use their own brain's " +
        "processing power to aid the computer in computational tasks.",
      prereqs: ["PCDNI"],
      company_rep: 2,
      hacking: 1.1,
      hacking_speed: 1.05,
      factions: [ns.enums.FactionName.FulcrumSecretTechnologies],
    },
    PCDNIOptimizer: {
      repCost: 5e5,
      moneyCost: 4.5e9,
      info:
        "This is a submodule upgrade to the PC Direct-Neural Interface augmentation. It " +
        "improves the performance of the interface and gives the user more control options " +
        "to a connected computer.",
      prereqs: ["PCDNI"],
      company_rep: 1.75,
      hacking: 1.1,
      factions: [ns.enums.FactionName.FulcrumSecretTechnologies, ns.enums.FactionName.ECorp, ns.enums.FactionName.BladeIndustries],
    },
    PCMatrix: {
      repCost: 100e3,
      moneyCost: 2e9,
      info:
        "A 'Probability Computation Matrix' is installed in the frontal cortex. This implant " +
        "uses advanced mathematical algorithms to rapidly identify and compute statistical " +
        "outcomes of nearly every situation.",
      charisma: 1.0777,
      charisma_exp: 1.0777,
      work_money: 1.777,
      faction_rep: 1.0777,
      company_rep: 1.0777,
      crime_success: 1.0777,
      crime_money: 1.0777,
      programs: [CompletedProgramName.deepScan1, CompletedProgramName.autoLink],
      factions: [ns.enums.FactionName.Aevum],
    },
    PhotosyntheticCells: {
      repCost: 5.625e5,
      moneyCost: 2.75e9,
      info:
        "Chloroplasts are added to epidermal stem cells and are applied " +
        "to the body using a skin graft. The result is photosynthetic " +
        "skin cells, allowing users to generate their own energy " +
        "and nutrition using solar power.",
      strength: 1.4,
      defense: 1.4,
      agility: 1.4,
      factions: [ns.enums.FactionName.KuaiGongInternational],
    },
    PowerRecirculator: {
      repCost: 2.5e4,
      moneyCost: 1.8e8,
      info:
        "The body's nerves are attached with polypyrrole nanocircuits that " +
        "are capable of capturing wasted energy, in the form of heat, " +
        "and converting it back into usable power.",
      hacking: 1.05,
      strength: 1.05,
      defense: 1.05,
      dexterity: 1.05,
      agility: 1.05,
      charisma: 1.05,
      hacking_exp: 1.1,
      strength_exp: 1.1,
      defense_exp: 1.1,
      dexterity_exp: 1.1,
      agility_exp: 1.1,
      charisma_exp: 1.1,
      factions: [ns.enums.FactionName.Tetrads, ns.enums.FactionName.TheDarkArmy, ns.enums.FactionName.TheSyndicate, ns.enums.FactionName.NWO],
    },
    // === Q === //
    QLink: {
      repCost: 1.875e6,
      moneyCost: 2.5e13,
      info:
        "A brain implant that wirelessly connects you to the Illuminati's " +
        "quantum supercomputer, allowing you to access and use its incredible " +
        "computing power.",
      hacking: 1.75,
      hacking_speed: 2,
      hacking_chance: 2.5,
      hacking_money: 4,
      factions: [ns.enums.FactionName.Illuminati],
    },
    // === R === //
    // === S === //
    SNA: {
      repCost: 6.25e3,
      moneyCost: 3e7,
      info:
        "A cranial implant that affects the user's personality, making them better " +
        "at negotiation in social situations.",
      work_money: 1.1,
      company_rep: 1.15,
      faction_rep: 1.15,
      factions: [ns.enums.FactionName.TianDiHui],
    },
    SPTN97: {
      repCost: 1.25e6,
      moneyCost: 4.875e9,
      info:
        "The SPTN-97 gene is injected into the genome. The SPTN-97 gene is an " +
        "artificially-synthesized gene that was developed by DARPA to create " +
        "super-soldiers through genetic modification. The gene was outlawed in " +
        "2056.",
      strength: 1.75,
      defense: 1.75,
      dexterity: 1.75,
      agility: 1.75,
      hacking: 1.15,
      factions: [ns.enums.FactionName.TheCovenant],
    },
    ShadowsSimulacrum: {
      repCost: 3.75e4,
      moneyCost: 4e8,
      info:
        "A crude but functional matter phase-shifter module that is embedded " +
        "in the brainstem and cerebellum. This augmentation was developed by " +
        "criminal organizations and allows the user to project and control holographic " +
        "simulacrums within a large radius. These simulacrums are commonly used for " +
        "espionage and surveillance work.",
      company_rep: 1.15,
      faction_rep: 1.15,
      factions: [ns.enums.FactionName.TheSyndicate, ns.enums.FactionName.TheDarkArmy, ns.enums.FactionName.SpeakersForTheDead],
    },
    SmartJaw: {
      repCost: 3.75e5,
      moneyCost: 2.75e9,
      info:
        "A bionic jaw that contains advanced hardware and software " +
        "capable of psychoanalyzing and profiling the personality of " +
        "others using optical imaging software.",
      charisma: 1.5,
      charisma_exp: 1.5,
      company_rep: 1.25,
      faction_rep: 1.25,
      factions: [ns.enums.FactionName.BachmanAssociates],
    },
    SmartSonar: {
      repCost: 2.25e4,
      moneyCost: 7.5e7,
      info: "A cochlear implant that helps the player detect and locate enemies using sound propagation.",
      dexterity: 1.1,
      dexterity_exp: 1.15,
      crime_money: 1.25,
      factions: [ns.enums.FactionName.SlumSnakes],
    },
    SpeechEnhancement: {
      repCost: 2.5e3,
      moneyCost: 1.25e7,
      info:
        "An advanced neural implant that improves your speaking abilities, making " +
        "you more convincing and likable in conversations and overall improving your " +
        "social interactions.",
      company_rep: 1.1,
      charisma: 1.1,
      factions: [
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.FourSigma,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.ClarkeIncorporated,
        ns.enums.FactionName.BachmanAssociates,
      ],
    },
    SpeechProcessor: {
      repCost: 7.5e3,
      moneyCost: 5e7,
      info:
        "A cochlear implant with an embedded computer that analyzes incoming speech. " +
        "The embedded computer processes characteristics of incoming speech, such as tone " +
        "and inflection, to pick up on subtle cues and aid in social interactions.",
      charisma: 1.2,
      factions: [
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.Chongqing,
        ns.enums.FactionName.Sector12,
        ns.enums.FactionName.NewTokyo,
        ns.enums.FactionName.Aevum,
        ns.enums.FactionName.Ishima,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.Silhouette,
      ],
    },
    StaneksGift1: {
      repCost: 0,
      moneyCost: 0,
      info:
        'Allison "Mother" Stanek imparts you with her gift. An ' +
        "experimental Augmentation implanted at the base of the neck. " +
        "It allows you to overclock your entire system by carefully " +
        "changing the configuration.",
      isSpecial: true,
      hacking_chance: 0.9,
      hacking_speed: 0.9,
      hacking_money: 0.9,
      hacking_grow: 0.9,
      hacking: 0.9,
      strength: 0.9,
      defense: 0.9,
      dexterity: 0.9,
      agility: 0.9,
      charisma: 0.9,
      hacking_exp: 0.9,
      strength_exp: 0.9,
      defense_exp: 0.9,
      dexterity_exp: 0.9,
      agility_exp: 0.9,
      charisma_exp: 0.9,
      company_rep: 0.9,
      faction_rep: 0.9,
      crime_money: 0.9,
      crime_success: 0.9,
      hacknet_node_money: 0.9,
      hacknet_node_purchase_cost: 1.1,
      hacknet_node_ram_cost: 1.1,
      hacknet_node_core_cost: 1.1,
      hacknet_node_level_cost: 1.1,
      work_money: 0.9,
      stats: "Its unstable nature decreases all your stats by 10%.",
      factions: [ns.enums.FactionName.ChurchOfTheMachineGod],
    },
    StaneksGift2: {
      repCost: 1e6,
      moneyCost: 0,
      info:
        "The next evolution is near, a union of man and machine. A synthesis greater than the birth of the human " +
        "organism. Time spent with the gift has allowed for acclimatization of the invasive augment and the toll it takes upon " +
        "your frame, granting a 5% reduced penalty to all stats.",
      prereqs: ["StaneksGift1"],
      isSpecial: true,
      hacking_chance: 0.95 / 0.9,
      hacking_speed: 0.95 / 0.9,
      hacking_money: 0.95 / 0.9,
      hacking_grow: 0.95 / 0.9,
      hacking: 0.95 / 0.9,
      strength: 0.95 / 0.9,
      defense: 0.95 / 0.9,
      dexterity: 0.95 / 0.9,
      agility: 0.95 / 0.9,
      charisma: 0.95 / 0.9,
      hacking_exp: 0.95 / 0.9,
      strength_exp: 0.95 / 0.9,
      defense_exp: 0.95 / 0.9,
      dexterity_exp: 0.95 / 0.9,
      agility_exp: 0.95 / 0.9,
      charisma_exp: 0.95 / 0.9,
      company_rep: 0.95 / 0.9,
      faction_rep: 0.95 / 0.9,
      crime_money: 0.95 / 0.9,
      crime_success: 0.95 / 0.9,
      hacknet_node_money: 0.95 / 0.9,
      hacknet_node_purchase_cost: 1.05 / 1.1,
      hacknet_node_ram_cost: 1.05 / 1.1,
      hacknet_node_core_cost: 1.05 / 1.1,
      hacknet_node_level_cost: 1.05 / 1.1,
      work_money: 0.95 / 0.9,
      stats: "The penalty for the gift is reduced to 5%.",
      factions: [ns.enums.FactionName.ChurchOfTheMachineGod],
    },
    StaneksGift3: {
      repCost: 1e8,
      moneyCost: 0,
      info:
        "The synthesis of human and machine is nothing to fear. It is our destiny. " +
        "You will become greater than the sum of our parts. As One. Embrace your gift " +
        "fully and wholly free of its accursed toll. Serenity brings tranquility in the form " +
        "of no longer suffering a stat penalty. ",
      prereqs: ["StaneksGift1", "StaneksGift2"],
      isSpecial: true,
      hacking_chance: 1 / 0.95,
      hacking_speed: 1 / 0.95,
      hacking_money: 1 / 0.95,
      hacking_grow: 1 / 0.95,
      hacking: 1 / 0.95,
      strength: 1 / 0.95,
      defense: 1 / 0.95,
      dexterity: 1 / 0.95,
      agility: 1 / 0.95,
      charisma: 1 / 0.95,
      hacking_exp: 1 / 0.95,
      strength_exp: 1 / 0.95,
      defense_exp: 1 / 0.95,
      dexterity_exp: 1 / 0.95,
      agility_exp: 1 / 0.95,
      charisma_exp: 1 / 0.95,
      company_rep: 1 / 0.95,
      faction_rep: 1 / 0.95,
      crime_money: 1 / 0.95,
      crime_success: 1 / 0.95,
      hacknet_node_money: 1 / 0.95,
      hacknet_node_purchase_cost: 1 / 1.05,
      hacknet_node_ram_cost: 1 / 1.05,
      hacknet_node_core_cost: 1 / 1.05,
      hacknet_node_level_cost: 1 / 1.05,
      work_money: 1 / 0.95,
      stats: "Stanek's Gift has no penalty.",
      factions: [ns.enums.FactionName.ChurchOfTheMachineGod],
    },
    SubdermalArmor: {
      repCost: 8.75e5,
      moneyCost: 3.25e9,
      info:
        "The NEMEAN Subdermal Weave is a thin, light-weight, graphene plating that houses a dilatant fluid. " +
        "The material is implanted underneath the skin, and is the most advanced form of defensive enhancement " +
        "that has ever been created. The dilatant fluid, despite being thin and light, is extremely effective " +
        "at stopping piercing blows and reducing blunt trauma. The properties of graphene allow the plating to " +
        "mitigate damage from any fire or electrical traumas.",
      defense: 2.2,
      factions: [
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.Illuminati,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.TheCovenant,
      ],
    },
    SynapticEnhancement: {
      repCost: 2e3,
      moneyCost: 7.5e6,
      info:
        "A small cranial implant that continuously uses weak electrical signals to stimulate the brain and " +
        "induce stronger synaptic activity. This improves the user's cognitive abilities.",
      hacking_speed: 1.03,
      factions: [ns.enums.FactionName.CyberSec, ns.enums.FactionName.Aevum],
    },
    SynfibrilMuscle: {
      repCost: 4.375e5,
      moneyCost: 1.125e9,
      info:
        "The myofibrils in human muscles are injected with special chemicals that react with the proteins inside " +
        "the myofibrils, altering their underlying structure. The end result is muscles that are stronger and more elastic. " +
        "Scientists have named these artificially enhanced units 'synfibrils'.",
      strength: 1.3,
      defense: 1.3,
      factions: [
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.TheCovenant,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.Illuminati,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    SyntheticHeart: {
      moneyCost: 2.875e9,
      repCost: 7.5e5,
      info:
        "This advanced artificial heart, created from plasteel and graphene, is capable of pumping blood " +
        "more efficiently than an organic heart.",
      agility: 1.5,
      strength: 1.5,
      factions: [
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.FulcrumSecretTechnologies,
        ns.enums.FactionName.SpeakersForTheDead,
        ns.enums.FactionName.NWO,
        ns.enums.FactionName.TheCovenant,
        ns.enums.FactionName.Daedalus,
        ns.enums.FactionName.Illuminati,
      ],
    },
    // === T === //
    TITN41Injection: {
      repCost: 2.5e4,
      moneyCost: 1.9e8,
      info:
        "TITN is a series of viruses that targets and alters the sequences of human DNA in genes that " +
        "control personality. The TITN-41 strain alters these genes so that the subject becomes more " +
        "outgoing and sociable.",
      charisma: 1.15,
      charisma_exp: 1.15,
      factions: [ns.enums.FactionName.Silhouette],
    },
    Targeting1: {
      moneyCost: 1.5e7,
      repCost: 5e3,
      info:
        "A cranial implant that is embedded within the inner ear structures and optic nerves. It regulates " +
        "and enhances balance and hand-eye coordination.",
      dexterity: 1.1,
      factions: [
        ns.enums.FactionName.SlumSnakes,
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.Sector12,
        ns.enums.FactionName.Ishima,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    Targeting2: {
      moneyCost: 4.25e7,
      repCost: 8.75e3,
      info:
        "This upgraded version of the 'Augmented Targeting' implant is capable of augmenting " +
        "reality by digitally displaying weaknesses and vital signs of threats.",
      prereqs: ["Targeting1"],
      dexterity: 1.2,
      factions: [
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.Sector12,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
      ],
    },
    Targeting3: {
      moneyCost: 1.15e8,
      repCost: 2.75e4,
      info: "The latest version of the 'Augmented Targeting' implant adds the ability to lock-on and track threats.",
      prereqs: ["Targeting1", "Targeting2"],
      dexterity: 1.3,
      factions: [
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.OmniTekIncorporated,
        ns.enums.FactionName.KuaiGongInternational,
        ns.enums.FactionName.BladeIndustries,
        ns.enums.FactionName.TheCovenant,
      ],
    },
    TheBlackHand: {
      repCost: 1e5,
      moneyCost: 5.5e8,
      info:
        "A highly advanced bionic hand. This prosthetic not only " +
        "enhances the user's strength and dexterity, but is also embedded " +
        "with hardware and firmware that lets them connect to, access, and hack " +
        "devices and machines by just touching them.",
      strength: 1.15,
      dexterity: 1.15,
      hacking: 1.1,
      hacking_speed: 1.02,
      hacking_money: 1.1,
      factions: [ns.enums.FactionName.TheBlackHand],
    },
    TheRedPill: {
      repCost: 2.5e6,
      moneyCost: 0,
      info: "It's time to leave the cave.",
      stats: "",
      isSpecial: true,
      factions: [ns.enums.FactionName.Daedalus],
    },
    TrickeryOfHermes: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "Penta-dynamo-neurovascular-valve inserted in the carpal ligament, enhances dexterity.",
      stats: "This augmentation makes the Cheat Code minigame easier by showing what character will come next.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    // === U === //
    /*[UnstableCircadianModulator]: getUnstableCircadianModulatorParams(),*/
    // === V === //
    VangelisVirus: {
      repCost: 1.875e4,
      moneyCost: 2.75e9,
      info:
        "A synthetic symbiotic virus that is injected into human brain tissue. The Vangelis virus " +
        "heightens the senses and focus of its host while also enhancing their intuition.",
      dexterity_exp: 1.1,
      bladeburner_analysis: 1.1,
      bladeburner_success_chance: 1.04,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    VangelisVirus3: {
      repCost: 3.75e4,
      moneyCost: 1.1e10,
      info:
        "An improve[]d version of Vangelis, a synthetic symbiotic virus that is " +
        "injected into human brain tissue. On top of the benefits of the original " +
        "virus, this also grants accelerated healing and enhanced " +
        "reflexes.",
      prereqs: ["VangelisVirus"],
      defense_exp: 1.1,
      dexterity_exp: 1.1,
      bladeburner_analysis: 1.15,
      bladeburner_success_chance: 1.05,
      isSpecial: true,
      factions: [ns.enums.FactionName.Bladeburners],
    },
    // === W === //
    WKSharmonizer: {
      repCost: 1e4,
      moneyCost: 1e6,
      info:
        `A copy of the WKS harmonizer from the MIA leader of the ${ns.enums.FactionName.ShadowsOfAnarchy} ` +
        "injects *Γ-based cells that provide general enhancement to the body.",
      stats:
        "This augmentation makes many aspects of infiltration easier and more productive via increased timer and rewards, reduced damage taken, etc.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    WiredReflexes: {
      repCost: 1.25e3,
      moneyCost: 2.5e6,
      info:
        "Synthetic nerve-enhancements are injected into all major parts of the somatic nervous system, " +
        "supercharging the spread of neural signals and increasing reflex speed.",
      agility: 1.05,
      dexterity: 1.05,
      factions: [
        ns.enums.FactionName.TianDiHui,
        ns.enums.FactionName.SlumSnakes,
        ns.enums.FactionName.Sector12,
        ns.enums.FactionName.Volhaven,
        ns.enums.FactionName.Aevum,
        ns.enums.FactionName.Ishima,
        ns.enums.FactionName.TheSyndicate,
        ns.enums.FactionName.TheDarkArmy,
        ns.enums.FactionName.SpeakersForTheDead,
      ],
    },
    WisdomOfAthena: {
      repCost: 1e4,
      moneyCost: 1e6,
      info: "A connective brain implant to SASHA that focuses on pattern recognition and predictive templating.",
      stats: "This augmentation makes the Bracket minigame easier by removing all '[' ']'.",
      isSpecial: true,
      factions: [ns.enums.FactionName.ShadowsOfAnarchy],
    },
    // === X === //
    Xanipher: {
      repCost: 8.75e5,
      moneyCost: 4.25e9,
      info:
        "A concoction of advanced nanobots that is orally ingested into the " +
        "body. These nanobots induce physiological changes and significantly " +
        "improve the body's functioning in all aspects.",
      hacking: 1.2,
      strength: 1.2,
      defense: 1.2,
      dexterity: 1.2,
      agility: 1.2,
      charisma: 1.2,
      hacking_exp: 1.15,
      strength_exp: 1.15,
      defense_exp: 1.15,
      dexterity_exp: 1.15,
      agility_exp: 1.15,
      charisma_exp: 1.15,
      factions: [ns.enums.FactionName.NWO],
    },
    // === Y === //
    // === Z === //
    ZOE: {
      isSpecial: true,
      repCost: Infinity,
      moneyCost: 1e12,
      info:
        "Zoë's Omnicerebrum Ënhancer for sleeves inserts an omnicerebrum into your sleeve. " +
        "An omnicerebrum is a near perfect simulation of the human brain, allowing it to take advantage of a larger variety of augments. " +
        "But you should know about this, BitRunner, since you have one of these yourself!",
      stats: "Allows sleeves to benefit from Stanek's Gift, but is less powerful if several are installed.",
      factions: [
        /*Technically in ns.enums.FactionNames.ChurchOfTheMachineGod but not really for display reasons */
      ],
    },
  };
  return augs;
}