/* ==========================================================================
   SHINE STEEL & KITCHENWARE - BLOG & ARTICLES ENGINE
   Interactive Guides, Article Filtering & Full Article Modal Reader
   ========================================================================== */

let currentBlogFilter = 'all';

function initBlogPage() {
  renderBlogPosts();
  setupBlogFilters();
}

function renderBlogPosts() {
  const container = document.getElementById('blogGrid');
  if (!container) return;

  let filtered = [...BLOG_DATA];
  if (currentBlogFilter !== 'all') {
    filtered = filtered.filter(b => b.category.toLowerCase().replace(/\s+/g, '-') === currentBlogFilter);
  }

  container.innerHTML = filtered.map(post => `
    <div class="blog-card">
      <div class="blog-img-wrap">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-action" onclick="openBlogModal('${post.id}')">
          Read Full Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  `).join('');
}

function setupBlogFilters() {
  const filterBtns = document.querySelectorAll('[data-blog-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBlogFilter = btn.getAttribute('data-blog-filter');
      renderBlogPosts();
    });
  });
}

function openBlogModal(blogId) {
  const post = BLOG_DATA.find(b => b.id === blogId);
  const modal = document.getElementById('blogReaderModal');
  const content = document.getElementById('blogReaderContent');
  if (!modal || !content || !post) return;

  content.innerHTML = `
    <div style="padding: 2.5rem;">
      <span style="font-size:0.8125rem;font-weight:700;color:#b8860b;text-transform:uppercase;letter-spacing:0.06em;">${post.category}</span>
      <h2 style="font-family:var(--font-serif);font-size:2rem;color:#0f172a;line-height:1.25;margin:0.5rem 0 1rem 0;">${post.title}</h2>
      <div style="display:flex;align-items:center;gap:1rem;color:#64748b;font-size:0.875rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid #e2e8f0;">
        <span>Published: ${post.date}</span>
        <span>•</span>
        <span>Estimated: ${post.readTime}</span>
        <span>•</span>
        <span>By Metallurgic Kitchenware Expert</span>
      </div>
      <img src="${post.image}" alt="${post.title}" style="width:100%;height:320px;object-fit:cover;border-radius:12px;margin-bottom:1.5rem;">
      <div style="font-size:1.05rem;line-height:1.75;color:#334155;">
        ${post.content}
      </div>
      <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.875rem;color:#64748b;">Was this guide helpful?</span>
        <button class="btn btn-sm btn-primary" onclick="showToast('Thank you for your feedback!', 'success'); closeBlogModal();">Share Feedback</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeBlogModal() {
  const modal = document.getElementById('blogReaderModal');
  if (modal) modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('blogGrid')) {
    initBlogPage();
  }
});
