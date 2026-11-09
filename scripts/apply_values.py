#!/usr/bin/env python3
"""
Apply BrickLink New (boxed) and Used values to data.js and record them in
price-history.js.

Input is a JSON file of {"<setNumber>": {"new": 352.5, "used": 241.0}, ...},
e.g. read from BrickLink's Price Guide (Last 6 Months Sales, Avg Price).
Values are rounded to the dollar. Sets missing from the file are left alone.

    python scripts/apply_values.py values.json [--source BrickEconomy]
"""

import json
import os
import re
import sys

from record_prices import record

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(os.path.dirname(SCRIPT_DIR), "data.js")


def set_field(line, field, value):
    """Set `field: value` on a one-line set object, adding it before the closing brace."""
    if re.search(rf'\b{field}:\s*[\d.]+', line):
        return re.sub(rf'(\b{field}:\s*)[\d.]+', rf'\g<1>{value}', line)
    return re.sub(r'\s*\},?\s*$', lambda m: f', {field}: {value}' + m.group(0), line, count=1)


def apply(values, filepath=DATA_FILE):
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.read().split("\n")
    updated = 0
    for i, line in enumerate(lines):
        m = re.search(r'setNumber:\s*"([^"]+)"', line)
        if not m or m.group(1) not in values:
            continue
        v = values[m.group(1)]
        new_line = line
        if v.get("new"):
            new_line = set_field(new_line, "valueNew", round(v["new"]))
        if v.get("used"):
            new_line = set_field(new_line, "valueUsed", round(v["used"]))
        if new_line != line:
            lines[i] = new_line
            updated += 1
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    return updated


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    source = None
    if "--source" in args:
        i = args.index("--source")
        source = args[i + 1]
        del args[i:i + 2]
    with open(args[0], "r", encoding="utf-8") as f:
        values = json.load(f)
    print(f"Updated {apply(values)} sets in data.js")
    points = record({n: {k: v[k] for k in ("new", "used") if v.get(k)} for n, v in values.items()}, source=source)
    print(f"Recorded {points} price points in price-history.js")


if __name__ == "__main__":
    main()
