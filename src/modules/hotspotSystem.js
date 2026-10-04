/**
 * Architectural Hotspot System
 * Renders understated, elegant annotation markers over architectural elements
 * and handles interactive inspection cards.
 */

export class HotspotSystem {
  constructor(containerEl, chapters) {
    this.containerEl = containerEl;
    this.chapters = chapters;
    this.activeChapterIndex = 0;
    this.activeHotspotEl = null;

    this.init();
  }

  init() {
    this.containerEl.innerHTML = '';
    this.renderCurrentChapterHotspots(0);
  }

  renderCurrentChapterHotspots(chapterIndex) {
    this.activeChapterIndex = chapterIndex;
    this.containerEl.innerHTML = '';

    const chapter = this.chapters[chapterIndex];
    if (!chapter || !chapter.hotspots) return;

    chapter.hotspots.forEach(hotspot => {
      const el = document.createElement('div');
      el.className = 'architectural-hotspot';
      el.dataset.id = hotspot.id;
      el.style.left = `${hotspot.x}%`;
      el.style.top = `${hotspot.y}%`;

      // If hotspot is on the right half of the screen, flip card to left
      if (hotspot.x > 62) {
        el.classList.add('align-left');
      }

      el.innerHTML = `
        <div class="hotspot-pin" title="${hotspot.label}">
          <div class="hotspot-ring"></div>
          <div class="hotspot-center"></div>
        </div>
        <div class="hotspot-card">
          <div class="hotspot-card-category">${hotspot.category || 'Architectural Detail'}</div>
          <div class="hotspot-card-title">${hotspot.label}</div>
          <p class="hotspot-card-desc">${hotspot.description}</p>
          <div class="hotspot-card-provenance">${hotspot.provenance || 'Aurelia Specification'}</div>
        </div>
      `;

      // Interactive pinning on click
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (el.classList.contains('is-pinned')) {
          el.classList.remove('is-pinned');
        } else {
          this.containerEl.querySelectorAll('.architectural-hotspot').forEach(h => h.classList.remove('is-pinned'));
          el.classList.add('is-pinned');
        }
      });

      this.containerEl.appendChild(el);
    });
  }

  update(chapterIndex, chapterProgress) {
    if (chapterIndex !== this.activeChapterIndex) {
      this.renderCurrentChapterHotspots(chapterIndex);
    }

    // Fade out hotspots slightly during fast scrubbing or at the very boundary of chapter transitions
    const isTransitioning = chapterProgress < 0.05 || chapterProgress > 0.95;
    this.containerEl.style.opacity = isTransitioning ? '0.3' : '1';
    this.containerEl.style.transition = 'opacity 0.25s ease';
  }
}
