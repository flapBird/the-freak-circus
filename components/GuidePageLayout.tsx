import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { type GuidePage, type EditorialLocale } from '@/lib/topic-content';
import { tMsg } from '@/lib/messages';
import { SOURCES, sourceUrl, type SourceKey } from '@/lib/game-facts';

type Props = {
  page: GuidePage;
  locale: string;
  lang: EditorialLocale;
  /** Slug used to build the canonical URL for this guide. */
  pathSlug: string;
  /** Image shown in the hero column. */
  image?: { src: string; alt: string };
  /** Extra pages linked from the related-guides footer. */
  extraRelated?: { href: string; label: string }[];
  /** Primary sources cited by the page, rendered as a source list. */
  sources?: SourceKey[];
};

const RELATED_LABEL: Record<string, { en: string; zh: string }> = {
  endings: { en: 'Endings and routes', zh: '结局与路线' },
  characters: { en: 'Character profiles', zh: '角色档案' },
  heights: { en: 'Heights and rankings', zh: '身高与排名' },
  'characters/heights': { en: 'Heights and rankings', zh: '身高与排名' },
  download: { en: 'Download guide', zh: '下载指南' },
  save: { en: 'Saving and resuming', zh: '存档与继续' },
  faq: { en: 'Frequently asked questions', zh: '常见问题' },
  wiki: { en: 'Wiki and lore', zh: 'Wiki 与世界观' },
  'day-3': { en: 'Day 3 status', zh: 'Day 3 状态' },
  blog: { en: 'All articles', zh: '全部文章' },
};

/**
 * Shared renderer for the guide pages. Every guide uses the same skeleton —
 * hero, quick facts, long-form sections, FAQ, sources, and related links — so
 * the pages read as one site and stay consistent as more are added.
 */
export default function GuidePageLayout({ page, locale, lang, pathSlug, image, extraRelated, sources = [] }: Props) {
  const zh = lang === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  const relatedHref = (slug: string) => {
    if (slug === 'characters/heights') return `${p}/characters/heights`;
    return `${p}/${slug}`;
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="guide-page">
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <header className="page-hero guide-hero">
        <div className="page-container guide-hero-inner">
          <div className="guide-hero-copy">
            <h1>{page.title}</h1>
            <p className="page-hero-lead">{page.intro}</p>
            <div className="page-hero-actions">
              <Link className="button-secondary" href={`${p}/characters`}>
                ← {tMsg(locale, 'guide.characterProfiles')}
              </Link>
              <Link className="button-primary" href={`${p}/faq`}>
                {tMsg(locale, 'guide.readFaq')}
              </Link>
            </div>
          </div>
          {image ? (
            <div className="guide-hero-art">
              <SafeImage src={image.src} alt={image.alt} width={740} height={940} priority />
            </div>
          ) : null}
        </div>
      </header>

      <section className="page-section page-container guide-body">
        <aside className="guide-sidebar">
          <div className="reference-card guide-quick-facts">
            <h2>{tMsg(locale, 'guide.quickFacts')}</h2>
            <dl className="guide-fact-table">
              {page.quickFacts.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.value}
                    {row.note ? <small>{row.note}</small> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reference-card guide-source-card">
            <h2>{tMsg(lang, 'guide.sourcesTitle')}</h2>
            <p>{tMsg(lang, 'guide.sourcesLead')}</p>
            <ul>
              {(sources.length ? sources : (['itchPage'] as SourceKey[])).map((key) => (
                <li key={key}>
                  <a href={SOURCES[key].url} target="_blank" rel="noopener noreferrer">
                    {SOURCES[key].label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="guide-article">
          {page.sections.map((section) => (
            <section key={section.heading} className="guide-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="guide-list">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="guide-section guide-faq">
            <h2>{tMsg(locale, 'guide.faq')}</h2>
            <dl className="guide-faq-list">
              {page.faq.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <nav className="guide-related" aria-label={tMsg(locale, 'guide.relatedPages')}>
            <h2>{tMsg(locale, 'guide.continueReading')}</h2>
            <div>
              {page.related.map((slug) => (
                <Link key={slug} href={relatedHref(slug)}>
                  <span>{RELATED_LABEL[slug]?.[lang] ?? slug}</span>
                  <small>→</small>
                </Link>
              ))}
              {extraRelated?.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span>
                  <small>→</small>
                </Link>
              ))}
            </div>
          </nav>
        </article>
      </section>
    </main>
  );
}
