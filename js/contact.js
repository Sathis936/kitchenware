/* ==========================================================================
   SHINE STEEL & KITCHENWARE - CONTACT & FAQ ENGINE
   Showroom Appointments, Inquiries & FAQ Accordion with Robust Validation
   ========================================================================== */

function initContactPage() {
  setupFaqAccordion();
  setupContactFormValidation();
}

function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

function setFieldError(inputEl, errorEl, message) {
  if (inputEl) {
    inputEl.classList.add('is-invalid');
    inputEl.classList.remove('is-valid');
  }
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function clearFieldError(inputEl, errorEl) {
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

function setupContactFormValidation() {
  const dateInput = document.getElementById('contactVisitDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  const nameInput = document.getElementById('contactName');
  const nameError = document.getElementById('contactNameError');
  const phoneInput = document.getElementById('contactPhone');
  const phoneError = document.getElementById('contactPhoneError');
  const emailInput = document.getElementById('contactEmail');
  const emailError = document.getElementById('contactEmailError');
  const dateError = document.getElementById('contactVisitDateError');
  const typeInput = document.getElementById('contactInquiryType');
  const typeError = document.getElementById('contactInquiryTypeError');
  const msgInput = document.getElementById('contactMessage');
  const msgError = document.getElementById('contactMessageError');

  // Real-time phone validation: numbers only (block letters from being typed)
  if (phoneInput) {
    phoneInput.addEventListener('keydown', (e) => {
      // Disallow letters from being typed
      if (e.key && /[a-zA-Z]/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setFieldError(phoneInput, phoneError, 'Letters are not allowed in phone number. Digits only.');
      }
    });

    phoneInput.addEventListener('input', () => {
      // Immediately purge any non-digits (allow + for country code, space, and hyphen)
      const cleaned = phoneInput.value.replace(/[^0-9+\s-]/g, '');
      if (cleaned !== phoneInput.value) {
        phoneInput.value = cleaned;
        setFieldError(phoneInput, phoneError, 'Letters are not allowed. Phone number must contain digits only.');
        return;
      }
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        setFieldError(phoneInput, phoneError, 'Please enter a valid 10-digit phone or WhatsApp number.');
      } else if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
        clearFieldError(phoneInput, phoneError);
      }
    });

    phoneInput.addEventListener('blur', () => {
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (!digitsOnly) {
        setFieldError(phoneInput, phoneError, 'Phone number is required.');
      } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        setFieldError(phoneInput, phoneError, 'Please enter a valid 10 to 15 digit mobile or WhatsApp number.');
      } else {
        clearFieldError(phoneInput, phoneError);
      }
    });
  }

  // Real-time name validation: letters only (block numbers from being typed)
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      // Disallow digits 0-9 from being typed
      if (e.key && /[0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setFieldError(nameInput, nameError, 'Numbers are not allowed in full name. Letters only.');
      }
    });

    nameInput.addEventListener('input', () => {
      // Immediately purge any numbers or disallowed symbols
      const sanitized = nameInput.value.replace(/[^A-Za-z\s.'-]/g, '');
      if (sanitized !== nameInput.value) {
        nameInput.value = sanitized;
        setFieldError(nameInput, nameError, 'Numbers are not allowed in full name. Letters only.');
        return;
      }
      const val = nameInput.value.trim();
      if (val.length >= 2 && !/^[A-Za-z\s.'-]{2,50}$/.test(val)) {
        setFieldError(nameInput, nameError, 'Full name should only contain letters.');
      } else if (/(.)\1{3,}/i.test(val)) {
        setFieldError(nameInput, nameError, 'Please enter a genuine name (avoid repeated characters).');
      } else if (val.length >= 2) {
        clearFieldError(nameInput, nameError);
      }
    });

    nameInput.addEventListener('blur', () => {
      const val = nameInput.value.trim();
      if (!val || val.length < 2) {
        setFieldError(nameInput, nameError, 'Full name is required (minimum 2 letters).');
      } else if (!/^[A-Za-z\s.'-]{2,50}$/.test(val)) {
        setFieldError(nameInput, nameError, 'Full name must contain letters and spaces only.');
      } else if (/(.)\1{3,}/i.test(val)) {
        setFieldError(nameInput, nameError, 'Please enter a valid genuine name.');
      } else {
        clearFieldError(nameInput, nameError);
      }
    });
  }

  // Real-time email validation
  if (emailInput) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();
      if (val.length > 5 && !emailRegex.test(val)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email format (e.g. name@domain.com).');
      } else if (emailRegex.test(val)) {
        clearFieldError(emailInput, emailError);
      }
    });

    emailInput.addEventListener('blur', () => {
      const val = emailInput.value.trim();
      if (!val) {
        setFieldError(emailInput, emailError, 'Email address is required.');
      } else if (!emailRegex.test(val)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
      } else {
        clearFieldError(emailInput, emailError);
      }
    });
  }

  // Real-time date validation
  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const val = dateInput.value;
      if (val) {
        const selected = new Date(val + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
          setFieldError(dateInput, dateError, 'Preferred visit date cannot be in the past. Please choose today or a future date.');
        } else {
          clearFieldError(dateInput, dateError);
        }
      } else {
        clearFieldError(dateInput, dateError);
      }
    });
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const nameInput = form.querySelector('#contactName');
  const nameError = form.querySelector('#contactNameError');
  const emailInput = form.querySelector('#contactEmail');
  const emailError = form.querySelector('#contactEmailError');
  const phoneInput = form.querySelector('#contactPhone');
  const phoneError = form.querySelector('#contactPhoneError');
  const visitDateInput = form.querySelector('#contactVisitDate');
  const dateError = form.querySelector('#contactVisitDateError');
  const inquiryTypeInput = form.querySelector('#contactInquiryType');
  const typeError = form.querySelector('#contactInquiryTypeError');
  const messageInput = form.querySelector('#contactMessage');
  const msgError = form.querySelector('#contactMessageError');

  let isValid = true;
  let firstInvalid = null;

  // Validate Name (letters only, numbers blocked)
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name || name.length < 2) {
    setFieldError(nameInput, nameError, 'Please enter your full name (minimum 2 letters).');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameInput;
  } else if (!/^[A-Za-z\s.'-]{2,50}$/.test(name)) {
    setFieldError(nameInput, nameError, 'Full name should only contain letters and spaces.');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameInput;
  } else if (/(.)\1{3,}/i.test(name)) {
    setFieldError(nameInput, nameError, 'Please enter a genuine name (avoid repeated letters).');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameInput;
  } else {
    clearFieldError(nameInput, nameError);
  }

  // Validate Phone (digits only, letters blocked)
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 10 || digitsOnly.length > 15) {
    setFieldError(phoneInput, phoneError, 'Please enter a valid 10 to 15 digit mobile or WhatsApp number.');
    isValid = false;
    if (!firstInvalid) firstInvalid = phoneInput;
  } else {
    clearFieldError(phoneInput, phoneError);
  }

  // Validate Email (strict RFC regex)
  const email = emailInput ? emailInput.value.trim() : '';
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    setFieldError(emailInput, emailError, 'Please enter a valid email address (e.g. priya@example.com).');
    isValid = false;
    if (!firstInvalid) firstInvalid = emailInput;
  } else {
    clearFieldError(emailInput, emailError);
  }

  // Validate Inquiry Type
  const inquiryType = inquiryTypeInput ? inquiryTypeInput.value : '';
  if (!inquiryType) {
    setFieldError(inquiryTypeInput, typeError, 'Please select the nature of your inquiry.');
    isValid = false;
    if (!firstInvalid) firstInvalid = inquiryTypeInput;
  } else {
    clearFieldError(inquiryTypeInput, typeError);
  }

  // Validate Date (if provided)
  const visitDate = visitDateInput ? visitDateInput.value : '';
  if (visitDate) {
    const selectedDate = new Date(visitDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setFieldError(visitDateInput, dateError, 'Preferred showroom visit date cannot be in the past.');
      isValid = false;
      if (!firstInvalid) firstInvalid = visitDateInput;
    } else {
      clearFieldError(visitDateInput, dateError);
    }
  } else {
    clearFieldError(visitDateInput, dateError);
  }

  // Validate Message
  const message = messageInput ? messageInput.value.trim() : '';
  if (!message || message.length < 10) {
    setFieldError(messageInput, msgError, 'Please include a brief message (at least 10 characters) describing your requirements.');
    isValid = false;
    if (!firstInvalid) firstInvalid = messageInput;
  } else {
    clearFieldError(messageInput, msgError);
  }

  if (!isValid) {
    if (firstInvalid) firstInvalid.focus();
    if (typeof showToast === 'function') {
      showToast('Please correct the highlighted fields before submitting.', 'info');
    }
    return;
  }

  const ticketId = 'SS-TKT-' + Math.floor(1000 + Math.random() * 9000);
  const typeText = inquiryTypeInput?.options[inquiryTypeInput.selectedIndex]?.text || 'inquiry';
  if (typeof showToast === 'function') {
    showToast(`Thank you, ${name}! Your inquiry for "${typeText}" (Ref: ${ticketId}) has been received. Our showroom advisor will contact you within 3 business hours.`, 'success');
  }
  form.reset();

  // Clear all validation classes after successful submit
  form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
    el.classList.remove('is-valid', 'is-invalid');
  });
}

function handleAppointmentSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#apptName')?.value || 'Guest';
  const date = form.querySelector('#apptDate')?.value;
  const time = form.querySelector('#apptTime')?.value;

  if (typeof showToast === 'function') {
    showToast(`Showroom appointment booked for ${name} on ${date} at ${time}. Confirmation SMS sent!`, 'success');
  }
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  initContactPage();
});
