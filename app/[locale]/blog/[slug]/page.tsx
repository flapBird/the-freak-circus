import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getAllSlugs, getBlogPosts, getPostBySlug } from '@/lib/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, params.locale);
  if (!post) return {};
  const path = `/blog/${post.slug}`;

  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `${SITE_URL}${params.locale === 'en' ? path : `/${params.locale}${path}`}`,
  });
}

export default async function BlogPostPage({ params: { locale, slug } }: Props) {
  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const p = locale === 'en' ? '' : `/${locale}`;
  const zh = locale === 'zh';
  const relatedPosts = getBlogPosts(locale).filter((item) => item.slug !== post.slug).slice(0, 2);

  const dateISO = new Date(`${post.date}T00:00:00Z`).toISOString();
  const dateDisplay = new Date(`${post.date}T00:00:00Z`).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <>
      <SchemaMarkup
        type="Article"
        data={{
          headline: post.title,
          description: post.description,
          datePublished: dateISO,
          dateModified: dateISO,
          url: `${SITE_URL}/${locale === 'en' ? '' : locale + '/'}blog/${post.slug}`,
          image: `${SITE_URL}${post.image}`,
          publisher: {
            '@type': 'Organization',
            name: 'thefreakcircus.help',
            url: SITE_URL,
          },
          about: {
            '@type': 'VideoGame',
            name: 'The Freak Circus',
          },
        }}
      />

      <main className="blog-article-page">
        <div className="page-container">
          <nav className="blog-breadcrumb" aria-label={zh ? '面包屑导航' : 'Breadcrumb'}>
            <Link href={p || '/'}>{zh ? '首页' : 'Home'}</Link>
            <span>/</span>
            <Link href={`${p}/blog`}>Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <div className="blog-article-layout">
            <article className="blog-article-main">
              <header className="blog-article-header">
                <div className="blog-tag-row">
                  {post.tags.map((tag) => <span key={tag} className="blog-tag">{tag}</span>)}
                </div>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <div className="blog-article-byline">
                  <time dateTime={dateISO}>{dateDisplay}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
              </header>

              <div className="blog-article-cover">
                <SafeImage src={post.image} alt={post.imageAlt} width={1400} height={820} priority />
              </div>

              <div className="blog-article-content prose-circus" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="blog-article-return">
                <Link href={`${p}/blog`}>← {zh ? '返回全部文章' : 'Back to all articles'}</Link>
              </div>
            </article>

            <aside className="blog-article-sidebar">
              <section className="reference-card">
                <p className="section-kicker">{zh ? '文章信息' : 'ABOUT THIS ARTICLE'}</p>
                <dl className="blog-facts">
                  <div><dt>{zh ? '发布日期' : 'Published'}</dt><dd>{dateDisplay}</dd></div>
                  <div><dt>{zh ? '阅读时间' : 'Reading time'}</dt><dd>{post.readingTime}</dd></div>
                  <div><dt>{zh ? '内容范围' : 'Scope'}</dt><dd>{zh ? '0.2 原型版' : 'Version 0.2 prototype'}</dd></div>
                </dl>
                <div className="blog-tag-row">
                  {post.tags.map((tag) => <span key={tag} className="blog-tag">{tag}</span>)}
                </div>
              </section>

              <section className="reference-card">
                <h2>{zh ? '继续阅读' : 'Continue reading'}</h2>
                <div className="blog-related-list">
                  {relatedPosts.map((item) => (
                    <Link href={`${p}/blog/${item.slug}`} key={item.slug}>
                      <span>{item.title}</span>
                      <small>{item.readingTime} →</small>
                    </Link>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
