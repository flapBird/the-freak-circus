import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';
import { UNVERIFIED_CLAIMS, sourceLabel, sourceUrl } from '@/lib/game-facts';
import { tMsg } from '@/lib/messages';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: tMsg(locale, 'about.s0'),
    description: tMsg(locale, 'about.s1'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/about`,
    availableLocales: CORE_LOCALES.about,
    locale,
  });
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <main>
      <header className="page-hero">
        <div className="page-container">
          <h1>{tMsg(locale, 'about.s2')}</h1>
          <p className="page-hero-lead">
            {tMsg(locale, 'about.x0')}
          </p>
        </div>
      </header>

      <section className="page-section page-container text-page">
        <article className="longform-copy">
          <h2>{tMsg(locale, 'about.s3')}</h2>
          <p>
            {tMsg(locale, 'about.x1')}
          </p>
          <p>
            {tMsg(locale, 'about.x2')}
          </p>
          <p>
            {tMsg(locale, 'about.x3')}
          </p>

          <h2>{tMsg(locale, 'about.s4')}</h2>
          <p>
            {tMsg(locale, 'about.x4')}
          </p>
          <p>
            {tMsg(locale, 'about.x5')}
          </p>
          <p>
            {tMsg(locale, 'about.x6')}
          </p>
          <ul>
            {UNVERIFIED_CLAIMS.map((item) => (
              <li key={item.claim}>
                <strong>{item.claim}</strong>
                {' — '}
                {item.reality}
              </li>
            ))}
          </ul>

          <h2>{tMsg(locale, 'about.s5')}</h2>
          <p>
            {tMsg(locale, 'about.x7')}
          </p>
          <p>
            {tMsg(locale, 'about.x8')}
          </p>

          <h2>{tMsg(locale, 'about.s6')}</h2>
          <p>
            {tMsg(locale, 'about.x9')}
          </p>
          <ul>
            {(['itchPage', 'devlog', 'faq', 'askboxFaq', 'amaPopular', 'amaAgeOrder'] as const).map((key) => (
              <li key={key}>
                <a href={sourceUrl(key)} target="_blank" rel="noopener noreferrer">
                  {sourceLabel(key)} ↗
                </a>
              </li>
            ))}
          </ul>
          <p>
            {tMsg(locale, 'about.x10')}
          </p>

          <h2>{tMsg(locale, 'about.s7')}</h2>
          <p>
            {tMsg(locale, 'about.x11')}
          </p>
          <p>
            {tMsg(locale, 'about.x12')}
          </p>
          <p>
            {tMsg(locale, 'about.x13')}
          </p>

          <h2>{tMsg(locale, 'about.s8')}</h2>
          <p>
            {tMsg(locale, 'about.x14')}
          </p>
          <p>
            {tMsg(locale, 'about.x15')}
          </p>

          <h2>{tMsg(locale, 'about.s9')}</h2>
          <p>
            {tMsg(locale, 'about.x16')}
          </p>
          <p>
            {tMsg(locale, 'about.x17')}
          </p>

          <h2>{tMsg(locale, 'about.s10')}</h2>
          <p>
            {tMsg(locale, 'about.x18')}
          </p>
          <p>
            {tMsg(locale, 'about.x19')}
          </p>
        </article>
      </section>

      <section className="page-section page-container">
        <div className="reference-card">
          <h2>{tMsg(locale, 'about.s11')}</h2>
          <div className="blog-related-list">
            <Link href={`${p}/endings`}>
              <span>{tMsg(locale, 'about.s12')}</span>
              <small>{tMsg(locale, 'about.s13')} →</small>
            </Link>
            <Link href={`${p}/characters/heights`}>
              <span>{tMsg(locale, 'about.s14')}</span>
              <small>{tMsg(locale, 'about.s15')} →</small>
            </Link>
            <Link href={`${p}/characters`}>
              <span>{tMsg(locale, 'about.s16')}</span>
              <small>{tMsg(locale, 'about.s17')} →</small>
            </Link>
            <Link href={`${p}/download`}>
              <span>{tMsg(locale, 'about.s18')}</span>
              <small>{tMsg(locale, 'about.s19')} →</small>
            </Link>
            <Link href={`${p}/save`}>
              <span>{tMsg(locale, 'about.s20')}</span>
              <small>{tMsg(locale, 'about.s21')} →</small>
            </Link>
            <Link href={`${p}/faq`}>
              <span>{tMsg(locale, 'about.s22')}</span>
              <small>{tMsg(locale, 'about.s23')} →</small>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
