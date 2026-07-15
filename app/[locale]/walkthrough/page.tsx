import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.walkthroughTitle'),
    description: tMsg(locale, 'meta.walkthroughDesc'),

  });
}

export default async function WalkthroughPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <SidebarLayout>
      <div className="mb-8">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
          {tMsg(locale, 'walkthrough.pageTitle')}
        </p>
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'walkthrough.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'walkthrough.subtitle')}</p>
      </div>

      <div className="border border-circus-red/30 bg-circus-red/5 p-4 mb-8 text-sm text-circus-text">
        <p className="font-display text-circus-crimson text-xs tracking-widest uppercase mb-1">
          {tMsg(locale, 'walkthrough.spoilerTitle')}
        </p>
        <p className="text-circus-muted text-xs">{tMsg(locale, 'walkthrough.spoilerText')}</p>
      </div>

      <div className="prose-circus space-y-8">
        <section>
          <h2>{tMsg(locale, 'walkthrough.day1Title')}</h2>
          <p>{tMsg(locale, 'walkthrough.day1P1')}</p>
          <p>{tMsg(locale, 'walkthrough.day1P2')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.pierrotTitle')}</h2>
          <p>{tMsg(locale, 'walkthrough.pierrotP1')}</p>
          <p dangerouslySetInnerHTML={{
            __html: tMsg(locale, 'walkthrough.pierrotP2').replaceAll('/blog/', `${p}/blog/`)
          }} />
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.harlequinTitle')}</h2>
          <p>{tMsg(locale, 'walkthrough.harlequinP1')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'walkthrough.endingsTitle')}</h2>
          <div className="border border-circus-border overflow-x-auto">
            <table className="w-full text-sm text-circus-text">
              <thead>
                <tr className="border-b border-circus-border bg-circus-card/60">
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    {tMsg(locale, 'walkthrough.endingsChar')}
                  </th>
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    {tMsg(locale, 'walkthrough.endingsGood')}
                  </th>
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    {tMsg(locale, 'walkthrough.endingsBad')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-circus-border">
                {(rawMsg(locale, 'walkthrough.endingsTable') as any[]).map((row: any) => (
                  <tr key={row.char} className="hover:bg-circus-card/20 transition-colors">
                    <td className="p-3 font-body italic text-circus-gold/80">{row.char}</td>
                    <td className="p-3 text-xs text-circus-text/70">{row.good}</td>
                    <td className="p-3 text-xs text-circus-muted">{row.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}
