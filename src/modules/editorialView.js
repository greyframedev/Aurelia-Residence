/**
 * Editorial View Module (Integrated Full-Screen Canvas Overlay)
 * Renders elegant floating typography directly over the architectural footage.
 * NO sidebars, NO cards, NO rectangular boxes, NO panels.
 * Typeset directly into the negative space of each clip with synchronized scroll animation.
 */

export class EditorialView {
  constructor(overlayContainerEl, chapters) {
    this.containerEl = overlayContainerEl;
    this.chapters = chapters;
    this.currentChapterIndex = -1;
    this.chapterBlocks = [];

    this.init();
  }

  init() {
    if (!this.containerEl) return;
    this.containerEl.innerHTML = '';

    // Create a floating editorial block for each chapter
    this.chapters.forEach((ch, idx) => {
      const block = document.createElement('div');
      const isRight = ch.layoutPosition === 'right';
      block.className = `floating-editorial-block ${isRight ? 'align-right' : 'align-left'}`;
      block.dataset.index = idx;

      // Extract up to 3-4 concise materials & details for high-end restraint
      const materialsList = ch.materials.slice(0, 4);
      const detailsList = ch.details.slice(0, 4);

      block.innerHTML = `
        <div class="editorial-chap-row" data-anim="row">
          <span class="editorial-chap-num">${ch.number}</span>
          <span class="editorial-chap-sep">/</span>
          <span class="editorial-chap-name">${ch.spaceName || ch.subtitle || 'INTERIOR MONOGRAPH'}</span>
        </div>
        <h2 class="editorial-room-title" data-anim="title">${ch.title}</h2>
        <p class="editorial-quote" data-anim="quote">"${ch.quote}"</p>
        <div class="editorial-specs-row" data-anim="specs">
          <div class="editorial-spec-col">
            <span class="spec-heading">MATERIALS</span>
            <ul class="spec-list">
              ${materialsList.map(m => `<li>${m}</li>`).join('')}
            </ul>
          </div>
          <div class="editorial-spec-col">
            <span class="spec-heading">DETAILS</span>
            <ul class="spec-list">
              ${detailsList.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;

      this.containerEl.appendChild(block);

      this.chapterBlocks.push({
        block,
        rowEl: block.querySelector('[data-anim="row"]'),
        titleEl: block.querySelector('[data-anim="title"]'),
        quoteEl: block.querySelector('[data-anim="quote"]'),
        specsEl: block.querySelector('[data-anim="specs"]')
      });
    });

    this.setActiveChapter(0);
  }

  setActiveChapter(index) {
    if (this.currentChapterIndex === index) return;
    this.currentChapterIndex = index;

    this.chapterBlocks.forEach((item, idx) => {
      if (idx === index) {
        item.block.classList.add('is-active');
        item.block.style.visibility = 'visible';
        item.block.style.pointerEvents = 'auto';
      } else {
        item.block.classList.remove('is-active');
        item.block.style.visibility = 'hidden';
        item.block.style.opacity = '0';
        item.block.style.pointerEvents = 'none';
      }
    });
  }

  /**
   * Calculate staggered entrance, plateau, and exit animation values.
   * Completely deterministic and reversibly linked to scroll scrubbing.
   */
  _calcAnim(progress, enterStart, enterEnd, exitStart, exitEnd) {
    if (progress < enterStart) {
      return { opacity: 0, translateY: 16 };
    } else if (progress < enterEnd) {
      const t = (progress - enterStart) / (enterEnd - enterStart);
      return { opacity: t, translateY: (1 - t) * 16 };
    } else if (progress <= exitStart) {
      return { opacity: 1, translateY: 0 };
    } else if (progress < exitEnd) {
      const t = (progress - exitStart) / (exitEnd - exitStart);
      return { opacity: 1 - t, translateY: -t * 14 };
    } else {
      return { opacity: 0, translateY: -14 };
    }
  }

  updateProgress(chapterIndex, chapterProgress, currentFrame, totalFrames) {
    if (chapterIndex !== this.currentChapterIndex) {
      this.setActiveChapter(chapterIndex);
    }

    const currentItem = this.chapterBlocks[chapterIndex];
    if (!currentItem) return;

    // Synchronized Stagger Timings
    // 1. Chapter Number / Subtitle Row
    const rowAnim = this._calcAnim(chapterProgress, 0.00, 0.06, 0.94, 1.00);
    // 2. Main Room Title (Serif)
    const titleAnim = this._calcAnim(chapterProgress, 0.02, 0.08, 0.92, 0.98);
    // 3. Editorial Quote
    const quoteAnim = this._calcAnim(chapterProgress, 0.04, 0.10, 0.90, 0.96);
    // 4. Materials & Architectural Details
    const specsAnim = this._calcAnim(chapterProgress, 0.06, 0.12, 0.88, 0.94);

    if (currentItem.rowEl) {
      currentItem.rowEl.style.opacity = rowAnim.opacity.toFixed(3);
      currentItem.rowEl.style.transform = `translateY(${rowAnim.translateY.toFixed(1)}px)`;
    }

    if (currentItem.titleEl) {
      currentItem.titleEl.style.opacity = titleAnim.opacity.toFixed(3);
      currentItem.titleEl.style.transform = `translateY(${titleAnim.translateY.toFixed(1)}px)`;
    }

    if (currentItem.quoteEl) {
      currentItem.quoteEl.style.opacity = quoteAnim.opacity.toFixed(3);
      currentItem.quoteEl.style.transform = `translateY(${quoteAnim.translateY.toFixed(1)}px)`;
    }

    if (currentItem.specsEl) {
      currentItem.specsEl.style.opacity = specsAnim.opacity.toFixed(3);
      currentItem.specsEl.style.transform = `translateY(${specsAnim.translateY.toFixed(1)}px)`;
    }

    // Overall block opacity ensures soft transition at outer edges
    const overallOpacity = Math.max(rowAnim.opacity, titleAnim.opacity, quoteAnim.opacity, specsAnim.opacity);
    currentItem.block.style.opacity = overallOpacity.toFixed(3);
  }
}
