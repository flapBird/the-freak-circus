import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'wiki.meta.title'),
    description: tMsg(locale, 'wiki.meta.desc'),
  });
}

export default function WikiPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <SidebarLayout>
      <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'wiki.title')}</h1>
      <p className="text-circus-muted font-body italic mb-8">{tMsg(locale, 'wiki.subtitle')}</p>

      <div className="prose-circus space-y-8">
        <section>
          <h2>{tMsg(locale, 'wiki.overviewTitle')}</h2>
          <p>{tMsg(locale, 'wiki.overviewP1')}</p>
          <p>{tMsg(locale, 'wiki.overviewP2')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'wiki.loreTitle')}</h2>
          <p>{tMsg(locale, 'wiki.loreP1')}</p>
          <p>{tMsg(locale, 'wiki.loreP2')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'wiki.glossaryTitle')}</h2>
          <dl className="space-y-3">
            {(rawMsg(locale, 'wiki.glossary') as any[] ?? []).map((item: any) => (
              <div key={item.term} className="border-l-2 border-circus-gold/30 pl-3">
                <dt className="font-display text-circus-text text-sm">{item.term}</dt>
                <dd className="text-sm text-circus-muted mt-0.5">{item.def}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>{tMsg(locale, 'wiki.creditsTitle')}</h2>
          <p>{tMsg(locale, 'wiki.creditsP1')}</p>
          <p>{tMsg(locale, 'wiki.creditsP2')}</p>
        </section>

        <section>
          <h2>{tMsg(locale, 'wiki.timelineTitle')}</h2>
          <div className="space-y-3">
            {(rawMsg(locale, 'wiki.timeline') as {version:string;date:string;desc:string}[] ?? []).map((item: any) => (
              <div key={item.version} className="border border-circus-border p-3 rounded-sm">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-display text-circus-gold text-xs tracking-wider uppercase">{item.version}</span>
                  <span className="text-xs text-circus-muted">{item.date}</span>
                </div>
                <p className="text-sm text-circus-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-circus-border flex flex-wrap gap-3">
        <Link href={`${p}/characters`} className="text-xs px-3 py-1.5 border border-circus-border rounded-sm text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'characters.title')}</Link>
        <Link href={`${p}/walkthrough`} className="text-xs px-3 py-1.5 border border-circus-border rounded-sm text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'walkthrough.title')}</Link>
      </div>
    </SidebarLayout>
  );
}
