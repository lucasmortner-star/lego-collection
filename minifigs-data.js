// ========================================
// LEGO Minifigs - Ortner's Collection
// Cabinet display, grouped by franchise
// ========================================
//
// IDs scanned via Brickify on Lucas's actual figs.
// Image URL: https://img.bricklink.com/ItemImage/MN/0/<id>.png
// Prices: Brickify (last update 2026-05-23).
//
// Schema:
//   id              - BrickLink minifig ID (lowercase) for image URL
//   name            - Display name
//   franchise       - "Star Wars" | "Harry Potter" | "Lord of the Rings"
//   side            - sub-category within franchise (Jedi/Sith/Wizard/etc),
//                     used for tie-breaking the sort within a section
//   era             - Optional flavor (Prequel/Original/Wizarding World/...)
//   source          - "BrickLink" or set number
//   year            - Year the minifig variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - Brickify price (USD)
//   owned           - true if we have it
//   qty             - How many copies we own

const MINIFIGS_DATA = {
  minifigs: [
    // ============================================================
    // STAR WARS
    // ============================================================
    { id: "sw1155", name: "Darth Maul (Clone Wars, printed legs)",     franchise: "Star Wars", side: "Sith",          era: "Clone Wars", source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 6.45,  owned: true, qty: 1, notes: "Printed legs with silver armor" },
    { id: "sw1106", name: "Darth Vader (Death Star Final Duel)",       franchise: "Star Wars", side: "Sith",          era: "Original",   source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 5.56,  owned: true, qty: 1, notes: "Printed arms, white smile head (75291 variant)" },
    { id: "sw1237", name: "Reva (Third Sister)",                       franchise: "Star Wars", side: "Inquisitor",    era: "Imperial",   source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 10.41, owned: true, qty: 1, notes: "From Obi-Wan Kenobi series (75336)" },
    { id: "sw1083", name: "Anakin Skywalker (Dirt Stains, Mustafar)",  franchise: "Star Wars", side: "Jedi",          era: "Prequel",    source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 7.93,  owned: true, qty: 1, notes: "Weathered Episode III look (75269)" },
    { id: "sw1398", name: "Anakin Skywalker (Clone Wars, General)",    franchise: "Star Wars", side: "Jedi",          era: "Clone Wars", source: "BrickLink", year: 2025, rarity: "Common",   currentValue: 6.06,  owned: true, qty: 1, notes: "Dark brown and black robe (75401)" },
    { id: "sw1255", name: "Obi-Wan Kenobi (Ep. II, hood)",             franchise: "Star Wars", side: "Jedi",          era: "Prequel",    source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 5.67,  owned: true, qty: 1, notes: "Reddish brown robe and hood" },
    { id: "sw1084", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)",          franchise: "Star Wars", side: "Jedi",          era: "Original",   source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 6.03,  owned: true, qty: 1, notes: "Light bluish grey hair, beard with white highlights" },
    { id: "sw1396", name: "Ahsoka Tano (Padawan, Clone Wars)",         franchise: "Star Wars", side: "Jedi",          era: "Clone Wars", source: "BrickLink", year: 2025, rarity: "Common",   currentValue: 8.08,  owned: true, qty: 2, notes: "Two copies — dark red backless vest (75401)" },
    { id: "sw1300", name: "Ahsoka Tano (older, Ahsoka show)",          franchise: "Star Wars", side: "Jedi",          era: "Mandalorian", source: "BrickLink", year: 2023, rarity: "Common",  currentValue: 5.00,  owned: true, qty: 1, notes: "Pearl dark grey robe, headtail stripes (75362)" },
    { id: "sw1414", name: "Plo Koon (printed legs)",                   franchise: "Star Wars", side: "Jedi",          era: "Clone Wars", source: "BrickLink", year: 2023, rarity: "Common",   currentValue: 6.85,  owned: true, qty: 1, notes: "Dark brown robe, tan shirt, printed legs" },
    { id: "sw1205", name: "Mace Windu",                                franchise: "Star Wars", side: "Jedi",          era: "Prequel",    source: "BrickLink", year: 2022, rarity: "Common",   currentValue: 6.12,  owned: true, qty: 1, notes: "Dark tan legs, open mouth, printed arms (75342)" },
    { id: "sw0911", name: "Ki-Adi-Mundi",                              franchise: "Star Wars", side: "Jedi",          era: "Prequel",    source: "BrickLink", year: 2018, rarity: "Uncommon", currentValue: 17.37, owned: true, qty: 1, notes: "Printed legs, nougat eye shadow (75206)" },
    { id: "sw0833", name: "Aayla Secura",                              franchise: "Star Wars", side: "Jedi",          era: "Clone Wars", source: "BrickLink", year: 2017, rarity: "Rare",     currentValue: 34.92, owned: true, qty: 1, notes: "Dark pink lips (75182)" },
    { id: "sw1166", name: "The Mandalorian (Din Djarin)",              franchise: "Star Wars", side: "Bounty Hunter", era: "Mandalorian", source: "BrickLink", year: 2021, rarity: "Common", currentValue: 4.28, owned: true, qty: 1, notes: "Silver beskar armor, jet pack, plain head" },
    { id: "sw1238", name: "C-3PO (Holiday/Christmas Edition)",         franchise: "Star Wars", side: "Droid",         era: "Original",   source: "BrickLink", year: 2022, rarity: "Common",   currentValue: 5.04,  owned: true, qty: 1, notes: "Festive holiday variant" },

    // ============================================================
    // HARRY POTTER
    // ============================================================
    { id: "colhp14", name: "Alastor 'Mad-Eye' Moody",                  franchise: "Harry Potter", side: "Wizard",      era: "Wizarding World", source: "BrickLink", year: 2020, rarity: "Common", currentValue: 9.97, owned: true, qty: 1, notes: "Harry Potter CMF Series 1" },
    { id: "colhp09", name: "Lord Voldemort",                           franchise: "Harry Potter", side: "Dark Wizard", era: "Wizarding World", source: "BrickLink", year: 2020, rarity: "Common", currentValue: 7.40, owned: true, qty: 1, notes: "Harry Potter CMF Series 1" },

    // ============================================================
    // LORD OF THE RINGS
    // ============================================================
    { id: "lor103",  name: "Galadriel",                                franchise: "Lord of the Rings", side: "Wizard",      era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Ultra-Rare", currentValue: 63.69, owned: true, qty: 1, notes: "Lady of Lothlórien — from 10316 Rivendell" },
    { id: "lor104",  name: "Witch-king of Angmar",                     franchise: "Lord of the Rings", side: "Dark Wizard", era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 38.69, owned: true, qty: 1, notes: "Lord of the Nazgûl" },
    { id: "lor105",  name: "Elrond",                                   franchise: "Lord of the Rings", side: "Wizard",      era: "Middle-earth", source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 34.28, owned: true, qty: 1, notes: "Half-Elven Lord — from 10316 Rivendell" },
  ]
};
