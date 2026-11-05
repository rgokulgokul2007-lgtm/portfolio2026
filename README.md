# GOKUL R — Antigravity Engineering Portfolio

> **High-tech, zero-gravity personal engineering portfolio blending the modern digital agency aesthetic of "Nova" with procedural 3D React Three Fiber architecture.**

![Portfolio License](https://img.shields.io/badge/license-MIT-00D9FF.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB.svg?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC.svg?logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black.svg?logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12-FF0055.svg?logo=framer&logoColor=white)

---

## 🛰️ Project Overview

Production-ready single-page portfolio engineered for **GOKUL R**, Electronics and Communication Engineering student at Rathinam Technical Campus. The application highlights hardware-software synergy, embedded systems, full-stack web applications, and local privacy-first AI execution.

### Key Highlights
- **Nova × Antigravity Aesthetic:** Deep dark mode (`#07090D`), graphite panels, electric cyan (`#00D9FF`) and ice blue (`#80E5FF`) accents with aerospace coordinate grids.
- **100% Procedural 3D Canvas:** Lightweight React Three Fiber scene rendering floating silicon microchips, wireframe polyhedrons, and dynamic particle fields without external heavy `.gltf` or `.obj` assets.
- **Strict Size Constraint (Sub-10MB Source):** WebP optimized photography (<100 KB), zero bloated asset bundles, and lean Lucide icons.
- **Modular Component Architecture:** Clean separation of data files, functional React components, and responsive mobile-first layouts.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime & Bundler** | [Vite 6](https://vitejs.dev/) | Ultra-fast HMR and optimized production bundling |
| **UI Library** | [React 19](https://react.dev/) | Functional declarative UI architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine with `@theme` token definitions |
| **3D Rendering** | [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://github.com/pmndrs/drei) | Hardware-accelerated procedural 3D hero environment |
| **Math & Graphics** | [Three.js](https://threejs.org/) | Procedural BufferGeometry, BoxGeometry & Octahedrons |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Zero-gravity bobbing, staggered scroll reveals & modal transitions |
| **Iconography** | [Lucide React](https://lucide.dev/) | Featherlight SVG icon components |

---

## 🚀 Portfolio Sections

1. **Navigation Bar (`Navbar.jsx`):** Sticky glassmorphic navbar with active section observer, live `ENGINEERING / INNOVATION` status indicator, and mobile drawer.
2. **Hero Section (`Hero.jsx`):** Two-column layout with bold headline, call-to-actions, procedural 3D zero-gravity particle field, and floating portrait container wrapped in orbit lines and live telemetry badges.
3. **About Me (`About.jsx`):** "Beyond the Circuit" — First-principles engineering bio, Rathinam Technical Campus credentials, and 3 pillar cards (Hardware, Software, Intelligence).
4. **Skills Bento Grid (`Skills.jsx`):** Interactive "Technical Arsenal" grid featuring Programming Languages, Web & Mobile, Circuits & Hardware, and Local AI (Ollama & Qwen2.5-Coder) with category filters.
5. **Featured Projects (`Projects.jsx`):** Selected engineering works:
   - **RALCA:** Emergency Agency Locator & Crisis Analytics (React, Leaflet.js, Firebase)
   - **Sahakar Seva:** Multi-tier Digital Cooperative Platform for gig workers
   - **Time Mudinchu:** AI-Assisted Storytelling YouTube Channel
6. **Milestones & Recognition (`Timeline.jsx`):** Chronological vertical timeline with glowing cyan progress track covering IBM Qiskit Fall Fest 2026, CodeAlpha IoT Internship, Hackathons, and NPTEL certifications.
7. **Contact Section (`Contact.jsx`):** Validated dispatch form with simulated transmission state, reset controls, and direct GitHub links.
8. **Footer (`Footer.jsx`):** Dynamic system timestamp, philosophy quote, and return-to-matrix smooth scroll.

---

## ⚡ Quickstart Guide

### Prerequisites
- Node.js `v18.0.0` or higher (Tested on `v24.13.1`)
- npm `v9.0.0` or higher (Tested on `v11.8.0`)

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/rgokulgokul2007-lgtm/PORTFOLIO.git
cd PORTFOLIO
npm install
```

### 2. Local Development
Start the local Vite development server with Hot Module Replacement:

```bash
npm run dev
```

Visit `http://localhost:3000` (or the terminal-provided port) in your browser.

### 3. Production Build
Compile and bundle the production build into `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Vercel
1. Push your repository to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build Command to `npm run build`.
3. Set Publish Directory to `dist`.
4. Deploy site.

### GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Use `gh-pages` or GitHub Actions to publish the `dist` directory to the `gh-pages` branch.

---

## 🔒 License

Built by **GOKUL R**. Released under the [MIT License](LICENSE).
