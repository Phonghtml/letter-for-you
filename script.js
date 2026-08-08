/* =============================================================================
   FOR YOU — A LOVE STORY
   =============================================================================
   HOW TO CUSTOMIZE THIS SITE
   Everything you're likely to want to change lives in the CONFIG object below.
   Scroll past it to find the engine code (you shouldn't need to touch that).

   - Recipient name        -> CONFIG.recipientName
   - Love letter text       -> CONFIG.letterParagraphs
   - Photos                 -> CONFIG.photos (swap the "src" for your own images
                               inside /assets/images/, keep the same array shape)
   - Music                  -> CONFIG.playlist (swap "src" for your own mp3s
                               inside /assets/music/)
   - Anniversary date        -> CONFIG.anniversaryDate  (format: "YYYY-MM-DDTHH:mm:ss")
   - Timeline events         -> CONFIG.timeline
   - Reasons I love you      -> CONFIG.reasons
   - Quotes                  -> CONFIG.quotes
   - Firework colors         -> CONFIG.fireworkColors
   - Colors / fonts          -> see the CSS variables at the top of style.css
============================================================================= */

const CONFIG = {

  recipientName: "ຄົນປື້ມຂອງຂ້ອຍ",

  // ---- Love letter (each string becomes its own typewritten paragraph) ----
  // Translated to Lao per your request. Edit freely — this is just a
  // starting translation of the original English letter.
  letterParagraphs: [
    "ບໍ່ຮູ້ສິເວົ້າຫຍັງດີ",
    "ແຕ່ກະຜ່ານໜື່ງເດືອນມານຳກັນໄດ້ຢູ່ ",
    "ເຖິງວ່າສິຫຼີ້ນມຸກແປ໊ກແນ່ ແຕ່ກະຢ່າຖືສາຂ້ອຍເດີ",
    "ກະບໍ່ມີຫຍັງຫຼາຍ",
    "ພຽງຢາກເຮັດເວັບນີ້ຂື້ນມາອວຍພອນໃຫ້ເຈົ້າ",
    "ຈົ່ງມີແຕ່ຄວາມສຸກ ປັງໆໃນໜ້າທີ່ການງານ",
    "ລະກະດີໃຈທີ່ໄດ້ຮຼ້ຈັກ",
    "ຍິນດີທີ່ໄດ້ຮຼ້ຈັກເຈົ້າອີກຄັ້ງ",
    "KETSUDA 🌚"
  ],

  // ---- Anniversary / "together since" date used by the live counter ----
  // Edit this to the date & time your story began.
  anniversaryDate: "2026-07-04T00:00:00",

  // ---- Photo memories (masonry gallery). Replace src with your own photos. ----
  photos: [
    { src: "assets/images/real-1.jpg", caption: "Argen ທັ້ງໃຈລາວວ່າ" },
    { src: "assets/images/real-3.jpg", caption: "ມັກເພງແນວ Rock&Rap ລາວວ່າ" },
    { src: "assets/images/real-2.jpg", caption: "ເປັນຄົນງາມທີ່ເຮັດວຽກເກັ່ງ" },
    { src: "assets/images/real-4.jpg", caption: "ເວລາໄດ້ໄປຫຼີ້ນກະສວຍຢືນໜື່ງໂລດ" },
    { src: "assets/images/real-5.jpg", caption: "ເລື່ອງເບຍສຼ້ໄດ້ໝົດ" },
    { src: "assets/images/real-6.jpg", caption: "ຢາກໄປຍ່າງປ່າລາວວ່າ" },

  ],

  // ---- Relationship timeline ----
  timeline: [
    { icon: "fa-solid fa-star", date: "ໃນປີ 2022-ຕອນນີ້", title: "ການພົບກັນຄັ້ງທຳອິດ", text: "ສອງຄົນແປກໜ້າ, ບໍ່ຮູ້ຈັກກັນ, ເຈີກັນຄັ້ງແລກທີ່ຮ້ານນັ່ງຫຼີ້ນແຫ່ງໜື່ງ, ແລະບົດສົນທະນາທີ່ສັ້ນແຕ່ປະທັບໃຈ" },
    { icon: "fa-solid fa-utensils", date: "ແຜນນັດເດດ", title: "ນັດເດດຄັ້ງທຳອິດ", text: "ເຖິງສິຍັງທັນມີເດດແລກນຳກັນແຕ່ກະບໍ່ເປັນຫຍັງ, ດຽວມີເວລາວ່າງຕົງກັນເຮົາຄ່ອຍວ່າກໍໄດ້" },
    { icon: "fa-solid fa-plane", date: "ວາງແຜນໄປທ່ຽວ", title: "ທ່ຽວຕ່າງປະເທດ", text: "ສະຖານທີ່ໃໝ່, ທີ່ປະເທດຫວຽດນາມ, Phú Quốc" },
    { icon: "fa-solid fa-heart", date: "4 ກໍລະກົດ 2026", title: "ວັນຄົບຮອບ 1 ເດືອນທຳອິດ", text: "ໜຶ່ງເດືອນທີ່ຜ່ານໄປ, ແລະ ຫວັງວ່າຈະມີອີກຫຼາຍໆປີຕໍ່ໄປ." },
    { icon: "fa-solid fa-sun", date: "ມື້ນີ້", title: "ຊ່ວງເວລາພິເສດ", text: "ທຸກໆມື້ທີ່ໄດ້ແຊັດລົມກັນ, ໄດ້ກາຍເປັນຊ່ວງເວລາທີ່ຂ້ອຍມັກທີ່ສຸດ." }
  ],

  // ---- "Reasons I love you" flip cards ----
  reasons: [
    { icon: "fa-solid fa-face-smile", title: "ຮອຍຍິ້ມຂອງເຈົ້າ", back: "ເປັນເຫດຜົນຫຼັກທີ່ຂ້ອຍຮູ້ສຶກປື້ມທັງເວລາຍີ້ມ ແລະ ການສົນທະນານຳ" },
    { icon: "fa-solid fa-heart-pulse", title: "ຫົວໃຈຂອງເຈົ້າ", back: "ຕາມຮູ້ກັນມານີ້ແມ່ນມີຫົວໃຈທີ່ນີ່ງຂື້ນຫຼາຍຈາກເມື່ອກ່ອນ ເປັນຄົນທີ່ມີຫົວໃຈເຂັ້ມແຂງ" },
    { icon: "fa-solid fa-eye", title: "ດວງຕາທີ່ສວຍງາມຂອງເຈົ້າ", back: "ສາມາດຫຼົງສະເໜ່ແບບບໍ່ຮູ້ຕົວໃຜທີ່ຫຼົງໄປສົບຕານຳ" },
    { icon: "fa-solid fa-infinity", title: "ທຸກຢ່າງກ່ຽວກັບເຈົ້າ", back: "ແມ່ນຫຍັງທີ່ກ່ຽວກັບເຈົ້າກະພ່ອມຊັບພ໋ອດໝົດ" }
  ],

  // ---- Romantic quotes carousel ----
  quotes: [
    { text: "You make my heart smile.", author: "" },
    { text: "Together is my favorite place to be.", author: "" },
    { text: "You had me at hello.", author: "" },
    { text: "Still falling for you every day.", author: "" },
    { text: "You make every ordinary moment feel special.", author: "" }
  ],

  // ---- Firework / confetti colors for the finale ----
  fireworkColors: ["#f7b8c4", "#e78aa0", "#e7c07a", "#ffffff", "#d9a48f"],

  // ---- Music playlist. ----
  // Track 1 is set up for "เพลงรัก" (เพลงรัก / "Love Song") by Three Man Down,
  // exactly as requested — but the actual audio file isn't included here,
  // since it's a commercially released, copyrighted song (GMM Music, 2024)
  // that I'm not able to source or embed. To finish it: get the mp3 legally
  // (e.g. export it yourself from a copy you already own/purchased) and
  // drop it in as assets/music/เพลงรัก.mp3 — the title/artist/cover are
  // already wired up and it'll just start working. (Song titles are proper
  // names, so this one is left in its original Thai rather than translated.)
  // Track 2 is the original instrumental placeholder that's already
  // included, so the player has something to play immediately either way.
  playlist: [
    {
      title: "เพลงรัก",
      artist: "Three Man Down",
      cover: "assets/images/real-1.jpg"
    },
    {
      title: "เพลงรัก",
      artist: "Three Man Down",
      src: "assets/music/audioo.mp3",
      cover: "assets/images/real-1.jpg"
    }
  ]
};

/* =============================================================================
   ENGINE — you generally shouldn't need to edit below this line
============================================================================= */

document.title = `ສຳລັບ ${CONFIG.recipientName} — ເລື່ອງຮັກຂອງເຮົາ`;

/* ---------- Utility: create DOM nodes from a template string ---------- */
function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------- Smooth scrolling (Lenis) ---------- */
let lenis;
function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return;
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  if (window.ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
}

/* =============================================================================
   AMBIENT PARTICLES — floating hearts across the whole site
============================================================================= */
function startAmbientHearts() {
  const layer = document.getElementById('ambientHearts');
  if (!layer) return;
  const icons = ['fa-heart', 'fa-heart', 'fa-heart', 'fa-star'];
  const count = window.innerWidth < 640 ? 9 : 16;

  for (let i = 0; i < count; i++) {
    spawnHeart(layer, icons, true);
  }

  function spawnHeart(layer, icons, initial) {
    const el = document.createElement('i');
    const icon = icons[Math.floor(Math.random() * icons.length)];
    el.className = `fa-solid ${icon} floating-heart`;
    const size = 10 + Math.random() * 22;
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 16;
    const delay = initial ? Math.random() * duration : 0;
    const drift = (Math.random() * 120 - 60) + 'px';

    el.style.left = left + 'vw';
    el.style.fontSize = size + 'px';
    el.style.setProperty('--drift', drift);
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = -delay + 's';
    el.style.opacity = (0.25 + Math.random() * 0.4).toFixed(2);

    layer.appendChild(el);
  }
}

