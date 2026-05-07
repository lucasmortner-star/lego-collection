// ========================================
// LEGO Wishlist - Ortner's Collection
// Sets we want to add to the collection
// ========================================

const WISHLIST_DATA = {
  items: [
    // ===== STAR WARS =====
    { setNumber: "75367", name: "Venator-Class Republic Attack Cruiser (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 5374, retail: 649.99, priority: "Medium", notes: "Currently available" },
    { setNumber: "75252", name: "Imperial Star Destroyer (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 4784, retail: 699.99, priority: "Medium", notes: "Retired - aftermarket ~$1,000+" },
    { setNumber: "75304", name: "Darth Vader Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 834, retail: 79.99, priority: "Low", notes: "Retired" },
    { setNumber: "75349", name: "Captain Rex Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 854, retail: 69.99, priority: "Low", notes: "Available - retiring ~July 2026" },
    { setNumber: "75328", name: "The Mandalorian Helmet", theme: "Star Wars", category: "STAR WARS", pieces: 584, retail: 69.99, priority: "Low", notes: "Retired - currently below MSRP on aftermarket" },
    { setNumber: "75389", name: "The Dark Falcon", theme: "Star Wars", category: "STAR WARS", pieces: 1579, retail: 179.99, priority: "Low", notes: "Available - Rebuild the Galaxy series, 6 minifigs incl. Darth Jar Jar" },
    { setNumber: "75331", name: "The Razor Crest (UCS)", theme: "Star Wars", category: "STAR WARS", pieces: 6187, retail: 599.99, priority: "High", notes: "Retired Dec 2025 - aftermarket ~$748 new sealed, Mandalorian's ship" },

    // ===== HARRY POTTER =====
    { setNumber: "75955", name: "Hogwarts Express", theme: "Harry Potter", category: "HARRY POTTER", pieces: 801, retail: 79.99, priority: "Medium", notes: "Retired - 2018 set, 801 pieces" },
    { setNumber: "76417", name: "Gringotts Wizarding Bank - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", pieces: 4803, retail: 429.99, priority: "High", notes: "Available - retiring Jul 2026, 13 minifigs + dragon, 32 inches tall" },
    { setNumber: "76453", name: "Malfoy Manor", theme: "Harry Potter", category: "HARRY POTTER", pieces: 1601, retail: 149.99, priority: "High", notes: "Available - retiring mid-2026, 9 minifigs, first-ever LEGO Malfoy Manor" },

    // ===== MARVEL =====
    { setNumber: "76218", name: "Sanctum Sanctorum", theme: "Marvel", category: "MARVEL", pieces: 2708, retail: 249.99, priority: "High", notes: "Retired - 3-story modular with 9 minifigs" },

    // ===== LORD OF THE RINGS / THE HOBBIT =====
    { setNumber: "11377", name: "Minas Tirith", theme: "Lord of the Rings", category: "LOTR", pieces: 8278, retail: 599.99, priority: "High", notes: "Coming soon - expected June 2026, 8,278 pcs, all 7 tiers of the White City" },
    { setNumber: "10237", name: "The Tower of Orthanc", theme: "Lord of the Rings", category: "LOTR", pieces: 2359, retail: 199.99, priority: "High", notes: "Retired since 2015 - 2013 release, Saruman's Isengard tower, very expensive on aftermarket" },
    { setNumber: "79002", name: "Attack of the Wargs", theme: "The Hobbit", category: "LOTR", pieces: 400, retail: 49.99, priority: "Medium", notes: "Retired - 2013 release, An Unexpected Journey scene with Bilbo, Gandalf, Thorin and Wargs" },
    { setNumber: "9473", name: "The Mines of Moria", theme: "Lord of the Rings", category: "LOTR", pieces: 776, retail: 79.99, priority: "Medium", notes: "Retired 2013 - Fellowship in Balin's Tomb, includes Cave Troll" },
    { setNumber: "79018", name: "The Lonely Mountain", theme: "The Hobbit", category: "LOTR", pieces: 866, retail: 129.99, priority: "Medium", notes: "Retired 2014 - Smaug's lair, largest Hobbit set" },
    { setNumber: "79008", name: "Pirate Ship Ambush", theme: "Lord of the Rings", category: "LOTR", pieces: 756, retail: 89.99, priority: "Medium", notes: "Retired 2013 - Aragorn vs Corsairs of Umbar with King of the Dead" },
    { setNumber: "9472", name: "Attack on Weathertop", theme: "Lord of the Rings", category: "LOTR", pieces: 430, retail: 39.99, priority: "Low", notes: "Retired 2012 - Frodo, Aragorn vs 3 Ringwraiths" },
    { setNumber: "9476", name: "The Orc Forge", theme: "Lord of the Rings", category: "LOTR", pieces: 363, retail: 39.99, priority: "Low", notes: "Retired 2012 - Isengard forge with Saruman, Lurtz" },
    { setNumber: "9470", name: "Shelob Attacks", theme: "Lord of the Rings", category: "LOTR", pieces: 227, retail: 19.99, priority: "Low", notes: "Retired 2012 - Frodo, Sam, Gollum, Shelob spider" },
    { setNumber: "9469", name: "Gandalf Arrives", theme: "Lord of the Rings", category: "LOTR", pieces: 83, retail: 9.99, priority: "Low", notes: "Retired 2012 - Gandalf and Frodo at Bag End cart" },
    { setNumber: "79006", name: "The Council of Elrond", theme: "Lord of the Rings", category: "LOTR", pieces: 243, retail: 19.99, priority: "Low", notes: "Retired 2013 - Rivendell council scene, hard to find" },
    { setNumber: "79007", name: "Battle at the Black Gate", theme: "Lord of the Rings", category: "LOTR", pieces: 656, retail: 59.99, priority: "High", notes: "Retired 2013 - Mordor gate, Aragorn, Mouth of Sauron" },
    { setNumber: "79000", name: "Riddles for the Ring", theme: "The Hobbit", category: "LOTR", pieces: 105, retail: 9.99, priority: "Low", notes: "Retired 2012 - Bilbo vs Gollum riddle scene" },
    { setNumber: "79001", name: "Escape from Mirkwood Spiders", theme: "The Hobbit", category: "LOTR", pieces: 298, retail: 29.99, priority: "Low", notes: "Retired 2013 - Mirkwood spiders with Bilbo, Legolas, Tauriel" },
    { setNumber: "79011", name: "Dol Guldur Ambush", theme: "The Hobbit", category: "LOTR", pieces: 217, retail: 19.99, priority: "Low", notes: "Retired 2013 - Beorn, Yazneg orc, Warg ambush" },
    { setNumber: "79012", name: "Mirkwood Elf Army", theme: "The Hobbit", category: "LOTR", pieces: 276, retail: 29.99, priority: "Low", notes: "Retired 2013 - Thranduil, Legolas, Tauriel, Elf Guards" },
    { setNumber: "79013", name: "Lake-town Chase", theme: "The Hobbit", category: "LOTR", pieces: 470, retail: 59.99, priority: "Low", notes: "Retired 2013 - Bard's house, Bilbo, dwarves, orcs" },
    { setNumber: "79015", name: "Witch-king Battle", theme: "The Hobbit", category: "LOTR", pieces: 105, retail: 14.99, priority: "Low", notes: "Retired 2014 - Galadriel, Elrond vs Witch-king at Dol Guldur" },
    { setNumber: "79017", name: "The Battle of Five Armies", theme: "The Hobbit", category: "LOTR", pieces: 472, retail: 59.99, priority: "Low", notes: "Retired 2014 - Thorin, Dwalin, Azog the Defiler" },
  ]
};
