# Chang Shuo (Johnson) Chen — Portfolio

This repository contains the source for my personal portfolio website:

**[https://suiseisaika.github.io/](https://suiseisaika.github.io/)**

The site presents selected work in machine learning, deep learning, computer
vision, large language models, and inference system engineering. It is built
with Jekyll and the GitHub Pages–supported Minimal theme.

## Repository structure

- `index.md` — homepage portfolio content
- `_config.yml` — site metadata and theme configuration
- `_layouts/default.html` — page shell used by the site
- `images/` — profile photo and project-related visual assets
- `assets/` — small site assets such as the favicon

## Local preview

The production site is built automatically by GitHub Pages. To preview the
same supported dependency set locally, install Ruby, then run:

```bash
gem install github-pages
jekyll serve
```

Open `http://localhost:4000/` after the server starts. GitHub Pages remains the
authoritative production build environment; Markdown-only edits can also be
reviewed in GitHub's file preview before committing.

## Deployment

Changes pushed to the publishing branch (currently `master`) are built and
deployed by GitHub Pages. The repository name must remain
`SuiseiSaika.github.io` for the current user-site URL.

## Content notes

Some project assets may represent private or proprietary work. Only material
that is safe to publish should be linked from the site.
