import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { getNewsPosts } from '@/lib/news';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const path = '/news';
  return buildMetadata({
    title: tMsg(locale, 'news.meta.title'),
    description: tMsg(locale, 'news.meta.desc'),
    canonical: `${SITE_URL}${locale === 'en' ? path : '/' + locale + path}`,
  });
}

export default function NewsPage({ params: { locale } }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const posts = getNewsPosts(locale);
  return (
    <SidebarLayout>
      <header className="mb-8">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.35em] uppercase mb-2">{tMsg(locale, 'ui.newsTracker')}</p>
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'news.title')}</h1>
        <p className="text-circus-muted">{tMsg(locale, 'ui.newsIntro')}</p>
      </header>
      <div className="space-y-5">
        {posts.map((post) => (
          <article key={post.slug} className="border border-circus-border bg-circus-card/30 p-5 rounded-sm">
            <time dateTime={post.publishedAt} className="text-xs text-circus-muted/60">{new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(locale === 'en' ? 'en-US' : locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
            <h2 className="font-display text-circus-text text-lg mt-2 mb-2"><Link href={`${prefix}/news/${post.slug}`} className="hover:text-circus-gold">{post.title}</Link></h2>
            <p className="text-sm text-circus-muted leading-relaxed">{post.excerpt}</p>
            <Link href={`${prefix}/news/${post.slug}`} className="inline-block mt-4 text-xs text-circus-gold hover:text-circus-gold-light">{tMsg(locale, 'ui.readSummary')} →</Link>
          </article>
        ))}
      </div>
    </SidebarLayout>
  );
}
