import { tMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.termsTitle'),
    description: tMsg(locale, 'meta.termsDesc'),

  });
}

export default function TermsPage({ params: { locale } }: Props) {
  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'terms.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'terms.subtitle')}</p>
      </div>
      <div className="prose-circus space-y-4">
        {[1,2,3,4].map((i) => (
          <div key={i}><p>{tMsg(locale, `terms.s${i}body`)}</p></div>
        ))}
      </div>
    </SidebarLayout>
  );
}
