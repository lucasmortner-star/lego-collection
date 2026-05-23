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
    appreciationPct: s.retail > 0 ? ((s.currentValue - s.retail) / s.retail * 100) : 0
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
      { label: 'Current Value', value: fmt(summary.totalCurrent), cls: 'accent', sub: 'built/displayed condition' },
      { label: 'Appreciation', value: fmt(summary.appreciation), cls: 'green', sub: pct(summary.appreciationPct) + ' overall return' },
      { label: '3-Year Projected', value: fmt(summary.totalProjected), sub: '+' + fmt(summary.projectedGrowth) + ' projected growth' },
      { label: 'Avg. Set Value', value: fmt(summary.totalCurrent / summary.totalSets), sub: 'per set average' },
    ];

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
      tbody.innerHTML = `<tr><td colspan="11"><div class="empty-state">
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
        html += `<tr class="category-row"><td colspan="11">${getCategoryIcon(s.category)} ${getCategoryLabel(s.category)} <span class="category-row-stats">${catSets.length} sets &middot; ${fmt(catValue)}</span></td></tr>`;
      }

      const apprClass = s.appreciation >= 0 ? 'positive' : 'negative';
      const apprSymbol = s.appreciation >= 0 ? '↑' : '↓';

      html += `<tr>
        <td>${s.num}</td>
        <td><span class="set-number">${s.setNumber}</span></td>
        <td><span class="set-name">${s.name}</span></td>
        <td class="hide-mobile"><span class="theme-badge"><span class="dot" style="background:${getCategoryColor(s.category)};width:6px;height:6px;border-radius:50%;display:inline-block"></span> ${s.theme}</span></td>
        <td>${s.year}</td>
        <td class="hide-mobile">${s.pieces.toLocaleString()}</td>
        <td class="hide-mobile">${s.retail > 0 ? fmtFull(s.retail) : '—'}</td>
        <td class="hide-mobile"><span class="condition-badge ${getConditionClass(s.condition)}">${s.condition}</span></td>
        <td>
          <span class="value-cell">${fmt(s.currentValue)}</span>
          <br><span class="appreciation ${apprClass}">${apprSymbol} ${s.retail > 0 ? pct(s.appreciationPct) : '—'}</span>
        </td>
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

      html += `<div class="set-card">
        <div style="display:flex;gap:12px;">
          <div class="card-category-indicator" style="background:${color}"></div>
          <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
            <div class="card-top">
              <span class="card-title">${s.name}</span>
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
                <label>Retail</label>
                <div class="val">${s.retail > 0 ? fmt(s.retail) : '—'}</div>
              </div>
              <div class="card-val-block">
                <label>Current Value</label>
                <div class="val">${fmt(s.currentValue)}</div>
              </div>
              <div class="card-val-block">
                <label>3-Yr Projected</label>
                <div class="val green">${fmt(s.projectedValue)}</div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span class="appreciation ${apprClass}" style="font-size:13px">${s.appreciation >= 0 ? '↑' : '↓'} ${s.retail > 0 ? pct(s.appreciationPct) : '—'} from retail</span>
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

    statsEl.innerHTML = `
      <div class="wl-stat-card">
        <div class="wl-stat-label">Wishlist Items</div>
        <div class="wl-stat-value">${totalItems}</div>
      </div>
      <div class="wl-stat-card">
        <div class="wl-stat-label">Est. Total Cost</div>
        <div class="wl-stat-value accent">${fmt(totalRetail)}</div>
      </div>
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

        return `<div class="wl-card">
          <div class="wl-priority-bar ${prioClass}"></div>
          <div class="wl-card-body">
            <div class="wl-card-header">
              <span class="wl-card-name">${item.name}</span>
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

    el.innerHTML = `
      <div class="mf-stat-card">
        <div class="mf-stat-label">Minifigs in Collection</div>
        <div class="mf-stat-value">${owned.length}</div>
        <div class="mf-stat-sub">${totalOwnedCopies} total figs (incl. duplicates)</div>
      </div>
      <div class="mf-stat-card">
        <div class="mf-stat-label">Total Value</div>
        <div class="mf-stat-value accent">${fmt(totalValue)}</div>
        <div class="mf-stat-sub">Brickify market value</div>
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

    // Toggle footer visibility
    document.getElementById('collectionFooter').style.display = page === 'collection' ? '' : 'none';
    document.getElementById('wishlistFooter').style.display = page === 'wishlist' ? '' : 'none';
    document.getElementById('minifigsFooter').style.display = page === 'minifigs' ? '' : 'none';

    // Toggle header controls visibility (search/view toggle only for collection)
    document.querySelector('.header-controls').style.display = page === 'collection' ? '' : 'none';

    // Render the active page
    if (page === 'collection') {
      renderCollection();
    } else if (page === 'wishlist') {
      renderWishlist();
    } else if (page === 'minifigs') {
      renderMinifigs();
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


  // --- Init ---
  renderCollection();

})();
