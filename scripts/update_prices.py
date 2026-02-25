#!/usr/bin/env python3
"""
LEGO Collection Price Updater
Scrapes current used/complete sale prices from BrickLink's Price Guide
and updates data.js with fresh market data.

Designed to run via GitHub Actions on a daily cron schedule.

Data source: BrickLink Price Guide (Last 6 Months Used Sales)
This gives the most accurate picture of what sets actually sell for
in used/built/complete condition on the secondary market.
"""

import re
import time
import random
import os
import sys
from datetime import datetime

import requests
from bs4 import BeautifulSoup

# --- Configuration ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
DATA_FILE = os.path.join(PROJECT_DIR, "data.js")
INDEX_FILE = os.path.join(PROJECT_DIR, "index.html")

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
)
HEADERS = {
    "User-Agent": USER_AGENT,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}
REQUEST_DELAY = (2, 4)  # Seconds between requests (be polite to BrickLink)

BRICKLINK_PG_URL = "https://www.bricklink.com/catalogPG.asp?S={set_number}-1&ColorID=0"


# ──────────────────────────────────────────────────
# 1. Parse data.js
# ──────────────────────────────────────────────────
def read_data_js(filepath):
    """Parse data.js and return list of set dicts + raw file content."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    sets_match = re.search(r'sets:\s*\[(.*?)\],\s*\n\s*categories:', content, re.DOTALL)
    if not sets_match:
        print("ERROR: Could not parse sets array from data.js")
        sys.exit(1)

    sets = []
    for obj_match in re.finditer(r'\{([^}]+)\}', sets_match.group(1)):
        obj_str = obj_match.group(1)
        entry = {}
        for key in ['num', 'setNumber', 'name', 'theme', 'category',
                     'year', 'pieces', 'retail', 'condition', 'currentValue', 'growth']:
            str_m = re.search(rf'{key}:\s*"([^"]*)"', obj_str)
            if str_m:
                entry[key] = str_m.group(1)
                continue
            num_m = re.search(rf'{key}:\s*([\d.]+)', obj_str)
            if num_m:
                val = num_m.group(1)
                entry[key] = float(val) if '.' in val else int(val)
        if 'setNumber' in entry:
            sets.append(entry)

    return sets, content


# ──────────────────────────────────────────────────
# 2. Fetch prices from BrickLink
# ──────────────────────────────────────────────────
def fetch_bricklink_price(set_number, session):
    """
    Fetch the Used/Complete average sale price from BrickLink's Price Guide.

    BrickLink's price guide page has a summary table with this structure:
        Last 6 Months Sales:        | Current Items for Sale:
           New       | Used         |    New       | Used
        (4 stats)    | (4 stats)    | (4 stats)    | (4 stats)

    Each section has: Times Sold/Total Lots, Total Qty, Min Price, Avg Price,
                      Qty Avg Price, Max Price

    We extract "Used - Last 6 Months Sales - Avg Price" which represents
    the average actual sold price for used/complete sets.
    """
    if not set_number or set_number == "N/A" or len(set_number) > 15:
        return None

    url = BRICKLINK_PG_URL.format(set_number=set_number)

    try:
        resp = session.get(url, headers=HEADERS, timeout=15)
        if resp.status_code != 200:
            return None

        soup = BeautifulSoup(resp.text, "html.parser")

        # Find summary stat cells: "Times Sold:XX...Avg Price:US $XXX"
        # These appear in order: [New 6mo, Used 6mo, New current, Used current]
        sold_avgs = []
        for td in soup.find_all('td'):
            text = td.get_text().replace('\xa0', ' ').strip()
            if text.startswith('Times Sold:') and 'Avg Price:' in text:
                avg_match = re.search(r'Avg Price:\s*US\s*\$([\d,]+(?:\.\d{2})?)', text)
                if avg_match:
                    sold_avgs.append(float(avg_match.group(1).replace(',', '')))

        # Also collect "Total Lots" cells (Current Items for Sale averages)
        listing_avgs = []
        for td in soup.find_all('td'):
            text = td.get_text().replace('\xa0', ' ').strip()
            if text.startswith('Total Lots:') and 'Avg Price:' in text:
                avg_match = re.search(r'Avg Price:\s*US\s*\$([\d,]+(?:\.\d{2})?)', text)
                if avg_match:
                    listing_avgs.append(float(avg_match.group(1).replace(',', '')))

        # Priority: Used 6-month sold avg > Used current listing avg
        # sold_avgs: [New 6mo, Used 6mo]
        # listing_avgs: [New current, Used current]

        if len(sold_avgs) >= 2 and sold_avgs[1] > 0:
            return round(sold_avgs[1], 2)

        # Fallback: use current used listing average
        if len(listing_avgs) >= 2 and listing_avgs[1] > 0:
            return round(listing_avgs[1], 2)

        # Last fallback: any sold average
        if len(sold_avgs) >= 1 and sold_avgs[0] > 0:
            return round(sold_avgs[0], 2)

        return None

    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.RequestException:
        return None
    except Exception as e:
        print(f" [parse error: {e}]", end="")
        return None


# ──────────────────────────────────────────────────
# 3. Calculate growth rate
# ──────────────────────────────────────────────────
def calculate_growth_rate(current_value, retail_price, year_released):
    """Compound Annual Growth Rate (CAGR) from retail to current value."""
    if retail_price <= 0 or current_value <= retail_price:
        return None
    years = max(datetime.now().year - year_released, 1)
    cagr = (current_value / retail_price) ** (1 / years) - 1
    return round(cagr, 2)


# ──────────────────────────────────────────────────
# 4. Write updated prices to data.js
# ──────────────────────────────────────────────────
def update_data_js(filepath, original_content, sets, updated_prices):
    """Patch currentValue (and optionally growth) in data.js for each set."""
    content = original_content
    update_count = 0
    now = datetime.now().strftime("%b %Y")

    for s in sets:
        set_num = s['setNumber']
        if set_num not in updated_prices or updated_prices[set_num] is None:
            continue

        new_value = updated_prices[set_num]
        old_value = s.get('currentValue', 0)

        # Round to nearest dollar for clean display
        new_value = round(new_value)

        if new_value == old_value:
            continue

        # Replace currentValue for this set
        escaped = re.escape(set_num)
        pattern = rf'(setNumber:\s*"{escaped}"[^}}]*?currentValue:\s*)([\d.]+)'
        new_content = re.sub(pattern, rf'\g<1>{new_value}', content)

        if new_content != content:
            content = new_content
            update_count += 1
            delta = new_value - old_value
            arrow = "+" if delta >= 0 else ""
            print(f"  {set_num}: ${old_value} -> ${new_value} ({arrow}{delta})")

            # Update growth rate if meaningful
            new_growth = calculate_growth_rate(
                new_value, s.get('retail', 0), s.get('year', 2020)
            )
            if new_growth is not None and new_growth > 0:
                gp = rf'(setNumber:\s*"{escaped}"[^}}]*?growth:\s*)([\d.]+)'
                content = re.sub(gp, rf'\g<1>{new_growth}', content)

    # Update the date in file comment
    content = re.sub(
        r"(Ortner's Collection - )\w+ \d{4}",
        rf"\g<1>{now}",
        content
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    return update_count


def update_html_date():
    """Update the 'Updated XXX 2026' date in index.html."""
    if not os.path.exists(INDEX_FILE):
        return
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        html = f.read()
    now = datetime.now().strftime("%b %Y")
    html = re.sub(
        r"(Ortner's Collection\s*&middot;\s*Updated\s*)\w+ \d{4}",
        rf"\g<1>{now}",
        html
    )
    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Updated date to '{now}' in index.html")


# ──────────────────────────────────────────────────
# 5. Main
# ──────────────────────────────────────────────────
def main():
    print("=" * 60)
    print(f"LEGO Collection Price Updater")
    print(f"Source: BrickLink Price Guide (Used / Last 6 Months)")
    print(f"Run: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # Read current data
    print(f"\nReading {DATA_FILE}...")
    sets, original_content = read_data_js(DATA_FILE)
    print(f"Found {len(sets)} sets in collection\n")

    # Fetch updated prices
    session = requests.Session()
    updated_prices = {}
    fetched = 0
    failed = 0
    skipped = 0

    for i, s in enumerate(sets):
        set_num = s['setNumber']
        name = s.get('name', 'Unknown')

        # Skip entries without standard set numbers
        if not set_num or set_num == "N/A" or len(set_num) > 10:
            print(f"[{i+1}/{len(sets)}] SKIP  {name} (no standard set number)")
            skipped += 1
            continue

        print(f"[{i+1}/{len(sets)}] {set_num} {name}...", end="")

        price = fetch_bricklink_price(set_num, session)

        if price is not None:
            updated_prices[set_num] = price
            old = s.get('currentValue', 0)
            delta = round(price - old)
            arrow = "+" if delta >= 0 else ""
            print(f" ${price:,.2f} ({arrow}{delta} from ${old})")
            fetched += 1
        else:
            print(f" FAILED")
            failed += 1

        # Polite delay
        time.sleep(random.uniform(*REQUEST_DELAY))

    # Summary
    print(f"\n{'=' * 60}")
    print(f"Results: {fetched} fetched, {failed} failed, {skipped} skipped")

    if fetched == 0:
        print("No prices fetched. data.js unchanged.")
        sys.exit(0)

    # Update data.js
    print(f"\nWriting updates to data.js...")
    count = update_data_js(DATA_FILE, original_content, sets, updated_prices)
    print(f"\n{count} values updated in data.js")

    # Update HTML date
    update_html_date()

    print("\nDone!")


if __name__ == "__main__":
    main()
