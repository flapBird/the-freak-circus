import { tMsg, rawMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.aboutTitle'),
    description: tMsg(locale, 'meta.aboutDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/about' : '/' + locale + '/about'}`,

  });
}

export default async function AboutPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'about.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'about.subtitle')}</p>
      </div>

      <div className="prose-circus mb-10">
        <h2>{tMsg(locale, 'about.gameSection')}</h2>
        <p>{tMsg(locale, 'about.gameP1')}</p>
        <p>{tMsg(locale, 'about.gameP2')}</p>

        <h2>{tMsg(locale, 'about.siteSection')}</h2>
        <p>{tMsg(locale, 'about.siteP1')}</p>
       <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'about.siteP2') }} />
        <p className="mt-2">
          Site by{" "}
          <a
            href="https://cal.com/lees-wal-c7qaqq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-circus-gold hover:text-circus-gold-light underline underline-offset-2 transition-colors"
          >
            Lee
          </a>
        </p>
      </div>

      <div>
        <div className="divider-ornament mb-6">
          <span className="font-display text-xs text-circus-gold/50 tracking-widest">
            {tMsg(locale, 'about.faqDivider')}
          </span>
        </div>

        <dl className="space-y-5">
          {(rawMsg(locale, 'about.faq') as any[]).map((item: any) => (
            <div key={item.q} className="border-l-2 border-circus-gold/30 pl-4">
              <dt className="font-display text-circus-text text-sm mb-1">{item.q}</dt>
              <dd className="text-circus-muted text-sm leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SidebarLayout>
  );
}
