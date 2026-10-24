import SafeImage from '@/components/SafeImage';
import { COMMUNITY_POSTS } from '@/data/community-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';

type PageProps = {
  params: { locale: string };
};

export function generateMetadata({ params: { locale } }: PageProps) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: tMsg(locale, 'community.p0'),
    description: tMsg(locale, 'community.x0'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/community`,
    availableLocales: CORE_LOCALES.community,
    locale,
  });
}

export default function CommunityPage({ params: { locale } }: PageProps) {
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const posts = [...COMMUNITY_POSTS]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return (
    <main className="community-page">
      <header className="page-hero">
        <div className="page-container">
          <h1>{tMsg(locale, 'community.p1')}</h1>
          <p className="page-hero-lead">{tMsg(locale, 'community.x1')}</p>
        </div>
      </header>

      <section className="page-section page-container community-feed-section">
        {posts.length > 0 ? (
          <div className="community-feed">
            {posts.map((post, index) => {
              const media = post.images?.filter((item) => isImagePath(item.src))
                ?? (post.image && post.imageAlt && isImagePath(post.image)
                  ? [{ src: post.image, alt: post.imageAlt }]
                  : []);

              return (
                <article id={post.id} className={`community-feed-item${post.featured ? ' is-featured' : ''}`} key={`${post.id}-${index}`}>
                  <div className="community-feed-avatar" aria-hidden="true">
                    {creatorInitials(post.creator)}
                  </div>
                  <div className="community-feed-content">
                    <header className="community-feed-header">
                      <div className="community-feed-author">
                        <strong>@{post.creator}</strong>
                        <span>
                          {post.platform}
                          <i aria-hidden="true">·</i>
                          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, lang)}</time>
                        </span>
                      </div>
                      {post.featured ? <small>{tMsg(locale, 'community.p2')}</small> : null}
                    </header>

                    <div className="community-feed-copy">
                      <h2>{post.title[lang]}</h2>
                      <p>{post.summary[lang]}</p>
                    </div>

                    {post.tags.length > 0 ? (
                      <div className="community-feed-tags">
                        {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                      </div>
                    ) : null}

                    {media.length > 0 ? (
                      <div className="community-feed-media-grid">
                        {media.map((item, mediaIndex) => (
                          <div className={`community-feed-media${post.sensitive ? ' is-sensitive' : ''}`} key={`${item.src}-${mediaIndex}`}>
                            <SafeImage
                              src={item.src}
                              alt={item.alt[lang]}
                              width={1283}
                              height={721}
                            />
                            {post.sensitive ? <span>{tMsg(locale, 'community.p3')}</span> : null}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    <div className="community-feed-actions" aria-hidden="true">
                      <span title={tMsg(locale, 'community.p4')}>○</span>
                      <span title={tMsg(locale, 'community.p5')}>↻</span>
                      <span title={tMsg(locale, 'community.p6')}>♡</span>
                      <span title={tMsg(locale, 'community.p7')}>⌑</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="community-empty">
            <span aria-hidden="true">✦</span>
            <h2>{tMsg(locale, 'community.p8')}</h2>
            <p>{tMsg(locale, 'community.x2')}</p>
          </div>
        )}
      </section>
    </main>
  );
}

function isImagePath(path: string) {
  return /\.(?:avif|gif|jpe?g|png|webp)$/i.test(path);
}

function creatorInitials(creator: string) {
  return creator
    .replace(/^@/, '')
    .split(/[\s_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'FC';
}

function formatDate(date: string, locale: 'en' | 'zh') {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
