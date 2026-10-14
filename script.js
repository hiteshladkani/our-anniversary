/* =======================================================================
   ❤️  ANNIVERSARY WEBSITE — EDIT EVERYTHING IN THE "CONFIG" OBJECT BELOW
   =======================================================================
   Just change the text/values. Keep the quotes and commas.
   Photos live in the "images" folder (photo1.jpeg ... photo10.jpeg).
   ======================================================================= */

const CONFIG = {

  /* ---- Who you are ---- */
  names: "Baby & Rose",              // shown on the hero
  heroTagline: "Every love story is beautiful, but ours is my favourite.",

  /* ---- 6. COUNTDOWN: when did your relationship start? (YYYY, month-1, day, hour, min) ----
     NOTE: month is 0-based, so January = 0, February = 1, ... December = 11.
     Example: 14 February 2022 at 19:00  ->  new Date(2022, 1, 14, 19, 0) */
  startDate: new Date(2024, 9, 13, 0, 0),

  /* ---- 1. MEMORIES (captions under each photo) ---- */
  memories: [
    { img: "images/photo1.jpeg",  caption: "My favourite day with you" },
    { img: "images/photo2.jpeg",  caption: "The smile I fell for" },
    { img: "images/photo3.jpeg",  caption: "Us, being us" },
    { img: "images/photo4.jpeg",  caption: "This one makes me smile" },
    { img: "images/photo5.jpeg",  caption: "Forever my favourite view" },
    { img: "images/photo6.jpeg",  caption: "My whole heart" },
    { img: "images/photo7.jpeg",  caption: "The best kind of ordinary" },
    { img: "images/photo8.jpeg",  caption: "Right where I belong" },
    { img: "images/photo9.jpeg",  caption: "Every moment with you" },
    { img: "images/photo10.jpeg", caption: "To many more of these" },
    { img: "images/photo11.jpeg", caption: "Another one I'll never forget" },
    { img: "images/photo12.jpeg", caption: "Making more memories with you" }
  ],

  /* ---- 1b. VIDEOS (optional) ----
     Easiest: drop clips into the "videos" folder named video1.mp4, video2.mp4, ...
     (or straight into this main folder). They appear automatically — the section
     stays hidden until at least one video is found.
     Best format: mp4. Also tries webm, mov, m4v. Or list them manually below. */
  videos: [
    { src: "videos/video2.mp4", caption: "My favourite kind of memory" },
    { src: "videos/video3.mp4", caption: "Us, in motion" },
    { src: "videos/video4.mp4", caption: "A little piece of us" },
    { src: "videos/video5.mp4", caption: "Always us" }
  ],

  /* ---- 2. LOVE LETTER ---- */
  letter: {
    dear: "My Dearest,<br>",
    paragraphs: [
      "Happy anniversary, my love. I wanted a way to tell you everything my heart holds, so I built you this little corner of the world.",
      "You make my life softer, brighter and infinitely more beautiful. You are the calm in my chaos and the reason I look forward to ordinary Tuesdays. Your laugh is my favourite sound, your smile my favourite view, and your happiness my favourite goal.",
      "Thank you for choosing me, for your patience, your kindness, and the way you love me even on the days I make it hard. I am endlessly proud to be yours, and endlessly grateful that you are mine."
    ],
    sign: "Forever yours,<br /><span>Rose</span>"
  },

  /* ---- 3. OUR LOVE STORY ---- */
  story: [
    { date: "The Day We Met",       title: "Where it all began",          text: "The universe introduced us, and something quietly said: pay attention." },
    { date: "Our First Conversation", title: "The first real talk",        text: "Hours felt like minutes. I remember not wanting the conversation to end." },
    { date: "The Moment I Realised",  title: "When I knew I loved you",    text: "It wasn't loud or dramatic. It was quiet, certain, and impossible to ignore." },
    { date: "Our Funniest Memory",    title: "The moment we couldn't stop laughing", text: "We still laugh about this one, and I hope we always will." },
    { date: "Today",                  title: "Our anniversary",            text: "And here we are — still choosing each other, every single day." }
  ],

  /* ---- 4. REASONS WHY I LOVE YOU ---- */
  reasons: [
    "Because you make ordinary days feel special.",
    "Because your happiness matters to me more than my own.",
    "Because your laugh is my favourite sound in the world.",
    "Because you understand me without me saying a word.",
    "Because you make me want to be a better person.",
    "Because even silence is comfortable with you.",
    "Because you are home to me, no matter where we are.",
    "Because you love me on my worst days too.",
    "Because you are my best friend first.",
    "Because loving you has never once felt like a choice I had to make."
  ],

  /* ---- 7. LOVE COUPONS ---- */
  coupons: [
    { icon: "🤗", title: "One Long Hug",        desc: "As long as you want. Not a second less." },
    { icon: "🍽️", title: "Your Favourite Date", desc: "Wherever you choose, I'm paying and driving." },
    { icon: "👑", title: "You Choose Everything", desc: "One whole day, all your rules. I follow." },
    { icon: "💋", title: "Unlimited Kisses",    desc: "Non-refundable and never out of stock." },
    { icon: "🎬", title: "Movie Night, You Pick", desc: "Even the ones you've seen ten times." },
    { icon: "☕", title: "Breakfast in Bed",    desc: "Served with a kiss and zero complaints." }
  ],

  /* ---- 8. OPEN WHEN… ---- */
  openWhen: [
    { icon: "💭", title: "You miss me",        text: "Close your eyes. I'm right here, thinking of you too. Distance means nothing when you mean everything. Now come here and let me hold you." },
    { icon: "😔", title: "You feel sad",       text: "You don't have to be okay right now. Feel it, then remember: you are never alone in it. I'm yours to lean on, always." },
    { icon: "🌧️", title: "You had a bad day",  text: "Whatever went wrong out there doesn't get to follow you in here. Breathe. You survived it, and that's more than enough. I'm proud of you." },
    { icon: "💗", title: "You want to feel loved", text: "You are loved — deeply, quietly, endlessly. Not for what you do, but simply for who you are. Read that twice." },
    { icon: "⭐", title: "You forget how special you are", text: "You are the kind of person the world is lucky to have. Strong, kind, beautiful. I see it even when you can't." }
  ],

  /* ---- 9. OUR FUTURE TOGETHER ---- */
  futureDreams: [
    { title: "Travel the world",   text: "New cities, stolen glances, shared sunsets, and a camera full of us." },
    { title: "A home of our own",  text: "Slow mornings, messy kitchens, and a door that always opens to each other." },
    { title: "Grow old together",  text: "Wrinkles, inside jokes, and still holding hands like we just met." },
    { title: "Chase every dream",  text: "Your dreams are mine now. I'll cheer the loudest at every one." },
    { title: "Build traditions",   text: "Little rituals that will one day be our favourite stories." },
    { title: "Keep choosing us",   text: "Through every season, on every good and hard day — us." }
  ],
  promises: [
    "I promise to always listen, even when I'm tired.",
    "I promise to hold your hand through the storms.",
    "I promise to make you laugh when you want to cry.",
    "I promise to keep choosing you, every single day.",
    "I promise to love you louder on the days you feel small."
  ],

  /* ---- 10. FINAL SURPRISE ---- */
  surprise: {
    line: "Before you go, there's one more thing…",
    photo: "images/photo5.jpeg",
    final: "You are my favourite hello, my hardest goodbye, and my forever. Happy anniversary, my love. ❤"
  }
};

