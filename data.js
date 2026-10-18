const LEGO_DATA = {
  sets: [
    // ========================================
    // STAR WARS
    // ========================================
    { num: 1, setNumber: "75192", name: "Millennium Falcon (UCS)", theme: "Star Wars", category: "STAR WARS", year: 2017, pieces: 7541, retail: 849.99, condition: "Built/Displayed", currentValue: 519, growth: 0.10 },
    { num: 2, setNumber: "75159", name: "Death Star", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 4016, retail: 499.99, condition: "Built/Displayed", currentValue: 593, growth: 0.02 },
    { num: 3, setNumber: "75292", name: "The Razor Crest", theme: "Star Wars", category: "STAR WARS", year: 2020, pieces: 999, retail: 129.99, condition: "Built/Displayed", currentValue: 86, growth: 0.0 },
    { num: 4, setNumber: "75409", name: "Jango Fett's Firespray-Class Starship (UCS)", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 2970, retail: 299.99, condition: "Built/Displayed", currentValue: 229, growth: 0.12 },
    { num: 5, setNumber: "75290", name: "Mos Eisley Cantina", theme: "Star Wars", category: "STAR WARS", year: 2020, pieces: 3187, retail: 349.99, condition: "Built/Displayed", currentValue: 323, growth: 0.03 },
    { num: 6, setNumber: "10236", name: "Ewok Village", theme: "Star Wars", category: "STAR WARS", year: 2013, pieces: 1990, retail: 249.99, condition: "Built/Displayed", currentValue: 509, growth: 0.06 },
    { num: 7, setNumber: "75054", name: "AT-AT", theme: "Star Wars", category: "STAR WARS", year: 2014, pieces: 1137, retail: 109.99, condition: "Built/Displayed", currentValue: 124, growth: 0.01 },
    { num: 8, setNumber: "75308", name: "R2-D2", theme: "Star Wars", category: "STAR WARS", year: 2021, pieces: 2314, retail: 239.99, condition: "Built/Displayed", currentValue: 90, growth: 0.08 },
    { num: 9, setNumber: "75398", name: "C-3PO", theme: "Star Wars", category: "STAR WARS", year: 2024, pieces: 1138, retail: 139.99, condition: "Built/Displayed", currentValue: 76, growth: 0.06 },
    { num: 10, setNumber: "75112", name: "General Grievous (Buildable Figure)", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 186, retail: 34.99, condition: "Built/Displayed", currentValue: 61, growth: 0.05 },
    { num: 11, setNumber: "75434", name: "K-2SO (Buildable Figure)", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 540, retail: 49.99, condition: "Built/Displayed", currentValue: 63, growth: 0.26 },
    { num: 12, setNumber: "75439", name: "Darth Vader Bust", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 343, retail: 39.99, condition: "Built/Displayed", currentValue: 31, growth: 0.0 },
    { num: 13, setNumber: "75461", name: "Up-Scaled Darth Vader Minifigure", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 1028, retail: 99.99, condition: "Built/Displayed", currentValue: 100, growth: 0.0 },
    { num: 14, setNumber: "75453", name: "Offworld Sandcrawler and Mudhorn", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 1660, retail: 169.99, condition: "Built/Displayed", currentValue: 170, growth: 0.0 },
    { num: 15, setNumber: "75459", name: "Imperial Lambda-Class Shuttle", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 939, retail: 99.99, condition: "Built/Displayed", currentValue: 80, growth: 0.0 },
    { num: 16, setNumber: "75444", name: "AT-RT Attack", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 286, retail: 29.99, condition: "Built/Displayed", currentValue: 31, growth: 0.03 },
    { num: 17, setNumber: "75445", name: "Anzellan Starship", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 697, retail: 69.99, condition: "Built/Displayed", currentValue: 32, growth: 0.0 },
    { num: 18, setNumber: "75273", name: "Poe Dameron's X-Wing Fighter", theme: "Star Wars", category: "STAR WARS", year: 2020, pieces: 744, retail: 99.99, condition: "Built/Displayed", currentValue: 52, growth: 0.0 },
    { num: 19, setNumber: "75430", name: "Wicket the Ewok", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 1007, retail: 79.99, condition: "Built/Displayed", currentValue: 70, growth: 0.0 },
    { num: 20, setNumber: "75403", name: "Grogu with Hover Pram", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 1046, retail: 99.99, condition: "Built/Displayed", currentValue: 41, growth: 0.0 },
    { num: 21, setNumber: "75020", name: "Jabba's Sail Barge", theme: "Star Wars", category: "STAR WARS", year: 2013, pieces: 850, retail: 119.99, condition: "Built/Displayed", currentValue: 212, growth: 0.04 },
    { num: 22, setNumber: "9516", name: "Jabba's Palace", theme: "Star Wars", category: "STAR WARS", year: 2012, pieces: 717, retail: 119.99, condition: "Built/Displayed", currentValue: 233, growth: 0.05 },
    { num: 23, setNumber: "75005", name: "Rancor Pit", theme: "Star Wars", category: "STAR WARS", year: 2013, pieces: 380, retail: 59.99, condition: "Built/Displayed", currentValue: 166, growth: 0.08 },
    { num: 24, setNumber: "75291", name: "Death Star Final Duel", theme: "Star Wars", category: "STAR WARS", year: 2020, pieces: 775, retail: 89.99, condition: "Built/Displayed", currentValue: 80, growth: 0.05 },
    { num: 25, setNumber: "75169", name: "Duel on Naboo", theme: "Star Wars", category: "STAR WARS", year: 2017, pieces: 208, retail: 24.99, condition: "Built/Displayed", currentValue: 36, growth: 0.04 },
    { num: 26, setNumber: "75137", name: "Carbon-Freezing Chamber", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 231, retail: 24.99, condition: "Built/Displayed", currentValue: 25, growth: 0.08 },
    { num: 27, setNumber: "75139", name: "Battle on Takodana", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 409, retail: 59.99, condition: "Built/Displayed", currentValue: 27, growth: 0.04 },
    { num: 28, setNumber: "75258", name: "Anakin's Podracer (20th Anniversary)", theme: "Star Wars", category: "STAR WARS", year: 2019, pieces: 279, retail: 29.99, condition: "Built/Displayed", currentValue: 33, growth: 0.01 },
    { num: 29, setNumber: "75325", name: "The Mandalorian's N-1 Starfighter", theme: "Star Wars", category: "STAR WARS", year: 2022, pieces: 412, retail: 59.99, condition: "Built/Displayed", currentValue: 27, growth: 0.05 },
    { num: 30, setNumber: "75149", name: "Resistance X-Wing Fighter", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 740, retail: 79.99, condition: "Built/Displayed", currentValue: 51, growth: 0.02 },
    { num: 31, setNumber: "75092", name: "Naboo Starfighter", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 442, retail: 49.99, condition: "Built/Displayed", currentValue: 74, growth: 0.04 },
    { num: 32, setNumber: "75155", name: "Rebel U-Wing Fighter", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 659, retail: 79.99, condition: "Built/Displayed", currentValue: 108, growth: 0.03 },
    { num: 33, setNumber: "75401", name: "Ahsoka's Jedi Interceptor", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 290, retail: 34.99, condition: "Built/Displayed", currentValue: 27, growth: 0.08 },
    { num: 34, setNumber: "75168", name: "Yoda's Jedi Starfighter", theme: "Star Wars", category: "STAR WARS", year: 2017, pieces: 262, retail: 29.99, condition: "Built/Displayed", currentValue: 16, growth: 0.02 },
    { num: 35, setNumber: "75433", name: "Jango Fett's Starship", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 414, retail: 49.99, condition: "Built/Displayed", currentValue: 36, growth: 0.08 },
    { num: 36, setNumber: "75173", name: "Luke's Landspeeder", theme: "Star Wars", category: "STAR WARS", year: 2017, pieces: 149, retail: 19.99, condition: "Built/Displayed", currentValue: 21, growth: 0.01 },
    { num: 37, setNumber: "75193", name: "Millennium Falcon Microfighter", theme: "Star Wars", category: "STAR WARS", year: 2018, pieces: 92, retail: 9.99, condition: "Built/Displayed", currentValue: 8, growth: 0.08 },
    { num: 38, setNumber: "75040", name: "General Grievous' Wheel Bike", theme: "Star Wars", category: "STAR WARS", year: 2014, pieces: 261, retail: 24.99, condition: "Built/Displayed", currentValue: 51, growth: 0.06 },
    { num: 39, setNumber: "75074", name: "Snowspeeder (Microfighter)", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 97, retail: 9.99, condition: "Built/Displayed", currentValue: 9, growth: 0.07 },
    { num: 40, setNumber: "75082", name: "TIE Advanced Prototype", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 355, retail: 39.99, condition: "Built/Displayed", currentValue: 55, growth: 0.03 },
    { num: 41, setNumber: "75099", name: "Rey's Speeder", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 193, retail: 19.99, condition: "Built/Displayed", currentValue: 14, growth: 0.05 },
    { num: 42, setNumber: "75437", name: "Cobb Vanth's Speeder", theme: "Star Wars", category: "STAR WARS", year: 2026, pieces: 207, retail: 34.99, condition: "Built/Displayed", currentValue: 10, growth: 0.0 },
    { num: 43, setNumber: "75136", name: "Droid Escape Pod", theme: "Star Wars", category: "STAR WARS", year: 2016, pieces: 197, retail: 24.99, condition: "Built/Displayed", currentValue: 21, growth: 0.06 },
    { num: 44, setNumber: "75003", name: "A-wing Starfighter", theme: "Star Wars", category: "STAR WARS", year: 2013, pieces: 177, retail: 24.99, condition: "Built/Displayed", currentValue: 28, growth: 0.01 },
    { num: 45, setNumber: "75091", name: "Flash Speeder", theme: "Star Wars", category: "STAR WARS", year: 2015, pieces: 312, retail: 29.99, condition: "Built/Displayed", currentValue: 43, growth: 0.03 },
    { num: 46, setNumber: "75238", name: "Action Battle Endor Assault", theme: "Star Wars", category: "STAR WARS", year: 2019, pieces: 193, retail: 29.99, condition: "Built/Displayed", currentValue: 13, growth: 0.0 },
    { num: 47, setNumber: "75407", name: "Brick-Built Star Wars Logo", theme: "Star Wars", category: "STAR WARS", year: 2025, pieces: 700, retail: 59.99, condition: "Built/Displayed", currentValue: 33, growth: 0.08 },

    // ========================================
    // LORD OF THE RINGS / THE HOBBIT
    // ========================================
    { num: 48, setNumber: "11377", name: "Minas Tirith", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2026, pieces: 8278, retail: 649.99, condition: "Built/Displayed", currentValue: 438, growth: 0.0 },
    { num: 49, setNumber: "40893", name: "Grond (Minas Tirith GWP)", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2026, pieces: 299, retail: 0, condition: "Built/Displayed", currentValue: 122, growth: 0.0 },
    { num: 50, setNumber: "10316", name: "Rivendell", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2023, pieces: 6167, retail: 499.99, condition: "Built/Displayed", currentValue: 403, growth: 0.10 },
    { num: 51, setNumber: "10333", name: "Barad-dûr", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2024, pieces: 5471, retail: 459.99, condition: "Built/Displayed", currentValue: 305, growth: 0.10 },
    { num: 52, setNumber: "10354", name: "The Shire", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2025, pieces: 2850, retail: 299.99, condition: "Built/Displayed", currentValue: 185, growth: 0.10 },
    { num: 53, setNumber: "10237", name: "The Tower of Orthanc", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 2359, retail: 199.99, condition: "Built/Displayed", currentValue: 866, growth: 0.12 },
    { num: 54, setNumber: "9474", name: "The Battle of Helm's Deep", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2012, pieces: 1368, retail: 129.99, condition: "Built/Displayed", currentValue: 410, growth: 0.09 },
    { num: 55, setNumber: "9471", name: "Uruk-hai Army", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2012, pieces: 257, retail: 29.99, condition: "Built/Displayed", currentValue: 153, growth: 0.12 },
    { num: 56, setNumber: "79003", name: "An Unexpected Gathering (Bag End)", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2012, pieces: 652, retail: 69.99, condition: "Built/Displayed", currentValue: 148, growth: 0.05 },
    { num: 57, setNumber: "79005", name: "The Wizard Battle (Copy 1)", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 364, retail: 12.99, condition: "Built/Displayed", currentValue: 56, growth: 0.12 },
    { num: 58, setNumber: "79005", name: "The Wizard Battle (Copy 2)", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 364, retail: 12.99, condition: "Built/Displayed", currentValue: 56, growth: 0.12 },
    { num: 59, setNumber: "79014", name: "Dol Guldur Battle", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 797, retail: 79.99, condition: "Built/Displayed", currentValue: 210, growth: 0.08 },
    { num: 60, setNumber: "79010", name: "The Goblin King Battle", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2012, pieces: 841, retail: 99.99, condition: "Built/Displayed", currentValue: 199, growth: 0.05 },
    { num: 61, setNumber: "79018", name: "The Lonely Mountain", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2014, pieces: 866, retail: 129.99, condition: "Built/Displayed", currentValue: 546, growth: 0.13 },
    { num: 62, setNumber: "79012", name: "Mirkwood Elf Army", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 276, retail: 29.99, condition: "Built/Displayed", currentValue: 138, growth: 0.12 },
    { num: 63, setNumber: "79015", name: "Witch-king Battle", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2014, pieces: 105, retail: 14.99, condition: "Built/Displayed", currentValue: 104, growth: 0.18 },
    { num: 64, setNumber: "79004", name: "Barrel Escape", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 334, retail: 39.99, condition: "Built/Displayed", currentValue: 130, growth: 0.09 },
    { num: 65, setNumber: "79016", name: "Attack on Lake-town", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2014, pieces: 313, retail: 29.99, condition: "Built/Displayed", currentValue: 82, growth: 0.09 },
    { num: 66, setNumber: "79013", name: "Lake-town Chase", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 470, retail: 59.99, condition: "Built/Displayed", currentValue: 145, growth: 0.07 },
    { num: 67, setNumber: "79002", name: "Attack of the Wargs", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 400, retail: 49.99, condition: "Built/Displayed", currentValue: 140, growth: 0.08 },
    { num: 68, setNumber: "79002-partial", name: "Mirkwood Tree (partial of Attack of the Wargs)", theme: "The Hobbit", category: "LORD OF THE RINGS / THE HOBBIT", year: 2013, pieces: 50, retail: 0, condition: "Built/Displayed", currentValue: 42, growth: 0.0 },
    { num: 69, setNumber: "11373", name: "Sauron's Helmet", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2026, pieces: 538, retail: 69.99, condition: "Built/Displayed", currentValue: 44, growth: 0.0 },
    { num: 70, setNumber: "10367", name: "The Lord of the Rings: Balrog Book Nook", theme: "Lord of the Rings", category: "LORD OF THE RINGS / THE HOBBIT", year: 2025, pieces: 1201, retail: 129.99, condition: "Built/Displayed", currentValue: 75, growth: 0.06 },

    // ========================================
    // HARRY POTTER
    // ========================================
    { num: 71, setNumber: "76417", name: "Gringotts Wizarding Bank - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 4803, retail: 429.99, condition: "Built/Displayed", currentValue: 422, growth: 0.0 },
    { num: 72, setNumber: "76457", name: "Hogsmeade Village - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 3228, retail: 399.99, condition: "Built/Displayed", currentValue: 300, growth: 0.08 },
    { num: 73, setNumber: "76453", name: "Malfoy Manor", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 1601, retail: 149.99, condition: "Built/Displayed", currentValue: 116, growth: 0.0 },
    { num: 74, setNumber: "76437", name: "The Burrow - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 2405, retail: 259.99, condition: "Built/Displayed", currentValue: 175, growth: 0.08 },
    { num: 75, setNumber: "76466", name: "Philosopher's Stone - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 1571, retail: 169.99, condition: "Built/Displayed", currentValue: 170, growth: 0.08 },
    { num: 76, setNumber: "76476", name: "The Ministry of Magic - Collectors' Edition", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 3430, retail: 299.99, condition: "Built/Displayed", currentValue: 300, growth: 0.0 },
    { num: 77, setNumber: "76471", name: "Knockturn Alley Wizarding Shops", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 756, retail: 59.99, condition: "Built/Displayed", currentValue: 60, growth: 0.0 },
    { num: 78, setNumber: "76452", name: "Quality Quidditch Supplies & Ice Cream Parlour", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 768, retail: 79.99, condition: "Built/Displayed", currentValue: 48, growth: 0.0 },
    { num: 79, setNumber: "76477", name: "Norbert", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 482, retail: 39.99, condition: "Built/Displayed", currentValue: 40, growth: 0.0 },
    { num: 80, setNumber: "76478", name: "Book Nook: Dumbledore's Office", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 1173, retail: 129.99, condition: "Building", currentValue: 130, growth: 0.0 },
    { num: 81, setNumber: "76469", name: "Dobby the Free Elf", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 379, retail: 29.99, condition: "Built/Displayed", currentValue: 15, growth: 0.0 },
    { num: 82, setNumber: "76462", name: "Hogwarts House Crest", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 545, retail: 59.99, condition: "Built/Displayed", currentValue: 39, growth: 0.0 },
    { num: 83, setNumber: "76459", name: "Hagrid & Harry's Privet Drive Escape", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 106, retail: 12.99, condition: "Built/Displayed", currentValue: 20, growth: 0.54 },
    { num: 84, setNumber: "75968", name: "4 Privet Drive", theme: "Harry Potter", category: "HARRY POTTER", year: 2020, pieces: 774, retail: 79.99, condition: "Built/Displayed", currentValue: 30, growth: 0.0 },
    { num: 85, setNumber: "76423", name: "Hogwarts Express & Hogsmeade Station", theme: "Harry Potter", category: "HARRY POTTER", year: 2023, pieces: 1074, retail: 129.99, condition: "Built/Displayed", currentValue: 68, growth: 0.0 },
    { num: 86, setNumber: "76473", name: "Hogwarts Castle: East Wing", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 2104, retail: 199.99, condition: "Building", currentValue: 200, growth: 0.0 },
    { num: 87, setNumber: "76454", name: "Hogwarts Castle: The Main Tower", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 2135, retail: 259.99, condition: "Built/Displayed", currentValue: 182, growth: 0.0 },
    { num: 88, setNumber: "76463", name: "Hogwarts Castle: Hospital Wing", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 907, retail: 99.99, condition: "Built/Displayed", currentValue: 74, growth: 0.0 },
    { num: 89, setNumber: "76460", name: "Hogwarts Castle: Sorting Hat Ceremony", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 124, retail: 14.99, condition: "Built/Displayed", currentValue: 6, growth: 0.0 },
    { num: 90, setNumber: "76464", name: "Cauldron: Secret Potions Classroom", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 652, retail: 59.99, condition: "Built/Displayed", currentValue: 35, growth: 0.0 },
    { num: 91, setNumber: "76435", name: "Hogwarts Castle: The Great Hall", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 1732, retail: 199.99, condition: "Built/Displayed", currentValue: 253, growth: 0.12 },
    { num: 92, setNumber: "76447", name: "Hogwarts Castle: Flying Lessons", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 651, retail: 79.99, condition: "Built/Displayed", currentValue: 36, growth: 0.0 },
    { num: 93, setNumber: "76445", name: "Hogwarts Castle: Herbology Class", theme: "Harry Potter", category: "HARRY POTTER", year: 2025, pieces: 651, retail: 79.99, condition: "Built/Displayed", currentValue: 36, growth: 0.0 },
    { num: 94, setNumber: "76426", name: "Hogwarts Castle: Boathouse", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 350, retail: 37.99, condition: "Built/Displayed", currentValue: 42, growth: 0.05 },
    { num: 95, setNumber: "76430", name: "Hogwarts Castle: Owlery (Copy 1)", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 364, retail: 39.99, condition: "Built/Displayed", currentValue: 36, growth: 0.06 },
    { num: 96, setNumber: "76430", name: "Hogwarts Castle: Owlery (Copy 2)", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 364, retail: 39.99, condition: "Sealed/New", currentValue: 36, growth: 0.06 },
    { num: 97, setNumber: "76428", name: "Hagrid's Hut: An Unexpected Visit", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 896, retail: 74.99, condition: "Built/Displayed", currentValue: 46, growth: 0.06 },
    { num: 98, setNumber: "76441", name: "Hogwarts Castle: Dueling Club", theme: "Harry Potter", category: "HARRY POTTER", year: 2024, pieces: 158, retail: 24.99, condition: "Built/Displayed", currentValue: 20, growth: 0.05 },
    { num: 99, setNumber: "76461", name: "Cornish Pixie", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 320, retail: 29.99, condition: "Built/Displayed", currentValue: 15, growth: 0.0 },
    { num: 100, setNumber: "76467", name: "Luna Lovegood's House", theme: "Harry Potter", category: "HARRY POTTER", year: 2026, pieces: 764, retail: 89.99, condition: "Built/Displayed", currentValue: 69, growth: 0.0 },
    { num: 101, setNumber: "75954", name: "Hogwarts Great Hall", theme: "Harry Potter", category: "HARRY POTTER", year: 2018, pieces: 878, retail: 99.99, condition: "Built/Displayed", currentValue: 54, growth: 0.06 },
    { num: 102, setNumber: "75957", name: "The Knight Bus", theme: "Harry Potter", category: "HARRY POTTER", year: 2019, pieces: 403, retail: 39.99, condition: "Built/Displayed", currentValue: 19, growth: 0.05 },
    { num: 103, setNumber: "75956", name: "Quidditch Match", theme: "Harry Potter", category: "HARRY POTTER", year: 2018, pieces: 500, retail: 39.99, condition: "Built/Displayed", currentValue: 33, growth: 0.05 },
    { num: 104, setNumber: "75950", name: "Aragog's Lair", theme: "Harry Potter", category: "HARRY POTTER", year: 2018, pieces: 157, retail: 14.99, condition: "Built/Displayed", currentValue: 10, growth: 0.04 },
    { num: 105, setNumber: "75953", name: "Hogwarts Whomping Willow", theme: "Harry Potter", category: "HARRY POTTER", year: 2018, pieces: 753, retail: 69.99, condition: "Built/Displayed", currentValue: 32, growth: 0.05 },
    { num: 106, setNumber: "75945", name: "Expecto Patronum", theme: "Harry Potter", category: "HARRY POTTER", year: 2019, pieces: 121, retail: 19.99, condition: "Built/Displayed", currentValue: 16, growth: 0.05 },
    { num: 107, setNumber: "75945", name: "Expecto Patronum (Copy 2)", theme: "Harry Potter", category: "HARRY POTTER", year: 2019, pieces: 121, retail: 19.99, condition: "Sealed/New", currentValue: 16, growth: 0.06 },

    // ========================================
    // MARVEL
    // ========================================
    { num: 108, setNumber: "76269", name: "Avengers Tower", theme: "Marvel", category: "MARVEL", year: 2024, pieces: 5201, retail: 499.99, condition: "Built/Displayed", currentValue: 421, growth: 0.10 },
    { num: 109, setNumber: "76215", name: "Black Panther", theme: "Marvel", category: "MARVEL", year: 2022, pieces: 2961, retail: 349.99, condition: "Built/Displayed", currentValue: 212, growth: 0.0 },
    { num: 110, setNumber: "76218", name: "Sanctum Sanctorum", theme: "Marvel", category: "MARVEL", year: 2022, pieces: 2708, retail: 249.99, condition: "Built/Displayed", currentValue: 293, growth: 0.04 },
    { num: 111, setNumber: "76354", name: "S.H.I.E.L.D. Helicarrier", theme: "Marvel", category: "MARVEL", year: 2026, pieces: 3033, retail: 299.99, condition: "Built/Displayed", currentValue: 175, growth: 0.0 },
    { num: 112, setNumber: "76178", name: "Daily Bugle", theme: "Marvel", category: "MARVEL", year: 2021, pieces: 3772, retail: 349.99, condition: "Built/Displayed", currentValue: 326, growth: 0.05 },
    { num: 113, setNumber: "76294", name: "X-Men: The X-Mansion", theme: "Marvel", category: "MARVEL", year: 2024, pieces: 3093, retail: 329.99, condition: "Built/Displayed", currentValue: 235, growth: 0.08 },
    { num: 114, setNumber: "76262", name: "Captain America's Shield", theme: "Marvel", category: "MARVEL", year: 2023, pieces: 3128, retail: 199.99, condition: "Built/Displayed", currentValue: 149, growth: 0.07 },
    { num: 115, setNumber: "76344", name: "Iron Man Mark 3 - Collectors' Edition", theme: "Marvel", category: "MARVEL", year: 2026, pieces: 1292, retail: 149.99, condition: "Built/Displayed", currentValue: 78, growth: 0.0 },
    { num: 116, setNumber: "76327", name: "Iron Man Mark IV Bust", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 431, retail: 49.99, condition: "Built/Displayed", currentValue: 45, growth: 0.0 },
    { num: 117, setNumber: "76209", name: "Thor's Hammer", theme: "Marvel", category: "MARVEL", year: 2022, pieces: 979, retail: 99.99, condition: "Built/Displayed", currentValue: 103, growth: 0.01 },
    { num: 118, setNumber: "76191", name: "Infinity Gauntlet", theme: "Marvel", category: "MARVEL", year: 2021, pieces: 590, retail: 69.99, condition: "Built/Displayed", currentValue: 35, growth: 0.05 },
    { num: 119, setNumber: "76313", name: "Brick-Built Marvel Logo", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 545, retail: 49.99, condition: "Built/Displayed", currentValue: 54, growth: 0.08 },
    { num: 120, setNumber: "76346", name: "Spider-Man (Hero Figure)", theme: "Marvel", category: "MARVEL", year: 2026, pieces: 810, retail: 59.99, condition: "Built/Displayed", currentValue: 60, growth: 0.0 },
    { num: 121, setNumber: "76107", name: "Thanos (Buildable Figure)", theme: "Marvel", category: "MARVEL", year: 2018, pieces: 630, retail: 39.99, condition: "Built/Displayed", currentValue: 44, growth: 0.01 },
    { num: 122, setNumber: "76088", name: "Thor vs. Hulk: Arena Clash", theme: "Marvel", category: "MARVEL", year: 2017, pieces: 492, retail: 49.99, condition: "Built/Displayed", currentValue: 70, growth: 0.04 },
    { num: 123, setNumber: "76084", name: "The Ultimate Battle for Asgard", theme: "Marvel", category: "MARVEL", year: 2017, pieces: 400, retail: 49.99, condition: "Built/Displayed", currentValue: 70, growth: 0.04 },
    { num: 124, setNumber: "76038", name: "Attack on Avengers Tower", theme: "Marvel", category: "MARVEL", year: 2015, pieces: 515, retail: 59.99, condition: "Built/Displayed", currentValue: 70, growth: 0.01 },
    { num: 125, setNumber: "76032", name: "Avengers Quinjet City Chase", theme: "Marvel", category: "MARVEL", year: 2015, pieces: 722, retail: 69.99, condition: "Built/Displayed", currentValue: 78, growth: 0.01 },
    { num: 126, setNumber: "76051", name: "Super Hero Airport Battle", theme: "Marvel", category: "MARVEL", year: 2016, pieces: 807, retail: 79.99, condition: "Built/Displayed", currentValue: 100, growth: 0.02 },
    { num: 127, setNumber: "76100", name: "Royal Talon Fighter Attack", theme: "Marvel", category: "MARVEL", year: 2018, pieces: 358, retail: 29.99, condition: "Built/Displayed", currentValue: 28, growth: 0.07 },
    { num: 128, setNumber: "76031", name: "The Hulk Buster Smash", theme: "Marvel", category: "MARVEL", year: 2015, pieces: 248, retail: 29.99, condition: "Built/Displayed", currentValue: 29, growth: 0.08 },
    { num: 129, setNumber: "76080", name: "Ayesha's Revenge (GotG)", theme: "Marvel", category: "MARVEL", year: 2017, pieces: 323, retail: 34.99, condition: "Built/Displayed", currentValue: 50, growth: 0.04 },
    { num: 130, setNumber: "76048", name: "Iron Skull Sub Attack", theme: "Marvel", category: "MARVEL", year: 2016, pieces: 329, retail: 29.99, condition: "Built/Displayed", currentValue: 43, growth: 0.04 },
    { num: 131, setNumber: "76049", name: "Avenjet Space Mission", theme: "Marvel", category: "MARVEL", year: 2016, pieces: 523, retail: 59.99, condition: "Built/Displayed", currentValue: 97, growth: 0.05 },
    { num: 132, setNumber: "76079", name: "Ravager Attack", theme: "Marvel", category: "MARVEL", year: 2017, pieces: 197, retail: 19.99, condition: "Built/Displayed", currentValue: 21, growth: 0.01 },
    { num: 133, setNumber: "76060", name: "Doctor Strange's Sanctum Sanctorum", theme: "Marvel", category: "MARVEL", year: 2016, pieces: 358, retail: 29.99, condition: "Built/Displayed", currentValue: 28, growth: 0.01 },
    { num: 134, setNumber: "76103", name: "Corvus Glaive Thresher Attack", theme: "Marvel", category: "MARVEL", year: 2018, pieces: 416, retail: 39.99, condition: "Built/Displayed", currentValue: 47, growth: 0.02 },
    { num: 135, setNumber: "76324", name: "Spider-Man vs. Oscorp", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 808, retail: 139.99, condition: "Building", currentValue: 79, growth: 0.0 },
    { num: 136, setNumber: "76317", name: "Peter Parker's Apartment", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 394, retail: 54.99, condition: "Built/Displayed", currentValue: 35, growth: 0.0 },
    { num: 137, setNumber: "76341", name: "Ravager Jumpsuit Groot", theme: "Marvel", category: "MARVEL", year: 2026, pieces: 604, retail: 59.99, condition: "Built/Displayed", currentValue: 30, growth: 0.0 },
    { num: 138, setNumber: "76316", name: "Fantastic Four vs. Galactus", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 427, retail: 59.99, condition: "Built/Displayed", currentValue: 50, growth: 0.0 },
    { num: 139, setNumber: "76321", name: "Spider-Man vs. Doc Ock Subway Train Scene", theme: "Marvel", category: "MARVEL", year: 2025, pieces: 393, retail: 54.99, condition: "Built/Displayed", currentValue: 33, growth: 0.0 },

    // ========================================
    // DC
    // ========================================
    { num: 140, setNumber: "76331", name: "Batman v Superman Batmobile", theme: "DC Super Heroes", category: "DC", year: 2026, pieces: 214, retail: 19.99, condition: "Built/Displayed", currentValue: 23, growth: 0.15 },
    { num: 141, setNumber: "76332", name: "The Batman Batmobile", theme: "DC Super Heroes", category: "DC", year: 2026, pieces: 325, retail: 29.99, condition: "Built/Displayed", currentValue: 20, growth: 0.0 },
    { num: 142, setNumber: "76330", name: "Batman Logo", theme: "DC Super Heroes", category: "DC", year: 2026, pieces: 668, retail: 59.99, condition: "Built/Displayed", currentValue: 52, growth: 0.0 },
    { num: 143, setNumber: "10937", name: "Batman: Arkham Asylum Breakout", theme: "DC Super Heroes", category: "DC", year: 2013, pieces: 1619, retail: 159.99, condition: "Built/Displayed", currentValue: 202, growth: 0.02 },
    { num: 144, setNumber: "76000", name: "Arctic Batman vs. Mr. Freeze: Aquaman on Ice", theme: "DC Super Heroes", category: "DC", year: 2013, pieces: 184, retail: 19.99, condition: "Built/Displayed", currentValue: 20, growth: 0.0 },
    { num: 145, setNumber: "76045", name: "Kryptonite Interception", theme: "DC Super Heroes", category: "DC", year: 2016, pieces: 293, retail: 29.99, condition: "Built/Displayed", currentValue: 34, growth: 0.01 },
    { num: 146, setNumber: "76040", name: "Brainiac Attack", theme: "DC Super Heroes", category: "DC", year: 2015, pieces: 179, retail: 24.99, condition: "Built/Displayed", currentValue: 137, growth: 0.17 },
    { num: 147, setNumber: "6862", name: "Superman vs. Power Armor Lex", theme: "DC Super Heroes", category: "DC", year: 2012, pieces: 207, retail: 19.99, condition: "Built/Displayed", currentValue: 30, growth: 0.03 },

    // ========================================
    // JURASSIC WORLD
    // ========================================
    { num: 148, setNumber: "75919", name: "Indominus Rex Breakout", theme: "Jurassic World", category: "JURASSIC WORLD", year: 2015, pieces: 1156, retail: 129.99, condition: "Built/Displayed", currentValue: 235, growth: 0.06 },

    // ========================================
    // LEGO CITY / CLASSIC TOWN
    // ========================================
    { num: 149, setNumber: "60141", name: "Police Station", theme: "City", category: "LEGO CITY", year: 2017, pieces: 894, retail: 99.99, condition: "Built/Displayed", currentValue: 65, growth: 0.04 },
    { num: 150, setNumber: "60110", name: "Fire Station", theme: "City", category: "LEGO CITY", year: 2016, pieces: 919, retail: 99.99, condition: "Built/Displayed", currentValue: 72, growth: 0.04 },
    { num: 151, setNumber: "60044", name: "Mobile Police Unit", theme: "City", category: "LEGO CITY", year: 2014, pieces: 375, retail: 29.99, condition: "Built/Displayed", currentValue: 18, growth: 0.03 },
    { num: 152, setNumber: "60102", name: "Airport VIP Service", theme: "City", category: "LEGO CITY", year: 2016, pieces: 364, retail: 39.99, condition: "Built/Displayed", currentValue: 44, growth: 0.01 },
    { num: 153, setNumber: "60036", name: "Arctic Base Camp", theme: "City", category: "LEGO CITY", year: 2014, pieces: 703, retail: 89.99, condition: "Built/Displayed", currentValue: 73, growth: 0.0 },
    { num: 154, setNumber: "60078", name: "Utility Shuttle", theme: "City", category: "LEGO CITY", year: 2015, pieces: 145, retail: 19.99, condition: "Built/Displayed", currentValue: 15, growth: 0.0 },
    { num: 155, setNumber: "7894", name: "Airport", theme: "City", category: "LEGO CITY", year: 2006, pieces: 675, retail: 69.99, condition: "Built/Displayed", currentValue: 112, growth: 0.02 },
    { num: 156, setNumber: "6648", name: "Mag Racer", theme: "Classic Town", category: "LEGO CITY", year: 1992, pieces: 54, retail: 0, condition: "Built/Displayed", currentValue: 9, growth: 0.0 },
    { num: 157, setNumber: "6351", name: "Surf N' Sail Camper", theme: "Classic Town", category: "LEGO CITY", year: 1992, pieces: 173, retail: 0, condition: "Built/Displayed", currentValue: 24, growth: 0.0 },
    { num: 158, setNumber: "6345", name: "Aerial Acrobats", theme: "Classic Town", category: "LEGO CITY", year: 1993, pieces: 313, retail: 0, condition: "Built/Displayed", currentValue: 51, growth: 0.0 },

    // ========================================
    // IDEAS / CREATOR / ICONS
    // ========================================
    { num: 159, setNumber: "10294", name: "Titanic", theme: "Icons", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 9090, retail: 629.99, condition: "Built/Displayed", currentValue: 435, growth: 0.0 },
    { num: 160, setNumber: "10295", name: "Porsche 911", theme: "Icons", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 1458, retail: 149.99, condition: "Built/Displayed", currentValue: 87, growth: 0.0 },
    { num: 161, setNumber: "10281", name: "Bonsai Tree", theme: "Botanicals", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 878, retail: 49.99, condition: "Built/Displayed", currentValue: 23, growth: 0.0 },
    { num: 162, setNumber: "10253", name: "Big Ben", theme: "Creator Expert", category: "IDEAS / CREATOR / ICONS", year: 2016, pieces: 4163, retail: 249.99, condition: "Built/Displayed", currentValue: 214, growth: 0.06 },
    { num: 163, setNumber: "10258", name: "London Bus", theme: "Creator Expert", category: "IDEAS / CREATOR / ICONS", year: 2017, pieces: 1686, retail: 139.99, condition: "Built/Displayed", currentValue: 72, growth: 0.06 },
    { num: 164, setNumber: "21310", name: "Old Fishing Store", theme: "Ideas", category: "IDEAS / CREATOR / ICONS", year: 2017, pieces: 2049, retail: 149.99, condition: "Built/Displayed", currentValue: 281, growth: 0.07 },
    { num: 165, setNumber: "21336", name: "The Office", theme: "Ideas", category: "IDEAS / CREATOR / ICONS", year: 2022, pieces: 1164, retail: 119.99, condition: "Built/Displayed", currentValue: 100, growth: 0.06 },
    { num: 166, setNumber: "21328", name: "Seinfeld", theme: "Ideas", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 1326, retail: 79.99, condition: "Built/Displayed", currentValue: 81, growth: 0.06 },
    { num: 167, setNumber: "21319", name: "Central Perk (Friends)", theme: "Ideas", category: "IDEAS / CREATOR / ICONS", year: 2019, pieces: 1070, retail: 59.99, condition: "Built/Displayed", currentValue: 63, growth: 0.01 },
    { num: 168, setNumber: "10292", name: "The Friends Apartments", theme: "Icons", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 2048, retail: 149.99, condition: "Built/Displayed", currentValue: 235, growth: 0.09 },
    { num: 169, setNumber: "11384", name: "Golden Retriever Puppy", theme: "Icons", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 2102, retail: 139.99, condition: "Built/Displayed", currentValue: 100, growth: 0.0 },
    { num: 170, setNumber: "43019", name: "Soccer Ball", theme: "LEGO Editions", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 1498, retail: 129.99, condition: "Built/Displayed", currentValue: 130, growth: 0.0 },
    { num: 171, setNumber: "43020", name: "FIFA World Cup Official Trophy", theme: "LEGO Editions", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 2842, retail: 199.99, condition: "Built/Displayed", currentValue: 200, growth: 0.0 },
    { num: 172, setNumber: "43011", name: "Lionel Messi - Soccer Highlights", theme: "Editions", category: "IDEAS / CREATOR / ICONS", year: 2025, pieces: 727, retail: 59.99, condition: "Built/Displayed", currentValue: 24, growth: 0.04 },
    { num: 173, setNumber: "43015", name: "Lionel Messi - Soccer Legend", theme: "Editions", category: "IDEAS / CREATOR / ICONS", year: 2025, pieces: 1500, retail: 99.99, condition: "Built/Displayed", currentValue: 52, growth: 0.04 },
    { num: 174, setNumber: "43018", name: "Lionel Messi - Celebration", theme: "Editions", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 1427, retail: 99.99, condition: "Built/Displayed", currentValue: 106, growth: 0.06 },
    { num: 175, setNumber: "40886", name: "Penguins in Love", theme: "Seasonal", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 278, retail: 0, condition: "Built/Displayed", currentValue: 17, growth: 0.0 },
    { num: 176, setNumber: "40885", name: "Duck Family", theme: "Seasonal", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 262, retail: 0, condition: "Built/Displayed", currentValue: 9, growth: 0.0 },
    { num: 177, setNumber: "40906", name: "Restaurants of the World: Japan", theme: "Promotional", category: "IDEAS / CREATOR / ICONS", year: 2026, pieces: 289, retail: 0, condition: "Built/Displayed", currentValue: 27, growth: 0.0 },
    { num: 178, setNumber: "40487", name: "Sailboat Adventure", theme: "Promotional", category: "IDEAS / CREATOR / ICONS", year: 2021, pieces: 320, retail: 0, condition: "Built/Displayed", currentValue: 18, growth: 0.0 },
    { num: 179, setNumber: "40106", name: "Toy Workshop (2014 Holiday)", theme: "Seasonal", category: "IDEAS / CREATOR / ICONS", year: 2014, pieces: 99, retail: 0, condition: "Built/Displayed", currentValue: 11, growth: 0.0 },
    { num: 180, setNumber: "31048", name: "Lakeside Lodge", theme: "Creator", category: "IDEAS / CREATOR / ICONS", year: 2016, pieces: 364, retail: 29.99, condition: "Built/Displayed", currentValue: 25, growth: 0.0 },
    { num: 181, setNumber: "75901", name: "Mystery Plane Adventures (Scooby-Doo)", theme: "Scooby-Doo", category: "IDEAS / CREATOR / ICONS", year: 2015, pieces: 118, retail: 14.99, condition: "Built/Displayed", currentValue: 43, growth: 0.1 },

    // ========================================
    // FORTNITE
    // ========================================
    { num: 182, setNumber: "77071", name: "Supply Llama", theme: "Fortnite", category: "FORTNITE", year: 2024, pieces: 691, retail: 39.99, condition: "Built/Displayed", currentValue: 20, growth: 0.0 },
    { num: 183, setNumber: "77073", name: "Battle Bus", theme: "Fortnite", category: "FORTNITE", year: 2024, pieces: 954, retail: 99.99, condition: "Built/Displayed", currentValue: 55, growth: 0.0 },

    // ========================================
    // NINJAGO
    // ========================================
    { num: 184, setNumber: "70618", name: "Destiny's Bounty (Ninjago Movie)", theme: "Ninjago", category: "NINJAGO", year: 2017, pieces: 2295, retail: 159.99, condition: "Built/Displayed", currentValue: 177, growth: 0.01 },
    { num: 185, setNumber: "70749", name: "Enter the Serpent", theme: "Ninjago", category: "NINJAGO", year: 2015, pieces: 529, retail: 59.99, condition: "Built/Displayed", currentValue: 107, growth: 0.05 },
    { num: 186, setNumber: "70631", name: "Garmadon's Volcano Lair", theme: "Ninjago", category: "NINJAGO", year: 2017, pieces: 521, retail: 49.99, condition: "Built/Displayed", currentValue: 48, growth: 0.05 },
    { num: 187, setNumber: "70608", name: "Master Falls", theme: "Ninjago", category: "NINJAGO", year: 2017, pieces: 312, retail: 29.99, condition: "Built/Displayed", currentValue: 25, growth: 0.0 },
    { num: 188, setNumber: "70746", name: "Condrai Copter Attack", theme: "Ninjago", category: "NINJAGO", year: 2015, pieces: 311, retail: 29.99, condition: "Built/Displayed", currentValue: 45, growth: 0.04 },
    { num: 189, setNumber: "70601", name: "Sky Shark", theme: "Ninjago", category: "NINJAGO", year: 2016, pieces: 221, retail: 19.99, condition: "Built/Displayed", currentValue: 23, growth: 0.01 },
    { num: 190, setNumber: "70733", name: "Blaster Bike", theme: "Ninjago", category: "NINJAGO", year: 2015, pieces: 212, retail: 19.99, condition: "Built/Displayed", currentValue: 37, growth: 0.06 },

    // ========================================
    // SUPER MARIO
    // ========================================
    { num: 191, setNumber: "72037", name: "Mario Kart - Mario & Standard Kart", theme: "Super Mario", category: "SUPER MARIO", year: 2025, pieces: 1972, retail: 169.99, condition: "Built/Displayed", currentValue: 104, growth: 0.0 },
    { num: 192, setNumber: "72050", name: "Mario Kart - Luigi & Mach 8", theme: "Super Mario", category: "SUPER MARIO", year: 2026, pieces: 2234, retail: 199.99, condition: "Built/Displayed", currentValue: 121, growth: 0.0 },

    // ========================================
    // CASTLE / PIRATES / OTHER
    // ========================================
    { num: 193, setNumber: "6085", name: "Black Monarch's Castle", theme: "Castle", category: "CASTLE / OTHER", year: 1988, pieces: 639, retail: 0, condition: "Built/Displayed", currentValue: 212, growth: 0.0 },
    { num: 194, setNumber: "6277", name: "Imperial Trading Post", theme: "Pirates", category: "CASTLE / OTHER", year: 1992, pieces: 570, retail: 0, condition: "Built/Displayed", currentValue: 389, growth: 0.0 },
    { num: 195, setNumber: "6274", name: "Caribbean Clipper", theme: "Pirates", category: "CASTLE / OTHER", year: 1989, pieces: 358, retail: 0, condition: "Built/Displayed", currentValue: 291, growth: 0.0 },
    { num: 196, setNumber: "6270", name: "Forbidden Island", theme: "Pirates", category: "CASTLE / OTHER", year: 1989, pieces: 182, retail: 34.99, condition: "Built/Displayed", currentValue: 81, growth: 0.02 },
    { num: 197, setNumber: "70403", name: "Dragon Mountain", theme: "Castle", category: "CASTLE / OTHER", year: 2013, pieces: 376, retail: 49.99, condition: "Built/Displayed", currentValue: 117, growth: 0.07 },
    { num: 198, setNumber: "70320", name: "Aaron Fox's Aero-Striker V2", theme: "Nexo Knights", category: "CASTLE / OTHER", year: 2016, pieces: 301, retail: 29.99, condition: "Built/Displayed", currentValue: 18, growth: 0.0 },
    { num: 199, setNumber: "76786", name: "Morticia's Cottage", theme: "Wednesday", category: "CASTLE / OTHER", year: 2025, pieces: 985, retail: 89.99, condition: "Built/Displayed", currentValue: 80, growth: 0.0 },
    { num: 200, setNumber: "77241", name: "2 Fast 2 Furious Honda S2000", theme: "Speed Champions", category: "CASTLE / OTHER", year: 2025, pieces: 296, retail: 24.99, condition: "Built/Displayed", currentValue: 18, growth: 0.0 },
    { num: 201, setNumber: "76924", name: "Mercedes-AMG G 63 & Mercedes-AMG SL 63", theme: "Speed Champions", category: "CASTLE / OTHER", year: 2024, pieces: 808, retail: 44.99, condition: "Building", currentValue: 25, growth: 0.0 },
  ],

  categories: [
    { key: "STAR WARS", label: "Star Wars", icon: "⭐", color: "#FFE81F" },
    { key: "LORD OF THE RINGS / THE HOBBIT", label: "Lord of the Rings / The Hobbit", icon: "💍", color: "#C9A84C" },
    { key: "MARVEL", label: "Marvel", icon: "🛡️", color: "#ED1D24" },
    { key: "DC", label: "DC", icon: "🦇", color: "#0078D7" },
    { key: "HARRY POTTER", label: "Harry Potter", icon: "⚡", color: "#7B3F00" },
    { key: "JURASSIC WORLD", label: "Jurassic World", icon: "🦖", color: "#2E8B57" },
    { key: "LEGO CITY", label: "LEGO City", icon: "🏙️", color: "#0057B8" },
    { key: "IDEAS / CREATOR / ICONS", label: "Ideas / Creator / Icons", icon: "💡", color: "#FF6B35" },
    { key: "NINJAGO", label: "Ninjago", icon: "⚔️", color: "#1B1B1B" },
    { key: "FORTNITE", label: "Fortnite", icon: "🎮", color: "#9D4DBB" },
    { key: "SUPER MARIO", label: "Super Mario", icon: "🍄", color: "#E52521" },
    { key: "CASTLE / OTHER", label: "Castle / Other", icon: "🏰", color: "#8B6914" },
  ]
};
