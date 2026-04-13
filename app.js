/*
document.addEventListener('DOMContentLoaded', function() {

// ── CURSOR ──────────────────────────────────────────────
var dot  = document.getElementById('cur');
var ring = document.getElementById('cur2');
var isTouch = navigator.maxTouchPoints > 0;

if (!isTouch && dot && ring) {
  var mx = window.innerWidth / 2;
  var my = window.innerHeight / 2;
  var rx = mx, ry = my;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = (mx - 5)  + 'px';
    dot.style.top   = (my - 5)  + 'px';
  });

  function loopRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = (rx - 16) + 'px';
    ring.style.top  = (ry - 16) + 'px';
    requestAnimationFrame(loopRing);
  }
  loopRing();
} else {
  if (dot)  dot.style.display  = 'none';
  if (ring) ring.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// ── THEME ────────────────────────────────────────────────
var htmlEl = document.documentElement;
var saved  = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', saved);

var themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', function() {
    var next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ── PROJECTS ─────────────────────────────────────────────
var projects = [
  { num:'01', tag:'Web App · SPA', name:'Student Dashboard', desc:'Academic management — VTOP sync, LMS integration, bunk calculator, timetable, notes, tasks, calendar. 16 modules.', stack:'React · TypeScript · Node.js · Express · PostgreSQL · Prisma ORM', badge:'def', badgeText:'SPA · REST API', link:'https://github.com/DhritiVaz' },
  { num:'02', tag:'Hackathon · Birdscale Tech', name:'Landroid', desc:'Land health monitoring — NDVI analysis from drone imagery, tree count estimation, plant health zone maps.', stack:'Flutter · FastAPI · Supabase · Rasterio · PostGIS', badge:'def', badgeText:'VIT Chennai', link:'https://github.com/DhritiVaz' },
  { num:'03', tag:'Full Stack · Live', name:'Expense Tracker', desc:'Multi-user finance app with natural language input, smart savings planner, and 4-tab Chart.js dashboard.', stack:'Python · Flask · PostgreSQL · SQLAlchemy · Chart.js', badge:'live', badgeText:'● Live', link:'https://expense-tracker-ev7t.onrender.com' },
  { num:'04', tag:'Security Tool', name:'Krypt — Password Manager', desc:'Zero-knowledge password manager. AES-256-GCM, Argon2id, JWT auth, TOTP 2FA, rate limiting, audit logs.', stack:'Python · Flask · PostgreSQL · AES-256-GCM · Docker · pytest', badge:'cov', badgeText:'93% coverage · 96 tests', link:'https://github.com/DhritiVaz/krypt' },
  { num:'05', tag:'Internship · GeoPacific', name:'Billing & Inventory System', desc:'Backend system — invoice generation, product management, flexible data structures for multiple product types.', stack:'Node.js · PostgreSQL', badge:'def', badgeText:'Production · 2025', link:'https://github.com/DhritiVaz' },
];

var activeCard = 0;
var carousel   = document.getElementById('carousel');
var cnavDots   = document.getElementById('cnavDots');
var autoTimer  = null;

function buildCarousel() {
  if (!carousel || !cnavDots) return;
  carousel.innerHTML = '';
  cnavDots.innerHTML = '';
  projects.forEach(function(p, i) {
    var card = document.createElement('div');
    card.className = 'pcard';
    card.innerHTML =
      '<div class="pc-num">' + p.num + '</div>' +
      '<div class="pc-tag">' + p.tag + '</div>' +
      '<div class="pc-name">' + p.name + '</div>' +
      '<div class="pc-desc">' + p.desc + '</div>' +
      '<div class="pc-stack">' + p.stack + '</div>' +
      '<div class="pc-footer"><div class="pc-badge ' + p.badge + '">' + p.badgeText + '</div><div class="pc-arrow">↗</div></div>';
    card.addEventListener('click', function() {
      if (i !== activeCard) { setCard(i); resetAuto(); }
      else { window.open(p.link, '_blank'); }
    });
    carousel.appendChild(card);

    var d = document.createElement('div');
    d.className = 'cnav-dot';
    d.addEventListener('click', function() { setCard(i); resetAuto(); });
    cnavDots.appendChild(d);
  });
  updateCarousel();
}

function getPos(i) {
  var diff = ((i - activeCard) % projects.length + projects.length) % projects.length;
  return diff > projects.length / 2 ? diff - projects.length : diff;
}

function updateCarousel() {
  var cards = carousel.querySelectorAll('.pcard');
  var dots  = cnavDots.querySelectorAll('.cnav-dot');
  cards.forEach(function(c, i) {
    var p = getPos(i);
    c.className = 'pcard';
    if      (p ===  0) c.classList.add('center');
    else if (p ===  1) c.classList.add('right1');
    else if (p === -1) c.classList.add('left1');
    else if (p ===  2) c.classList.add('right2');
    else if (p === -2) c.classList.add('left2');
    else               c.classList.add('hidden');
  });
  dots.forEach(function(d, i) { d.classList.toggle('active', i === activeCard); });
}

function setCard(i)  { activeCard = ((i % projects.length) + projects.length) % projects.length; updateCarousel(); }
function nextCard()  { setCard(activeCard + 1); }
function prevCard()  { setCard(activeCard - 1); }
function startAuto() { autoTimer = setInterval(function() { if (currentPage === 2) nextCard(); }, 5000); }
function resetAuto() { clearInterval(autoTimer); startAuto(); }

buildCarousel();
startAuto();

// ── PAGE NAV ──────────────────────────────────────────────
var TOTAL       = 5;
var currentPage = 0;
var transiting  = false;

var navDots  = document.getElementById('navDots');
var progress = document.getElementById('progress');
var labels   = ['home','about','work','exp','contact'];

if (navDots && progress) {
  labels.forEach(function(label, i) {
    var d = document.createElement('div');
    d.className = 'nav-dot' + (i === 0 ? ' active' : '');
    d.title = label;
    d.addEventListener('click', function() { goTo(i); });
    navDots.appendChild(d);

    var p = document.createElement('div');
    p.className = 'progress-pip' + (i === 0 ? ' active' : '');
    p.addEventListener('click', function() { goTo(i); });
    progress.appendChild(p);
  });
}

function goTo(n) {
  if (transiting || n === currentPage || n < 0 || n >= TOTAL) return;
  transiting  = true;
  currentPage = n;
  for (var i = 0; i < TOTAL; i++) {
    var pg = document.getElementById('page-' + i);
    if (!pg) continue;
    pg.className = 'page ' + (i === n ? 'active' : i < n ? 'prev' : 'next');
  }
  document.querySelectorAll('.nav-dot').forEach(function(d, i)  { d.classList.toggle('active', i === n); });
  document.querySelectorAll('.progress-pip').forEach(function(p, i) { p.classList.toggle('active', i === n); });
  setTimeout(function() { transiting = false; }, 700);
}

// ── SCROLL ───────────────────────────────────────────────
var wheelAccum = 0;
var wheelLast  = 0;

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  var now = Date.now();
  if (now - wheelLast < 80) { wheelAccum += e.deltaY; }
  else { wheelAccum = e.deltaY; }
  wheelLast = now;
  if (Math.abs(wheelAccum) > 60) {
    wheelAccum > 0 ? goTo(currentPage + 1) : goTo(currentPage - 1);
    wheelAccum = 0;
  }
}, { passive: false, capture: true });

// ── TOUCH ────────────────────────────────────────────────
var ty = 0;
window.addEventListener('touchstart', function(e) { ty = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchend',   function(e) {
  var dy = ty - e.changedTouches[0].clientY;
  if (Math.abs(dy) > 40) { dy > 0 ? goTo(currentPage + 1) : goTo(currentPage - 1); }
}, { passive: true });

// ── KEYBOARD ─────────────────────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown')  goTo(currentPage + 1);
  if (e.key === 'ArrowUp')    goTo(currentPage - 1);
  if (currentPage === 2) {
    if (e.key === 'ArrowRight') { nextCard(); resetAuto(); }
    if (e.key === 'ArrowLeft')  { prevCard(); resetAuto(); }
  }
});

// ── HERO BUTTONS ─────────────────────────────────────────
var hw = document.getElementById('heroWorkBtn');
var hc = document.getElementById('heroContactBtn');
if (hw) hw.addEventListener('click', function() { goTo(2); });
if (hc) hc.addEventListener('click', function() { goTo(4); });

// ── PREV / NEXT CAROUSEL BUTTONS ─────────────────────────
var pb = document.getElementById('prevBtn');
var nb = document.getElementById('nextBtn');
if (pb) pb.addEventListener('click', function() { prevCard(); resetAuto(); });
if (nb) nb.addEventListener('click', function() { nextCard(); resetAuto(); });

// ── EXPERIENCE (no-op - always expanded) ─────────────────
window.toggleExp = function() {};

}); // DOMContentLoaded

*/