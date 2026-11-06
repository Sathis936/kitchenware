/* ==========================================================================
   SHINE STEEL & KITCHENWARE - CONTACT & FAQ ENGINE
   Showroom Appointments, Inquiries & FAQ Accordion
   ========================================================================== */

function initContactPage() {
  setupFaqAccordion();
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

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#contactName')?.value;
  const email = form.querySelector('#contactEmail')?.value;
  const inquiryType = form.querySelector('#contactInquiryType')?.value;

  const ticketId = 'SS-TKT-' + Math.floor(1000 + Math.random() * 9000);
  showToast(`Thank you ${name}! Your inquiry (${ticketId}) has been received. Our showroom team will reply within 3 business hours.`, 'success');
  form.reset();
}

function handleAppointmentSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#apptName')?.value;
  const date = form.querySelector('#apptDate')?.value;
  const time = form.querySelector('#apptTime')?.value;

  showToast(`Showroom appointment booked for ${name} on ${date} at ${time}. Confirmation SMS sent!`, 'success');
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  initContactPage();
});
