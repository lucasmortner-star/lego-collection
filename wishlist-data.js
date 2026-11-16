// ========================================
// LEGO Wishlist - Ortner's Collection
// Sets we want to add to the collection
// ========================================
//
// Prices: new (sealed) and used market values for retired sets, MSRP as the
// new price for sets still in production. Nov 9, 2026 values are BrickEconomy
// estimates while BrickLink is down; normally BrickLink 6-month sold averages.

const WISHLIST_DATA = {
  items: [
    // ===== STAR WARS =====
    { setNumber: "75367", name: "Venator-Class Republic Attack Cruiser (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 5374, retail: 649.99, used: 800, priority: "Medium", notes: "Currently available — MSRP. BrickEconomy New ~$696, Used ~$800 (Nov 9; BrickLink refresh pending)" },
    { setNumber: "75252", name: "Imperial Star Destroyer (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 4784, retail: 1450, used: 764, priority: "Medium", notes: "Retired — BrickEconomy New ~$1,450, Used ~$764 (Nov 9; BrickLink refresh pending) (was $699.99 MSRP)" },
    { setNumber: "75304", name: "Darth Vader Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 834, retail: 83, used: 69, priority: "Low", notes: "Retired — BrickEconomy New ~$83, Used ~$69 (Nov 9; BrickLink refresh pending) (below MSRP of $79.99)" },
    { setNumber: "75349", name: "Captain Rex Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 854, retail: 69, used: 57, priority: "Low", notes: "Retired Jul 2026 — BrickEconomy New ~$69, Used ~$57 (Nov 9; BrickLink refresh pending) (was $69.99 MSRP)" },
    { setNumber: "75331", name: "The Razor Crest (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 6187, retail: 720, used: 572, priority: "High", notes: "Retired Dec 2025 — BrickEconomy New ~$720, Used ~$572 (Nov 9; BrickLink refresh pending). We own the smaller 75447 Razor Crest (2026); still want the UCS" },

    // ===== HARRY POTTER =====

    // ===== MARVEL =====

    // ===== LORD OF THE RINGS / THE HOBBIT =====
    { setNumber: "9476", name: "The Orc Forge", theme: "Lord of the Rings", category: "LOTR", pieces: 363, retail: 355, used: 171, priority: "Low", notes: "Retired 2012 — BrickEconomy New ~$355, Used ~$171 (Nov 9; BrickLink refresh pending) (was $39.99 MSRP), Isengard forge with Saruman, Lurtz" },
    { setNumber: "9470", name: "Shelob Attacks", theme: "Lord of the Rings", category: "LOTR", pieces: 227, retail: 194, used: 71, priority: "Low", notes: "Retired 2012 — BrickEconomy New ~$194, Used ~$71 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Frodo, Sam, Gollum, Shelob spider" },
    { setNumber: "79006", name: "The Council of Elrond", theme: "Lord of the Rings", category: "LOTR", pieces: 243, retail: 191, used: 90, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$191, Used ~$90 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Rivendell council scene" },
    { setNumber: "79000", name: "Riddles for the Ring", theme: "The Hobbit", category: "LOTR", pieces: 105, retail: 74, used: 30, priority: "Low", notes: "Retired 2012 — BrickEconomy New ~$74, Used ~$30 (Nov 9; BrickLink refresh pending) (was $9.99 MSRP), Bilbo vs Gollum riddle scene" },
    { setNumber: "79001", name: "Escape from Mirkwood Spiders", theme: "The Hobbit", category: "LOTR", pieces: 298, retail: 150, used: 70, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$150, Used ~$70 (Nov 9; BrickLink refresh pending) (was $29.99 MSRP), Mirkwood spiders with Bilbo, Legolas, Tauriel" },
    { setNumber: "79011", name: "Dol Guldur Ambush", theme: "The Hobbit", category: "LOTR", pieces: 217, retail: 114, used: 58, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$114, Used ~$58 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Beorn, Yazneg orc, Warg ambush" },
    { setNumber: "79017", name: "The Battle of Five Armies", theme: "The Hobbit", category: "LOTR", pieces: 472, retail: 504, used: 230, priority: "Low", notes: "Retired 2014 — BrickEconomy New ~$504, Used ~$230 (Nov 9; BrickLink refresh pending) (was $59.99 MSRP), Thorin, Dwalin, Azog the Defiler" },
    { setNumber: "30210", name: "Frodo with Cooking Corner (polybag)", theme: "Lord of the Rings", category: "LOTR", pieces: 29, retail: 20, used: 13, priority: "Low", notes: "2012 polybag. BrickLink 6-month sales (Nov 14): New ~$20, Used ~$13. Frodo in the sand green shirt (lor002), which we don't have" },
    { setNumber: "30212", name: "Mirkwood Elf Guard (polybag)", theme: "The Hobbit", category: "LOTR", pieces: 22, retail: 35, used: 29, priority: "Low", notes: "2012 polybag. BrickLink 6-month sales (Nov 14): New ~$35, Used ~$29. Hooded Mirkwood Elf Guard (lor026)" },
    { setNumber: "30215", name: "Legolas Greenleaf (polybag)", theme: "The Hobbit", category: "LOTR", pieces: 29, retail: 25, used: 23, priority: "Low", notes: "2014 polybag. BrickLink 6-month sales (Nov 14): New ~$25, Used ~$23. Hobbit-style Legolas (lor035)" },
    { setNumber: "5000202", name: "Elrond (minifig polybag)", theme: "Lord of the Rings", category: "LOTR", retail: 44, used: 43, priority: "Low", notes: "2012 promo polybag. BrickLink 6-month sales (Nov 14): New ~$44, Used ~$43. Elrond with the very short cape (lor033)" },
    { setNumber: "5002130", name: "Good Morning Bilbo Baggins (minifig polybag)", theme: "The Hobbit", category: "LOTR", retail: 35, priority: "Low", notes: "2014 promo polybag. BrickLink 6-month sales (Nov 14): New ~$35, no recent used sales. Bilbo in his patchwork coat (lor091)" },
    { setNumber: "40693", name: "The Fell Beast (Barad-dûr GWP)", theme: "Lord of the Rings", category: "LOTR", pieces: 269, retail: 320, priority: "Medium", used: 246, notes: "Retired June 2024 gift with purchase — BrickEconomy New ~$320, Used ~$246 (Nov 9; BrickLink refresh pending). Nazgûl minifig, poseable wings, Osgiliath ruin base" },
  ]
};
