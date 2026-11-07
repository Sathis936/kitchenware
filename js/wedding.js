/* ==========================================================================
   SHINE STEEL & KITCHENWARE - WEDDING SETS ENGINE
   Interactive Trousseau Customizer & Wedding Package Catalog
   ========================================================================== */

let customizerState = {
  familySize: 6,       // 4, 6, 8, 12
  finish: 'mirror',    // mirror, copper, brass
  trunk: true,         // Velvet Trunk
  engraving: true,     // Laser Engraving
  extraBowls: false    // Extra Sweet Katories
};

const BASE_RATES = {
  4: { pieces: 32, basePrice: 9800 },
  6: { pieces: 51, basePrice: 15499 },
  8: { pieces: 75, basePrice: 22800 },
  12: { pieces: 101, basePrice: 28999 }
};

const FINISH_MULTIPLIERS = {
  mirror: { name: 'Platinum Mirror SS-304', add: 0 },
  copper: { name: 'Dual Copper-Bottom Base', add: 2400 },
  brass: { name: 'Heritage Brass Rimmed Fusion', add: 3800 }
};

function initWeddingPage() {
  renderWeddingCatalog();
  setupCustomizerEvents();
  calculateCustomizer();
}

function renderWeddingCatalog() {
  const container = document.getElementById('weddingCatalogGrid');
  if (!container) return;

  container.innerHTML = WEDDING_SETS_DATA.map(item => `
    <div class="product-card" style="border: 1px solid #e2e8f0;">
      <div class="product-badge-group">
        <span class="product-badge badge-wedding">${item.pieces} Pieces</span>
        <span class="product-badge badge-grade">${item.tag}</span>
      </div>

      <div class="product-img-box" style="height: 280px;">
        <img src="${item.image}" alt="${item.name}">
        <div class="product-quick-actions">
          <button class="btn btn-dark btn-sm btn-block" onclick="openQuickView('${item.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            View Complete Set
          </button>
        </div>
      </div>

      <div class="product-content wedding-product-content">
        <span class="product-category-tag">Bridal Trousseau Heirloom</span>
        <h3 class="product-title" style="font-size: 1.25rem;">${item.name}</h3>
        <p class="wedding-product-description">
          ${item.description}
        </p>

        <div class="wedding-product-inclusions" style="background:#f8fafc;padding:0.85rem;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#b8860b;margin-bottom:0.4rem;">Key Inclusions:</div>
          <ul style="font-size:0.8125rem;color:#334155;display:flex;flex-direction:column;gap:0.3rem;">
            ${item.includes.slice(0, 4).map(inc => `<li style="display:flex;align-items:center;gap:0.4rem;"><span style="color:#10b981;">✔</span> ${inc}</li>`).join('')}
          </ul>
        </div>

        <div class="product-footer">
          <div class="product-price-box">
            <span class="product-price">₹${item.price.toLocaleString('en-IN')}</span>
            <span class="product-old-price">₹${item.oldPrice.toLocaleString('en-IN')}</span>
          </div>

          <div style="display:flex;gap:0.5rem;">
            <button class="btn btn-sm btn-primary" onclick="addToCart('${item.id}')">
              Inquire Set
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupCustomizerEvents() {
  // Family size tiles
  document.querySelectorAll('[data-custom-size]').forEach(tile => {
    tile.addEventListener('click', () => {
      document.querySelectorAll('[data-custom-size]').forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      customizerState.familySize = parseInt(tile.getAttribute('data-custom-size'));
      calculateCustomizer();
    });
  });

  // Finish tiles
  document.querySelectorAll('[data-custom-finish]').forEach(tile => {
    tile.addEventListener('click', () => {
      document.querySelectorAll('[data-custom-finish]').forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      customizerState.finish = tile.getAttribute('data-custom-finish');
      calculateCustomizer();
    });
  });

  // Add-on checkboxes
  const trunkCheck = document.getElementById('addonTrunk');
  if (trunkCheck) {
    trunkCheck.addEventListener('change', (e) => {
      customizerState.trunk = e.target.checked;
      calculateCustomizer();
    });
  }

  const engravingCheck = document.getElementById('addonEngraving');
  if (engravingCheck) {
    engravingCheck.addEventListener('change', (e) => {
      customizerState.engraving = e.target.checked;
      calculateCustomizer();
    });
  }

  const extraBowlsCheck = document.getElementById('addonExtraBowls');
  if (extraBowlsCheck) {
    extraBowlsCheck.addEventListener('change', (e) => {
      customizerState.extraBowls = e.target.checked;
      calculateCustomizer();
    });
  }
}

function calculateCustomizer() {
  const baseData = BASE_RATES[customizerState.familySize] || BASE_RATES[6];
  const finishData = FINISH_MULTIPLIERS[customizerState.finish] || FINISH_MULTIPLIERS['mirror'];
  
  let pieceCount = baseData.pieces;
  let totalPrice = baseData.basePrice + finishData.add;

  let trunkCost = 0;
  if (customizerState.trunk) {
    trunkCost = 1400;
    totalPrice += trunkCost;
  }

  let engravingCost = 0;
  if (customizerState.engraving) {
    engravingCost = 0; // FREE promotional add-on!
  }

  let extraBowlsCost = 0;
  if (customizerState.extraBowls) {
    extraBowlsCost = 950;
    pieceCount += 12;
    totalPrice += extraBowlsCost;
  }

  // Update UI DOM
  const piecesEl = document.getElementById('customPiecesSummary');
  const sizeEl = document.getElementById('customSizeSummary');
  const finishEl = document.getElementById('customFinishSummary');
  const trunkEl = document.getElementById('customTrunkSummary');
  const engravingEl = document.getElementById('customEngravingSummary');
  const totalPriceEl = document.getElementById('customTotalPrice');

  if (piecesEl) piecesEl.textContent = `${pieceCount} Utensils`;
  if (sizeEl) sizeEl.textContent = `${customizerState.familySize}-Person Family Base`;
  if (finishEl) finishEl.textContent = finishData.name;
  if (trunkEl) trunkEl.textContent = customizerState.trunk ? 'Handcrafted Velvet Trunk (₹1,400)' : 'Standard Safe Packaging (Free)';
  if (engravingEl) engravingEl.textContent = customizerState.engraving ? 'Custom Couple Crest (FREE)' : 'None';
  if (totalPriceEl) totalPriceEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
}

function submitCustomWeddingQuote() {
  const coupleName = document.getElementById('customCoupleNames')?.value || 'Bride & Groom';
  const weddingDate = document.getElementById('customWeddingDate')?.value || 'Upcoming Wedding';
  const finishData = FINISH_MULTIPLIERS[customizerState.finish]?.name;
  const totalPrice = document.getElementById('customTotalPrice')?.textContent || '₹0';
  const pieceCount = document.getElementById('customPiecesSummary')?.textContent || '51 Utensils';

  let text = `Hello Shine Steel, I customized a Wedding Trousseau Bundle:%0A`;
  text += `*Couple:* ${coupleName}%0A`;
  text += `*Date:* ${weddingDate}%0A`;
  text += `*Base:* ${customizerState.familySize}-Person Set (${pieceCount})%0A`;
  text += `*Metal Finish:* ${finishData}%0A`;
  text += `*Velvet Trunk:* ${customizerState.trunk ? 'Yes' : 'No'}%0A`;
  text += `*Laser Engraving:* ${customizerState.engraving ? 'Yes' : 'No'}%0A`;
  text += `*Estimated Total:* ${totalPrice}%0A%0A`;
  text += `Please schedule a showroom inspection & confirm availability.`;

  const phone = '919840012345';
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
  window.open(waUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('weddingCatalogGrid') || document.getElementById('customTotalPrice')) {
    initWeddingPage();
  }
});
