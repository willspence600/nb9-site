# Naked By 9 — Project Context

Single-page website for the band Naked By 9. Originally a Vite/React SPA, ported to
Next.js static export for SEO. Deployed on Cloudflare Pages, free tier.

## Repo layout

Git root is `/Users/willspence/code/nb9-site` and contains two apps:

- **`nb9-next/`** — the ACTIVE app. All work happens here.
- **`nb9-react-website/`** — the original Vite/React SPA, preserved for reference only.
  Do not deploy or edit unless explicitly asked.

## Stack (nb9-next)

- Next.js 15.5, App Router, JavaScript (`.jsx`, not TS).
- **Tailwind v3** — deliberately pinned. Config/classes are v3. Do NOT upgrade to
  Tailwind v4 (would break the config format and utility classes). `tailwind.config.js`
  uses CommonJS `module.exports`.
- Static export: `output: 'export'` in `next.config.mjs` → builds to `out/`.
  `images.unoptimized: true` (no image-optimization server in a static export).
- Inter font self-hosted via `next/font/google`, exposed as CSS var `--font-inter`
  (referenced in `tailwind.config.js` fontFamily). Do not re-add a Google Fonts
  `<link>` — that reintroduces a render-blocking request.

## Build & deploy

```bash
cd nb9-next
npm run build                                                   # → out/
npx wrangler pages deploy out --project-name=nb9-site --branch=main
```

- Cloudflare Pages project name: **nb9-site** (production branch `main`).
- Custom domain **nakedbyninemusic.com** is attached in the Cloudflare dashboard
  and auto-serves the latest deploy. Wrangler CANNOT attach custom domains — that is
  dashboard-only (Workers & Pages → nb9-site → Custom domains).
- User is already authenticated with `wrangler` (`npx wrangler login` done).

## Client vs server components

Almost everything is a server component. Only three are `'use client'`:

- `components/TvStatic.jsx` — canvas TV-static effect. Watches its **sibling `<img>`
  in the same container** and stays at opacity 0 until that image fires `load`
  (or `error`), then fades in over 400ms. This prevents bare static flashing before
  photos load. Every static overlay sits next to its image in a shared container, so
  this one component covers hero, tour, videos, and the music cover.
- `components/sections/Tour.jsx` — recomputes the upcoming/past show split after
  mount (a static export freezes render output at build time). First render uses
  `process.env.NEXT_PUBLIC_BUILD_DATE` (set in `next.config.mjs`) so server HTML and
  first client render match and hydration doesn't mismatch; a `useEffect` then swaps
  in the real `new Date()`.
- `components/Header.jsx` — hamburger menu state (see Mobile below).

## SEO (all prerendered into static HTML — verify in `out/index.html`)

- `app/layout.jsx` — `metadata` export: title, description, canonical,
  Open Graph + Twitter cards (OG image is `/images/hero.jpg`). `metadataBase` is
  `https://nakedbyninemusic.com`.
- `components/StructuredData.jsx` — JSON-LD `@graph` with a `MusicGroup` (band, genre,
  Kingston ON, "Losing You" as a MusicRecording) and one `MusicEvent` per entry in
  `data/tourDates.js`. `sameAs` is derived from `socialLinks` in `data/siteConfig.js`.
- `app/sitemap.js` and `app/robots.js` — Next file conventions, both `force-static`.
- Favicons: `app/icon.png` (32px) and `app/apple-icon.png` (180px), generated from
  `public/images/header-icon.jpg` (the circular band mark). Next's file convention
  auto-emits the `<link rel="icon">` / `apple-touch-icon` tags.

## Data / content

- `data/siteConfig.js` — nav links, social links (REAL profile URLs: Instagram
  `naked_by_9`, YouTube `@nakedby9music`, Spotify + Apple Music artist pages), image paths.
- `data/tourDates.js` — add shows here; page rows AND JSON-LD MusicEvents regenerate.
- Contact email: `nakedby9music@gmail.com`.
- To add releases/videos, see the `release`/`videos` consts in
  `components/sections/Music.jsx` and `Videos.jsx`.

## Mobile (recent fixes — iOS Safari)

- Header: hamburger menu on mobile (logo left, Menu/X button right). Dropdown has
  stacked nav links + social icons; closes on link tap, X tap, or Escape;
  `aria-expanded`/`aria-controls` wired. Desktop nav (`md:`) unchanged.
- `html`/`body` in `globals.css` have `overflow-x: clip` and
  `overscroll-behavior-x: none` to kill iOS sideways page rubber-banding.
- Hero uses `min-h-svh` (not `min-h-screen`/`100vh`) so it fits under Safari's
  collapsing URL bar.
- Open call: on tablet widths below the desktop breakpoint, social icons live inside
  the hamburger menu, not the top bar. User may want them back in the bar (one class).

## Animations

- Hero entrance in `globals.css`: `.hero-fade` (background, 1s) and `.hero-rise`
  (headline/tagline/buttons rise + fade, staggered 200/400/600ms via inline
  `animationDelay`). Both disabled under `prefers-reduced-motion`.

## Conventions & gotchas

- Commit messages end with a `Co-Authored-By: Claude <model> <noreply@anthropic.com>`
  line. Commit/push only when asked.
- macOS `sips` format conversion needs `-s format png` — just renaming `.jpg`→`.png`
  leaves it a JPEG (bit us when generating favicons).
- Strip share/tracking params (`?si=...`) from streaming URLs pasted by the user.
- After any change, the loop is: `npm run build` → check `out/` → `wrangler pages deploy out`.

## Open / suggested follow-ups

- Custom domain was still activating (DNS/SSL) as of last session — verify it serves.
- Suggested but NOT done: add the site to Google Search Console (verify via DNS,
  submit `sitemap.xml`) to speed indexing; validate JSON-LD at validator.schema.org.
- Google search result still showed the default globe favicon at last check — that's
  Google's index-refresh lag, not a site bug; the favicon is deployed.
