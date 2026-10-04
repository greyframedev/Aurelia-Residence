/**
 * Navigation Module
 * Minimalist fixed header, chapter indicator (01 — 06),
 * vertical progress rail, and chapter quick-jump drawer.
 */

export class Navigation {
  constructor({ headerEl, railEl, drawerEl, chapters, onSelectChapter }) {
    this.headerEl = headerEl;
    this.railEl = railEl;
    this.drawerEl = drawerEl;
    this.chapters = chapters;
    this.onSelectChapter = onSelectChapter;

    this.activeChapterIndex = 0;
    this.isDrawerOpen = false;

    this.init();
  }

  init() {
    this.renderHeader();
    this.renderVerticalRail();
    this.renderDrawer();
    this.bindEvents();
  }

  renderHeader() {
    this.headerEl.className = 'site-header';
    this.headerEl.innerHTML = `
      <a href="#" class="header-brand" id="header-brand-link">
        <span class="brand-title">AURELIA RESIDENCE</span>
        <span class="brand-subtitle">MONOGRAPH</span>
      </a>

      <div class="header-center">
        <div class="header-chapter-display">
          <span class="header-chapter-current" id="header-chapter-num">01</span>
          <span>/</span>
          <span>06</span>
          <span style="margin-left: 0.5rem; color: var(--text-muted); font-size: 0.65rem;" id="header-chapter-name">ARRIVAL</span>
        </div>
      </div>

      <div class="header-controls">
        <div class="silent-badge" title="Architectural Silence (Zero Audio)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
          <span>SILENT MONOGRAPH</span>
        </div>
        <button class="header-nav-btn" id="open-drawer-btn" aria-label="Open Chapter Index">
          <span>INDEX</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    this.numEl = document.getElementById('header-chapter-num');
    this.nameEl = document.getElementById('header-chapter-name');
  }

  renderVerticalRail() {
    if (!this.railEl) return;
    this.railEl.className = 'vertical-progress-rail is-active';
    this.railEl.innerHTML = `
      <div class="rail-track-line">
        <div class="rail-fill-line" id="rail-fill-line"></div>
      </div>
      ${this.chapters.map((ch, idx) => `
        <button class="rail-step-dot ${idx === 0 ? 'is-active' : ''}" data-index="${idx}" aria-label="${ch.title}">
          <span class="rail-step-tooltip">${ch.number} ${ch.title}</span>
        </button>
      `).join('')}
    `;

    this.railFillEl = document.getElementById('rail-fill-line');
    this.railDots = this.railEl.querySelectorAll('.rail-step-dot');

    this.railDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index, 10);
        if (this.onSelectChapter) this.onSelectChapter(idx);
      });
    });
  }

  renderDrawer() {
    if (!this.drawerEl) return;
    this.drawerEl.innerHTML = `
      <div class="drawer-overlay" id="drawer-overlay"></div>
      <div class="chapter-drawer" id="drawer-panel">
        <div class="drawer-header">
          <span class="mono-tag">ARCHITECTURAL SPACES</span>
          <button class="modal-close-btn" id="drawer-close-btn" aria-label="Close Index">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="drawer-title" style="margin-bottom: 2rem;">AURELIA RESIDENCE</div>
        <ul class="drawer-nav-list">
          ${this.chapters.map((ch, idx) => `
            <li class="drawer-nav-item ${idx === 0 ? 'is-active' : ''}" data-index="${idx}">
              <span class="drawer-item-num">${ch.number}</span>
              <span class="drawer-item-title">${ch.title}</span>
            </li>
          `).join('')}
          <li class="drawer-nav-item" data-target="studio" style="margin-top: 1.5rem; border-top: 1px solid var(--hairline); padding-top: 1.25rem;">
            <span class="drawer-item-num">—</span>
            <span class="drawer-item-title">THE STUDIO</span>
          </li>
          <li class="drawer-nav-item" data-target="contact">
            <span class="drawer-item-num">—</span>
            <span class="drawer-item-title">COMMISSIONS</span>
          </li>
        </ul>
      </div>
    `;

    this.drawerOverlay = document.getElementById('drawer-overlay');
    this.drawerPanel = document.getElementById('drawer-panel');
    const closeBtn = document.getElementById('drawer-close-btn');

    closeBtn.addEventListener('click', () => this.closeDrawer());
    this.drawerOverlay.addEventListener('click', () => this.closeDrawer());

    this.drawerPanel.querySelectorAll('.drawer-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        this.closeDrawer();
        const target = item.dataset.target;
        if (target === 'studio') {
          const el = document.getElementById('studio-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else if (target === 'contact') {
          const el = document.getElementById('contact-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          const idx = parseInt(item.dataset.index, 10);
          if (!isNaN(idx) && this.onSelectChapter) {
            this.onSelectChapter(idx);
          }
        }
      });
    });
  }

  bindEvents() {
    const openBtn = document.getElementById('open-drawer-btn');
    if (openBtn) {
      openBtn.addEventListener('click', () => this.openDrawer());
    }

    const brandLink = document.getElementById('header-brand-link');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  openDrawer() {
    this.isDrawerOpen = true;
    if (this.drawerOverlay) this.drawerOverlay.classList.add('is-open');
    if (this.drawerPanel) this.drawerPanel.classList.add('is-open');
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    if (this.drawerOverlay) this.drawerOverlay.classList.remove('is-open');
    if (this.drawerPanel) this.drawerPanel.classList.remove('is-open');
  }

  update(chapterIndex, globalProgress) {
    if (chapterIndex !== this.activeChapterIndex) {
      this.activeChapterIndex = chapterIndex;
      const ch = this.chapters[chapterIndex];
      if (ch) {
        if (this.numEl) this.numEl.textContent = ch.number;
        if (this.nameEl) this.nameEl.textContent = ch.title;
      }

      if (this.railDots) {
        this.railDots.forEach((dot, idx) => {
          dot.classList.toggle('is-active', idx === chapterIndex);
        });
      }

      if (this.drawerPanel) {
        this.drawerPanel.querySelectorAll('.drawer-nav-item[data-index]').forEach(item => {
          const idx = parseInt(item.dataset.index, 10);
          item.classList.toggle('is-active', idx === chapterIndex);
        });
      }
    }

    if (this.railFillEl) {
      this.railFillEl.style.height = `${Math.round(globalProgress * 100)}%`;
    }
  }
}
