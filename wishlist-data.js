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

    { setNumber: "40483", name: "Luke Skywalker's Lightsaber", theme: "Star Wars", category: "STAR WARS", pieces: 173, retail: 157, used: 81, priority: "Low", notes: "2021 gift with purchase (May the 4th). BrickLink 6-month sales (Nov 17): New ~$157, Used ~$81. Buildable hilt on a stand" },
    { setNumber: "5006290", name: "Yoda's Lightsaber", image: "https://cdn.rebrickable.com/media/sets/5006290-1.jpg", theme: "Star Wars", category: "STAR WARS", pieces: 140, retail: 279, used: 127, priority: "Low", notes: "2020 promotional build. BrickLink 6-month sales (Nov 17): New ~$279, Used ~$127. The rarest of the lightsabers" },
    { setNumber: "40730", name: "Luke Skywalker's Lightsaber (2024)", theme: "Star Wars", category: "STAR WARS", pieces: 145, retail: 138, used: 83, priority: "Low", notes: "2024 gift with purchase, a different design from the 2021 one. BrickLink 6-month sales (Nov 17): New ~$138, Used ~$83" },
    { setNumber: "40917", name: "The Darksaber", theme: "Star Wars", category: "STAR WARS", pieces: 278, retail: 42, used: 28, priority: "Low", notes: "2026 gift with purchase (The Mandalorian). BrickLink 6-month sales (Nov 17): New ~$42, Used ~$28" },
    { setNumber: "40897", name: "Darth Vader's Lightsaber", theme: "Star Wars", category: "STAR WARS", retail: 92, used: 60, priority: "Low", notes: "2026 gift with purchase. BrickLink 6-month sales (Nov 17): New ~$92, Used ~$60" },

    // ===== HARRY POTTER =====

    // ===== MARVEL =====

    // ===== LORD OF THE RINGS / THE HOBBIT =====
    { setNumber: "9476", name: "The Orc Forge", theme: "Lord of the Rings", category: "LOTR", pieces: 363, retail: 355, used: 171, priority: "Low", notes: "Retired 2012 — BrickEconomy New ~$355, Used ~$171 (Nov 9; BrickLink refresh pending) (was $39.99 MSRP), Isengard forge with Saruman, Lurtz" },
    { setNumber: "9470", name: "Shelob Attacks", theme: "Lord of the Rings", category: "LOTR", pieces: 227, retail: 194, used: 71, priority: "Low", notes: "Retired 2012 — BrickEconomy New ~$194, Used ~$71 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Frodo, Sam, Gollum, Shelob spider" },
    { setNumber: "79006", name: "The Council of Elrond", theme: "Lord of the Rings", category: "LOTR", pieces: 243, retail: 191, used: 90, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$191, Used ~$90 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Rivendell council scene" },
    { setNumber: "79001", name: "Escape from Mirkwood Spiders", theme: "The Hobbit", category: "LOTR", pieces: 298, retail: 150, used: 70, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$150, Used ~$70 (Nov 9; BrickLink refresh pending) (was $29.99 MSRP), Mirkwood spiders with Bilbo, Legolas, Tauriel" },
    { setNumber: "79011", name: "Dol Guldur Ambush", theme: "The Hobbit", category: "LOTR", pieces: 217, retail: 114, used: 58, priority: "Low", notes: "Retired 2013 — BrickEconomy New ~$114, Used ~$58 (Nov 9; BrickLink refresh pending) (was $19.99 MSRP), Beorn, Yazneg orc, Warg ambush" },
    { setNumber: "40693", name: "The Fell Beast (Barad-dûr GWP)", theme: "Lord of the Rings", category: "LOTR", pieces: 269, retail: 320, priority: "Medium", used: 246, notes: "Retired June 2024 gift with purchase — BrickEconomy New ~$320, Used ~$246 (Nov 9; BrickLink refresh pending). Nazgûl minifig, poseable wings, Osgiliath ruin base" },
  ]
};
