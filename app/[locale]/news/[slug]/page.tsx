import { notFound } from 'next/navigation';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import SidebarLayout from '@/components/SidebarLayout';
import { getNewsPost, NEWS_POSTS } from '@/lib/news';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return NEWS_POSTS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params: { locale, slug } }: Props) {
  const post = getNewsPost(slug);
  if (!post) return {};
  const path = `/news/${slug}`;
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `${SITE_URL}${locale === 'en' ? path : '/' + locale + path}`,
  });
}

export default function NewsArticlePage({ params: { locale, slug } }: Props) {
  const post = getNewsPost(slug);
  if (!post) notFound();
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonical = `${SITE_URL}${prefix}/news/${slug}`;
  return (
    <>
      <SchemaMarkup type="Article" data={{ headline: post.title, description: post.excerpt, datePublished: post.publishedAt, dateModified: post.publishedAt, url: canonical, isBasedOn: post.sourceUrl, author: { '@type': 'Organization', name: 'thefreakcircus.help editorial team' } }} />
      <SidebarLayout>
        <nav className="mb-6 text-xs text-circus-muted"><Link href={`${prefix}/news`} className="hover:text-circus-gold">← All news</Link></nav>
        <article className="prose-circus">
          <header className="not-prose mb-8">
            <p className="text-circus-gold/70 font-display text-xs tracking-widest uppercase">Fan editorial summary</p>
            <h1 className="font-display text-circus-white text-3xl mt-2">{post.title}</h1>
            <time dateTime={post.publishedAt} className="block mt-3 text-sm text-circus-muted">Published {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
          </header>
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h2>Primary source</h2>
          <p><a href={post.sourceUrl} target="_blank" rel="noreferrer nofollow">Read the original announcement at {post.sourceName}</a>.</p>
        </article>
      </SidebarLayout>
    </>
  );
}
