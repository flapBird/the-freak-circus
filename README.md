# The Freak Circus — Unofficial Fan Site

> [https://thefreakcircus.help/](https://thefreakcircus.help/) — A comprehensive fan resource for *The Freak Circus* psychological horror visual novel by Garula (Neko Bueno).

---

## About

This is an unofficial fan website dedicated to *The Freak Circus*, a dark visual novel with branching narratives, gothic artwork, and morally complex characters. The site provides:

- **Optional in-browser player** — A third-party embedded player is available; it is not represented as an official Garula or itch.io service. Use the official itch.io page for developer-supported access and downloads.
- **Character guides** — Detailed profiles for all 6 characters with route tips, traits, and personality breakdowns
- **Walkthroughs** — Day-by-day guides covering all choice points and endings
- **Wiki & Lore** — Setting background, glossary of terms, developer credits, and update timeline
- **Multi-language support** — Available in English, Portuguese, Filipino, Vietnamese, Spanish, Indonesian, and Chinese (Simplified)
- **Community** — Fan art showcase, official links, and community resources
- **News** — Development updates and version release notes

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Fonts | Cinzel Decorative (headings), Crimson Text (body) |
| Icons | Lucide React |
| Geolocation | geoip-lite for IP-based language detection |
| Deployment | Vercel |

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout (fonts, analytics, SchemaMarkup)
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Robots.txt with AI crawler blocking
│   ├── page.tsx                # Root / — locale detection + redirect
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout (Header + content + Footer)
│   │   ├── page.tsx            # Home page with game embed
│   │   ├── about/              # About the game & FAQ
│   │   ├── characters/         # Character cards list
│   │   │   └── [slug]/         # Individual character detail pages
│   │   ├── walkthrough/        # Walkthrough hub
│   │   │   ├── day-1/          # Day 1 guide
│   │   │   ├── day-2/          # Day 2 guide
│   │   │   └── day-3/          # Day 3 (coming soon)
│   │   ├── wiki/               # Lore, glossary, credits, timeline
│   │   ├── community/          # Fan art & community links
│   │   ├── news/               # Development updates
│   │   ├── blog/               # Blog posts
│   │   │   └── [slug]/         # Individual blog post
│   │   ├── contact/            # Contact page
│   │   ├── privacy/            # Privacy policy
│   │   └── terms/              # Terms of service
├── components/
│   ├── Header.tsx              # Sticky navigation header
│   ├── Footer.tsx              # Footer with legal links
│   ├── PageShell.tsx           # Shared layout wrapper (Header + Footer)
│   ├── HomeContent.tsx         # Home page content component
│   ├── GameEmbed.tsx           # In-browser game iframe + Like/Reload/Fullscreen toolbar
│   ├── SidebarLayout.tsx       # Content + right sidebar ad layout
│   ├── SchemaMarkup.tsx        # JSON-LD structured data
│   ├── LocaleSwitcher.tsx      # Language selector with country flags
│   ├── SafeImage.tsx           # Image with fallback placeholder
│   ├── AdSlot.tsx              # Ad placement component
│   └── AdBanner.tsx            # Adsterra banner integration
├── lib/
│   ├── messages.ts             # Static message loader (bypasses next-intl)
│   ├── seo.ts                  # Metadata builder (title, description, OG)
│   └── blog-posts.ts           # Blog post data
├── messages/
│   ├── en.json                 # English translations (complete)
│   ├── pt.json                 # Portuguese
│   ├── es.json                 # Spanish
│   ├── fil.json                # Filipino
│   ├── vi.json                 # Vietnamese
│   ├── id.json                 # Indonesian
│   └── zh.json                 # Chinese (Simplified)
└── public/
    ├── images/
    │   ├── characters/          # Character gallery images
    │   ├── home/                # Home page section images
    │   └── community/           # Community fan art
    ├── sitemap.xml              # Auto-generated static sitemap
    ├── og-image.jpg             # Open Graph default image
    └── the-freak-circus-cover.jpg
```

## Key Features

### Multi-Language Support
7 languages with automatic detection via IP geolocation, falling back to English. Users can switch languages via the flag selector in the header. Content translations are maintained as JSON message files under `/messages/`.



### Dark Gothic Theme
Custom Tailwind configuration with a dark circus-inspired color palette. Two serif fonts: decorative Cinzel Decorative for headings and readable Crimson Text for body copy.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000` by default.

## Images

Place character, home page, and community images in `public/images/` following the naming conventions in `IMAGES.md`. WebP format is preferred.

## Deployment

Deployed on Vercel. The site uses:
- `geoip-lite` for IP-based language detection (database copied at build time)
- Static sitemap generation
- Server-side language detection with cookie-based preference persistence

## License

This is a fan project. All game content belongs to Garula (Neko Bueno). Site code is provided as-is for educational and fan reference purposes.

---

*Built with Next.js 14 • TypeScript • Tailwind CSS • geoip-lite*
