// Possible purchases: listings we've looked at (Facebook Marketplace lots and so on).
// Values are BrickLink average used sold prices (last 6 months) unless a note says otherwise.
// status: "New" (found by the daily Marketplace check, first look only), "Considering", "Offered", "Bought" or "Passed".
// A "New" listing: id, title, url, source, location, listed, asking, checked, status: "New", photos,
// estimate { low, high }, verdict ("Deal", "Fair", "Pass" or "Unsure"), offer (optional), summary, items: [{ what, value: [low, high], note }].
// A passed listing only needs: id, title, url (optional), source, location, asking, checked, status: "Passed",
// photos (the first one is shown) and passReason.
// Each set: figs lists the minifigs the set comes with; seen: true when we spotted it in the listing.
const DEALS = [
  {
    id: "fb-1176325258141815",
    title: "Lego Friends",
    url: "https://www.facebook.com/marketplace/item/1176325258141815/",
    source: "Facebook Marketplace",
    location: "Milford, CT",
    listed: "Listed 2 hours ago",
    asking: 40,
    checked: "2026-11-27",
    status: "Passed",
    passReason: "A whole LEGO Friends collection (about 10–12 sets with booklets, ~22 mini-dolls, 4 horses) for $40, worth about $150–220 used. Cheap for what it is, but Friends isn't our theme and resells poorly, so we passed.",
    wasStatus: "New",
    photos: [
      { src: "01.jpg", caption: "Everything laid out: builds, about 22 mini-dolls, horses, and a bin of bags and booklets" },
      { src: "02.jpg", caption: "Instruction booklets (Andrea's Family House, Horse Training, Organic Café, Elsa's Jewelry Box and more)" }
    ],
    estimate: { low: 150, high: 220 },
    verdict: "Deal",
    offer: 40,
    summary: "A whole Lego Friends collection from one family: about 10–12 sets with all the booklets, roughly 22 mini-dolls, four horses and a bin of extra pieces. Some sets are built and some half taken apart, but the seller says the pieces were kept together. Even with some parts missing it's worth well over $100 used, so $40 is about a quarter of its value. Pay the asking price and pick up fast; it was listed two hours ago and won't last.",
    items: [
      { what: "41449 Andrea's Family House (3 booklets, partly built)", value: [35, 47], note: "BrickLink used avg $47" },
      { what: "41168 Elsa's Jewelry Box Creation (built, with Elsa)", value: [20, 28], note: "probably" },
      { what: "41444 Heartlake City Organic Café", value: [15, 22], note: "booklet seen, build probably in the bin" },
      { what: "41441 Horse Training and Trailer (built, with horse)", value: [12, 18], note: "probably" },
      { what: "Vet ambulance, rescue helicopter, horse stable, camper and small sets", value: [40, 60], note: "set numbers not all readable" },
      { what: "About 22 mini-dolls, 4 horses/foals, pets", value: [25, 45], note: "most belong to the sets above" }
    ]
  },
  {
    id: "fb-1921751735862942",
    title: "Lego Boost Creative Toolbox #17101",
    url: "https://www.facebook.com/marketplace/item/1921751735862942/",
    source: "Facebook Marketplace",
    location: "Westport, CT",
    listed: "Listed 2 hours ago",
    asking: 129,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "Box, booklet and the parts sorted into bags" }
    ],
    estimate: { low: 75, high: 100 },
    verdict: "Pass",
    summary: "Complete used Boost Creative Toolbox with its box, sorted into numbered bags. LEGO retired the Boost app (it now runs through Powered Up), and used ones have been selling on BrickLink for about $88. At $129 it's above what it's worth used.",
    items: [
      { what: "17101 Boost Creative Toolbox (complete, boxed)", value: [75, 100], note: "BrickLink used avg $88 (14 sales)" }
    ]
  },
  {
    id: "fb-2036447427048284",
    title: "LEGO Spider-Man Far From Home Molten Man Battle 76128",
    url: "https://www.facebook.com/marketplace/item/2036447427048284/",
    source: "Facebook Marketplace",
    location: "Bristol, CT",
    listed: "Listed 13 hours ago",
    asking: 20,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "Molten Man built, front and back" },
      { src: "02.jpg", caption: "Instruction booklet" }
    ],
    estimate: { low: 15, high: 30 },
    verdict: "Fair",
    summary: "The big Molten Man figure is built and looks complete, with the booklet. The set's minifigures (Spider-Man and Mysterio) aren't in any photo, and they're a good part of its value. Worth about $15 without them and $30 with them; price is firm, so only worth it if the minifigs are included.",
    items: [
      { what: "76128 Molten Man Battle (built, minifigs not shown)", value: [15, 30], note: "ask if the minifigs are included" }
    ]
  },
  {
    id: "fb-1366000582177152",
    title: "Mixed LEGO Bricks and Pieces",
    url: "https://www.facebook.com/marketplace/item/1366000582177152/",
    source: "Facebook Marketplace",
    location: "Trumbull, CT",
    listed: "Listed 18 hours ago",
    asking: 60,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "Both bins" }
    ],
    estimate: { low: 30, high: 50 },
    verdict: "Pass",
    summary: "Two small bins of loose pieces, mostly gray, white and black, which looks like broken-up Star Wars ships. No minifigs or booklets. It's maybe 8–10 pounds, about $30–50 at bulk prices, so $60 is too much.",
    items: [
      { what: "Loose bulk, about 8–10 lb (mostly gray/white, Star Wars-looking parts)", value: [30, 50], note: "weight is a guess from photos" }
    ]
  },
  {
    id: "fb-2999239850455751",
    title: "3 retired LEGO sets: Dobby, Bowser's Muscle Car, & Nutcracker, plus more!",
    url: "https://www.facebook.com/marketplace/item/2999239850455751/",
    source: "Facebook Marketplace",
    location: "Ships (+$14 shipping)",
    listed: "Listed recently",
    asking: 150,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "All six sealed boxes" }
    ],
    estimate: { low: 170, high: 210 },
    verdict: "Fair",
    offer: 110,
    summary: "Six sealed sets, and the biggest is the Grogu with Hover Pram (75403, $100 retail). The others are Dobby (76421), Bowser's Muscle Car (71431), the Toyota Supra Speed Champions car, the Turtle 3-in-1 (31377) and the Nutcracker (40640). Together they're about $200 at retail. $150 plus shipping is about 75% of that, which is a fair price, not a steal. Worth it at around $110.",
    items: [
      { what: "75403 Grogu with Hover Pram (sealed)", value: [80, 100], note: "" },
      { what: "76421 Dobby the House-Elf (sealed, retired)", value: [30, 40], note: "" },
      { what: "71431 Bowser's Muscle Car (sealed, retired)", value: [22, 30], note: "" },
      { what: "Speed Champions Fast & Furious Toyota Supra (sealed)", value: [18, 25], note: "" },
      { what: "40640 Nutcracker + 31377 Turtle with a Water Lily (sealed)", value: [18, 25], note: "" }
    ]
  },
  {
    id: "fb-1826825091897109",
    title: "LEGO Monster Fighters 9468 Vampyre Castle - PARTIAL - Bags 4 5 6 7 Sealed + Box + Manual 2",
    url: "https://www.facebook.com/marketplace/item/1826825091897109/",
    source: "Facebook Marketplace",
    location: "Bristol, CT",
    listed: "Listed a day ago",
    asking: 60,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "Box, sealed bags 4–7 and booklet 2" }
    ],
    estimate: { low: 40, high: 70 },
    verdict: "Pass",
    summary: "Only half of the Vampyre Castle: sealed bags 4–7, the worn box and booklet 2. Bags 1–3, booklet 1 and all the minifigures are missing, and the minifigures are what make this set valuable. It won't build the castle, and finishing it would cost more than buying a used complete one. Pass unless you already have bags 1–3.",
    items: [
      { what: "9468 Vampyre Castle bags 4–7 (sealed) + box + booklet 2", value: [40, 70], note: "parts value; no minifigs" }
    ]
  },
  {
    id: "fb-1783141066092548",
    title: "Bulk bin Legos",
    url: "https://www.facebook.com/marketplace/item/1783141066092548/",
    source: "Facebook Marketplace",
    location: "Watertown, CT",
    listed: "Listed 2 days ago",
    asking: 25,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "The bin" }
    ],
    estimate: { low: 20, high: 40 },
    verdict: "Fair",
    offer: 20,
    summary: "One tote of mixed loose pieces in lots of colors (some Friends-style pinks and teals). No minifigs, and the seller says a few non-LEGO bricks are mixed in. It looks like 6–10 pounds, so about $20–40 at bulk prices. It's cheap but not clearly a deal; worth $20 if you want extra pieces.",
    items: [
      { what: "Loose mixed bulk, about 6–10 lb", value: [20, 40], note: "can't see how deep it goes" }
    ]
  },
  {
    id: "fb-1583135616981823",
    title: "Lego Mech",
    url: "https://www.facebook.com/marketplace/item/1583135616981823/",
    source: "Facebook Marketplace",
    location: "Derby, CT",
    listed: "Listed 2 days ago",
    asking: 65,
    checked: "2026-11-27",
    status: "New",
    photos: [
      { src: "01.jpg", caption: "The mech, built" }
    ],
    estimate: { low: 60, high: 80 },
    verdict: "Fair",
    offer: 45,
    summary: "This is Ninjago 71821 Cole's Titan Dragon Mech (1,055 pieces), built. It matches the box picture: black, white and copper with the gold blades. Used complete ones sell for about $93 on BrickLink, but the seller says the minifig is missing. At $65 it's a fair price; worth it at around $45.",
    items: [
      { what: "71821 Cole's Titan Dragon Mech (built, no minifig)", value: [60, 80], note: "BrickLink used avg $93 complete" }
    ]
  },
  {
    id: "fb-2581007512325511",
    title: "Lego set and minifigure lot",
    url: "https://www.facebook.com/marketplace/item/2581007512325511/",
    source: "Facebook Marketplace",
    location: "Shelton, CT",
    asking: 220,
    askingWas: 250,
    condition: "Used - Good",
    listed: "Listed about 14 weeks before we looked",
    checked: "2026-11-26",
    status: "Considering",
    sellerSays: "Huge lot of various Lego sets. Pirates of the Caribbean, Star Wars, Ninjago and a lot more. Includes some minifigures but not all. Any offers will be considered, looking to get rid of ASAP to clear up space.",
    estimate: { low: 500, high: 620, complete: 770 },
    verdict: "Deal",
    verdictNote: "$220 is about 35–45% of what's there, even with most set minifigs missing. Offer $180, happy at $200–220. Don't lose it over $40.",
    offer: 180,
    maxPay: 220,
    message: "Hi, is this still available? I can pick up in Shelton this week. Would you take $180 cash for everything?",
    photos: [
      { src: "01-table.jpg", caption: "The whole lot" },
      { src: "02-hogwarts-side.jpg", caption: "Hogwarts, Fight for the Dagger, Swamp Speeder, Small Cottage" },
      { src: "03-hogwarts-bridge.jpg", caption: "Hogwarts towers and bridge, London Escape building" },
      { src: "04-skiff-mill.jpg", caption: "Desert Skiff, The Mill, London Escape carriage" },
      { src: "05-skull-truck.jpg", caption: "Skull Truck and the bagged Spinjitzu Dojo" },
      { src: "06-minifigs.jpg", caption: "Minifigs, The Mill, carriage" },
      { src: "07-cantina-atv.jpg", caption: "Bike Shop & Cafe building, Cantina, Nuckal's ATV, Sarlacc pit" },
      { src: "08-planes-racer.jpg", caption: "Cantina, biplanes, Racers car" },
      { src: "09-dojo-bag.jpg", caption: "Spinjitzu Dojo in a bag" },
      { src: "10-minifig-closeup.jpg", caption: "Minifig close-up" },
      { src: "11-london-carriage.jpg", caption: "London Escape carriage: Jack Sparrow, Gibbs, King George's Officer" },
      { src: "12-london-building.jpg", caption: "London Escape building" },
      { src: "13-swamp-speeder.jpg", caption: "Republic Swamp Speeder" },
      { src: "14-cantina-sarlacc.jpg", caption: "Mos Eisley Cantina and the Sarlacc pit" }
    ],
    checklistImage: "minifig-checklist.jpg",
    sets: [
      { setNumber: "4193", name: "The London Escape", theme: "Pirates of the Caribbean", year: 2011, used: 119, asShown: [70, 90], sure: true,
        note: "Building and green carriage are here. The brown cart with the white horse isn't in the photos.",
        figs: [["poc011", "Jack Sparrow (tricorne)", true], ["poc017", "Gibbs", true], ["poc018", "King George's Officer", true], ["poc016", "Coachman"], ["poc019", "King George's Soldier"]] },
      { setNumber: "2506", name: "Skull Truck", theme: "Ninjago", year: 2011, used: 127, asShown: [70, 90], sure: true,
        note: "White skull front, purple deck, big tires. Nuckal is sitting in it, but he belongs to Nuckal's ATV.",
        figs: [["njo0004", "Jay"], ["njo0001", "Zane"], ["njo0013", "Lord Garmadon"], ["njo0027", "Wyplash"]] },
      { setNumber: "4183", name: "The Mill", theme: "Pirates of the Caribbean", year: 2011, used: 85, asShown: [45, 60], sure: true,
        note: "Brown waterwheel building and cart.",
        figs: [["poc001", "Jack Sparrow (bandana)"], ["poc026", "Will Turner"], ["poc005", "Admiral Norrington"], ["poc015", "Hadras"]] },
      { setNumber: "7571", name: "The Fight for the Dagger", theme: "Prince of Persia", year: 2010, used: 70, asShown: [35, 45], sure: true,
        note: "Tan tower with the gold dome and red awning.",
        figs: [["pop001", "Alamut Merchant"], ["pop002", "Asoka", true], ["pop004", "Dastan (scabbard)"], ["pop003", "Princess Tamina"]] },
      { setNumber: "2504", name: "Spinjitzu Dojo", theme: "Ninjago", year: 2011, used: 67, asShown: [35, 45], sure: true,
        note: "Taken apart, in a Ziploc bag.",
        figs: [["njo0002", "Sensei Wu"], ["njo0001", "Zane"], ["njo0003", "Nuckal"]] },
      { setNumber: "4867", name: "Hogwarts", theme: "Harry Potter", year: 2011, used: 65, usedNote: "only 2 recent sales ($43); likely $60–90", asShown: [40, 60], sure: true,
        note: "Two green-roofed towers and the bridge.",
        figs: [["hp094", "Harry Potter", true], ["hp101", "Dementor", true], ["hp104", "Lucius Malfoy"], ["hp132", "Goyle"], ["hp129", "Neville"], ["hp131", "Prof. Sprout"], ["hp130", "Prof. Lupin"]] },
      { setNumber: "31026", name: "Bike Shop & Cafe", theme: "Creator", year: 2014, used: 64, asShown: [25, 35], sure: true,
        note: "Only the white café building (left half). Its roof and the blue bike shop aren't in the photos. Not in our collection.",
        figs: [["twn211", "Man, black vest"], ["twn213", "Woman, blue shirt"], ["twn212", "Orange hoodie"]] },
      { setNumber: "8091", name: "Republic Swamp Speeder", theme: "Star Wars", year: 2010, used: 45, usedNote: "BrickEconomy", asShown: [20, 30], sure: true,
        note: "Round gray hover base with the big fan engine.",
        figs: [["sw0269", "Barriss Offee"], ["sw0272", "Clone Trooper Ph.2"], ["sw0092", "Super Battle Droid"], ["sw0001c", "Battle Droid x2"]] },
      { setNumber: "2518", name: "Nuckal's ATV", theme: "Ninjago", year: 2011, used: 40, usedNote: "estimate, no recent sales", asShown: [25, 35], sure: true,
        note: "White tusked skull front with black paddle wheels.",
        figs: [["njo0009", "Kai DX"], ["njo0003", "Nuckal (in the Skull Truck)", true]] },
      { setNumber: "75205", name: "Mos Eisley Cantina", theme: "Star Wars", year: 2018, used: 40, asShown: [20, 30], sure: false,
        note: "Tan arches, rounded roof corner, grates on top. Fairly good match.",
        figs: [["sw0893", "Wuher"], ["sw0771", "Han Solo"], ["sw0898", "Greedo"], ["sw0894", "Sandtrooper"]] },
      { setNumber: "9496", name: "Desert Skiff", theme: "Star Wars", year: 2012, used: 25, asShown: [18, 25], sure: true,
        note: "The brown skiff and the Sarlacc pit.",
        figs: [["sw0395", "Luke Skywalker"], ["sw0398", "Lando (skiff guard)", true], ["sw0396", "Boba Fett"], ["sw0397", "Kithaba", true]] },
      { setNumber: "31009", name: "Small Cottage", theme: "Creator", year: 2013, used: 17, asShown: [12, 17], sure: true,
        note: "Red house with the blue roof.",
        figs: [] }
    ],
    otherFigs: [
      { name: "Ron Weasley", from: "another Harry Potter set" },
      { name: "Hagrid", from: "another Harry Potter set" },
      { name: "Hermione", from: "another Harry Potter set" },
      { name: "Dastan, shirtless", from: "7570 The Ostrich Race" },
      { name: "Seso (different helmet)", from: "7570 The Ostrich Race" },
      { name: "Sheikh Amar? (no turban)", from: "7570 The Ostrich Race" },
      { name: "Alamut soldier", from: "7573 Battle of Alamut" },
      { name: "Clone Trooper (Clone Wars style)", from: "a Clone Wars set, not the Swamp Speeder" },
      { name: "Two figures in the dark red hot rod", from: "Creator style, not identified" },
      { name: "Bald man with a red scarf", from: "not identified" },
      { name: "Seated bald man in black", from: "not identified" },
      { name: "Pilot with aviator cap", from: "not identified" },
      { name: "Racing driver", from: "old Town / Racers" },
      { name: "Teal torso", from: "no head or legs" }
    ],
    unidentified: [
      { what: "Red flame-printed Ninjago car", value: [10, 25] },
      { what: "Blue Racers car", value: [5, 15] },
      { what: "Red biplane and white seaplane", value: [10, 20] },
      { what: "White-and-blue and tan arched Prince of Persia pieces, tan obelisk with gold head", value: [10, 25] },
      { what: "Red hot rod with two figures", value: [5, 10] },
      { what: "Drawers under the table and a bag of yellow/black pieces (ask if included)", value: [0, 0] }
    ],
    minifigValue: [60, 100],
    checklist: [
      "Make sure the Skull Truck, The Mill and the London Escape are mostly complete. They hold the most value.",
      "Ask if he has the rest of the minifigs somewhere, especially the Ninjago and Pirates of the Caribbean ones.",
      "Ask whether the drawers under the table and the Ziploc bags come with the lot.",
      "Look for the Ostrich Race ostriches and the London Escape cart with the white horse."
    ]
  }
  ,
  {
    id: "fb-1919554739484319",
    title: "50+ pounds Legos 100+ mini figs",
    url: "https://www.facebook.com/marketplace/item/1919554739484319/",
    source: "Facebook Marketplace",
    location: "Fort Montgomery, NY",
    asking: 400,
    checked: "2026-11-26",
    status: "Passed",
    estimate: { low: 365, high: 590 },
    photos: [{ src: "01-lot.jpg", caption: "The whole lot" }, { src: "02-minifigs.jpg", caption: "Minifig close-up" }],
    passReason: "Loose bulk and common figures, with nothing pointing to a set we could rebuild. About 70 City/Town minifigs ($1–3 each; C-3PO, Leia, Batman and a TMNT Leonardo are the best at $4–8), about 25 Friends and Disney mini-dolls (Elsa, Anna, Kristoff, Ariel), animals, capes and 50+ lbs of loose bricks. Worth about $365–590, so $400 is fair, not a deal. Would need to be about $250."
  },
  {
    id: "fb-city-lot-2026-11-26",
    title: "City and Jurassic World bins with instructions",
    url: "",
    source: "Facebook Marketplace",
    location: "",
    asking: 200,
    checked: "2026-11-26",
    status: "Passed",
    estimate: { low: 180, high: 280 },
    photos: [{ src: "01-lot.jpg", caption: "The lot" }],
    passReason: "Mostly common City and Jurassic World sets, partly taken apart: 60196 Arctic Supply Plane, 60228 Deep Space Rocket, 75928 Blue's Helicopter Pursuit, 60182 Pickup & Caravan and 10757 Raptor Rescue Truck (about $210 if complete), plus 30–40 common minifigs and some dinos. Several bags were Mega Construx and other brands. Worth about $180–280, so $200 is fair, not a deal. Would need to be about $120."
  }
];
