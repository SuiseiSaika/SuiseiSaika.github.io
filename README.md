# Chang Shuo (Johnson) Chen — Astro Portfolio POC

This branch contains an Astro + TypeScript proof-of-concept for the portfolio at
[https://suiseisaika.github.io/](https://suiseisaika.github.io/). The existing
Jekyll files remain in the repository so the current production implementation
can be restored or compared during evaluation.

## Goals

- Present Machine Learning, Computer Vision, Edge AI, and AI System Integration work clearly.
- Store case studies as typed Markdown content collections.
- Generate a fully static site suitable for GitHub Pages.
- Use restrained CSS motion with `prefers-reduced-motion` support.
- Keep unknown dates, metrics, and project links explicitly marked `TODO`.

## Local development

Requirements: Node.js 24+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321/`.

Production checks:

```bash
pnpm check
pnpm build
pnpm preview
```

The static output is written to `dist/`.

## Project structure

```text
src/
  components/          Reusable portfolio sections and cards
  content/projects/    Markdown case studies
  data/                Timeline and skill data
  layouts/             Shared HTML and case-study layouts
  pages/               File-based routes
  styles/              Global responsive styling and CSS motion
  content.config.ts    Typed project collection schema
public/
  images/              Profile, social, and project cover assets
  favicon.svg
.github/workflows/
  astro-pages.yml      Branch checks and manual Pages deployment
astro.config.mjs
package.json
tsconfig.json
```

## GitHub Pages deployment

The workflow builds every push to `experiment/astro-portfolio` but deploys only
when manually triggered with **Run workflow**. This prevents experimental pushes
from automatically replacing the current Jekyll site.

To evaluate deployment:

1. Push `experiment/astro-portfolio`.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. Run the **Astro Pages POC** workflow manually.

Important: a manual deployment publishes the Astro POC to the repository's one
GitHub Pages environment and therefore replaces the currently served Jekyll
build until another deployment restores it.

For a permanent migration, change the workflow trigger to the chosen production
branch only after content review, final metrics, link verification, and approval.

## Content integrity

The case studies preserve the claims already present in the Jekyll homepage.
The PyQt6 GUI entry includes only the framework and integration scope confirmed
so far. No DevOps / CI/CD case study is included because no verified source
content currently exists for it.