/* =============================================================================
   1. OPENING EXPERIENCE — gift box, envelope, transition into site
============================================================================= */
function initOpening() {
  const opening = document.getElementById('opening');
  const openingMessage = document.getElementById('openingMessage');
  const giftBoxBtn = document.getElementById('giftBoxBtn');
  const giftBox = document.getElementById('giftBox');
  const envelopeBtn = document.getElementById('envelopeBtn');
  const envelope = document.getElementById('envelope');
  const sparkleLayer = document.getElementById('sparkleLayer');
  const main = document.getElementById('main');

  buildStars();

  // Ambient music can only start after a user gesture (browser autoplay rules).
  // We treat the very first click anywhere on the opening scene as "start".
  let audioStarted = false;
  opening.addEventListener('click', () => {
    if (!audioStarted) {
      audioStarted = true;
      tryStartMusic();
    }
  }, { once: true });

  giftBoxBtn.addEventListener('click', () => {
    if (giftBox.classList.contains('opened')) return;
    giftBox.classList.add('opened');
    burstSparkles(sparkleLayer, giftBoxBtn);
    announce('ຂອງຂວັນຖືກເປີດແລ້ວ.');

    setTimeout(() => {
      giftBoxBtn.setAttribute('hidden', '');
      envelopeBtn.removeAttribute('hidden');
      envelopeBtn.style.animation = 'none';
      // restart the rise-in animation now that it's visible
      void envelopeBtn.offsetWidth;
      envelopeBtn.style.animation = '';
      envelopeBtn.style.animationDelay = '0.05s';
    }, 900);
  });

  envelopeBtn.addEventListener('click', () => {
    if (envelope.classList.contains('opened')) return;
    envelope.classList.add('opened');
    announce('ຊອງຈົດໝາຍຖືກເປີດແລ້ວ.');

    setTimeout(() => {
      opening.classList.add('opening-hidden');
      main.removeAttribute('hidden');
      document.getElementById('musicPlayer').removeAttribute('hidden');
      startAmbientHearts();
      startTypewriter();
      initAOS();
      initScrollAnimations();
      initTimelineReveal();
      setTimeout(() => { opening.style.display = 'none'; }, 1700);
    }, 1400);
  });

  function buildStars() {
    // stars are CSS-based (see .stars), nothing to build in JS —
    // kept as a hook in case you want to randomize star positions later.
  }

  function burstSparkles(layer, originEl) {
    const rect = originEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const n = 26;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const dist = 60 + Math.random() * 140;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      s.style.left = cx + 'px';
      s.style.top = cy + 'px';
      layer.appendChild(s);

      if (window.gsap) {
        gsap.fromTo(s,
          { x: 0, y: 0, opacity: 1, scale: 0.6 },
          {
            x: dx, y: dy, opacity: 0, scale: 1.4,
            duration: 1 + Math.random() * 0.6,
            ease: 'power2.out',
            onComplete: () => s.remove()
          }
        );
      } else {
        s.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        requestAnimationFrame(() => {
          s.style.transform = `translate(${dx}px, ${dy}px)`;
          s.style.opacity = '0';
        });
        setTimeout(() => s.remove(), 1100);
      }
    }
  }
}

function announce(msg) {
  const live = document.getElementById('aria-status');
  if (live) live.textContent = msg;
}

/* =============================================================================
   2. TYPEWRITER LOVE LETTER
============================================================================= */
function startTypewriter() {
  const target = document.getElementById('typewriterText');
  const body = target.closest('.letter-body');
  const continueBtn = document.getElementById('continueBtn');
  if (!target) return;

  const paragraphs = CONFIG.letterParagraphs;
  let pIndex = 0, cIndex = 0;
  const baseSpeed = 34; // ms per character
  target.textContent = '';

  function typeNext() {
    if (pIndex >= paragraphs.length) {
      body.classList.add('done');
      continueBtn.hidden = false;
      return;
    }
    const para = paragraphs[pIndex];

    if (cIndex === 0 && pIndex > 0) {
      target.textContent += '\n\n';
    }

    if (cIndex < para.length) {
      target.textContent += para[cIndex];
      cIndex++;
      const ch = para[cIndex - 1];
      const pause = /[.!?]$/.test(ch) ? 420 : (ch === ',' ? 180 : baseSpeed + Math.random() * 30);
      setTimeout(typeNext, pause);
    } else {
      pIndex++;
      cIndex = 0;
      setTimeout(typeNext, 500);
    }
  }
  setTimeout(typeNext, 500);

  continueBtn.addEventListener('click', () => {
    document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
  });
}

/* =============================================================================
   3. PHOTO MEMORIES — masonry + lightbox
============================================================================= */
let currentLightboxIndex = 0;

function buildGallery() {
  const grid = document.getElementById('masonryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.photos.forEach((photo, i) => {
    const item = h(`
      <figure class="memory-item" tabindex="0" role="button" aria-label="ເບິ່ງ ${escapeHtml(photo.caption)}">
        <img src="${photo.src}" alt="${escapeHtml(photo.caption)}" loading="lazy" decoding="async" />
        <figcaption class="memory-caption">${escapeHtml(photo.caption)}</figcaption>
      </figure>
    `);
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
    grid.appendChild(item);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightbox();
  const lb = document.getElementById('lightbox');
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('lightboxClose').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.hidden = true;
  document.body.style.overflow = '';
}

function renderLightbox() {
  const photo = CONFIG.photos[currentLightboxIndex];
  document.getElementById('lightboxImg').src = photo.src;
  document.getElementById('lightboxImg').alt = photo.caption;
  document.getElementById('lightboxCaption').textContent = photo.caption;
}

function navLightbox(delta) {
  const n = CONFIG.photos.length;
  currentLightboxIndex = (currentLightboxIndex + delta + n) % n;
  renderLightbox();
}

function initLightbox() {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navLightbox(1));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  // touch swipe
  let touchStartX = 0;
  const figure = document.querySelector('.lightbox-figure');
  figure.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  figure.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) navLightbox(dx > 0 ? -1 : 1);
  }, { passive: true });
}

/* =============================================================================
   4. TIMELINE
============================================================================= */
function buildTimeline() {
  const track = document.getElementById('timelineTrack');
  if (!track) return;
  track.innerHTML = '';
  CONFIG.timeline.forEach((item) => {
    const el = h(`
      <div class="timeline-item">
        <div class="timeline-icon"><i class="${item.icon}"></i></div>
        <div class="timeline-card glass-panel">
          <span class="timeline-date">${escapeHtml(item.date)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </div>
    `);
    track.appendChild(el);
  });
}

