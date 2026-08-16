import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { NEWS_POSTS } from '@/lib/news';
import { tMsg } from '@/lib/messages';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: 'The Freak Circus Day 3 Updates',
    description: 'Follow Day 3 development news, chapter progress, and the latest updates for The Freak Circus.',
    canonical: `${SITE_URL}${locale === 'en' ? '/walkthrough/day-3' : '/' + locale + '/walkthrough/day-3'}`,
  });
}

export default function Day3Page({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  return (
    <SidebarLayout>
      <nav className="mb-4 text-xs text-circus-muted"><Link href={`${p}/walkthrough`} className="hover:text-circus-gold transition-colors">← {tMsg(locale, 'walkthrough.title')}</Link></nav>
      <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'walkthrough.day3.title')}</h1>
      <p className="text-circus-muted font-body italic mb-6">{tMsg(locale, 'walkthrough.day3.status')}</p>
      <div className="space-y-4">
        {NEWS_POSTS.map((post) => <article key={post.slug} className="border border-circus-border p-4"><time className="text-xs text-circus-muted">{post.publishedAt}</time><h2 className="font-display text-circus-text mt-1"><Link className="hover:text-circus-gold" href={`${p}/updates#${post.slug}`}>{post.title}</Link></h2><p className="text-sm text-circus-muted mt-2">{post.excerpt}</p></article>)}
      </div>
    </SidebarLayout>
  );
}
