/**
 * Scrubber Engine
 * High-performance, scroll-scrubbed cinematic camera controller.
 * Controls video currentTime, clip crossfades, directional scrub (forward & backward),
 * and provides smooth lerped inertia for a luxury architectural feel.
 */

export class ScrubberEngine {
  constructor({
    scrollTrackEl,
    videoStackEl,
    chapters,
    onProgressUpdate,
    onChapterChange
  }) {
    this.scrollTrackEl = scrollTrackEl;
    this.videoStackEl = videoStackEl;
    this.chapters = chapters;
    this.onProgressUpdate = onProgressUpdate;
    this.onChapterChange = onChapterChange;

    this.videoElements = new Map(); // clipSrc -> HTMLVideoElement
    this.posterElements = new Map(); // clipSrc -> HTMLImageElement

    this.targetProgress = 0;
    this.currentProgress = 0;
    this.lerpFactor = 0.14; // Perfectly tuned for luxury weighted glide
    this.isSeekingMap = new Map();

    this.activeChapterIndex = 0;
    this.totalChapters = chapters.length;

    this.isRunning = false;
    this.rafId = null;

    this.init();
  }

  init() {
    this.createVideoElements();
    this.bindEvents();
    this.startLoop();
  }

  createVideoElements() {
    this.videoStackEl.innerHTML = '';

    // Collect all unique clips across chapters
    const uniqueClips = [];
    this.chapters.forEach(ch => {
      ch.clips.forEach(clip => {
        if (!uniqueClips.some(c => c.src === clip.src)) {
          uniqueClips.push(clip);
        }
      });
    });

    uniqueClips.forEach(clip => {
      // 1. Fallback / Instant Poster
      const poster = document.createElement('img');
      poster.src = clip.poster;
      poster.className = 'architectural-poster';
      poster.alt = clip.label;
      poster.loading = 'eager';
      this.videoStackEl.appendChild(poster);
      this.posterElements.set(clip.src, poster);

      // 2. Video element
      const video = document.createElement('video');
      video.src = clip.src;
      video.className = 'architectural-video';
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.playsInline = true;
      video.preload = 'auto';
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');

      this.isSeekingMap.set(video, false);

      video.addEventListener('loadedmetadata', () => {
        // Pre-warm the video surface at first frame
        try {
          video.currentTime = 0.001;
        } catch (e) {
          // Ignore
        }
      });

      video.addEventListener('seeked', () => {
        this.isSeekingMap.set(video, false);
        // Hide poster once video has successfully rendered
        poster.classList.remove('is-visible');

        // Check if target currentTime moved while seeking
        const pendingTime = video._targetTime;
        if (pendingTime !== undefined && Math.abs(video.currentTime - pendingTime) > 0.02) {
          this.seekVideo(video, pendingTime);
        }
      });

      this.videoStackEl.appendChild(video);
      this.videoElements.set(clip.src, video);
    });

    // Make first poster visible immediately
    const firstClip = this.chapters[0].clips[0];
    if (firstClip) {
      const p = this.posterElements.get(firstClip.src);
      if (p) p.classList.add('is-visible');
    }
  }

  seekVideo(video, time) {
    if (!video || !video.duration || isNaN(time)) return;
    const clamped = Math.max(0.001, Math.min(video.duration - 0.01, time));
    video._targetTime = clamped;

    if (!this.isSeekingMap.get(video)) {
      this.isSeekingMap.set(video, true);
      video.currentTime = clamped;
    }
  }

  bindEvents() {
    window.addEventListener('scroll', () => {
      this.calculateTargetProgress();
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.calculateTargetProgress();
    }, { passive: true });

    // Initial calculation
    this.calculateTargetProgress();
  }

  calculateTargetProgress() {
    const trackRect = this.scrollTrackEl.getBoundingClientRect();
    const trackTop = -trackRect.top;
    const maxScroll = trackRect.height - window.innerHeight;

    if (maxScroll <= 0) {
      this.targetProgress = 0;
      return;
    }

    const rawProgress = trackTop / maxScroll;
    this.targetProgress = Math.max(0, Math.min(1, rawProgress));
  }

  startLoop() {
    this.isRunning = true;
    const render = () => {
      if (!this.isRunning) return;

      // Smooth lerping
      const delta = this.targetProgress - this.currentProgress;
      if (Math.abs(delta) > 0.0001) {
        this.currentProgress += delta * this.lerpFactor;
      } else {
        this.currentProgress = this.targetProgress;
      }

      this.renderFrame(this.currentProgress);
      this.rafId = requestAnimationFrame(render);
    };

    this.rafId = requestAnimationFrame(render);
  }

