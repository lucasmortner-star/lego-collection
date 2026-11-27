// Full sweep of active LEGO listings within 20 miles (Facebook Marketplace, Craigslist, eBay local pickup).
// "rows" are the listings worth a full review; "skipped" summarizes what was left out and why.
// Shown at the bottom of Possible Buys > New finds. Rows move to DEALS once they're fully reviewed.
const SCAN = {
 "scanned": "2026-11-27",
 "counts": {
  "Facebook Marketplace": 90,
  "Craigslist": 10,
  "eBay (local pickup)": 220
 },
 "skipped": [
  {
   "why": "Single sealed or new sets at normal market price (mostly one reseller in Wolcott)",
   "n": 55
  },
  {
   "why": "Not LEGO (Duplo, Hot Wheels, video games, Mega Bloks, Pokemon, other toys)",
   "n": 30
  },
  {
   "why": "Shipped, not local pickup",
   "n": 7
  },
  {
   "why": "Single used sets or single minifigs at normal prices, manuals, storage bricks, displays (mostly eBay)",
   "n": 190
  },
  {
   "why": "Old Craigslist auction-house ads, Christmas tree, single Speed Champions",
   "n": 5
  },
  {
   "why": "Already on Possible Buys",
   "n": 9
  },
  {
   "why": "Technic (not interested)",
   "n": 2
  }
 ],
 "rows": [
  {
   "id": "fb-2224595054842399",
   "source": "Facebook Marketplace",
   "price": 650,
   "title": "LEGO Star Wars UCS Razor Crest (75331)",
   "town": "Brookfield, CT",
   "url": "https://www.facebook.com/marketplace/item/2224595054842399/",
   "status": "Waiting for review",
   "note": "Sealed, but a retired UCS set: check if it's under market"
  },
  {
   "id": "fb-1016006084877127",
   "source": "Facebook Marketplace",
   "price": 950,
   "title": "Sealed Lord of the Rings 9473 Mines of Moria + 9471 Uruk-hai Army",
   "town": "Danbury, CT",
   "url": "https://www.facebook.com/marketplace/item/1016006084877127/",
   "status": "Waiting for review",
   "note": "Retired LOTR, sealed"
  },
  {
   "id": "fb-2422511871616077",
   "source": "Facebook Marketplace",
   "price": 650,
   "title": "Star Wars sets (several boxes), was $775",
   "town": "Bristol, CT",
   "url": "https://www.facebook.com/marketplace/item/2422511871616077/",
   "status": "Waiting for review",
   "note": "Several boxed Star Wars sets in the photo"
  },
  {
   "id": "fb-3516760208503761",
   "source": "Facebook Marketplace",
   "price": 300,
   "title": "Legos",
   "town": "Bristol, CT",
   "url": "https://www.facebook.com/marketplace/item/3516760208503761/",
   "status": "Waiting for review",
   "note": "Bags of mixed LEGO"
  },
  {
   "id": "fb-1149231631189407",
   "source": "Facebook Marketplace",
   "price": 200,
   "title": "Yoda 2002 LEGO set #7194 (UCS)",
   "town": "Ansonia, CT",
   "url": "https://www.facebook.com/marketplace/item/1149231631189407/",
   "status": "Waiting for review",
   "note": "Built, best offer"
  },
  {
   "id": "fb-1674330497766731",
   "source": "Facebook Marketplace",
   "price": 1200,
   "title": "LEGO Wild West Limited Edition Gift Pack 6755 6712 6716 (vintage, used, incomplete)",
   "town": "",
   "url": "https://www.facebook.com/marketplace/item/1674330497766731/",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "fb-1453984126801667",
   "source": "Facebook Marketplace",
   "price": 179,
   "title": "LEGO sets (was $199)",
   "town": "Pound Ridge, NY",
   "url": "https://www.facebook.com/marketplace/item/1453984126801667/",
   "status": "Waiting for review",
   "note": "No title, photo looks like a built set"
  },
  {
   "id": "fb-3052919625043692",
   "source": "Facebook Marketplace",
   "price": 100,
   "title": "LEGO Harry Potter Hogwarts Chamber of Secrets 76389",
   "town": "Bridgeport, CT",
   "url": "https://www.facebook.com/marketplace/item/3052919625043692/",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "fb-931748613239213",
   "source": "Facebook Marketplace",
   "price": 65,
   "title": "LEGO Dinosaur, James Bond, Pokemon",
   "town": "Waterbury, CT",
   "url": "https://www.facebook.com/marketplace/item/931748613239213/",
   "status": "Waiting for review",
   "note": "Also on eBay"
  },
  {
   "id": "fb-1183909434098734",
   "source": "Facebook Marketplace",
   "price": 60,
   "title": "Local pickup only, price firm, cash only",
   "town": "Bristol, CT",
   "url": "https://www.facebook.com/marketplace/item/1183909434098734/",
   "status": "Waiting for review",
   "note": "Photo shows small gray Star Wars ships"
  },
  {
   "id": "fb-1151358924197052",
   "source": "Facebook Marketplace",
   "price": 60,
   "title": "LEGO set (was $100)",
   "town": "Brookfield, CT",
   "url": "https://www.facebook.com/marketplace/item/1151358924197052/",
   "status": "Waiting for review",
   "note": "No title"
  },
  {
   "id": "fb-1160829076812148",
   "source": "Facebook Marketplace",
   "price": 650,
   "title": "(no title in search results)",
   "town": "",
   "url": "https://www.facebook.com/marketplace/item/1160829076812148/",
   "status": "Waiting for review",
   "note": "Check what it is"
  },
  {
   "id": "fb-4200818656886865",
   "source": "Facebook Marketplace",
   "price": 40,
   "title": "Marvel legends",
   "town": "New Haven, CT",
   "url": "https://www.facebook.com/marketplace/item/4200818656886865/",
   "status": "Waiting for review",
   "note": "Probably not LEGO"
  },
  {
   "id": "cl-4jjnaZug98c21wRqnvbgnd",
   "source": "Craigslist",
   "price": 25.0,
   "title": "LEGO Collection",
   "town": "Fairfield",
   "url": "https://www.craigslist.org/view/d/fairfield-lego-collection/4jjnaZug98c21wRqnvbgnd",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "cl-jzrSvqZPQzd7HTkwaMyWxP",
   "source": "Craigslist",
   "price": 200.0,
   "title": "legos legos legos",
   "town": "Trumbull",
   "url": "https://www.craigslist.org/view/d/trumbull-legos-legos-legos/jzrSvqZPQzd7HTkwaMyWxP",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "cl-2sLDGQ5XTEzqcKsnLWEMCi",
   "source": "Craigslist",
   "price": 485.0,
   "title": "Lego Star Trek Enterprise With Shuttle",
   "town": "Danbury",
   "url": "https://www.craigslist.org/view/d/danbury-lego-star-trek-enterprise-with/2sLDGQ5XTEzqcKsnLWEMCi",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "cl-3qhLUR5mdpa6PXsHa574vx",
   "source": "Craigslist",
   "price": 400.0,
   "title": "Lego Star Trek Enterprise",
   "town": "Danbury",
   "url": "https://www.craigslist.org/view/d/danbury-lego-star-trek-enterprise/3qhLUR5mdpa6PXsHa574vx",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "cl-8TpHy97Ki2v1HS6rxM2AEP",
   "source": "Craigslist",
   "price": 200.0,
   "title": "Lego VW T1 Camper Van",
   "town": "fairfield co, CT",
   "url": "https://www.craigslist.org/view/d/shelton-lego-vw-t1-camper-van/8TpHy97Ki2v1HS6rxM2AEP",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-327472960934",
   "source": "eBay (local pickup)",
   "price": 170,
   "title": "Bionicle Phantoka (2008) lot of 12",
   "town": "~5 mi",
   "url": "https://www.ebay.com/itm/327472960934",
   "status": "Waiting for review",
   "note": "Auction, ends in about 3 days"
  },
  {
   "id": "eb-800397491174",
   "source": "eBay (local pickup)",
   "price": 130,
   "title": "11 organized LEGO bins + bases (Friends, Disney, Star Wars pieces)",
   "town": "~10 mi",
   "url": "https://www.ebay.com/itm/800397491174",
   "status": "Waiting for review",
   "note": "Friends pieces mixed in"
  },
  {
   "id": "eb-840046394021",
   "source": "eBay (local pickup)",
   "price": 60,
   "title": "Lot of 5 Ninjago sets, missing pieces",
   "town": "~10 mi",
   "url": "https://www.ebay.com/itm/840046394021",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-335833957800",
   "source": "eBay (local pickup)",
   "price": 99.95,
   "title": "Giant box of 13.5 lb assorted LEGO",
   "town": "~15 mi",
   "url": "https://www.ebay.com/itm/335833957800",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-128204721579",
   "source": "eBay (local pickup)",
   "price": 50,
   "title": "Miscellaneous bricks, pieces from different sets",
   "town": "~20 mi",
   "url": "https://www.ebay.com/itm/128204721579",
   "status": "Waiting for review",
   "note": "Auction, ends in about 2 days"
  },
  {
   "id": "eb-407063992949",
   "source": "eBay (local pickup)",
   "price": 35,
   "title": "Mixed LEGO lot, pre-sorted bags, large yellow storage case",
   "town": "~20 mi",
   "url": "https://www.ebay.com/itm/407063992949",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-206368239386",
   "source": "eBay (local pickup)",
   "price": 94.99,
   "title": "Ninjago minifigures villain lot of 13",
   "town": "~25 mi",
   "url": "https://www.ebay.com/itm/206368239386",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-137872334069",
   "source": "eBay (local pickup)",
   "price": 800,
   "title": "Harry Potter LEGO sets",
   "town": "~25 mi",
   "url": "https://www.ebay.com/itm/137872334069",
   "status": "Waiting for review",
   "note": ""
  },
  {
   "id": "eb-235575152918",
   "source": "eBay (local pickup)",
   "price": 70,
   "title": "Pink LEGO storage box, large, with LEGO",
   "town": "~25 mi",
   "url": "https://www.ebay.com/itm/235575152918",
   "status": "Waiting for review",
   "note": "Probably Friends-heavy"
  }
 ]
};
