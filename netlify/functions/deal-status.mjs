// Moves a Possible Buys listing to another status ("Considering", "Passed", "Bought", "New")
// by committing the change to deals-data.js on GitHub; Netlify then redeploys the site.
// Needs two environment variables in Netlify (Site configuration > Environment variables):
//   GITHUB_TOKEN   fine-grained token with Contents: read & write on lucasmortner-star/lego-collection
//   DEALS_PASSCODE a family passcode the page asks for once (stops strangers changing the list)
const REPO = 'lucasmortner-star/lego-collection';
const FILE = 'deals-data.js';
const STATUSES = ['New', 'Considering', 'Offered', 'Bought', 'Passed'];

const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'POST only' });
  const { GITHUB_TOKEN, DEALS_PASSCODE } = process.env;
  if (!GITHUB_TOKEN || !DEALS_PASSCODE) return json(500, { error: 'Not set up yet: GITHUB_TOKEN and DEALS_PASSCODE are missing in Netlify.' });
  let body;
  try { body = await req.json(); } catch { return json(400, { error: 'Bad request' }); }
  const { id, status, reason, passcode } = body || {};
  if (passcode !== DEALS_PASSCODE) return json(401, { error: 'Wrong passcode' });
  if (!/^[a-z0-9-]+$/i.test(id || '') || !STATUSES.includes(status)) return json(400, { error: 'Bad id or status' });

  const api = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
  const headers = { authorization: `Bearer ${GITHUB_TOKEN}`, accept: 'application/vnd.github+json', 'user-agent': 'lego-collection-site' };
  for (let attempt = 0; attempt < 3; attempt++) {
    const cur = await fetch(`${api}?ref=main`, { headers });
    if (!cur.ok) return json(502, { error: `GitHub read failed (${cur.status})` });
    const meta = await cur.json();
    let text = Buffer.from(meta.content, 'base64').toString('utf8');

    // Find this listing's object and its status line
    const at = text.indexOf(`id: "${id}"`);
    if (at < 0) return json(404, { error: 'Listing not found' });
    const nextEntry = text.indexOf('\n  {', at);
    const end = nextEntry < 0 ? text.length : nextEntry;
    const entry = text.slice(at, end);
    const m = entry.match(/status: "([A-Za-z]+)"/);
    if (!m) return json(500, { error: 'No status on that listing' });
    let updated = entry.replace(m[0], `status: "${status}"`);
    const today = new Date().toISOString().slice(0, 10);
    if (status === 'Passed') {
      const r = String(reason || '').trim().slice(0, 600).replace(/\\/g, '').replace(/"/g, '\\"').replace(/\s+/g, ' ');
      const note = r || 'Passed from the New finds tab.';
      updated = /passReason: "/.test(updated)
        ? updated.replace(/passReason: "(?:[^"\\]|\\.)*"/, `passReason: "${note}"`)
        : updated.replace(`status: "${status}"`, `status: "${status}",\n    passReason: "${note}"`);
    }
    if (!/statusChanged: "/.test(updated)) updated = updated.replace(`status: "${status}"`, `status: "${status}",\n    statusChanged: "${today}"`);
    else updated = updated.replace(/statusChanged: "[^"]*"/, `statusChanged: "${today}"`);
    text = text.slice(0, at) + updated + text.slice(end);

    const put = await fetch(api, {
      method: 'PUT', headers,
      body: JSON.stringify({
        message: `Possible Buys: move ${id} to ${status} (from the website)`,
        content: Buffer.from(text, 'utf8').toString('base64'),
        sha: meta.sha, branch: 'main'
      })
    });
    if (put.ok) return json(200, { ok: true, id, status });
    if (put.status !== 409 && put.status !== 422) return json(502, { error: `GitHub save failed (${put.status})` });
  }
  return json(409, { error: 'The list changed at the same time, try again' });
};
