# -*- coding: utf-8 -*-
"""
Execute comprehensive fixes for all 16 user feedback items:
1. Navigation bar freeze (sticky + scroll freeze)
2. Hero section background images visible in both light & dark themes
3. Home page 1 Wedding Trousseau relevant image
4. Home page 2 Everyday favorites relevant images
5. About us page deep manufacturing metallurgy content
6. Products page relevant images (prod-13, prod-14, prod-15)
7. Wedding set page wedding collection sets redesign
8. Footer logo matches header logo perfectly
9. Clicking on footer redirects to home page (index.html)
10. Contact form prompt real-time validation (name, phone, email, date)
11. Prominent interactive Google Map on contact page
12. Dark theme Wedding sets text visibility (heritage callout, cards, inclusions)
13. Contact page direct specialized support text alignment
14. 1024px Home 1 Visit us in person alignment
15. 1024px Product page step cards alignment
16. 1024px/768px Wedding set page curated collection box text alignment
"""
import re

print("Starting complete fix execution...")

# -----------------------------------------------------------------------------
# 1. Update css/style.css
# -----------------------------------------------------------------------------
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix 1: Remove overflow-x: clip from html and body to restore sticky positioning
css = css.replace("html {\n  font-size: 16px;\n  scroll-behavior: smooth;\n  width: 100%;\n  overflow-x: clip;\n  -webkit-text-size-adjust: 100%;\n}",
                  "html {\n  font-size: 16px;\n  scroll-behavior: smooth;\n  width: 100%;\n  -webkit-text-size-adjust: 100%;\n}")

css = css.replace("body {\n  font-family: var(--font-sans);\n  background-color: var(--color-bg-body);\n  color: var(--color-text-main);\n  line-height: 1.6;\n  width: 100%;\n  overflow-x: clip; /* clip avoids breaking sticky positioning unlike hidden */\n  position: relative;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}",
                  "body {\n  font-family: var(--font-sans);\n  background-color: var(--color-bg-body);\n  color: var(--color-text-main);\n  line-height: 1.6;\n  width: 100%;\n  position: relative;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}")

# Fix 1b: Ensure .main-header has sticky and frozen classes
css = re.sub(
    r'/\* 5\. Main Navigation Bar \*/\s*\.main-header\s*\{[^}]+\}',
    """/* 5. Main Navigation Bar - Strictly Frozen / Sticky at Top */
.main-header {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
  width: 100% !important;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-silver-300);
  transition: box-shadow var(--transition-normal);
}

.main-header.scrolled,
.main-header.is-frozen {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12) !important;
}""",
    css,
    count=1
)

# Fix 2: Hero background image visibility in both themes
hero_pattern = r'\.page-hero\s*\{[^}]+\}'
hero_replacement = """.page-hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5.5rem 1.5rem 4.5rem;
  background: #0f172a;
  background-image: 
    linear-gradient(180deg, rgba(15, 23, 42, 0.52) 0%, rgba(15, 23, 42, 0.44) 50%, rgba(15, 23, 42, 0.60) 100%),
    var(--hero-bg-url, url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80'));
  background-size: cover, cover;
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  color: #ffffff;
  overflow: hidden;
  border-bottom: 3px solid var(--color-accent);
}"""
css = re.sub(hero_pattern, hero_replacement, css, count=1)

# Subtle vignette instead of heavy dark radial
css = re.sub(
    r'\.page-hero::before\s*\{[^}]+\}',
    """.page-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(10, 15, 29, 0.35) 100%);
  pointer-events: none;
  z-index: 1;
}""",
    css,
    count=1
)

# Dark theme page hero overlay
css = re.sub(
    r'\[data-theme="dark"\]\s*\.page-hero\s*\{[^}]+\}',
    """[data-theme="dark"] .page-hero {
  background: #090e1a !important;
  background-image: 
    linear-gradient(180deg, rgba(10, 15, 29, 0.62) 0%, rgba(15, 23, 42, 0.52) 50%, rgba(10, 15, 29, 0.72) 100%),
    var(--hero-bg-url, url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80')) !important;
}""",
    css,
    count=1
)

# Fix 12: Dark theme Wedding sets text visibility & Heritage callout
css = re.sub(
    r'\[data-theme="dark"\]\s*\.heritage-callout\s*\{[^}]*\}[\s\S]*?\[data-theme="dark"\]\s*\.heritage-callout\s*span\s*\{[^}]*\}',
    """[data-theme="dark"] .heritage-callout {
  background: #0f172a !important;
  border: 1px solid rgba(212, 175, 55, 0.45) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5) !important;
}

[data-theme="dark"] .heritage-callout-tag {
  color: #fbbf24 !important;
}

[data-theme="dark"] .heritage-callout-title,
[data-theme="dark"] .heritage-callout h3 {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9) !important;
}

[data-theme="dark"] .heritage-callout-text,
[data-theme="dark"] .heritage-callout p {
  color: #cbd5e1 !important;
}

[data-theme="dark"] .heritage-callout span {
  color: #fbbf24 !important;
}""",
    css,
    count=1
)

