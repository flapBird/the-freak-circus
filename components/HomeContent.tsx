import Link from 'next/link';
import FanArtSection from './FanArtSection';
import SafeImage from '@/components/SafeImage';
import SchemaMarkup from './SchemaMarkup';
import GameEmbed from './GameEmbed';
import AdSlot from './AdSlot';
import { getNewsPosts } from '@/lib/news';
import {
  CharacterSlug,
  characterCopy,
  characterSlugs,
  editorialLocale,
  OFFICIAL_GAME_URL,
} from '@/lib/site-content';
import { rawMsg, tMsg } from '@/lib/messages';
import { formatUpdateDate } from '@/lib/day3-updates';

export default function HomeContent({ locale }: { locale: string }) {
  const lang = editorialLocale(locale);
  const p = locale === 'en' ? '' : `/${locale}`;
  const latestNews = getNewsPosts(locale).slice(0, 3);
  // The guide hub is the internal-link path into the pages that answer the
  // most-searched questions about this game. Without it, those pages are
  // reachable only through the sitemap, which is a weak discovery signal.
  const guideCards = rawMsg<{ href: string; title: string; text: string; cta: string }[]>(locale, 'landing.guideCards');

  return (
    <>
      <SchemaMarkup
        type="VideoGame"
        data={{
          name: 'The Freak Circus',
          description: tMsg(locale, 'landing.schemaDescription'),
          genre: ['Visual novel', 'Psychological horror', 'Romance'],
          author: { '@type': 'Person', name: 'Neko Bueno' },
          sameAs: OFFICIAL_GAME_URL,
          applicationCategory: 'Game',
          operatingSystem: 'HTML5, Windows, macOS, Linux, Android',
          contentRating: '18+',
        }}
      />

      <main className="home-page">
        <section className="home-hero">
          <div className="home-hero-art" aria-hidden="true" />
          <div className="home-hero-overlay" />
          <div className="page-container home-hero-content">
            <h1>The Freak Circus</h1>
            <HomeHeroLead locale={locale} />
            <div className="hero-actions">
              <a className="button-primary" href="#play">{tMsg(locale, 'landing.playHere')} <span aria-hidden="true">↓</span></a>
              <Link className="button-secondary" href={`${p}/wiki`}>{tMsg(locale, 'landing.learnMore')}</Link>
            </div>
          </div>
        </section>

        <section className="page-section play-section" id="play">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{tMsg(locale, 'landing.playTitle')}</h2>
            </div>
            <div className="play-stage">
              <GameEmbed locale={locale} />
            </div>
          </div>
        </section>

        <section className="page-section page-container what-game-section">
          <div className="section-heading section-heading-centered">
            <h2>{tMsg(locale, 'landing.whatTitle')}</h2>
          </div>
          <div className="what-game-panel">
            <article className="what-game-copy">
              <p>{tMsg(locale, 'landing.whatP1')}</p>
              <p>{tMsg(locale, 'landing.whatP2')}</p>
              <div className="what-game-links" aria-label={tMsg(locale, 'landing.meetCast')}>
                {characterSlugs.map((slug) => (
                  <Link key={slug} href={`${p}/characters/${slug}`}>{characterCopy[lang][slug].name}</Link>
                ))}
              </div>
            </article>
            <div className="what-game-art">
              <SafeImage src="/images/home/gameplay.webp" alt="The Freak Circus visual novel scene" width={780} height={520} />
            </div>
          </div>
          <div className="game-feature-grid">
            {rawMsg<{ title: string; text: string }[]>(locale, 'landing.whatFeatures').map((feature) => (
              <article key={feature.title} className="game-feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-tinted how-to-play-section">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{tMsg(locale, 'landing.howTitle')}</h2>
            </div>
            <div className="how-to-play-grid">
              {rawMsg<{ title: string; text: string }[]>(locale, 'landing.howSteps').map((step, index) => (
                <article className="how-to-play-card" key={step.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="how-to-play-action">
              <a className="button-primary" href="#play">{tMsg(locale, 'landing.howCta')} ↑</a>
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="page-container">
            <div className="section-heading character-section-heading">
              <h2>{tMsg(locale, 'landing.guidesTitle')}</h2>
            </div>
            <p className="section-lead">{tMsg(locale, 'landing.guidesLead')}</p>
            <div className="guide-hub-grid">
              {guideCards.map((card) => (
                <Link key={card.href} href={`${p}${card.href}`} className="guide-hub-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span>{card.cta} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="page-container">
            <div className="section-heading character-section-heading">
              <h2>{tMsg(locale, 'landing.castTitle')}</h2>
            </div>
            <div className="character-section-link">
              <Link href={`${p}/characters`} className="text-link">{tMsg(locale, 'landing.allCharacters')}</Link>
            </div>
            <div className="character-grid-home">
              {characterSlugs.map((slug) => {
                const character = characterCopy[lang][slug];
                return (
                  <Link href={`${p}/characters/${slug}`} className="character-card-home" key={slug}>
                    <div className="character-card-image">
                      <SafeImage src={character.image} alt={`${character.name} — The Freak Circus`} width={520} height={680} />
                    </div>
                    <div className="character-card-copy">
                      <h3>{character.name}</h3>
                      <p>{tMsg(locale, `landing.characters.${slug}`)}</p>
                      <span>{tMsg(locale, 'landing.storyLink').replace('{name}', character.name)} →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="page-container">
            <div className="section-heading section-heading-row">
              <h2>{tMsg(locale, 'landing.updateTitle')}</h2>
              <Link href={`${p}/updates`} className="text-link">{tMsg(locale, 'landing.allUpdates')} →</Link>
            </div>
            <div className="update-grid">
              {latestNews.map((post) => (
                <Link key={post.slug} href={`${p}/updates#${post.slug}`} className="update-card">
                  <time dateTime={post.publishedAt}>{formatUpdateDate(post.publishedAt, locale)}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span>{tMsg(locale, 'landing.readUpdate')} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FanArtSection locale={locale} />

        <AdSlot
          className="home-native-ad"
          label={tMsg(locale, 'landing.adLabel')}
          scriptSrc="https://pl29635653.effectivecpmnetwork.com/ad3a879f7acefad94dcedffe0b2a6b57/invoke.js"
          containerId="container-ad3a879f7acefad94dcedffe0b2a6b57"
        />

        <section className="page-section page-container faq-section">
          <div className="section-heading section-heading-centered">
            <h2>{tMsg(locale, 'landing.faqTitle')}</h2>
          </div>
          <div className="faq-grid">
            {rawMsg<{ q: string; a: string }[]>(locale, 'landing.faq').map((item) => (
              <article className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-tinted player-reviews-section">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{tMsg(locale, 'landing.reviewsTitle')}</h2>
            </div>
            <div className="player-review-grid">
              {playerReviews.map((review) => (
                <article className="player-review-card" key={review.author}>
                  <div className="player-review-author">
                    <span aria-hidden="true">{review.author.charAt(0).toUpperCase()}</span>
                    <div>
                      <h3>{review.author}</h3>
                      <time dateTime={review.isoDate}>{formatUpdateDate(review.isoDate, locale)}</time>
                    </div>
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

/**
 * Placeholder spellings accepted in landing.heroLead, mapped to the canonical
 * character slug. Translations may use the slug itself or a shorter alias.
 */
const HERO_LEAD_SLUGS: Record<string, CharacterSlug> = {
  pierrot: 'pierrot',
  harlequin: 'harlequin',
  jester: 'jester',
  'the-doctor': 'the-doctor',
  doctor: 'the-doctor',
  'ticket-taker': 'ticket-taker',
  ticketTaker: 'ticket-taker',
};

function HomeHeroLead({ locale }: { locale: string }) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const zh = editorialLocale(locale) === 'zh';
  const name = (slug: CharacterSlug, label: string) => (
    <Link className={`home-hero-character-link is-${slug}`} href={`${p}/characters/${slug}`}>
      {label}
    </Link>
  );

  // The hero lead is a translated template with character placeholders, so the
  // character names stay linked in every language. Translations may spell a
  // placeholder either as the character slug ({the-doctor}) or in a friendlier
  // camelCase form ({doctor}), so both forms map to the same slug.
  const heroLead = tMsg(locale, 'landing.heroLead');
  const heroParts = heroLead.split(/(\{(?:pierrot|harlequin|jester|the-doctor|doctor|ticket-taker|ticketTaker)\})/g);

  return (
    <p className="home-hero-lead">
      {heroParts.map((part, index) => {
        const slug = HERO_LEAD_SLUGS[part.replace(/[{}]/g, '')];
        if (!slug) return part;
        return name(slug, characterCopy[editorialLocale(locale)][slug].name);
      })}
    </p>
  );
}



const playerReviews = [
  {
    author: 'Dry land',
    isoDate: '2026-08-15',
    quote: 'Honestly this is peak of video game. I would pay 10 dollar for it if I had a bank account.',
  },
  {
    author: 'Luucyroach',
    isoDate: '2026-08-15',
    quote: 'WE. NEED. TO. SEE. JESTER MORE. He\'s so cute.',
  },
  {
    author: 'hellary020',
    isoDate: '2026-08-15',
    quote: 'I don\'t even know how many times I played this, the characters are soooo damn fine! I can\'t wait for day 3 to release.',
  },
  {
    author: 'Bby.rye',
    isoDate: '2026-08-14',
    quote: 'I came from Instagram and am absolutely obsessed. This game deserves much more recognition, and I\'m incredibly excited for the next update.',
  },
  {
    author: 'Kitunes19',
    isoDate: '2026-08-14',
    quote: 'I can\'t wait for the update! Great game, I can tell a lot of love was put into it.',
  },
  {
    author: 'yus337',
    isoDate: '2026-08-14',
    quote: 'This game is definitely worth trying and pretty interesting.',
  },
];



