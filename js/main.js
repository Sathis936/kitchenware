/* ==========================================================================
   SHINE STEEL & KITCHENWARE - CORE INTERACTION ENGINE
   Cart State, Drawer, Quick View, Search, Toast & Navigation
   ========================================================================== */

// 1. Inquiry Cart State (Synced with localStorage)
let cart = JSON.parse(localStorage.getItem('shine_cart')) || [];

function saveCart() {
  localStorage.setItem('shine_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || 
                  WEDDING_SETS_DATA.find(w => w.id === productId);

  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      grade: product.grade || product.tag || 'SS-304',
      qty: qty
    });
  }

  saveCart();
  showToast(`Added "${product.name}" to inquiry cart!`, 'success');
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
      showToast('Item removed from cart', 'info');
    }
    saveCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from cart', 'info');
}

function clearCart() {
  cart = [];
  saveCart();
}

function updateCartUI() {
  const badgeEls = document.querySelectorAll('.cart-count-badge');
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  badgeEls.forEach(el => {
    el.textContent = totalCount;
    el.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  const cartListEl = document.getElementById('cartDrawerItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDrawerEmptyEl = document.getElementById('cartEmptyState');
  const cartDrawerContentEl = document.getElementById('cartItemsWrapper');

  if (!cartListEl) return;

  if (cart.length === 0) {
    if (cartDrawerEmptyEl) cartDrawerEmptyEl.style.display = 'block';
    if (cartDrawerContentEl) cartDrawerContentEl.style.display = 'none';
    if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
    return;
  }

  if (cartDrawerEmptyEl) cartDrawerEmptyEl.style.display = 'none';
  if (cartDrawerContentEl) cartDrawerContentEl.style.display = 'block';

  let subtotal = 0;
  cartListEl.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} <span style="font-weight:400;color:#64748b;font-size:0.75rem;">(${item.grade})</span></div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
            <span style="font-size:0.875rem;font-weight:700;min-width:20px;text-align:center;">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            <button onclick="removeFromCart('${item.id}')" style="margin-left:auto;background:none;border:none;color:#ef4444;font-size:0.8125rem;cursor:pointer;font-weight:600;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }
}

// 2. Cart Drawer Open & Close
function openCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) overlay.classList.remove('active');
}

// 3. WhatsApp Checkout & Direct Inquiry
function submitWhatsAppInquiry() {
  if (cart.length === 0) {
    showToast('Your inquiry list is empty. Add items first!', 'info');
    return;
  }

  let text = 'Hello Shine Steel & Kitchenware, I would like to inquire about the following items:%0A%0A';
  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    text += `${index + 1}. *${item.name}* (Qty: ${item.qty}) - ₹${itemTotal.toLocaleString('en-IN')}%0A`;
  });
  text += `%0A*Estimated Total:* ₹${total.toLocaleString('en-IN')}%0A`;
  text += `Please share availability, delivery estimate, and laser engraving options. Thank you!`;

  const phone = '919840012345';
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
  window.open(waUrl, '_blank');
}

// 4. Quick View Modal Engine
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || 
                  WEDDING_SETS_DATA.find(w => w.id === productId);

  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewContent');
  if (!modal || !body) return;

  const specsList = product.specs ? Object.entries(product.specs).map(([key, val]) => `
    <div class="quickview-spec-row">
      <span style="color:#64748b;text-transform:capitalize;">${key}</span>
      <span style="font-weight:700;color:#0f172a;">${val}</span>
    </div>
  `).join('') : '';

  body.innerHTML = `
    <div class="quickview-container">
      <div class="quickview-gallery">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quickview-content">
        <span class="quickview-grade">${product.grade || product.tag || 'SS-304 Surgical Grade'}</span>
        <h2 class="quickview-title">${product.name}</h2>
        <div class="quickview-price-bar">
          <span class="quickview-price">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.oldPrice ? `<span class="quickview-old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>` : ''}
          <span style="color:#10b981;font-size:0.875rem;font-weight:700;">In Stock & Ready for Dispatch</span>
        </div>
        <p style="color:#64748b;font-size:0.9375rem;line-height:1.6;margin-bottom:1rem;">
          ${product.description}
        </p>

        <div class="quickview-specs-list">
          ${specsList}
        </div>

        <div style="display:flex;gap:0.75rem;align-items:center;margin-top:auto;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;border:1px solid #cbd5e1;border-radius:9999px;padding:0.25rem 0.6rem;background:#f8fafc;">
            <button onclick="decrementModalQty()" style="border:none;background:none;font-size:1.1rem;cursor:pointer;padding:0 0.4rem;">-</button>
            <span id="modalProductQty" style="font-weight:700;padding:0 0.6rem;min-width:24px;text-align:center;">1</span>
            <button onclick="incrementModalQty()" style="border:none;background:none;font-size:1.1rem;cursor:pointer;padding:0 0.4rem;">+</button>
          </div>

          <button class="btn btn-primary" onclick="addModalItemToCart('${product.id}')" style="flex-grow:1;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Inquiry List
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

let modalCurrentQty = 1;
function incrementModalQty() {
  modalCurrentQty++;
  const el = document.getElementById('modalProductQty');
  if (el) el.textContent = modalCurrentQty;
}
function decrementModalQty() {
  if (modalCurrentQty > 1) {
    modalCurrentQty--;
    const el = document.getElementById('modalProductQty');
    if (el) el.textContent = modalCurrentQty;
  }
}
function addModalItemToCart(productId) {
  addToCart(productId, modalCurrentQty);
  modalCurrentQty = 1;
  closeQuickView();
}