# Dark theme wedding product card text
css = re.sub(
    r'\[data-theme="dark"\]\s*\.wedding-product-description\s*\{[^}]+\}',
    """[data-theme="dark"] .wedding-product-description {
  color: #cbd5e1 !important;
}

[data-theme="dark"] .wedding-product-inclusions {
  background: #1e293b !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}

[data-theme="dark"] .wedding-product-inclusions .inclusions-title {
  color: #fbbf24 !important;
}

[data-theme="dark"] .wedding-product-inclusions ul,
[data-theme="dark"] .wedding-product-inclusions li {
  color: #f1f5f9 !important;
}""",
    css,
    count=1
)

# Fix 13: Contact page direct specialized support text alignment
css = re.sub(
    r'\.dept-card\s*\{[\s\S]*?\.dept-card-bottom\s*\{[^}]+\}',
    """.dept-card {
  background: var(--color-white);
  border: 1px solid var(--color-silver-300);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dept-card-top {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.dept-card-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: #b8911c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  min-height: 1.25rem;
  margin-bottom: 0.35rem;
}

.dept-card h4 {
  margin: 0 0 0.65rem;
  font-size: 1.15rem;
  color: #0f172a;
  font-family: var(--font-serif);
  line-height: 1.35;
  min-height: 3.2rem;
  display: block;
}

.dept-card p {
  flex-grow: 1;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0 0 1.25rem;
  min-height: 5.6rem;
  display: block;
  overflow: visible;
}

.dept-card-bottom {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--color-silver-200);
  min-height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}""",
    css,
    count=1
)

# Fix 14: 1024px Home 1 Visit us in person alignment
css = re.sub(
    r'\.zone-body\s*\{[\s\S]*?\.zone-body\s*\.btn\s*\{[^}]+\}',
    """.zone-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.zone-body h4 {
  min-height: 3.2rem;
  line-height: 1.35;
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: #0f172a;
  display: block;
}

.zone-body p {
  flex-grow: 1;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0 0 1.25rem !important;
  min-height: 5.8rem !important;
  display: block;
  overflow: visible;
}

.zone-body .btn {
  margin-top: auto;
  width: 100%;
  text-align: center;
}""",
    css,
    count=1
)

# Fix 15: 1024px Product page step cards alignment
css = re.sub(
    r'\.sizing-grid-3\s*\{[\s\S]*?\.sizing-card\s*p\s*\{[^}]+\}',
    """.sizing-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

.sizing-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid var(--color-silver-300);
  border-radius: var(--radius-md);
  padding: 1.75rem;
}

.sizing-card > div:first-child {
  min-height: 2.8rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.sizing-card h4 {
  margin: 0;
  font-size: 1.05rem;
  color: #0f172a;
  line-height: 1.35;
}

.sizing-card p {
  min-height: 5.8rem;
  line-height: 1.55;
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
  flex-grow: 1;
}""",
    css,
    count=1
)

# Fix 16: 1024px/768px Wedding set page curated collection box text alignment
css = re.sub(
    r'\.wedding-product-description\s*\{[^}]+\}\s*\.wedding-product-inclusions\s*\{[^}]+box-sizing:\s*border-box;\s*\}',
    """.wedding-product-description {
  margin: 0 0 1rem;
  color: var(--color-silver-600);
  font-size: 0.875rem;
  line-height: 1.55;
  min-height: 6.8rem !important;
  display: block;
  overflow: visible;
}

.wedding-product-inclusions {
  background: var(--color-silver-100);
  border: 1px solid var(--color-silver-300);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: 1.25rem;
  min-height: 175px !important;
  height: 175px !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
}""",
    css,
    count=1
)

# Fix 8: Footer logo match header logo perfectly
# Remove any rules that hid footer svg
css = re.sub(
    r'\.footer-brand\s*\.brand-icon\s*\{[\s\S]*?\.footer-brand\s*\.brand-icon\s*svg\s*\{[^}]+\}',
    """/* Footer Brand Logo Match Header Logo */
.footer-brand .brand-icon,
.footer-brand-logo .brand-icon {
  width: 42px !important;
  height: 42px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: transparent !important;
  flex-shrink: 0 !important;
}

.footer-brand .brand-icon svg,
.footer-brand-logo .brand-icon svg {
  display: block !important;
  width: 38px !important;
  height: 38px !important;
}""",
    css,
    count=1
)

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("css/style.css successfully updated.")
