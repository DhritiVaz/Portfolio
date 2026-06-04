/* ── Interactive Terminal ─────────────────────────────── */
(function () {
  const body    = document.getElementById('term-body');
  const inputRow = document.getElementById('term-input-row');
  const inputEl  = document.getElementById('term-input');

  let busy = false;
  let autoStarted = false;

  /* ── Helpers ──────────────────────────────────────── */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function appendLine(cls, text) {
    const div = document.createElement('div');
    div.className = 'tl';
    div.innerHTML = `<span class="${esc(cls)}">${esc(text)}</span>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function appendGap() {
    const div = document.createElement('div');
    div.className = 't-gap';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function appendPromptLine(cmd) {
    const div = document.createElement('div');
    div.className = 'tl';
    div.innerHTML = `<span class="t-pr">❯</span><span class="t-cmd">${esc(cmd)}</span>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  /* Typing animation — returns promise resolving when done */
  function typeCommand(cmd) {
    return new Promise(resolve => {
      const div = document.createElement('div');
      div.className = 'tl';
      div.innerHTML = '<span class="t-pr">❯</span><span class="t-cmd" id="tc-span"></span>';
      body.appendChild(div);
      const span = div.querySelector('#tc-span');
      span.removeAttribute('id');
      let i = 0;
      function tick() {
        span.textContent = cmd.slice(0, i + 1);
        body.scrollTop = body.scrollHeight;
        i++;
        if (i < cmd.length) setTimeout(tick, 58 + Math.random() * 36);
        else setTimeout(resolve, 180);
      }
      setTimeout(tick, 80);
    });
  }

  /* Print output lines with stagger */
  function printLines(lines) {
    return new Promise(resolve => {
      if (!lines || !lines.length) { setTimeout(resolve, 80); return; }
      let i = 0;
      function next() {
        if (i >= lines.length) { setTimeout(resolve, 120); return; }
        const l = lines[i++];
        if (l.type === 'gap') appendGap();
        else appendLine('t-' + l.type, l.text);
        body.scrollTop = body.scrollHeight;
        setTimeout(next, 28);
      }
      setTimeout(next, 60);
    });
  }

  /* ── Commands ─────────────────────────────────────── */
  const COMMANDS = {
    whoami() {
      return [
        { type: 'key', text: 'DHRITI VAZ' },
        { type: 'out', text: 'Full Stack Developer · B.Tech CSE @ VIT Chennai' },
        { type: 'out', text: 'Currently open to remote internships' },
      ];
    },
    skills() {
      return [
        { type: 'key', text: 'LANGUAGES    JavaScript · TypeScript · Python · Dart · SQL' },
        { type: 'out', text: 'FRONTEND     React · Next.js · Flutter · Tailwind CSS' },
        { type: 'out', text: 'BACKEND      Node.js · FastAPI · Express · PostgreSQL · Supabase' },
        { type: 'out', text: 'TOOLS        Git · Docker · Figma · Vercel · PostGIS' },
        { type: 'out', text: 'AI / ML      Claude API · LangChain · NDVI analysis' },
      ];
    },
    projects() {
      return [
        { type: 'key', text: '[1] Student Dashboard' },
        { type: 'out', text: '    Academic hub with VTOP + LMS integration · Next.js + TypeScript' },
        { type: 'key', text: '[2] Centralised Billing System' },
        { type: 'out', text: '    Role-based billing & inventory management · React + Node.js' },
        { type: 'key', text: '[3] Expense Tracker' },
        { type: 'out', text: '    NLP quick-add, smart insights, budget tracking · Flask + PostgreSQL' },
        { type: 'key', text: '[4] Krypt' },
        { type: 'out', text: '    Zero-knowledge password manager · AES-256-GCM + Argon2id' },
      ];
    },
    education() {
      return [
        { type: 'key', text: 'VIT Chennai' },
        { type: 'out', text: 'B.Tech Computer Science (CSE Core) · 2nd Year · 2024 – present' },
        { type: 'out', text: 'CGPA  8.12 / 10.0' },
        { type: 'gap' },
        { type: 'key', text: 'Chettinad Vidyashram, Chennai' },
        { type: 'out', text: 'Schooling · Pre-KG – Class 12' },
      ];
    },
    experience() {
      return [
        { type: 'key', text: 'Summer Research Intern · May 2026 – Jul 2026  [ongoing]' },
        { type: 'out', text: 'Bio-Inspired Hallucination Suppression w/ Blockchain Audit Trail' },
        { type: 'out', text: 'Hallucination detection for LLMs · TruthfulQA · Track B' },
        { type: 'gap' },
        { type: 'key', text: 'Billing System Developer · GeoPacific Solutions, Chennai' },
        { type: 'out', text: 'Mar 2025 – Jul 2025' },
        { type: 'out', text: 'Backend billing & payment tracking · Node.js + PostgreSQL' },
      ];
    },
    contact() {
      return [
        { type: 'key', text: 'Email      dhriti.vaz@gmail.com' },
        { type: 'out', text: 'Phone      +91 98841 62325' },
        { type: 'out', text: 'LinkedIn   linkedin.com/in/dhritivaz' },
        { type: 'out', text: 'GitHub     github.com/DhritiVaz' },
      ];
    },
    interests() {
      return [
        { type: 'out', text: 'Full-stack development · Mobile apps · UI/UX design' },
        { type: 'out', text: 'Debugging (the fun kind) · AI agents · SaaS products' },
        { type: 'out', text: 'Physics · Systems design · Building in public' },
      ];
    },
    resume() {
      setTimeout(() => {
        const el = document.getElementById('resume-sec');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 400);
      return [{ type: 'dim', text: 'Opening resume… ↓ scrolling to Section 5' }];
    },
    clear() {
      body.innerHTML = '';
      return null; // special case
    },
    help() {
      return [
        { type: 'dim', text: 'available commands' },
        { type: 'gap' },
        { type: 'out', text: '  whoami      —  who am I?' },
        { type: 'out', text: '  skills      —  technical skills by category' },
        { type: 'out', text: '  projects    —  all four projects' },
        { type: 'out', text: '  education   —  academic background' },
        { type: 'out', text: '  experience  —  internship history' },
        { type: 'out', text: '  contact     —  get in touch' },
        { type: 'out', text: '  interests   —  what I\'m into' },
        { type: 'out', text: '  resume      —  view my resume' },
        { type: 'out', text: '  clear       —  clear the terminal' },
        { type: 'out', text: '  help        —  show this menu' },
      ];
    },
  };

  /* ── Run a single command ─────────────────────────── */
  async function runCmd(raw, withTyping) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (withTyping) await typeCommand(cmd);
    else appendPromptLine(cmd);

    const handler = COMMANDS[cmd];
    if (!handler) {
      await printLines([{ type: 'dim', text: `command not found: ${cmd}  (try 'help')` }]);
    } else {
      const lines = handler();
      if (lines) await printLines(lines);
    }
    appendGap();
  }

  /* ── Auto-run sequence on scroll-into-view ────────── */
  const AUTO_SEQ = ['whoami', 'skills', 'projects', 'help'];

  async function autoRun() {
    if (autoStarted) return;
    autoStarted = true;
    busy = true;
    for (const cmd of AUTO_SEQ) {
      await new Promise(r => setTimeout(r, 380));
      await runCmd(cmd, true);
    }
    busy = false;
    inputRow.style.display = 'flex';
    requestAnimationFrame(() => { body.scrollTop = body.scrollHeight; });
  }

  const termSection = document.getElementById('terminal-sec');
  if (termSection) {
    const tObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        autoRun();
        tObs.disconnect();
      }
    }, { threshold: 0.5 });
    tObs.observe(termSection);
  }

  /* ── Ghost autocomplete ───────────────────────────── */
  const ghostEl   = document.getElementById('term-ghost');
  const cmdNames  = Object.keys(COMMANDS);

  function measureText(str) {
    const s = document.createElement('span');
    s.style.cssText = 'position:fixed;left:-9999px;top:-9999px;font-family:"DM Mono",monospace;font-size:.87rem;white-space:pre;visibility:hidden;';
    s.textContent = str;
    document.body.appendChild(s);
    const w = s.getBoundingClientRect().width;
    document.body.removeChild(s);
    return w;
  }

  function updateGhost() {
    const val = inputEl.value;
    if (!val) { ghostEl.textContent = ''; return; }
    const match = cmdNames.find(c => c.startsWith(val.toLowerCase()) && c.length > val.length);
    if (match) {
      ghostEl.textContent = match.slice(val.length);
      ghostEl.style.left = measureText(val) + 'px';
    } else {
      ghostEl.textContent = '';
    }
  }

  inputEl.addEventListener('input', updateGhost);

  /* ── Live input handler ───────────────────────────── */
  inputEl.addEventListener('keydown', async e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (ghostEl.textContent) {
        inputEl.value += ghostEl.textContent;
        ghostEl.textContent = '';
      }
      return;
    }
    if (e.key !== 'Enter') return;
    ghostEl.textContent = '';
    const val = inputEl.value.trim();
    inputEl.value = '';
    if (!val || busy) return;
    busy = true;
    await runCmd(val, false);
    busy = false;
  });
})();
