// ========================================
// Loose minifigures with missing parts (Nov 2026)
// ========================================
//
// Minifigures we have on their own (not from a set we own) that are missing parts.
// Minifigs from sets we own are logged in that set's missing list in data.js instead.
// part = BrickLink part number, colorId = BrickLink colour ID, taken from each
// minifig's BrickLink inventory. Shown on the Missing Pieces page.

const MISSING_MINIFIGS = [
  { id: "cty0472", name: "City woman, shell pendant shirt", missing: [
    { qty: 1, part: "3626pb0633", colorId: 3, color: "Yellow", name: "Head, female, open smile with teeth" },
    { qty: 1, part: "62711", colorId: 11, color: "Black", name: "Hair, short bob cut" }
  ] },
  { id: "cty0709", name: "Police bandit, red overalls", missing: [
    { qty: 1, part: "41334", colorId: 11, color: "Black", name: "Knit cap" }
  ] },
  { id: "cty0294", name: "Worker, orange overalls", missing: [
    { qty: 1, part: "4485b", colorId: 5, color: "Red", name: "Cap, short curved bill" }
  ] },
  { id: "cty1322", name: "Stuntz spectator, blue jacket", missing: [
    { qty: 1, part: "87990", colorId: 150, color: "Medium Nougat", name: "Hair, ponytail with side fringe" }
  ] },
  { id: "pi008", name: "Pirate, blue jacket", missing: [
    { qty: 1, part: "3626px119", colorId: 3, color: "Yellow", name: "Head, eye patch and stubble" }
  ] },
  { id: "sw0606", name: "Clone Trooper, Geonosis camo", missing: [
    { qty: 1, part: "11217pb12", colorId: 150, color: "Medium Nougat", name: "Clone Trooper helmet, Phase 2 camo" }
  ] },
  { id: "col158", name: "Trendsetter (Series 10)", missing: [
    { qty: 1, part: "3626pb0918", colorId: 3, color: "Yellow", name: "Head, female, sunglasses with heart" },
    { qty: 1, part: "12890", colorId: 103, color: "Bright Light Yellow", name: "Hair, female long straight" }
  ] },
  { id: "jw101", name: "Dinosaur market stall owner", missing: [
    { qty: 1, part: "90541", colorId: 85, color: "Dark Bluish Gray", name: "Beanie" }
  ] },
  { id: "cas553", name: "Peasant, black hood", missing: [
    { qty: 1, part: "4523", colorId: 8, color: "Brown", name: "D-basket" },
    { qty: 2, part: "4505", colorId: 11, color: "Black", name: "Hood, farmer's cowl" }
  ] },
  { id: "oct012", name: "Octan worker", missing: [
    { qty: 1, part: "4485", colorId: 5, color: "Red", name: "Cap, long flat bill" }
  ] },
  { id: "col175", name: "Diner Waitress (Series 11)", missing: [
    { qty: 1, part: "3626pb0993", colorId: 3, color: "Yellow", name: "Head, female, blue glasses" },
    { qty: 1, part: "13785", colorId: 150, color: "Medium Nougat", name: "Hair, ponytail and fringe" }
  ] },
  { id: "twn076", name: "Horse rider, black suit", missing: [
    { qty: 1, part: "3626pb0205", colorId: 3, color: "Yellow", name: "Head, female, red lips, wide grin" }
  ] },
  { id: "cas520", name: "King's Knight, broad brim helmet", missing: [
    { qty: 1, part: "30273", colorId: 67, color: "Metallic Silver", name: "Helmet, kettle hat with broad brim" }
  ] },
  { id: "cas107", name: "Crusader Axe soldier", missing: [
    { qty: 1, part: "3896", colorId: 10, color: "Dark Gray", name: "Helmet with chin guard" }
  ] },
  { id: "cty0471", name: "Construction worker, safety goggles", missing: [
    { qty: 1, part: "983", colorId: 3, color: "Yellow", name: "Hand" }
  ] },
  { id: "gen079", name: "Teen, orange hoodie", missing: [
    { qty: 1, part: "11303", colorId: 63, color: "Dark Blue", name: "Cap with hole on top" }
  ] },
  { id: "pi020", name: "Pirate, blue/white stripes", missing: [
    { qty: 1, part: "3626px13", colorId: 3, color: "Yellow", name: "Head, moustache and stubble" },
    { qty: 1, part: "x70", colorId: 5, color: "Red", name: "Bandana" }
  ] },
  { id: "njo0372", name: "Patty Keys", missing: [
    { qty: 1, part: "3626pb2007", colorId: 3, color: "Yellow", name: "Head, female, scared" },
    { qty: 1, part: "93217", colorId: 11, color: "Black", name: "Hair, top knot bun" },
    { qty: 1, part: "970c85pb19", colorId: 63, color: "Dark Blue", name: "Legs, dark bluish gray with dark blue robe pattern" }
  ] },
  { id: "cop011", name: "Sheriff, black suit", missing: [
    { qty: 1, part: "3626px11", colorId: 3, color: "Yellow", name: "Head, thick moustache" },
    { qty: 1, part: "3901", colorId: 11, color: "Black", name: "Hair, male smooth" }
  ] },
  { id: "bdp092", name: "Traveler, light blue hoodie", missing: [
    { qty: 1, part: "99930", colorId: 11, color: "Black", name: "Hair, short combed sideways" }
  ] },
  { id: "col040", name: "Race Car Driver (Series 3)", missing: [
    { qty: 1, part: "3626pb0510", colorId: 3, color: "Yellow", name: "Head, lopsided grin with teeth" }
  ] },
  { id: "cty1126", name: "Police officer, spiked hair", missing: [
    { qty: 1, part: "3626pb2385", colorId: 3, color: "Yellow", name: "Head, lopsided grin" },
    { qty: 1, part: "98385", colorId: 150, color: "Medium Nougat", name: "Hair, spiked" }
  ] },
  { id: "cty0453", name: "Police bandit, masked", missing: [
    { qty: 1, part: "41334", colorId: 11, color: "Black", name: "Knit cap" }
  ] },
  { id: "col086", name: "Flamenco Dancer (Series 6)", missing: [
    { qty: 1, part: "3626pb0658", colorId: 3, color: "Yellow", name: "Head, female, red lips, beauty mark" }
  ] },
  { id: "twn259", name: "Press reporter", missing: [
    { qty: 1, part: "87990", colorId: 103, color: "Bright Light Yellow", name: "Hair, ponytail with side fringe" },
    { qty: 1, part: "981", colorId: 5, color: "Red", name: "Arm (left 981, or right 982)" },
    { qty: 1, part: "983", colorId: 3, color: "Yellow", name: "Hand" }
  ] },
  { id: "sp036", name: "Space Police I officer", missing: [
    { qty: 1, part: "970c01", colorId: 11, color: "Black", name: "Legs, white with black hips" },
    { qty: 2, part: "983", colorId: 1, color: "White", name: "Hand" },
    { qty: 1, part: "2446", colorId: 1, color: "White", name: "Space helmet" },
    { qty: 1, part: "2447", colorId: 17, color: "Trans-Red", name: "Visor (goes on the helmet)" }
  ] },
  { id: "sh0365", name: "Magneto", missing: [
    { qty: 1, part: "19888", colorId: 89, color: "Dark Purple", name: "Cape, spongy cloth" },
    { qty: 1, part: "10305pb01", colorId: 5, color: "Red", name: "Helmet with front prongs" }
  ] },
  { id: "cas523", name: "King's Knight, lion armor", missing: [
    { qty: 1, part: "x167", colorId: 67, color: "Metallic Silver", name: "Helmet with fixed face grille" }
  ] },
  { id: "sw0294", name: "Imperial Pilot (cap)", missing: [
    { qty: 1, part: "30135", colorId: 11, color: "Black", name: "Cavalry cap (kepi)" }
  ] },
  { id: "twn183", name: "Man in red zigzag jacket", missing: [
    { qty: 1, part: "61506", colorId: 2, color: "Tan", name: "Fedora, wide brim" }
  ] },
  { id: "cty1290", name: "Hospital patient", missing: [
    { qty: 1, part: "3626pb1966", colorId: 3, color: "Yellow", name: "Head, smirk with stubble" },
    { qty: 1, part: "24073", colorId: 1, color: "White", name: "Head bandage" }
  ] },
  { id: "sw0523", name: "Clone Airborne Trooper (212th)", missing: [
    { qty: 1, part: "15308pb01", colorId: 1, color: "White", name: "Airborne Clone helmet, orange markings" }
  ] },
  { id: "njo0341", name: "Shark Army Gunner", missing: [
    { qty: 1, part: "3626pb1902", colorId: 3, color: "Yellow", name: "Head, goatee and scar" },
    { qty: 1, part: "41334", colorId: 63, color: "Dark Blue", name: "Knit cap" }
  ] },
  { id: "ac004", name: "Alien Conquest businessman", missing: [
    { qty: 1, part: "3626pb0585", colorId: 3, color: "Yellow", name: "Head, glasses, smile / scared" }
  ] },
  { id: "sp013", name: "Futuron, black", missing: [
    { qty: 1, part: "981", colorId: 11, color: "Black", name: "Arm, left" },
    { qty: 1, part: "982", colorId: 11, color: "Black", name: "Arm, right" },
    { qty: 2, part: "983", colorId: 11, color: "Black", name: "Hand" },
    { qty: 1, part: "970c00", colorId: 11, color: "Black", name: "Legs" },
    { qty: 1, part: "2446", colorId: 11, color: "Black", name: "Space helmet" },
    { qty: 1, part: "2447", colorId: 14, color: "Trans-Dark Blue", name: "Visor (goes on the helmet)" }
  ] },
  { id: "pln040", name: "Classic plain black torso (2 figures)", copies: 2, missing: [
    { qty: 2, part: "970c03", colorId: 11, color: "Black", name: "Legs, yellow with black hips" },
    { qty: 4, part: "983", colorId: 3, color: "Yellow", name: "Hand" },
    { qty: 2, part: "3626ap01", colorId: 3, color: "Yellow", name: "Head, standard grin" },
    { qty: 2, part: "3901", colorId: 11, color: "Black", name: "Hair, male smooth" }
  ] },
  { id: "col024", name: "Lifeguard (Series 2)", missing: [
    { qty: 1, part: "62696", colorId: 103, color: "Bright Light Yellow", name: "Hair, long ponytail with side bangs" }
  ] },
  { id: "cas322", name: "Castle knight, black breastplate, red cape", missing: [
    { qty: 1, part: "3626px120", colorId: 3, color: "Yellow", name: "Head, moustache and red goatee" },
    { qty: 1, part: "3844", colorId: 11, color: "Black", name: "Helmet with neck protector" }
  ] },
  { id: "sh0211", name: "Lightning Lad", missing: [
    { qty: 2, part: "983", colorId: 63, color: "Dark Blue", name: "Hand" }
  ] },
  { id: "rac061", name: "Race mechanic, lime jacket", missing: [
    { qty: 1, part: "981", colorId: 34, color: "Lime", name: "Arm (left, 981, or right, 982)" },
    { qty: 1, part: "983", colorId: 85, color: "Dark Bluish Gray", name: "Hand" }
  ] },
  { id: "cty1072", name: "Mechanic, dark orange ponytail", missing: [
    { qty: 1, part: "3626pb2147", colorId: 3, color: "Yellow", name: "Head, female, smirk / dirty smile" },
    { qty: 1, part: "87990", colorId: 68, color: "Dark Orange", name: "Hair, ponytail with side fringe" }
  ] },
  { id: "trn043", name: "Police, sheriff zipper jacket", missing: [
    { qty: 1, part: "3901", colorId: 8, color: "Brown", name: "Hair, male smooth" }
  ] },
  { id: "sh0219", name: "Superman, dark blue suit", missing: [
    { qty: 1, part: "23186", colorId: 11, color: "Black", name: "Hair, swept left tousled" }
  ] },
  { id: "cop015", name: "Police officer, classic", missing: [
    { qty: 1, part: "3624", colorId: 11, color: "Black", name: "Police hat" }
  ] },
  { id: "hor008", name: "Townsperson, blue stripes", missing: [
    { qty: 1, part: "970c00", colorId: 7, color: "Blue", name: "Legs" }
  ] },
  { id: "par026", name: "Townsperson, blue/green stripes", missing: [
    { qty: 1, part: "970c00", colorId: 1, color: "White", name: "Legs" }
  ] },
  { id: "pi030", name: "Pirate, red/black stripes", missing: [
    { qty: 1, part: "x70", colorId: 7, color: "Blue", name: "Bandana" },
    { qty: 1, part: "970c00", colorId: 5, color: "Red", name: "Legs" },
    { qty: 1, part: "3626pb0082", colorId: 3, color: "Yellow", name: "Head, eye patch and stubble" }
  ] },
  { id: "sh0109", name: "Armored Truck Driver", missing: [
    { qty: 1, part: "3626pb0704", colorId: 90, color: "Light Nougat", name: "Head, stern" },
    { qty: 1, part: "3624", colorId: 11, color: "Black", name: "Police hat" }
  ] },
  { id: "bat012", name: "Mr. Freeze's Henchman", missing: [
    { qty: 1, part: "3626pb0202", colorId: 90, color: "Light Nougat", name: "Head, sunglasses and goatee" },
    { qty: 2, part: "983", colorId: 11, color: "Black", name: "Hand" },
    { qty: 1, part: "41334", colorId: 11, color: "Black", name: "Knit cap" }
  ] },
  { id: "soc017", name: "Soccer player #3", missing: [
    { qty: 1, part: "981", colorId: 5, color: "Red", name: "Arm, left" },
    { qty: 1, part: "982", colorId: 5, color: "Red", name: "Arm, right" },
    { qty: 1, part: "3626px101", colorId: 3, color: "Yellow", name: "Head, red headband and freckles" },
    { qty: 1, part: "970c00", colorId: 7, color: "Blue", name: "Legs" }
  ] },
  { id: "sp033", name: "M:Tron astronaut", missing: [
    { qty: 1, part: "3626p01", colorId: 3, color: "Yellow", name: "Head, standard grin" },
    { qty: 1, part: "2446", colorId: 11, color: "Black", name: "Space helmet" },
    { qty: 1, part: "2447", colorId: 16, color: "Trans-Neon Green", name: "Visor (goes on the helmet)" },
    { qty: 1, part: "3838", colorId: 11, color: "Black", name: "Air tanks" }
  ] },
  { id: "cop013", name: "Police, white hat", missing: [
    { qty: 1, part: "970c00", colorId: 11, color: "Black", name: "Legs" },
    { qty: 1, part: "3626ap01", colorId: 3, color: "Yellow", name: "Head, standard grin" },
    { qty: 1, part: "3624", colorId: 1, color: "White", name: "Police hat" }
  ] },
  { id: "sh0033", name: "Loki (green cape)", missing: [
    { qty: 1, part: "10909", colorId: 115, color: "Pearl Gold", name: "Helmet with large curved horns" }
  ] },
  { id: "sh0038", name: "Spider-Man (2 figures)", copies: 2, missing: [
    { qty: 1, part: "981", colorId: 7, color: "Blue", name: "Arm, left", note: "First Spider-Man (missing both arms)" },
    { qty: 1, part: "982", colorId: 7, color: "Blue", name: "Arm, right", note: "First Spider-Man (missing both arms)" },
    { qty: 1, part: "981", colorId: 7, color: "Blue", name: "Arm (left 981, or right 982)", note: "Second Spider-Man, replaces the broken arm" },
    { qty: 3, part: "983", colorId: 5, color: "Red", name: "Hand", note: "2 for the first Spider-Man, 1 for the second" }
  ] },
  { id: "sw0036b", name: "Stormtrooper (black head)", missing: [
    { qty: 1, part: "3626", colorId: 11, color: "Black", name: "Head, plain" }
  ] },
  { id: "sw0541", name: "Clone Trooper (Phase 2)", missing: [
    { qty: 1, part: "3626pb0817", colorId: 90, color: "Light Nougat", name: "Head, scowl" }
  ] },
  { id: "col103", name: "Daredevil (Series 7)", missing: [
    { qty: 1, part: "3626pb0715", colorId: 3, color: "Yellow", name: "Head, moustache, happy / scared" },
    { qty: 1, part: "98371", colorId: 150, color: "Medium Nougat", name: "Hair, swept back with forelock" },
    { qty: 1, part: "2446pb37", colorId: 1, color: "White", name: "Helmet with red star in blue circle" },
    { qty: 1, part: "2447", colorId: 14, color: "Trans-Dark Blue", name: "Visor (goes on the helmet)" },
    { qty: 1, part: "522", colorId: 1, color: "White", name: "Cape, cloth" }
  ] },
  { id: "sw0599", name: "Santa Darth Vader", missing: [
    { qty: 1, part: "30368", colorId: 11, color: "Black", name: "Darth Vader helmet (one piece)" },
    { qty: 1, part: "983", colorId: 1, color: "White", name: "Hand" }
  ] },
  { id: "sh0187", name: "Carnage", missing: [
    { qty: 1, part: "48724", colorId: 11, color: "Black", name: "Neck bracket with pin" },
    { qty: 1, part: "90202", colorId: 11, color: "Black", name: "Technic pin connector, round with 4 clips", note: "Holds his tendrils on the back" }
  ] },
  { id: "coltlnm05", name: "Garmadon (Ninjago Movie series)", missing: [
    { qty: 1, part: "26007", colorId: 11, color: "Black", name: "Conical hat with raised center" }
  ] },
  { id: "sw0001c", name: "Battle Droid", missing: [
    { qty: 1, part: "30378", colorId: 2, color: "Tan", name: "Battle droid head", note: "Same head on every basic battle droid" }
  ] },
  { id: "cty0430", name: "Mechanic, overalls with tools", missing: [
    { qty: 2, part: "983", colorId: 3, color: "Yellow", name: "Hand" },
    { qty: 1, part: "3626px288", colorId: 3, color: "Yellow", name: "Head, beard and sideburns, open smile" },
    { qty: 1, part: "99930", colorId: 85, color: "Dark Bluish Gray", name: "Hair, short combed sideways" }
  ] },
  { id: "hol055", name: "Woman, shell pendant shirt, dark blue legs", missing: [
    { qty: 1, part: "983", colorId: 3, color: "Yellow", name: "Hand" },
    { qty: 1, part: "87990", colorId: 88, color: "Reddish Brown", name: "Hair, ponytail with side fringe" },
    { qty: 1, part: "3626pb1061", colorId: 3, color: "Yellow", name: "Head, female, lopsided grin / scared" },
    { qty: 1, part: "970c00", colorId: 63, color: "Dark Blue", name: "Legs" }
  ] },
  { id: "air003", name: "Airport worker, classic", missing: [
    { qty: 1, part: "970c00", colorId: 1, color: "White", name: "Legs", note: "Alex borrowed them for another minifig" }
  ] },
];
