// ========================================
// LEGO Minifigs - Ortner's Collection
// Star Wars Force-Users displayed in the minifig cabinet
// ========================================
//
// All BrickLink IDs scanned via Brickify on Lucas's actual figs.
// Image URL: https://img.bricklink.com/ItemImage/MN/0/<id>.png
// Prices: BrickLink "Used Avg" pulled from catalogPG.asp on 2026-05-17.
//
// Note: This collection is the SEPARATE minifig display only — figs
// that came with built sets (Yoda from 75168, Grievous from 75040,
// etc.) live with their sets, not here. Only loose figs Lucas keeps
// in the cabinet are listed.
//
// Schema:
//   id              - BrickLink minifig ID, used for image URL
//   name            - Display name
//   side            - "Jedi" | "Sith" | "Inquisitor" | "Other Dark"
//                   | "Bounty Hunter" | "Alien"
//   era             - "Prequel" | "Clone Wars" | "Original" | "Sequel"
//                   | "Rebels" | "Mandalorian" | "Imperial"
//   source          - "BrickLink" or set number
//   sourceSetName   - Optional: name of source set
//   year            - Year the minifig variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - BrickLink "Used Avg" price (USD)
//   owned           - true if we have it, false if it's a "want"
//   qty             - How many copies we own

const MINIFIGS_DATA = {
  minifigs: [
    // ============================================================
    // SITH (owned)
    // ============================================================
    { id: "sw1155", name: "Darth Maul (Clone Wars, printed legs)", side: "Sith", era: "Clone Wars", source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 6,  owned: true, qty: 1, notes: "Printed legs with silver armor" },
    { id: "sw1106", name: "Darth Vader (Death Star Final Duel)",    side: "Sith", era: "Original",   source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 13, owned: true, qty: 1, notes: "Printed arms, white smile head (75291 variant)" },

    // ============================================================
    // INQUISITORS (owned)
    // ============================================================
    { id: "sw1237", name: "Reva (Third Sister)",                    side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 10, owned: true, qty: 1, notes: "From the Obi-Wan Kenobi series (75336)" },

    // ============================================================
    // JEDI (owned)
    // ============================================================
    { id: "sw1083", name: "Anakin Skywalker (Dirt Stains, Mustafar)", side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2020, rarity: "Rare",     currentValue: 19, owned: true, qty: 1, notes: "Weathered Episode III look (originally 75269)" },
    { id: "sw1398", name: "Anakin Skywalker (Clone Wars, General)",   side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2025, rarity: "Uncommon", currentValue: 9,  owned: true, qty: 1, notes: "Dark brown and black robe (originally 75401)" },
    { id: "sw1255", name: "Obi-Wan Kenobi (Ep. II, hood)",            side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 5,  owned: true, qty: 1, notes: "Reddish brown robe and hood" },
    { id: "sw1084", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)",         side: "Jedi", era: "Original",    source: "BrickLink", year: 2020, rarity: "Common",   currentValue: 4,  owned: true, qty: 1, notes: "Light bluish grey hair, beard with white highlights" },
    { id: "sw1396", name: "Ahsoka Tano (Padawan, Clone Wars)",        side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2025, rarity: "Uncommon", currentValue: 8,  owned: true, qty: 2, notes: "Two copies — dark red backless vest (originally 75401)" },
    { id: "sw1300", name: "Ahsoka Tano (older, Ahsoka show)",         side: "Jedi", era: "Mandalorian", source: "BrickLink", year: 2023, rarity: "Common",   currentValue: 6,  owned: true, qty: 1, notes: "Pearl dark grey robe, headtail stripes (originally 75362)" },
    { id: "sw1414", name: "Plo Koon (printed legs)",                  side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2023, rarity: "Uncommon", currentValue: 7,  owned: true, qty: 1, notes: "Dark brown robe, tan shirt, printed legs — newer variant" },
    { id: "sw1205", name: "Mace Windu",                               side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2022, rarity: "Common",   currentValue: 6,  owned: true, qty: 1, notes: "Dark tan legs, open mouth, printed arms (originally 75342)" },
    { id: "sw0911", name: "Ki-Adi-Mundi",                             side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2018, rarity: "Uncommon", currentValue: 13, owned: true, qty: 1, notes: "Printed legs, nougat eye shadow (originally 75206)" },
    { id: "sw0833", name: "Aayla Secura",                             side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2017, rarity: "Rare",     currentValue: 22, owned: true, qty: 1, notes: "Dark pink lips (originally 75182)" },

    // ============================================================
    // MANDALORIANS / BOUNTY HUNTERS (owned)
    // ============================================================
    { id: "sw1166", name: "The Mandalorian (Din Djarin)",             side: "Bounty Hunter", era: "Mandalorian", source: "BrickLink", year: 2021, rarity: "Common", currentValue: 5, owned: true, qty: 1, notes: "Silver beskar armor, jet pack, plain head" },

    // ============================================================
    // FORCE-USERS we still need to order (owned: false)
    // ============================================================
    { id: "sw0472", name: "Count Dooku",        side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Uncommon", currentValue: 20, owned: false, qty: 0, notes: "White combed hair, reddish brown cape" },
    { id: "",       name: "Asajj Ventress",     side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Rare",     currentValue: 50, owned: false, qty: 0, notes: "Dual curved red sabers (est.)" },
    { id: "",       name: "Savage Opress",      side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2015, rarity: "Rare",     currentValue: 60, owned: false, qty: 0, notes: "Maul's brother (est.)" },
    { id: "sw0422", name: "Kit Fisto",          side: "Jedi",       era: "Prequel",    source: "BrickLink", year: 2012, rarity: "Rare",     currentValue: 50, owned: false, qty: 0, notes: "Nautolan green-skin Jedi (originally 9526)" },
    { id: "",       name: "Shaak Ti",           side: "Jedi",       era: "Prequel",    source: "BrickLink", year: 2012, rarity: "Rare",     currentValue: 60, owned: false, qty: 0, notes: "Togruta Jedi Master (est.)" },
    { id: "",       name: "Luminara Unduli",    side: "Jedi",       era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Rare",     currentValue: 45, owned: false, qty: 0, notes: "Mirialan Jedi (est.)" },
    { id: "",       name: "Kanan Jarrus",       side: "Jedi",       era: "Rebels",     source: "BrickLink", year: 2016, rarity: "Uncommon", currentValue: 25, owned: false, qty: 0, notes: "From Rebels series (est.)" },
    { id: "",       name: "Cal Kestis",         side: "Jedi",       era: "Imperial",   source: "BrickLink", year: 2023, rarity: "Uncommon", currentValue: 22, owned: false, qty: 0, notes: "Jedi: Survivor / Fallen Order (est.)" },
    { id: "",       name: "Second Sister",      side: "Inquisitor", era: "Imperial",   source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 25, owned: false, qty: 0, notes: "Jedi: Fallen Order (est.)" },
    { id: "",       name: "Seventh Sister",     side: "Inquisitor", era: "Rebels",     source: "BrickLink", year: 2016, rarity: "Rare",     currentValue: 50, owned: false, qty: 0, notes: "Rebels series (est.)" },
  ]
};
