import { tMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.privacyTitle'),
    description: tMsg(locale, 'meta.privacyDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/privacy' : '/' + locale + '/privacy'}`,

  });
}

export default function PrivacyPage({ params: { locale } }: Props) {
  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'privacy.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'privacy.subtitle')}</p>
      </div>
      <div className="prose-circus space-y-4">
        {[
          { h: tMsg(locale, 'privacy.s1title'), p: tMsg(locale, 'privacy.s1body') },
          { h: tMsg(locale, 'privacy.s2title'), p: tMsg(locale, 'privacy.s2body') },
          { h: tMsg(locale, 'privacy.s3title'), p: tMsg(locale, 'privacy.s3body') },
        ].map((s) => (
          <div key={s.h}><h2>{s.h}</h2><p>{s.p}</p></div>
        ))}
      </div>
    </SidebarLayout>
  );
}
