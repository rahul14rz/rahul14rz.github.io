# Portfolio Bento Grid Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Load executing-plans to implement this plan task-by-task.

**Goal:** Build a premium, high-performance, and fully responsive minimalist Bento Grid portfolio site for a Fullstack Mobile Developer, hostable for free on GitHub Pages.

**Architecture:** A lightweight, pure-static frontend comprising semantic HTML5 structure, modular vanilla CSS using modern CSS Grid and custom variables, and basic vanilla JavaScript for interactive UI widgets and quick-copy feedback.

**Tech Stack:** HTML5, CSS3 (Grid/Flexbox/Variables), Vanilla ES6+ JavaScript, Google Fonts (Outfit & Inter), and crisp inline SVG icons.

---

## Path & Structure Conventions
This is a Greenfield project. We will follow this directory layout:
```
/Users/adhoc/.gemini/antigravity/scratch/portfolio/
├── docs/
│   └── plans/
│       ├── 2026-05-24-portfolio-bento-design.md
│       └── 2026-05-24-portfolio-implementation.md
├── index.html
├── styles.css
└── script.js
```

---

## Tasks Checklist

### Task 1: Scaffolding & Setup
Create the structural entry point of the application with full SEO optimization and asset linkings.

**Files:**
* Create: `index.html`

**Step 1: Write index.html baseline**
Add HTML boilerplate, Outfit/Inter font imports from Google Fonts, title tags, responsive meta tags, and style/script connectors. Use inline SVG icons to ensure fast, dependency-free load times.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fullstack Mobile Developer | Portfolio</title>
  <meta name="description" content="Portfolio of a premium Fullstack Mobile Developer building Flutter, React Native, and Next.js applications.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="grid-container" id="bento-grid">
    <!-- Bento Cards go here -->
  </main>
  <script src="script.js"></script>
</body>
</html>
```

**Step 2: Commit**
```bash
git add index.html
git commit -m "chore: initialize project scaffolding and seo metadata"
```

---

### Task 2: Core Styling Foundation
Set up modern CSS reset rules, style custom properties (Obsidian theme variables), and establish global body parameters.

**Files:**
* Create: `styles.css`

**Step 1: Initialize global style sheets**
Create styles.css with standard clean browser resets, color palettes, and global properties.
```css
/* Custom properties for HSL Obsidian Theme */
:root {
  --bg-primary: 220 15% 4%;      /* Deep obsidian midnight */
  --bg-secondary: 220 12% 8%;    /* Slightly lighter bento cards */
  --text-primary: 0 0% 98%;      /* Soft white */
  --text-secondary: 220 9% 70%;  /* Muted silver-gray */
  --accent: 260 90% 65%;         /* Royal Indigo accent color */
  --accent-rgb: 139, 92, 246;
  --success: 142 70% 50%;        /* Apple-green for pulsing active tag */
  --border: 220 12% 16%;         /* Very subtle card border */
  
  --transition-smooth: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  --border-radius: 24px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: hsl(var(--bg-primary));
  color: hsl(var(--text-primary));
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  overflow-x: hidden;
}
```

**Step 2: Commit**
```bash
git add styles.css
git commit -m "style: establish theme variables and browser resets"
```

---

### Task 3: Bento Grid Layout Definition
Map the core CSS Grid layout areas for desktop, tablet, and mobile breakpoints.

**Files:**
* Modify: `index.html`
* Modify: `styles.css`

**Step 1: Define skeleton markup inside index.html**
```html
  <main class="grid-container" id="bento-grid">
    <section class="bento-card card-profile" id="card-profile"></section>
    <section class="bento-card card-projects" id="card-projects"></section>
    <section class="bento-card card-techstack" id="card-techstack"></section>
    <section class="bento-card card-socials" id="card-socials"></section>
  </main>