function initTimelineReveal() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  items.forEach((it) => observer.observe(it));
}

/* =============================================================================
   5. LOVE COUNTER
============================================================================= */
function initLoveCounter() {
  const start = new Date(CONFIG.anniversaryDate);
  const dEl = document.getElementById('countDays');
  const hEl = document.getElementById('countHours');
  const mEl = document.getElementById('countMinutes');
  const sEl = document.getElementById('countSeconds');
  const sinceEl = document.getElementById('counterSince');
  if (!dEl) return;

  const fmt = new Intl.DateTimeFormat('lo', { year: 'numeric', month: 'long', day: 'numeric' });
  sinceEl.textContent = `ທຸກວິນາທີມີຄວາມໝາຍ, ນັບຕັ້ງແຕ່ ${fmt.format(start)}`;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    let diff = Math.max(0, now - start);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    dEl.textContent = days.toLocaleString();
    hEl.textContent = pad(hours);
    mEl.textContent = pad(minutes);
    sEl.textContent = pad(seconds);
  }
  tick();
  setInterval(tick, 1000);
}

/* =============================================================================
   6. REASONS I LOVE YOU — flip cards
============================================================================= */
function buildReasons() {
  const grid = document.getElementById('reasonsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.reasons.forEach((reason) => {
    const card = h(`
      <div class="reason-card" tabindex="0" role="button" aria-label="${escapeHtml(reason.title)}, ແຕະເພື່ອເປີດເບິ່ງ">
        <div class="reason-card-inner">
          <div class="reason-face reason-front">
            <i class="${reason.icon}"></i>
            <h3>${escapeHtml(reason.title)}</h3>
          </div>
          <div class="reason-face reason-back">${escapeHtml(reason.back)}</div>
        </div>
      </div>
    `);
    const flip = () => card.classList.toggle('flipped');
    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
    });
    grid.appendChild(card);
  });
}

/* =============================================================================
   7. ROMANTIC QUOTES CAROUSEL
============================================================================= */
function initQuoteCarousel() {
  const textEl = document.getElementById('quoteText');
  const authorEl = document.getElementById('quoteAuthor');
  const dotsEl = document.getElementById('quoteDots');
  const bgEl = document.getElementById('quotesBg');
  if (!textEl) return;

  const quotes = CONFIG.quotes;
  let index = 0;
  let timer = null;

  dotsEl.innerHTML = '';
  quotes.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showQuote(i, true));
    dotsEl.appendChild(dot);
  });

  const hues = [0, 24, -18, 12, -8];

  function showQuote(i, userTriggered) {
    index = (i + quotes.length) % quotes.length;
    const q = quotes[index];

    textEl.style.opacity = 0;
    textEl.style.transform = 'translateY(10px)';
    setTimeout(() => {
      textEl.textContent = q.text;
      authorEl.textContent = q.author || '';
      textEl.style.opacity = 1;
      textEl.style.transform = 'translateY(0)';
    }, 350);

    [...dotsEl.children].forEach((d, di) => d.classList.toggle('active', di === index));
    bgEl.style.background = `radial-gradient(60% 60% at 50% 40%, hsla(${340 + (hues[index % hues.length])}, 70%, 75%, 0.22), transparent 70%)`;

    if (userTriggered) restartAutoplay();
  }

  function restartAutoplay() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => showQuote(index + 1), 5200);
  }

  showQuote(0);
  restartAutoplay();
}