/* =======================================================================
   Below this line is the magic that makes it all work — no need to edit.
   ======================================================================= */

/* ---------- helpers ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const pad = (n) => String(n).padStart(2, "0");

/* ---------- floating hearts background ---------- */
(function hearts() {
  const wrap = $("#heartsBg");
  const chars = ["❤", "💗", "💕", "🌸"];
  const count = window.innerWidth < 640 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.textContent = chars[Math.floor(Math.random() * chars.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = (0.7 + Math.random() * 1.5) + "rem";
    s.style.animationDuration = (9 + Math.random() * 10) + "s";
    s.style.animationDelay = (-Math.random() * 16) + "s";
    wrap.appendChild(s);
  }
})();

/* ---------- scroll reveal (called after all content is built) ---------- */
function revealOnScroll() {
  const items = $$(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
}

/* ---------- nav ---------- */
(function nav() {
  const bar = $("#nav");
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  window.addEventListener("scroll", () => {
    bar.classList.toggle("nav--scrolled", window.scrollY > 30);
  });
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  $$("#navLinks a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
})();

/* ---------- 1. build gallery ---------- */
(function gallery() {
  const wrap = $("#gallery");
  CONFIG.memories.forEach((m) => {
    const card = document.createElement("figure");
    card.className = "polaroid reveal";
    card.innerHTML = `
      <div class="polaroid__img"><img src="${m.img}" alt="${m.caption}" loading="lazy" /></div>
      <figcaption class="polaroid__caption">${m.caption}</figcaption>`;
    wrap.appendChild(card);
  });
})();

/* ---------- 1b. videos (auto-detect from the "videos" folder or main folder) ---------- */
(function videos() {
  const section = $("#videos");
  const wrap = $("#videoGallery");
  if (!section || !wrap) return;

  function addVideo(src, caption) {
    const card = document.createElement("figure");
    card.className = "video-card reveal";
    card.innerHTML = `
      <video src="${src}" controls preload="metadata" playsinline></video>
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}`;
    wrap.appendChild(card);
  }

  // 1) If you listed videos manually in CONFIG, use those.
  const configured = (CONFIG.videos || []).filter((v) => v && v.src);
  if (configured.length) {
    configured.forEach((v) => addVideo(v.src, v.caption || ""));
    section.hidden = false;
    revealOnScroll();
    return;
  }

  // 2) Otherwise auto-scan for video1.mp4, video2.mp4, ... and show what exists.
  const bases = ["videos/", ""];
  const exts = ["mp4", "webm", "mov", "m4v"];
  const MAX = 25;
  const results = {};

  function findIndex(i, done) {
    const candidates = [];
    bases.forEach((b) => exts.forEach((e) => candidates.push(`${b}video${i}.${e}`)));
    let idx = 0;
    const test = () => {
      if (idx >= candidates.length) { done(null); return; }
      const src = candidates[idx++];
      const v = document.createElement("video");
      v.preload = "metadata";
      v.onloadedmetadata = () => done(src);
      v.onerror = test;
      v.src = src;
    };
    test();
  }

  function finish() {
    const found = Object.keys(results).map(Number).sort((a, b) => a - b);
    if (!found.length) return;               // no videos yet -> section stays hidden
    found.forEach((i) => addVideo(results[i], ""));
    section.hidden = false;
    revealOnScroll();
  }

  let i = 1, misses = 0;
  (function next() {
    if (i > MAX || misses >= 6) { finish(); return; }
    findIndex(i, (src) => {
      if (src) { results[i] = src; misses = 0; } else { misses++; }
      i++;
      next();
    });
  })();
})();

/* ---------- 2. love letter ---------- */
(function letter() {
  $("#letterDear").innerHTML = CONFIG.letter.dear;
  $("#letterBody").innerHTML = CONFIG.letter.paragraphs.map((p) => `<p>${p}</p>`).join("");
  $("#letterSign").innerHTML = CONFIG.letter.sign;
  $("#openLetterBtn").addEventListener("click", () => {
    $("#letterClosed").hidden = true;
    $("#letterPaper").hidden = false;
    $("#letterPaper").scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();

/* ---------- 3. love story timeline ---------- */
(function timeline() {
  const wrap = $("#timeline");
  CONFIG.story.forEach((s) => {
    const el = document.createElement("div");
    el.className = "tl reveal";
    el.innerHTML = `
      <span class="tl__date">${s.date}</span>
      <h3 class="tl__title">${s.title}</h3>
      <p class="tl__text">${s.text}</p>`;
    wrap.appendChild(el);
  });
})();

/* ---------- 4. reasons ---------- */
(function reasons() {
  const heart = $("#reasonHeart");
  const text = $("#reasonText");
  const count = $("#reasonCount");
  let i = 0;
  text.textContent = CONFIG.reasons[0];
  count.textContent = `1 of ${CONFIG.reasons.length}`;
  heart.addEventListener("click", () => {
    i = (i + 1) % CONFIG.reasons.length;
    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "";
    text.textContent = CONFIG.reasons[i];
    count.textContent = `${i + 1} of ${CONFIG.reasons.length}`;
    heart.classList.remove("is-pop");
    void heart.offsetWidth;
    heart.classList.add("is-pop");
  });
})();

/* ---------- 6. countdown ---------- */
(function countdown() {
  const start = CONFIG.startDate;
  const since = start.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  $("#countdownSince").textContent = `Every second since ${since} — and counting.`;
  $("#heroSub").textContent = CONFIG.heroTagline;
  $(".hero__title").textContent = CONFIG.names;

  const setNum = (id, v) => { const el = $(id); if (el) el.textContent = pad(v); };
  function tick() {
    const now = new Date();
    let diff = Math.max(0, now - start) / 1000;
    const days = Math.floor(diff / 86400); diff -= days * 86400;
    const hours = Math.floor(diff / 3600); diff -= hours * 3600;
    const mins = Math.floor(diff / 60);
    const secs = Math.floor(diff - mins * 60);

    setNum("#cdDays", days); setNum("#cdHours", hours);
    setNum("#cdMins", mins); setNum("#cdSecs", secs);

    const weeks = (days / 7).toFixed(1);
    $("#countdownNote").textContent = `That's about ${weeks} weeks of us. Best time of my life.`;
    $("#heroCountdownMini").textContent = `${days.toLocaleString()} days together ❤`;
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- 7. coupons ---------- */
(function coupons() {
  const wrap = $("#coupons");
  CONFIG.coupons.forEach((c) => {
    const el = document.createElement("button");
    el.className = "coupon reveal";
    el.innerHTML = `
      <div class="coupon__icon">${c.icon}</div>
      <div class="coupon__title">${c.title}</div>
      <div class="coupon__desc">${c.desc}</div>
      <div class="coupon__stamp">Redeemed ♥</div>`;
    el.addEventListener("click", () => el.classList.toggle("redeemed"));
    wrap.appendChild(el);
  });
})();

/* ---------- 8. open when ---------- */
(function openWhen() {
  const wrap = $("#openwhen");
  CONFIG.openWhen.forEach((o) => {
    const el = document.createElement("div");
    el.className = "ow reveal";
    el.innerHTML = `
      <div class="ow__inner">
        <div class="ow__face ow__front">
          <div class="ow__icon">${o.icon}</div>
          <div class="ow__label">Open when<br>${o.title}</div>
          <div class="ow__tap">tap to open</div>
        </div>
        <div class="ow__face ow__back">
          <div class="ow__back-title">${o.title}</div>
          <p>${o.text}</p>
        </div>
      </div>`;
    el.addEventListener("click", () => el.classList.toggle("flipped"));
    wrap.appendChild(el);
  });
})();

/* ---------- 9. future ---------- */
(function future() {
  const wrap = $("#future");
  CONFIG.futureDreams.forEach((f) => {
    const el = document.createElement("div");
    el.className = "future__card reveal";
    el.innerHTML = `<h3>${f.title}</h3><p>${f.text}</p>`;
    wrap.appendChild(el);
  });
  const ul = $("#promises");
  CONFIG.promises.forEach((p) => {
    const li = document.createElement("li");
    li.className = "reveal";
    li.textContent = p;
    ul.appendChild(li);
  });
})();

/* ---------- 10. final surprise ---------- */
(function surprise() {
  $("#surprisePhoto").src = CONFIG.surprise.photo;
  $("#surpriseLine1").textContent = CONFIG.surprise.line;
  $("#surpriseFinal").textContent = CONFIG.surprise.final;

  const btn = $("#surpriseBtn");
  const box = $("#surpriseReveal");
  btn.addEventListener("click", () => {
    if (!box.hidden) {
      box.hidden = true;
      btn.textContent = "One last thing, my love…";
      return;
    }
    box.hidden = false;
    btn.textContent = "Read it again ❤";
    burstConfetti();
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  function burstConfetti() {
    const layer = $("#confetti");
    const chars = ["❤", "💗", "💕", "🌸", "✨", "🎉"];
    for (let i = 0; i < 40; i++) {
      const c = document.createElement("i");
      c.textContent = chars[Math.floor(Math.random() * chars.length)];
      c.style.left = Math.random() * 100 + "%";
      c.style.animationDuration = (2 + Math.random() * 2.5) + "s";
      c.style.animationDelay = (Math.random() * 0.6) + "s";
      layer.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  }
})();

/* ---------- back to top ---------- */
(function toTop() {
  const btn = $("#toTop");
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 600));
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ---------- kick off reveals once everything is in the DOM ---------- */
revealOnScroll();
