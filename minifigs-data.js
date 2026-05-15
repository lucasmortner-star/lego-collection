// ========================================
// LEGO Minifigs - Ortner's Collection
// Star Wars: Force-users + set-derived characters
// ========================================
//
// Schema:
//   id              - BrickLink minifig ID (e.g. "sw0552"); also used for image URL
//   name            - Display name
//   side            - "Jedi" | "Sith" | "Inquisitor" | "Other Dark"
//                   | "Hero" | "Trooper" | "Droid" | "Imperial" | "Bounty Hunter" | "Alien"
//   era             - "Prequel" | "Clone Wars" | "Original" | "Sequel" | "Rebels" | "Mandalorian" | "Imperial"
//   source          - Set number (e.g. "75291") or "BrickLink" (purchased loose)
//   sourceSetName   - Optional: name of source set, for display
//   year            - Year minifig variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - Approximate BrickLink "Used Avg" price (USD)
//   owned           - true if we have it, false if it's a "want"
//   qty             - How many copies we own
//   image           - Optional override image URL; otherwise auto-derived from id
//   notes           - Optional flavor / clarification

const MINIFIGS_DATA = {
  minifigs: [
    // ============================================================
    // SITH (owned)
    // ============================================================
    { id: "sw0399", name: "Darth Maul", side: "Sith", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Uncommon", currentValue: 40, owned: true, qty: 1, notes: "Dual-bladed red saber" },
    { id: "sw1228", name: "Darth Vader (Two-Piece Helmet)", side: "Sith", era: "Original", source: "BrickLink", year: 2020, rarity: "Rare", currentValue: 70, owned: true, qty: 1, notes: "Premium variant with detachable helmet" },
    { id: "sw0552", name: "Anakin Skywalker (Sith Eyes, Ep. III)", side: "Sith", era: "Prequel", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "Yellow Sith eyes, the fallen Anakin" },
    { id: "sw1228b", name: "Darth Vader (standard)", side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 25, owned: true, qty: 1 },
    { id: "sw0466", name: "Darth Vader (Holiday/Advent)", side: "Sith", era: "Original", source: "Advent Calendar", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Christmas/holiday variant from a LEGO advent calendar" },
    { id: "sw1085", name: "Emperor Palpatine", side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 22, owned: true, qty: 1 },
    { id: "sw1093", name: "Kylo Ren", side: "Sith", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Common", currentValue: 18, owned: true, qty: 1 },

    // ============================================================
    // SITH (need — to order)
    // ============================================================
    { id: "sw0224", name: "Count Dooku", side: "Sith", era: "Clone Wars", source: "BrickLink", year: 2009, rarity: "Rare", currentValue: 70, owned: false, qty: 0, notes: "Curved-hilt red saber" },
    { id: "sw0615", name: "Asajj Ventress", side: "Sith", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Dual curved red sabers, Dooku's apprentice" },
    { id: "sw0689", name: "Savage Opress", side: "Sith", era: "Clone Wars", source: "BrickLink", year: 2015, rarity: "Ultra-Rare", currentValue: 150, owned: false, qty: 0, notes: "Maul's brother, Nightbrother Zabrak" },
    { id: "sw0817", name: "Mother Talzin", side: "Sith", era: "Clone Wars", source: "BrickLink", year: 2017, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Nightsister matriarch, extremely rare" },

    // ============================================================
    // INQUISITORS (owned)
    // ============================================================
    { id: "sw1410", name: "Reva (Third Sister)", side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "From the Obi-Wan Kenobi series" },
    { id: "sw1098", name: "Grand Inquisitor (Helmet)", side: "Inquisitor", era: "Rebels", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 35, owned: true, qty: 1, notes: "Helmet variant" },
    { id: "sw0622", name: "The Inquisitor (Grand Inquisitor, Rebels)", side: "Inquisitor", era: "Rebels", source: "75082", sourceSetName: "TIE Advanced Prototype", year: 2015, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "Unmasked Pau'an, original Rebels appearance" },

    // ============================================================
    // INQUISITORS (need — to order)
    // ============================================================
    { id: "sw1099", name: "Second Sister (Cal Kestis era)", side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2020, rarity: "Rare", currentValue: 60, owned: false, qty: 0, notes: "From Jedi: Fallen Order" },
    { id: "sw1100", name: "Seventh Sister", side: "Inquisitor", era: "Rebels", source: "BrickLink", year: 2016, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Rebels series, very hard to find" },

    // ============================================================
    // OTHER DARK SIDE (owned)
    // ============================================================
    { id: "sw0613", name: "General Grievous (minifig)", side: "Other Dark", era: "Clone Wars", source: "75040", sourceSetName: "General Grievous' Wheel Bike", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1 },

    // ============================================================
    // JEDI (owned — from sets)
    // ============================================================
    { id: "sw0902", name: "Yoda", side: "Jedi", era: "Prequel", source: "75168", sourceSetName: "Yoda's Jedi Starfighter", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw1136", name: "Qui-Gon Jinn", side: "Jedi", era: "Prequel", source: "75169", sourceSetName: "Duel on Naboo", year: 2017, rarity: "Common", currentValue: 22, owned: true, qty: 1, notes: "From the Duel on Naboo set — Maul from this set is lost" },
    { id: "sw0488", name: "Anakin Skywalker (Padawan, Ep. II)", side: "Jedi", era: "Prequel", source: "75092", sourceSetName: "Naboo Starfighter", year: 2015, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0533", name: "Anakin Skywalker (kid, Tatooine)", side: "Jedi", era: "Prequel", source: "75258", sourceSetName: "Anakin's Podracer", year: 2019, rarity: "Common", currentValue: 10, owned: true, qty: 1, notes: "Young Anakin Pod-racer kid" },
    { id: "sw0974", name: "Obi-Wan Kenobi (Padawan, Ep. II)", side: "Jedi", era: "Prequel", source: "75169", sourceSetName: "Duel on Naboo", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0395", name: "Luke Skywalker (Jedi Knight, Ep. VI)", side: "Jedi", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Common", currentValue: 20, owned: true, qty: 1, notes: "Black tunic Jedi Knight" },
    { id: "sw0335", name: "Luke Skywalker (Tatooine farmer)", side: "Jedi", era: "Original", source: "75173", sourceSetName: "Luke's Landspeeder", year: 2017, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw1306", name: "Luke Skywalker (Ep. VI, blonde variant)", side: "Jedi", era: "Original", source: "75407", sourceSetName: "Brick-Built Star Wars Logo", year: 2025, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Blonde hair variant" },
    { id: "sw0537", name: "Obi-Wan Kenobi (Clone Wars armor)", side: "Jedi", era: "Clone Wars", source: "75040", sourceSetName: "General Grievous' Wheel Bike", year: 2014, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Clone Wars Episode III armor" },
    { id: "sw0568", name: "Ezra Bridger", side: "Jedi", era: "Rebels", source: "75082", sourceSetName: "TIE Advanced Prototype", year: 2015, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "Padawan from Rebels series" },
    { id: "sw1255b", name: "Ahsoka Tano (Clone Wars, 75401)", side: "Jedi", era: "Clone Wars", source: "75401", sourceSetName: "Ahsoka's Jedi Interceptor", year: 2025, rarity: "Uncommon", currentValue: 25, owned: true, qty: 1, notes: "Newer Clone Wars Ahsoka from the 2025 Interceptor" },
    { id: "sw1297", name: "Anakin Skywalker (Clone Wars, 75401)", side: "Jedi", era: "Clone Wars", source: "75401", sourceSetName: "Ahsoka's Jedi Interceptor", year: 2025, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Clone Wars Jedi General Anakin" },

    // ============================================================
    // JEDI (owned — BrickLink purchases, bottom-row collection)
    // ============================================================
    { id: "sw1255", name: "Ahsoka Tano (Padawan, Clone Wars)", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 60, owned: true, qty: 2, notes: "Two copies — orange dress, dual sabers" },
    { id: "sw1290", name: "Ahsoka Tano (older, Rebels/Mandalore)", side: "Jedi", era: "Mandalorian", source: "BrickLink", year: 2022, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "White outfit, headtail stripes" },
    { id: "sw0966", name: "Obi-Wan Kenobi (Ep. II, with hood)", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2019, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1 },
    { id: "sw1192", name: "Obi-Wan Kenobi (Jedi Master, brown robes)", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Mature Obi-Wan with beard" },
    { id: "sw0274", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)", side: "Jedi", era: "Original", source: "BrickLink", year: 2014, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0539", name: "Plo Koon", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 65, owned: true, qty: 1, notes: "Kel Dor Jedi Master" },
    { id: "sw0479", name: "Mace Windu", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2013, rarity: "Ultra-Rare", currentValue: 110, owned: true, qty: 1, notes: "Purple lightsaber — high aftermarket value" },
    { id: "sw0420", name: "Ki-Adi-Mundi", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 130, owned: true, qty: 1, notes: "Tall conical head, white hair — very rare" },
    { id: "sw0297", name: "Aayla Secura", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2010, rarity: "Ultra-Rare", currentValue: 160, owned: true, qty: 1, notes: "Blue Twi'lek Jedi — only ever in 8098 Clone Turbo Tank, hard to find" },

    // ============================================================
    // JEDI (need — to order)
    // ============================================================
    { id: "sw0422", name: "Kit Fisto", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 150, owned: false, qty: 0, notes: "Nautolan green-skin Jedi, very hard to find" },
    { id: "sw0421", name: "Shaak Ti", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Togruta Jedi Master" },
    { id: "sw0461", name: "Luminara Unduli", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Mirialan Jedi, mentor to Barriss" },
    { id: "sw0419", name: "Saesee Tiin", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Iktotchi Jedi Master, horned head" },
    { id: "sw0476", name: "Adi Gallia", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Tholothian headtails, killed by Savage Opress" },
    { id: "sw0418", name: "Eeth Koth", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 150, owned: false, qty: 0, notes: "Zabrak Jedi Master, very rare" },
    { id: "sw0492", name: "Even Piell", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Rare", currentValue: 75, owned: false, qty: 0 },
    { id: "sw0537b", name: "Barriss Offee", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Mirialan Padawan, fell to dark side" },
    { id: "sw0807", name: "Quinlan Vos", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2018, rarity: "Ultra-Rare", currentValue: 120, owned: false, qty: 0, notes: "Kiffar Jedi, only in 75151" },
    { id: "sw0808", name: "Pong Krell", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2018, rarity: "Rare", currentValue: 80, owned: false, qty: 0, notes: "Four-armed Besalisk, turned traitor" },
    { id: "sw0742", name: "Kanan Jarrus", side: "Jedi", era: "Rebels", source: "BrickLink", year: 2016, rarity: "Rare", currentValue: 65, owned: false, qty: 0, notes: "From Rebels series" },
    { id: "sw1199", name: "Cal Kestis", side: "Jedi", era: "Imperial", source: "BrickLink", year: 2023, rarity: "Rare", currentValue: 60, owned: false, qty: 0, notes: "Jedi: Survivor / Fallen Order" },
    { id: "sw0540", name: "Stass Allie", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Tholothian, Adi Gallia's cousin" },

    // ============================================================
    // HEROES (Rebels, Resistance, smugglers — owned from sets)
    // ============================================================
    { id: "sw0879", name: "Han Solo (Ep. IV)", side: "Hero", era: "Original", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Uncommon", currentValue: 35, owned: true, qty: 1, notes: "Young Han, classic vest" },
    { id: "sw0901", name: "Princess Leia (Ep. IV)", side: "Hero", era: "Original", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Uncommon", currentValue: 32, owned: true, qty: 1, notes: "White dress, classic Leia" },
    { id: "sw0532a", name: "Chewbacca", side: "Hero", era: "Original", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Reddish-brown printed torso" },
    { id: "sw0851", name: "Rey (TFA)", side: "Hero", era: "Sequel", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Scavenger outfit, staff" },
    { id: "sw0853", name: "Finn (TFA)", side: "Hero", era: "Sequel", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Uncommon", currentValue: 25, owned: true, qty: 1, notes: "Jacket variant from Falcon UCS" },
    { id: "sw0855", name: "Han Solo (Old, TFA)", side: "Hero", era: "Sequel", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Rare", currentValue: 45, owned: true, qty: 1, notes: "Aged Han Solo, grey hair, blue coat" },
    { id: "sw0866", name: "BB-8", side: "Droid", era: "Sequel", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Common", currentValue: 14, owned: true, qty: 1, notes: "Roller droid" },

    { id: "sw0778", name: "Luke Skywalker (Stormtrooper disguise)", side: "Hero", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Rare", currentValue: 45, owned: true, qty: 1, notes: "Helmet off, white armor" },
    { id: "sw0779", name: "Han Solo (Stormtrooper disguise)", side: "Hero", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Rare", currentValue: 45, owned: true, qty: 1 },
    { id: "sw0775", name: "Princess Leia (Death Star)", side: "Hero", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1 },

    { id: "sw0238", name: "Princess Leia (Endor poncho)", side: "Hero", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "Camo poncho" },
    { id: "sw0240", name: "Han Solo (Endor)", side: "Hero", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Rare", currentValue: 45, owned: true, qty: 1, notes: "Trench coat" },

    { id: "sw0287", name: "Luke Skywalker (Hoth)", side: "Hero", era: "Original", source: "75054", sourceSetName: "AT-AT", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Cold-weather gear" },

    { id: "sw0405", name: "Princess Leia (Slave, Jabba's Palace)", side: "Hero", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "Metal bikini, gold chain" },
    { id: "sw0432", name: "Lando Calrissian (Skiff Guard disguise)", side: "Hero", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Rare", currentValue: 60, owned: true, qty: 1, notes: "Helmet + tan robes" },
    { id: "sw0277", name: "Han Solo (Bespin)", side: "Hero", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Blue jacket" },

    { id: "sw0394", name: "Princess Leia (Boushh disguise)", side: "Hero", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Rare", currentValue: 65, owned: true, qty: 1, notes: "Helmet + bounty hunter armor" },

    { id: "sw0276", name: "Han Solo (Bespin, Carbon-Freeze)", side: "Hero", era: "Original", source: "75137", sourceSetName: "Carbon-Freezing Chamber", year: 2016, rarity: "Uncommon", currentValue: 32, owned: true, qty: 1 },
    { id: "sw0275", name: "Princess Leia (Bespin)", side: "Hero", era: "Original", source: "75137", sourceSetName: "Carbon-Freezing Chamber", year: 2016, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "White Bespin outfit" },
    { id: "sw0272", name: "Lobot", side: "Hero", era: "Original", source: "75137", sourceSetName: "Carbon-Freezing Chamber", year: 2016, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Lando's aide, cybernetic implant" },

    { id: "sw0677", name: "Rey (TFA, Takodana)", side: "Hero", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Common", currentValue: 20, owned: true, qty: 1 },
    { id: "sw0676", name: "Finn (TFA, jacket)", side: "Hero", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Common", currentValue: 18, owned: true, qty: 1 },

    { id: "sw0299", name: "Padmé Amidala", side: "Hero", era: "Prequel", source: "75258", sourceSetName: "Anakin's Podracer", year: 2019, rarity: "Uncommon", currentValue: 32, owned: true, qty: 1, notes: "Naboo handmaiden variant" },

    { id: "sw1158", name: "The Mandalorian (Din Djarin)", side: "Hero", era: "Mandalorian", source: "75325", sourceSetName: "The Mandalorian's N-1 Starfighter", year: 2022, rarity: "Common", currentValue: 24, owned: true, qty: 1, notes: "Beskar armor" },
    { id: "sw1115", name: "Grogu (The Child)", side: "Alien", era: "Mandalorian", source: "75325", sourceSetName: "The Mandalorian's N-1 Starfighter", year: 2022, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw1159", name: "Peli Motto", side: "Hero", era: "Mandalorian", source: "75325", sourceSetName: "The Mandalorian's N-1 Starfighter", year: 2022, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Tatooine mechanic" },

    { id: "sw0654", name: "Poe Dameron", side: "Hero", era: "Sequel", source: "75149", sourceSetName: "Resistance X-Wing Fighter", year: 2016, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Pilot suit" },

    { id: "sw0596", name: "Captain Typho", side: "Hero", era: "Prequel", source: "75092", sourceSetName: "Naboo Starfighter", year: 2015, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Padmé's bodyguard, eye patch" },

    { id: "sw0790", name: "Cassian Andor", side: "Hero", era: "Imperial", source: "75155", sourceSetName: "Rebel U-Wing Fighter", year: 2016, rarity: "Rare", currentValue: 40, owned: true, qty: 1, notes: "Rogue One" },
    { id: "sw0784", name: "Jyn Erso", side: "Hero", era: "Imperial", source: "75155", sourceSetName: "Rebel U-Wing Fighter", year: 2016, rarity: "Rare", currentValue: 38, owned: true, qty: 1 },
    { id: "sw0785", name: "Bodhi Rook", side: "Hero", era: "Imperial", source: "75155", sourceSetName: "Rebel U-Wing Fighter", year: 2016, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Rogue One Imperial defector pilot" },

    { id: "sw1175", name: "Cobb Vanth", side: "Hero", era: "Mandalorian", source: "75437", sourceSetName: "Cobb Vanth's Speeder", year: 2026, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Marshal of Mos Pelgo, modified Boba armor" },

    { id: "sw0238b", name: "Luke Skywalker (Endor)", side: "Hero", era: "Original", source: "75238", sourceSetName: "Action Battle Endor Assault", year: 2019, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Endor camo poncho" },

    { id: "sw0427", name: "A-wing Pilot", side: "Hero", era: "Original", source: "75003", sourceSetName: "A-wing Starfighter", year: 2013, rarity: "Common", currentValue: 18, owned: true, qty: 1 },

    { id: "sw0628", name: "Naboo Security Officer", side: "Hero", era: "Prequel", source: "75091", sourceSetName: "Flash Speeder", year: 2015, rarity: "Common", currentValue: 12, owned: true, qty: 2, notes: "Two officers in set" },

    { id: "sw0696", name: "Resistance Trooper", side: "Hero", era: "Sequel", source: "75149", sourceSetName: "Resistance X-Wing Fighter", year: 2016, rarity: "Common", currentValue: 14, owned: true, qty: 1 },

    // ============================================================
    // TROOPERS (owned — Imperial / Clone / First Order)
    // ============================================================
    { id: "sw0997a", name: "Stormtrooper (Death Star)", side: "Trooper", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Common", currentValue: 16, owned: true, qty: 2, notes: "Multiple in Death Star set" },
    { id: "sw0773", name: "Death Star Trooper", side: "Trooper", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Uncommon", currentValue: 18, owned: true, qty: 1, notes: "Black helmet, grey uniform" },
    { id: "sw1133", name: "Sandtrooper", side: "Trooper", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Pauldron, desert gear" },
    { id: "sw0262", name: "AT-AT Driver", side: "Trooper", era: "Original", source: "75054", sourceSetName: "AT-AT", year: 2014, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Imperial Hoth driver" },
    { id: "sw0291", name: "Snowtrooper", side: "Trooper", era: "Original", source: "75054", sourceSetName: "AT-AT", year: 2014, rarity: "Common", currentValue: 16, owned: true, qty: 2, notes: "Two snowtroopers" },
    { id: "sw0667", name: "First Order Stormtrooper", side: "Trooper", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw0506", name: "Scout Trooper", side: "Trooper", era: "Original", source: "75238", sourceSetName: "Action Battle Endor Assault", year: 2019, rarity: "Common", currentValue: 16, owned: true, qty: 1, notes: "Speeder bike trooper" },
    { id: "sw0535", name: "212th Clone Trooper (Utapau)", side: "Trooper", era: "Clone Wars", source: "75040", sourceSetName: "General Grievous' Wheel Bike", year: 2014, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Orange markings" },
    { id: "sw0606", name: "Geonosis Clone Trooper", side: "Trooper", era: "Clone Wars", source: "75089", sourceSetName: "Geonosis Troopers", year: 2015, rarity: "Uncommon", currentValue: 18, owned: true, qty: 4, notes: "Four phase-1 clones in the battle pack" },
    { id: "sw0603", name: "Shadow Trooper", side: "Trooper", era: "Original", source: "75079", sourceSetName: "Shadow Troopers", year: 2015, rarity: "Uncommon", currentValue: 14, owned: true, qty: 4, notes: "Four all-black stormtroopers" },
    { id: "sw0316", name: "Clone Pilot", side: "Trooper", era: "Clone Wars", source: "75076", sourceSetName: "Republic Gunship Microfighter", year: 2015, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw0789", name: "TIE Pilot", side: "Trooper", era: "Rebels", source: "75082", sourceSetName: "TIE Advanced Prototype", year: 2015, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw0289", name: "Rebel Snowspeeder Pilot", side: "Hero", era: "Original", source: "75074", sourceSetName: "Snowspeeder Microfighter", year: 2015, rarity: "Common", currentValue: 14, owned: true, qty: 1 },

    // ============================================================
    // IMPERIAL (officers / commanders — owned)
    // ============================================================
    { id: "sw0769", name: "Grand Moff Tarkin", side: "Imperial", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "Death Star commander" },
    { id: "sw0772", name: "Imperial Officer", side: "Imperial", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0288", name: "General Veers", side: "Imperial", era: "Original", source: "75054", sourceSetName: "AT-AT", year: 2014, rarity: "Rare", currentValue: 45, owned: true, qty: 1, notes: "Hoth campaign commander" },
    { id: "sw0623", name: "Agent Kallus", side: "Imperial", era: "Rebels", source: "75082", sourceSetName: "TIE Advanced Prototype", year: 2015, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "ISB Agent, mutton chops" },
    { id: "sw0660", name: "First Order Officer", side: "Imperial", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Uncommon", currentValue: 20, owned: true, qty: 1 },

    // ============================================================
    // BOUNTY HUNTERS (owned)
    // ============================================================
    { id: "sw0468", name: "Jango Fett", side: "Bounty Hunter", era: "Prequel", source: "75409", sourceSetName: "Jango Fett's Firespray-Class Starship (UCS)", year: 2025, rarity: "Uncommon", currentValue: 32, owned: true, qty: 2, notes: "Two copies — also in 75433" },
    { id: "sw0469", name: "Young Boba Fett", side: "Bounty Hunter", era: "Prequel", source: "75409", sourceSetName: "Jango Fett's Firespray-Class Starship (UCS)", year: 2025, rarity: "Uncommon", currentValue: 28, owned: true, qty: 2, notes: "Two copies — also in 75433" },
    { id: "sw0431", name: "Boba Fett (Sail Barge)", side: "Bounty Hunter", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Rare", currentValue: 70, owned: true, qty: 1, notes: "Mandalorian armor, jetpack" },

    // ============================================================
    // DROIDS (owned)
    // ============================================================
    { id: "sw0700", name: "C-3PO", side: "Droid", era: "Original", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Gold protocol droid" },
    { id: "sw0527a", name: "R2-D2", side: "Droid", era: "Original", source: "75192", sourceSetName: "Millennium Falcon (UCS)", year: 2017, rarity: "Common", currentValue: 14, owned: true, qty: 1, notes: "Classic astromech" },
    { id: "sw0717", name: "BB-8 (microfig)", side: "Droid", era: "Sequel", source: "75187", sourceSetName: "BB-8", year: 2017, rarity: "Common", currentValue: 12, owned: true, qty: 1 },
    { id: "sw0786", name: "K-2SO", side: "Droid", era: "Imperial", source: "75155", sourceSetName: "Rebel U-Wing Fighter", year: 2016, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "Reprogrammed Imperial security droid" },
    { id: "sw0001", name: "Battle Droid", side: "Droid", era: "Prequel", source: "75091", sourceSetName: "Flash Speeder", year: 2015, rarity: "Common", currentValue: 6, owned: true, qty: 2, notes: "Tan B1 battle droids" },
    { id: "sw0775b", name: "Mouse Droid", side: "Droid", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Common", currentValue: 8, owned: true, qty: 1 },
    { id: "sw0282", name: "Death Star Droid", side: "Droid", era: "Original", source: "75159", sourceSetName: "Death Star", year: 2016, rarity: "Uncommon", currentValue: 14, owned: true, qty: 1, notes: "Black protocol droid frame" },
    { id: "sw1100b", name: "R7-A7 Astromech (Ahsoka's)", side: "Droid", era: "Clone Wars", source: "75401", sourceSetName: "Ahsoka's Jedi Interceptor", year: 2025, rarity: "Uncommon", currentValue: 15, owned: true, qty: 1 },

    // ============================================================
    // ALIENS (creatures / cantina / Endor / etc. — owned)
    // ============================================================
    // Mos Eisley Cantina
    { id: "sw1130", name: "Greedo", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "Rodian bounty hunter" },
    { id: "sw1131", name: "Ponda Baba", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 32, owned: true, qty: 1, notes: "Aqualish thug" },
    { id: "sw1132", name: "Dr. Evazan", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Cantina criminal with the death sentence" },
    { id: "sw1134", name: "Wuher (Bartender)", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 25, owned: true, qty: 1, notes: "Human, but treated under cantina locals here" },
    { id: "sw1135", name: "Figrin D'an", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Cantina band leader, Bith" },
    { id: "sw1137", name: "Garindan", side: "Alien", era: "Original", source: "75290", sourceSetName: "Mos Eisley Cantina", year: 2020, rarity: "Uncommon", currentValue: 26, owned: true, qty: 1, notes: "Long-snouted Kubaz spy" },
    { id: "sw0277b", name: "Tusken Raider", side: "Alien", era: "Original", source: "75136", sourceSetName: "Droid Escape Pod", year: 2016, rarity: "Common", currentValue: 14, owned: true, qty: 1, notes: "Sand People" },

    // Ewok Village
    { id: "sw0236", name: "Wicket W. Warrick", side: "Alien", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Smallest Ewok hero" },
    { id: "sw0237", name: "Logray", side: "Alien", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Ewok shaman" },
    { id: "sw0234", name: "Chief Chirpa", side: "Alien", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Ewok chief" },
    { id: "sw0505", name: "Teebo", side: "Alien", era: "Original", source: "10236", sourceSetName: "Ewok Village", year: 2013, rarity: "Rare", currentValue: 40, owned: true, qty: 1, notes: "Helmeted Ewok" },

    // Jabba's Palace / Sail Barge
    { id: "sw0382", name: "Jabba the Hutt", side: "Alien", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Rare", currentValue: 80, owned: true, qty: 1, notes: "Bigfig, also in Sail Barge" },
    { id: "sw0397", name: "Bib Fortuna", side: "Alien", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Twi'lek major-domo" },
    { id: "sw0396", name: "Oola", side: "Alien", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Rare", currentValue: 60, owned: true, qty: 1, notes: "Twi'lek dancer" },
    { id: "sw0398", name: "Salacious Crumb", side: "Alien", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Rare", currentValue: 35, owned: true, qty: 1 },
    { id: "sw0404", name: "Gamorrean Guard", side: "Alien", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Uncommon", currentValue: 30, owned: true, qty: 2, notes: "Two copies (Jabba's Palace + Rancor Pit)" },
    { id: "sw0537c", name: "Malakili (Rancor Keeper)", side: "Alien", era: "Original", source: "75005", sourceSetName: "Rancor Pit", year: 2013, rarity: "Rare", currentValue: 45, owned: true, qty: 1, notes: "Mourns the Rancor" },
    { id: "sw0435", name: "Weequay Skiff Guard", side: "Alien", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1 },
    { id: "sw0436", name: "Saelt-Marae (Yak Face)", side: "Alien", era: "Original", source: "75020", sourceSetName: "Jabba's Sail Barge", year: 2013, rarity: "Rare", currentValue: 55, owned: true, qty: 1 },

    // Misc aliens
    { id: "sw0246", name: "Jar Jar Binks", side: "Alien", era: "Prequel", source: "75258", sourceSetName: "Anakin's Podracer", year: 2019, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Gungan" },
    { id: "sw0679", name: "Maz Kanata", side: "Alien", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Castle keeper, goggle eyes" },
    { id: "sw0270", name: "Ugnaught", side: "Alien", era: "Original", source: "75137", sourceSetName: "Carbon-Freezing Chamber", year: 2016, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Bespin worker" },
    { id: "sw0788", name: "Bistan", side: "Alien", era: "Imperial", source: "75155", sourceSetName: "Rebel U-Wing Fighter", year: 2016, rarity: "Rare", currentValue: 35, owned: true, qty: 1, notes: "Iakaru gunner, Rogue One" },
    { id: "sw0608", name: "Geonosian Warrior", side: "Alien", era: "Clone Wars", source: "75089", sourceSetName: "Geonosis Troopers", year: 2015, rarity: "Uncommon", currentValue: 22, owned: true, qty: 2, notes: "Two winged Geonosians" },
    { id: "sw0567", name: "Jawa", side: "Alien", era: "Original", source: "75136", sourceSetName: "Droid Escape Pod", year: 2016, rarity: "Uncommon", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0700b", name: "Unkar's Thug", side: "Alien", era: "Sequel", source: "75099", sourceSetName: "Rey's Speeder", year: 2015, rarity: "Common", currentValue: 12, owned: true, qty: 1 },
  ]
};
