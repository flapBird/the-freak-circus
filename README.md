# The Freak Circus — Unofficial Fan Site

An independent, multilingual fan resource for *The Freak Circus*, the psychological-horror visual novel by Garula (Neko Bueno).

**Live site:** [thefreakcircus.help](https://thefreakcircus.help/)

![The Freak Circus cover artwork](public/the-freak-circus-cover.jpg)

> [!IMPORTANT]
> This project is not affiliated with, endorsed by, or operated by Garula or itch.io. It does not repackage or distribute the game. Game downloads and developer-supported access should come from the official itch.io page.

## What the site includes

- Version-aware character profiles for Pierrot, Harlequin, Jester, Doctor, and Ticket Taker
- A browser player that loads the hosted HTML5 build only after user interaction
- Editorial pages for the current prototype, Day 3 status, downloads, lore, and development updates
- An article library with build explainers, player guides, and rumor checks
- A curated community feed with source and attribution fields
- A community fan art gallery with character filters, source records, and image previews
- Seven locale routes: English, Portuguese, Filipino, Vietnamese, Spanish, Indonesian, and Simplified Chinese
- SEO metadata, canonical and `hreflang` links, JSON-LD, robots rules, and a dynamic XML sitemap

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 App Router |
| UI | React 18 + TypeScript |
| Styling | Tailwind CSS 3 + global CSS |
| Content | TypeScript data modules + JSON locale files |
| Images | `next/image`, local assets, and an allowlisted remote CDN |
| Analytics | Optional Google Analytics 4 in Vercel production |
| Hosting | Vercel-ready |

## Getting started

### Prerequisites

- Node.js 18.17 or newer
- npm (the repository includes `package-lock.json`)

### Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The English edition is served without a locale prefix; for example, `/characters` is internally rewritten to `/en/characters`.

The environment file is optional for normal local development. If analytics is not needed, leave the example value unchanged or remove it.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run the Next.js ESLint checks |

The repository does not currently track an ESLint configuration. On the first `npm run lint`, Next.js asks whether to create a Strict or Base configuration; commit the generated config before relying on the lint command in CI.

At minimum, verify a production build before deploying a content or code change:

```bash
npm run build
```

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID, in the form `G-XXXXXXXXXX` |

Analytics is loaded only when the ID is valid and Vercel sets `VERCEL_ENV=production`. It is intentionally disabled in local, preview, and non-Vercel environments.

## Routing and localization

All application pages live under `app/[locale]/`. Next.js rewrites expose English at clean, prefix-free URLs while other languages retain a locale prefix:

| Edition | Example URL |
| --- | --- |
| English | `/characters/pierrot` |
| Simplified Chinese | `/zh/characters/pierrot` |
| Portuguese | `/pt/characters/pierrot` |

The locale list is defined in `lib/seo.ts`. All seven locale routes are generated. Indexability is decided **per page, per language**, not by a single site-wide switch: a locale is indexed for a page only when that page's body text actually exists in that language.

| Page group | Indexed locales |
| --- | --- |
| Home page | en, zh, es, pt, vi, id, fil |
| Guide pages (`/endings`, `/characters/heights`, `/save`, `/faq`) | en, zh, es, pt, vi, id |
| Character profiles | en, zh, es, pt, vi, id, fil |
| Blog posts | en, zh (per slug) |
| Core pages (wiki, day-3, about, …) | en, zh |

Every locale must also be reachable from the interface. `components/LocaleSwitcher.tsx` lists all seven and renders each as a real `<a href>`, so a language is both clickable by a reader and followable by a crawler. A language that is translated but not linked is a language that is never read and never indexed.

A page whose content falls back to English is marked `noindex, follow` in that locale, and its `hreflang` cluster only advertises locales where a real translation exists. This avoids the self-inflicted mismatch where a Spanish URL serves English body copy while declaring `hreflang="es"`.

The mechanism lives in three files:

- `lib/game-facts.ts` — verified first-party facts with source links. Heights, ages, endings, and platforms come from here, never from prose.
- `lib/editorial-content.ts` — resolves content for a locale and reports which locales have a translation.
- `lib/content-availability.ts` — the per-page availability lists, derived from the translation modules so they cannot drift from what is actually published.

Localization is split into two layers:

- `messages/*.json` contains shared UI strings. Only six namespaces are live: `game`, `blog`, `meta`, `ui`, `landing` (home page copy) and `siteFooter`. A missing key falls back to English rather than rendering empty, but `npm run verify:translations` reports any locale that is missing a whole namespace, so a silent English fallback does not ship unnoticed.
- `messages/content/*.json` contains structured, locale-specific content such as news entries.
- `lib/site-content.ts` contains source-led editorial copy and canonical external links.
- `lib/topic-content*.ts` and `lib/character-content-*.ts` contain the long-form guide and character content, one file per locale.

To add a locale's guide pages: write `lib/topic-content-<locale>.ts` exporting `guideContent<Locale>`, register it in `lib/editorial-content.ts`, and it becomes indexable for that locale automatically. Translations supply only the editorial fields — measurements are always merged from the official height chart in `lib/game-facts.ts` so a translation can never alter a published number.

When adding a locale, update the locale declarations in `lib/seo.ts`, `components/LocaleSwitcher.tsx`, both message loaders, the relevant JSON files, and the routing rules in `next.config.js`.

## Project structure

```text
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale validation, metadata, analytics, shell
│   │   ├── page.tsx            # Home page
│   │   ├── characters/         # Character index, detail routes, and the height chart
│   │   ├── fan-art/            # Community artwork gallery
│   │   ├── blog/               # Article index and detail routes
│   │   ├── endings/            # Endings and routes guide
│   │   ├── save/               # Saving and resuming guide
│   │   ├── faq/                # Master FAQ
│   │   └── ...                 # Wiki, updates, download, legal, and other pages
│   ├── robots.ts               # robots.txt metadata route
│   ├── sitemap.xml/route.ts     # Dynamically generated XML sitemap
│   └── globals.css              # Global design system and component styles
├── components/
│   ├── FanArtGrid.tsx           # Artwork grid and accessible image dialog
│   ├── GameEmbed.tsx            # Main game player
│   ├── GuidePageLayout.tsx      # Shared layout for the guide pages
│   ├── Header.tsx               # Navigation and locale controls
│   ├── HomeContent.tsx          # Home-page sections
│   ├── PageShell.tsx            # Shared header/footer shell
│   ├── SchemaMarkup.tsx         # JSON-LD output
│   └── ...                      # Images, ads, footer, and layout helpers
├── data/
│   ├── fan-art.ts               # Curated artwork, character tags, and credits
│   └── community-posts.ts       # Curated community feed
├── lib/
│   ├── blog-posts.ts            # Localized article records
│   ├── character-content.ts     # Character profile content and the chart merge helper
│   ├── content-availability.ts  # Which locales have a real translation of what
│   ├── editorial-content.ts     # Locale resolver across all content modules
│   ├── game-facts.ts            # Verified first-party facts with source links
│   ├── localized-content.ts     # Structured-content locale loader
│   ├── messages.ts              # UI-message locale loader
│   ├── news.ts                  # Update helpers
│   ├── seo.ts                   # Site constants and metadata builder
│   ├── site-content.ts          # Editorial content and official source URLs
│   ├── topic-content.ts         # Guide page content (English and Chinese)
│   └── topic-content-*.ts       # Per-locale guide page translations
├── messages/
│   ├── content/                 # Structured content by locale
│   └── *.json                   # Shared UI messages by locale
├── public/                      # Static images, icons, ads.txt, and llms.txt
├── types/                       # Local TypeScript declarations
├── next.config.js               # Image policy, redirects, and rewrites
└── tailwind.config.ts           # Theme tokens and Tailwind configuration
```

## Updating content

### Character and editorial content

Edit `lib/site-content.ts` for character profiles, official source URLs, and source-led English/Chinese copy. Character slugs are explicit; keep links, images, and any redirect rules synchronized when changing one.

The deep character profiles live in `lib/character-content.ts` (English and Chinese) with per-locale translations in `lib/character-content-<locale>.ts`. A translation supplies only the editorial fields — `role`, `intro`, `sections`, and `faq`. The measurements (`cm`, `ageOrder`, `strengthRank`, …) are merged in from the official height chart via the exported `profile()` helper, so a translated page can never report a different number than the English one.

### Guide pages

`/endings`, `/characters/heights`, `/save`, and `/faq` are driven by `lib/topic-content.ts` (English and Chinese) and `lib/topic-content-<locale>.ts` for other languages. Each page record holds a `quickFacts` table, a list of `sections`, and an `faq` array, all rendered by `components/GuidePageLayout.tsx`.

When you add a guide page:

1. Add it to the `guideContent` record in `lib/topic-content.ts` for English and Chinese.
2. Register the slug in `lib/content-availability.ts` under `GUIDE_LOCALES` so the sitemap and hreflang pick it up.
3. Add the path to `staticPaths` in `app/sitemap.xml/route.ts`.
4. Add a rewrite for the prefix-free English URL in `next.config.js`. **A new root-level page that is missing its rewrite returns 404 at the root even though the locale-prefixed URL works** — this is the single easiest mistake to make when adding a page here.

The `related` array in a guide record holds internal slugs and must be copied verbatim between locales; only the visible text is translated.

### Verification scripts

- `npm run verify:facts` reads the published height chart and checks every height-rank claim in every locale against it. A superlative such as "the second tallest" is hand-written prose that cannot be derived automatically, so it drifts silently when the chart changes.
- `npm run verify:translations` checks that every locale's message file carries the same structure as the English one, and lists values that are still identical to English so a human can check whether that is intentional.
- `npm run verify` runs the build as well.

### Blog posts and updates

- Add or edit articles in `lib/blog-posts.ts`.
- Add localized update records in `messages/content/<locale>.json`.
- Update `SITE_LAST_MODIFIED` in `app/sitemap.xml/route.ts` when a broad site revision should be reflected in the sitemap.

Blog slugs are included in the sitemap automatically. Update entries are rendered as anchors on `/updates` and link back to their primary sources.

### Community posts

Community cards are defined in `data/community-posts.ts`. Keep the creator, platform, source URL, publication date, localized summary, image attribution, and sensitive-content flag accurate. Store approved local media under `public/images/community/`. When a source post includes images, select one representative original image for the card, keep its original image URL in a data comment, and add English/Chinese alt text.

Use the original post's publication date, not the date it was added here. After checking the official blog, update `COMMUNITY_LAST_CHECKED`. Posts appear newest first. Add `day3` metadata to official Day 3 posts: use `kind: 'development'` for progress reports and `kind: 'notice'` for related scheduling announcements, with a localized `headline` and optional `points`. The Day 3 page automatically uses these records for its timeline and the latest development post for its main summary, FAQ, and sidebar. Notices do not replace the latest development report. This shares reviewed content between pages; it does not fetch new Tumblr posts automatically.

### Fan art gallery

Curate artwork in `data/fan-art.ts`. Each image has a stable ID, character slug, creator credit, title, and original post URL. Keep original signatures and watermarks intact. Only tag characters actually visible in that image; do not fill rows with duplicate artwork or official game screenshots. Remote thumbnails are loaded directly from the original Tumblr media host; no social scripts are injected.

`/fan-art` supports shareable `?character=pierrot` filters. The homepage shows four mixed artworks and character profiles select their first four matching images. Cards show the character name without creator labels or external links. Images open in an accessible dialog showing only the artwork and title, without creator labels or external links. Keep source and attribution information accurate when adding or removing entries. The former `/games` routes permanently redirect to `/fan-art` in the same locale and are excluded from the sitemap.

Initial curation status (2026-09-26): 14 images from 8 Tumblr posts. Pierrot, Harlequin, and Ticket Taker have four images each; Jester has two, and Doctor still needs four. The remaining six images still need source verification. Do not treat the empty-state copy as completion of the four-images-per-character requirement.

Mobile layout: two columns through 760px, three on tablets through 1000px, and four on wider screens. Filters and the close button have at least 44px touch targets. The image dialog fits the viewport, keeps its close control visible, and restores the page's scroll position on dismissal. Verify small portrait and short landscape viewports when changing these shared components; browser viewport checks do not replace testing mobile Safari on a physical device.

### Images

Follow [IMAGES.md](IMAGES.md) for the current home-page and character naming conventions.

- Prefer WebP for editorial images; PNG and JPEG are also supported.
- Keep editorial assets below 500 KB where practical.
- Put static assets under `public/images/<section>/` and reference them from the site root, such as `/images/characters/pierrot-1.webp`.
- Add any new external image host to `images.remotePatterns` in `next.config.js` only after reviewing the source and ownership requirements.

## SEO and external services

- Page metadata and canonical URLs are built through `lib/seo.ts`.
- The sitemap is generated at request time by `app/sitemap.xml/route.ts` and cached for one hour at the edge.
- English is the `x-default` language and uses prefix-free canonical URLs.
- A locale appears in `hreflang` and in the sitemap only when that page has a reviewed translation in it. `buildMetadata` takes `availableLocales` and `locale`; when the active locale is outside that list the page is marked `noindex, follow` automatically.
- The root URL uses a trailing slash consistently across the canonical, the `hreflang` cluster, and the sitemap entry, so the homepage does not present two live variants of itself.
- Google Fonts, Google AdSense, optional GA4, game iframes, and linked third-party sources may make external requests in the browser.
- The main game iframe is sandboxed and lazy-started.

Review the privacy page and consent requirements before adding or changing analytics, advertising, embeds, or other third-party scripts.

## Deployment

The project can be deployed as a standard Next.js application on Vercel:

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Optionally set `NEXT_PUBLIC_GA_ID` for Production only.
4. Deploy and verify `/`, `/zh`, `/robots.txt`, and `/sitemap.xml`.

The project does not require a database or a separate content service; all content is built from files in the repository.

## Rights and disclaimer

This is a fan-maintained project. *The Freak Circus*, its characters, artwork, and other game materials belong to their respective rights holders. Community artwork remains the property of its original creators.

No open-source license is currently included in this repository. Do not assume the site code or bundled media can be reused, redistributed, or relicensed without permission from the relevant owner.

If you find outdated build information, an incorrect attribution, or material that should be removed, use the contact page on the live site and identify the affected URL.
