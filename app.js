// ===============================
// NAVIGATION SYSTEM
// ===============================

const btns = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.tab');

const tabsOrder = ["home", "about", "projects", "skills", "experience", "contact", "resume"];

let currentIndex = 0;
let isAnimating = false;

function switchTab(name) {
  tabs.forEach(t => t.classList.remove('active'));
  btns.forEach(b => b.classList.remove('active'));

  const target = document.getElementById('tab-' + name);
  const btn = document.querySelector(`[data-tab="${name}"]`);

  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    switchTab(btn.dataset.tab);
  });
});

function goToTab(index) {
  if (index < 0 || index >= tabsOrder.length) return;
  if (isAnimating) return;

  isAnimating = true;
  currentIndex = index;
  switchTab(tabsOrder[index]);

  setTimeout(() => {
    isAnimating = false;
  }, 700);
}

// ===============================
// SCROLL + TRACKPAD
// ===============================

let deltaX = 0;
let deltaY = 0;
const THRESHOLD = 60;

window.addEventListener("wheel", (e) => {
  if (isAnimating) return;

  deltaX += e.deltaX;
  deltaY += e.deltaY;

  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    if (Math.abs(deltaY) > THRESHOLD) {
      goToTab(deltaY > 0 ? currentIndex + 1 : currentIndex - 1);
      resetScroll();
    }
  } else {
    if (Math.abs(deltaX) > THRESHOLD) {
      goToTab(deltaX > 0 ? currentIndex + 1 : currentIndex - 1);
      resetScroll();
    }
  }
});

function resetScroll() {
  deltaX = 0;
  deltaY = 0;
}

// ===============================
// TOUCH SWIPE (MOBILE)
// ===============================

let touchStartX = 0;
let touchStartY = 0;

window.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  let dx = e.changedTouches[0].clientX - touchStartX;
  let dy = e.changedTouches[0].clientY - touchStartY;

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx < -50) goToTab(currentIndex + 1);
    if (dx > 50) goToTab(currentIndex - 1);
  } else {
    if (dy < -50) goToTab(currentIndex + 1);
    if (dy > 50) goToTab(currentIndex - 1);
  }
});

// ===============================
// BACKGROUND CANVAS (SAFE)
// ===============================

const canvas = document.getElementById("bg-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const NUM = 50;

  let mouse = { x: null, y: null };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.x -= dx * 0.002;
          this.y -= dy * 0.002;
        }
      }
    }

    draw() {
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < NUM; i++) {
    particles.push(new Particle());
  }

  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = dx * dx + dy * dy;

        if (dist < 9000) {
          ctx.strokeStyle = "rgba(255,255,255,0.12)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connect();
    requestAnimationFrame(animate);
  }

  animate();
}