  renderFrame(progress) {
    // Determine active chapter (0 to totalChapters - 1)
    const scaledProgress = progress * this.totalChapters;
    let chapterIndex = Math.floor(scaledProgress);
    if (chapterIndex >= this.totalChapters) chapterIndex = this.totalChapters - 1;
    if (chapterIndex < 0) chapterIndex = 0;

    const chapterLocalProgress = scaledProgress - chapterIndex;
    const chapter = this.chapters[chapterIndex];

    if (chapterIndex !== this.activeChapterIndex) {
      this.activeChapterIndex = chapterIndex;
      if (this.onChapterChange) {
        this.onChapterChange(chapterIndex);
      }
    }

    // Handle video opacity and scrubbing
    // Each chapter can have 1 or 2 clips
    let activeVideo = null;
    let activeDuration = 4.0;
    let activeCurrentTime = 0;

    if (chapter.clips.length === 1) {
      const clip = chapter.clips[0];
      const video = this.videoElements.get(clip.src);
      if (video) {
        activeVideo = video;
        const dur = video.duration || 4.032;
        activeDuration = dur;
        const targetTime = chapterLocalProgress * dur;
        activeCurrentTime = targetTime;
        this.seekVideo(video, targetTime);
      }
    } else if (chapter.clips.length === 2) {
      // 2-part sequence (e.g. Arrival: pool approach -> entrance portal)
      const clipA = chapter.clips[0];
      const clipB = chapter.clips[1];
      const videoA = this.videoElements.get(clipA.src);
      const videoB = this.videoElements.get(clipB.src);

      const splitPoint = clipA.weight || 0.55;

      if (chapterLocalProgress <= splitPoint) {
        // Part 1: Clip A
        const partProg = chapterLocalProgress / splitPoint;
        if (videoA) {
          activeVideo = videoA;
          const dur = videoA.duration || 8.04;
          activeDuration = dur;
          const targetTime = partProg * dur;
          activeCurrentTime = targetTime;
          this.seekVideo(videoA, targetTime);
        }
      } else {
        // Part 2: Clip B
        const partProg = (chapterLocalProgress - splitPoint) / (1 - splitPoint);
        if (videoB) {
          activeVideo = videoB;
          const dur = videoB.duration || 4.03;
          activeDuration = dur;
          const targetTime = partProg * dur;
          activeCurrentTime = targetTime;
          this.seekVideo(videoB, targetTime);
        }
      }
    }

    // Set video opacities across all videos
    this.updateVideoOpacities(chapterIndex, chapterLocalProgress);

    // Calculate HUD frame counter
    const currentFrame = Math.round(activeCurrentTime * 24) + 1;
    const totalFrames = Math.max(24, Math.round(activeDuration * 24));

    if (this.onProgressUpdate) {
      this.onProgressUpdate({
        globalProgress: progress,
        chapterIndex,
        chapterProgress: chapterLocalProgress,
        activeCurrentTime,
        activeDuration,
        currentFrame,
        totalFrames,
        cameraTelemetry: chapter.cameraTelemetry
      });
    }
  }

  updateVideoOpacities(activeChapterIdx, localProg) {
    const activeChapter = this.chapters[activeChapterIdx];

    // Build map of intended clip opacities
    const targetOpacities = new Map();
    this.videoElements.forEach((_, src) => targetOpacities.set(src, 0));

    if (activeChapter.clips.length === 1) {
      targetOpacities.set(activeChapter.clips[0].src, 1);
    } else if (activeChapter.clips.length === 2) {
      const splitPoint = activeChapter.clips[0].weight || 0.55;
      const crossfadeWidth = 0.08; // 8% smooth blend around splitPoint

      if (localProg < splitPoint - crossfadeWidth / 2) {
        targetOpacities.set(activeChapter.clips[0].src, 1);
        targetOpacities.set(activeChapter.clips[1].src, 0);
      } else if (localProg > splitPoint + crossfadeWidth / 2) {
        targetOpacities.set(activeChapter.clips[0].src, 0);
        targetOpacities.set(activeChapter.clips[1].src, 1);
      } else {
        // Inside transition zone
        const blend = (localProg - (splitPoint - crossfadeWidth / 2)) / crossfadeWidth;
        targetOpacities.set(activeChapter.clips[0].src, 1 - blend);
        targetOpacities.set(activeChapter.clips[1].src, blend);
      }
    }

    // Apply opacities and active classes
    this.videoElements.forEach((video, src) => {
      const opacity = targetOpacities.get(src) || 0;
      video.style.opacity = opacity.toFixed(3);
      if (opacity > 0.02) {
        video.classList.add('is-active');
      } else {
        video.classList.remove('is-active');
      }
    });
  }

  scrollToChapter(index) {
    const trackRect = this.scrollTrackEl.getBoundingClientRect();
    const trackOffsetTop = window.scrollY + trackRect.top;
    const maxScroll = trackRect.height - window.innerHeight;

    const chapterNormalizedProgress = (index + 0.05) / this.totalChapters;
    const targetScrollY = trackOffsetTop + (chapterNormalizedProgress * maxScroll);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }

  destroy() {
    this.isRunning = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
