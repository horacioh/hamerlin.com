# hamerlin.com

Static one-page site for **Fumigadora Hamerlin, S.A.** — plain HTML + CSS, no framework, no build step.

## Structure

```
index.html      # landing page (hero, logo, contact links, SEO + JSON-LD)
404.html        # not-found page
styles.css      # all styles
assets/         # hero image (webp + jpg, responsive), favicon, icons
```

## Local development

Any static file server works. With Node installed:

```sh
npm run dev     # serves the current folder at http://localhost:3000
```

Or just open `index.html` in a browser.

## Deployment (AWS Amplify)

There is **no build step** — the repository root *is* the deployable site.
Amplify build settings (`amplify.yml`):

- `build.commands`: none
- `artifacts.baseDirectory`: `/` (repo root)

Previously this repo was a Gatsby v2 monorepo that built to `site/public`; it was
migrated to plain static HTML/CSS. Update the Amplify app's build image/Node
version if needed (Node 20+), and confirm `artifacts.baseDirectory` points at the
repo root instead of `site/public`.
