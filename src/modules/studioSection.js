/**
 * Studio Section Component
 * Implements The Studio, Experience Stats, Services, Final Contact, and Commission Modal.
 */

export class StudioSection {
  constructor(containerEl, studioData) {
    this.containerEl = containerEl;
    this.data = studioData;
    this.modalEl = null;

    this.init();
  }

  init() {
    this.render();
    this.createModal();
    this.bindEvents();
  }

  render() {
    this.containerEl.innerHTML = `
      <!-- THE STUDIO -->
      <section class="studio-section" id="studio-section">
        <div class="studio-container">
          <div class="section-label-row">
            <span class="section-label-line"></span>
            <span class="mono-tag">PRACTICE MANIFESTO</span>
          </div>

          <div class="studio-header">
            <h2 class="studio-headline">THE STUDIO</h2>
            <p class="studio-manifesto">${this.data.manifesto}</p>
          </div>

          <div class="pillars-grid">
            ${this.data.pillars.map(p => `
              <div class="pillar-card">
                <span class="pillar-index">${p.index}</span>
                <h3 class="pillar-title">${p.title}</h3>
                <p class="pillar-desc">${p.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- EXPERIENCE (STATS) -->
      <section class="experience-section" id="experience-section">
        <div class="studio-container">
          <div class="section-label-row">
            <span class="section-label-line"></span>
            <span class="mono-tag">FICTIONAL PROJECT RECORD</span>
          </div>

          <h2 class="serif-title" style="font-size: clamp(2.2rem, 4vw, 3.8rem); color: var(--text-dark); margin-bottom: 1rem;">
            EXPERIENCE
          </h2>
          <p style="font-family: var(--font-sans); font-size: 0.95rem; color: var(--text-dark-muted); max-width: 640px;">
            A curated portfolio of private residential environments engineered with quiet permanence and unyielding craft across three continents.
          </p>

          <div class="stats-grid">
            ${this.data.stats.map(s => `
              <div class="stat-item">
                <div class="stat-value">${s.value}</div>
                <div class="stat-label">${s.label}</div>
                <div class="stat-caption">${s.caption}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="services-section" id="services-section">
        <div class="studio-container">
          <div class="section-label-row">
            <span class="section-label-line"></span>
            <span class="mono-tag">DISCIPLINARY SCOPE</span>
          </div>

          <h2 class="serif-title" style="font-size: clamp(2.2rem, 4.5vw, 4.2rem); color: var(--text-ivory); margin-bottom: 1rem;">
            SERVICES
          </h2>
          <p style="font-family: var(--font-sans); font-size: 0.95rem; color: var(--text-secondary); max-width: 680px;">
            From initial topographical massing to bespoke furniture joinery and hand-patinated hardware, we oversee every square millimeter of residential space.
          </p>

          <div class="services-list">
            ${this.data.services.map(s => `
              <div class="service-row">
                <span class="service-number">${s.number}</span>
                <div class="service-title-wrap">
                  <h3 class="service-title">${s.title}</h3>
                  <p class="service-scope">${s.scope}</p>
                </div>
                <div class="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FINAL CONTACT -->
      <section class="contact-section" id="contact-section">
        <div class="contact-container">
          <div class="contact-main-col">
            <div class="section-label-row">
              <span class="section-label-line"></span>
              <span class="mono-tag">ARCHITECTURAL COMMISSIONS</span>
            </div>
            <h2 class="contact-headline">
              LET'S CREATE
              <span>YOUR NEXT SPACE.</span>
            </h2>
            <p class="contact-description">
              ${this.data.contact.description}
            </p>

            <button class="contact-cta-btn" id="open-inquiry-btn">
              <span>START A PROJECT</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <div class="contact-meta-col">
            <div class="contact-meta-block">
              <span class="meta-label">PRACTICE</span>
              <span class="meta-value">${this.data.name}</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted);">
                PRIVATE INTERIOR ARCHITECTURE
              </span>
            </div>

            <div class="contact-meta-block">
              <span class="meta-label">DIRECT INQUIRIES</span>
              <a href="mailto:${this.data.contact.email}" class="meta-value">${this.data.contact.email}</a>
              <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
                ${this.data.contact.phone}
              </span>
            </div>

            <div class="contact-meta-block">
              <span class="meta-label">STUDIO LOCATIONS</span>
              <div class="meta-locations">
                ${this.data.contact.locations.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MINIMAL FOOTER -->
      <footer class="site-footer">
        <div class="footer-left">
          <span class="footer-brand">${this.data.name}</span>
          <span class="footer-copy">INTERIOR ARCHITECTURE / RESIDENTIAL DESIGN · © 2026 AURELIA RESIDENCE</span>
        </div>
        <ul class="footer-links">
          <li><a href="#privacy" class="footer-link" id="footer-privacy-btn">Privacy</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener" class="footer-link">Instagram</a></li>
          <li><a href="mailto:${this.data.contact.email}" class="footer-link">Contact</a></li>
          <li><a href="#" class="footer-link" id="footer-top-btn">Back to Top ↑</a></li>
        </ul>
      </footer>
    `;
  }

  createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'inquiry-modal';
    modal.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close dialog">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="form-container">
          <h3 class="modal-title">START A PROJECT</h3>
          <p class="modal-subtitle">Inquire regarding private residential architectural commissions and interior design masterplanning.</p>

          <form class="inquiry-form" id="project-inquiry-form">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="client-name">Full Name</label>
                <input class="form-input" type="text" id="client-name" placeholder="Lord / Lady / Dr. / M." required>
              </div>
              <div class="form-group">
                <label class="form-label" for="client-email">Email Address</label>
                <input class="form-input" type="email" id="client-email" placeholder="name@residence.com" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="project-type">Commission Scope</label>
                <select class="form-select" id="project-type">
                  <option value="private-residence">Private Residence Architecture</option>
                  <option value="penthouse-interior">Luxury Penthouse Interior</option>
                  <option value="coastal-estate">Coastal Villa & Landscape</option>
                  <option value="bespoke-renovation">Heritage Spatial Renovation</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="project-location">Location</label>
                <select class="form-select" id="project-location">
                  <option value="london">London / United Kingdom</option>
                  <option value="dubai">Dubai / United Arab Emirates</option>
                  <option value="mumbai">Mumbai / India</option>
                  <option value="international">International / Other</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="project-notes">Architectural Vision & Scale</label>
              <textarea class="form-textarea" id="project-notes" rows="3" placeholder="Approximate square meters, site characteristics, and timeline requirements..."></textarea>
            </div>

            <button type="submit" class="form-submit-btn">
              SUBMIT ARCHITECTURAL INQUIRY →
            </button>
          </form>
        </div>

        <div class="form-success-message" id="form-success">
          <h3 class="serif-title" style="font-size: 2rem; color: var(--bronze-accent); margin-bottom: 1rem;">
            INQUIRY RECEIVED
          </h3>
          <p style="font-family: var(--font-serif); font-size: 1.25rem; font-style: italic; color: var(--text-ivory); margin-bottom: 1rem;">
            "Every monumental space begins with a thoughtful dialogue."
          </p>
          <p style="font-family: var(--font-sans); font-size: 0.85rem; color: var(--text-secondary); max-width: 440px; margin: 0 auto 2rem;">
            Our partners will review your site particulars and contact you directly within two business days.
          </p>
          <button class="header-nav-btn" id="success-done-btn" style="margin: 0 auto;">CLOSE WINDOW</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.modalEl = modal;
  }

  bindEvents() {
    const openBtn = document.getElementById('open-inquiry-btn');
    const closeBtn = document.getElementById('modal-close-btn');
    const doneBtn = document.getElementById('success-done-btn');
    const form = document.getElementById('project-inquiry-form');
    const formContainer = document.getElementById('form-container');
    const formSuccess = document.getElementById('form-success');
    const topBtn = document.getElementById('footer-top-btn');

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        if (this.modalEl) this.modalEl.classList.add('is-open');
      });
    }

    const closeModal = () => {
      if (this.modalEl) this.modalEl.classList.remove('is-open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (doneBtn) doneBtn.addEventListener('click', closeModal);

    if (this.modalEl) {
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) closeModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formContainer && formSuccess) {
          formContainer.style.display = 'none';
          formSuccess.classList.add('is-visible');
        }
      });
    }

    if (topBtn) {
      topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
