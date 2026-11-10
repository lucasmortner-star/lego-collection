#!/usr/bin/env python3
"""
Fetch a set's parts inventory from Brickset and save it as
inventories/<setNumber>.json for the missing-pieces picker on the site.

Each part is [elementId, qty, colour, category, name]; images come from
https://images.brickset.com/parts/<elementId>.jpg

    python3 scripts/fetch_inventory.py 10937 [75192 ...]
"""

import json
import os
import sys
import subprocess
import time
from html.parser import HTMLParser

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(PROJECT_DIR, "inventories")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36"


class FirstTable(HTMLParser):
    """Collect the cell text of every row in the page's first <table> (the parts list)."""

    def __init__(self):
        super().__init__()
        self.tables_seen = 0
        self.in_first = False
        self.rows, self.row, self.cell = [], None, None

    def handle_starttag(self, tag, attrs):
        if tag == "table":
            self.tables_seen += 1
            self.in_first = self.tables_seen == 1
        elif self.in_first and tag == "tr":
            self.row = []
        elif self.in_first and tag == "td" and self.row is not None:
            self.cell = []

    def handle_endtag(self, tag):
        if tag == "table":
            self.in_first = False
        elif self.in_first and tag == "td" and self.cell is not None:
            self.row.append(" ".join("".join(self.cell).split()))
            self.cell = None
        elif self.in_first and tag == "tr" and self.row:
            self.rows.append(self.row)
            self.row = None

    def handle_data(self, data):
        if self.cell is not None:
            self.cell.append(data)


def fix_text(s):
    # Brickset serves a few names double-encoded (e.g. "Â°" for "°")
    return s.replace("Ã˜", "Ø").replace("Â°", "°").replace("Â½", "½")


def fetch(set_number):
    # curl rather than urllib: it uses the system certificate store
    html = subprocess.run(
        ["curl", "-s", "-A", UA, "--max-time", "30", f"https://brickset.com/inventories/{set_number}-1"],
        capture_output=True, check=True,
    ).stdout.decode("utf-8", "replace")
    parser = FirstTable()
    parser.feed(html)
    parts = []
    for r in parser.rows:
        if len(r) < 7 or not r[0]:
            continue
        qty = int(r[2]) if r[2].isdigit() else 1
        parts.append([r[0], qty, r[3], r[4], fix_text(r[6])])
    return parts


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for i, n in enumerate(sys.argv[1:]):
        if i:
            time.sleep(3)
        parts = fetch(n)
        if not parts:
            print(f"{n}: no inventory found")
            continue
        with open(os.path.join(OUT_DIR, f"{n}.json"), "w", encoding="utf-8") as f:
            json.dump(parts, f, ensure_ascii=False, separators=(",", ":"))
        print(f"{n}: {len(parts)} parts, {sum(p[1] for p in parts)} pieces")


if __name__ == "__main__":
    main()
