import { tMsg } from '@/lib/messages';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { getBlogPosts } from '@/lib/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const path = '/blog';
  return buildMetadata({
    title: tMsg(locale, 'meta.blogTitle'),
    description: tMsg(locale, 'meta.blogDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`,
  });
}

export default async function BlogPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const zh = locale === 'zh';
  const sorted = [...getBlogPosts(locale)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="blog-index-page">
      <header className="page-hero blog-hero">
        <div className="page-container">
          <h1>{tMsg(locale, 'blog.title')}</h1>
          <p className="page-hero-lead">
            {zh
              ? '面向玩家的实用指南、版本说明与事实核查。每篇文章都标明范围，不把猜测包装成剧情事实。'
              : 'Practical player guides, build explainers, and careful fact checks—written with clear scope and no invented story claims.'}
          </p>
        </div>
      </header>

      <section className="page-section page-container" aria-label={zh ? '文章列表' : 'Article list'}>
        <div className="blog-card-grid">
        {sorted.map((post) => {
          const dateDisplay = new Date(`${post.date}T00:00:00Z`).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          });

          return (
            <article key={post.slug} className="blog-card">
              <Link href={`${p}/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <SafeImage src={post.image} alt={post.imageAlt} width={900} height={560} />
                  <span className="blog-card-hover">{zh ? '阅读文章' : 'Read article'} →</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-tag-row">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>{dateDisplay}</time>
                    <span>{post.readingTime}</span>
                    <strong>{zh ? '阅读全文' : 'Read more'} →</strong>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
        </div>
      </section>
    </main>
  );
}