// 5. Global Search Modal
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.add('active');
    const input = document.getElementById('globalSearchInput');
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) modal.classList.remove('active');
}

function handleGlobalSearch(query) {
  renderSearchResults(query.trim().toLowerCase());
}

function renderSearchResults(query) {
  const resultsBox = document.getElementById('searchResultsBox');
  if (!resultsBox) return;

  if (!query) {
    resultsBox.innerHTML = '<p style="color:#94a3b8;font-size:0.875rem;text-align:center;padding:1.5rem 0;">Type any utensil name (e.g., Kadai, Thali, Spice Box, Wedding Set)...</p>';
    return;
  }

  const allItems = [...PRODUCTS_DATA, ...WEDDING_SETS_DATA];
  const matched = allItems.filter(item => 
    item.name.toLowerCase().includes(query) || 
    (item.categoryName && item.categoryName.toLowerCase().includes(query)) ||
    (item.description && item.description.toLowerCase().includes(query))
  );

  if (matched.length === 0) {
    resultsBox.innerHTML = '<p style="color:#ef4444;font-size:0.875rem;text-align:center;padding:1.5rem 0;">No matching utensils found. Try searching "Kadai", "Thali", or "Copper".</p>';
    return;
  }

  resultsBox.innerHTML = matched.slice(0, 5).map(item => `
    <div class="search-result-item" onclick="openQuickView('${item.id}'); closeSearchModal();">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div style="font-size:0.9375rem;font-weight:700;color:#0f172a;">${item.name}</div>
        <div style="font-size:0.8125rem;color:#b8860b;font-weight:600;">₹${item.price.toLocaleString('en-IN')} • ${item.grade || item.tag || 'SS-304'}</div>
      </div>
      <button class="btn btn-sm btn-outline-dark" style="margin-left:auto;">View</button>
    </div>
  `).join('');
}

// 6. Toast Notification Engine
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 7. Mobile Drawer Navigation
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

// 8. Newsletter Subscription
function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  if (emailInput && emailInput.value) {
    showToast(`Thank you! Subscription confirmed for ${emailInput.value}`, 'success');
    emailInput.value = '';
  }
}

// 9. Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Scroll effect on header
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Close modals on Escape key or overlay backdrop click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickView();
      closeSearchModal();
      closeMobileMenu();
      document.querySelectorAll('.nav-dropdown').forEach(d => {
        d.classList.remove('is-open');
        const t = d.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Accessible Dropdown Menu Hover & Touch Support
  const dropdownEls = document.querySelectorAll('.nav-dropdown');
  dropdownEls.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 || ('ontouchstart' in window)) {
        e.preventDefault();
        const isOpen = dropdown.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

  document.addEventListener('click', (e) => {
    dropdownEls.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  const quickViewModal = document.getElementById('quickViewModal');
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  const searchModal = document.getElementById('searchModal');
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }
});


// 10. Theme Engine (Dark / Light Theme Toggle)
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('shine_theme', newTheme);
  } catch (e) {}
  updateThemeUI(newTheme);
  showToast(newTheme === 'dark' ? 'Dark theme enabled' : 'Light theme enabled', 'info');
}

function updateThemeUI(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    const label = btn.querySelector('.theme-label');
    const moonSvg = btn.querySelector('.moon-svg');
    const sunSvg = btn.querySelector('.sun-svg');
    if (theme === 'dark') {
      if (label) label.textContent = 'Light';
      if (moonSvg) moonSvg.style.display = 'none';
      if (sunSvg) sunSvg.style.display = 'inline-block';
      btn.classList.add('active');
    } else {
      if (label) label.textContent = 'Dark';
      if (moonSvg) moonSvg.style.display = 'inline-block';
      if (sunSvg) sunSvg.style.display = 'none';
      btn.classList.remove('active');
    }
  });
}

// 11. RTL Engine (Right-to-Left / Left-to-Right Toggle)
function toggleRTL() {
  const html = document.documentElement;
  const currentDir = html.getAttribute('dir') || 'ltr';
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  html.setAttribute('dir', newDir);
  if (newDir === 'rtl') {
    html.classList.add('rtl-mode');
  } else {
    html.classList.remove('rtl-mode');
  }
  try {
    localStorage.setItem('shine_dir', newDir);
  } catch (e) {}
  updateRTLUI(newDir);
  showToast(newDir === 'rtl' ? 'Switched to Right-to-Left (RTL)' : 'Switched to Left-to-Right (LTR)', 'info');
}

function updateRTLUI(dir) {
  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    const label = btn.querySelector('.rtl-label');
    if (dir === 'rtl') {
      if (label) label.textContent = 'LTR';
      btn.classList.add('active');
    } else {
      if (label) label.textContent = 'RTL';
      btn.classList.remove('active');
    }
  });
}

// 12. Social Media Link Action Handler
function handleSocialClick(platform, url, event) {
  if (event) event.preventDefault();
  showToast(`Opening Shine Steel on ${platform}...`, 'info');
  setTimeout(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, 400);
}

// Run state initialization on script evaluation to prevent visual flicker
(function() {
  try {
    const savedTheme = localStorage.getItem('shine_theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    const savedDir = localStorage.getItem('shine_dir');
    if (savedDir === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add('rtl-mode');
    }
  } catch (e) {}
})();

// Ensure button UI matches on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedTheme = localStorage.getItem('shine_theme') || 'light';
    updateThemeUI(savedTheme);
    const savedDir = localStorage.getItem('shine_dir') || 'ltr';
    updateRTLUI(savedDir);
  } catch (e) {}
});
