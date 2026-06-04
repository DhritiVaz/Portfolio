/* ── Project Cards + Flip Modal ──────────────────────── */
(function () {

  const PROJECTS = [
    {
      id: 0,
      num: '01',
      name: 'Student Dashboard',
      desc: 'Full-stack academic hub unifying VTOP + LMS with attendance, CGPA, notes, tasks, timetable, and a deadline calendar.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      link: 'https://github.com/DhritiVaz/student-dashboard',
      readme: `
        <h1>Student Dashboard</h1>
        <p>A full-stack web application that brings your entire academic life into one clean, unified workspace.</p>
        <div class="hr"></div>

        <h2>Overview</h2>
        <p>Student Dashboard is designed to eliminate fragmentation across platforms like VTOP, LMS, and personal planning tools. It provides a single interface where students can track academics, manage tasks, organize notes, and visualize their schedule.</p>
        <p>The system focuses on clarity, real-time sync, and a clean dark UI experience.</p>
        <div class="hr"></div>

        <h2>Features</h2>

        <h2>VTOP Sync</h2>
        <ul>
          <li>Automatically imports attendance and CGPA</li>
          <li>Secure credential handling (passwords are never stored)</li>
        </ul>

        <h2>LMS Integration</h2>
        <ul>
          <li>Sync courses, assignments, quizzes, and files</li>
          <li>Highlights deadlines and due-today items</li>
        </ul>

        <h2>Attendance Tracker & Bunk Calculator</h2>
        <ul>
          <li>Per-course attendance breakdown</li>
          <li>Smart calculation of safe-to-skip classes</li>
        </ul>

        <h2>CGPA & GPA System</h2>
        <ul>
          <li>Full transcript view by semester</li>
          <li>Hypothetical GPA calculator</li>
        </ul>

        <h2>Planning Tools</h2>
        <ul>
          <li>Assignments with filters and status tracking</li>
          <li>Notes with tags and previews</li>
          <li>Tasks with priority grouping and due dates</li>
          <li>File management linked to courses</li>
        </ul>

        <h2>Calendar & Timetable</h2>
        <ul>
          <li>Monthly calendar with categorized events</li>
          <li>Weekly timetable synced from academic schedule</li>
        </ul>

        <h2>Mindspace</h2>
        <ul>
          <li>Quick capture tool for notes and files</li>
          <li>Reverse chronological feed for easy access</li>
        </ul>
        <div class="hr"></div>

        <h2>Landing Page</h2>
        <p>Full-width dark hero section with bold typography and minimal call-to-action buttons.</p>

        <h2>Login Page</h2>
        <p>Split layout with dashboard preview on the left and authentication form on the right.</p>

        <h2>Dashboard</h2>
        <p>Central command view with:</p>
        <ul>
          <li>Key stats (semester, attendance, CGPA, deadlines)</li>
          <li>Upcoming deadlines</li>
          <li>Calendar preview</li>
          <li>Notes and tasks overview</li>
        </ul>

        <h2>Attendance</h2>
        <p>Table view showing:</p>
        <ul>
          <li>Course-wise attendance</li>
          <li>Percentage tracking</li>
          <li>Color-coded health indicators</li>
        </ul>

        <h2>Bunk Calculator</h2>
        <p>Interactive planner showing:</p>
        <ul>
          <li>Target attendance</li>
          <li>Safe bunk count</li>
          <li>Progress visualization</li>
        </ul>

        <h2>CGPA & GPA</h2>
        <p>Complete academic record:</p>
        <ul>
          <li>Semester-wise breakdown</li>
          <li>Credit-weighted grades</li>
          <li>Overall CGPA display</li>
        </ul>

        <h2>GPA Calculator</h2>
        <p>Simulate grades for current semester:</p>
        <ul>
          <li>Import courses automatically</li>
          <li>Predict GPA outcomes</li>
        </ul>

        <h2>LMS Integration</h2>
        <p>Overview of courses, assignments, quizzes, files, and due-today highlights.</p>

        <h2>Mindspace</h2>
        <p>Quick capture interface: notes, file attachments, instant save workflow.</p>

        <h2>Semesters & Courses</h2>
        <p>Structured academic history: semester cards, course grids, searchable course catalog.</p>

        <h2>Assignments</h2>
        <p>Filtered task system: status-based tracking, due dates and priorities, course tagging.</p>

        <h2>Notes</h2>
        <p>Card-based layout: content previews, tags and filters, sorted by recency.</p>

        <h2>Files</h2>
        <p>Organized digital materials: course-linked documents, metadata and tagging.</p>

        <h2>Tasks</h2>
        <p>Task manager with inline quick add, priority grouping, due-date indicators.</p>

        <h2>Calendar</h2>
        <p>Monthly overview with class events, exams, deadlines, and personal entries.</p>

        <h2>Timetable</h2>
        <p>Weekly grid showing course slots, time blocks, and venue details.</p>

        <h2>Settings</h2>
        <p>User configuration: profile, appearance, dashboard preferences, account settings.</p>
        <div class="hr"></div>

        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> PostgreSQL (Prisma ORM)</li>
          <li><strong>Authentication:</strong> JWT, Google OAuth</li>
          <li><strong>Integrations:</strong> VTOP scraper, LMS sync</li>
        </ul>
        <div class="hr"></div>

        <h2>Architecture</h2>
        <ul>
          <li>Full-stack architecture with REST APIs</li>
          <li>Modular frontend with reusable components</li>
          <li>Real-time data sync for academic data</li>
          <li>Secure handling of external credentials</li>
        </ul>
        <div class="hr"></div>

        <h2>Installation</h2>
        <pre>git clone https://github.com/DhritiVaz/student-dashboard.git
cd student-dashboard

# frontend
cd client
npm install
npm run dev

# backend
cd server
npm install
npm run dev</pre>
      `
    },
    {
      id: 1,
      num: '02',
      name: 'Billing System',
      desc: 'Full-stack billing and inventory management with role-based access for admins, franchises, and cashiers.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      link: 'https://github.com/DhritiVaz/centralised-billing-system',
      readme: `
        <h1>Centralized Billing & Inventory Management System</h1>
        <p>A full-stack billing and inventory management system built with React, Node.js, Express, and PostgreSQL for streamlined operations and centralized control.</p>
        <div class="hr"></div>

        <h2>Overview</h2>
        <p>This system provides a unified platform to manage franchises, inventory, and sales with role-based access and real-time data flow between frontend and backend. Designed for scalability and structured business operations.</p>
        <div class="hr"></div>

        <h2>Features</h2>
        <ul>
          <li>Role-based authentication (Admin, Owner, Franchise, Cashier)</li>
          <li>Franchise and product management (Create, Update, Delete)</li>
          <li>Central and franchise-level inventory tracking</li>
          <li>Sales tracking (customer and franchise)</li>
          <li>Secure JWT-based authentication</li>
          <li>Integrated frontend and backend communication</li>
        </ul>
        <div class="hr"></div>

        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React, Vite</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>ORM:</strong> Prisma</li>
          <li><strong>Authentication:</strong> JWT</li>
        </ul>
        <div class="hr"></div>

        <h2>Installation</h2>
        <pre>git clone https://github.com/DhritiVaz/centralised-billing-system.git
cd CentralisedBillingAndManagementSystem

# Backend
cd Backend && npm install

# Frontend
cd ../ && npm install</pre>

        <h2>Running the Application</h2>
        <pre>npm start</pre>
        <ul>
          <li>Frontend: http://localhost:5173</li>
          <li>Backend: http://localhost:5001</li>
        </ul>
        <div class="hr"></div>

        <h2>Database Setup (PostgreSQL)</h2>
        <pre>CREATE DATABASE roles;</pre>

        <h2>Users</h2>
        <pre>CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(25) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin','owner','franchise','cashier')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>

        <h2>Products</h2>
        <pre>CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  manufacturer VARCHAR(100),
  price NUMERIC(10,2)
);</pre>

        <h2>Product (GST Enabled)</h2>
        <pre>CREATE TABLE Product (
  ProductID SERIAL PRIMARY KEY,
  ProductName VARCHAR(255) NOT NULL,
  HSNCode VARCHAR(50) NOT NULL,
  Cost DECIMAL(10,2) NOT NULL,
  SGST_Percentage DECIMAL(5,2) NOT NULL,
  CGST_Percentage DECIMAL(5,2) NOT NULL,
  SGST_Amount DECIMAL(10,2) GENERATED ALWAYS AS
    (ROUND((Cost * SGST_Percentage / 100),2)) STORED,
  CGST_Amount DECIMAL(10,2) GENERATED ALWAYS AS
    (ROUND((Cost * CGST_Percentage / 100),2)) STORED,
  TotalCost DECIMAL(10,2) GENERATED ALWAYS AS
    (ROUND((Cost + SGST_Amount + CGST_Amount),2)) STORED,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>

        <h2>Franchise</h2>
        <pre>CREATE TABLE Franchise (
  FranchiseID SERIAL PRIMARY KEY,
  FranchiseName VARCHAR(255) NOT NULL,
  OwnerName VARCHAR(255) NOT NULL,
  ContactNumber VARCHAR(20) NOT NULL,
  EmailAddress VARCHAR(255) UNIQUE NOT NULL,
  DoorNo VARCHAR(50),
  StreetName VARCHAR(255),
  CityOrVillage VARCHAR(255),
  DistrictName VARCHAR(255),
  Pincode VARCHAR(10),
  Geolocation POINT,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>

        <h2>Customer Sales</h2>
        <pre>CREATE TABLE customersale (
  saleid SERIAL PRIMARY KEY,
  franchiseid INTEGER NOT NULL,
  invoiceno VARCHAR NOT NULL UNIQUE,
  products JSONB,
  customername VARCHAR(255),
  contactno VARCHAR(20),
  emailid VARCHAR(255),
  address TEXT[],
  geolocation POINT,
  datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  paymentmethod TEXT
);</pre>

        <h2>Franchise Stock</h2>
        <pre>CREATE TABLE FranchiseStock (
  StockID SERIAL PRIMARY KEY,
  FranchiseID INT REFERENCES Franchise(FranchiseID) ON DELETE CASCADE,
  ProductID INT REFERENCES Product(ProductID) ON DELETE CASCADE,
  QuantityAvailable INT NOT NULL DEFAULT 0,
  UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>
        <div class="hr"></div>

        <h2>Authentication</h2>
        <ul>
          <li>JWT stored in localStorage</li>
          <li>Token expiry: 1 hour</li>
          <li>Protected routes using custom middleware/components</li>
          <li>Role-based access control enforced across the system</li>
        </ul>
        <div class="hr"></div>

        <h2>Scripts</h2>
        <ul>
          <li><code>npm install</code> — Install dependencies</li>
          <li><code>npm run dev</code> — Run frontend (dev mode)</li>
          <li><code>npm run server</code> — Run backend</li>
          <li><code>npm run client</code> — Run frontend</li>
          <li><code>npm start</code> — Run frontend + backend together</li>
        </ul>
      `
    },
    {
      id: 2,
      num: '03',
      name: 'Expense Tracker',
      desc: 'Personal finance web app with NLP quick-add, smart insights, budget tracking, and Chart.js dashboards.',
      tags: ['Python', 'Flask', 'PostgreSQL', 'Chart.js', 'NLP'],
      link: 'https://github.com/DhritiVaz/expense-tracker',
      readme: `
        <h1>Expense Tracker</h1>
        <p>A full-stack personal finance web app built with Python, Flask, and PostgreSQL. Track expenses, set budgets, and get smart spending insights — with a natural language quick-add feature you won't find in most free tools.</p>
        <p><strong>Live demo:</strong> <a href="https://expense-tracker-ev7t.onrender.com" target="_blank" rel="noopener" style="color:var(--deep-sage);">expense-tracker-ev7t.onrender.com</a></p>
        <div class="hr"></div>

        <h2>Features</h2>

        <h2>Core</h2>
        <ul>
          <li>Add, edit, and delete expenses with category tagging</li>
          <li>Filter by month and search by name</li>
          <li>Export all expenses to CSV</li>
        </ul>

        <h2>Smart features</h2>
        <ul>
          <li><strong>Natural language input</strong> — type "lunch 80 today" and it adds instantly</li>
          <li><strong>Spending personality</strong> — dynamically assigned based on your spending patterns</li>
          <li><strong>Smart insights</strong> — weekend vs weekday spending, biggest categories, averages</li>
          <li><strong>Recurring expense detection</strong> — automatically flags repeated expenses</li>
          <li><strong>Logging streak</strong> — tracks consecutive days of expense logging</li>
          <li><strong>Can I afford it?</strong> — enter a goal amount and get a personalised savings plan</li>
        </ul>

        <h2>Budget & reports</h2>
        <ul>
          <li>Set monthly budgets per category with visual progress bars</li>
          <li>Over-budget and near-limit alerts</li>
          <li>Monthly comparison (this month vs last month)</li>
          <li>Top 5 expenses, daily average, weekday vs weekend breakdown</li>
          <li>Monthly spending bar chart</li>
        </ul>

        <h2>User accounts</h2>
        <ul>
          <li>Secure registration and login</li>
          <li>Passwords hashed with Werkzeug</li>
          <li>Each user's data is completely private</li>
          <li>Persistent sessions with Flask-Login</li>
        </ul>
        <div class="hr"></div>

        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Backend:</strong> Python 3.14, Flask 3.1</li>
          <li><strong>Database:</strong> PostgreSQL (Render), SQLite (local dev)</li>
          <li><strong>ORM:</strong> Flask-SQLAlchemy</li>
          <li><strong>Auth:</strong> Flask-Login, Werkzeug password hashing</li>
          <li><strong>Frontend:</strong> HTML5, CSS3, Vanilla JavaScript</li>
          <li><strong>Charts:</strong> Chart.js</li>
          <li><strong>Deployment:</strong> Render (web service + PostgreSQL)</li>
          <li><strong>Version control:</strong> Git + GitHub</li>
        </ul>
        <div class="hr"></div>

        <h2>Running locally</h2>
        <pre>git clone https://github.com/DhritiVaz/expense-tracker.git
cd expense-tracker

python -m venv .venv
source .venv/bin/activate   # Mac/Linux
.venv\\Scripts\\activate    # Windows

pip install -r requirements.txt
python app.py</pre>
        <p>Open <code>http://localhost:5000</code> in your browser. No environment variables needed for local dev — it uses SQLite automatically.</p>
        <div class="hr"></div>

        <h2>Project structure</h2>
        <pre>expense-tracker/
├── app.py              # Flask app, routes, database models
├── templates/
│   ├── index.html      # Main dashboard (Overview, Expenses, Budget, Reports tabs)
│   ├── login.html      # Login page
│   ├── register.html   # Registration page
│   └── edit.html       # Edit expense page
├── static/
│   └── style.css       # All styling, dark/light theme
├── requirements.txt    # Python dependencies
└── Procfile            # Render deployment config</pre>
        <div class="hr"></div>

        <h2>What I learned building this</h2>
        <ul>
          <li>Full-stack web development with Flask and Jinja2 templating</li>
          <li>Relational database design with SQLAlchemy ORM</li>
          <li>User authentication with password hashing and session management</li>
          <li>Deploying a Python web app to production with PostgreSQL</li>
          <li>JavaScript DOM manipulation and Chart.js integration</li>
          <li>CSS Grid and responsive design</li>
          <li>Git workflow for a real project</li>
        </ul>
      `
    },
    {
      id: 3,
      num: '04',
      name: 'Krypt',
      desc: 'Self-hosted zero-knowledge password manager — AES-256-GCM, Argon2id KDF, TOTP 2FA, append-only audit log.',
      tags: ['Python', 'Flask', 'AES-256-GCM', 'Argon2id', 'TOTP'],
      link: 'https://github.com/DhritiVaz/krypt',
      readme: `
        <h1>Krypt — Secure Password Manager</h1>
        <p>A self-hosted password manager built with security engineering best practices. AES-256-GCM encryption, Argon2id key derivation, JWT authentication, and TOTP two-factor authentication.</p>
        <div class="hr"></div>

        <h2>Features</h2>
        <ul>
          <li><strong>AES-256-GCM encryption</strong> — every password encrypted at rest with a unique IV per entry</li>
          <li><strong>Zero-knowledge design</strong> — encryption key derived from master password at runtime, never stored</li>
          <li><strong>Argon2id key derivation</strong> — deliberately slow, memory-intensive hashing resistant to brute-force</li>
          <li><strong>JWT authentication</strong> — short-lived access tokens (15 min) with refresh token rotation (7 days)</li>
          <li><strong>TOTP two-factor authentication</strong> — Google Authenticator compatible</li>
          <li><strong>Rate limiting + account lockout</strong> — brute-force protection via Redis</li>
          <li><strong>Append-only audit logs</strong> — every login, vault access, and modification recorded</li>
          <li><strong>Soft delete</strong> — deleted entries recoverable within 30 days</li>
          <li><strong>Password generator</strong> — cryptographically secure random passwords</li>
          <li><strong>CSV import</strong> — import from Chrome, Bitwarden, LastPass, or any standard CSV export</li>
          <li><strong>Dark mode</strong> — persistent theme preference</li>
        </ul>
        <div class="hr"></div>

        <h2>Security Architecture</h2>
        <pre>Master Password
    ├── Path A (auth salt)  → Argon2id → Auth Hash       → stored in DB
    └── Path B (enc salt)   → Argon2id → Encryption Key  → never stored
                                               ↓
                                         AES-256-GCM + unique IV
                                               ↓
                                         Ciphertext → stored in DB</pre>
        <p>The server never stores the encryption key. Even with full database access, an attacker cannot read stored passwords without the user's master password.</p>
        <div class="hr"></div>

        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Language:</strong> Python 3.11+</li>
          <li><strong>Framework:</strong> Flask + Flask-RESTful</li>
          <li><strong>Database:</strong> PostgreSQL 15</li>
          <li><strong>ORM:</strong> SQLAlchemy + Flask-Migrate</li>
          <li><strong>Encryption:</strong> AES-256-GCM (cryptography library)</li>
          <li><strong>Key Derivation:</strong> Argon2id (argon2-cffi)</li>
          <li><strong>Authentication:</strong> JWT (PyJWT) + TOTP (pyotp)</li>
          <li><strong>Rate Limiting:</strong> Flask-Limiter + Redis</li>
          <li><strong>Validation:</strong> Marshmallow</li>
          <li><strong>Testing:</strong> pytest + pytest-cov</li>
          <li><strong>Containerization:</strong> Docker + Docker Compose</li>
        </ul>
        <div class="hr"></div>

        <h2>Project Structure</h2>
        <pre>krypt/
├── app/
│   ├── models/          # SQLAlchemy models (User, VaultEntry, AuditLog)
│   ├── routes/          # API endpoints (auth, vault)
│   ├── services/        # Business logic (crypto, auth, audit)
│   ├── middleware/       # JWT auth decorator
│   ├── schemas/         # Marshmallow input validation
│   └── templates/       # Jinja2 HTML frontend
├── tests/
│   ├── unit/            # Unit tests
│   ├── integration/     # API endpoint tests
│   └── security/        # Security vulnerability tests
├── migrations/          # Database migration history
├── docker-compose.yml
└── requirements.txt</pre>
        <div class="hr"></div>

        <h2>Self-Hosting</h2>
        <p>Krypt is designed to be self-hosted. Your passwords never leave your machine — there is no central server, no cloud sync, and no third party with access to your data.</p>
        <p><strong>Prerequisites:</strong> Python 3.11+, PostgreSQL 15+, Redis</p>
        <pre>git clone https://github.com/DhritiVaz/krypt.git
cd krypt

python -m venv .venv
source .venv/bin/activate    # macOS/Linux
# .venv\\Scripts\\Activate.ps1  # Windows

pip install -r requirements.txt

cp .env.example .env
# Edit .env — set DATABASE_URL, REDIS_URL, and SECRET_KEY:
# python -c "import secrets; print(secrets.token_hex(32))"

flask --app run.py db upgrade
python run.py</pre>
        <p>Visit <code>http://localhost:5000/api/auth/</code></p>

        <h2>Docker Setup</h2>
        <pre>docker-compose up --build</pre>
        <div class="hr"></div>

        <h2>Importing Passwords</h2>
        <p><strong>From Chrome:</strong> Go to <code>chrome://password-manager/settings</code> → Export passwords → Save as CSV → Import in Krypt</p>
        <p><strong>From Bitwarden / LastPass / 1Password:</strong> Export your vault as CSV from their settings → Import in Krypt</p>
        <p><strong>Supported CSV columns:</strong> <code>name</code>, <code>url</code>, <code>username</code>, <code>password</code>, <code>notes</code></p>
        <div class="hr"></div>

        <h2>API Endpoints</h2>

        <h2>Authentication</h2>
        <ul>
          <li><code>POST /api/auth/register</code> — Register new user</li>
          <li><code>POST /api/auth/login</code> — Login, returns JWT tokens</li>
          <li><code>POST /api/auth/refresh</code> — Refresh access token</li>
          <li><code>POST /api/auth/2fa/setup</code> — Initiate 2FA setup</li>
          <li><code>POST /api/auth/2fa/verify</code> — Verify and enable 2FA</li>
        </ul>

        <h2>Vault</h2>
        <ul>
          <li><code>GET /api/vault/</code> — List all entries</li>
          <li><code>POST /api/vault/</code> — Create new entry</li>
          <li><code>GET /api/vault/&lt;id&gt;</code> — Get single entry</li>
          <li><code>PUT /api/vault/&lt;id&gt;</code> — Update entry</li>
          <li><code>DELETE /api/vault/&lt;id&gt;</code> — Soft delete entry</li>
          <li><code>GET /api/vault/search?q=</code> — Search by website</li>
          <li><code>GET /api/vault/generate-password</code> — Generate secure password</li>
          <li><code>POST /api/vault/import</code> — Import from CSV</li>
        </ul>

        <h2>Health</h2>
        <ul>
          <li><code>GET /health</code> — Server health check</li>
        </ul>
        <div class="hr"></div>

        <h2>Security Considerations</h2>
        <ul>
          <li>Master password never transmitted after initial login — encryption key derived server-side from the password provided at login</li>
          <li>All vault fields encrypted with independent IVs — identical passwords produce different ciphertext</li>
          <li>JWT tokens expire after 15 minutes — refresh tokens rotated on use</li>
          <li>Failed login attempts tracked per account — lockout after 10 consecutive failures</li>
          <li>All inputs validated and sanitized via Marshmallow schemas</li>
          <li>Audit log is append-only — no API endpoint permits modification or deletion</li>
        </ul>
        <div class="hr"></div>

        <h2>Testing</h2>
        <pre>pytest
pytest --cov=app --cov-report=term-missing</pre>
        <p><strong>Current coverage: 93% across 96 tests</strong></p>
        <ul>
          <li>Unit tests — crypto service, auth service</li>
          <li>Integration tests — all API endpoints</li>
          <li>Security tests — SQL injection, auth bypass, token tampering, cross-user data isolation</li>
        </ul>
        <div class="hr"></div>

        <h2>Roadmap</h2>

        <h2>V1.1 (next)</h2>
        <ul>
          <li>GitHub Actions CI/CD pipeline</li>
          <li>OWASP ZAP automated security scanning</li>
          <li>Soft delete recovery endpoint (30-day recycle bin)</li>
          <li>Password breach detection via HaveIBeenPwned API</li>
          <li>Swagger / OpenAPI documentation</li>
        </ul>

        <h2>V2.0 (future)</h2>
        <ul>
          <li>Browser extension — auto-fill login forms in Chrome</li>
          <li>Password sharing between trusted users</li>
          <li>Mobile application (iOS / Android)</li>
          <li>Multi-device sync with end-to-end encryption</li>
          <li>Import/export to other password manager formats</li>
          <li>Biometric authentication</li>
        </ul>
        <div class="hr"></div>
        <p><strong>License:</strong> MIT</p>
      `
    }
  ];

  /* ── Render cards ─────────────────────────────────── */
  function renderCards() {
    const row = document.getElementById('projects-row');
    if (!row) return;
    PROJECTS.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', p.id);
      card.innerHTML = `
        <div class="project-num">${p.num}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <span class="project-link">view →</span>
      `;
      card.addEventListener('click', () => openModal(p.id));
      row.appendChild(card);
    });
  }

  /* ── Modal logic ──────────────────────────────────── */
  const modal     = document.getElementById('proj-modal');
  const modalCard = document.getElementById('modal-card');
  const frontFace = document.getElementById('modal-front');
  const backFace  = document.getElementById('modal-back');
  const closeBtn  = document.getElementById('modal-close-btn');
  const backdrop  = document.getElementById('modal-bd');

  let flipTimer = null;
  let isOpen = false;

  function openModal(id) {
    const p = PROJECTS[id];
    if (!p) return;

    modalCard.style.transition = 'none';
    modalCard.classList.remove('flipped');

    frontFace.innerHTML = `
      <div class="modal-front-num">${p.num}</div>
      <div class="modal-front-name">${p.name}</div>
      <div class="modal-front-desc">${p.desc}</div>
      <div class="modal-front-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    `;

    const githubBadge = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener" class="readme-meta" style="display:inline-flex;align-items:center;gap:.3rem;margin-bottom:1.25rem;text-decoration:none;color:var(--deep-sage);">↗ ${p.link.replace('https://github.com/', 'github.com/')}</a>`
      : '';
    const readmeWithLink = p.readme.replace('<div class="hr"></div>', `${githubBadge}<div class="hr"></div>`);
    backFace.innerHTML = `<div class="readme">${readmeWithLink}</div>`;
    backFace.scrollTop = 0;

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    isOpen = true;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modalCard.style.transition = '';
        flipTimer = setTimeout(() => {
          modalCard.classList.add('flipped');
        }, 440);
      });
    });
  }

  function closeModal() {
    if (!isOpen) return;
    clearTimeout(flipTimer);
    modalCard.classList.remove('flipped');
    setTimeout(() => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      isOpen = false;
    }, 480);
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeModal();
  });

  /* ── Other repos (from GitHub, excluding the 4 main projects) ── */
  const OTHER_REPOS = [
    { name: 'Study-Organiser', lang: 'JavaScript', url: 'https://github.com/DhritiVaz/Study-Organiser', desc: 'Academic study organisation tool' },
    { name: 'deployed',        lang: 'JavaScript', url: 'https://github.com/DhritiVaz/deployed',        desc: 'Deployment configuration and scripts' },
    { name: 'Portfolio',       lang: 'HTML',       url: 'https://github.com/DhritiVaz/Portfolio',       desc: 'Personal portfolio showcasing projects, skills, and journey as a CS student' },
  ];

  function renderOtherPanel() {
    const panel = document.getElementById('panel-other');
    panel.innerHTML = `
      <div class="proj-panel-grid">
        ${OTHER_REPOS.map(r => `
          <div class="other-proj-item">
            <div class="other-proj-name">${r.name}</div>
            <div class="other-proj-lang">${r.lang}</div>
            <div style="font-size:.78rem;color:var(--charcoal);opacity:.8;line-height:1.5;">${r.desc}</div>
            <a href="${r.url}" target="_blank" rel="noopener" class="other-proj-link">↗ View on GitHub</a>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderIrisPanel() {
    const panel = document.getElementById('panel-iris');
    panel.innerHTML = `
      <span class="iris-badge">In Progress</span>
      <div class="iris-title">IRIS — Local AI Command Centre</div>
      <div class="iris-sub">A desktop app built like a hotel — <strong>Reception</strong> (main hub) manages topic-specific <strong>Rooms</strong>, each with persistent memory, auto-summarisation, and inline doubt resolution. Fully local, no cloud dependencies.</div>
      <div class="iris-grid">
        <div class="iris-feat"><strong>Reception</strong>Global hub that knows all Rooms — creates, switches, and summarises any Room on command.</div>
        <div class="iris-feat"><strong>Rooms</strong>Focused conversations with full persistent memory across sessions via local SQLite.</div>
        <div class="iris-feat"><strong>Doubt Pop-ups</strong>Highlight text → focused mini-chat appears with full Room context → disappears without derailing the main thread.</div>
        <div class="iris-feat"><strong>Memory Export</strong>Auto-generated Room summaries. When context limit hits, copy summary to a fresh chat and continue seamlessly.</div>
        <div class="iris-feat"><strong>Multi-AI</strong>Choose your brain — Groq (free), Claude API (paid), or Ollama (local). Switchable anytime.</div>
        <div class="iris-feat"><strong>Local-first</strong>All data in SQLite on your machine. No accounts, no cloud, no tracking.</div>
      </div>
      <div class="iris-stack">Electron · React · Node.js · SQLite · TailwindCSS · Groq / Claude API / Ollama</div>
    `;
  }

  /* ── Pill popup logic ─────────────────────────────── */
  function initTabs() {
    const tabOther   = document.getElementById('tab-other');
    const tabIris    = document.getElementById('tab-iris');
    const popup      = document.getElementById('pill-popup');
    const popupCard  = document.getElementById('pill-popup-card');
    const popupBd    = document.getElementById('pill-popup-bd');

    const otherHTML = `
      <button class="popup-close" id="popup-close-btn">×</button>
      <div style="font-size:.68rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--sage);margin-bottom:1.25rem;">Other Repositories</div>
      <div class="proj-panel-grid">
        ${OTHER_REPOS.map(r => `
          <div class="other-proj-item">
            <div class="other-proj-name">${r.name}</div>
            <div class="other-proj-lang">${r.lang}</div>
            <div style="font-size:.78rem;color:var(--charcoal);opacity:.8;line-height:1.5;flex:1;">${r.desc}</div>
            <a href="${r.url}" target="_blank" rel="noopener" class="other-proj-link">↗ View on GitHub</a>
          </div>
        `).join('')}
      </div>
    `;

    const irisHTML = `
      <button class="popup-close" id="popup-close-btn">×</button>
      <span class="iris-badge">In Progress</span>
      <div class="iris-title">IRIS — Local AI Command Centre</div>
      <div class="iris-sub">A desktop app built like a hotel — <strong>Reception</strong> (main hub) manages topic-specific <strong>Rooms</strong>, each with persistent memory, auto-summarisation, and inline doubt resolution. Fully local, no cloud dependencies.</div>
      <div class="iris-grid">
        <div class="iris-feat"><strong>Reception</strong>Global hub that knows all Rooms — creates, switches, and summarises any Room on command.</div>
        <div class="iris-feat"><strong>Rooms</strong>Focused conversations with full persistent memory across sessions via local SQLite.</div>
        <div class="iris-feat"><strong>Doubt Pop-ups</strong>Highlight text → focused mini-chat with full Room context → disappears without derailing the thread.</div>
        <div class="iris-feat"><strong>Memory Export</strong>Auto-generated Room summaries. Hit context limit → copy summary → continue seamlessly.</div>
        <div class="iris-feat"><strong>Multi-AI</strong>Choose your brain — Groq (free), Claude API (paid), or Ollama (local). Switchable anytime.</div>
        <div class="iris-feat"><strong>Local-first</strong>All data in SQLite on your machine. No accounts, no cloud, no tracking.</div>
      </div>
      <div class="iris-stack">Electron · React · Node.js · SQLite · TailwindCSS · Groq / Claude API / Ollama</div>
    `;

    function openPopup(which) {
      tabOther.classList.toggle('active', which === 'other');
      tabIris.classList.toggle('active', which === 'iris');
      popupCard.innerHTML = which === 'other' ? otherHTML : irisHTML;
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.getElementById('popup-close-btn').addEventListener('click', closePopup);
    }

    function closePopup() {
      popup.classList.remove('active');
      tabOther.classList.remove('active');
      tabIris.classList.remove('active');
      document.body.style.overflow = '';
    }

    tabOther.addEventListener('click', () => {
      if (tabOther.classList.contains('active')) closePopup();
      else openPopup('other');
    });
    tabIris.addEventListener('click', () => {
      if (tabIris.classList.contains('active')) closePopup();
      else openPopup('iris');
    });

    popupBd.addEventListener('click', closePopup);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePopup();
    });
  }

  document.addEventListener('DOMContentLoaded', () => { renderCards(); initTabs(); });
})();
