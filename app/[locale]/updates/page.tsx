import SchemaMarkup from '@/components/SchemaMarkup';
import { getNewsPosts } from '@/lib/news';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { editorialLocale, OFFICIAL_DEVLOG_URL } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  const path = '/updates';
  return buildMetadata({
    title: tMsg(locale, 'updates.p0'),
    description: zh
      ? '查看 The Freak Circus 的版本公告、开发进度、维护记录与最新游戏动态。'
      : 'Follow The Freak Circus release notes, development progress, maintenance updates, and the latest game news.',
    canonical: `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`,
    availableLocales: CORE_LOCALES.updates,
    locale,
  });
}

function formatDate(date: string, locale: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: locale === 'zh' ? 'long' : 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function UpdatesPage({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  const posts = getNewsPosts(locale);
  const canonical = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/updates`;

  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: tMsg(locale, 'updates.p1'),
          description: zh
            ? 'The Freak Circus 的版本公告、开发进度与维护记录。'
            : 'Release notes, development progress, and maintenance updates for The Freak Circus.',
          url: canonical,
          mainEntity: posts.map((post) => ({
            '@type': 'Article',
            headline: post.title,
            datePublished: post.publishedAt,
            isBasedOn: post.sourceUrl,
            url: `${canonical}#${post.slug}`,
          })),
        }}
      />
      <main>
        <header className="page-hero">
          <div className="page-container">
            <h1>{tMsg(locale, 'updates.p2')}</h1>
            <p className="page-hero-lead">
              {zh
                ? '版本公告、开发进度和维护记录集中在一个连续页面中；每条摘要都标注日期，并链接回对应的一手公告。'
                : 'Release notes, development progress, and maintenance records collected in one continuous timeline, with dates and links back to each primary announcement.'}
            </p>
            <div className="page-hero-actions">
              <a className="button-primary" href={OFFICIAL_DEVLOG_URL} target="_blank" rel="noopener noreferrer">
                {tMsg(locale, 'updates.p3')} ↗
              </a>
            </div>
          </div>
        </header>

        <section className="page-section page-container updates-timeline" aria-label={tMsg(locale, 'updates.p4')}>
          {posts.map((post) => (
            <article className="update-detail-card" id={post.slug} key={post.slug}>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
              <h2>{post.title}</h2>
              <p className="update-detail-summary">{post.excerpt}</p>
              <div className="update-detail-body">
                {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <a className="source-chip" href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                {zh ? `阅读 ${post.sourceName} 原文` : `Read the original on ${post.sourceName}`} ↗
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
