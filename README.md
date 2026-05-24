# Premium Minimalist Bento Grid Portfolio

A stunning, responsive, high-performance Bento Grid portfolio website designed for a **Fullstack Mobile Developer**. Built using pure static HTML5, CSS Grid, and lightweight Vanilla JavaScript—optimized for flawless sub-100ms load speeds and perfect Core Web Vitals (LCP/INP).

## 🚀 Live Demo & Hosting
This portfolio is 100% static, meaning you can host it completely for free on **GitHub Pages**!

---

## 🎨 Visual Features & Interactions

* **Minimalist Bento Grid:** Beautifully structured multi-column card layouts inspired by Apple's product grids.
* **Obsidian HSL Design:** Deep, high-contrast dark mode slate themes with royal violet brand highlights.
* **Spotlight Card Glows:** Dynamic custom CSS variables track your cursor's exact coordinates to draw a fine, subtle radial glow backdrop on card hover.
* **Active Pulse Dots:** Smooth, pulsing Apple-green status dot showing live remote availability.
* **Pill-Tag Highlights:** Category-specific skill tags that dynamically glow in sky-blue (Mobile), violet-purple (Frontend), and emerald-green (Backend) on cursor hover.
* **Frictionless Copy-to-Clipboard:** An interactive email button that copies your contact address and transitions to a checkmark success state for 2 seconds.

---

## 🛠️ Technology Stack

* **Structure:** Semantic HTML5
* **Styles:** CSS Grid, Flexbox, custom property systems (`:root`), imported Google Fonts (`Outfit` & `Inter`).
* **Interactions:** Modern vanilla JavaScript (ES6+).
* **Assets:** Scalable inline SVGs (no external network latency, retina-sharp rendering).

---

## 📂 Project Structure

```
├── index.html       # Portfolio entry point and semantic grid layout
├── styles.css       # Obsidian color system, resets, animations, and grids
├── script.js        # Spotlight hovers and clipboard handler
├── README.md        # Technical project overview
└── docs/
    └── plans/       # Pre-approved design specs and blueprints
```

---

## 📤 How to Deploy to GitHub Pages (For Free!)

Follow these 4 quick steps to push your portfolio to GitHub and publish it live:

### 1. Create a Repository on GitHub
1. Open [github.com](https://github.com) and sign in.
2. Click the **New** repository button.
3. **Repository Name:** We recommend naming it **`your-username.github.io`** (replace `your-username` with your actual GitHub username). This makes it your primary personal site.
4. **Visibility:** Make it **Public** (required for free GitHub Pages hosting).
5. Leave all initialization files (README, .gitignore, license) unchecked, and click **Create repository**.

### 2. Add Remote and Push Locally
Run these commands in your project terminal inside `/Users/adhoc/.gemini/antigravity/scratch/portfolio` to link it and push:

```bash
# Link your local folder to your new GitHub repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push your code to main
git push -u origin main
```
*(If your git remote uses SSH, replace the URL with `git@github.com:your-username/your-username.github.io.git`)*.

### 3. Enable GitHub Pages
If you named your repository exactly `your-username.github.io`, it will deploy automatically! If you chose a different name:
1. Go to your repository on GitHub and click the **Settings** tab.
2. Under the left sidebar, click **Pages**.
3. Under **Build and deployment**, set the **Source** to `Deploy from a branch`.
4. Set the branch to `main` and the folder to `/ (root)`.
5. Click **Save**.

### 4. Your Site is Live!
Within 1-2 minutes, GitHub will publish your site. You can view it live at:
`https://your-username.github.io/` (or `https://your-username.github.io/repository-name/` if you used a custom name).
