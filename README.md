# Projectspace Starter

A minimal documentation template built with Astro. Designed for freelancers to hand off to clients as a clean, self-contained project docs site.

- Markdown-driven pages and routing
- Auto-generated sidebar navigation
- Client-side search across all docs
- Light/dark mode with configurable default
- Central `projectspace.config.ts` for site-wide settings
- Zero dependencies beyond Astro — no frameworks, no CSS libraries

## Quick start

```sh
npm install
npm run dev
```

Open [localhost:4321](http://localhost:4321).

## Project structure

```
projectspace.config.ts          # Site-wide settings (title, theme, homepage)
src/
  content/docs/                 # Markdown files — each one becomes a page
    getting-started/
    managing-content/
    brand-guidelines/
  layouts/DocsLayout.astro      # Page shell with header + sidebar
  components/
    Sidebar.astro               # Auto-generated nav from content collection
    Search.astro                # Client-side full-text search
    ThemeToggle.astro           # Light/dark mode toggle
  pages/
    index.astro                 # Landing page
    docs/[...slug].astro        # Catch-all route for doc pages
    search-index.json.ts        # Build-time search index
  styles/global.css             # All styling
```

## Adding pages

Create a `.md` file anywhere inside `src/content/docs/`:

```md
---
title: Your Page Title
description: A   summary.
order: 1
section: section-name
---

Your content here.
```

It will appear in the sidebar and be routable automatically.

## Configuration

Edit `projectspace.config.ts` in the project root:

```ts
export default {
  site: {
    title: "Project Docs",
    description: "Your site description.",
  },
  theme: {
    default: "system", // "light" | "dark" | "system"
  },
  homepage: {
    heading: "Project Docs",
    tagline: "Your tagline here.",
    cta: { text: "Get Started", href: "/docs/getting-started/welcome" },
  },
};
```

## Deploy to GitHub Pages

This template is set up to deploy automatically via GitHub Actions.

1. Push this repo to GitHub
2. Go to **Settings > Pages** in your repo
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the site will build and deploy automatically

The workflow detects your repo name and sets the correct base path. No manual configuration needed.

**Writing links in Markdown:** Use relative paths for links between docs (e.g., `[Support](../getting-started/support)`) so they work correctly on GitHub Pages.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |
