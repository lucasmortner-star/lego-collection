// Estate sales, garage sales and local auctions that mention LEGO, found by the weekly
// Thursday check (scheduled task "weekly-lego-estate-sale-check") and shown on
// Possible Buys > Weekend sales. Past sales are removed by the next check.
// Each sale: { id, type: "Estate sale" | "Garage sale" | "Auction", name, source, url,
//   town, address (optional, as listed), days: [{ date: "2026-11-28", hours: "9am–3pm" }],
//   lego: "what the listing says or shows about LEGO", photo: "sales/<id>/01.jpg" (optional),
//   worthTrip: true/false, note: "why it's worth a trip, or not", checked: "2026-11-27" }
const SALES = [];
