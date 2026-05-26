// ========================================
// LEGO Wishlist - Ortner's Collection
// Sets we want to add to the collection
// ========================================
//
// Prices reflect current market (BrickLink New Avg, last 6 months sold)
// for retired sets, and MSRP for sets still in production.

const WISHLIST_DATA = {
  items: [
    // ===== STAR WARS =====
    { setNumber: "75367", name: "Venator-Class Republic Attack Cruiser (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 5374, retail: 649.99, priority: "Medium", notes: "Currently available — MSRP" },
    { setNumber: "75252", name: "Imperial Star Destroyer (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 4784, retail: 1106, priority: "Medium", notes: "Retired — BL New Avg ~$1,106 (was $699.99 MSRP)" },
    { setNumber: "75304", name: "Darth Vader Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 834, retail: 63, priority: "Low", notes: "Retired — BL New Avg ~$63 (below MSRP of $79.99)" },
    { setNumber: "75349", name: "Captain Rex Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 854, retail: 69.99, priority: "Low", notes: "Available — retiring ~July 2026, MSRP" },
    { setNumber: "75328", name: "The Mandalorian Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 584, retail: 43, priority: "Low", notes: "Retired — BL New Avg ~$43 (below MSRP)" },
    { setNumber: "75389", name: "The Dark Falcon", theme: "Star Wars", category: "STAR WARS", pieces: 1579, retail: 179.99, priority: "Low", notes: "Available — Rebuild the Galaxy series, 6 minifigs incl. Darth Jar Jar" },
    { setNumber: "75331", name: "The Razor Crest (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 6187, retail: 567, priority: "High", notes: "Retired Dec 2025 — BL New Avg ~$567 (below $599.99 MSRP, but rising)" },

    // ===== HARRY POTTER =====
    { setNumber: "76417", name: "Gringotts Wizarding Bank - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", pieces: 4803, retail: 429.99, priority: "High", notes: "Available — retiring Jul 2026, 13 minifigs + dragon, 32 inches tall" },
    { setNumber: "76453", name: "Malfoy Manor", theme: "Harry Potter", category: "HARRY POTTER", pieces: 1601, retail: 149.99, priority: "High", notes: "Available — retiring mid-2026, 9 minifigs, first-ever LEGO Malfoy Manor" },

    // ===== MARVEL =====
    { setNumber: "76218", name: "Sanctum Sanctorum", theme: "Marvel", category: "MARVEL", pieces: 2708, retail: 312, priority: "High", notes: "Retired — BL New Avg ~$312 (was $249.99 MSRP), 3-story modular with 9 minifigs" },
    { setNumber: "76215", name: "Black Panther", theme: "Marvel", category: "MARVEL", pieces: 2961, retail: 261, priority: "High", notes: "Retired Oct 2022 — BL New Avg ~$261 (below $349.99 MSRP), life-size T'Challa bust" },

    // ===== LORD OF THE RINGS / THE HOBBIT =====
    { setNumber: "11377", name: "Minas Tirith", theme: "Lord of the Rings", category: "LOTR", pieces: 8278, retail: 649.99, priority: "High", notes: "Officially revealed May 12, 2026 — Insiders early access June 1, general release June 4. 8,278 pcs, 10 minifigs, all 7 tiers of the White City. Comes with FREE GWP set 40893 Grond (307 pcs, 2 Mordor Orcs) if purchased June 1-7" },
    { setNumber: "9473", name: "The Mines of Moria", theme: "Lord of the Rings", category: "LOTR", pieces: 776, retail: 394, priority: "Medium", notes: "Retired 2013 — BL New Avg ~$394 (was $79.99 MSRP), Fellowship in Balin's Tomb, includes Cave Troll" },
    { setNumber: "79008", name: "Pirate Ship Ambush", theme: "Lord of the Rings", category: "LOTR", pieces: 756, retail: 468, priority: "Medium", notes: "Retired 2013 — BL New Avg ~$468 (was $89.99 MSRP), Aragorn vs Corsairs with King of the Dead" },
    { setNumber: "9472", name: "Attack on Weathertop", theme: "Lord of the Rings", category: "LOTR", pieces: 430, retail: 254, priority: "Low", notes: "Retired 2012 — BL New Avg ~$254 (was $39.99 MSRP), Frodo, Aragorn vs 3 Ringwraiths" },
    { setNumber: "9476", name: "The Orc Forge", theme: "Lord of the Rings", category: "LOTR", pieces: 363, retail: 247, priority: "Low", notes: "Retired 2012 — BL New Avg ~$247 (was $39.99 MSRP), Isengard forge with Saruman, Lurtz" },
    { setNumber: "9470", name: "Shelob Attacks", theme: "Lord of the Rings", category: "LOTR", pieces: 227, retail: 114, priority: "Low", notes: "Retired 2012 — BL New Avg ~$114 (was $19.99 MSRP), Frodo, Sam, Gollum, Shelob spider" },
    { setNumber: "9469", name: "Gandalf Arrives", theme: "Lord of the Rings", category: "LOTR", pieces: 83, retail: 110, priority: "Low", notes: "Retired 2012 — BL New Avg ~$110 (was $9.99 MSRP — 11× markup!), Gandalf and Frodo at Bag End" },
    { setNumber: "79006", name: "The Council of Elrond", theme: "Lord of the Rings", category: "LOTR", pieces: 243, retail: 125, priority: "Low", notes: "Retired 2013 — BL New Avg ~$125 (was $19.99 MSRP), Rivendell council scene" },
    { setNumber: "79007", name: "Battle at the Black Gate", theme: "Lord of the Rings", category: "LOTR", pieces: 656, retail: 352, priority: "High", notes: "Retired 2013 — BL New Avg ~$352 (was $59.99 MSRP), Mordor gate, Aragorn, Mouth of Sauron" },
    { setNumber: "79000", name: "Riddles for the Ring", theme: "The Hobbit", category: "LOTR", pieces: 105, retail: 65, priority: "Low", notes: "Retired 2012 — BL New Avg ~$65 (was $9.99 MSRP), Bilbo vs Gollum riddle scene" },
    { setNumber: "79001", name: "Escape from Mirkwood Spiders", theme: "The Hobbit", category: "LOTR", pieces: 298, retail: 104, priority: "Low", notes: "Retired 2013 — BL New Avg ~$104 (was $29.99 MSRP), Mirkwood spiders with Bilbo, Legolas, Tauriel" },
    { setNumber: "79011", name: "Dol Guldur Ambush", theme: "The Hobbit", category: "LOTR", pieces: 217, retail: 80, priority: "Low", notes: "Retired 2013 — BL New Avg ~$80 (was $19.99 MSRP), Beorn, Yazneg orc, Warg ambush" },
    { setNumber: "79017", name: "The Battle of Five Armies", theme: "The Hobbit", category: "LOTR", pieces: 472, retail: 325, priority: "Low", notes: "Retired 2014 — BL New Avg ~$325 (was $59.99 MSRP), Thorin, Dwalin, Azog the Defiler" },
  ]
};
