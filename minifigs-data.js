// ========================================
// LEGO Minifigs - Ortner's Collection
// Cabinet display, grouped by franchise
// ========================================
//
// IDs scanned via Brickify on Lucas's actual figs (Oct 2026 inventory).
// Image URL: https://img.bricklink.com/ItemImage/MN/0/<id>.png
// Prices: Brickify for figs logged before Oct 2026; BrickLink Used Avg
// (last 6 months) for figs added in the Oct 2026 refresh.
//
// Schema:
//   id              - BrickLink minifig ID (lowercase) for image URL
//   name            - Display name
//   franchise       - "Star Wars" | "Harry Potter" | "Lord of the Rings"
//                   | "Ninjago" | "Minecraft" | "The LEGO Movie"
//   side            - sub-category (Jedi/Sith/Trooper/Droid/Wizard/etc)
//   era             - Optional flavor
//   source          - Where the fig came from
//   year            - Optional: year the variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - Market value per fig (USD)
//   owned           - true if we have it
//   qty             - How many copies we own

const MINIFIGS_DATA = {
  minifigs: [
    // ============================================================
    // STAR WARS — Force-users & main characters
    // ============================================================
    { id: "sw0593", name: "Qui-Gon Jinn (Printed Legs)",                 franchise: "Star Wars", side: "Jedi",          era: "Prequel",     source: "Collection", rarity: "Rare",     currentValue: 38.83, owned: true, qty: 1 },
    { id: "sw0833", name: "Aayla Secura",                                franchise: "Star Wars", side: "Jedi",          era: "Clone Wars",  source: "BrickLink", year: 2017, rarity: "Rare",     currentValue: 34.92, owned: true, qty: 1, notes: "Dark pink lips (75182)" },
    { id: "sw0911", name: "Ki-Adi-Mundi",                                franchise: "Star Wars", side: "Jedi",          era: "Prequel",     source: "BrickLink", year: 2018, rarity: "Rare",     currentValue: 17.37, owned: true, qty: 1, notes: "Printed legs, nougat eye shadow (75206)" },
    { id: "sw1237", name: "Reva (Third Sister)",                         franchise: "Star Wars", side: "Inquisitor",    era: "Imperial",    source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 10.41, owned: true, qty: 1, notes: "From Obi-Wan Kenobi series (75336)" },
    { id: "sw1396", name: "Ahsoka Tano (Padawan, Clone Wars)",           franchise: "Star Wars", side: "Jedi",          era: "Clone Wars",  source: "BrickLink", year: 2025, rarity: "Uncommon", currentValue: 8.08,  owned: true, qty: 1, notes: "Dark red backless vest (75401)" },
    { id: "sw1083", name: "Anakin Skywalker (Dirt Stains, Mustafar)",    franchise: "Star Wars", side: "Jedi",          era: "Prequel",     source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 7.93,  owned: true, qty: 1, notes: "Weathered Episode III look (75269)" },
    { id: "sw1228", name: "Darth Vader (Printed Arms)",                  franchise: "Star Wars", side: "Sith",          era: "Original",    source: "Collection", rarity: "Uncommon", currentValue: 8.15,  owned: true, qty: 1, notes: "Light nougat head" },
    { id: "sw1414", name: "Plo Koon (printed legs)",                     franchise: "Star Wars", side: "Jedi",          era: "Clone Wars",  source: "BrickLink", year: 2023, rarity: "Common",   currentValue: 6.85,  owned: true, qty: 1, notes: "Dark brown robe, tan shirt, printed legs" },
    { id: "sw1155", name: "Darth Maul (Clone Wars, printed legs)",       franchise: "Star Wars", side: "Sith",          era: "Clone Wars",  source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 6.45,  owned: true, qty: 1, notes: "Printed legs with silver armor" },
    { id: "sw1205", name: "Mace Windu",                                  franchise: "Star Wars", side: "Jedi",          era: "Prequel",     source: "BrickLink", year: 2022, rarity: "Common",   currentValue: 6.12,  owned: true, qty: 1, notes: "Dark tan legs, open mouth, printed arms (75342)" },
    { id: "sw1084", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)",            franchise: "Star Wars", side: "Jedi",          era: "Original",    source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 6.03,  owned: true, qty: 1, notes: "Light bluish grey hair, beard with white highlights" },
    { id: "sw1255", name: "Obi-Wan Kenobi (Ep. II, hood)",               franchise: "Star Wars", side: "Jedi",          era: "Prequel",     source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 5.67,  owned: true, qty: 1, notes: "Reddish brown robe and hood" },
    { id: "sw1300", name: "Ahsoka Tano (older, Ahsoka show)",            franchise: "Star Wars", side: "Jedi",          era: "Mandalorian", source: "BrickLink", year: 2023, rarity: "Common",   currentValue: 5.00,  owned: true, qty: 1, notes: "Pearl dark grey robe, headtail stripes (75362)" },
    { id: "sw0551", name: "Luke Skywalker (Tatooine)",                   franchise: "Star Wars", side: "Jedi",          era: "Original",    source: "Collection", rarity: "Common",   currentValue: 4.24,  owned: true, qty: 1, notes: "White legs, detailed face print" },
    { id: "sw1166", name: "The Mandalorian (Din Djarin)",                franchise: "Star Wars", side: "Bounty Hunter", era: "Mandalorian", source: "BrickLink", year: 2021, rarity: "Common",   currentValue: 4.28,  owned: true, qty: 1, notes: "Silver beskar armor, jet pack" },

    // ============================================================
    // STAR WARS — Troopers, droids & crew
    // ============================================================
    { id: "sw0609", name: "Clone Trooper Pilot (Phase 1)",               franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Uncommon", currentValue: 14.00, owned: true, qty: 1, notes: "Bright light orange markings, printed legs" },
    { id: "sw0541", name: "Clone Trooper (Phase 2)",                     franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Uncommon", currentValue: 11.07, owned: true, qty: 1, notes: "Light nougat head" },
    { id: "sw0605", name: "Clone Airborne Trooper (Geonosis Camo)",      franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Uncommon", currentValue: 10.39, owned: true, qty: 2 },
    { id: "sw0606", name: "Clone Trooper Phase 2 (Geonosis Camo)",       franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Uncommon", currentValue: 10.29, owned: true, qty: 3 },
    { id: "sw0598", name: "Astromech Droid (Christmas)",                 franchise: "Star Wars", side: "Droid",   era: "Holiday",    source: "Collection", rarity: "Uncommon", currentValue: 9.10,  owned: true, qty: 1 },
    { id: "sw0613", name: "Senate Commando Captain",                     franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Uncommon", currentValue: 7.54,  owned: true, qty: 1, notes: "Printed legs" },
    { id: "sw0766", name: "Silver Protocol Droid (U-3PO)",               franchise: "Star Wars", side: "Droid",   era: "Original",   source: "Collection", rarity: "Common",   currentValue: 6.30,  owned: true, qty: 1 },
    { id: "sw0614", name: "Senate Commando",                             franchise: "Star Wars", side: "Trooper", era: "Clone Wars", source: "Collection", rarity: "Common",   currentValue: 6.05,  owned: true, qty: 2, notes: "Printed legs" },
    { id: "sw0603", name: "Imperial Shadow Stormtrooper",                franchise: "Star Wars", side: "Trooper", era: "Imperial",   source: "Collection", rarity: "Common",   currentValue: 5.66,  owned: true, qty: 2 },
    { id: "sw0763", name: "Chewbacca (White Snow / Christmas)",          franchise: "Star Wars", side: "Hero",    era: "Holiday",    source: "Collection", rarity: "Common",   currentValue: 5.44,  owned: true, qty: 1 },
    { id: "sw0604", name: "Shadow Guard",                                franchise: "Star Wars", side: "Trooper", era: "Imperial",   source: "Collection", rarity: "Common",   currentValue: 5.14,  owned: true, qty: 2 },
    { id: "sw1238", name: "C-3PO (Holiday/Christmas Edition)",           franchise: "Star Wars", side: "Droid",   era: "Holiday",    source: "BrickLink", year: 2022, rarity: "Common", currentValue: 5.04, owned: true, qty: 1, notes: "Festive holiday variant" },
    { id: "sw1136", name: "NI-L8 Protocol Droid",                        franchise: "Star Wars", side: "Droid",   era: "Original",   source: "Collection", rarity: "Common",   currentValue: 4.63,  owned: true, qty: 1 },
    { id: "sw0734", name: "Hoth Rebel Trooper (White Uniform)",          franchise: "Star Wars", side: "Hero",    era: "Original",   source: "Collection", rarity: "Common",   currentValue: 4.55,  owned: true, qty: 1, notes: "Tan beard, backpack" },
    { id: "sw0666", name: "First Order Flametrooper",                    franchise: "Star Wars", side: "Trooper", era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 4.40,  owned: true, qty: 1 },
    { id: "sw0460", name: "General Rieekan",                             franchise: "Star Wars", side: "Hero",    era: "Original",   source: "Collection", rarity: "Common",   currentValue: 4.31,  owned: true, qty: 1 },
    { id: "sw1065", name: "Sith Trooper (Red)",                          franchise: "Star Wars", side: "Trooper", era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 4.19,  owned: true, qty: 1 },
    { id: "sw0762", name: "Bespin Guard",                                franchise: "Star Wars", side: "Hero",    era: "Original",   source: "Collection", rarity: "Common",   currentValue: 3.80,  owned: true, qty: 1 },
    { id: "sw1180", name: "Snowtrooper (Female)",                        franchise: "Star Wars", side: "Trooper", era: "Original",   source: "Collection", rarity: "Common",   currentValue: 3.72,  owned: true, qty: 1 },
    { id: "sw0764", name: "Snowtrooper (Backpack)",                      franchise: "Star Wars", side: "Trooper", era: "Original",   source: "Collection", rarity: "Common",   currentValue: 3.33,  owned: true, qty: 1 },
    { id: "sw0667", name: "First Order Stormtrooper",                    franchise: "Star Wars", side: "Trooper", era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 3.20,  owned: true, qty: 1, notes: "Rounded mouth pattern" },
    { id: "sw0463", name: "Snowtrooper",                                 franchise: "Star Wars", side: "Trooper", era: "Original",   source: "Collection", rarity: "Common",   currentValue: 3.05,  owned: true, qty: 1, notes: "Printed head, torso back printing" },
    { id: "sw0661", name: "BB-8",                                        franchise: "Star Wars", side: "Droid",   era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 2.86,  owned: true, qty: 2 },
    { id: "sw0694", name: "First Order Officer (Sumistu)",               franchise: "Star Wars", side: "Imperial", era: "Sequel",    source: "Collection", rarity: "Common",   currentValue: 2.80,  owned: true, qty: 1 },
    { id: "sw0875", name: "First Order Snowtrooper",                     franchise: "Star Wars", side: "Trooper", era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 2.72,  owned: true, qty: 1 },
    { id: "sw0876", name: "Resistance Officer (Major Brance)",           franchise: "Star Wars", side: "Hero",    era: "Sequel",     source: "Collection", rarity: "Common",   currentValue: 2.67,  owned: true, qty: 1 },
    { id: "sw0001c", name: "Battle Droid (Tan)",                         franchise: "Star Wars", side: "Droid",   era: "Prequel",    source: "Collection", rarity: "Common",   currentValue: 1.49,  owned: true, qty: 3 },
    { id: "sw1321", name: "Super Battle Droid",                          franchise: "Star Wars", side: "Droid",   era: "Clone Wars", source: "Collection", rarity: "Common",   currentValue: 1.43,  owned: true, qty: 1 },

    // ============================================================
    // HARRY POTTER
    // ============================================================
    { id: "colhp14", name: "Alastor 'Mad-Eye' Moody", franchise: "Harry Potter", side: "Wizard",      era: "Wizarding World", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 9.97, owned: true, qty: 1, notes: "Harry Potter CMF Series 1" },
    { id: "colhp09", name: "Lord Voldemort",          franchise: "Harry Potter", side: "Dark Wizard", era: "Wizarding World", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 7.40, owned: true, qty: 1, notes: "Harry Potter CMF Series 1" },

    // ============================================================
    // LORD OF THE RINGS
    // ============================================================
    { id: "lor072", name: "Gríma Wormtongue",       franchise: "Lord of the Rings", side: "Dark Wizard", era: "Middle-earth", source: "10237", sourceSetName: "The Tower of Orthanc", year: 2013, rarity: "Ultra-Rare", currentValue: 210.18, owned: true, qty: 1, notes: "Tower of Orthanc exclusive" },
    { id: "lor074", name: "Saruman (Long Robes)",   franchise: "Lord of the Rings", side: "Dark Wizard", era: "Middle-earth", source: "10237", sourceSetName: "The Tower of Orthanc", year: 2013, rarity: "Ultra-Rare", currentValue: 124.60, owned: true, qty: 1, notes: "Tower of Orthanc exclusive" },
    { id: "lor103",  name: "Galadriel",             franchise: "Lord of the Rings", side: "Wizard",      era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Ultra-Rare", currentValue: 63.69, owned: true, qty: 1, notes: "Lady of Lothlórien (10316 Rivendell)" },
    { id: "lor104",  name: "Witch-king of Angmar",  franchise: "Lord of the Rings", side: "Dark Wizard", era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 38.69, owned: true, qty: 1, notes: "Lord of the Nazgûl" },
    { id: "lor105",  name: "Elrond",                franchise: "Lord of the Rings", side: "Wizard",      era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 34.28, owned: true, qty: 1, notes: "Half-Elven Lord (10316 Rivendell)" },

    // ============================================================
    // NINJAGO
    // ============================================================
    { id: "njo0186", name: "Kai (Rebooted, Stone Armor)", franchise: "Ninjago", side: "Hero", era: "Rebooted", source: "Collection", rarity: "Ultra-Rare", currentValue: 169.23, owned: true, qty: 1 },

    // ============================================================
    // MINECRAFT
    // ============================================================
    { id: "min034", name: "Minecraft Skin 1 (Yellow & Orange Armor)", franchise: "Minecraft", side: "Hero", era: "Minecraft", source: "Collection", rarity: "Common", currentValue: 4.26, owned: true, qty: 1 },
    { id: "min037", name: "Minecraft Skin 4 (Spacesuit)",             franchise: "Minecraft", side: "Hero", era: "Minecraft", source: "Collection", rarity: "Common", currentValue: 3.98, owned: true, qty: 1 },
    { id: "min035", name: "Minecraft Skin 2 (Flower & Suspenders)",   franchise: "Minecraft", side: "Hero", era: "Minecraft", source: "Collection", rarity: "Common", currentValue: 2.60, owned: true, qty: 1 },
    { id: "min036", name: "Minecraft Skin 3 (Vest & Jeans)",          franchise: "Minecraft", side: "Hero", era: "Minecraft", source: "Collection", rarity: "Common", currentValue: 2.52, owned: true, qty: 1 },

    // ============================================================
    // THE LEGO MOVIE
    // ============================================================
    { id: "tlm012", name: "Taco Tuesday Guy", franchise: "The LEGO Movie", side: "Hero", era: "The LEGO Movie", source: "Collection", rarity: "Common", currentValue: 5.58, owned: true, qty: 1, notes: "The LEGO Movie CMF" },
  ]
};
