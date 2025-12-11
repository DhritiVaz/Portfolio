const projects = [
  {
    name: "Centralized Billing System",
    tagline: "Internship project inspired by Tally: customers, invoices, payments, and clear dashboards.",
    bullets: [
      "Built lean HTML/CSS/JS front-end with simple REST endpoints",
      "CRUD for customers, invoices, and payment tracking",
      "Focused on clarity and reliability over flashy UI"
    ],
    tech: ["TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/dhritivaz/centralised-billing-system"
  },
  {
    name: "Portfolio & Experiments",
    tagline: "Lightweight playground for React basics, REST experiments, and Supabase practice.",
    bullets: [
      "Iterative UI experiments with reusable components",
      "Hands-on learning across C, C++, Java, JavaScript, and Python",
      "Keeps focus on fundamentals: clean structure and readable code"
    ],
    tech: ["React (basic)", "Supabase", "Node", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/dhritivaz"
  }
];

const skills = [
  { title: "Languages", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  { title: "Web", items: ["HTML", "CSS", "React (basic)", "Node.js", "Express", "REST APIs"] },
  { title: "Database", items: ["PostgreSQL", "Supabase"] }
];

const timeline = [
  {
    role: "Intern · Centralized Billing System",
    place: "Focused build, HTML/CSS/JS + APIs",
    time: "2025",
    detail: "Created a Tally-style billing tool with customer, invoice, and payment flows. Learned to keep dashboards clean and data consistent."
  },
  {
    role: "Full-stack fundamentals",
    place: "VIT Chennai",
    time: "Ongoing",
    detail: "Strengthening core languages (C, C++, Java, JavaScript, Python) and applying them to small, real-world projects."
  }
];

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const title = document.createElement("h3");
  title.textContent = project.name;
  card.appendChild(title);

  const tagline = document.createElement("p");
  tagline.className = "tagline";
  tagline.textContent = project.tagline;
  card.appendChild(tagline);

  const list = document.createElement("ul");
  project.bullets.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  card.appendChild(list);

  const techRow = document.createElement("div");
  techRow.className = "tags";
  project.tech.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    techRow.appendChild(span);
  });
  card.appendChild(techRow);

  const link = document.createElement("a");
  link.className = "pill";
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = "View repository";
  card.appendChild(link);

  return card;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  projects.forEach((p) => grid.appendChild(createProjectCard(p)));
  const count = document.getElementById("projectsCount");
  if (count) count.textContent = projects.length;
}

function renderSkills() {
  const grid = document.getElementById("skillGrid");
  skills.forEach((group) => {
    const wrap = document.createElement("div");
    wrap.className = "skill-group reveal";

    const title = document.createElement("h4");
    title.textContent = group.title;
    wrap.appendChild(title);

    const chips = document.createElement("div");
    chips.className = "chips";
    group.items.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      chips.appendChild(chip);
    });

    wrap.appendChild(chips);
    grid.appendChild(wrap);
  });
}

function renderTimeline() {
  const track = document.getElementById("timeline");
  timeline.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";

    const title = document.createElement("h4");
    title.textContent = `${entry.role} — ${entry.place}`;

    const time = document.createElement("div");
    time.className = "time";
    time.textContent = entry.time;

    const detail = document.createElement("p");
    detail.className = "muted";
    detail.textContent = entry.detail;

    item.appendChild(title);
    item.appendChild(time);
    item.appendChild(detail);
    track.appendChild(item);
  });
}

function init() {
  renderProjects();
  renderSkills();
  renderTimeline();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);

function setupReveal() {
  const targets = document.querySelectorAll(".hero, .section-header, .full-height, .card, .glass, .skill-group, .timeline-item, .contact-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach((el, idx) => {
    // Add reveal class if not already present
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
    // Stagger via transition delay
    el.style.transitionDelay = `${(idx % 6) * 60}ms`;
    observer.observe(el);
  });
}