```

**Step 2: Configure grid layouts in styles.css**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  max-width: 1200px;
  width: 100%;
}

.bento-card {
  background-color: hsl(var(--bg-secondary));
  border: 1px solid hsl(var(--border));
  border-radius: var(--border-radius);
  padding: 32px;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.bento-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(800px circle at var(--x, 0px) var(--y, 0px), rgba(var(--accent-rgb), 0.05), transparent 40%);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.bento-card:hover::before {
  opacity: 1;
}

/* Grid Areas placement */
.card-profile { grid-column: span 2; grid-row: span 2; }
.card-projects { grid-column: span 2; grid-row: span 2; }
.card-techstack { grid-column: span 3; }
.card-socials { grid-column: span 1; }

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .card-profile { grid-column: span 2; }
  .card-projects { grid-column: span 2; }
  .card-techstack { grid-column: span 2; }
  .card-socials { grid-column: span 2; }
}

@media (max-width: 768px) {
  body { padding: 20px 12px; }
  .grid-container {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  .card-profile, .card-projects, .card-techstack, .card-socials {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

**Step 3: Commit**
```bash
git add index.html styles.css
git commit -m "style: define responsive bento layout and hover glow skeletons"
```

---

### Task 4: Card A Content — Profile & Status Card
Add full content, interactive status bar, avatar, and detailed tag structures.

**Files:**
* Modify: `index.html`
* Modify: `styles.css`

**Step 1: Write profile details inside card-profile**
```html
    <section class="bento-card card-profile" id="card-profile">
      <div class="status-badge">
        <span class="status-dot"></span>
        <span class="status-text">Available for remote mobile/fullstack projects</span>
      </div>
      <div class="profile-header">
        <div class="profile-avatar">
          <svg viewBox="0 0 100 100" class="avatar-svg">
            <defs>
              <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#3B82F6" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#avatar-grad)" />
            <path d="M50 30 A12 12 0 1 0 50 54 A12 12 0 1 0 50 30 Z" fill="#ffffff" />
            <path d="M22 78 C25 62, 75 62, 78 78 Z" fill="#ffffff" />
          </svg>
        </div>
        <div>
          <h1 class="profile-name">Alex Rivera</h1>
          <p class="profile-title">Fullstack Mobile Engineer</p>
        </div>
      </div>
      <p class="profile-bio">
        Crafting high-performance, pixel-perfect iOS & Android applications using <strong>Flutter</strong> and <strong>React Native</strong>, backed by robust <strong>Node.js</strong> architectures.
      </p>
      <div class="profile-tags">
        <span class="tag">Flutter</span>
        <span class="tag">React Native</span>
        <span class="tag">Next.js</span>
        <span class="tag">Node.js</span>
        <span class="tag">TypeScript</span>
      </div>
    </section>
```

**Step 2: Add styles to profile section inside styles.css**
```css
/* Card A specific styles */
.card-profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  border-radius: 100px;
  padding: 6px 14px;
  align-self: flex-start;
  margin-bottom: 24px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: hsl(var(--success));
  border-radius: 50%;
  margin-right: 8px;
  animation: pulse-glow 2s infinite;
}

