// Possible purchases: listings we've looked at (Facebook Marketplace lots and so on).
// Values are BrickLink average used sold prices (last 6 months) unless a note says otherwise.
// miles: approximate driving miles from Newtown, CT (town centre to town centre).
// passedBy: "Alex" (passed with the button or in chat) or "auto" (passed by the daily check), on Passed listings.
// status: "New" (found by the daily Marketplace check, first look only), "Considering", "Offered", "Bought" or "Passed".
// A "New" listing: id, title, url, source, location, listed, asking, checked, status: "New", photos,
// estimate { low, high }, verdict ("Deal", "Fair", "Pass" or "Unsure"), offer (optional), summary, items: [{ what, value: [low, high], note }].
// A passed listing only needs: id, title, url (optional), source, location, asking, checked, status: "Passed",
// photos (the first one is shown) and passReason.
// Each set: figs lists the minifigs the set comes with; seen: true when we spotted it in the listing.
// Listings are passed automatically (passedBy: "auto") when the asking price is at least this
// percent of the estimated used value (midpoint), when the check's verdict is "Pass", or when
// they're shipped instead of local pickup. Change the number to make auto-passing stricter or looser.
const AUTO_PASS_PCT = 85;

const DEALS = [
  {
    "id": "eb-397014820327",
    "title": "Massive LEGO lot: built adult sets (Fender, Grogu, Razor Crest, BrickHeadz...)",
    "url": "https://www.ebay.com/itm/397014820327",
    "source": "eBay (local pickup)",
    "location": "Woodbury, CT",
    "miles": 14,
    "listed": "Buy It Now $275 (listing date not shown; probably not brand new)",
    "asking": 275,
    "checked": "2026-11-28",
    "status": "Passed",
    "passedBy": "Alex",
    "passReason": "Seller is holding out for decent prices (listing unchanged since Jan 2026, several sets already sold elsewhere) and the lot doesn't have sets Alex really wants.",
    "statusChanged": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Steamboat Willie, Winnie the Pooh, Fender Stratocaster, Medieval Blacksmith and Grogu's plaque (Pooh, Blacksmith and Steamboat Willie already sold)"
      },
      {
        "src": "02.jpg",
        "caption": "The Child (Grogu), Central Perk, a birds build and the Pickup Truck (truck already sold)"
      },
      {
        "src": "03.jpg",
        "caption": "Razor Crest 75292 and the Tree House 21318 (Tree House already sold)"
      },
      {
        "src": "04.jpg",
        "caption": "BrickHeadz (Maleficent, R2-D2, Luke, Cruella...), Speed Champions and small Disney builds"
      }
    ],
    "estimate": {
      "low": 450,
      "high": 600
    },
    "verdict": "Unsure",
    "offer": 275,
    "summary": "Built adult sets, all with instructions but no boxes, from a seller 14 miles away. The description says the whole lot was 'around $500', but the Tree House, Medieval Blacksmith, Steamboat Willie, Winnie the Pooh and Pickup Truck have ALREADY SOLD, so the photos show more than is left. It isn't clear what the $275 Buy It Now covers. What looks left (Fender Stratocaster, Grogu, Razor Crest, Kylo Ren's shuttle 75256, a bagged Fiat 500, Central Perk, about 8 BrickHeadz and some Speed Champions) is worth roughly $450–600 used. If $275 really buys all of that it's a Deal, so it's worth asking the seller exactly what's included.",
    "items": [
      {
        "what": "21329 Fender Stratocaster (built)",
        "value": [
          90,
          110
        ],
        "note": "probably still available"
      },
      {
        "what": "75292 The Mandalorian's Razor Crest (built)",
        "value": [
          90,
          110
        ],
        "note": "probably still available"
      },
      {
        "what": "75256 Kylo Ren's Shuttle (with minifigs and instructions)",
        "value": [
          80,
          100
        ],
        "note": "in description, not pictured"
      },
      {
        "what": "75318 The Child / Grogu (built)",
        "value": [
          50,
          65
        ]
      },
      {
        "what": "10271 Fiat 500 (in bags)",
        "value": [
          50,
          65
        ],
        "note": "'yellow Fiat in plastic bags'"
      },
      {
        "what": "21319 Central Perk (built)",
        "value": [
          50,
          65
        ],
        "note": "probably; seen on the shelf"
      },
      {
        "what": "About 8 BrickHeadz plus 2–3 Speed Champions cars and small builds",
        "value": [
          60,
          100
        ],
        "note": "rough count"
      },
      {
        "what": "21318 Tree House, 21325 Medieval Blacksmith, 21317 Steamboat Willie, 21326 Winnie the Pooh, 10290 Pickup Truck",
        "value": [
          0,
          0
        ],
        "note": "already sold per the seller"
      }
    ]
  },
  {
    "id": "eb-397017525208",
    "title": "5 sealed sets: 75325 N-1 Starfighter, 21340 Space Age, 10314 Dried Flowers, 40622, 76914",
    "url": "https://www.ebay.com/itm/397017525208",
    "source": "eBay (local pickup)",
    "location": "Woodbury, CT",
    "miles": 14,
    "listed": "Buy It Now $155 (listing date not shown)",
    "asking": 155,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "75325 The Mandalorian's N-1 Starfighter, sealed"
      }
    ],
    "estimate": {
      "low": 140,
      "high": 175
    },
    "verdict": "Fair",
    "summary": "Five sealed, retired sets from the same Woodbury seller as the big built lot: 75325 Mandalorian's N-1 Starfighter, 21340 Tales of the Space Age, 10314 Dried Flower Centerpiece, 40622 Disney 100 BrickHeadz and 76914 Ferrari 812 Speed Champions. Built and used they're worth about $140–175; sealed they'd resell for about $210–250. At $155 it's a fair price, not a deal.",
    "items": [
      {
        "what": "75325 The Mandalorian's N-1 Starfighter (sealed)",
        "value": [
          40,
          55
        ]
      },
      {
        "what": "21340 Tales of the Space Age (sealed)",
        "value": [
          35,
          45
        ]
      },
      {
        "what": "10314 Dried Flower Centerpiece (sealed)",
        "value": [
          30,
          40
        ]
      },
      {
        "what": "40622 Disney 100 BrickHeadz (sealed)",
        "value": [
          25,
          30
        ]
      },
      {
        "what": "76914 Ferrari 812 Competizione (sealed)",
        "value": [
          10,
          15
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "Alex",
    "statusChanged": "2026-11-28",
    "passReason": "Asking is about 98% of the estimated value. Five sealed retired sets worth about $140–175 used (more like $210–250 sealed); $155 is a fair price, not a deal."
  },
  {
    "id": "fb-2015859002382005",
    "title": "LEGO 75951 Grindelwald's Escape + 75200 Ahch-To Island Training, sealed",
    "url": "https://www.facebook.com/marketplace/item/2015859002382005/",
    "source": "Facebook Marketplace",
    "location": "Bristol, CT",
    "miles": 30,
    "listed": "Listed a day ago",
    "asking": 70,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Both boxes, factory sealed"
      }
    ],
    "estimate": {
      "low": 50,
      "high": 60
    },
    "verdict": "Pass",
    "summary": "Two small retired sets, both sealed: Fantastic Beasts 75951 Grindelwald's Escape and Star Wars 75200 Ahch-To Island Training. BrickLink sold them for about $19.50 and $37 sealed in the last 6 months (about $12 and $18.50 used), so even sealed they're worth about $57. $70 is above value.",
    "items": [
      {
        "what": "75951 Grindelwald's Escape (sealed)",
        "value": [
          17,
          22
        ],
        "note": "BrickLink new avg $19.55; used $12"
      },
      {
        "what": "75200 Ahch-To Island Training (sealed)",
        "value": [
          33,
          40
        ],
        "note": "BrickLink new avg $37.17; used $18.50"
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 127% of the estimated value. BrickLink sealed prices add up to about $57 ($31 used), so $70 is more than they're worth."
  },
  {
    "id": "fb-2593609957693584",
    "title": "\"Huge LEGO collection\" bundle: one bin and four bags",
    "url": "https://www.facebook.com/marketplace/item/2593609957693584/",
    "source": "Facebook Marketplace",
    "location": "Weston, CT",
    "miles": 17,
    "listed": "Listing date not shown (cross-posted)",
    "asking": 60,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The whole lot: a small bin, some numbered set bags and loose bags"
      }
    ],
    "estimate": {
      "low": 30,
      "high": 45
    },
    "verdict": "Pass",
    "summary": "Not really huge: one small bin plus four zip bags of mixed bricks (some numbered bags from a set), maybe 8–12 lb in all. Mostly normal City/Creator colours, no minifigs visible. Worth about $3–5 a pound, so $30–45.",
    "items": [
      {
        "what": "About 8–12 lb of mixed bricks",
        "value": [
          30,
          45
        ],
        "note": "estimated from photos"
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 160% of the estimated value. About 8–12 lb of loose bricks for $60, about 1.5 times what it's worth."
  },
  {
    "id": "eb-168587033397",
    "title": "1 lb 8 oz of minifig weapons and accessories, organised",
    "url": "https://www.ebay.com/itm/168587033397",
    "source": "eBay (local pickup)",
    "location": "Prospect, CT",
    "miles": 22,
    "listed": "Buy It Now $174.99 or Best Offer (store listing)",
    "asking": 175,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sorted organiser of minifig weapons, helmets, hair and accessories"
      }
    ],
    "estimate": {
      "low": 70,
      "high": 110
    },
    "verdict": "Pass",
    "summary": "A reseller's sorted organiser of minifig accessories: swords, guns, helmets, hair, chains, flames, spider webs and some castle shields. Useful but common; loose accessories sell for about $45–70 a pound. Asking $175 is about double.",
    "items": [
      {
        "what": "About 1.5 lb of minifig accessories",
        "value": [
          70,
          110
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 194% of the estimated value. Loose minifig accessories priced at about double their value; same seller has a second, similar tub (eb-158084236655)."
  },
  {
    "id": "eb-158084236655",
    "title": "1 lb 7 oz of minifig weapons and accessories (loose tub)",
    "url": "https://www.ebay.com/itm/158084236655",
    "source": "eBay (local pickup)",
    "location": "Prospect, CT",
    "miles": 22,
    "listed": "Buy It Now $174.99 or Best Offer (store listing)",
    "asking": 175,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Loose tub of minifig accessories"
      }
    ],
    "estimate": {
      "low": 65,
      "high": 100
    },
    "verdict": "Pass",
    "summary": "Twin of eb-168587033397 from the same seller: a loose tub of minifig weapons, wings, hair and accessories, plus some odd bricks. About 1.5 lb, worth roughly $65–100.",
    "items": [
      {
        "what": "About 1.4 lb of loose minifig accessories",
        "value": [
          65,
          100
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 212% of the estimated value. Loose minifig accessories priced at about double their value."
  },
  {
    "id": "eb-267766065861",
    "title": "8 lb bulk LEGO bricks, mixed colours",
    "url": "https://www.ebay.com/itm/267766065861",
    "source": "eBay (local pickup)",
    "location": "Naugatuck, CT",
    "miles": 20,
    "listed": "Buy It Now $34.99 or Best Offer",
    "asking": 35,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The bin: lots of Duplo bricks plus Bionicle and a few System pieces"
      }
    ],
    "estimate": {
      "low": 18,
      "high": 30
    },
    "verdict": "Pass",
    "summary": "An 8 lb bin, but the photo shows mostly big Duplo bricks (including Duplo animal pieces) plus Bionicle parts and a few ordinary bricks. Duplo-heavy bulk resells poorly, so it's worth about $18–30.",
    "items": [
      {
        "what": "8 lb mixed, mostly Duplo with some Bionicle",
        "value": [
          18,
          30
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 146% of the estimated value. Mostly Duplo and Bionicle bulk; at $35 it's more than it's worth."
  },
  {
    "id": "eb-235932874273",
    "title": "2 lb of LEGO wheels, rims and tyres",
    "url": "https://www.ebay.com/itm/235932874273",
    "source": "eBay (local pickup)",
    "location": "Ansonia, CT",
    "miles": 22,
    "listed": "Buy It Now $39.99 or Best Offer",
    "asking": 40,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Bowl of wheels and tyres"
      }
    ],
    "estimate": {
      "low": 20,
      "high": 30
    },
    "verdict": "Pass",
    "summary": "A bowl of common car and truck wheels and tyres, about 2 lb. Handy for MOCs, but tyres are heavy and common; worth about $20–30.",
    "items": [
      {
        "what": "About 2 lb of wheels and tyres",
        "value": [
          20,
          30
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 160% of the estimated value. Common wheels and tyres at well above their value."
  },
  {
    "id": "eb-137919164574",
    "title": "24 LEGO and LEGO-inspired minifigures with accessories",
    "url": "https://www.ebay.com/itm/137919164574",
    "source": "eBay (local pickup)",
    "location": "Oxford, CT",
    "miles": 13,
    "listed": "Buy It Now $37.49 or Best Offer",
    "asking": 37,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "All 24 figures, two baby dinosaurs and a few accessories"
      }
    ],
    "estimate": {
      "low": 18,
      "high": 30
    },
    "verdict": "Pass",
    "summary": "24 figures, but the title says 'LEGO inspired' and many are clearly knockoffs (chrome Thor, Buzz Lightyear, the soldier figures). Maybe 8–10 are real LEGO City and town figures, plus two real Jurassic World baby dinosaurs. Worth about $18–30.",
    "items": [
      {
        "what": "8–10 real LEGO figures (City, construction)",
        "value": [
          10,
          20
        ],
        "note": "can't tell exactly from the photo"
      },
      {
        "what": "2 Jurassic World baby dinosaurs (ankylosaurus, triceratops)",
        "value": [
          8,
          12
        ]
      },
      {
        "what": "About 14 knockoff figures",
        "value": [
          0,
          0
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 154% of the estimated value. Many of the figures are knockoffs; the real LEGO is worth less than the asking price."
  },
  {
    "id": "eb-137753821794",
    "title": "10 LEGO Harry Potter instruction booklets (76422, 75955, 75957...)",
    "url": "https://www.ebay.com/itm/137753821794",
    "source": "eBay (local pickup)",
    "location": "Newtown, CT",
    "miles": 2,
    "listed": "Buy It Now $24.49 or Best Offer",
    "asking": 24,
    "checked": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The booklets: Diagon Alley Weasleys', Hogwarts Express, Knight Bus, Privet Drive, Shrieking Shack and more"
      }
    ],
    "estimate": {
      "low": 22,
      "high": 32
    },
    "verdict": "Fair",
    "summary": "Ten Harry Potter instruction booklets only (no bricks), in Newtown: 76422 Weasleys' Wizard Wheezes, 75955 Hogwarts Express, 75957 Knight Bus, 75968 Privet Drive, a Shrieking Shack and several Hogwarts Moments. Only useful if we're rebuilding those sets; booklets sell for about $2–5 each.",
    "items": [
      {
        "what": "10 Harry Potter instruction booklets",
        "value": [
          22,
          32
        ]
      }
    ],
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 89% of the estimated value. Instruction booklets only, priced about at their value; only worth it if we need one of these manuals."
  },
  {
    "id": "eb-327472960934",
    "title": "Bionicle Phantoka (2008) lot of 12",
    "url": "https://www.ebay.com/itm/327472960934",
    "source": "eBay (local pickup)",
    "location": "Sandy Hook, CT",
    "miles": 2,
    "listed": "Auction ends Mon Nov 30, 6:48 PM; opening bid $170, no bids yet",
    "asking": 170,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 110% of the estimated value. The opening bid alone is above what these used Bionicle sets are worth, and Bionicle isn't one of our themes.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Toa Pohatu, Kopaka and Lewa Phantoka with canisters, plus three Av-Matoran"
      }
    ],
    "estimate": {
      "low": 120,
      "high": 190
    },
    "verdict": "Pass",
    "offer": 130,
    "summary": "Twelve 2008 Bionicle Phantoka sets, built, with some canisters and booklets: the three Toa (Pohatu, Kopaka, Lewa), the three Makuta (Antroz, Vamprah, Chirox) and six small Matoran. It's less than a mile away, but the auction opens at $170, which is already above what they're worth used (about $15–25 per big canister set, $5–10 per small one). If no one bids, it would be worth no more than about $130.",
    "items": [
      {
        "what": "3 Toa Phantoka canister sets (8685–8687)",
        "value": [
          45,
          70
        ],
        "note": "built, with canisters"
      },
      {
        "what": "3 Makuta Phantoka canister sets (8691–8693)",
        "value": [
          45,
          70
        ],
        "note": "built, with canisters"
      },
      {
        "what": "6 small Matoran sets",
        "value": [
          30,
          50
        ],
        "note": "probably 8944–8949"
      }
    ]
  },
  {
    "id": "eb-800397491174",
    "title": "11 organized LEGO bins + bases (Friends, Disney, Star Wars pieces)",
    "url": "https://www.ebay.com/itm/800397491174",
    "source": "eBay (local pickup)",
    "location": "Brookfield, CT",
    "miles": 9,
    "listed": "Buy It Now or best offer (listing last updated Oct 12)",
    "asking": 130,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 113% of the estimated value. Lots of Friends-colour pieces, and a good part of the value is the storage cases rather than the LEGO.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "A sorted case: lots of lavender, magenta and light aqua"
      }
    ],
    "estimate": {
      "low": 90,
      "high": 140
    },
    "verdict": "Pass",
    "summary": "Eleven HDX-style organizer cases (7 large, 2 medium, 2 small) of LEGO sorted by part type, plus a bin of 8+ large baseplates. Lots of Friends-colour pieces (lavender, magenta, pink, light aqua), which we value lower. Maybe 10–15 lb of LEGO; the cases are worth about as much as the parts. $130 is above what it's worth to us.",
    "items": [
      {
        "what": "Sorted loose LEGO, roughly 10–15 lb, Friends-colour heavy",
        "value": [
          35,
          60
        ],
        "note": "guess from photos"
      },
      {
        "what": "8+ large baseplates",
        "value": [
          15,
          25
        ],
        "note": ""
      },
      {
        "what": "11 organizer cases",
        "value": [
          40,
          55
        ],
        "note": "about $15–20 new each"
      }
    ]
  },
  {
    "id": "eb-840046394021",
    "title": "Lot of 5 Ninjago sets, missing pieces",
    "url": "https://www.ebay.com/itm/840046394021",
    "source": "eBay (local pickup)",
    "location": "Woodbury, CT",
    "miles": 14,
    "listed": "Buy It Now",
    "asking": 60,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 115% of the estimated value. Small 2022 Ninjago sets in their boxes, but the seller says pieces are missing and only the boxes are shown, not the contents or minifigs.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The five boxes (71783, 71759, 71761, 71782, 71760)"
      }
    ],
    "estimate": {
      "low": 40,
      "high": 65
    },
    "verdict": "Pass",
    "summary": "Five small 2022 Ninjago sets in their boxes: 71783 Kai's Mech Rider EVO, 71759 Ninja Dragon Temple, 71761 Zane's Power Up Mech EVO, 71782 Cole's Earth Dragon EVO and 71760 Jay's Thunder Dragon EVO. The seller says each box has most of its contents but some pieces are missing, and the photos only show the boxes, so we can't check the minifigs. Complete, they'd be worth about $70–80 used together; incomplete, $40–65. Ninjago is a theme we like, but $60 is too much for unknown contents.",
    "items": [
      {
        "what": "71782 Cole's Earth Dragon EVO (incomplete)",
        "value": [
          12,
          18
        ],
        "note": ""
      },
      {
        "what": "71783 Kai's Mech Rider EVO (incomplete)",
        "value": [
          10,
          15
        ],
        "note": ""
      },
      {
        "what": "71759 Ninja Dragon Temple (incomplete)",
        "value": [
          8,
          14
        ],
        "note": ""
      },
      {
        "what": "71760 Jay's Thunder Dragon EVO (incomplete)",
        "value": [
          6,
          10
        ],
        "note": ""
      },
      {
        "what": "71761 Zane's Power Up Mech EVO (incomplete)",
        "value": [
          4,
          8
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "eb-335833957800",
    "title": "Giant box of 13.5 lb assorted LEGO",
    "url": "https://www.ebay.com/itm/335833957800",
    "source": "eBay (local pickup)",
    "location": "Bethlehem, CT",
    "miles": 20,
    "listed": "Buy It Now or best offer",
    "asking": 99.95,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 174% of the estimated value. About $7.40 a pound for plain older bricks, about twice the going rate for bulk.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The box: older basic bricks and plates in primary colours"
      }
    ],
    "estimate": {
      "low": 45,
      "high": 70
    },
    "verdict": "Pass",
    "summary": "A 13.5 lb box of older, mostly basic LEGO (primary-colour bricks, plates, some old gray, baseplates, a few wheels) from a big reseller ('The Vault'). No minifigs or sets visible. Bulk like this is worth about $3.50–5 a pound, so $100 is about double.",
    "items": [
      {
        "what": "13.5 lb loose older LEGO",
        "value": [
          45,
          70
        ],
        "note": "$3.50–5/lb"
      }
    ]
  },
  {
    "id": "eb-128204721579",
    "title": "Vintage LEGO set 190 box with about 850 mixed pieces",
    "url": "https://www.ebay.com/itm/128204721579",
    "source": "eBay (local pickup)",
    "location": "Brewster, NY",
    "miles": 22,
    "listed": "Auction ends Sun Nov 29, 6:57 AM; opening bid $50, no bids yet",
    "asking": 50,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 105% of the estimated value. A worn 1970s box filled with 800–875 mixed old pieces; the opening bid is already about what it's worth.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Set 190 box with its tray of mixed vintage bricks"
      }
    ],
    "estimate": {
      "low": 35,
      "high": 60
    },
    "verdict": "Pass",
    "offer": 35,
    "summary": "A 1970s LEGO set 190 box (creased and taped) filled with 800–875 mixed vintage pieces from different sets, plus an accessory manual and the creased manual for set 585. It's a nice nostalgic item, but the pieces are worth about $20–30 and the box and manuals maybe $15–30 to a collector. The auction opens at $50; it's only worth bidding up to about $35.",
    "items": [
      {
        "what": "800–875 mixed vintage pieces (about 4–5 lb)",
        "value": [
          20,
          30
        ],
        "note": ""
      },
      {
        "what": "Set 190 box (worn) and manuals for 585 and accessories",
        "value": [
          15,
          30
        ],
        "note": "collector value only"
      }
    ]
  },
  {
    "id": "eb-407063992949",
    "title": "Mixed LEGO lot, pre-sorted bags, large yellow storage case",
    "url": "https://www.ebay.com/itm/407063992949",
    "source": "eBay (local pickup)",
    "location": "Northfield, CT",
    "miles": 25,
    "listed": "Buy It Now or best offer",
    "asking": 35,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 93% of the estimated value. A small amount of loose bricks; most of the value is the yellow storage brick.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "A few bags of colour-sorted bricks"
      }
    ],
    "estimate": {
      "low": 30,
      "high": 45
    },
    "verdict": "Fair",
    "summary": "A LEGO 8-stud yellow storage brick with a few zip bags of colour-sorted bricks, plus manuals for 10696 (Classic) and 43214 (Disney). Not inventoried and probably only 2–3 lb of LEGO. The storage brick is worth about $25–30 used, so $35 is about fair, not a deal.",
    "items": [
      {
        "what": "Large yellow 8-stud LEGO storage brick",
        "value": [
          20,
          30
        ],
        "note": ""
      },
      {
        "what": "2–3 lb of sorted loose bricks and two manuals",
        "value": [
          10,
          15
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "eb-206368239386",
    "title": "Ninjago minifigures villain lot of 14",
    "url": "https://www.ebay.com/itm/206368239386",
    "source": "eBay (local pickup)",
    "location": "New Canaan, CT",
    "miles": 25,
    "listed": "Buy It Now or best offer",
    "asking": 94.99,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 112% of the estimated value. Recent Ninjago villains are common figures worth about $4–8 each.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The 14 villain minifigures"
      }
    ],
    "estimate": {
      "low": 70,
      "high": 100
    },
    "verdict": "Fair",
    "summary": "Fourteen recent Ninjago villain minifigures (the title says 13): Acid Monster, Loyalist Leader, Red Visor, Earth Monster, Spectral Draconian, two Vermillion warriors, two Anacondrai leaders, Soul Archer, Flintlocke, Nokt, a Draconian and Jordana. Ninjago is one of our themes, but these are mostly common figures from 2019–2024 sets worth about $4–8 each, so $95 is a bit over value. Could make sense at $60–65 if the seller takes offers.",
    "items": [
      {
        "what": "14 Ninjago villain minifigures",
        "value": [
          70,
          100
        ],
        "note": "about $4–8 each; can't price each one exactly"
      }
    ]
  },
  {
    "id": "eb-137872334069",
    "title": "Harry Potter LEGO sets: 11 built sets + collectible minifigures",
    "url": "https://www.ebay.com/itm/137872334069",
    "source": "eBay (local pickup)",
    "location": "About 25 miles away (town not shown)",
    "miles": 25,
    "listed": "Buy It Now or best offer",
    "asking": 800,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 167% of the estimated value. Good Harry Potter sets with manuals and lots of collectible minifigures, but used they're worth about $420–540 together.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Manuals for the 10 built sets"
      }
    ],
    "estimate": {
      "low": 420,
      "high": 540
    },
    "verdict": "Pass",
    "summary": "Eleven 2018–2020 Harry Potter sets, built, with minifigures and manuals: 75954 Great Hall, 75955 Hogwarts Express, 75948 Clock Tower, 75953 Whomping Willow, 75968 4 Privet Drive, 75957 Knight Bus, 75956 Quidditch Match, 75946 Hungarian Horntail, 75945 Expecto Patronum, 75967 Forbidden Forest, plus an unbuilt 30628 Monster Book of Monsters. Also a large group of Harry Potter collectible minifigures (Series 1 and 2, maybe 30–40). Exactly our theme, but used prices for these sets are low (Great Hall about $54, Hogwarts Express $38 on BrickLink), so it's worth about $420–540. $800 is far too high; worth a look only if the seller would come down to about $400.",
    "items": [
      {
        "what": "75954 Hogwarts Great Hall (built)",
        "value": [
          50,
          60
        ],
        "note": "BrickLink used avg $54 (22 sales)"
      },
      {
        "what": "75948 Hogwarts Clock Tower (built)",
        "value": [
          40,
          50
        ],
        "note": "BrickLink used avg $44"
      },
      {
        "what": "75955 Hogwarts Express (built)",
        "value": [
          35,
          42
        ],
        "note": "BrickLink used avg $38"
      },
      {
        "what": "75953 Whomping Willow and 75968 4 Privet Drive (built)",
        "value": [
          55,
          65
        ],
        "note": "BrickLink used avg $31 and $29"
      },
      {
        "what": "75957 Knight Bus, 75956 Quidditch, 75946 Horntail, 75945 Expecto Patronum, 75967 Forbidden Forest (built)",
        "value": [
          75,
          95
        ],
        "note": "Knight Bus BrickLink used avg $19; others estimated"
      },
      {
        "what": "30628 Monster Book of Monsters (unbuilt, boxed)",
        "value": [
          35,
          45
        ],
        "note": "estimate"
      },
      {
        "what": "Harry Potter collectible minifigures (Series 1 and 2, roughly 30–40)",
        "value": [
          120,
          180
        ],
        "note": "count is a guess from the photos"
      }
    ]
  },
  {
    "id": "eb-235575152918",
    "title": "Pink LEGO storage box, large, with LEGO",
    "url": "https://www.ebay.com/itm/235575152918",
    "source": "eBay (local pickup)",
    "location": "Norwalk, CT",
    "miles": 23,
    "listed": "Buy It Now or best offer",
    "asking": 70,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 112% of the estimated value. A small amount of loose LEGO with lots of Friends-colour pieces; the pink storage brick is most of the value.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Pink storage brick with loose LEGO, lots of Friends colours"
      }
    ],
    "estimate": {
      "low": 50,
      "high": 75
    },
    "verdict": "Pass",
    "summary": "A large pink 8-stud LEGO storage brick holding maybe 6–8 lb of loose LEGO, with three green baseplates. Lots of Friends-colour pieces (pink, magenta, lime, light aqua), which we value lower. The storage brick alone sells for about $25–35. $70 is above what it's worth to us.",
    "items": [
      {
        "what": "Pink 8-stud LEGO storage brick",
        "value": [
          25,
          35
        ],
        "note": ""
      },
      {
        "what": "6–8 lb loose LEGO, Friends-colour heavy",
        "value": [
          15,
          25
        ],
        "note": "guess from photos"
      },
      {
        "what": "Three green baseplates",
        "value": [
          10,
          15
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "fb-1151358924197052",
    "title": "LEGO Minecraft The Red Barn 21187, sealed",
    "url": "https://www.facebook.com/marketplace/item/1151358924197052/",
    "source": "Facebook Marketplace",
    "location": "Brookfield, CT",
    "miles": 9,
    "listed": "Listed 2 days before we looked",
    "asking": 60,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "Alex",
    "passReason": "Minecraft isn't a theme Alex collects.",
    "statusChanged": "2026-11-27",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sealed 21187 The Red Barn box"
      }
    ],
    "estimate": {
      "low": 90,
      "high": 110
    },
    "verdict": "Deal",
    "offer": 55,
    "summary": "Sealed Minecraft 21187 The Red Barn (799 pieces), retired in 2024. Sealed copies sold for about $102 on BrickLink in the last six months (BrickEconomy says $120), and the cheapest one for sale there now is $81. At $60 (down from $100, best offer) it's about 60% of value. Minecraft isn't one of our usual themes, but a sealed retired set like this is easy to resell or a good gift. Offer $55, or just pay $60.",
    "items": [
      {
        "what": "21187 The Red Barn (sealed)",
        "value": [
          90,
          110
        ],
        "note": "BrickLink new avg $102 (5 sales); BrickEconomy $120"
      }
    ]
  },
  {
    "id": "fb-1160829076812148",
    "title": "Huge LEGO collection: 60-drawer storage + LEGO table (West Orange, NJ)",
    "url": "https://www.facebook.com/marketplace/item/1160829076812148/",
    "source": "Facebook Marketplace",
    "location": "West Orange, NJ",
    "miles": 75,
    "listed": "Listed in West Orange, NJ (date not shown)",
    "asking": 650,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 173% of the estimated value. Unsorted bulk plus storage carts, 75 miles away, and the display models on top aren't included.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Three rolling drawer carts; the display models on top are NOT included"
      }
    ],
    "estimate": {
      "low": 300,
      "high": 450
    },
    "verdict": "Pass",
    "summary": "A big unsorted collection (seller counted about 70 sets' worth, all broken up) in three rolling drawer carts, plus a building table with a pile of loose LEGO on it. The best things in the photos (the Chewbacca, dragon and mech displays) are not included. The loose LEGO looks like maybe 40–70 lb of mixed parts, worth about $4/lb, and the carts are worth about $40 each used. Facebook shows 'Message again', so Alex may have contacted this seller before. Too far and too expensive.",
    "items": [
      {
        "what": "Loose mixed LEGO, roughly 40–70 lb, unsorted",
        "value": [
          180,
          300
        ],
        "note": "guess from photos"
      },
      {
        "what": "Three rolling drawer carts (15/15/20 drawers)",
        "value": [
          90,
          120
        ],
        "note": "about $68 new each"
      },
      {
        "what": "Building table with gray baseplates",
        "value": [
          30,
          40
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "cl-4jjnaZug98c21wRqnvbgnd",
    "title": "LEGO Collection: 18 sealed sets from an ex-LEGO employee (priced individually, $2,400 for all)",
    "url": "https://www.craigslist.org/view/d/fairfield-lego-collection/4jjnaZug98c21wRqnvbgnd",
    "source": "Craigslist",
    "location": "Fairfield, CT",
    "miles": 22,
    "listed": "Posted 24 days before we looked",
    "asking": 2400,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 86% of the estimated value. Every set is sealed and priced at roughly 85–95% of market; the $25 in the title is just the cheapest item. Fine prices, but no real deals, and most aren't our themes.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "The sealed boxes"
      }
    ],
    "estimate": {
      "low": 2600,
      "high": 2950
    },
    "verdict": "Fair",
    "summary": "A former LEGO employee is selling 18 sealed sets individually (the $25 in the title is just the cheapest item) or all of them for $2,400. Highlights: 10316 Rivendell $499 (still $499.99 at LEGO), 10278 Police Station $330 (sealed value about $375), 21330 Home Alone $285, 4002023 and 4002024 employee gifts, 76423 Hogwarts Express $120, two 10321 Corvettes. Each price is roughly 85–95% of market, so nothing is a real deal; the closest are the 10281 Bonsai Tree at $30 and the Harry Potter 40496 at $27.",
    "items": [
      {
        "what": "10316 Rivendell (sealed, plain shipping box)",
        "value": [
          450,
          500
        ],
        "note": "still sold by LEGO at $499.99; asking $499"
      },
      {
        "what": "10278 Police Station (sealed, box OK)",
        "value": [
          340,
          375
        ],
        "note": "BrickEconomy $375; asking $330"
      },
      {
        "what": "21330 Home Alone (sealed)",
        "value": [
          270,
          300
        ],
        "note": "retail $299.99; asking $285"
      },
      {
        "what": "4002023 Gingerbread House (employee gift, sealed)",
        "value": [
          200,
          222
        ],
        "note": "BrickEconomy $222; asking $190"
      },
      {
        "what": "10321 Corvette x2 (sealed)",
        "value": [
          360,
          400
        ],
        "note": "BrickEconomy $200 each; asking $185 and $200"
      },
      {
        "what": "4002024 Animals (employee gift, sealed)",
        "value": [
          140,
          152
        ],
        "note": "BrickEconomy $152; asking $150"
      },
      {
        "what": "21343 Viking Village, 21336 The Office, 21333 Starry Night (sealed)",
        "value": [
          440,
          490
        ],
        "note": "asking $145 each"
      },
      {
        "what": "76423 Hogwarts Express & Hogsmeade Station (sealed, dented)",
        "value": [
          115,
          130
        ],
        "note": "asking $120"
      },
      {
        "what": "76401, 76400, 40496 Harry Potter small sets (sealed)",
        "value": [
          110,
          130
        ],
        "note": "asking $58, $25, $27"
      },
      {
        "what": "60440 Delivery Truck, 2x 10281 Bonsai, 10311 Orchid (sealed)",
        "value": [
          180,
          230
        ],
        "note": "asking $85, $30, $38, $40"
      }
    ]
  },
  {
    "id": "cl-jzrSvqZPQzd7HTkwaMyWxP",
    "title": "legos legos legos: 65 lb in two bins + bin of instruction books",
    "url": "https://www.craigslist.org/view/d/trumbull-legos-legos-legos/jzrSvqZPQzd7HTkwaMyWxP",
    "source": "Craigslist",
    "location": "Trumbull, CT",
    "miles": 14,
    "listed": "Posted 8 days before we looked",
    "asking": 200,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "Alex",
    "passReason": "Seller says there aren't many minifigures, and nothing recognizable shows in the photos.",
    "statusChanged": "2026-11-28",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Bin 1, 28 lb: mixed plates, bricks, slopes, some City pieces"
      },
      {
        "src": "02.jpg",
        "caption": "Bin 2, 37 lb: lots of black, gray and tan, big plates"
      },
      {
        "src": "03.jpg",
        "caption": "Bin 3: binders of instruction books, including Star Wars 75234"
      }
    ],
    "estimate": {
      "low": 250,
      "high": 375
    },
    "verdict": "Deal",
    "offer": 170,
    "summary": "Two bins of loose LEGO weighed at 28 lb and 37 lb (65 lb in all), plus a bin of instruction books in binders (a Star Wars 75234 AT-AP booklet is visible). The seller says off-brand pieces have been removed and it's clean. Mostly useful colours (black, gray, tan, white, green), not Friends-heavy, with only a few minifigs. At $200 for everything (about $3/lb, best offer) it's about 64% of value. Offer $170; the seller also sells the bins separately ($75 / $100 / $25).",
    "items": [
      {
        "what": "Bin 1, 28 lb loose LEGO",
        "value": [
          95,
          140
        ],
        "note": "$3.50–5/lb"
      },
      {
        "what": "Bin 2, 37 lb loose LEGO",
        "value": [
          125,
          185
        ],
        "note": "$3.50–5/lb"
      },
      {
        "what": "Bin of instruction books in binders",
        "value": [
          30,
          50
        ],
        "note": "can't see which sets beyond 75234"
      }
    ]
  },
  {
    "id": "cl-2sLDGQ5XTEzqcKsnLWEMCi",
    "title": "LEGO Star Trek Enterprise (10356) with shuttle, new in box",
    "url": "https://www.craigslist.org/view/d/danbury-lego-star-trek-enterprise-with/2sLDGQ5XTEzqcKsnLWEMCi",
    "source": "Craigslist",
    "location": "Danbury, CT",
    "miles": 11,
    "listed": "Posted 4 months before we looked, renewed a day ago",
    "asking": 485,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 133% of the estimated value. More than LEGO's own retail ($399.99) for a set that's still in stores, and Star Trek isn't one of our themes.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "10356 box (photo from the same seller's other Enterprise listing; this one has no photos)"
      }
    ],
    "estimate": {
      "low": 320,
      "high": 410
    },
    "verdict": "Pass",
    "summary": "New-in-box 10356 U.S.S. Enterprise NCC-1701-D plus a shuttle (probably the gift-with-purchase shuttle set), no photos. The Enterprise is still sold by LEGO for $399.99 and new copies have sold for about $289 on BrickLink; the shuttle adds maybe $20–40. $485 is well over value.",
    "items": [
      {
        "what": "10356 U.S.S. Enterprise NCC-1701-D (sealed)",
        "value": [
          290,
          380
        ],
        "note": "retail $399.99; BrickLink new avg $289 (9 sales)"
      },
      {
        "what": "Shuttle (probably a gift-with-purchase set)",
        "value": [
          20,
          40
        ],
        "note": "not shown"
      }
    ]
  },
  {
    "id": "cl-3qhLUR5mdpa6PXsHa574vx",
    "title": "LEGO Star Trek Enterprise (10356), brand new in box",
    "url": "https://www.craigslist.org/view/d/danbury-lego-star-trek-enterprise/3qhLUR5mdpa6PXsHa574vx",
    "source": "Craigslist",
    "location": "Danbury, CT",
    "miles": 11,
    "listed": "Posted 4 months before we looked, renewed a day ago",
    "asking": 400,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 119% of the estimated value. Full retail for a set LEGO still sells, and Star Trek isn't one of our themes.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "10356 U.S.S. Enterprise NCC-1701-D box"
      }
    ],
    "estimate": {
      "low": 290,
      "high": 380
    },
    "verdict": "Pass",
    "summary": "Brand new in box 10356 U.S.S. Enterprise NCC-1701-D (3,600 pieces). LEGO still sells it for $399.99 and new copies have sold for about $289 on BrickLink, so $400 is full retail with no discount. Same seller as the $485 listing with a shuttle.",
    "items": [
      {
        "what": "10356 U.S.S. Enterprise NCC-1701-D (sealed)",
        "value": [
          290,
          380
        ],
        "note": "retail $399.99; BrickLink new avg $289 (9 sales)"
      }
    ]
  },
  {
    "id": "cl-8TpHy97Ki2v1HS6rxM2AEP",
    "title": "LEGO VW T1 Camper Van 10220, sealed",
    "url": "https://www.craigslist.org/view/d/shelton-lego-vw-t1-camper-van/8TpHy97Ki2v1HS6rxM2AEP",
    "source": "Craigslist",
    "location": "Shelton, CT",
    "miles": 15,
    "listed": "Posted 6 months before we looked, renewed 2 days ago",
    "asking": 200,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 121% of the estimated value. Sealed 10220 sells for about $156 on BrickLink, so $200 is above market (the seller's price includes shipping).",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sealed 10220 box"
      }
    ],
    "estimate": {
      "low": 150,
      "high": 180
    },
    "verdict": "Pass",
    "summary": "Sealed 10220 Volkswagen T1 Camper Van (2011, retired). Sealed copies have sold for about $156 on BrickLink in the last six months (35 sales; BrickEconomy says $175). $200, which the seller says includes shipping, is above market, and it's not one of our themes.",
    "items": [
      {
        "what": "10220 Volkswagen T1 Camper Van (sealed)",
        "value": [
          150,
          180
        ],
        "note": "BrickLink new avg $156 (35 sales); BrickEconomy $175"
      }
    ]
  },
  {
    "id": "fb-2224595054842399",
    "title": "LEGO Star Wars UCS Razor Crest (75331), sealed",
    "url": "https://www.facebook.com/marketplace/item/2224595054842399/",
    "source": "Facebook Marketplace",
    "location": "Brookfield, CT",
    "miles": 9,
    "listed": "Listed about an hour before we looked",
    "asking": 650,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 93% of the estimated value. A sealed, retired UCS Razor Crest at roughly the going sealed price (BrickEconomy about $710), so there's no discount here.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sealed 75331 box, still in its shipping carton"
      }
    ],
    "estimate": {
      "low": 650,
      "high": 750
    },
    "verdict": "Fair",
    "summary": "New, sealed UCS Razor Crest (75331, 6,187 pieces), retired in 2024. Sealed copies are valued at about $710 on BrickEconomy. $650 is a normal market price, not a deal, and it's a display piece rather than something worth opening at that price.",
    "items": [
      {
        "what": "75331 UCS The Razor Crest (sealed)",
        "value": [
          650,
          750
        ],
        "note": "BrickEconomy sealed value $710; retail was $599.99"
      }
    ]
  },
  {
    "id": "fb-1016006084877127",
    "title": "Sealed Lord of the Rings 9473 Mines of Moria + 9471 Uruk-hai Army",
    "url": "https://www.facebook.com/marketplace/item/1016006084877127/",
    "source": "Facebook Marketplace",
    "location": "Danbury, CT",
    "miles": 11,
    "listed": "Listed 2 days before we looked",
    "asking": 950,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 106% of the estimated value. Two genuinely good retired LOTR sets, sealed, but $950 firm is above what they sell for sealed (about $600 + $330).",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sealed 9473 The Mines of Moria box"
      }
    ],
    "estimate": {
      "low": 850,
      "high": 950
    },
    "verdict": "Pass",
    "summary": "Two sealed 2012 Lord of the Rings sets: 9473 The Mines of Moria and 9471 Uruk-hai Army. Both are retired and sought after; BrickEconomy values them sealed at about $596 and $330. The price is firm at $950 for both, which is at or above market, so there's no room for a deal.",
    "items": [
      {
        "what": "9473 The Mines of Moria (sealed)",
        "value": [
          560,
          620
        ],
        "note": "BrickEconomy sealed $596"
      },
      {
        "what": "9471 Uruk-hai Army (sealed)",
        "value": [
          290,
          330
        ],
        "note": "BrickEconomy sealed $330"
      }
    ]
  },
  {
    "id": "fb-2422511871616077",
    "title": "Star Wars LEGO lot: 6 sealed sets + free Speed Champions F1",
    "url": "https://www.facebook.com/marketplace/item/2422511871616077/",
    "source": "Facebook Marketplace",
    "location": "Bristol, CT",
    "miles": 32,
    "listed": "Listed 2 days before we looked",
    "asking": 650,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 85% of the estimated value. All sealed, but four of the six are still in stores, so they sell for around or below retail; only the Jedi Scout Fighter (damaged box) and Onyx Cinder are retired.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "All seven boxes: Razor Crest, V-19, Dark Falcon, Onyx Cinder, Millennium Falcon, Jedi Scout Fighter, Audi F1"
      }
    ],
    "estimate": {
      "low": 700,
      "high": 830
    },
    "verdict": "Fair",
    "summary": "Six sealed Star Wars sets (75447 Razor Crest, 75389 Dark Falcon, 75426 Millennium Falcon, 75432 V-19 Torrent, 75374 Onyx Cinder, 75051 Jedi Scout Fighter with a damaged box) plus a free 77259 Audi F1 car. The seller's '$905 market' uses full retail; four of these are still sold in stores and go for less on the secondary market. Worth roughly $700–830 as sealed sets, so $650 is only about 15% off: fair, not a deal. Seller takes offers.",
    "items": [
      {
        "what": "75051 Jedi Scout Fighter (2014, sealed, damaged box)",
        "value": [
          180,
          220
        ],
        "note": "BrickLink new avg $219 (6 sales); box damage lowers it"
      },
      {
        "what": "75389 The Dark Falcon (sealed, retiring soon)",
        "value": [
          150,
          170
        ],
        "note": "retail $179.99"
      },
      {
        "what": "75447 The Razor Crest (2026, sealed)",
        "value": [
          120,
          140
        ],
        "note": "retail $149.99, still in stores"
      },
      {
        "what": "75374 The Onyx Cinder (sealed, retired)",
        "value": [
          100,
          120
        ],
        "note": "BrickLink new avg $108"
      },
      {
        "what": "75426 Millennium Falcon (SMART Play, sealed)",
        "value": [
          80,
          90
        ],
        "note": "retail $99.99, still in stores"
      },
      {
        "what": "75432 V-19 Torrent Starfighter (sealed)",
        "value": [
          50,
          60
        ],
        "note": "retail $64.99"
      },
      {
        "what": "77259 Audi Revolut F1 R26 (sealed, free)",
        "value": [
          20,
          25
        ],
        "note": "retail $27.99"
      }
    ]
  },
  {
    "id": "fb-3516760208503761",
    "title": "Legos (bins of mixed, mostly taken-apart sets)",
    "url": "https://www.facebook.com/marketplace/item/3516760208503761/",
    "source": "Facebook Marketplace",
    "location": "Bristol, CT",
    "miles": 32,
    "listed": "Listed 4 days before we looked",
    "asking": 300,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 158% of the estimated value. Mostly loose, taken-apart sets with lots of Friends-colour pieces; $300 is well above what this kind of bulk is worth.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Three bins: bagged parts, a bag of about 40–50 minifigs, lots of pink, lavender and light aqua plates"
      }
    ],
    "estimate": {
      "low": 150,
      "high": 230
    },
    "verdict": "Pass",
    "summary": "Three or four bins of mixed, mostly taken-apart LEGO going in a garbage bag (bins not included). The seller mentions a Disney castle, a Frozen set, a tree house, Baby Yoda and Mandalorian, and lots of Friends sets and pets; the photos show lots of Friends-colour pieces (pink, lavender, light aqua) plus a bag of maybe 40–50 minifigures. Not our usual theme, low resale, and it would need hours of sorting. $300 is far over what it's worth.",
    "items": [
      {
        "what": "Loose mixed parts, roughly 25–35 lb, Friends-colour heavy",
        "value": [
          90,
          140
        ],
        "note": "guess from photos; Friends colours valued lower"
      },
      {
        "what": "Bag of about 40–50 minifigures (mostly City/Friends/Disney)",
        "value": [
          40,
          70
        ],
        "note": "can't identify individually"
      },
      {
        "what": "Star Wars Mandalorian/Grogu pieces",
        "value": [
          20,
          30
        ],
        "note": "mentioned, not clearly shown"
      }
    ]
  },
  {
    "id": "fb-1149231631189407",
    "title": "Yoda 2002 LEGO set #7194 (UCS), built",
    "url": "https://www.facebook.com/marketplace/item/1149231631189407/",
    "source": "Facebook Marketplace",
    "location": "Ansonia, CT",
    "miles": 20,
    "listed": "Listed 3 days before we looked",
    "asking": 200,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 98% of the estimated value. Built UCS Yoda at the normal used price (BrickLink used avg about $207). Also, the description says 'door pickup in Deltona Florida', which doesn't match the Ansonia location.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Built 7194 Yoda"
      }
    ],
    "estimate": {
      "low": 180,
      "high": 230
    },
    "verdict": "Fair",
    "summary": "The 2002 UCS Yoda (7194), built and looking complete, with no box or instructions shown. Used ones have sold for about $207 on BrickLink in the last six months, so $200 is market price. Be careful: the listing says Ansonia, CT but the description says door pickup in Deltona, Florida.",
    "items": [
      {
        "what": "7194 UCS Yoda (built, no box shown)",
        "value": [
          180,
          230
        ],
        "note": "BrickLink used avg $207 (8 sales)"
      }
    ]
  },
  {
    "id": "fb-1674330497766731",
    "title": "LEGO Wild West Limited Edition Gift Pack 6755 6712 6716 (vintage, used, incomplete)",
    "url": "https://www.facebook.com/marketplace/item/1674330497766731/",
    "source": "Facebook Marketplace",
    "location": "Wolcott, CT",
    "miles": 26,
    "listed": "Listed 3 days before we looked",
    "asking": 1200,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 706% of the estimated value. Used, partly incomplete 1996 Western sets are worth about $140–200 together, nowhere near $1,200.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Gift pack box, 6755 box and manuals, the covered wagon"
      }
    ],
    "estimate": {
      "low": 140,
      "high": 200
    },
    "verdict": "Pass",
    "summary": "A 1996 Wild West gift pack box with 6755 Sheriff's Lock-Up (seller says complete with manual), 6716 Covered Wagon (missing a few pieces) and only the box and manual for 6712. Used, 6755 sells for about $80 and 6716 about $49 on BrickLink. The seller is pricing it as if sealed ($1,200), which is several times what it's worth.",
    "items": [
      {
        "what": "6755 Sheriff's Lock-Up (used, complete, manual, box)",
        "value": [
          75,
          100
        ],
        "note": "BrickLink used avg $80 (19 sales)"
      },
      {
        "what": "6716 Covered Wagon (used, missing a few pieces)",
        "value": [
          35,
          50
        ],
        "note": "BrickLink used avg $49 (29 sales)"
      },
      {
        "what": "6712 box and manual only, plus the gift pack outer box",
        "value": [
          30,
          50
        ],
        "note": "collectors' value only"
      }
    ]
  },
  {
    "id": "fb-1453984126801667",
    "title": "Family Reunion Celebration 80113, retired, factory sealed",
    "url": "https://www.facebook.com/marketplace/item/1453984126801667/",
    "source": "Facebook Marketplace",
    "location": "Pound Ridge, NY",
    "miles": 30,
    "listed": "Listed 2 days before we looked",
    "asking": 179,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 94% of the estimated value. Sealed retired 80113 at around the going sealed price, and Chinese New Year isn't one of our themes.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Sealed 80113 box"
      }
    ],
    "estimate": {
      "low": 170,
      "high": 210
    },
    "verdict": "Fair",
    "summary": "Sealed 80113 Family Reunion Celebration (Chinese Traditional Festivals, 1,823 pieces), retired. Sealed copies sell for about $180 on BrickLink (BrickEconomy says $218). $179 (reduced from $199) is a market price, and it's not our usual theme.",
    "items": [
      {
        "what": "80113 Family Reunion Celebration (sealed)",
        "value": [
          170,
          210
        ],
        "note": "BrickLink new avg $181 (11 sales); BrickEconomy $218"
      }
    ]
  },
  {
    "id": "fb-3052919625043692",
    "title": "LEGO Harry Potter Hogwarts Chamber of Secrets 76389, sealed",
    "url": "https://www.facebook.com/marketplace/item/3052919625043692/",
    "source": "Facebook Marketplace",
    "location": "Bridgeport, CT",
    "miles": 20,
    "listed": "Listed 4 days before we looked",
    "asking": 100,
    "checked": "2026-11-27",
    "status": "Considering",
    "statusChanged": "2026-11-27",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "Front of the sealed 76389 box"
      },
      {
        "src": "02.jpg",
        "caption": "Back of the box, light shelf wear"
      }
    ],
    "estimate": {
      "low": 125,
      "high": 155
    },
    "verdict": "Fair",
    "offer": 85,
    "summary": "Sealed Hogwarts Chamber of Secrets (76389, 1,176 pieces, 11 minifigures including the gold 20th-anniversary Voldemort), retired. Sealed copies sell for about $131 on BrickLink (43 sales in six months); BrickEconomy says $160. At $100 it's about 70% of value: fair and close to a deal. A good Harry Potter set to build; worth offering $85.",
    "items": [
      {
        "what": "76389 Hogwarts Chamber of Secrets (sealed)",
        "value": [
          125,
          155
        ],
        "note": "BrickLink new avg $131 (43 sales); used avg $93"
      }
    ]
  },
  {
    "id": "fb-931748613239213",
    "title": "LEGO Dinosaur, James Bond, Pokemon",
    "url": "https://www.facebook.com/marketplace/item/931748613239213/",
    "source": "Facebook Marketplace",
    "location": "Waterbury, CT",
    "miles": 22,
    "listed": "Listed 3 days before we looked",
    "asking": 65,
    "checked": "2026-11-27",
    "status": "Passed",
    "passedBy": "auto",
    "passReason": "Asking is about 96% of the estimated value. Two small built LEGO sets plus a Pokémon build that matches no LEGO Pokémon set (probably Mega), so $65 is about what it's worth.",
    "photos": [
      {
        "src": "01.jpg",
        "caption": "T. rex, Aston Martin DB5 and the Squirtle/Wartortle/Blastoise build"
      }
    ],
    "estimate": {
      "low": 55,
      "high": 80
    },
    "verdict": "Fair",
    "summary": "Built 31151 Terrifying T. rex (Creator 3-in-1), 76911 007 Aston Martin DB5 (Speed Champions) and a Squirtle/Wartortle/Blastoise build. LEGO doesn't make a Blastoise set like that, so it's probably Mega Pokémon, not LEGO. The two LEGO sets are worth about $50 used together; not our usual themes.",
    "items": [
      {
        "what": "31151 Terrifying T. rex (built)",
        "value": [
          30,
          40
        ],
        "note": "BrickLink used avg $33 (4 sales)"
      },
      {
        "what": "76911 007 Aston Martin DB5 (built)",
        "value": [
          15,
          20
        ],
        "note": "BrickLink used avg $18 (26 sales)"
      },
      {
        "what": "Squirtle/Wartortle/Blastoise build",
        "value": [
          10,
          20
        ],
        "note": "probably Mega, not LEGO"
      }
    ]
  },
  {
    id: "fb-1176325258141815",
    title: "Lego Friends",
    url: "https://www.facebook.com/marketplace/item/1176325258141815/",
    source: "Facebook Marketplace",
    location: "Milford, CT", miles: 23,
    listed: "Listed 2 hours ago",
    asking: 40,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "Alex",
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
    location: "Westport, CT", miles: 24,
    listed: "Listed 2 hours ago",
    asking: 129,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "auto",
    passReason: "Asking is about 147% of the estimated value. Complete used Boost Creative Toolbox with its box, sorted into numbered bags. LEGO retired the Boost app (it now runs through Powered Up), and used ones have been selling on BrickLink for about $88. At $129 it's above what it's worth used.",
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
    location: "Bristol, CT", miles: 32,
    listed: "Listed 13 hours ago",
    asking: 20,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "auto",
    passReason: "Asking is about 89% of the estimated value. The big Molten Man figure is built and looks complete, with the booklet. The set's minifigures (Spider-Man and Mysterio) aren't in any photo, and they're a good part of its value. Worth about $15 without them and $30 with them; price is firm, so only worth it if the minifigs are included.",
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
    location: "Trumbull, CT", miles: 16,
    listed: "Listed 18 hours ago",
    asking: 60,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "auto",
    passReason: "Asking is about 150% of the estimated value. Two small bins of loose pieces, mostly gray, white and black, which looks like broken-up Star Wars ships. No minifigs or booklets. It's maybe 8–10 pounds, about $30–50 at bulk prices, so $60 is too much.",
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
    status: "Passed",
    passedBy: "auto",
    passReason: "Shipped, not local pickup. Asking is about 79% of the estimated value. Six sealed sets, and the biggest is the Grogu with Hover Pram (75403, $100 retail). The others are Dobby (76421), Bowser's Muscle Car (71431), the Toyota Supra Speed Champions car, the Turtle 3-in-1 (31377) and the Nutcracker (40640). Together they're about $200 at retail. $150 plus shipping is about 75% of that, which is a fair price, not a steal. Worth it at around $110.",
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
    location: "Bristol, CT", miles: 32,
    listed: "Listed a day ago",
    asking: 60,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "auto",
    passReason: "Asking is about 109% of the estimated value. Only half of the Vampyre Castle: sealed bags 4–7, the worn box and booklet 2. Bags 1–3, booklet 1 and all the minifigures are missing, and the minifigures are what make this set valuable. It won't build the castle, and finishing it would cost more than buying a used complete one. Pass unless you already have bags 1–3.",
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
    location: "Watertown, CT", miles: 20,
    listed: "Listed 2 days ago",
    asking: 25,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "Alex",
    statusChanged: "2026-11-27",
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
    location: "Derby, CT", miles: 16,
    listed: "Listed 2 days ago",
    asking: 65,
    checked: "2026-11-27",
    status: "Passed",
    passedBy: "auto",
    passReason: "Asking is about 93% of the estimated value. This is Ninjago 71821 Cole's Titan Dragon Mech (1,055 pieces), built. It matches the box picture: black, white and copper with the gold blades. Used complete ones sell for about $93 on BrickLink, but the seller says the minifig is missing. At $65 it's a fair price; worth it at around $45.",
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
    location: "Shelton, CT", miles: 16,
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
    location: "Fort Montgomery, NY", miles: 45,
    asking: 400,
    checked: "2026-11-26",
    status: "Passed",
    passedBy: "Alex",
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
    passedBy: "Alex",
    estimate: { low: 180, high: 280 },
    photos: [{ src: "01-lot.jpg", caption: "The lot" }],
    passReason: "Mostly common City and Jurassic World sets, partly taken apart: 60196 Arctic Supply Plane, 60228 Deep Space Rocket, 75928 Blue's Helicopter Pursuit, 60182 Pickup & Caravan and 10757 Raptor Rescue Truck (about $210 if complete), plus 30–40 common minifigs and some dinos. Several bags were Mega Construx and other brands. Worth about $180–280, so $200 is fair, not a deal. Would need to be about $120."
  }
];