/* =============================================================================
   MUSIC PLAYER
============================================================================= */
const MusicPlayer = (() => {
  let audio, playlist, current = 0, isOpen = false, hasFallenBack = false, wasPlayingBeforeError = false;

  function init() {
    audio = document.getElementById('audioEl');
    playlist = CONFIG.playlist;
    if (!playlist.length) return;

    buildPlaylistUI();
    loadTrack(0, false);

    const toggleBtn = document.getElementById('musicToggle');
    const player = document.getElementById('musicPlayer');
    toggleBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      player.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-label', isOpen ? 'Collapse player' : 'Expand player');
    });

    document.getElementById('musicPlayPause').addEventListener('click', togglePlay);
    document.getElementById('musicNext').addEventListener('click', () => loadTrack(current + 1, true));
    document.getElementById('musicPrev').addEventListener('click', () => loadTrack(current - 1, true));

    const seek = document.getElementById('musicSeek');
    seek.addEventListener('input', () => {
      if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
    });

    const vol = document.getElementById('musicVolume');
    audio.volume = vol.value / 100;
    vol.addEventListener('input', () => { audio.volume = vol.value / 100; });

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', () => {
      if (playlist.length > 1) loadTrack(current + 1, true);
    });
    audio.addEventListener('error', () => {
      if (!audio.src) return;
      if (!hasFallenBack && playlist.length > 1) {
        // The requested track's mp3 hasn't been added yet — fall back
        // to the next track in the playlist (e.g. the included one)
        // rather than showing a broken player.
        hasFallenBack = true;
        loadTrack(current + 1, wasPlayingBeforeError);
      } else {
        document.getElementById('musicTitle').textContent = 'ເພີ່ມເພງຂອງເຈົ້າ';
        document.getElementById('musicArtist').textContent = 'ໃສ່ໄຟລ໌ໃນ assets/music/ — ເບິ່ງ script.js';
      }
    });
  }

  function buildPlaylistUI() {
    const ul = document.getElementById('musicPlaylist');
    ul.innerHTML = '';
    if (playlist.length <= 1) { ul.hidden = true; return; }
    playlist.forEach((track, i) => {
      const li = document.createElement('li');
      li.textContent = track.title;
      li.dataset.index = i;
      li.addEventListener('click', () => loadTrack(i, true));
      ul.appendChild(li);
    });
  }

  function loadTrack(i, autoplay) {
    current = (i + playlist.length) % playlist.length;
    hasFallenBack = false;
    wasPlayingBeforeError = !!autoplay;
    const track = playlist[current];
    audio.src = track.src;
    document.getElementById('musicTitle').textContent = track.title;
    document.getElementById('musicArtist').textContent = track.artist || '';
    document.getElementById('musicCoverMini').src = track.cover || 'assets/images/real-1.jpg';
    document.getElementById('musicCoverLarge').src = track.cover || 'assets/images/real-1.jpg';
    [...document.querySelectorAll('.music-playlist li')].forEach((li, li_i) => {
      li.classList.toggle('active', li_i === current);
    });
    if (autoplay) play();
  }

  function play() {
    audio.play().then(() => {
      document.getElementById('musicPlayer').classList.add('playing');
      document.getElementById('musicPlayPause').innerHTML = '<i class="fa-solid fa-pause"></i>';
    }).catch(() => { /* autoplay may be blocked until user interacts */ });
  }

  function pause() {
    audio.pause();
    document.getElementById('musicPlayer').classList.remove('playing');
    document.getElementById('musicPlayPause').innerHTML = '<i class="fa-solid fa-play"></i>';
  }

  function togglePlay() {
    if (audio.paused) play(); else pause();
  }

  function updateProgress() {
    const seek = document.getElementById('musicSeek');
    if (audio.duration) {
      seek.value = (audio.currentTime / audio.duration) * 100;
      document.getElementById('musicDuration').textContent = formatTime(audio.duration);
    }
    document.getElementById('musicCurrentTime').textContent = formatTime(audio.currentTime);
  }

  function formatTime(t) {
    if (!isFinite(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  return { init, play, get audio() { return audio; } };
})();

function tryStartMusic() {
  MusicPlayer.play();
}

/* =============================================================================
   8. FIREWORKS FINALE
============================================================================= */
function initFireworks() {
  const canvas = document.getElementById('fireworksCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let running = false;
  let rafId = null;

  function resize() {
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  function launchFirework(x, y) {
    const color = CONFIG.fireworkColors[Math.floor(Math.random() * CONFIG.fireworkColors.length)];
    const count = 46;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.15;
      const speed = 2 + Math.random() * 3.4;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.008 + Math.random() * 0.012,
        color,
        size: 1.6 + Math.random() * 2
      });
    }
  }

  function loop() {
    const w = canvas.offsetWidth, hgt = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, hgt);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.025; // gravity
      p.life -= p.decay;
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    particles = particles.filter((p) => p.life > 0);
    ctx.globalAlpha = 1;

    if (running || particles.length) {
      rafId = requestAnimationFrame(loop);
    } else {
      rafId = null;
    }
  }

  function ensureLoop() {
    if (!rafId) rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    ensureLoop();
    const w = canvas.offsetWidth, hgt = canvas.offsetHeight;
    const burst = () => {
      if (!running) return;
      launchFirework(
        w * (0.2 + Math.random() * 0.6),
        hgt * (0.2 + Math.random() * 0.35)
      );
    };
    burst();
    const interval = setInterval(burst, 650);
    // taper off after ~9 seconds into gentle occasional bursts
    setTimeout(() => { clearInterval(interval); }, 9000);
    // keep a slow trickle going for ambiance
    (function trickle() {
      if (!running) return;
      burst();
      setTimeout(trickle, 2400 + Math.random() * 1800);
    })();
  }

  function stop() { running = false; }

  return { start, stop };
}

