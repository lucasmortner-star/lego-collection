// ========================================
// LEGO Minifigs - Ortner's Collection
// Star Wars: Force-users + main characters
// ========================================
//
// All BrickLink IDs below were verified via the official BrickLink set
// inventories. Image URLs resolve to:
//   https://img.bricklink.com/ItemImage/MN/0/<id>.png
//
// Schema:
//   id              - BrickLink minifig ID, used for image URL (optional)
//   name            - Display name
//   side            - "Jedi" | "Sith" | "Inquisitor" | "Other Dark"
//                   | "Bounty Hunter" | "Alien"
//   era             - "Prequel" | "Clone Wars" | "Original" | "Sequel"
//                   | "Rebels" | "Mandalorian" | "Imperial"
//   source          - Set number (e.g. "75291") or "BrickLink"
//   sourceSetName   - Optional: name of source set, for display
//   year            - Year the minifig variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - Approximate BrickLink "Used Avg" price (USD)
//   owned           - true if we have it, false if it's a "want"
//   qty             - How many copies we own
//   notes           - Optional flavor / clarification

const MINIFIGS_DATA = {
  minifigs: [
    // ============================================================
    // SITH (owned)
    // ============================================================
    { id: "sw0323", name: "Darth Maul (loose)",                  side: "Sith", era: "Prequel",  source: "BrickLink", year: 2011, rarity: "Uncommon", currentValue: 40, owned: true, qty: 1, notes: "Horns + cape, dual-bladed red saber" },
    { id: "sw1112", name: "Darth Vader (Two-Piece Helmet)",      side: "Sith", era: "Original", source: "BrickLink", year: 2020, rarity: "Rare",     currentValue: 70, owned: true, qty: 1, notes: "Premium variant with detachable helmet (from 75296)" },
    { id: "sw0419", name: "Anakin Skywalker (Sith Eyes, Ep. III)", side: "Sith", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Rare",     currentValue: 55, owned: true, qty: 1, notes: "Sith face + cape, the fallen Anakin (originally from 9526)" },
    { id: "sw1106", name: "Darth Vader (Death Star Final Duel)", side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 25, owned: true, qty: 1, notes: "Printed arms, white smile head" },
    { id: "",       name: "Darth Vader (Holiday/Advent)",        side: "Sith", era: "Original", source: "Advent Calendar", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Christmas/holiday Advent calendar variant" },
    { id: "sw1107", name: "Emperor Palpatine",                   side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 22, owned: true, qty: 1 },
    { id: "sw0717", name: "Kylo Ren",                            side: "Sith", era: "Sequel",   source: "75139", sourceSetName: "Battle on Takodana",    year: 2016, rarity: "Common", currentValue: 18, owned: true, qty: 1 },

    // ============================================================
    // INQUISITORS (owned)
    // ============================================================
    { id: "sw1237", name: "Reva (Third Sister)",                 side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "From the Obi-Wan Kenobi series (originally 75336)" },
    { id: "sw1222", name: "Grand Inquisitor",                    side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 35, owned: true, qty: 1, notes: "Black uniform variant (originally 75336)" },

    // ============================================================
    // OTHER DARK (owned)
    // ============================================================
    { id: "sw0515", name: "General Grievous",                    side: "Other Dark", era: "Clone Wars", source: "75040", sourceSetName: "General Grievous' Wheel Bike", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Bent legs, white armor" },

    // ============================================================
    // JEDI (owned — from sets)
    // ============================================================
    { id: "sw0707", name: "Yoda",                                side: "Jedi", era: "Prequel",   source: "75168", sourceSetName: "Yoda's Jedi Starfighter", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Olive green, open robe" },
    { id: "sw0810", name: "Qui-Gon Jinn",                        side: "Jedi", era: "Prequel",   source: "75169", sourceSetName: "Duel on Naboo",         year: 2017, rarity: "Common", currentValue: 22, owned: true, qty: 1, notes: "Maul from this set was lost" },
    { id: "sw0812", name: "Obi-Wan Kenobi (Padawan, Ep. I)",     side: "Jedi", era: "Prequel",   source: "75169", sourceSetName: "Duel on Naboo",         year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Young, printed legs, no cape" },
    { id: "sw0640", name: "Anakin Skywalker (Padawan, Ep. II)",  side: "Jedi", era: "Prequel",   source: "75092", sourceSetName: "Naboo Starfighter",     year: 2015, rarity: "Common", currentValue: 18, owned: true, qty: 1, notes: "Short legs, tousled hair" },
    { id: "sw1001", name: "Anakin Skywalker (kid, Tatooine)",    side: "Jedi", era: "Prequel",   source: "75258", sourceSetName: "Anakin's Podracer",     year: 2019, rarity: "Common", currentValue: 12, owned: true, qty: 1, notes: "Reddish brown aviator cap" },
    { id: "sw0433", name: "Luke Skywalker (Jedi Knight, Ep. VI)", side: "Jedi", era: "Original", source: "75005", sourceSetName: "Rancor Pit",            year: 2013, rarity: "Uncommon", currentValue: 25, owned: true, qty: 1, notes: "Dark grey Jedi robe" },
    { id: "sw0778", name: "Luke Skywalker (Tatooine farmer)",    side: "Jedi", era: "Original",  source: "75173", sourceSetName: "Luke's Landspeeder",    year: 2017, rarity: "Common", currentValue: 14, owned: true, qty: 1, notes: "White legs, stern/smile face" },
    { id: "",       name: "Luke Skywalker (Ep. VI, blonde)",     side: "Jedi", era: "Original",  source: "75407", sourceSetName: "Brick-Built Star Wars Logo", year: 2025, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Blonde hair variant — image ID pending" },
    { id: "sw0635", name: "Luke Skywalker (Jedi Master)",        side: "Jedi", era: "Original",  source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Uncommon", currentValue: 25, owned: true, qty: 1, notes: "Dark tan smooth hair" },

    // ============================================================
    // JEDI (owned — BrickLink purchases, bottom-row collection)
    // ============================================================
    { id: "sw1396", name: "Ahsoka Tano (Padawan, Clone Wars)",   side: "Jedi", era: "Clone Wars",  source: "75401", sourceSetName: "Ahsoka's Jedi Interceptor", year: 2025, rarity: "Rare", currentValue: 35, owned: true, qty: 2, notes: "Two copies — dark red backless vest with necklace and belt" },
    { id: "sw1398", name: "Anakin Skywalker (Clone Wars, General)", side: "Jedi", era: "Clone Wars", source: "75401", sourceSetName: "Ahsoka's Jedi Interceptor", year: 2025, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Dark brown and black robe, black hands" },
    { id: "sw1300", name: "Ahsoka Tano (older, Ahsoka show)",    side: "Jedi", era: "Mandalorian", source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 55, owned: true, qty: 1, notes: "Pearl dark grey robe, headtail stripes (originally 75362)" },
    { id: "",       name: "Obi-Wan Kenobi (Ep. II, hood)",       side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2019, rarity: "Uncommon",   currentValue: 22, owned: true, qty: 1, notes: "Image ID pending" },
    { id: "sw1220", name: "Obi-Wan Kenobi (Jedi Master, brown robes)", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Mature Obi-Wan, reddish-brown robe (originally 75333)" },
    { id: "sw0552", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)",    side: "Jedi", era: "Original",    source: "BrickLink", year: 2017, rarity: "Common",     currentValue: 18, owned: true, qty: 1, notes: "Dark brown hooded coat (also in 75173)" },
    { id: "",       name: "Plo Koon",                            side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2016, rarity: "Rare",       currentValue: 65, owned: true, qty: 1, notes: "Kel Dor Jedi Master — image pending, newer print" },
    { id: "sw1165", name: "Mace Windu",                          side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2021, rarity: "Ultra-Rare", currentValue: 110, owned: true, qty: 1, notes: "Dark tan legs, open mouth — from 75309 Republic Gunship UCS" },
    { id: "sw0911", name: "Ki-Adi-Mundi",                        side: "Jedi", era: "Prequel",     source: "BrickLink", year: 2018, rarity: "Ultra-Rare", currentValue: 130, owned: true, qty: 1, notes: "Printed legs, nougat eye shadow — from 75206 Jedi Battle Pack" },
    { id: "sw0833", name: "Aayla Secura",                        side: "Jedi", era: "Clone Wars",  source: "BrickLink", year: 2017, rarity: "Ultra-Rare", currentValue: 160, owned: true, qty: 1, notes: "Dark pink lips — from 75182 Republic Fighter Tank (newer print)" },

    // ============================================================
    // MANDALORIANS / BOUNTY HUNTERS (owned — main characters)
    // ============================================================
    { id: "sw1212", name: "The Mandalorian (Din Djarin)",        side: "Bounty Hunter", era: "Mandalorian", source: "75325", sourceSetName: "The Mandalorian's N-1 Starfighter", year: 2022, rarity: "Common", currentValue: 24, owned: true, qty: 1, notes: "Silver beskar armor, jet pack" },
    { id: "sw1113", name: "Grogu (The Child)",                   side: "Alien",         era: "Mandalorian", source: "75325", sourceSetName: "The Mandalorian's N-1 Starfighter", year: 2022, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "",       name: "Jango Fett",                          side: "Bounty Hunter", era: "Prequel",     source: "75409", sourceSetName: "Jango Fett's Firespray (UCS)", year: 2025, rarity: "Uncommon", currentValue: 32, owned: true, qty: 2, notes: "Two copies — also from 75433. Image ID pending (set is new)" },
    { id: "",       name: "Young Boba Fett",                     side: "Bounty Hunter", era: "Prequel",     source: "75409", sourceSetName: "Jango Fett's Firespray (UCS)", year: 2025, rarity: "Uncommon", currentValue: 28, owned: true, qty: 2, notes: "Two copies — also from 75433. Image ID pending" },

    // ============================================================
    // FORCE-USERS we still need to order (owned: false)
    // ============================================================
    { id: "sw0472", name: "Count Dooku",        side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Rare",       currentValue: 70,  owned: false, qty: 0, notes: "White combed hair, reddish brown cape" },
    { id: "",       name: "Asajj Ventress",     side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Dual curved red sabers" },
    { id: "",       name: "Savage Opress",      side: "Sith",       era: "Clone Wars", source: "BrickLink", year: 2015, rarity: "Ultra-Rare", currentValue: 150, owned: false, qty: 0, notes: "Maul's brother" },
    { id: "sw0422", name: "Kit Fisto",          side: "Jedi",       era: "Prequel",    source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 150, owned: false, qty: 0, notes: "Nautolan green-skin Jedi (originally 9526)" },
    { id: "",       name: "Shaak Ti",           side: "Jedi",       era: "Prequel",    source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Togruta Jedi Master" },
    { id: "",       name: "Luminara Unduli",    side: "Jedi",       era: "Clone Wars", source: "BrickLink", year: 2013, rarity: "Ultra-Rare", currentValue: 130, owned: false, qty: 0, notes: "Mirialan Jedi" },
    { id: "",       name: "Kanan Jarrus",       side: "Jedi",       era: "Rebels",     source: "BrickLink", year: 2016, rarity: "Rare",       currentValue: 65,  owned: false, qty: 0, notes: "From Rebels series" },
    { id: "",       name: "Cal Kestis",         side: "Jedi",       era: "Imperial",   source: "BrickLink", year: 2023, rarity: "Rare",       currentValue: 60,  owned: false, qty: 0, notes: "Jedi: Survivor / Fallen Order" },
    { id: "",       name: "Second Sister",      side: "Inquisitor", era: "Imperial",   source: "BrickLink", year: 2020, rarity: "Rare",       currentValue: 60,  owned: false, qty: 0, notes: "Jedi: Fallen Order" },
    { id: "",       name: "Seventh Sister",     side: "Inquisitor", era: "Rebels",     source: "BrickLink", year: 2016, rarity: "Ultra-Rare", currentValue: 140, owned: false, qty: 0, notes: "Rebels series, very hard to find" },
  ]
};
