(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/enteryclip1-D-9BQZ3m.mp4`,t=`/assets/enteryjustclip2-B4fFT3JE.mp4`,n=`/assets/livingclip3-CMaf897D.mp4`,r=`/assets/kitchenclip4-BgDz7ZPc.mp4`,i=`/assets/bedroomclip5-C6HfqWUM.mp4`,a=`/assets/bathroomclip6-DPo7Ze31.mp4`,o=`/assets/clip1_poster-fVtSKaZN.jpg`,s=[{id:`arrival`,number:`01`,displayNumber:`01 / ARRIVAL`,title:`ARRIVAL`,subtitle:`THE MONUMENTAL APPROACH`,layoutPosition:`left`,quote:`A contemporary residence defined by monumental proportions, natural stone and carefully controlled light.`,spaceName:`ARRIVAL & PORTAL`,cameraTelemetry:{elevation:`+1.60m`,focalLength:`24mm`,aperture:`f/4.0`,orientation:`North-East 34°`},materials:[`Roman Travertine`,`Architectural Bronze`,`Structural Low-Iron Glass`,`Honed Basalt`],details:[`Contemporary architecture`,`Travertine facade`,`Floor-to-ceiling glazing`,`Reflecting pool`],clips:[{src:e,poster:o,label:`Exterior Approach & Pool`,weight:.55},{src:t,poster:`/assets/clip2_poster-CO7vSlm3.jpg`,label:`Entrance Portal & Threshold`,weight:.45}],hotspots:[{id:`travertine-facade`,label:`Travertine Facade`,category:`Materiality`,x:23,y:42,description:`Monumental honed Roman travertine blocks with hairline recessed bronze joints, creating timeless monolithic presence.`,provenance:`Tivoli Quarry, Lazio, Italy`},{id:`reflecting-pool`,label:`Reflecting Pool`,category:`Architectural Water`,x:48,y:84,description:`Zero-edge water mirror spanning the full frontage, amplifying twilight reflections and cooling ambient breezes.`,provenance:`Honed Zimbabwean Black Granite`},{id:`glazing-envelope`,label:`Floor-to-Ceiling Glazing`,category:`Structural Envelope`,x:52,y:35,description:`Custom 6-meter motorized glass panes engineered with invisible frame profiles and solar-control coatings.`,provenance:`Saint-Gobain Diamant Low-Iron Glass`}]},{id:`living`,number:`02`,displayNumber:`02 / LIVING SPACE`,title:`LIVING SPACE`,subtitle:`THE DOUBLE-HEIGHT ATRIUM`,layoutPosition:`left`,quote:`A double-height living environment designed around natural materials, sculptural forms and uninterrupted views.`,spaceName:`MAIN LIVING PAVILION`,cameraTelemetry:{elevation:`+1.85m`,focalLength:`28mm`,aperture:`f/2.8`,orientation:`South-West 210°`},materials:[`Travertine`,`Dark Walnut`,`Natural Stone`,`Brushed Champagne Bronze`],details:[`Double-height volume`,`Sculptural staircase`,`Custom furniture`,`Architectural lighting`],clips:[{src:n,poster:`/assets/clip3_poster-BFyaVuEO.jpg`,label:`Grand Living Space & Helical Stairs`,weight:1}],hotspots:[{id:`helical-staircase`,label:`Sculptural Staircase`,category:`Sculptural Form`,x:82,y:52,description:`Continuous helical staircase hand-carved from solid travertine blocks with an integrated bronze handrail channel.`,provenance:`Bespoke Aurelia Atelier Commission`},{id:`walnut-cladding`,label:`Dark Walnut Paneling`,category:`Millwork`,x:27,y:38,description:`Floor-to-ceiling American black walnut paneling incorporating concealed acoustic baffles and secret doors.`,provenance:`Pennsylvania Architectural Hardwood`},{id:`modular-lounge`,label:`Custom Furniture Suite`,category:`Interiors`,x:44,y:72,description:`Low-profile modular sofa configured for spatial conversation, upholstered in heavy natural linen and wool bouclé.`,provenance:`Custom Designed by Aurelia Studio`},{id:`recessed-lighting`,label:`Architectural Lighting`,category:`Lighting Design`,x:48,y:16,description:`Concealed micro-linear LED channels casting calibrated 2700K warm wash across ceiling planes without visible source glare.`,provenance:`Flos Architectural Custom Spec`}]},{id:`kitchen`,number:`03`,displayNumber:`03 / CULINARY SPACE`,title:`CULINARY SPACE`,subtitle:`THE MONOLITHIC KITCHEN & DINING`,layoutPosition:`right`,quote:`A restrained composition of stone, timber and metal designed for both intimate dining and expansive entertaining.`,spaceName:`CULINARY & DINING SUITE`,cameraTelemetry:{elevation:`+1.45m`,focalLength:`35mm`,aperture:`f/2.8`,orientation:`West 270°`},materials:[`Natural Stone`,`Walnut`,`Brushed Metal`,`Calacatta Paonazzo`],details:[`Monolithic island`,`Custom cabinetry`,`Integrated lighting`,`Bespoke dining environment`],clips:[{src:r,poster:`/assets/clip4_poster-DkUIrV5v.jpg`,label:`Kitchen Island & Dining Pavilion`,weight:1}],hotspots:[{id:`waterfall-island`,label:`Monolithic Island`,category:`Stone Craft`,x:48,y:64,description:`Single block Calacatta Paonazzo marble with mitered waterfall edges and flush undermount induction zones.`,provenance:`Carrara Marble Basin, Tuscany`},{id:`custom-cabinetry`,label:`Custom Cabinetry`,category:`Millwork`,x:75,y:35,description:`Quarter-sawn walnut cabinet fronts with touch-latch mechanisms concealing sub-zero refrigeration and wine reserves.`,provenance:`Artisanal Joinery Workshop`},{id:`ribbon-pendants`,label:`Bespoke Lighting`,category:`Sculptural Lighting`,x:42,y:15,description:`Sculpted bronze ribbon luminaires that anchor the dining volume with warm geometric reflections.`,provenance:`Limited Studio Series`},{id:`dining-extension`,label:`Bespoke Dining Environment`,category:`Furniture Design`,x:24,y:74,description:`Cantilevered solid walnut dining table seamlessly joined to the stone island, seating eight guests in comfort.`,provenance:`Solid Walnut Timber Slab`}]},{id:`bedroom`,number:`04`,displayNumber:`04 / MASTER SUITE`,title:`MASTER SUITE`,subtitle:`THE PRIVATE SANCTUARY`,layoutPosition:`left`,quote:`A private retreat shaped by soft textures, warm materials and expansive views.`,spaceName:`MASTER BEDROOM SUITE`,cameraTelemetry:{elevation:`+1.50m`,focalLength:`32mm`,aperture:`f/2.4`,orientation:`South 180°`},materials:[`Walnut`,`Textured Fabric`,`Natural Stone`,`Raw Silk & Wool`],details:[`Custom millwork`,`Floor-to-ceiling glazing`,`Ambient lighting`,`Private lounge`],clips:[{src:i,poster:`/assets/clip5_poster-BNNOzZfg.jpg`,label:`Master Suite & Skyline View`,weight:1}],hotspots:[{id:`custom-headboard`,label:`Custom Millwork Headboard`,category:`Millwork & Stone`,x:35,y:40,description:`Fluted American walnut wall backdrop integrated with bookmatched marble reveals and concealed bedside automation.`,provenance:`Aurelia Bespoke Suite Design`},{id:`skyline-glazing`,label:`Floor-to-Ceiling Glazing`,category:`Envelope`,x:82,y:45,description:`Unobstructed full-height glazing framing distant horizon views with concealed motorized blackout linen drapes.`,provenance:`Acoustic Triple-Glazed System`},{id:`chaise-lounge`,label:`Private Lounge Chaise`,category:`Interiors`,x:24,y:78,description:`Ergonomic daybed upholstered in textured charcoal woven fabric, positioned for quiet morning reflection.`,provenance:`Italian Upholstery Guild`},{id:`suspended-pendants`,label:`Ambient Lighting`,category:`Lighting Design`,x:52,y:42,description:`Hand-blown organic glass teardrop pendants creating soft, non-intrusive bedside illumination.`,provenance:`Murano Hand-Blown Glass`}]},{id:`bathroom`,number:`05`,displayNumber:`05 / PRIVATE SPA`,title:`PRIVATE SPA`,subtitle:`THE WELLNESS RETREAT`,layoutPosition:`right`,quote:`A quiet architectural sanctuary where stone, water and light create a restrained sense of luxury.`,spaceName:`PRIMARY SPA & BATH`,cameraTelemetry:{elevation:`+1.40m`,focalLength:`24mm`,aperture:`f/3.2`,orientation:`North-West 315°`},materials:[`Travertine`,`Marble`,`Brushed Metal`,`Matte Solid Surface`],details:[`Sculptural bath`,`Walk-in shower`,`Floating vanity`,`Indirect lighting`],clips:[{src:a,poster:`/assets/clip6_poster-1uxY2DSe.jpg`,label:`Primary Spa Bath & Floating Vanity`,weight:1}],hotspots:[{id:`freestanding-tub`,label:`Sculptural Bath`,category:`Sanitary Architecture`,x:38,y:72,description:`Seamless oval soaking tub crafted from cast mineral composite with floor-mounted brushed nickel tapware.`,provenance:`Custom Cast Mineral Resin`},{id:`marble-cladding`,label:`Bookmatched Marble`,category:`Natural Stone`,x:22,y:38,description:`Precision bookmatched Arabescato marble slabs enveloping the walls with dramatic organic veining.`,provenance:`Apuan Alps, Italy`},{id:`floating-vanity`,label:`Floating Vanity`,category:`Stone Millwork`,x:76,y:68,description:`Cantilevered monolithic travertine basin unit with dual integrated sinks and concealed perimeter drain channels.`,provenance:`Roman Silver Travertine`},{id:`walkin-shower`,label:`Walk-in Shower`,category:`Hydrotherapy`,x:64,y:45,description:`Open wet-room shower zone with flush ceiling rain cascade and full-height frameless glass separation.`,provenance:`Dornbracht Architectural Fixtures`}]},{id:`terrace`,number:`06`,displayNumber:`06 / TERRACE`,title:`THE TERRACE`,subtitle:`THE ARCHITECTURAL CLIMAX`,layoutPosition:`left`,quote:`Architecture opens completely toward the surrounding landscape, creating a final transition between interior and exterior.`,spaceName:`EXTERIOR TERRACE & INFINITY VISTA`,cameraTelemetry:{elevation:`+2.10m`,focalLength:`21mm`,aperture:`f/5.6`,orientation:`North-East 45°`},materials:[`Travertine`,`Structural Glass`,`Reflecting Water`,`Patinated Bronze`],details:[`Infinity edge`,`Panoramic glazing`,`Outdoor lounge`,`Landscape integration`],clips:[{src:e,poster:o,label:`Terrace & Illuminated Residence Reveal`,weight:1}],hotspots:[{id:`infinity-edge`,label:`Infinity Edge Pool`,category:`Water Architecture`,x:50,y:78,description:`Perimeter overflow pool creating an optical bridge between residence stone paving and the natural horizon.`,provenance:`Zero-Tolerance Precision Engineering`},{id:`panoramic-facade`,label:`Panoramic Glazing`,category:`Facade Engineering`,x:52,y:38,description:`Dissolving glass walls that unite the double-height volume with the exterior terrace at dusk.`,provenance:`High-Performance Solar Glass`},{id:`outdoor-lounge`,label:`Outdoor Living Pavilions`,category:`Landscape Architecture`,x:78,y:54,description:`Recessed conversation pits with integrated linear gas hearths and weather-resistant Belgian linen seating.`,provenance:`Aurelia Outdoor Series`},{id:`landscape-integration`,label:`Landscape Integration`,category:`Contextual Design`,x:20,y:65,description:`Architectural grass borders and specimen olive trees illuminated with low-glare 2400K landscape accents.`,provenance:`Mediterranean Native Xeriscape`}]}],c={name:`AURELIA RESIDENCE`,tagline:`PRIVATE INTERIOR ARCHITECTURE & RESIDENTIAL DESIGN`,manifesto:`Aurelia Residence exists at the intersection of monumental proportion and intimate materiality. We believe architecture should not impose upon human existence, but rather frame it with dignity, silence, and quiet permanence.`,pillars:[{index:`01`,title:`INTERIOR ARCHITECTURE`,description:`Sculpting volumes from the inside out. We manipulate double-height voids, monolithic stairways, and architectural glass to establish effortless spatial cadence.`},{index:`02`,title:`CUSTOM RESIDENTIAL DESIGN`,description:`Each residence is an unrepeatable commission. We choreograph morning light, sightlines, and circulation to create sanctuaries of uncompromising beauty.`},{index:`03`,title:`MATERIAL DIRECTION`,description:`Direct procurement from generational Italian quarries, Nordic sustainable timber forests, and artisanal metal workshops with absolute provenance.`},{index:`04`,title:`LIGHTING & SPATIAL EXPERIENCE`,description:`Light is treated as physical mass. We sculpt solar trajectories by day and calibrate silent, glare-free indirect warmth by night.`}],stats:[{value:`15+`,label:`Years of Design Experience`,caption:`Dedicated solely to ultra-prime private residential environments`},{value:`42`,label:`Residential Projects`,caption:`Bespoke commissions executed with obsessive spatial precision`},{value:`18`,label:`International Collaborations`,caption:`Master artisans, master stone sculptors, and engineering pioneers`},{value:`100%`,label:`Bespoke Craftsmanship`,caption:`Zero standard catalog fixtures; every element drawn from scratch`}],services:[{number:`01`,title:`INTERIOR ARCHITECTURE`,scope:`Structural space planning, double-height volumes, stair geometry, door elevation schedules, acoustic ceilings, and integrated HVAC concealed design.`},{number:`02`,title:`RESIDENTIAL DESIGN`,scope:`Holistic interior schemes, spatial harmony, bespoke finishes, artwork curation, tactile fabric sourcing, and complete lifestyle masterplanning.`},{number:`03`,title:`MATERIAL & FINISH DIRECTION`,scope:`Direct quarry selection (travertine, Calacatta, onyx), timber species specification, hand-rubbed metal patinas, and mineral plaster testing.`},{number:`04`,title:`LIGHTING DESIGN`,scope:`Circadian architectural lighting schemes, hidden trough detailing, museum-grade art illumination, and custom decorative pendant development.`},{number:`05`,title:`BESPOKE FURNITURE`,scope:`One-of-a-kind stone dining monoliths, custom upholstered modular seating, architectural dressing suites, and collectible design commissions.`},{number:`06`,title:`SPATIAL EXPERIENCE`,scope:`Sensory acoustic modeling, climate-responsive transitions, water reflection integration, and landscape-to-interior dissolution.`}],contact:{heading:`LET'S CREATE`,subheading:`YOUR NEXT SPACE.`,description:`For private residences, architectural interiors and bespoke environments.`,email:`hello@aureliaresidence.com`,phone:`+00 000 000 000`,locations:[`London`,`Dubai`,`Mumbai`],studios:[{city:`London`,address:`14 Berkeley Square, Mayfair, London W1J 6BQ`},{city:`Dubai`,address:`Gate Village 08, DIFC, Dubai, UAE`},{city:`Mumbai`,address:`Bandra Reclamation, Mumbai 400050`}]}},l=class{constructor({scrollTrackEl:e,videoStackEl:t,chapters:n,onProgressUpdate:r,onChapterChange:i}){this.scrollTrackEl=e,this.videoStackEl=t,this.chapters=n,this.onProgressUpdate=r,this.onChapterChange=i,this.videoElements=new Map,this.posterElements=new Map,this.targetProgress=0,this.currentProgress=0,this.lerpFactor=.14,this.isSeekingMap=new Map,this.activeChapterIndex=0,this.totalChapters=n.length,this.isRunning=!1,this.rafId=null,this.init()}init(){this.createVideoElements(),this.bindEvents(),this.startLoop()}createVideoElements(){this.videoStackEl.innerHTML=``;let e=[];this.chapters.forEach(t=>{t.clips.forEach(t=>{e.some(e=>e.src===t.src)||e.push(t)})}),e.forEach(e=>{let t=document.createElement(`img`);t.src=e.poster,t.className=`architectural-poster`,t.alt=e.label,t.loading=`eager`,this.videoStackEl.appendChild(t),this.posterElements.set(e.src,t);let n=document.createElement(`video`);n.src=e.src,n.className=`architectural-video`,n.muted=!0,n.defaultMuted=!0,n.volume=0,n.playsInline=!0,n.preload=`auto`,n.setAttribute(`muted`,``),n.setAttribute(`playsinline`,``),n.setAttribute(`webkit-playsinline`,``),this.isSeekingMap.set(n,!1),n.addEventListener(`loadedmetadata`,()=>{try{n.currentTime=.001}catch{}}),n.addEventListener(`seeked`,()=>{this.isSeekingMap.set(n,!1),t.classList.remove(`is-visible`);let e=n._targetTime;e!==void 0&&Math.abs(n.currentTime-e)>.02&&this.seekVideo(n,e)}),this.videoStackEl.appendChild(n),this.videoElements.set(e.src,n)});let t=this.chapters[0].clips[0];if(t){let e=this.posterElements.get(t.src);e&&e.classList.add(`is-visible`)}}seekVideo(e,t){if(!e||!e.duration||isNaN(t))return;let n=Math.max(.001,Math.min(e.duration-.01,t));e._targetTime=n,this.isSeekingMap.get(e)||(this.isSeekingMap.set(e,!0),e.currentTime=n)}bindEvents(){window.addEventListener(`scroll`,()=>{this.calculateTargetProgress()},{passive:!0}),window.addEventListener(`resize`,()=>{this.calculateTargetProgress()},{passive:!0}),this.calculateTargetProgress()}calculateTargetProgress(){let e=this.scrollTrackEl.getBoundingClientRect(),t=-e.top,n=e.height-window.innerHeight;if(n<=0){this.targetProgress=0;return}let r=t/n;this.targetProgress=Math.max(0,Math.min(1,r))}startLoop(){this.isRunning=!0;let e=()=>{if(!this.isRunning)return;let t=this.targetProgress-this.currentProgress;Math.abs(t)>1e-4?this.currentProgress+=t*this.lerpFactor:this.currentProgress=this.targetProgress,this.renderFrame(this.currentProgress),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}renderFrame(e){let t=e*this.totalChapters,n=Math.floor(t);n>=this.totalChapters&&(n=this.totalChapters-1),n<0&&(n=0);let r=t-n,i=this.chapters[n];n!==this.activeChapterIndex&&(this.activeChapterIndex=n,this.onChapterChange&&this.onChapterChange(n));let a=4,o=0;if(i.clips.length===1){let e=i.clips[0],t=this.videoElements.get(e.src);if(t){let e=t.duration||4.032;a=e;let n=r*e;o=n,this.seekVideo(t,n)}}else if(i.clips.length===2){let e=i.clips[0],t=i.clips[1],n=this.videoElements.get(e.src),s=this.videoElements.get(t.src),c=e.weight||.55;if(r<=c){let e=r/c;if(n){let t=n.duration||8.04;a=t;let r=e*t;o=r,this.seekVideo(n,r)}}else{let e=(r-c)/(1-c);if(s){let t=s.duration||4.03;a=t;let n=e*t;o=n,this.seekVideo(s,n)}}}this.updateVideoOpacities(n,r);let s=Math.round(o*24)+1,c=Math.max(24,Math.round(a*24));this.onProgressUpdate&&this.onProgressUpdate({globalProgress:e,chapterIndex:n,chapterProgress:r,activeCurrentTime:o,activeDuration:a,currentFrame:s,totalFrames:c,cameraTelemetry:i.cameraTelemetry})}updateVideoOpacities(e,t){let n=this.chapters[e],r=new Map;if(this.videoElements.forEach((e,t)=>r.set(t,0)),n.clips.length===1)r.set(n.clips[0].src,1);else if(n.clips.length===2){let e=n.clips[0].weight||.55,i=.08;if(t<e-i/2)r.set(n.clips[0].src,1),r.set(n.clips[1].src,0);else if(t>e+i/2)r.set(n.clips[0].src,0),r.set(n.clips[1].src,1);else{let a=(t-(e-i/2))/i;r.set(n.clips[0].src,1-a),r.set(n.clips[1].src,a)}}this.videoElements.forEach((e,t)=>{let n=r.get(t)||0;e.style.opacity=n.toFixed(3),n>.02?e.classList.add(`is-active`):e.classList.remove(`is-active`)})}scrollToChapter(e){let t=this.scrollTrackEl.getBoundingClientRect(),n=window.scrollY+t.top,r=t.height-window.innerHeight,i=n+(e+.05)/this.totalChapters*r;window.scrollTo({top:i,behavior:`smooth`})}destroy(){this.isRunning=!1,this.rafId&&cancelAnimationFrame(this.rafId)}},u=class{constructor(e,t){this.containerEl=e,this.chapters=t,this.currentChapterIndex=-1,this.chapterBlocks=[],this.init()}init(){this.containerEl&&(this.containerEl.innerHTML=``,this.chapters.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`floating-editorial-block ${e.layoutPosition===`right`?`align-right`:`align-left`}`,n.dataset.index=t;let r=e.materials.slice(0,4),i=e.details.slice(0,4);n.innerHTML=`
        <div class="editorial-chap-row" data-anim="row">
          <span class="editorial-chap-num">${e.number}</span>
          <span class="editorial-chap-sep">/</span>
          <span class="editorial-chap-name">${e.spaceName||e.subtitle||`INTERIOR MONOGRAPH`}</span>
        </div>
        <h2 class="editorial-room-title" data-anim="title">${e.title}</h2>
        <p class="editorial-quote" data-anim="quote">"${e.quote}"</p>
        <div class="editorial-specs-row" data-anim="specs">
          <div class="editorial-spec-col">
            <span class="spec-heading">MATERIALS</span>
            <ul class="spec-list">
              ${r.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
          </div>
          <div class="editorial-spec-col">
            <span class="spec-heading">DETAILS</span>
            <ul class="spec-list">
              ${i.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
          </div>
        </div>
      `,this.containerEl.appendChild(n),this.chapterBlocks.push({block:n,rowEl:n.querySelector(`[data-anim="row"]`),titleEl:n.querySelector(`[data-anim="title"]`),quoteEl:n.querySelector(`[data-anim="quote"]`),specsEl:n.querySelector(`[data-anim="specs"]`)})}),this.setActiveChapter(0))}setActiveChapter(e){this.currentChapterIndex!==e&&(this.currentChapterIndex=e,this.chapterBlocks.forEach((t,n)=>{n===e?(t.block.classList.add(`is-active`),t.block.style.visibility=`visible`,t.block.style.pointerEvents=`auto`):(t.block.classList.remove(`is-active`),t.block.style.visibility=`hidden`,t.block.style.opacity=`0`,t.block.style.pointerEvents=`none`)}))}_calcAnim(e,t,n,r,i){if(e<t)return{opacity:0,translateY:16};if(e<n){let r=(e-t)/(n-t);return{opacity:r,translateY:(1-r)*16}}if(e<=r)return{opacity:1,translateY:0};if(e<i){let t=(e-r)/(i-r);return{opacity:1-t,translateY:-t*14}}return{opacity:0,translateY:-14}}updateProgress(e,t,n,r){e!==this.currentChapterIndex&&this.setActiveChapter(e);let i=this.chapterBlocks[e];if(!i)return;let a=this._calcAnim(t,0,.06,.94,1),o=this._calcAnim(t,.02,.08,.92,.98),s=this._calcAnim(t,.04,.1,.9,.96),c=this._calcAnim(t,.06,.12,.88,.94);i.rowEl&&(i.rowEl.style.opacity=a.opacity.toFixed(3),i.rowEl.style.transform=`translateY(${a.translateY.toFixed(1)}px)`),i.titleEl&&(i.titleEl.style.opacity=o.opacity.toFixed(3),i.titleEl.style.transform=`translateY(${o.translateY.toFixed(1)}px)`),i.quoteEl&&(i.quoteEl.style.opacity=s.opacity.toFixed(3),i.quoteEl.style.transform=`translateY(${s.translateY.toFixed(1)}px)`),i.specsEl&&(i.specsEl.style.opacity=c.opacity.toFixed(3),i.specsEl.style.transform=`translateY(${c.translateY.toFixed(1)}px)`);let l=Math.max(a.opacity,o.opacity,s.opacity,c.opacity);i.block.style.opacity=l.toFixed(3)}},d=class{constructor(e,t){this.containerEl=e,this.chapters=t,this.activeChapterIndex=0,this.activeHotspotEl=null,this.init()}init(){this.containerEl.innerHTML=``,this.renderCurrentChapterHotspots(0)}renderCurrentChapterHotspots(e){this.activeChapterIndex=e,this.containerEl.innerHTML=``;let t=this.chapters[e];t&&t.hotspots&&t.hotspots.forEach(e=>{let t=document.createElement(`div`);t.className=`architectural-hotspot`,t.dataset.id=e.id,t.style.left=`${e.x}%`,t.style.top=`${e.y}%`,e.x>62&&t.classList.add(`align-left`),t.innerHTML=`
        <div class="hotspot-pin" title="${e.label}">
          <div class="hotspot-ring"></div>
          <div class="hotspot-center"></div>
        </div>
        <div class="hotspot-card">
          <div class="hotspot-card-category">${e.category||`Architectural Detail`}</div>
          <div class="hotspot-card-title">${e.label}</div>
          <p class="hotspot-card-desc">${e.description}</p>
          <div class="hotspot-card-provenance">${e.provenance||`Aurelia Specification`}</div>
        </div>
      `,t.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.contains(`is-pinned`)?t.classList.remove(`is-pinned`):(this.containerEl.querySelectorAll(`.architectural-hotspot`).forEach(e=>e.classList.remove(`is-pinned`)),t.classList.add(`is-pinned`))}),this.containerEl.appendChild(t)})}update(e,t){e!==this.activeChapterIndex&&this.renderCurrentChapterHotspots(e);let n=t<.05||t>.95;this.containerEl.style.opacity=n?`0.3`:`1`,this.containerEl.style.transition=`opacity 0.25s ease`}},f=class{constructor({headerEl:e,railEl:t,drawerEl:n,chapters:r,onSelectChapter:i}){this.headerEl=e,this.railEl=t,this.drawerEl=n,this.chapters=r,this.onSelectChapter=i,this.activeChapterIndex=0,this.isDrawerOpen=!1,this.init()}init(){this.renderHeader(),this.renderVerticalRail(),this.renderDrawer(),this.bindEvents()}renderHeader(){this.headerEl.className=`site-header`,this.headerEl.innerHTML=`
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
    `,this.numEl=document.getElementById(`header-chapter-num`),this.nameEl=document.getElementById(`header-chapter-name`)}renderVerticalRail(){this.railEl&&(this.railEl.className=`vertical-progress-rail is-active`,this.railEl.innerHTML=`
      <div class="rail-track-line">
        <div class="rail-fill-line" id="rail-fill-line"></div>
      </div>
      ${this.chapters.map((e,t)=>`
        <button class="rail-step-dot ${t===0?`is-active`:``}" data-index="${t}" aria-label="${e.title}">
          <span class="rail-step-tooltip">${e.number} ${e.title}</span>
        </button>
      `).join(``)}
    `,this.railFillEl=document.getElementById(`rail-fill-line`),this.railDots=this.railEl.querySelectorAll(`.rail-step-dot`),this.railDots.forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index,10);this.onSelectChapter&&this.onSelectChapter(t)})}))}renderDrawer(){this.drawerEl&&(this.drawerEl.innerHTML=`
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
          ${this.chapters.map((e,t)=>`
            <li class="drawer-nav-item ${t===0?`is-active`:``}" data-index="${t}">
              <span class="drawer-item-num">${e.number}</span>
              <span class="drawer-item-title">${e.title}</span>
            </li>
          `).join(``)}
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
    `,this.drawerOverlay=document.getElementById(`drawer-overlay`),this.drawerPanel=document.getElementById(`drawer-panel`),document.getElementById(`drawer-close-btn`).addEventListener(`click`,()=>this.closeDrawer()),this.drawerOverlay.addEventListener(`click`,()=>this.closeDrawer()),this.drawerPanel.querySelectorAll(`.drawer-nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{this.closeDrawer();let t=e.dataset.target;if(t===`studio`){let e=document.getElementById(`studio-section`);e&&e.scrollIntoView({behavior:`smooth`})}else if(t===`contact`){let e=document.getElementById(`contact-section`);e&&e.scrollIntoView({behavior:`smooth`})}else{let t=parseInt(e.dataset.index,10);!isNaN(t)&&this.onSelectChapter&&this.onSelectChapter(t)}})}))}bindEvents(){let e=document.getElementById(`open-drawer-btn`);e&&e.addEventListener(`click`,()=>this.openDrawer());let t=document.getElementById(`header-brand-link`);t&&t.addEventListener(`click`,e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})})}openDrawer(){this.isDrawerOpen=!0,this.drawerOverlay&&this.drawerOverlay.classList.add(`is-open`),this.drawerPanel&&this.drawerPanel.classList.add(`is-open`)}closeDrawer(){this.isDrawerOpen=!1,this.drawerOverlay&&this.drawerOverlay.classList.remove(`is-open`),this.drawerPanel&&this.drawerPanel.classList.remove(`is-open`)}update(e,t){if(e!==this.activeChapterIndex){this.activeChapterIndex=e;let t=this.chapters[e];t&&(this.numEl&&(this.numEl.textContent=t.number),this.nameEl&&(this.nameEl.textContent=t.title)),this.railDots&&this.railDots.forEach((t,n)=>{t.classList.toggle(`is-active`,n===e)}),this.drawerPanel&&this.drawerPanel.querySelectorAll(`.drawer-nav-item[data-index]`).forEach(t=>{let n=parseInt(t.dataset.index,10);t.classList.toggle(`is-active`,n===e)})}this.railFillEl&&(this.railFillEl.style.height=`${Math.round(t*100)}%`)}},p=class{constructor(e,t){this.containerEl=e,this.data=t,this.modalEl=null,this.init()}init(){this.render(),this.createModal(),this.bindEvents()}render(){this.containerEl.innerHTML=`
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
            ${this.data.pillars.map(e=>`
              <div class="pillar-card">
                <span class="pillar-index">${e.index}</span>
                <h3 class="pillar-title">${e.title}</h3>
                <p class="pillar-desc">${e.description}</p>
              </div>
            `).join(``)}
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
            ${this.data.stats.map(e=>`
              <div class="stat-item">
                <div class="stat-value">${e.value}</div>
                <div class="stat-label">${e.label}</div>
                <div class="stat-caption">${e.caption}</div>
              </div>
            `).join(``)}
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
            ${this.data.services.map(e=>`
              <div class="service-row">
                <span class="service-number">${e.number}</span>
                <div class="service-title-wrap">
                  <h3 class="service-title">${e.title}</h3>
                  <p class="service-scope">${e.scope}</p>
                </div>
                <div class="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            `).join(``)}
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
                ${this.data.contact.locations.join(` · `)}
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
    `}createModal(){let e=document.createElement(`div`);e.className=`modal-overlay`,e.id=`inquiry-modal`,e.innerHTML=`
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
    `,document.body.appendChild(e),this.modalEl=e}bindEvents(){let e=document.getElementById(`open-inquiry-btn`),t=document.getElementById(`modal-close-btn`),n=document.getElementById(`success-done-btn`),r=document.getElementById(`project-inquiry-form`),i=document.getElementById(`form-container`),a=document.getElementById(`form-success`),o=document.getElementById(`footer-top-btn`);e&&e.addEventListener(`click`,()=>{this.modalEl&&this.modalEl.classList.add(`is-open`)});let s=()=>{this.modalEl&&this.modalEl.classList.remove(`is-open`)};t&&t.addEventListener(`click`,s),n&&n.addEventListener(`click`,s),this.modalEl&&this.modalEl.addEventListener(`click`,e=>{e.target===this.modalEl&&s()}),r&&r.addEventListener(`submit`,e=>{e.preventDefault(),i&&a&&(i.style.display=`none`,a.classList.add(`is-visible`))}),o&&o.addEventListener(`click`,e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})})}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`site-header`),t=document.getElementById(`vertical-rail`),n=document.getElementById(`chapter-drawer-container`),r=document.getElementById(`hero-opening`),i=document.getElementById(`video-canvas-stack`),a=document.getElementById(`hotspots-layer`),o=document.getElementById(`editorial-overlay-layer`),m=document.getElementById(`scroll-track`),h=document.getElementById(`studio-sections-container`),g=document.getElementById(`hud-space-tag`),_=document.getElementById(`hud-timecode`),v=document.getElementById(`hud-frame-count`),y=document.getElementById(`telemetry-elev`),b=document.getElementById(`telemetry-lens`),x=document.getElementById(`telemetry-aperture`),S=document.getElementById(`telemetry-orient`),C=new u(o,s),w=new d(a,s);new p(h,c);let T=null,E=new f({headerEl:e,railEl:t,drawerEl:n,chapters:s,onSelectChapter:e=>{T&&T.scrollToChapter(e)}});T=new l({scrollTrackEl:m,videoStackEl:i,chapters:s,onChapterChange:e=>{let t=s[e];g&&t&&(g.textContent=t.displayNumber)},onProgressUpdate:e=>{let{globalProgress:t,chapterIndex:n,chapterProgress:i,activeCurrentTime:a,currentFrame:o,totalFrames:s,cameraTelemetry:c}=e;if(t>.004||window.scrollY>40?r.classList.add(`is-hidden`):r.classList.remove(`is-hidden`),_){let e=Math.floor(a),t=Math.floor((a-e)*24),n=String(Math.floor(e/60)).padStart(2,`0`),r=String(e%60).padStart(2,`0`),i=String(t).padStart(2,`0`);_.textContent=`TC 00:${n}:${r}:${i}`}if(v&&s){let e=String(o).padStart(3,`0`),t=String(s).padStart(3,`0`);v.textContent=`FRAME ${e} // ${t}`}c&&(y&&c.elevation&&(y.textContent=`ELEV: ${c.elevation}`),b&&c.focalLength&&(b.textContent=`LENS: ${c.focalLength}`),x&&c.aperture&&(x.textContent=`AP: ${c.aperture}`),S&&c.orientation&&(S.textContent=c.orientation)),C.updateProgress(n,i,o,s),w.update(n,i),E.update(n,t)}}),window.addEventListener(`keydown`,e=>{if(e.key===`ArrowDown`||e.key===`PageDown`)window.scrollBy({top:window.innerHeight*.4,behavior:`smooth`});else if(e.key===`ArrowUp`||e.key===`PageUp`)window.scrollBy({top:-window.innerHeight*.4,behavior:`smooth`});else if(e.key===`Escape`){let e=document.getElementById(`inquiry-modal`);e&&e.classList.remove(`is-open`),E.closeDrawer()}}),document.querySelectorAll(`video, audio`).forEach(e=>{e.muted=!0,e.volume=0}),console.log(`AURELIA RESIDENCE — Architectural Monograph initialized.`)});