// ========================================
// LEGO Collection Value Tracker - App Logic
// ========================================

(function() {
  'use strict';

  // --- State ---
  let currentView = 'table';
  let currentSort = { key: 'num', dir: 'asc' };
  let activeThemeFilter = null;
  let searchQuery = '';

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
      { label: 'Total Sets', value: summary.totalSets, sub: `across ${LEGO_DATA.categories.length} themes` },
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
    const bar = document.getElementById('themeBar');
    const legend = document.getElementById('themeLegend');

    const total = summary.totalCurrent;

    bar.innerHTML = LEGO_DATA.categories.map(cat => {
      const stats = themeStats[cat.key];
      const widthPct = (stats.value / total * 100);
      if (widthPct < 0.5) return '';
      return `<div class="theme-bar-segment"
        style="width:${widthPct}%;background:${cat.color}"
        data-cat="${cat.key}"
        title="${cat.label}: ${fmt(stats.value)} (${widthPct.toFixed(1)}%)">${widthPct > 8 ? fmt(stats.value) : ''}</div>`;
    }).join('');

    legend.innerHTML = LEGO_DATA.categories.map(cat => {
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

    let html = '';
    let lastCat = '';

    sorted.forEach(s => {
      if (useGroups && s.category !== lastCat) {
        lastCat = s.category;
        html += `<tr class="category-row"><td colspan="11">${getCategoryIcon(s.category)} ${getCategoryLabel(s.category)}</td></tr>`;
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

    let html = '';
    let lastCat = '';

    sorted.forEach(s => {
      if (useGroups && s.category !== lastCat) {
        lastCat = s.category;
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
      (searchQuery ? ` matching "${searchQuery}"` : '');
  }

  // --- Render All ---
  function render() {
    renderStats();
    renderThemeBreakdown();
    if (currentView === 'table') {
      renderTable();
    } else {
      renderCards();
    }
  }

  // --- Event Listeners ---

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;

      document.getElementById('tableView').style.display = currentView === 'table' ? '' : 'none';
      document.getElementById('cardsView').style.display = currentView === 'cards' ? '' : 'none';

      render();
    });
  });

  // Search
  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value.trim();
      render();
    }, 200);
  });

  // Sort select
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    const [key, dir] = e.target.value.split('-');
    currentSort = { key, dir };
    render();
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

      render();
    });
  });

  // Theme filter pills
  document.getElementById('themeLegend').addEventListener('click', (e) => {
    const pill = e.target.closest('.theme-pill');
    if (!pill) return;
    const cat = pill.dataset.cat;
    activeThemeFilter = activeThemeFilter === cat ? null : cat;
    render();
  });

  // Theme bar click
  document.getElementById('themeBar').addEventListener('click', (e) => {
    const seg = e.target.closest('.theme-bar-segment');
    if (!seg) return;
    const cat = seg.dataset.cat;
    activeThemeFilter = activeThemeFilter === cat ? null : cat;
    render();
  });

  // --- Init ---
  render();

})();
