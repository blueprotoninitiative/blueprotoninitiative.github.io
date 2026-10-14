# blueprotoninitiative.com

Static website of the Blue Proton Initiative. It is plain HTML, CSS and JS with no build step, and Cloudflare Workers (static assets) serves it at <https://blueprotoninitiative.com>.

## Structure

```
public/              ← the ONLY folder that gets published
  index.html           home page
  project-cattle.html  Edge Vision for Livestock Health project page
  contact.html         contact form (Formspree)
  404.html             served for unknown URLs
  css/                 base.css (shared) + one file per page
  js/                  main.js (shared) + one file per page
  assets/              favicon, logo, social preview image
  assets/img/          optimised WebP photos (several widths each)
  robots.txt, sitemap.xml, favicon.ico
  _headers             security + cache headers (read by Cloudflare, not served)
  .assetsignore        extra safety net: files never uploaded
originals/           full-size source photos (NOT published)
wrangler.jsonc       Cloudflare config: worker "blueproton", assets = ./public
```

Pages link to each other with clean URLs (`/contact`, `/project-cattle`). Cloudflare redirects `*.html` to those URLs.

## Cloudflare dashboard settings (required after merging)

The old build settings copied `*.html` and `assets/` from the repo root. Those files now live in `public/`, so **the old commands no longer work**. Builds of `main` will fail until you update them.

In **Workers & Pages → blueproton → Settings → Build**, set:

| Field          | Old value (remove)                                                                  | New value            |
|----------------|--------------------------------------------------------------------------------------|----------------------|
| Build command  | `mkdir -p dist && cp -r *.html assets dist/`                                          | *(leave empty)*      |
| Deploy command | `npx wrangler deploy --name blueproton --assets dist --compatibility-date 2026-10-13` | `npx wrangler deploy` |

`npx wrangler deploy` reads `wrangler.jsonc`, which already holds the worker name (`blueproton`), the compatibility date and the assets folder. Then retry the latest deployment, or push a commit.

## Local preview

```sh
npx wrangler dev        # http://localhost:8787 — same routing, headers and 404 page as production
```

Opening the HTML files directly from disk will not work well, because links and assets use root-relative paths.

## Adding or replacing a photo

1. Put the original in `originals/` (lowercase name, no spaces).
2. Export WebP versions to `public/assets/img/`, for example with ImageMagick:
   `magick originals/photo.jpg -auto-orient -strip -resize 1280x -quality 76 public/assets/img/photo-1280.webp`
   (repeat for 640 and other widths you need)
3. Reference them with `srcset`/`sizes`, `width`/`height`, `loading="lazy"` (unless the image is visible at the top of the page) and `decoding="async"`.
4. Images are cached for 30 days. If you change an image's content, give the file a new name.

## Content Security Policy

`public/_headers` sets a strict CSP: no inline scripts, no inline styles, fonts from Google Fonts only, and form posts only to Formspree. Put new CSS/JS in `public/css` / `public/js`, not in `style=""` or `<script>` blocks. If you add a third-party service, add its domain to the CSP.
