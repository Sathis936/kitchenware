/* ==========================================================================
   SHINE STEEL & KITCHENWARE - SERVICES ENGINE
   Specialized Metalware Services, Price Calculator & Booking Modal
   ========================================================================== */

function initServicesPage() {
  renderServicesGrid();
}

function renderServicesGrid() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(srv => `
    <div class="service-card">
      <div class="service-img-wrap">
        <img src="${srv.image}" alt="${srv.title}" loading="lazy">
      </div>
      <div class="service-card-body">
        <span class="service-badge">${srv.category}</span>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.description}</p>

        <div class="service-specs-list">
          <div class="service-spec-item">
            <span class="service-spec-label">Pricing:</span>
            <span class="service-spec-val" style="color:#b8860b;">${srv.priceStarting}</span>
          </div>
          <div class="service-spec-item">
            <span class="service-spec-label">Turnaround:</span>
            <span class="service-spec-val">${srv.turnaround}</span>
          </div>
        </div>

        <ul style="font-size:0.8125rem;color:#475569;margin-bottom:1.5rem;display:flex;flex-direction:column;gap:0.35rem;">
          ${srv.features.map(f => `<li style="display:flex;align-items:center;gap:0.4rem;"><span style="color:#10b981;">✔</span> ${f}</li>`).join('')}
        </ul>

        <button class="btn btn-primary btn-block" onclick="openServiceModal('${srv.id}')">
          Book This Service
        </button>
      </div>
    </div>
  `).join('');
}

function openServiceModal(serviceId) {
  const srv = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];
  const modal = document.getElementById('serviceBookingModal');
  const select = document.getElementById('serviceSelectDropdown');
  if (!modal) return;

  if (select) {
    select.value = srv.id;
  }

  modal.classList.add('active');
}

function closeServiceModal() {
  const modal = document.getElementById('serviceBookingModal');
  if (modal) modal.classList.remove('active');
}

function handleServiceBookingSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#serviceCustomerName')?.value;
  const phone = form.querySelector('#serviceCustomerPhone')?.value;
  const serviceType = form.querySelector('#serviceSelectDropdown')?.selectedOptions[0]?.text;
  const quoteRef = 'SS-SRV-' + Math.floor(100000 + Math.random() * 900000);

  closeServiceModal();
  showToast(`Booking received! Quote Ref: ${quoteRef}. Our workshop technician will call ${phone} shortly.`, 'success');
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('servicesGrid')) {
    initServicesPage();
  }
});
