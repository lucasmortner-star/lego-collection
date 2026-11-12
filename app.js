// ========================================
// LEGO Collection Value Tracker - App Logic
// ========================================

(function() {
  'use strict';

  // --- State ---
  let currentPage = 'collection'; // 'collection' or 'wishlist'
  let currentView = 'table';
  let currentSort = { key: 'num', dir: 'asc' };
  let activeThemeFilter = null;
  let activeConditionFilter = null;
  let searchQuery = '';

  // Wishlist state
  let wishlistFilter = 'all';
  let wishlistSearch = '';

  // Minifigs state
  let minifigsFranchiseFilter = 'all';  // 'all' | 'Star Wars' | 'Harry Potter' | 'Lord of the Rings'
  let minifigsOwnedFilter = 'all';      // 'all' | 'owned' | 'need'
  let minifigsSearch = '';

  // --- Computed data ---
  const sets = LEGO_DATA.sets.map(s => ({
    ...s,
    projectedValue: +(s.currentValue * Math.pow(1 + s.growth, 3)).toFixed(2),
    appreciation: s.currentValue - s.retail,
    appreciationPct: s.retail > 0 ? ((s.currentValue - s.retail) / s.retail * 100) : 0,
    // What we actually paid, when logged (paid: 0 means it was free, e.g. a gift with purchase)
    paid: typeof s.paid === 'number' ? s.paid : null,
    gainVsPaid: typeof s.paid === 'number' ? s.currentValue - s.paid : null,
    // BrickLink 6-month averages: new in a sealed box, and used
    bought: s.bought || null,
    valueNew: s.valueNew > 0 ? s.valueNew : null,
    valueUsed: s.valueUsed > 0 ? s.valueUsed : null
  }));

  const summary = {
    totalSets: sets.length,
    totalRetail: sets.reduce((a, s) => a + s.retail, 0),
    totalCurrent: sets.reduce((a, s) => a + s.currentValue, 0),
    totalProjected: sets.reduce((a, s) => a + s.projectedValue, 0),
  };
  summary.totalPieces = sets.reduce((a, s) => a + s.pieces, 0);
  summary.appreciation = summary.totalCurrent - summary.totalRetail;
  summary.appreciationPct = (summary.appreciation / summary.totalRetail * 100);
  summary.projectedGrowth = summary.totalProjected - summary.totalCurrent;
  const paidSets = sets.filter(s => s.paid !== null);
  summary.paidCount = paidSets.length;
  summary.totalPaid = paidSets.reduce((a, s) => a + s.paid, 0);
  summary.paidSetsValue = paidSets.reduce((a, s) => a + s.currentValue, 0);

  // Theme stats
  const themeStats = {};
  LEGO_DATA.categories.forEach(cat => {
    const catSets = sets.filter(s => s.category === cat.key);
    themeStats[cat.key] = {
      count: catSets.length,
      value: catSets.reduce((a, s) => a + s.currentValue, 0),
      retail: catSets.reduce((a, s) => a + s.retail, 0),
    };
  });

  // --- Utility ---
  function fmt(n) {
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  function fmtFull(n) {
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function pct(n) {
    return (n >= 0 ? '+' : '') + n.toFixed(1) + '%';
  }

  function getConditionClass(c) {
    if (c.includes('Built')) return 'built';
    if (c.includes('Building')) return 'building';
    if (c === 'To Build') return 'to-build';
    if (c.includes('Way')) return 'on-the-way';
    return 'used';
  }

  function getGrowthClass(g) {
    if (g >= 0.08) return 'high';
    if (g >= 0.05) return 'medium';
    return 'low';
  }

  function getCategoryColor(catKey) {
    const cat = LEGO_DATA.categories.find(c => c.key === catKey);
    return cat ? cat.color : '#888';
  }

  function getCategoryIcon(catKey) {
    const cat = LEGO_DATA.categories.find(c => c.key === catKey);
    return cat ? cat.icon : '';
  }

  function getCategoryLabel(catKey) {
    const cat = LEGO_DATA.categories.find(c => c.key === catKey);
    return cat ? cat.label : catKey;
  }

  // --- Filter & Sort ---
  function getFilteredSets() {
    let result = [...sets];
    if (activeThemeFilter) {
      result = result.filter(s => s.category === activeThemeFilter);
    }
    if (activeConditionFilter) {
      result = result.filter(s => s.condition === activeConditionFilter);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.setNumber.toLowerCase().includes(q) ||
        s.theme.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        String(s.year).includes(q)
      );
    }
    return result;
  }

  function sortSets(arr) {
    const { key, dir } = currentSort;
    const mult = dir === 'asc' ? 1 : -1;

    return arr.sort((a, b) => {
      let va = a[key], vb = b[key];
      // Sets without a value (e.g. no purchase price logged) always sort last
      if (va === null || vb === null) return (va === null) - (vb === null);
      if (typeof va === 'string') {
        return mult * va.localeCompare(vb);
      }
      return mult * (va - vb);
    });
  }

  // --- Render Stats ---
  function renderStats() {
    const grid = document.getElementById('statsGrid');
    const cards = [
      { label: 'Total Sets', value: summary.totalSets, sub: summary.totalPieces.toLocaleString() + ' pieces combined' },
      { label: 'Original Retail', value: fmt(summary.totalRetail), sub: 'total invested' },
      { label: 'Current Value', value: fmt(summary.totalCurrent), cls: 'accent', sub: 'avg recent BrickLink sale' },
      { label: 'Appreciation', value: fmt(summary.appreciation), cls: 'green', sub: pct(summary.appreciationPct) + ' overall return' },
      { label: '3-Year Projected', value: fmt(summary.totalProjected), sub: '+' + fmt(summary.projectedGrowth) + ' projected growth' },
      { label: 'Avg. Set Value', value: fmt(summary.totalCurrent / summary.totalSets), sub: 'per set average' },
    ];
    const boxedSets = sets.filter(s => s.valueNew !== null && s.valueUsed !== null);
    if (boxedSets.length) {
      const priced = `${boxedSets.length} of ${summary.totalSets} sets priced`;
      cards.push(
        { label: 'Value Boxed', value: fmt(boxedSets.reduce((a, s) => a + s.valueNew, 0)), sub: `new, sealed &middot; ${priced}` },
        { label: 'Value Used', value: fmt(boxedSets.reduce((a, s) => a + s.valueUsed, 0)), sub: `complete, used &middot; ${priced}` }
      );
    }
    if (summary.paidCount) {
      const gain = summary.paidSetsValue - summary.totalPaid;
      cards.push({
        label: 'What We Paid',
        value: fmt(summary.totalPaid),
        cls: '',
        sub: `${summary.paidCount} of ${summary.totalSets} sets logged &middot; now worth ${fmt(summary.paidSetsValue)} (${gain >= 0 ? '+' : '-'}${fmt(Math.abs(gain))})`
      });
    }

    grid.innerHTML = cards.map(c => `
      <div class="stat-card">
        <div class="stat-label">${c.label}</div>
        <div class="stat-value ${c.cls || ''}">${c.value}</div>
        <div class="stat-sub">${c.sub}</div>
      </div>
    `).join('');
  }

  // --- Render Theme Breakdown ---
  function renderThemeBreakdown() {
    // Remove any active bar info before re-rendering
    const existingInfo = document.querySelector('.theme-bar-info');
    if (existingInfo) existingInfo.remove();

    const bar = document.getElementById('themeBar');
    const legend = document.getElementById('themeLegend');

    const total = summary.totalCurrent;
    const sortedCats = [...LEGO_DATA.categories].sort((a, b) => themeStats[b.key].value - themeStats[a.key].value);

    bar.innerHTML = sortedCats.map(cat => {
      const stats = themeStats[cat.key];
      const widthPct = (stats.value / total * 100);
      if (widthPct < 0.5) return '';
      return `<div class="theme-bar-segment"
        style="width:${widthPct}%;background:${cat.color}"
        data-cat="${cat.key}"
        title="${cat.label}: ${fmt(stats.value)} (${widthPct.toFixed(1)}%)">${widthPct > 8 ? fmt(stats.value) : ''}</div>`;
    }).join('');

    legend.innerHTML = sortedCats.map(cat => {
      const stats = themeStats[cat.key];
      const isActive = activeThemeFilter === cat.key;
      return `<button class="theme-pill ${isActive ? 'active' : ''}" data-cat="${cat.key}">
        <span class="dot" style="background:${cat.color}"></span>
        ${cat.icon} ${cat.label}
        <span class="count">${stats.count}</span>
      </button>`;
    }).join('');
  }

  // --- Render Table ---
  function renderTable() {
    const tbody = document.getElementById('tableBody');
    const filtered = getFilteredSets();
    const sorted = sortSets(filtered);

    if (sorted.length === 0) {
      tbody.innerHTML = `<tr><td colspan="14"><div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No sets found</h3>
        <p>Try adjusting your search or filter</p>
      </div></td></tr>`;
      updateResultsCount(0);
      return;
    }

    updateResultsCount(sorted.length);

    // Group by category if in default sort and no search
    const useGroups = currentSort.key === 'num' && currentSort.dir === 'asc' && !searchQuery;

    // When grouping, sort by category so all sets in the same category are contiguous
    if (useGroups) {
      const catOrder = {};
      sorted.forEach(s => { if (!(s.category in catOrder)) catOrder[s.category] = Object.keys(catOrder).length; });
      sorted.sort((a, b) => catOrder[a.category] - catOrder[b.category] || a.num - b.num);
    }

    let html = '';
    let lastCatTable = '';

    sorted.forEach(s => {
      if (useGroups && s.category !== lastCatTable) {
        lastCatTable = s.category;
        const catSets = sorted.filter(x => x.category === s.category);
        const catValue = catSets.reduce((a, x) => a + x.currentValue, 0);
        html += `<tr class="category-row"><td colspan="14">${getCategoryIcon(s.category)} ${getCategoryLabel(s.category)} <span class="category-row-stats">${catSets.length} sets &middot; ${fmt(catValue)}</span></td></tr>`;
      }

      const apprClass = s.appreciation >= 0 ? 'positive' : 'negative';
      const apprSymbol = s.appreciation >= 0 ? '↑' : '↓';

      html += `<tr class="ph-clickable" data-set="${s.setNumber}" title="Show price history">
        <td>${s.num}</td>
        <td><span class="set-number">${s.setNumber}</span></td>
        <td><span class="set-name">${s.name}</span>${retiringBadge(s.setNumber)}${missingBadge(s)}</td>
        <td class="hide-mobile"><span class="theme-badge"><span class="dot" style="background:${getCategoryColor(s.category)};width:6px;height:6px;border-radius:50%;display:inline-block"></span> ${s.theme}</span></td>
        <td>${s.year}</td>
        <td class="hide-mobile">${s.pieces.toLocaleString()}</td>
        <td class="hide-mobile">${s.retail > 0 ? fmtFull(s.retail) : '—'}</td>
        <td class="hide-mobile">${s.paid !== null ? fmtFull(s.paid) : '<span class="paid-missing">—</span>'}${s.boughtFrom || s.bought ? `<br><span class="bought-from">${[s.boughtFrom, s.bought && fmtDay(parseDay(s.bought))].filter(Boolean).join(' &middot; ')}</span>` : ''}</td>
        <td class="hide-mobile"><span class="condition-badge ${getConditionClass(s.condition)}">${s.condition}</span></td>
        <td>
          <span class="value-cell">${fmt(s.currentValue)}</span>
          <br><span class="appreciation ${apprClass}">${apprSymbol} ${s.retail > 0 ? pct(s.appreciationPct) : '—'}</span>
        </td>
        <td class="hide-mobile">${s.valueNew !== null ? fmt(s.valueNew) : '<span class="paid-missing">—</span>'}</td>
        <td class="hide-mobile">${s.valueUsed !== null ? fmt(s.valueUsed) : '<span class="paid-missing">—</span>'}</td>
        <td class="hide-mobile"><span class="growth-badge ${getGrowthClass(s.growth)}">${(s.growth * 100).toFixed(0)}% / yr</span></td>
        <td class="hide-mobile value-cell">${fmt(s.projectedValue)}</td>
      </tr>`;
    });

    tbody.innerHTML = html;
  }

  // --- Render Cards ---
  function renderCards() {
    const container = document.getElementById('cardsView');
    const filtered = getFilteredSets();
    const sorted = sortSets(filtered);

    if (sorted.length === 0) {
      container.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🔍</div>
        <h3>No sets found</h3>
        <p>Try adjusting your search or filter</p>
      </div>`;
      updateResultsCount(0);
      return;
    }

    updateResultsCount(sorted.length);

    const useGroups = currentSort.key === 'num' && currentSort.dir === 'asc' && !searchQuery;

    if (useGroups) {
      const catOrder = {};
      sorted.forEach(s => { if (!(s.category in catOrder)) catOrder[s.category] = Object.keys(catOrder).length; });
      sorted.sort((a, b) => catOrder[a.category] - catOrder[b.category] || a.num - b.num);
    }

    let html = '';
    let lastCatCards = '';

    sorted.forEach(s => {
      if (useGroups && s.category !== lastCatCards) {
        lastCatCards = s.category;
        const catSets = sorted.filter(x => x.category === s.category);
        html += `<div class="category-header">
          <h2>${getCategoryIcon(s.category)} ${getCategoryLabel(s.category)}</h2>
          <span class="cat-count">${catSets.length} sets &middot; ${fmt(themeStats[s.category].value)}</span>
          <div class="cat-line"></div>
        </div>`;
      }

      const apprClass = s.appreciation >= 0 ? 'positive' : 'negative';
      const color = getCategoryColor(s.category);

      html += `<div class="set-card ph-clickable" data-set="${s.setNumber}" title="Show price history">
        <div style="display:flex;gap:12px;">
          <div class="card-category-indicator" style="background:${color}"></div>
          <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
            <div class="card-top">
              <span class="card-title">${s.name}${retiringBadge(s.setNumber)}${missingBadge(s)}</span>
              <span class="card-set-num">${s.setNumber}</span>
            </div>
            <div class="card-meta">
              <span class="card-meta-item"><strong>${s.theme}</strong></span>
              <span class="card-meta-item">&middot; ${s.year}</span>
              <span class="card-meta-item">&middot; ${s.pieces.toLocaleString()} pcs</span>
              <span class="card-meta-item">&middot; <span class="condition-badge ${getConditionClass(s.condition)}" style="padding:1px 6px;font-size:11px">${s.condition}</span></span>
            </div>
            <div class="card-values">
              <div class="card-val-block">
                <label>Orig. Retail</label>
                <div class="val">${s.retail > 0 ? fmt(s.retail) : '—'}</div>
              </div>
              ${s.paid !== null ? `<div class="card-val-block">
                <label>Paid${s.boughtFrom ? ` &middot; ${s.boughtFrom}` : ''}</label>
                <div class="val">${fmt(s.paid)}</div>
                ${s.bought ? `<div class="bought-from">${fmtDay(parseDay(s.bought))}</div>` : ''}
              </div>` : ''}
              <div class="card-val-block">
                <label>Current Value</label>
                <div class="val">${fmt(s.currentValue)}</div>
              </div>
              ${s.valueNew !== null || s.valueUsed !== null ? `<div class="card-val-block">
                <label>Boxed / Used</label>
                <div class="val">${s.valueNew !== null ? fmt(s.valueNew) : '—'} / ${s.valueUsed !== null ? fmt(s.valueUsed) : '—'}</div>
              </div>` : ''}
              <div class="card-val-block">
                <label>3-Yr Projected</label>
                <div class="val green">${fmt(s.projectedValue)}</div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span class="appreciation ${apprClass}" style="font-size:13px">${s.appreciation >= 0 ? '↑' : '↓'} ${s.retail > 0 ? pct(s.appreciationPct) : '—'} from original retail</span>
              <span class="growth-badge ${getGrowthClass(s.growth)}">${(s.growth * 100).toFixed(0)}% / yr</span>
            </div>
          </div>
        </div>
      </div>`;
    });

    container.innerHTML = html;
  }

  function updateResultsCount(count) {
    document.getElementById('resultsCount').textContent =
      `Showing ${count} of ${sets.length} sets` +
      (activeThemeFilter ? ` in ${getCategoryLabel(activeThemeFilter)}` : '') +
      (activeConditionFilter ? ` · ${activeConditionFilter}` : '') +
      (searchQuery ? ` matching "${searchQuery}"` : '');
  }

  // --- Render Collection Page ---
  function renderCollection() {
    renderStats();
    renderThemeBreakdown();
    if (currentView === 'table') {
      renderTable();
    } else {
      renderCards();
    }
  }

  // ===================================================================
  // WISHLIST
  // ===================================================================

  function getFilteredWishlist() {
    let items = WISHLIST_DATA.items || [];

    if (wishlistFilter !== 'all') {
      items = items.filter(i => i.priority === wishlistFilter);
    }

    if (wishlistSearch) {
      const q = wishlistSearch.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.setNumber.toLowerCase().includes(q) ||
        i.theme.toLowerCase().includes(q) ||
        (i.notes && i.notes.toLowerCase().includes(q)) ||
        (i.wantedBy && i.wantedBy.toLowerCase().includes(q))
      );
    }

    return items;
  }

  function renderWishlistStats() {
    const statsEl = document.getElementById('wishlistStats');
    const items = WISHLIST_DATA.items || [];

    if (items.length === 0) {
      statsEl.innerHTML = '';
      return;
    }

    const totalItems = items.length;
    const totalRetail = items.reduce((a, i) => a + (i.retail || 0), 0);
    const highPriority = items.filter(i => i.priority === 'High').length;
    const pricedUsed = items.filter(i => i.used > 0);
    const totalUsed = pricedUsed.reduce((a, i) => a + i.used, 0);

    statsEl.innerHTML = `
      <div class="wl-stat-card">
        <div class="wl-stat-label">Wishlist Items</div>
        <div class="wl-stat-value">${totalItems}</div>
      </div>
      <div class="wl-stat-card">
        <div class="wl-stat-label">Est. Total Cost</div>
        <div class="wl-stat-value accent">${fmt(totalRetail)}</div>
      </div>
      ${pricedUsed.length ? `<div class="wl-stat-card">
        <div class="wl-stat-label">Est. Total Used</div>
        <div class="wl-stat-value">${fmt(totalUsed)}</div>
        ${pricedUsed.length < items.length ? `<div class="wl-stat-sub">${pricedUsed.length} of ${items.length} sets priced</div>` : ''}
      </div>` : ''}
      <div class="wl-stat-card">
        <div class="wl-stat-label">High Priority</div>
        <div class="wl-stat-value">${highPriority}</div>
      </div>
    `;
  }

  function renderWishlistGrid() {
    const grid = document.getElementById('wishlistGrid');
    const empty = document.getElementById('wishlistEmpty');
    const items = getFilteredWishlist();

    if ((WISHLIST_DATA.items || []).length === 0) {
      grid.style.display = 'none';
      empty.style.display = '';
      return;
    }

    if (items.length === 0) {
      grid.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">
        <p>No wishlist items match your search or filter.</p>
      </div>`;
      grid.style.display = '';
      empty.style.display = 'none';
      return;
    }

    grid.style.display = '';
    empty.style.display = 'none';

    // Category metadata for the wishlist (grouping + display)
    const WL_CATEGORIES = {
      'STAR WARS':    { label: 'Star Wars',                      icon: '⭐',           color: '#FFE81F', order: 1 },
      'HARRY POTTER': { label: 'Harry Potter',                   icon: '⚡',           color: '#7B3F00', order: 2 },
      'MARVEL':       { label: 'Marvel',                         icon: '🛡️', color: '#ED1D24', order: 3 },
      'LOTR':         { label: 'Lord of the Rings / The Hobbit', icon: '💍',     color: '#C9A84C', order: 4 },
    };
    const DEFAULT_CAT = { label: 'Other', icon: '', color: '#888', order: 99 };

    // Group filtered items by category
    const groups = {};
    items.forEach(item => {
      const cat = item.category || 'OTHER';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });

    // Order categories by their defined order
    const catKeys = Object.keys(groups).sort((a, b) => {
      const oa = (WL_CATEGORIES[a] || DEFAULT_CAT).order;
      const ob = (WL_CATEGORIES[b] || DEFAULT_CAT).order;
      return oa - ob;
    });

    // Within each category, sort by priority: High → Medium → Low
    const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };

    let html = '';
    catKeys.forEach(catKey => {
      const meta = WL_CATEGORIES[catKey] || DEFAULT_CAT;
      const sorted = [...groups[catKey]].sort((a, b) => {
        const pa = priorityOrder[a.priority] ?? 1;
        const pb = priorityOrder[b.priority] ?? 1;
        return pa - pb;
      });

      html += `<div class="wl-category-header">
        <h2><span class="wl-cat-icon" style="color:${meta.color}">${meta.icon}</span> ${meta.label}</h2>
        <span class="wl-cat-count">${sorted.length} set${sorted.length === 1 ? '' : 's'}</span>
        <div class="wl-cat-line"></div>
      </div>`;

      html += sorted.map(item => {
        const prioClass = (item.priority || 'Medium').toLowerCase();
        const piecesStr = item.pieces ? `${item.pieces.toLocaleString()} pcs` : '';
        const notesHtml = item.notes ? `<div class="wl-card-notes">${item.notes}</div>` : '';

        return `<div class="wl-card ph-clickable" data-set="${item.setNumber}" title="Show price history">
          <div class="wl-priority-bar ${prioClass}"></div>
          <div class="wl-card-body">
            <div class="wl-card-header">
              <span class="wl-card-name">${item.name}</span>${retiringBadge(item.setNumber)}
              <span class="wl-card-set-num">${item.setNumber}</span>
            </div>
            <div class="wl-card-meta">
              <span>${item.theme}</span>
              ${piecesStr ? `<span>&middot; ${piecesStr}</span>` : ''}
              ${item.wantedBy ? `<span>&middot; Wanted by: <strong>${item.wantedBy}</strong></span>` : ''}
            </div>
            ${notesHtml}
          </div>
          <div class="wl-card-right">
            <span class="wl-card-price">${item.retail > 0 ? fmt(item.retail) : 'TBD'}</span>
            ${item.used > 0 ? `<span class="wl-card-used">Used ${fmt(item.used)}</span>` : ''}
            <span class="ph-hint">Price history</span>
            <span class="wl-priority-badge ${prioClass}">${item.priority || 'Medium'}</span>
          </div>
        </div>`;
      }).join('');
    });

    grid.innerHTML = html;
  }

  function renderWishlist() {
    renderWishlistStats();
    renderWishlistGrid();
  }

  // ===================================================================
  // MINIFIGS (Force-users: Jedi, Sith, Inquisitors)
  // ===================================================================

  function minifigImageUrl(m) {
    // BrickLink minifig image URL pattern; supports an explicit override via m.image
    if (m.image) return m.image;
    if (!m.id) return '';
    return `https://img.bricklink.com/ItemImage/MN/0/${m.id}.png`;
  }

  function getFilteredMinifigs() {
    let items = (MINIFIGS_DATA && MINIFIGS_DATA.minifigs) || [];

    if (minifigsFranchiseFilter !== 'all') {
      items = items.filter(m => m.franchise === minifigsFranchiseFilter);
    }

    if (minifigsOwnedFilter === 'owned') {
      items = items.filter(m => m.owned);
    } else if (minifigsOwnedFilter === 'need') {
      items = items.filter(m => !m.owned);
    }

    if (minifigsSearch) {
      const q = minifigsSearch.toLowerCase();
      items = items.filter(m =>
        m.name.toLowerCase().includes(q) ||
        (m.era || '').toLowerCase().includes(q) ||
        (m.source || '').toLowerCase().includes(q) ||
        (m.sourceSetName || '').toLowerCase().includes(q) ||
        (m.notes || '').toLowerCase().includes(q)
      );
    }

    return items;
  }

  function renderMinifigsStats() {
    const el = document.getElementById('mfStats');
    const all = (MINIFIGS_DATA && MINIFIGS_DATA.minifigs) || [];
    const owned = all.filter(m => m.owned);
    const totalOwnedCopies = owned.reduce((a, m) => a + (m.qty || 1), 0);
    const totalValue = owned.reduce((a, m) => a + (m.currentValue || 0) * (m.qty || 1), 0);
    const swCount   = owned.filter(m => m.franchise === 'Star Wars').length;
    const hpCount   = owned.filter(m => m.franchise === 'Harry Potter').length;
    const lotrCount = owned.filter(m => m.franchise === 'Lord of the Rings').length;
    const otherCount = owned.length - swCount - hpCount - lotrCount;

    el.innerHTML = `
      <div class="mf-stat-card">
        <div class="mf-stat-label">Minifigs in Collection</div>
        <div class="mf-stat-value">${owned.length}</div>
        <div class="mf-stat-sub">${totalOwnedCopies} total figs (incl. duplicates)</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Total Value</div>
        <div class="mf-stat-value accent">${fmt(totalValue)}</div>
        <div class="mf-stat-sub">Brickify / BrickLink used value</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">⭐ Star Wars</div>
        <div class="mf-stat-value">${swCount}</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">⚡ Harry Potter</div>
        <div class="mf-stat-value">${hpCount}</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">💍 Lord of the Rings</div>
        <div class="mf-stat-value">${lotrCount}</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">🥷 Ninjago · Minecraft · Movie</div>
        <div class="mf-stat-value">${otherCount}</div>
      </div>
    `;
  }

  function renderMinifigsGrid() {
    const grid = document.getElementById('minifigsGrid');
    const empty = document.getElementById('minifigsEmpty');
    const all = (MINIFIGS_DATA && MINIFIGS_DATA.minifigs) || [];

    if (all.length === 0) {
      grid.style.display = 'none';
      empty.style.display = '';
      return;
    }

    const items = getFilteredMinifigs();
    if (items.length === 0) {
      grid.style.display = 'none';
      empty.style.display = '';
      return;
    }

    grid.style.display = '';
    empty.style.display = 'none';

    // Franchise metadata for grouping/display
    const FRANCHISE_META = {
      'Star Wars':         { label: 'Star Wars',         icon: '⭐', color: '#FFE81F', order: 1 },
      'Harry Potter':      { label: 'Harry Potter',      icon: '⚡', color: '#7B3F00', order: 2 },
      'Lord of the Rings': { label: 'Lord of the Rings', icon: '💍', color: '#C9A84C', order: 3 },
      'Ninjago':           { label: 'Ninjago',           icon: '🥷', color: '#D7261E', order: 4 },
      'Minecraft':         { label: 'Minecraft',         icon: '⛏️', color: '#5B8731', order: 5 },
      'The LEGO Movie':    { label: 'The LEGO Movie',    icon: '🎬', color: '#F5C518', order: 6 },
      'Other':             { label: 'Other',             icon: '⚪', color: '#888',    order: 99 },
    };

    // Group by franchise
    const groups = {};
    items.forEach(m => {
      const f = m.franchise || 'Other';
      if (!groups[f]) groups[f] = [];
      groups[f].push(m);
    });
    const franchiseKeys = Object.keys(groups).sort((a, b) => {
      return ((FRANCHISE_META[a] || {}).order || 99) - ((FRANCHISE_META[b] || {}).order || 99);
    });

    let html = '';
    franchiseKeys.forEach(franchiseKey => {
      const meta = FRANCHISE_META[franchiseKey] || FRANCHISE_META['Other'];
      // Within a franchise: highest price first
      const sorted = [...groups[franchiseKey]].sort((a, b) => {
        return (b.currentValue || 0) - (a.currentValue || 0);
      });

      const groupValue = sorted.reduce((sum, m) => sum + (m.currentValue || 0) * (m.qty || 1), 0);

      html += `<div class="mf-section-header">
        <h2><span class="mf-section-icon" style="color:${meta.color}">${meta.icon}</span> ${meta.label}</h2>
        <span class="mf-section-count">${sorted.length} fig${sorted.length === 1 ? '' : 's'} · ${fmt(groupValue)}</span>
        <div class="mf-section-line"></div>
      </div>`;

      html += '<div class="mf-grid-inner">';
      html += sorted.map(m => {
        const imgUrl = minifigImageUrl(m);
        const rarityClass = (m.rarity || 'Common').toLowerCase().replace(/[^a-z]/g, '');
        const ownedClass = m.owned ? 'owned' : 'need';
        const qtyBadge = (m.qty && m.qty > 1) ? `<span class="mf-qty-badge">×${m.qty}</span>` : '';
        const ownedBadge = '';
        const sourceLabel = m.source === 'BrickLink'
          ? 'BrickLink'
          : (m.sourceSetName ? `${m.source} · ${m.sourceSetName}` : m.source || 'Unknown');
        const notesHtml = m.notes ? `<div class="mf-card-notes">${m.notes}</div>` : '';

        const imageBlock = imgUrl
          ? `<img class="mf-card-image" src="${imgUrl}" alt="${m.name.replace(/"/g, '&quot;')}"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="mf-card-image-placeholder" style="display:none;">⚔️</div>`
          : `<div class="mf-card-image-placeholder" style="display:flex;">⚔️</div>`;

        return `<div class="mf-card ${ownedClass}">
          <div class="mf-card-image-wrap">
            ${imageBlock}
            ${qtyBadge}
            ${ownedBadge}
          </div>
          <div class="mf-card-body">
            <div class="mf-card-name">${m.name}</div>
            <div class="mf-card-meta">
              <span class="mf-rarity ${rarityClass}">${m.rarity || 'Common'}</span>
              <span class="mf-era">${m.era || ''}</span>
            </div>
            <div class="mf-card-source">From: ${sourceLabel}${m.year ? ` · ${m.year}` : ''}</div>
            ${notesHtml}
            <div class="mf-card-footer">
              <span class="mf-value">${fmt(m.currentValue || 0)}</span>
            </div>
          </div>
        </div>`;
      }).join('');
      html += '</div>';
    });

    grid.innerHTML = html;
  }

  function renderMinifigs() {
    renderMinifigsStats();
    renderMinifigsGrid();
  }

  // ===================================================================
  // BUILDERS LEADERBOARD
  // ===================================================================

  function shareLabel(count, total) {
    if (count === total) return '';
    const f = { '1/2': '½', '1/3': '⅓', '2/3': '⅔', '1/4': '¼', '3/4': '¾' }[`${count}/${total}`];
    return f || `${count}/${total}`;
  }

  // ===================================================================
  // TO BUILD PAGE: sets in progress, new sets to build, old sets to rebuild, sets on the way
  // ===================================================================

  function instructionsUrl(s) {
    if (s.instructionsPdf) return s.instructionsPdf;
    const n = String(s.setNumber).match(/^\d+/);
    if (!n) return '';
    return s.year && s.year < 2002
      ? `https://lego.brickinstructions.com/en/lego_instructions/set/${n[0]}/Instructions`
      : `https://www.lego.com/en-us/service/building-instructions/${n[0]}`;
  }

  function toBuildCard(s) {
    const n = (String(s.setNumber).match(/^\d+/) || [''])[0];
    const missing = (s.missing || []).reduce((a, m) => a + (m.qty || 1), 0);
    const tags = [
      s.rebuild ? '<span class="tb-tag tb-tag-old">Rebuild</span>' : '',
      missing ? `<span class="tb-tag tb-tag-missing">${missing} missing</span>` : '',
      s.builtBy && s.builtBy.length ? `<span class="tb-tag">${s.builtBy.join(' & ')}</span>` : ''
    ].join('');
    const instr = instructionsUrl(s);
    return `<div class="tb-card ph-clickable" data-set="${s.setNumber}">
      <div class="tb-img"><img src="https://images.brickset.com/sets/images/${n}-1.jpg" alt="" loading="lazy" onerror="this.style.visibility='hidden'"></div>
      <div class="tb-body">
        <div class="tb-name">${s.name}</div>
        <div class="tb-meta">${s.setNumber} &middot; ${s.year} &middot; ${(s.pieces || 0).toLocaleString()} pcs</div>
        <div class="tb-tags">${tags}</div>
        ${instr ? `<a class="tb-link" href="${instr}" target="_blank" rel="noopener">${s.instructionsPdf ? 'Instructions + parts (PDF)' : 'Instructions'} &#8599;</a>` : ''}
      </div>
    </div>`;
  }

  function renderToBuild() {
    const groups = [
      { title: 'In progress', note: 'Being built right now', list: sets.filter(s => s.condition === 'Building') },
      { title: 'New sets to build', note: 'Bought and waiting to be built', list: sets.filter(s => s.condition === 'To Build' && !s.rebuild) },
      { title: 'Old sets to rebuild', note: 'Taken apart and waiting to be put back together', list: sets.filter(s => s.condition === 'To Build' && s.rebuild) },
      { title: 'On the way', note: 'Ordered, ready to build when they arrive', list: sets.filter(s => s.condition === 'On the Way') }
    ];
    const all = groups.reduce((a, g) => a.concat(g.list), []);
    const pieces = all.reduce((a, s) => a + (s.pieces || 0), 0);
    const missing = all.reduce((a, s) => a + (s.missing || []).reduce((b, m) => b + (m.qty || 1), 0), 0);
    document.getElementById('tbStats').innerHTML = `
      <div class="mf-stat-card">
        <div class="mf-stat-label">Sets To Build</div>
        <div class="mf-stat-value accent">${all.length}</div>
        <div class="mf-stat-sub">${groups[0].list.length} in progress</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Pieces Waiting</div>
        <div class="mf-stat-value">${pieces.toLocaleString()}</div>
        <div class="mf-stat-sub">across all of them</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Old Sets To Rebuild</div>
        <div class="mf-stat-value">${all.filter(s => s.rebuild).length}</div>
        <div class="mf-stat-sub">including ones in progress</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Missing Pieces</div>
        <div class="mf-stat-value">${missing}</div>
        <div class="mf-stat-sub">logged on these sets</div>
      </div>`;
    document.getElementById('tbBoard').innerHTML = groups.filter(g => g.list.length).map(g => `
      <section class="tb-group">
        <div class="tb-group-head"><h3>${g.title} <span>${g.list.length}</span></h3><p>${g.note}</p></div>
        <div class="tb-grid">${g.list.slice().sort((a, b) => (b.pieces || 0) - (a.pieces || 0)).map(toBuildCard).join('')}</div>
      </section>`).join('') || '<p class="tb-empty">Nothing to build right now.</p>';
  }

  function renderBuilders() {
    const builders = {};
    sets.forEach(s => {
      const list = s.builtBy || [];
      [...new Set(list)].forEach(name => {
        const count = list.filter(n => n === name).length;
        const credited = s.pieces * count / list.length;
        if (!builders[name]) builders[name] = { name, pieces: 0, sets: [] };
        builders[name].pieces += credited;
        builders[name].sets.push({ set: s, credited, share: shareLabel(count, list.length) });
      });
    });
    const ranked = Object.values(builders).sort((a, b) => b.pieces - a.pieces);
    const loggedPieces = ranked.reduce((a, b) => a + b.pieces, 0);
    const biggest = sets.filter(s => s.builtBy && s.builtBy.length).sort((a, b) => b.pieces - a.pieces)[0];
    // Builders are only tracked for the 100 largest sets
    const top100 = sets.slice().sort((a, b) => b.pieces - a.pieces).slice(0, 100);
    const unlogged = top100.filter(s => !s.builtBy && s.condition === 'Built/Displayed');
    const unloggedPieces = unlogged.reduce((a, s) => a + s.pieces, 0);

    document.getElementById('bdStats').innerHTML = `
      <div class="mf-stat-card">
        <div class="mf-stat-label">Pieces Logged</div>
        <div class="mf-stat-value accent">${Math.round(loggedPieces).toLocaleString()}</div>
        <div class="mf-stat-sub">across ${sets.filter(s => s.builtBy).length} sets</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Leader</div>
        <div class="mf-stat-value">${ranked[0] ? ranked[0].name : '—'}</div>
        <div class="mf-stat-sub">${ranked[1] ? 'ahead by ' + Math.round(ranked[0].pieces - ranked[1].pieces).toLocaleString() + ' pieces' : ''}</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Biggest Single Build</div>
        <div class="mf-stat-value">${biggest ? biggest.pieces.toLocaleString() : '—'}</div>
        <div class="mf-stat-sub">${biggest ? biggest.name + ' · ' + biggest.builtBy.join(' & ') : ''}</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Unknown Builder</div>
        <div class="mf-stat-value">${unlogged.length}</div>
        <div class="mf-stat-sub">of the 100 largest sets · ${unloggedPieces.toLocaleString()} pieces</div>
      </div>
    `;

    const medals = ['🥇', '🥈', '🥉'];
    document.getElementById('bdBoard').innerHTML = ranked.map((b, i) => {
      const pct = loggedPieces ? b.pieces / loggedPieces * 100 : 0;
      const rows = b.sets.sort((x, y) => y.credited - x.credited).map(({ set, credited, share }) => `
        <div class="bd-set">
          <span class="bd-set-name">${set.name}${share ? ` <span class="bd-share">${share}</span>` : ''}${set.condition === 'Building' ? ' <span class="bd-wip">in progress</span>' : ''}</span>
          <span class="bd-set-pieces">${Math.round(credited).toLocaleString()}</span>
        </div>`).join('');
      return `
        <div class="bd-card">
          <div class="bd-head">
            <span class="bd-rank">${medals[i] || '#' + (i + 1)}</span>
            <span class="bd-name">${b.name}</span>
            <span class="bd-total">${Math.round(b.pieces).toLocaleString()} <small>pieces</small></span>
          </div>
          <div class="bd-bar"><div class="bd-bar-fill" style="width:${pct.toFixed(1)}%"></div></div>
          <div class="bd-meta">${b.sets.length} builds · ${pct.toFixed(0)}% of logged pieces</div>
          <details class="bd-sets">
            <summary>Show builds</summary>
            ${rows}
          </details>
        </div>`;
    }).join('') + (unlogged.length ? `
        <div class="bd-card bd-unknown">
          <div class="bd-head">
            <span class="bd-rank">?</span>
            <span class="bd-name">Unknown builder</span>
            <span class="bd-total">${unloggedPieces.toLocaleString()} <small>pieces</small></span>
          </div>
          <div class="bd-meta">${unlogged.length} built sets among the 100 largest with no builder logged yet</div>
          <details class="bd-sets">
            <summary>Show sets</summary>
            ${unlogged.slice().sort((x, y) => y.pieces - x.pieces).map(set => `
            <div class="bd-set">
              <span class="bd-set-name">${set.name} <span class="bd-share">${set.setNumber}</span></span>
              <span class="bd-set-pieces">${set.pieces.toLocaleString()}</span>
            </div>`).join('')}
          </details>
        </div>` : '');
  }

  // ===================================================================
  // PRICE HISTORY
  // ===================================================================

  const PRICE_SERIES = [
    { key: 'value', label: 'Collection value', color: '#dc2626' },
    { key: 'new',   label: 'Boxed (new)',      color: '#2563eb' },
    { key: 'used',  label: 'Used',             color: '#16a34a' },
  ];

  const HISTORY = (typeof PRICE_HISTORY !== 'undefined') ? PRICE_HISTORY : {};
  const DATES = (typeof SET_DATES !== 'undefined') ? SET_DATES : {};
  // Pull the chart window out to a retirement this close to the tracked prices
  const RETIRE_REACH = 150 * 864e5;

  function parseDay(d) {
    const [y, m, day] = d.split('-').map(Number);
    return new Date(y, m - 1, day);
  }

  function fmtDay(d) {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function fmtMonth(d) {
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  // "Retired Dec 2022" / "Retiring Dec 2026" from Brickset's LEGO.com exit date
  // "Retiring soon" badge for sets LEGO is expected to retire within the next 6 months
  const RETIRING_SOON_DAYS = 183;
  function retiringBadge(setNumber) {
    const exit = DATES[setNumber] && DATES[setNumber].exit;
    if (!exit) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = (parseDay(exit) - today) / 864e5;
    if (days < 0 || days > RETIRING_SOON_DAYS) return '';
    return ` <span class="retiring-badge" title="Expected to retire ${fmtMonth(parseDay(exit))}">Retiring soon</span>`;
  }

  function retirementLabel(exit, today) {
    return (exit <= today ? 'Retired ' : 'Retiring ') + fmtMonth(exit);
  }

  function renderPriceChart(hist, exitDate, paid, boughtDate) {
    const series = PRICE_SERIES
      .filter(s => hist[s.key] && hist[s.key].length)
      .map(s => ({ ...s, points: hist[s.key].map(p => ({ t: parseDay(p[0]), v: p[1], src: p[2] })) }));
    if (!series.length) return '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const all = series.flatMap(s => s.points);
    let tMin = Math.min(...all.map(p => p.t));
    let tMax = Math.max(today, ...all.map(p => p.t));
    const exit = exitDate ? parseDay(exitDate) : null;
    if (exit && exit < tMin && tMin - exit <= RETIRE_REACH) tMin = +exit - 14 * 864e5;
    if (exit && exit > tMax && exit - tMax <= RETIRE_REACH) tMax = +exit + 14 * 864e5;
    const bought = boughtDate ? parseDay(boughtDate) : null;
    if (bought && bought < tMin && tMin - bought <= RETIRE_REACH) tMin = +bought - 14 * 864e5;
    if (tMax - tMin < 30 * 864e5) tMin = tMax - 30 * 864e5;
    const vals = all.map(p => p.v).concat(paid > 0 ? [paid] : []);
    let vMin = Math.min(...vals);
    let vMax = Math.max(...vals);
    const padV = Math.max((vMax - vMin) * 0.15, vMax * 0.05, 5);
    vMin = Math.max(0, vMin - padV);
    vMax = vMax + padV;

    const W = 640, H = 270, L = 56, R = 16, T = 26, B = 30;
    const x = t => L + (t - tMin) / (tMax - tMin) * (W - L - R);
    const y = v => T + (1 - (v - vMin) / (vMax - vMin)) * (H - T - B);

    let svg = `<svg class="ph-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Price history chart">`;

    // Price gridlines
    for (let i = 0; i <= 4; i++) {
      const v = vMin + (vMax - vMin) * i / 4;
      svg += `<line class="ph-grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/>`;
      svg += `<text class="ph-axis" x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${fmt(v)}</text>`;
    }

    // Month labels
    const m = new Date(tMin);
    m.setDate(1);
    m.setMonth(m.getMonth() + 1);
    const months = [];
    for (; m <= tMax; m.setMonth(m.getMonth() + 1)) months.push(new Date(m));
    const step = Math.ceil(months.length / 8);
    months.forEach((d, i) => {
      if (i % step) return;
      const label = d.toLocaleDateString('en-US', { month: 'short' }) + (d.getMonth() === 0 ? ` '${String(d.getFullYear()).slice(2)}` : '');
      svg += `<text class="ph-axis" x="${x(d)}" y="${H - 8}" text-anchor="middle">${label}</text>`;
    });

    // What we paid, as a flat reference line
    if (paid > 0) {
      svg += `<line class="ph-paid" x1="${L}" x2="${W - R}" y1="${y(paid)}" y2="${y(paid)}"/>`;
      svg += `<text class="ph-paid-label" x="${W - R - 4}" y="${y(paid) - 5}" text-anchor="end">Paid ${fmt(paid)}</text>`;
    }

    // Purchase marker: a diamond on the paid line (or the baseline) on the day we bought it
    if (bought && bought >= tMin && bought <= tMax) {
      const bx = x(bought), by = paid > 0 ? y(paid) : H - B;
      const anchor = bx > W - R - 70 ? 'end' : bx < L + 70 ? 'start' : 'middle';
      svg += `<path class="ph-bought" d="M${bx} ${by - 6} L${bx + 6} ${by} L${bx} ${by + 6} L${bx - 6} ${by} Z"><title>Bought ${fmtDay(bought)}</title></path>`;
      svg += `<text class="ph-paid-label" x="${bx}" y="${by + 18}" text-anchor="${anchor}">Bought ${fmtDay(bought)}</text>`;
    }

    // Retirement marker: a line when it falls inside the chart, else a label at the nearest edge
    if (exit) {
      const label = retirementLabel(exit, today);
      if (exit >= tMin && exit <= tMax) {
        const ex = x(exit);
        const anchor = ex > W - R - 90 ? 'end' : ex < L + 90 ? 'start' : 'middle';
        svg += `<line class="ph-retire" x1="${ex}" x2="${ex}" y1="${T - 4}" y2="${H - B}"/>`;
        svg += `<text class="ph-retire-label" x="${ex}" y="${T - 10}" text-anchor="${anchor}">${label}</text>`;
      } else if (exit < tMin) {
        svg += `<text class="ph-retire-label" x="${L}" y="${T - 10}" text-anchor="start">← ${label}</text>`;
      } else {
        svg += `<text class="ph-retire-label" x="${W - R}" y="${T - 10}" text-anchor="end">${label} →</text>`;
      }
    }

    series.forEach(s => {
      const pts = s.points.map(p => `${x(p.t)},${y(p.v)}`).join(' ');
      const last = s.points[s.points.length - 1];
      if (s.points.length > 1) {
        svg += `<polyline class="ph-line" points="${pts}" stroke="${s.color}"/>`;
      }
      // Dashed carry-forward from the last known price to today
      if (last.t < today) {
        svg += `<line class="ph-carry" x1="${x(last.t)}" y1="${y(last.v)}" x2="${x(today)}" y2="${y(last.v)}" stroke="${s.color}"/>`;
      }
      s.points.forEach(p => {
        const hollow = p.src ? ' ph-dot-est' : '';
        svg += `<circle class="ph-dot${hollow}" cx="${x(p.t)}" cy="${y(p.v)}" r="3.5" stroke="${s.color}" fill="${p.src ? '#fff' : s.color}"` +
          ` data-date="${fmtDay(p.t)}" data-label="${s.label}" data-value="${fmt(p.v)}" data-color="${s.color}"${p.src ? ` data-src="${p.src}"` : ''}/>`;
      });
    });

    svg += `<line class="ph-guide" x1="0" x2="0" y1="${T}" y2="${H - B}" visibility="hidden"/>`;
    return `<div class="ph-chart-wrap">${svg}</svg><div class="ph-tip" hidden></div></div>`;
  }

  function openPriceModal(setNumber) {
    const item = sets.find(s => s.setNumber === setNumber) ||
      (WISHLIST_DATA.items || []).find(i => i.setNumber === setNumber);
    if (!item) return;
    const hist = HISTORY[setNumber] || {};

    const stats = PRICE_SERIES.filter(s => hist[s.key] && hist[s.key].length).map(s => {
      const pts = hist[s.key];
      const first = pts[0][1], last = pts[pts.length - 1][1];
      const change = last - first;
      const changeHtml = pts.length > 1
        ? `<span class="appreciation ${change >= 0 ? 'positive' : 'negative'}">${change >= 0 ? '↑' : '↓'} ${fmt(Math.abs(change))} (${pct(change / first * 100)}) since ${fmtDay(parseDay(pts[0][0]))}</span>`
        : `<span class="ph-stat-sub">Tracked since ${fmtDay(parseDay(pts[0][0]))}</span>`;
      return `<div class="ph-stat">
        <div class="ph-stat-label"><span class="dot" style="background:${s.color}"></span>${s.label}</div>
        <div class="ph-stat-value">${fmt(last)}</div>
        ${changeHtml}
      </div>`;
    }).join('');

    const hasEstimates = Object.values(hist).some(pts => pts.some(p => p[2]));
    const exitDate = DATES[setNumber] && DATES[setNumber].exit;
    const paid = typeof item.paid === 'number' ? item.paid : null;
    const chart = renderPriceChart(hist, exitDate, paid, item.bought);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const retireHtml = exitDate ? ` &middot; <span class="ph-retire-tag">${retirementLabel(parseDay(exitDate), today)}</span>` : '';

    let modal = document.getElementById('priceModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'priceModal';
      modal.className = 'ph-overlay';
      document.body.appendChild(modal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.ph-close')) closePriceModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePriceModal();
      });
    }

    let paidHtml = '';
    if (paid !== null) {
      const now = item.currentValue != null ? item.currentValue : null;
      const gain = now !== null ? now - paid : null;
      paidHtml = `<div class="ph-stat">
        <div class="ph-stat-label"><span class="dot paid-dot"></span>What we paid${item.boughtFrom ? ` at ${item.boughtFrom}` : ''}</div>
        <div class="ph-stat-value">${fmt(paid)}</div>
        ${item.bought ? `<span class="ph-stat-sub">Bought ${fmtDay(parseDay(item.bought))}</span><br>` : ''}
        ${gain !== null ? `<span class="appreciation ${gain >= 0 ? 'positive' : 'negative'}">${gain >= 0 ? '↑' : '↓'} ${fmt(Math.abs(gain))}${paid > 0 ? ` (${pct(gain / paid * 100)})` : ''} vs. value now</span>` : ''}
      </div>`;
    }

    const isOwned = sets.some(s => s.setNumber === setNumber);

    modal.innerHTML = `<div class="ph-modal" role="dialog" aria-modal="true" aria-label="Price history for ${item.name}">
      <div class="ph-header">
        <div>
          <div class="ph-title">${item.name}</div>
          <div class="ph-subtitle">${item.setNumber} &middot; ${item.theme}${item.pieces ? ` &middot; ${item.pieces.toLocaleString()} pcs` : ''}${retireHtml}</div>
        </div>
        <button class="ph-close" title="Close" aria-label="Close">&times;</button>
      </div>
      ${setImageHtml(item.setNumber, item.name)}
      ${setLinksHtml(item.setNumber, item.year, item.instructionsPdf)}
      ${chart ? `<div class="ph-stats">${stats}${paidHtml}</div>${chart}` : '<p class="ph-empty">No price history recorded for this set yet. It will start building the next time prices are checked.</p>'}
      ${isOwned ? missingPiecesHtml(item.missing) : ''}
      <p class="ph-footnote">Prices are BrickLink's average sold price over the last 6 months. The dashed line carries the last known price forward to today.${exitDate ? ' Retirement is the date the set left LEGO.com in the US, per Brickset; future dates are LEGO\'s expected retirement.' : ''}${hasEstimates ? ' Hollow dots are BrickEconomy estimates, used while BrickLink data was unavailable.' : ''} Some jumps reflect changes in how values were calculated, such as the Oct 2026 Brickify refresh, rather than market moves.</p>
    </div>`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    wireChartHover(modal.querySelector('.ph-chart-wrap'));
    const pickBtn = modal.querySelector('.ph-pick-btn');
    if (pickBtn) pickBtn.addEventListener('click', () => {
      pickBtn.remove();
      openPicker(modal.querySelector('.ph-picker'), item);
    });
  }

  // Official set picture from Brickset; hidden if there isn't one
  function setImageHtml(setNumber, name) {
    const base = String(setNumber).match(/^\d+/);
    if (!base) return '';
    return `<div class="ph-set-img"><img src="https://images.brickset.com/sets/images/${base[0]}-1.jpg" alt="${name}" onerror="this.parentNode.remove()"></div>`;
  }

  // Links to LEGO's building instructions and the set's parts list
  function setLinksHtml(setNumber, year, pdf) {
    const base = String(setNumber).match(/^\d+/);
    if (!base) return '';
    const n = base[0];
    // LEGO.com only hosts instructions from about 2002 on; older sets use BrickInstructions' scans
    const instr = year && year < 2002
      ? `https://lego.brickinstructions.com/en/lego_instructions/set/${n}/Instructions`
      : `https://www.lego.com/en-us/service/building-instructions/${n}`;
    return `<div class="ph-links">
      ${pdf ? `<a href="${pdf}" target="_blank" rel="noopener">Enhanced instructions + parts (PDF) &#8599;</a>` : ''}
      <a href="${instr}" target="_blank" rel="noopener">Building instructions &#8599;</a>
      <a href="https://rebrickable.com/sets/${n}-1/" target="_blank" rel="noopener">Parts list &#8599;</a>
    </div>`;
  }

  // Missing pieces recorded in data.js as missing: [{ qty, part, color, name, note }]
  function missingPiecesHtml(missing) {
    const list = Array.isArray(missing) ? missing : [];
    if (!list.length) return '<p class="ph-missing-none">No missing pieces recorded.</p><button class="ph-pick-btn" type="button">Choose missing pieces from the parts list</button><div class="ph-picker"></div>';
    const total = list.reduce((a, m) => a + (m.qty || 1), 0);
    const rows = list.map(m => {
      const part = m.element
        ? `<a href="https://brickset.com/parts/${encodeURIComponent(m.element)}" target="_blank" rel="noopener">${m.element}</a>`
        : m.part
          ? `<a href="https://www.bricklink.com/v2/catalog/catalogitem.page?P=${encodeURIComponent(m.part)}" target="_blank" rel="noopener">${m.part}</a>`
          : '';
      const desc = [m.name, m.color && `(${m.color})`].filter(Boolean).join(' ');
      const src = m.img || (m.element ? `https://images.brickset.com/parts/${encodeURIComponent(m.element)}.jpg` : '');
      const img = src ? `<img src="${src}" alt="" loading="lazy">` : '<div class="mp-noimg">?</div>';
      return `<div class="mp-card">
        <span class="mp-qty">${m.qty || 1}&times;</span>
        ${img}
        <div class="mp-name">${m.name || 'Part'}</div>
        <div class="mp-meta">${m.color || ''}${part ? ` &middot; ${part}` : ''}</div>
        ${m.note ? `<div class="mp-note">${m.note}</div>` : ''}
      </div>`;
    }).join('');
    return `<div class="ph-missing">
      <div class="ph-missing-title">Missing pieces (${total})</div>
      <div class="mp-grid">${rows}</div>
    </div>
    <button class="ph-pick-btn" type="button">Choose missing pieces from the parts list</button>
    <div class="ph-picker"></div>`;
  }

  // ---- Missing-pieces picker: browse the set's parts list (inventories/<set>.json) and mark what's missing.
  // Selections are kept in this browser until they're sent to Claude to save in data.js.
  function draftKey(setNumber) { return 'missing-draft-' + setNumber; }

  function loadDraft(setNumber, recorded) {
    try {
      const saved = JSON.parse(localStorage.getItem(draftKey(setNumber)) || 'null');
      if (saved) return saved;
    } catch (e) { /* storage unavailable */ }
    const draft = {};
    (recorded || []).forEach(m => { if (m.element) draft[m.element] = m.qty || 1; });
    return draft;
  }

  function saveDraft(setNumber, draft) {
    try { localStorage.setItem(draftKey(setNumber), JSON.stringify(draft)); } catch (e) { /* storage unavailable */ }
  }

  async function openPicker(container, item) {
    const base = (String(item.setNumber).match(/^\d+/) || [''])[0];
    container.innerHTML = '<p class="ph-missing-none">Loading parts list…</p>';
    let parts;
    try {
      const res = await fetch(`inventories/${base}.json`);
      if (!res.ok) throw new Error(res.status);
      parts = await res.json();
    } catch (e) {
      container.innerHTML = '<p class="ph-missing-none">The parts list for this set hasn\'t been added yet. Ask Claude to add it.</p>';
      return;
    }
    const draft = loadDraft(item.setNumber, item.missing);
    const cats = [...new Set(parts.map(p => p[3]).filter(Boolean))].sort();
    const colors = [...new Set(parts.map(p => p[2]).filter(Boolean))].sort();
    const total = parts.reduce((a, p) => a + p[1], 0);

    container.innerHTML = `
      <div class="pk-bar">
        <input type="search" class="pk-search" placeholder="Search ${parts.length} parts (e.g. 1x2 plate)">
        <select class="pk-cat"><option value="">All categories</option>${cats.map(c => `<option>${c}</option>`).join('')}</select>
        <select class="pk-color"><option value="">All colors</option>${colors.map(c => `<option>${c}</option>`).join('')}</select>
        <label class="pk-only"><input type="checkbox" class="pk-only-sel"> Marked only</label>
      </div>
      <div class="pk-summary"></div>
      <div class="pk-grid"></div>
      <p class="ph-missing-none">${parts.length} parts, ${total.toLocaleString()} pieces, from Brickset. Your selections stay in this browser until you send them to Claude to save.</p>`;

    const grid = container.querySelector('.pk-grid');
    const summary = container.querySelector('.pk-summary');
    const search = container.querySelector('.pk-search');
    const cat = container.querySelector('.pk-cat');
    const color = container.querySelector('.pk-color');
    const onlySel = container.querySelector('.pk-only-sel');

    function listText() {
      const picked = parts.filter(p => draft[p[0]] > 0);
      return `Missing pieces for ${item.setNumber} ${item.name}:\n` +
        picked.map(p => `${draft[p[0]]}x ${p[4]} (${p[2]}) [element ${p[0]}]`).join('\n');
    }

    function renderSummary() {
      const n = Object.values(draft).reduce((a, q) => a + (q > 0 ? q : 0), 0);
      summary.innerHTML = n
        ? `<strong>${n} piece${n === 1 ? '' : 's'} marked missing</strong>
           <button type="button" class="pk-copy">Copy list for Claude</button>
           <button type="button" class="pk-clear">Clear</button>`
        : 'Tap + on any part that\'s missing.';
    }

    function render() {
      const q = search.value.trim().toLowerCase();
      const shown = parts.filter(p =>
        (!q || `${p[4]} ${p[2]} ${p[0]}`.toLowerCase().includes(q)) &&
        (!cat.value || p[3] === cat.value) &&
        (!color.value || p[2] === color.value) &&
        (!onlySel.checked || draft[p[0]] > 0));
      grid.innerHTML = shown.map(p => {
        const n = draft[p[0]] || 0;
        return `<div class="pk-part${n ? ' pk-marked' : ''}" data-el="${p[0]}">
          <img src="https://images.brickset.com/parts/${p[0]}.jpg" alt="" loading="lazy">
          <div class="pk-name">${p[4]}</div>
          <div class="pk-meta">${p[2]} &middot; ${p[1]} in set</div>
          <div class="pk-step">
            <button type="button" data-d="-1" aria-label="One fewer missing">&minus;</button>
            <span>${n}</span>
            <button type="button" data-d="1" aria-label="One more missing">+</button>
          </div>
        </div>`;
      }).join('') || '<p class="ph-missing-none">No parts match.</p>';
      renderSummary();
    }

    [search, cat, color, onlySel].forEach(el => el.addEventListener('input', render));
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.pk-step button');
      if (!btn) return;
      const el = btn.closest('.pk-part').dataset.el;
      const max = (parts.find(p => p[0] === el) || [0, 99])[1];
      draft[el] = Math.max(0, Math.min(max, (draft[el] || 0) + Number(btn.dataset.d)));
      if (!draft[el]) delete draft[el];
      saveDraft(item.setNumber, draft);
      render();
    });
    summary.addEventListener('click', async (e) => {
      if (e.target.closest('.pk-clear')) {
        Object.keys(draft).forEach(k => delete draft[k]);
        saveDraft(item.setNumber, draft);
        render();
      } else if (e.target.closest('.pk-copy')) {
        const text = listText();
        try { await navigator.clipboard.writeText(text); e.target.textContent = 'Copied! Paste it to Claude'; }
        catch (err) { window.prompt('Copy this list and paste it to Claude:', text); }
      }
    });
    render();
  }

  function missingBadge(set) {
    return Array.isArray(set.missing) && set.missing.length
      ? ' <span class="missing-badge" title="This set has missing pieces recorded">Missing pieces</span>'
      : '';
  }

  // Hover (or drag on touch) over the chart: snap to the nearest date and show every price on it
  function wireChartHover(wrap) {
    if (!wrap) return;
    const svg = wrap.querySelector('svg');
    const tip = wrap.querySelector('.ph-tip');
    const guide = svg.querySelector('.ph-guide');
    const dots = [...svg.querySelectorAll('.ph-dot')];
    const SNAP = 40; // viewBox units

    function hide() {
      tip.hidden = true;
      guide.setAttribute('visibility', 'hidden');
      dots.forEach(d => d.classList.remove('active'));
    }

    function show(e) {
      const rect = svg.getBoundingClientRect();
      const scale = rect.width / svg.viewBox.baseVal.width;
      const px = (e.clientX - rect.left) / scale;
      let nearest = null, best = Infinity;
      dots.forEach(d => {
        const dist = Math.abs(+d.getAttribute('cx') - px);
        if (dist < best) { best = dist; nearest = d; }
      });
      if (!nearest || best > SNAP) return hide();

      const cx = +nearest.getAttribute('cx');
      const group = dots.filter(d => Math.abs(+d.getAttribute('cx') - cx) < 0.5);
      dots.forEach(d => d.classList.toggle('active', group.includes(d)));
      guide.setAttribute('x1', cx);
      guide.setAttribute('x2', cx);
      guide.setAttribute('visibility', 'visible');

      tip.innerHTML = `<div class="ph-tip-date">${nearest.dataset.date}</div>` + group.map(d =>
        `<div class="ph-tip-row"><span class="dot" style="background:${d.dataset.color}"></span>${d.dataset.label}<strong>${d.dataset.value}</strong></div>` +
        (d.dataset.src ? `<div class="ph-tip-src">${d.dataset.src} estimate</div>` : '')
      ).join('');
      tip.hidden = false;

      // Place beside the point, flipping left near the right edge
      const top = Math.min(...group.map(d => +d.getAttribute('cy'))) * scale;
      const left = cx * scale;
      const flip = left + tip.offsetWidth + 16 > rect.width;
      tip.style.left = (flip ? left - tip.offsetWidth - 12 : left + 12) + 'px';
      tip.style.top = Math.max(0, Math.min(top - tip.offsetHeight / 2, rect.height - tip.offsetHeight)) + 'px';
    }

    svg.addEventListener('pointermove', show);
    svg.addEventListener('pointerdown', show);
    svg.addEventListener('pointerleave', hide);
  }

  function closePriceModal() {
    const modal = document.getElementById('priceModal');
    if (!modal || modal.style.display === 'none') return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // ===================================================================
  // PAGE SWITCHING
  // ===================================================================

  function switchPage(page) {
    currentPage = page;

    // Update tab buttons
    document.querySelectorAll('.page-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === page);
    });

    // Toggle page visibility
    document.getElementById('collectionPage').style.display = page === 'collection' ? '' : 'none';
    document.getElementById('wishlistPage').style.display = page === 'wishlist' ? '' : 'none';
    document.getElementById('minifigsPage').style.display = page === 'minifigs' ? '' : 'none';
    document.getElementById('buildersPage').style.display = page === 'builders' ? '' : 'none';
    document.getElementById('toBuildPage').style.display = page === 'tobuild' ? '' : 'none';

    // Toggle footer visibility
    document.getElementById('collectionFooter').style.display = page === 'collection' ? '' : 'none';
    document.getElementById('wishlistFooter').style.display = page === 'wishlist' ? '' : 'none';
    document.getElementById('minifigsFooter').style.display = page === 'minifigs' ? '' : 'none';
    document.getElementById('buildersFooter').style.display = page === 'builders' ? '' : 'none';
    document.getElementById('tobuildFooter').style.display = page === 'tobuild' ? '' : 'none';

    // Toggle header controls visibility (search/view toggle only for collection)
    document.querySelector('.header-controls').style.display = page === 'collection' ? '' : 'none';

    // Render the active page
    if (page === 'collection') {
      renderCollection();
    } else if (page === 'wishlist') {
      renderWishlist();
    } else if (page === 'minifigs') {
      renderMinifigs();
    } else if (page === 'builders') {
      renderBuilders();
    } else if (page === 'tobuild') {
      renderToBuild();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Event Listeners ---

  // Page toggle
  document.querySelectorAll('.page-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchPage(btn.dataset.page);
    });
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;

      document.getElementById('tableView').style.display = currentView === 'table' ? '' : 'none';
      document.getElementById('cardsView').style.display = currentView === 'cards' ? '' : 'none';

      renderCollection();
    });
  });

  // Search
  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value.trim();
      renderCollection();
    }, 200);
  });

  // Sort select
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    const [key, dir] = e.target.value.split('-');
    currentSort = { key, dir };
    renderCollection();
  });

  // Table header sort
  document.querySelectorAll('.sets-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (currentSort.key === key) {
        currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort = { key, dir: key === 'name' || key === 'setNumber' || key === 'theme' || key === 'condition' ? 'asc' : 'desc' };
      }

      // Update select to match
      const selectVal = `${key}-${currentSort.dir}`;
      const sel = document.getElementById('sortSelect');
      if ([...sel.options].some(o => o.value === selectVal)) {
        sel.value = selectVal;
      } else {
        sel.value = 'num-asc'; // fallback
      }

      // Update header styling
      document.querySelectorAll('.sets-table th').forEach(h => h.classList.remove('sorted'));
      th.classList.add('sorted');
      th.querySelector('.sort-arrow').textContent = currentSort.dir === 'asc' ? '\u25B2' : '\u25BC';

      renderCollection();
    });
  });

  // Theme filter pills
  document.getElementById('themeLegend').addEventListener('click', (e) => {
    const pill = e.target.closest('.theme-pill');
    if (!pill) return;
    const cat = pill.dataset.cat;
    activeThemeFilter = activeThemeFilter === cat ? null : cat;
    renderCollection();
  });

  // Condition filter buttons
  document.querySelector('.condition-filter-group').addEventListener('click', (e) => {
    const btn = e.target.closest('.condition-filter-btn');
    if (!btn) return;
    const cond = btn.dataset.condition;
    activeConditionFilter = cond === 'all' ? null : cond;
    document.querySelectorAll('.condition-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCollection();
  });

  // Theme bar click — show info bar with value below
  function removeBarInfo() {
    const existing = document.querySelector('.theme-bar-info');
    if (existing) existing.remove();
  }

  document.getElementById('themeBar').addEventListener('click', (e) => {
    const seg = e.target.closest('.theme-bar-segment');
    if (!seg) return;

    const catKey = seg.dataset.cat;
    const cat = LEGO_DATA.categories.find(c => c.key === catKey);
    const stats = themeStats[catKey];
    if (!cat || !stats) return;

    // Remove any existing info bar
    removeBarInfo();

    // Create info bar
    const info = document.createElement('div');
    info.className = 'theme-bar-info';
    const pctOfTotal = (stats.value / summary.totalCurrent * 100).toFixed(1);
    info.innerHTML = `
      <span class="bar-info-dot" style="background:${cat.color}"></span>
      <span class="bar-info-label">${cat.icon} ${cat.label}</span>
      <span class="bar-info-value">${fmt(stats.value)}</span>
      <span class="bar-info-detail">${stats.count} sets &middot; ${pctOfTotal}% of collection</span>
      <button class="bar-info-close" title="Close">&times;</button>
    `;

    // Insert right after the bar container
    const barContainer = document.getElementById('themeBar');
    barContainer.insertAdjacentElement('afterend', info);

    // Close button
    info.querySelector('.bar-info-close').addEventListener('click', (ev) => {
      ev.stopPropagation();
      removeBarInfo();
    });
  });

  // --- Wishlist Event Listeners ---

  // Wishlist search
  let wlSearchTimeout;
  document.getElementById('wishlistSearchInput').addEventListener('input', (e) => {
    clearTimeout(wlSearchTimeout);
    wlSearchTimeout = setTimeout(() => {
      wishlistSearch = e.target.value.trim();
      renderWishlistGrid();
    }, 200);
  });

  // Wishlist filter buttons
  document.querySelector('.wishlist-filter-group').addEventListener('click', (e) => {
    const btn = e.target.closest('.wishlist-filter-btn');
    if (!btn) return;
    wishlistFilter = btn.dataset.filter;
    document.querySelectorAll('.wishlist-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderWishlistGrid();
  });

  // --- Minifigs Event Listeners ---

  // Minifigs search
  let mfSearchTimeout;
  const mfSearchInput = document.getElementById('minifigsSearchInput');
  if (mfSearchInput) {
    mfSearchInput.addEventListener('input', (e) => {
      clearTimeout(mfSearchTimeout);
      mfSearchTimeout = setTimeout(() => {
        minifigsSearch = e.target.value.trim();
        renderMinifigsGrid();
      }, 200);
    });
  }

  // Franchise filter
  const mfSideEl = document.getElementById('mfSideFilter');
  if (mfSideEl) {
    mfSideEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.mf-filter-btn');
      if (!btn) return;
      minifigsFranchiseFilter = btn.dataset.franchise || 'all';
      mfSideEl.querySelectorAll('.mf-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMinifigsGrid();
    });
  }

  // Owned/Need filter
  const mfOwnedEl = document.getElementById('mfOwnedFilter');
  if (mfOwnedEl) {
    mfOwnedEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.mf-filter-btn');
      if (!btn) return;
      minifigsOwnedFilter = btn.dataset.owned;
      mfOwnedEl.querySelectorAll('.mf-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMinifigsGrid();
    });
  }

  // --- Mobile: force card view ---
  function checkMobile() {
    if (window.innerWidth <= 600) {
      currentView = 'cards';
      document.getElementById('tableView').style.display = 'none';
      document.getElementById('cardsView').style.display = '';
      document.querySelectorAll('.view-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === 'cards');
      });
    }
  }

  checkMobile();
  window.addEventListener('resize', () => {
    checkMobile();
    if (currentPage === 'collection') renderCollection();
  });


  // Price history popup: any table row or card with a set number
  document.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    const el = e.target.closest('.ph-clickable');
    if (el) openPriceModal(el.dataset.set);
  });

  // --- Init ---
  renderCollection();

})();
