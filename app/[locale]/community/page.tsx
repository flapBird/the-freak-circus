import SafeImage from '@/components/SafeImage';
import { COMMUNITY_POSTS } from '@/data/community-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

type PageProps = {
  params: { locale: string };
};

export function generateMetadata({ params: { locale } }: PageProps) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: zh ? 'The Freak Circus 社区：粉丝创作与角色动态' : 'The Freak Circus Community: Fan Art & Updates',
    description: zh
      ? '发现 The Freak Circus 粉丝创作、角色庆生、创意动态，以及围绕 Pierrot、Harlequin 和马戏团成员展开的社区内容。'
      : 'Discover The Freak Circus fan art, character celebrations, creative posts, and community moments featuring Pierrot, Harlequin, and the circus cast.',
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/community`,
  });
}

export default function CommunityPage({ params: { locale } }: PageProps) {
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const posts = [...COMMUNITY_POSTS]
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.publishedAt.localeCompare(a.publishedAt));

  return (
    <main className="community-page">
      <header className="page-hero">
        <div className="page-container">
          <h1>{zh ? '社区动态' : 'Community Feed'}</h1>
          <p className="page-hero-lead">{zh
            ? '发现粉丝创作、角色庆生与值得关注的社区动态。'
            : 'Discover fan creations, character celebrations, and community moments worth sharing.'}</p>
        </div>
      </header>

      <section className="page-section page-container community-feed-section">
        {posts.length > 0 ? (
          <div className="community-feed">
            {posts.map((post, index) => {
              const hasImage = Boolean(post.image && post.imageAlt && isImagePath(post.image));

              return (
                <article className={`community-feed-item${post.featured ? ' is-featured' : ''}`} key={`${post.id}-${index}`}>
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
                      {post.featured ? <small>{zh ? '精选' : 'Featured'}</small> : null}
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

                    {hasImage && post.image && post.imageAlt ? (
                      <div className={`community-feed-media${post.sensitive ? ' is-sensitive' : ''}`}>
                        <SafeImage
                          src={post.image}
                          alt={post.imageAlt[lang]}
                          width={720}
                          height={900}
                        />
                        {post.sensitive ? <span>{zh ? '敏感内容' : 'Sensitive content'}</span> : null}
                      </div>
                    ) : null}

                    <div className="community-feed-actions" aria-hidden="true">
                      <span title={zh ? '回复' : 'Reply'}>○</span>
                      <span title={zh ? '转发' : 'Repost'}>↻</span>
                      <span title={zh ? '喜欢' : 'Like'}>♡</span>
                      <span title={zh ? '收藏' : 'Bookmark'}>⌑</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="community-empty">
            <span aria-hidden="true">✦</span>
            <h2>{zh ? '首批精选正在整理' : 'The first picks are being curated'}</h2>
            <p>{zh
              ? '完成作者、来源与内容标记后，精选作品会出现在这里。'
              : 'Selected work will appear here after its creator, source, and content labels have been checked.'}</p>
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
