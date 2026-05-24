# Design Document: Minimalist Bento Grid Portfolio

**Date:** 2026-05-24  
**Author:** Antigravity (AI Coding Assistant)  
**Target Audience:** Recruiters, clients, and developers interested in fullstack mobile engineering.

---

## 1. Executive Summary

This document specifies the technical design, visual aesthetics, and interaction details for a modern, premium **Bento Grid Portfolio website** tailored for a **Fullstack Mobile Engineer**. The portfolio is fully static, requiring no server-side execution, enabling 100% free hosting on **GitHub Pages**.

---

## 2. Goals & Success Criteria

### Primary Goals
* Showcase mobile developer expertise (Flutter, React Native, Next.js, Node.js).
* Deliver an ultra-premium, high-aesthetic layout styled like Apple’s bento grids.
* Provide frictionless user interaction, including direct social linkages and quick-copy contact details.

### Success Criteria
* **Blazing Performance:** Lightning-fast load times (under 100ms) with pure static HTML, CSS, and JS (zero framework overhead).
* **Fully Responsive:** Looks flawless and rearranges naturally on mobile devices, tablets, and 4K screens.
* **Modern Polish:** Sleek transitions, hover effects, HSL color tokens, and glowing accents.

---

## 3. Technology Stack

* **Structure:** Semantic HTML5
* **Styling:** Vanilla CSS (CSS Grid, Flexbox, custom variables, Outfit/Inter Google Fonts)
* **Logic:** Modern vanilla JavaScript (ES6+) for quick-copy utilities, carousel behavior, and animation handlers.
* **Hosting:** GitHub Pages (`https://<username>.github.io`)

---

## 4. Design System & Style Tokens

### Colors (HSL Obsidian Theme)
We utilize high-contrast, deeply saturated obsidian-based hues:
* `--bg-primary`: `hsl(220, 15%, 4%)` (Deep slate midnight)
* `--bg-secondary`: `hsl(220, 12%, 8%)` (Card background)
* `--text-primary`: `hsl(0, 0%, 98%)` (High-contrast white)
* `--text-secondary`: `hsl(220, 9%, 70%)` (Muted silver)
* `--accent`: `hsl(260, 90%, 65%)` (Vibrant royal purple)
* `--border`: `hsl(220, 12%, 16%)` (Subtle boundary border)
* `--success`: `hsl(142, 70%, 50%)` (Apple green for success/status tags)

### Typography
* **Headers:** `Outfit`, sans-serif (bold, heavy weight, tracking-tight)
* **Body:** `Inter`, sans-serif (medium/regular weight, highly readable)

---

## 5. Layout Architecture (Bento Grid)

### Grid Configuration (Desktop)
A 4-column wide layout that adapts automatically:
```
+-----------------------------------+-----------------------------------+
|                                   |                                   |
|       Card A: Profile Card        |     Card B: Featured Projects     |
|          (2x2 Columns)            |          (2x2 Columns)            |
|                                   |                                   |
+-----------------------------------+-----------------+-----------------+
|                                                     |                 |
|              Card C: Tech Stack Grid                | Card D: Socials |
|                   (3x1 Columns)                     |  (1x1 Columns)  |
|                                                     |                 |
+-----------------------------------------------------+-----------------+
```

### Media Queries & Responsive Reflow
* **Desktop (>= 1024px):** 4-column layout (`grid-template-columns: repeat(4, 1fr)`).
* **Tablet (768px - 1023px):** 2-column layout (`grid-template-columns: repeat(2, 1fr)`). Card areas auto-span matching widths.
* **Mobile (< 768px):** Single-column stacked layout (`grid-template-columns: 1fr`). Card heights adapt to content naturally.

---

## 6. Functional Specifications

### Card A: Profile Info
* Holds personal photo/avatar, animated pulsing green green "Available" dot, main headers, bios, and tech pill tags.
* Soft hover transitions (`transform: translateY(-4px)`).

### Card B: Featured Projects
* Showcases 3 top-tier projects (`Aura`, `Nova`, `Zenith`).
* Interactive hovering to view tech details and external links.

### Card C: Tech Stack & Skills
* Organizes technical competencies by segment (Mobile, Frontend, Backend).
* Dynamic CSS transitions on hover that light up tags in their matching category color themes.

### Card D: Quick-Copy & Socials
* GitHub, LinkedIn icons mapped with custom SVG markers.
* "Copy Email" primary call-to-action utilizing `navigator.clipboard.writeText`. Triggers a green "Email Copied!" visual animation for 2 seconds.

---

## 7. Development & Verification Plan

### Manual Checklist
1. Verify markup validity against standard HTML5 specifications.
2. Confirm perfect rendering and alignment on both Chromium and Safari engines.
3. Validate grid responsiveness by resizing browser viewport from 320px to 2560px.
4. Verify clipboard operations function correctly across devices.
