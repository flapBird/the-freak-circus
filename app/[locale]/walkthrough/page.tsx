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
          { day: 'day-3', title: tMsg(locale, 'walkthrough.day3.title') },
        ].map(d => (
          <Link key={d.day} href={`${p}/walkthrough/${d.day}`}
            className="border border-circus-border p-4 rounded-sm hover:border-circus-gold/30 transition-colors block">
            <span className="font-display text-circus-gold text-xs tracking-wider uppercase">{d.day.replace('-', ' ')}</span>
            <p className="text-sm text-circus-text mt-1">{d.title}</p>
          </Link>
        ))}
      </div>

      <div className="prose-circus space-y-8">
        <section>
          <h2>{tMsg(locale, 'walkthrough.day1Title')}</h2>
          <p>{tMsg(locale, 'walkthrough.day1P1')}</p>
          <p>{tMsg(locale, 'walkthrough.day1P2')}</p>
          <Link href={`${p}/walkthrough/day-1`} className="not-prose inline-block mt-3 text-xs text-circus-gold hover:text-circus-gold-light">Open the Day 1 decision guide →</Link>
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.pierrotTitle')}</h2>
          <p>{tMsg(locale, 'walkthrough.pierrotP1')}</p>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'walkthrough.pierrotP2').replace('/blog/', `${p}/blog/`) }} />
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.harlequinTitle')}</h2>
          <p>{tMsg(locale, 'walkthrough.harlequinP1')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.endingsTitle')}</h2>
          <div className="not-prose overflow-x-auto border border-circus-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-circus-card/60 text-circus-gold"><tr><th className="p-3">{tMsg(locale, 'walkthrough.endingsChar')}</th><th className="p-3">{tMsg(locale, 'walkthrough.endingsGood')}</th><th className="p-3">{tMsg(locale, 'walkthrough.endingsBad')}</th></tr></thead>
              <tbody>{(rawMsg<{ char: string; good: string; bad: string }[]>(locale, 'walkthrough.endingsTable') ?? []).map((ending) => <tr className="border-t border-circus-border" key={ending.char}><td className="p-3 text-circus-text">{ending.char}</td><td className="p-3 text-circus-muted">{ending.good}</td><td className="p-3 text-circus-muted">{ending.bad}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}
