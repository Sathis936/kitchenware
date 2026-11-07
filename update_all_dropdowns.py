import re

files = [
    'index.html',
    'home2.html',
    'about.html',
    'products.html',
    'wedding-sets.html',
    'services.html',
    'blog.html',
    'contact.html'
]

def get_desktop_markup(page_name):
    is_home1 = (page_name == 'index.html')
    is_home2 = (page_name == 'home2.html')
    is_home_any = is_home1 or is_home2
    
    toggle_active_class = " active" if is_home_any else ""
    home1_active = ' active" aria-current="page"' if is_home1 else '"'
    home2_active = ' active" aria-current="page"' if is_home2 else '"'
    
    return f'''          <li class="nav-dropdown">
            <a href="index.html" class="nav-link nav-dropdown-toggle{toggle_active_class}" aria-haspopup="true" aria-expanded="false">
              <span>Home</span>
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <ul class="nav-submenu">
              <li class="nav-submenu-header">
                <span class="nav-submenu-eyebrow">Storefront Variations</span>
              </li>
              <li>
                <a href="index.html" class="nav-submenu-card{home1_active}>
                  <div class="nav-submenu-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div class="nav-submenu-content">
                    <div class="nav-submenu-title-row">
                      <span class="nav-submenu-title">Home 1</span>
                      <span class="nav-submenu-badge badge-classic">Classic</span>
                    </div>
                    <span class="nav-submenu-desc">Royal Wedding Sets, Tri-Ply &amp; Services</span>
                  </div>
                  <div class="nav-submenu-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="home2.html" class="nav-submenu-card{home2_active}>
                  <div class="nav-submenu-icon icon-modern">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="nav-submenu-content">
                    <div class="nav-submenu-title-row">
                      <span class="nav-submenu-title">Home 2</span>
                      <span class="nav-submenu-badge badge-modern">Modern</span>
                    </div>
                    <span class="nav-submenu-desc">Contemporary Cookware &amp; Minimalist Living</span>
                  </div>
                  <div class="nav-submenu-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </a>
              </li>
            </ul>
          </li>'''

def get_mobile_markup(page_name):
    is_home1 = (page_name == 'index.html')
    is_home2 = (page_name == 'home2.html')
    
    h1_active = ' active" aria-current="page"' if is_home1 else '"'
    h2_active = ' active" aria-current="page"' if is_home2 else '"'
    
    return f'''        <div class="mobile-nav-group">
          <div class="mobile-nav-group-title">Home Variations</div>
          <a href="index.html" class="mobile-nav-link home-variant-link{h1_active}>
            <span class="mobile-nav-text">Home 1 <span class="mobile-nav-badge badge-classic">Classic</span></span>
            <span>&rarr;</span>
          </a>
          <a href="home2.html" class="mobile-nav-link home-variant-link{h2_active}>
            <span class="mobile-nav-text">Home 2 <span class="mobile-nav-badge badge-modern">Modern</span></span>
            <span>&rarr;</span>
          </a>
        </div>'''

desktop_pattern = re.compile(
    r'<li class="nav-dropdown">.*?</ul>\s*</li>',
    re.DOTALL
)

mobile_pattern = re.compile(
    r'(<div class="mobile-nav-group">.*?</div>\s*</div>|<a href="index\.html" class="mobile-nav-link home-variant-link.*?<a href="home2\.html" class="mobile-nav-link home-variant-link.*?<span>.*?</span></a>)',
    re.DOTALL
)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    new_desktop = get_desktop_markup(f)
    new_mobile = get_mobile_markup(f)
    
    c_updated, d_count = desktop_pattern.subn(new_desktop, c, count=1)
    if d_count == 0:
        print(f"WARNING: Desktop dropdown pattern not matched in {f}")
    
    c_updated, m_count = mobile_pattern.subn(new_mobile, c_updated, count=1)
    if m_count == 0:
        print(f"WARNING: Mobile dropdown pattern not matched in {f}")
    
    # In home2.html, remove Home 1 / Home 2 from Explore footer
    if f == 'home2.html':
        c_updated = c_updated.replace(
            '<li><a href="index.html">Home 1</a></li><li><a href="home2.html">Home 2</a></li>',
            '<li><a href="index.html">Store Home</a></li>'
        )
    
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c_updated)
    
    print(f"Processed {f}: Desktop={d_count}, Mobile={m_count}")
