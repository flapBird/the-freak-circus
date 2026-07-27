import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { NEWS_POSTS } from '@/lib/news';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const path = '/news';
  return buildMetadata({
    title: 'The Freak Circus News & Official Update Tracker',
    description: 'Editorial summaries of official The Freak Circus announcements, with dates and links to the original Garula devlogs.',
    canonical: `${SITE_URL}${locale === 'en' ? path : '/' + locale + path}`,
  });
}

export default function NewsPage({ params: { locale } }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <SidebarLayout>
      <header className="mb-8">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.35em] uppercase mb-2">Source-led update tracker</p>
        <h1 className="font-display text-circus-white text-3xl mb-3">The Freak Circus News</h1>
        <p className="text-circus-muted">Each entry links to the original developer announcement. We label summaries as fan editorial coverage, not official posts.</p>
      </header>
      <div className="space-y-5">
        {NEWS_POSTS.map((post) => (
          <article key={post.slug} className="border border-circus-border bg-circus-card/30 p-5 rounded-sm">
            <time dateTime={post.publishedAt} className="text-xs text-circus-muted/60">{new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
            <h2 className="font-display text-circus-text text-lg mt-2 mb-2"><Link href={`${prefix}/news/${post.slug}`} className="hover:text-circus-gold">{post.title}</Link></h2>
            <p className="text-sm text-circus-muted leading-relaxed">{post.excerpt}</p>
            <Link href={`${prefix}/news/${post.slug}`} className="inline-block mt-4 text-xs text-circus-gold hover:text-circus-gold-light">Read summary and source →</Link>
          </article>
        ))}
      </div>
    </SidebarLayout>
  );
}
