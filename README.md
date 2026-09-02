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
- A related-games catalog with an allowlisted iframe player
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

The locale list is defined in `lib/seo.ts`. All seven locale routes are generated, but only the reviewed English and Simplified Chinese editions are currently indexable. Portuguese, Filipino, Vietnamese, Spanish, and Indonesian remain available to visitors and are marked `noindex` until their editorial content has been reviewed.

Localization is split into two layers:

- `messages/*.json` contains shared navigation and UI strings.
- `messages/content/*.json` contains structured, locale-specific content such as news entries.
- `lib/site-content.ts` contains source-led editorial copy and canonical external links. Editorial pages currently provide dedicated English and Chinese copy; the other routes fall back to English for this layer.

When adding a locale, update the locale declarations in `lib/seo.ts`, `components/LocaleSwitcher.tsx`, both message loaders, the relevant JSON files, and the routing rules in `next.config.js`.

## Project structure

```text
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale validation, metadata, analytics, shell
│   │   ├── page.tsx            # Home page
│   │   ├── characters/         # Character index and detail routes
│   │   ├── games/              # Related-games catalog and player routes
│   │   ├── blog/               # Article index and detail routes
│   │   └── ...                 # Wiki, updates, download, legal, and other pages
│   ├── robots.ts               # robots.txt metadata route
│   ├── sitemap.xml/route.ts     # Dynamically generated XML sitemap
│   └── globals.css              # Global design system and component styles
├── components/
│   ├── games/                   # Game cards and iframe player
│   ├── GameEmbed.tsx            # Main game player
│   ├── Header.tsx               # Navigation and locale controls
│   ├── HomeContent.tsx          # Home-page sections
│   ├── PageShell.tsx            # Shared header/footer shell
│   ├── SchemaMarkup.tsx         # JSON-LD output
│   └── ...                      # Images, ads, footer, and layout helpers
├── data/
│   ├── games.ts                 # Related-game catalog and embed allowlist
│   └── community-posts.ts       # Curated community feed
├── lib/
│   ├── blog-posts.ts            # Localized article records
│   ├── localized-content.ts     # Structured-content locale loader
│   ├── messages.ts              # UI-message locale loader
│   ├── news.ts                  # Update helpers
│   ├── seo.ts                   # Site constants and metadata builder
│   └── site-content.ts          # Editorial content and official source URLs
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

### Blog posts and updates

- Add or edit articles in `lib/blog-posts.ts`.
- Add localized update records in `messages/content/<locale>.json`.
- Update `SITE_LAST_MODIFIED` in `app/sitemap.xml/route.ts` when a broad site revision should be reflected in the sitemap.

Blog slugs are included in the sitemap automatically. Update entries are rendered as anchors on `/updates` and link back to their primary sources.

### Community posts

Community cards are defined in `data/community-posts.ts`. Keep the creator, platform, source URL, publication date, localized summary, image attribution, and sensitive-content flag accurate. Store approved local media under `public/images/community/`.

### Related games

Add a `GameRecord` to `data/games.ts` and place its cover in `public/images/games/`. Public slugs are generated from the game title.

For playable browser builds, `gameResourcePath` may be either:

1. A same-site path beginning with `/`, after uploading the complete HTML5 build and all referenced assets.
2. A full URL whose origin appears in `GAME_EMBED_ORIGINS`.

Unknown remote origins are rejected. Leave `gameResourcePath` empty to show the game detail page without enabling the player.

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
- Only locales in `INDEXABLE_LOCALES` are included in `hreflang` and sitemap output.
- Google Fonts, Google AdSense, optional GA4, game iframes, and linked third-party sources may make external requests in the browser.
- The main game iframe is sandboxed and lazy-started. Related-game iframes are restricted to the origin allowlist in `data/games.ts`.

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
