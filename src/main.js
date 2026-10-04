import './styles/main.css';
import { CHAPTERS, STUDIO_DATA } from './data/chaptersData.js';
import { ScrubberEngine } from './modules/scrubberEngine.js';
import { EditorialView } from './modules/editorialView.js';
import { HotspotSystem } from './modules/hotspotSystem.js';
import { Navigation } from './modules/navigation.js';
import { StudioSection } from './modules/studioSection.js';

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
  const headerEl = document.getElementById('site-header');
  const railEl = document.getElementById('vertical-rail');
  const drawerEl = document.getElementById('chapter-drawer-container');
  const heroOpeningEl = document.getElementById('hero-opening');
  const videoStackEl = document.getElementById('video-canvas-stack');
  const hotspotsLayerEl = document.getElementById('hotspots-layer');
  const editorialOverlayEl = document.getElementById('editorial-overlay-layer');
  const scrollTrackEl = document.getElementById('scroll-track');
  const studioContainerEl = document.getElementById('studio-sections-container');

  // HUD References
  const hudSpaceTag = document.getElementById('hud-space-tag');
  const hudTimecode = document.getElementById('hud-timecode');
  const hudFrameCount = document.getElementById('hud-frame-count');
  const telemetryElev = document.getElementById('telemetry-elev');
  const telemetryLens = document.getElementById('telemetry-lens');
  const telemetryAperture = document.getElementById('telemetry-aperture');
  const telemetryOrient = document.getElementById('telemetry-orient');

  // Initialize Sub-Systems
  const editorialView = new EditorialView(editorialOverlayEl, CHAPTERS);
  const hotspotSystem = new HotspotSystem(hotspotsLayerEl, CHAPTERS);
  new StudioSection(studioContainerEl, STUDIO_DATA);

  let scrubber = null;

  const navigation = new Navigation({
    headerEl,
    railEl,
    drawerEl,
    chapters: CHAPTERS,
    onSelectChapter: (chapterIdx) => {
      if (scrubber) {
        scrubber.scrollToChapter(chapterIdx);
      }
    }
  });

  // Initialize Master Scrubber Engine
  scrubber = new ScrubberEngine({
    scrollTrackEl,
    videoStackEl,
    chapters: CHAPTERS,
    onChapterChange: (chapterIdx) => {
      const ch = CHAPTERS[chapterIdx];
      if (hudSpaceTag && ch) {
        hudSpaceTag.textContent = ch.displayNumber;
      }
    },
    onProgressUpdate: (data) => {
      const {
        globalProgress,
        chapterIndex,
        chapterProgress,
        activeCurrentTime,
        currentFrame,
        totalFrames,
        cameraTelemetry
      } = data;

      // 1. Manage Hero Opening visibility
      if (globalProgress > 0.004 || window.scrollY > 40) {
        heroOpeningEl.classList.add('is-hidden');
      } else {
        heroOpeningEl.classList.remove('is-hidden');
      }

      // 2. Update HUD
      if (hudTimecode) {
        const secs = Math.floor(activeCurrentTime);
        const frames = Math.floor((activeCurrentTime - secs) * 24);
        const mm = String(Math.floor(secs / 60)).padStart(2, '0');
        const ss = String(secs % 60).padStart(2, '0');
        const ff = String(frames).padStart(2, '0');
        hudTimecode.textContent = `TC 00:${mm}:${ss}:${ff}`;
      }

      if (hudFrameCount && totalFrames) {
        const fStr = String(currentFrame).padStart(3, '0');
        const totStr = String(totalFrames).padStart(3, '0');
        hudFrameCount.textContent = `FRAME ${fStr} // ${totStr}`;
      }

      if (cameraTelemetry) {
        if (telemetryElev && cameraTelemetry.elevation) telemetryElev.textContent = `ELEV: ${cameraTelemetry.elevation}`;
        if (telemetryLens && cameraTelemetry.focalLength) telemetryLens.textContent = `LENS: ${cameraTelemetry.focalLength}`;
        if (telemetryAperture && cameraTelemetry.aperture) telemetryAperture.textContent = `AP: ${cameraTelemetry.aperture}`;
        if (telemetryOrient && cameraTelemetry.orientation) telemetryOrient.textContent = cameraTelemetry.orientation;
      }

      // 3. Update Floating Editorial Overlay
      editorialView.updateProgress(chapterIndex, chapterProgress, currentFrame, totalFrames);

      // 4. Update Hotspots
      hotspotSystem.update(chapterIndex, chapterProgress);

      // 5. Update Navigation & Vertical Rail
      navigation.update(chapterIndex, globalProgress);
    }
  });

  // Keyboard navigation support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      window.scrollBy({ top: window.innerHeight * 0.4, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      window.scrollBy({ top: -window.innerHeight * 0.4, behavior: 'smooth' });
    } else if (e.key === 'Escape') {
      const modal = document.getElementById('inquiry-modal');
      if (modal) modal.classList.remove('is-open');
      navigation.closeDrawer();
    }
  });

  // Strict zero-audio enforcement
  document.querySelectorAll('video, audio').forEach(el => {
    el.muted = true;
    el.volume = 0;
  });

  console.log('AURELIA RESIDENCE — Architectural Monograph initialized.');
});
