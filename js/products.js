/* ==========================================================================
   SHINE STEEL & KITCHENWARE - PRODUCTS ENGINE
   Category Filters, Live Search, Dynamic Sorting, & Grid Render
   ========================================================================== */

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

function initProductsPage() {
  renderProducts();

  // Filter Pill clicks
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  const countLabel = document.getElementById('productsCountLabel');
  if (!container) return;

  let filtered = [...PRODUCTS_DATA];

  // Category Filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Search Filter
  if (currentSearch) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch) ||
      p.grade.toLowerCase().includes(currentSearch)
    );
  }

  // Sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} Utensils`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0f172a;margin-bottom:0.5rem;">No utensils matched your filter</h3>
        <p style="color:#64748b;font-size:0.9375rem;margin-bottom:1.25rem;">Try choosing a different category or clearing your search term.</p>
        <button class="btn btn-outline-dark" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="product-card">
      <div class="product-badge-group">
        <span class="product-badge badge-grade">${item.grade}</span>
        ${item.badge ? `<span class="product-badge badge-wedding">${item.badge}</span>` : ''}
      </div>

      <div class="product-img-box">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-quick-actions">
          <button class="btn btn-dark btn-sm btn-block" onclick="openQuickView('${item.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
        </div>
      </div>

      <div class="product-content">
        <span class="product-category-tag">${item.categoryName}</span>
        <h3 class="product-title">${item.name}</h3>
        
        <div class="product-meta-specs">
          <span>${item.specs?.capacity || item.specs?.pieces || item.specs?.diameter || 'Food-Grade'}</span>
          <span>•</span>
          <span>${item.specs?.gauge || 'Heavy Base'}</span>
        </div>

        <div class="product-rating">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span style="font-weight:700;">${item.rating}</span>
          <span class="review-count">(${item.reviews})</span>
        </div>

        <div class="product-footer">
          <div class="product-price-box">
            <span class="product-price">₹${item.price.toLocaleString('en-IN')}</span>
            ${item.oldPrice ? `<span class="product-old-price">₹${item.oldPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>

          <button class="icon-btn" onclick="addToCart('${item.id}')" title="Add to Inquiry Cart" style="background:var(--color-primary);color:var(--color-white);border-color:var(--color-primary);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  currentSort = 'featured';

  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsGrid')) {
    initProductsPage();
  }
});
