// ========================================
// LEGO Minifigs - Ortner's Collection
// Star Wars Force-Users (Jedi, Sith, Inquisitors)
// ========================================
//
// Schema:
//   id              - BrickLink minifig ID (e.g. "sw0552"); also used for image URL
//   name            - Display name
//   side            - "Jedi" | "Sith" | "Inquisitor" | "Other Dark" | "Other"
//   era             - "Prequel" | "Clone Wars" | "Original" | "Sequel" | "Rebels" | "Mandalorian" | "Imperial"
//   source          - Set number (e.g. "75291") or "BrickLink" (purchased loose)
//   sourceSetName   - Optional: name of source set, for display
//   year            - Year minifig variant was released
//   rarity          - "Common" | "Uncommon" | "Rare" | "Ultra-Rare"
//   currentValue    - Approximate BrickLink "Used Avg" price (USD)
//   owned           - true if we have it, false if it's a "want"
//   qty             - How many copies we own
//   image           - Optional override image URL; otherwise auto-derived from id
//   notes           - Optional flavor / clarification

const MINIFIGS_DATA = {
  minifigs: [
    // ===== SITH =====
    { id: "sw0399", name: "Darth Maul", side: "Sith", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Uncommon", currentValue: 40, owned: true, qty: 1, notes: "Dual-bladed red saber" },
    { id: "sw1228", name: "Darth Vader (Two-Piece Helmet)", side: "Sith", era: "Original", source: "BrickLink", year: 2020, rarity: "Rare", currentValue: 70, owned: true, qty: 1, notes: "Premium variant with detachable helmet" },
    { id: "sw0552", name: "Anakin Skywalker (Sith Eyes, Ep. III)", side: "Sith", era: "Prequel", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 55, owned: true, qty: 1, notes: "Yellow Sith eyes, the fallen Anakin" },
    { id: "sw1228b", name: "Darth Vader (standard)", side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 25, owned: true, qty: 1 },
    { id: "sw0466", name: "Darth Vader (Holiday/Advent)", side: "Sith", era: "Original", source: "Advent Calendar", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "Christmas/holiday variant from a LEGO advent calendar" },
    { id: "sw1085", name: "Emperor Palpatine", side: "Sith", era: "Original", source: "75291", sourceSetName: "Death Star Final Duel", year: 2020, rarity: "Common", currentValue: 22, owned: true, qty: 1 },
    { id: "sw1093", name: "Kylo Ren", side: "Sith", era: "Sequel", source: "75139", sourceSetName: "Battle on Takodana", year: 2016, rarity: "Common", currentValue: 18, owned: true, qty: 1 },

    // ===== INQUISITORS =====
    { id: "sw1410", name: "Reva (Third Sister)", side: "Inquisitor", era: "Imperial", source: "BrickLink", year: 2022, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1, notes: "From the Obi-Wan Kenobi series" },
    { id: "sw1098", name: "Grand Inquisitor (Helmet)", side: "Inquisitor", era: "Rebels", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 35, owned: true, qty: 1, notes: "Helmet variant" },

    // ===== OTHER DARK SIDE =====
    { id: "sw0613", name: "General Grievous (minifig)", side: "Other Dark", era: "Clone Wars", source: "75040", sourceSetName: "General Grievous' Wheel Bike", year: 2014, rarity: "Uncommon", currentValue: 30, owned: true, qty: 1 },

    // ===== JEDI - From Sets =====
    { id: "sw0902", name: "Yoda", side: "Jedi", era: "Prequel", source: "75168", sourceSetName: "Yoda's Jedi Starfighter", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw1136", name: "Qui-Gon Jinn", side: "Jedi", era: "Prequel", source: "75169", sourceSetName: "Duel on Naboo", year: 2017, rarity: "Common", currentValue: 22, owned: true, qty: 1, notes: "From the Duel on Naboo set — Maul from this set is lost" },
    { id: "sw0488", name: "Anakin Skywalker (Padawan, Ep. II)", side: "Jedi", era: "Prequel", source: "75092", sourceSetName: "Naboo Starfighter", year: 2015, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0533", name: "Anakin Skywalker (kid, Tatooine)", side: "Jedi", era: "Prequel", source: "75258", sourceSetName: "Anakin's Podracer", year: 2019, rarity: "Common", currentValue: 10, owned: true, qty: 1, notes: "Young Anakin Pod-racer kid" },
    { id: "sw0974", name: "Obi-Wan Kenobi (Padawan, Ep. II)", side: "Jedi", era: "Prequel", source: "75169", sourceSetName: "Duel on Naboo", year: 2017, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0395", name: "Luke Skywalker (Jedi Knight, Ep. VI)", side: "Jedi", era: "Original", source: "9516", sourceSetName: "Jabba's Palace", year: 2012, rarity: "Common", currentValue: 20, owned: true, qty: 1, notes: "Black tunic Jedi Knight" },
    { id: "sw0335", name: "Luke Skywalker (Tatooine farmer)", side: "Jedi", era: "Original", source: "75173", sourceSetName: "Luke's Landspeeder", year: 2017, rarity: "Common", currentValue: 14, owned: true, qty: 1 },
    { id: "sw1306", name: "Luke Skywalker (Ep. VI, blonde variant)", side: "Jedi", era: "Original", source: "75407", sourceSetName: "Brick-Built Star Wars Logo", year: 2025, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1, notes: "Blonde hair variant" },

    // ===== JEDI - BrickLink purchases (bottom row) =====
    { id: "sw1255", name: "Ahsoka Tano (Padawan, Clone Wars)", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 60, owned: true, qty: 2, notes: "Two copies — orange dress, dual sabers" },
    { id: "sw1290", name: "Ahsoka Tano (older, Rebels/Mandalore)", side: "Jedi", era: "Mandalorian", source: "BrickLink", year: 2022, rarity: "Rare", currentValue: 50, owned: true, qty: 1, notes: "White outfit, headtail stripes" },
    { id: "sw0966", name: "Obi-Wan Kenobi (Ep. II, with hood)", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2019, rarity: "Uncommon", currentValue: 22, owned: true, qty: 1 },
    { id: "sw1192", name: "Obi-Wan Kenobi (Jedi Master, brown robes)", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2020, rarity: "Uncommon", currentValue: 28, owned: true, qty: 1, notes: "Mature Obi-Wan with beard" },
    { id: "sw0274", name: "Obi-Wan Kenobi (Old Ben, Ep. IV)", side: "Jedi", era: "Original", source: "BrickLink", year: 2014, rarity: "Common", currentValue: 18, owned: true, qty: 1 },
    { id: "sw0539", name: "Plo Koon", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2014, rarity: "Rare", currentValue: 65, owned: true, qty: 1, notes: "Kel Dor Jedi Master" },
    { id: "sw0479", name: "Mace Windu", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2013, rarity: "Ultra-Rare", currentValue: 110, owned: true, qty: 1, notes: "Purple lightsaber — high aftermarket value" },
    { id: "sw0420", name: "Ki-Adi-Mundi", side: "Jedi", era: "Prequel", source: "BrickLink", year: 2012, rarity: "Ultra-Rare", currentValue: 130, owned: true, qty: 1, notes: "Tall conical head, white hair — very rare" },
    { id: "sw0297", name: "Aayla Secura", side: "Jedi", era: "Clone Wars", source: "BrickLink", year: 2010, rarity: "Ultra-Rare", currentValue: 160, owned: true, qty: 1, notes: "Blue Twi'lek Jedi — only ever in 8098 Clone Turbo Tank, hard to find" },
  ]
};
