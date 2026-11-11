/* ==========================================================================
   SHINE STEEL & KITCHENWARE - SERVICES ENGINE
   Specialized Metalware Services, Price Calculator & Booking Modal
   ========================================================================== */

function initServicesPage() {
  renderServicesGrid();
  setupServiceBookingValidation();
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

        <ul class="service-features-list" style="font-size:0.8125rem;color:#475569;margin-bottom:1.5rem;display:flex;flex-direction:column;gap:0.35rem;list-style:none;padding:0;min-height:6.5rem;">
          ${srv.features.map(f => `<li style="display:flex;align-items:center;gap:0.4rem;min-height:1.35rem;"><span style="color:#10b981;flex-shrink:0;">✔</span> <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${f}</span></li>`).join('')}
        </ul>

        <button class="btn btn-primary btn-block" style="margin-top:auto;" onclick="openServiceModal('${srv.id}')">
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

function setServiceError(inputEl, errorEl, message) {
  if (inputEl) {
    inputEl.classList.add('is-invalid');
    inputEl.classList.remove('is-valid');
  }
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function clearServiceError(inputEl, errorEl) {
  if (inputEl) {
    inputEl.classList.remove('is-invalid');
    if (inputEl.value.trim().length > 0) {
      inputEl.classList.add('is-valid');
    } else {
      inputEl.classList.remove('is-valid');
    }
  }
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
}

function setupServiceBookingValidation() {
  const dateInput = document.getElementById('serviceDropoffDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  const nameInput = document.getElementById('serviceCustomerName');
  const nameError = document.getElementById('serviceNameError');
  const phoneInput = document.getElementById('serviceCustomerPhone');
  const phoneError = document.getElementById('servicePhoneError');
  const emailInput = document.getElementById('serviceCustomerEmail');
  const emailError = document.getElementById('serviceEmailError');
  const dateError = document.getElementById('serviceDateError');

  // Name validation: block numbers from being typed, allow letters only
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key && /[0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setServiceError(nameInput, nameError, 'Numbers are not allowed in name field. Letters only.');
      }
    });

    nameInput.addEventListener('input', () => {
      const sanitized = nameInput.value.replace(/[^A-Za-z\s.'-]/g, '');
      if (sanitized !== nameInput.value) {
        nameInput.value = sanitized;
        setServiceError(nameInput, nameError, 'Numbers are not allowed in name field. Letters only.');
        return;
      }
      const val = nameInput.value.trim();
      if (val.length >= 2 && !/^[A-Za-z\s.'-]{2,50}$/.test(val)) {
        setServiceError(nameInput, nameError, 'Full name should only contain letters.');
      } else if (val.length >= 2) {
        clearServiceError(nameInput, nameError);
      }
    });

    nameInput.addEventListener('blur', () => {
      const val = nameInput.value.trim();
      if (!val || val.length < 2) {
        setServiceError(nameInput, nameError, 'Full name is required (minimum 2 letters).');
      } else if (!/^[A-Za-z\s.'-]{2,50}$/.test(val)) {
        setServiceError(nameInput, nameError, 'Full name must contain letters and spaces only.');
      } else {
        clearServiceError(nameInput, nameError);
      }
    });
  }

  // Phone validation: block letters from being typed, allow digits only
  if (phoneInput) {
    phoneInput.addEventListener('keydown', (e) => {
      if (e.key && /[a-zA-Z]/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setServiceError(phoneInput, phoneError, 'Letters are not allowed in phone number. Digits only.');
      }
    });

    phoneInput.addEventListener('input', () => {
      const cleaned = phoneInput.value.replace(/[^0-9+\s-]/g, '');
      if (cleaned !== phoneInput.value) {
        phoneInput.value = cleaned;
        setServiceError(phoneInput, phoneError, 'Letters are not allowed. Phone number must contain digits only.');
        return;
      }
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        setServiceError(phoneInput, phoneError, 'Please enter a valid 10-digit phone or WhatsApp number.');
      } else if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
        clearServiceError(phoneInput, phoneError);
      }
    });

    phoneInput.addEventListener('blur', () => {
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (!digitsOnly) {
        setServiceError(phoneInput, phoneError, 'Phone number is required.');
      } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        setServiceError(phoneInput, phoneError, 'Please enter a valid 10 to 15 digit mobile or WhatsApp number.');
      } else {
        clearServiceError(phoneInput, phoneError);
      }
    });
  }

  // Email validation: strict RFC regex
  if (emailInput) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();
      if (val && !emailRegex.test(val)) {
        setServiceError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
      } else if (val) {
        clearServiceError(emailInput, emailError);
      }
    });

    emailInput.addEventListener('blur', () => {
      const val = emailInput.value.trim();
      if (val && !emailRegex.test(val)) {
        setServiceError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
      } else {
        clearServiceError(emailInput, emailError);
      }
    });
  }

  // Date validation: no past dates
  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const val = dateInput.value;
      if (val) {
        const selected = new Date(val + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
          setServiceError(dateInput, dateError, 'Preferred service date cannot be in the past.');
        } else {
          clearServiceError(dateInput, dateError);
        }
      } else {
        clearServiceError(dateInput, dateError);
      }
    });
  }
}

function handleServiceBookingSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const nameInput = form.querySelector('#serviceCustomerName');
  const nameError = form.querySelector('#serviceNameError');
  const phoneInput = form.querySelector('#serviceCustomerPhone');
  const phoneError = form.querySelector('#servicePhoneError');
  const emailInput = form.querySelector('#serviceCustomerEmail');
  const emailError = form.querySelector('#serviceEmailError');
  const dateInput = form.querySelector('#serviceDropoffDate');
  const dateError = form.querySelector('#serviceDateError');
  const serviceType = form.querySelector('#serviceSelectDropdown')?.selectedOptions[0]?.text || 'General Utensil Service';

  let isValid = true;
  let firstInvalid = null;

  // Validate Name (letters only, numbers disallowed)
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name || name.length < 2) {
    setServiceError(nameInput, nameError, 'Please enter your full name (minimum 2 letters).');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameInput;
  } else if (!/^[A-Za-z\s.'-]{2,50}$/.test(name)) {
    setServiceError(nameInput, nameError, 'Full name should only contain letters and spaces.');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameInput;
  } else {
    clearServiceError(nameInput, nameError);
  }

  // Validate Phone (digits only, letters disallowed)
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 10 || digitsOnly.length > 15) {
    setServiceError(phoneInput, phoneError, 'Please enter a valid 10 to 15 digit mobile or WhatsApp number.');
    isValid = false;
    if (!firstInvalid) firstInvalid = phoneInput;
  } else {
    clearServiceError(phoneInput, phoneError);
  }

  // Validate Email (if entered)
  const email = emailInput ? emailInput.value.trim() : '';
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    setServiceError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
    isValid = false;
    if (!firstInvalid) firstInvalid = emailInput;
  } else {
    clearServiceError(emailInput, emailError);
  }

  // Validate Date (if entered)
  const dateVal = dateInput ? dateInput.value : '';
  if (dateVal) {
    const selected = new Date(dateVal + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      setServiceError(dateInput, dateError, 'Preferred service date cannot be in the past.');
      isValid = false;
      if (!firstInvalid) firstInvalid = dateInput;
    } else {
      clearServiceError(dateInput, dateError);
    }
  }

  if (!isValid) {
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const quoteRef = 'SS-SRV-' + Math.floor(100000 + Math.random() * 900000);
  closeServiceModal();
  showToast(`Booking received for ${serviceType}! Quote Ref: ${quoteRef}. Workshop advisor will call ${phone} shortly.`, 'success');
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('servicesGrid') || document.getElementById('serviceBookingModal')) {
    initServicesPage();
  }
});