.status-text {
  font-size: 12px;
  font-weight: 500;
  color: hsl(var(--text-secondary));
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.profile-avatar {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid hsl(var(--border));
}

.profile-name {
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.profile-title {
  font-size: 14px;
  color: hsl(var(--accent));
  font-weight: 500;
  margin-top: 2px;
}

.profile-bio {
  font-size: 16px;
  line-height: 1.6;
  color: hsl(var(--text-secondary));
  margin-bottom: 28px;
}

.profile-bio strong {
  color: hsl(var(--text-primary));
  font-weight: 600;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid hsl(var(--border));
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  color: hsl(var(--text-secondary));
  transition: var(--transition-smooth);
}

.tag:hover {
  border-color: hsl(var(--accent));
  color: hsl(var(--text-primary));
  background-color: rgba(var(--accent-rgb), 0.05);
}

@keyframes pulse-glow {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(142, 230, 80, 0.4); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(142, 230, 80, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(142, 230, 80, 0); }
}
```

**Step 3: Commit**
```bash
git add index.html styles.css
git commit -m "feat: complete layout and styling for Card A (Profile/Status)"
```

---

### Task 5: Card B Content — Featured Projects Card
Integrate mobile-responsive showcases representing Aura, Nova, and Zenith projects.

**Files:**
* Modify: `index.html`
* Modify: `styles.css`

**Step 1: Add project wrappers in index.html**
```html
    <section class="bento-card card-projects" id="card-projects">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-list">
        <a href="#" class="project-item">
          <div class="project-meta">
            <span class="project-tag">Flutter</span>
            <h3 class="project-name">Aura</h3>
            <p class="project-desc">Mindfulness app with offline storage and smooth transitions.</p>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </a>
        <a href="#" class="project-item">
          <div class="project-meta">
            <span class="project-tag">React Native</span>
            <h3 class="project-name">Nova</h3>
            <p class="project-desc">Peer-to-peer marketplace with map tracking & real-time chat.</p>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </a>
        <a href="#" class="project-item">
          <div class="project-meta">
            <span class="project-tag">Next.js & Node.js</span>
            <h3 class="project-name">Zenith</h3>
            <p class="project-desc">App telemetry dashboard with interactive charts.</p>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </a>
      </div>
    </section>
```

**Step 2: Add styles to project elements inside styles.css**
```css
/* Card B specific styles */
.card-projects {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  padding: 18px 24px;
  transition: var(--transition-smooth);
}

.project-tag {
  font-size: 10px;
  font-weight: 600;
  color: hsl(var(--accent));
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
  display: inline-block;
}

.project-name {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: hsl(var(--text-primary));
  margin-bottom: 4px;
}

.project-desc {
  font-size: 13px;
  color: hsl(var(--text-secondary));
  line-height: 1.4;
}

.project-arrow {
  color: hsl(var(--text-secondary));
  transition: var(--transition-smooth);
}

/* Hover effects */
.project-item:hover {
  background-color: rgba(var(--accent-rgb), 0.04);
  border-color: rgba(var(--accent-rgb), 0.3);
  transform: translateX(4px);
}

.project-item:hover .project-arrow {
  color: hsl(var(--text-primary));
  transform: translateX(4px);
}
```

**Step 3: Commit**
```bash
git add index.html styles.css
git commit -m "feat: complete visual cards and interactive listing for Card B (Projects)"
```

---

### Task 6: Card C Content — Technical Skills Grid
Implement category-based listings displaying technologies.

**Files:**
* Modify: `index.html`
* Modify: `styles.css`

**Step 1: Add groups inside card-techstack inside index.html**
```html
    <section class="bento-card card-techstack" id="card-techstack">
      <h2 class="section-title">Technical Ecosystem</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h4 class="category-name">Mobile</h4>
          <div class="skill-list">
            <span class="skill-pill" data-category="mobile">Flutter</span>
            <span class="skill-pill" data-category="mobile">React Native</span>
            <span class="skill-pill" data-category="mobile">Dart</span>
            <span class="skill-pill" data-category="mobile">Swift</span>
            <span class="skill-pill" data-category="mobile">Kotlin</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="category-name">Frontend</h4>
          <div class="skill-list">
            <span class="skill-pill" data-category="frontend">Next.js</span>
            <span class="skill-pill" data-category="frontend">React.js</span>
            <span class="skill-pill" data-category="frontend">TypeScript</span>
            <span class="skill-pill" data-category="frontend">Vanilla CSS</span>
          </div>
        </div>
        <div class="skill-category">
          <h4 class="category-name">Backend</h4>
          <div class="skill-list">
            <span class="skill-pill" data-category="backend">Node.js</span>
            <span class="skill-pill" data-category="backend">Express</span>
            <span class="skill-pill" data-category="backend">PostgreSQL</span>
            <span class="skill-pill" data-category="backend">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
```

**Step 2: Add styles inside styles.css**
```css
/* Card C specific styles */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.category-name {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  color: hsl(var(--text-secondary));
  margin-bottom: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid hsl(var(--border));
  color: hsl(var(--text-secondary));
  font-weight: 500;
  transition: var(--transition-smooth);
  cursor: default;
}

/* Color thematic highlighting on hover */
.skill-pill[data-category="mobile"]:hover {
  border-color: #38bdf8;
  color: #38bdf8;
  background-color: rgba(56, 189, 248, 0.08);
}
.skill-pill[data-category="frontend"]:hover {
  border-color: #a78bfa;
  color: #a78bfa;
  background-color: rgba(167, 139, 250, 0.08);
}
.skill-pill[data-category="backend"]:hover {
  border-color: #34d399;
  color: #34d399;
  background-color: rgba(52, 211, 153, 0.08);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

**Step 3: Commit**
```bash
git add index.html styles.css
git commit -m "feat: complete structured pillars and styling for Card C (Skills Grid)"
```

---

### Task 7: Card D Content — Quick Connect & Socials Card
Set up structured communication channels.

**Files:**
* Modify: `index.html`
* Modify: `styles.css`

**Step 1: Configure components inside Card D in index.html**
```html
    <section class="bento-card card-socials" id="card-socials">
      <h2 class="section-title">Get in Touch</h2>
      <div class="socials-wrapper">
        <button id="copy-email-btn" class="connect-btn main-connect">
          <span id="btn-text">Copy Email Address</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
        <div class="social-links-row">
          <a href="https://github.com" target="_blank" rel="noopener" class="connect-btn square-btn" title="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="connect-btn square-btn" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>
    </section>
```

**Step 2: Add styles to Card D inside styles.css**
```css
/* Card D specific styles */
.card-socials {
  display: flex;
  flex-direction: column;
}

.socials-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  justify-content: center;
}

.connect-btn {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  color: hsl(var(--text-primary));
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition-smooth);
}

.main-connect {
  width: 100%;
  padding: 14px;
}

.main-connect:hover {
  background-color: hsl(var(--text-primary));
  color: hsl(var(--bg-primary));
  border-color: hsl(var(--text-primary));
}

.social-links-row {
  display: flex;
  gap: 12px;
  width: 100%;
}

.square-btn {
  flex: 1;
  padding: 14px;
}

.square-btn:hover {
  background-color: rgba(var(--accent-rgb), 0.08);
  border-color: hsl(var(--accent));
  color: hsl(var(--accent));
}

/* Clipboard success styling states */
.connect-btn.success {
  background-color: rgba(142, 230, 80, 0.08) !important;
  border-color: hsl(var(--success)) !important;
  color: hsl(var(--success)) !important;
}
```

**Step 3: Commit**
```bash
git add index.html styles.css
git commit -m "feat: complete structural layouts and buttons for Card D (Quick Connect)"
```

---

### Task 8: Dynamic Hover & Clipboard Operations
Implement interactive spotlight tracking and copy actions.

**Files:**
* Create: `script.js`

**Step 1: Write interactive JavaScript controls inside script.js**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Hover Spotlight Hover tracking for Bento Cards
  const cards = document.querySelectorAll('.bento-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // 2. Email Copy Handler
  const emailButton = document.getElementById('copy-email-btn');
  const btnText = document.getElementById('btn-text');
  const professionalEmail = 'alex.rivera.dev@gmail.com'; // Change to actual developer email

  if (emailButton) {
    emailButton.addEventListener('click', () => {
      navigator.clipboard.writeText(professionalEmail)
        .then(() => {
          emailButton.classList.add('success');
          btnText.textContent = 'Email Copied!';
          
          setTimeout(() => {
            emailButton.classList.remove('success');
            btnText.textContent = 'Copy Email Address';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  }
});
```

**Step 2: Commit**
```bash
git add script.js
git commit -m "feat: implement javascript spotlights and copy-to-clipboard functionality"
```
