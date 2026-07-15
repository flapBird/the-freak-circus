import { tMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.contactTitle'),
    description: tMsg(locale, 'meta.contactDesc'),

  });
}

export default function ContactPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'contact.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'contact.subtitle')}</p>
      </div>
      <div className="prose-circus">
        <p>{tMsg(locale, 'contact.p1')}</p>
        <p>{tMsg(locale, 'contact.p2')}</p>
      </div>
    </SidebarLayout>
  );
}
