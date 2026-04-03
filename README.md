# Sabrina E. Benford – Portfolio Website

Single-page portfolio built with **React + Vite + Tailwind CSS v3**.

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## 🌐 Deploy to GitHub Pages

```bash
# 1. Install gh-pages helper
npm install -D gh-pages

# 2. Add to package.json → "scripts":
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d dist"
# Also add top-level: "homepage": "https://<your-username>.github.io/<repo-name>"

# 3. Push to GitHub then deploy:
npm run deploy
```

## 📁 Project Structure

```
src/
  App.jsx       ← All sections (Nav, Hero, About, Skills, Experience, Education, Contact)
  index.css     ← Tailwind + Google Fonts imports
  main.jsx      ← React entry point
tailwind.config.js
vite.config.js
```

## Sections
- **Hero** – Animated intro with name, tagline, and CTA
- **About** – Bio + quick-facts card
- **Skills** – Animated progress bars + software engineering badges
- **Experience** – Hover-lift experience cards
- **Education** – UNL + CMU program
- **Contact** – Email copy, LinkedIn link, location
