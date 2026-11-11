# -*- coding: utf-8 -*-
with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

addition = """

// ==========================================================================
// 13. Frozen Navbar & Footer Navigation Handlers
// ==========================================================================

// Frozen / Sticky Navigation Bar on Scroll
(function() {
  function handleNavbarFreeze() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled', 'is-frozen');
    } else {
      header.classList.remove('scrolled', 'is-frozen');
    }
  }
  window.addEventListener('scroll', handleNavbarFreeze, { passive: true });
  document.addEventListener('DOMContentLoaded', handleNavbarFreeze);
  handleNavbarFreeze();
})();

// Guarantee clicking on footer logo / brand redirects to home page (index.html)
document.addEventListener('DOMContentLoaded', () => {
  const footerLogos = document.querySelectorAll('.footer-brand a, .footer-brand-logo, .footer-brand');
  footerLogos.forEach(logo => {
    logo.addEventListener('click', (e) => {
      if (e.target.closest('.footer-social-icons') || e.target.closest('.social-icon-btn')) return;
      const brandTarget = e.target.closest('.footer-brand-logo, .brand-logo, .brand-text, .brand-icon');
      if (brandTarget) {
        e.preventDefault();
        window.location.href = 'index.html';
      }
    });
  });
});
"""

if "handleNavbarFreeze" not in content:
    content += addition
    with open('js/main.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("js/main.js updated with navbar freeze and footer click redirect.")
else:
    print("js/main.js already contains freeze handler.")
