import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.walkthroughTitle'),
    description: tMsg(locale, 'meta.walkthroughDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/walkthrough' : '/' + locale + '/walkthrough'}`,
  });
}

export default function WalkthroughPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  return (
    <SidebarLayout>
      <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">{tMsg(locale, 'walkthrough.pageTitle')}</p>
      <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'walkthrough.title')}</h1>
      <p className="text-circus-muted font-body italic mb-6">{tMsg(locale, 'walkthrough.subtitle')}</p>

      <div className="border border-circus-red/30 bg-circus-red/5 p-4 mb-6 text-sm">
        <p className="font-display text-circus-crimson text-xs tracking-widest uppercase mb-1">{tMsg(locale, 'walkthrough.spoilerTitle')}</p>
        <p className="text-circus-muted text-xs">{tMsg(locale, 'walkthrough.spoilerText')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { day: 'day-1', title: tMsg(locale, 'walkthrough.day1Title') },
          { day: 'day-2', title: tMsg(locale, 'walkthrough.day2Title') },
          { day: 'day-3', title: 'Day 3 - Coming Soon' },
        ].map(d => (
          <Link key={d.day} href={`${p}/walkthrough/${d.day}`}
            className="border border-circus-border p-4 rounded-sm hover:border-circus-gold/30 transition-colors block">
            <span className="font-display text-circus-gold text-xs tracking-wider uppercase">{d.day.replace('-', ' ')}</span>
            <p className="text-sm text-circus-text mt-1">{d.title}</p>
          </Link>
        ))}
      </div>
    </SidebarLayout>
  );
}