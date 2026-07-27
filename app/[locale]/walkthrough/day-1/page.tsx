import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'walkthrough.day1.meta.title'),
    description: tMsg(locale, 'walkthrough.day1.meta.desc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/walkthrough/day-1' : '/' + locale + '/walkthrough/day-1'}`,
  });
}

export default function Day1Page({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  return (
    <SidebarLayout>
      <nav className="mb-4 text-xs text-circus-muted"><Link href={`${p}/walkthrough`} className="hover:text-circus-gold transition-colors">&larr; {tMsg(locale, 'walkthrough.title')}</Link></nav>
      <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'walkthrough.day1.title')}</h1>
      <p className="text-circus-muted font-body italic mb-6">{tMsg(locale, 'walkthrough.day1.overview')}</p>
      <div className="prose-circus space-y-6">
        {(rawMsg(locale, 'walkthrough.day1.choices') as any[] ?? []).map((c: any, i: number) => (
          <section key={i}><h2>{c.moment}</h2><p>{c.desc}</p></section>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <Link href={`${p}/walkthrough/day-2`} className="text-xs px-3 py-1.5 border border-circus-border text-circus-muted hover:text-circus-gold transition-colors rounded-sm">Day 2 &rarr;</Link>
      </div>
    </SidebarLayout>
  );
}