/* =============================================================================
   SCROLL-TRIGGERED ANIMATIONS (GSAP + AOS)
============================================================================= */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });
  }
}

let fireworksControl = null;

function initScrollAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Gentle parallax on section headers
  gsap.utils.toArray('.section-head').forEach((el) => {
    gsap.fromTo(el, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  // Reasons cards stagger in
  gsap.fromTo('.reason-card', { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.8, stagger: 0.08,
    scrollTrigger: { trigger: '#reasons', start: 'top 75%' }
  });

  // Masonry items stagger in
  gsap.fromTo('.memory-item', { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.8, stagger: 0.06,
    scrollTrigger: { trigger: '#memories', start: 'top 75%' }
  });

  // Counter section slight zoom-in
  gsap.fromTo('.counter-grid', { scale: 0.94, opacity: 0 }, {
    scale: 1, opacity: 1, duration: 1,
    scrollTrigger: { trigger: '#counter', start: 'top 70%' }
  });

  // Finale sequence
  fireworksControl = initFireworks();
  ScrollTrigger.create({
    trigger: '#finale',
    start: 'top 60%',
    once: true,
    onEnter: playFinaleSequence
  });
}

function playFinaleSequence() {
  fireworksControl && fireworksControl.start();
  document.getElementById('finaleHeartGlow').classList.add('show');

  const line1 = document.getElementById('finaleLine1');
  const line2 = document.getElementById('finaleLine2');
  const line3 = document.getElementById('finaleLine3');
  const answer = document.getElementById('finaleAnswer');

  // line1 ("I Love You") already animates in via CSS on load
  setTimeout(() => {
    line1.style.opacity = 0;
    line1.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      line1.hidden = true;
      line2.hidden = false;
    }, 850);
  }, 2200);

  setTimeout(() => {
    line2.style.opacity = 0;
    line2.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      line2.hidden = true;
      line3.hidden = false;
    }, 850);
  }, 4600);

  setTimeout(() => { answer.hidden = false; }, 6600);
}

/* =============================================================================
   REPLAY EXPERIENCE
============================================================================= */
function initReplay() {
  document.getElementById('replayBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    location.reload();
  });
  const yesBtn = document.getElementById('btnYes');
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      yesBtn.innerHTML = 'Always &amp; Forever <i class="fa-solid fa-heart"></i>';
      yesBtn.disabled = true;
      yesBtn.style.opacity = '0.85';
      confettiBurstAtButton(yesBtn);
    });
  }
}

function confettiBurstAtButton(btn) {
  if (!fireworksControl) return;
  const rect = btn.getBoundingClientRect();
  fireworksControl.start();
}

/* =============================================================================
   MASTER INIT
============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initOpening();
  buildGallery();
  buildTimeline();
  buildReasons();
  initLightbox();
  initQuoteCarousel();
  initLoveCounter();
  MusicPlayer.init();
  initReplay();
  initSmoothScroll();
});
