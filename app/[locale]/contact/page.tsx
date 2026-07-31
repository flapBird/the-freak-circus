import { tMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.contactTitle'),
    description: tMsg(locale, 'meta.contactDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/contact' : '/' + locale + '/contact'}`,

  });
}

// Renders the email as plain text split across two inline spans. Cloudflare's
// Email Address Obfuscation scans the raw HTML source for a contiguous
// "user@domain.tld" pattern and replaces it with a /cdn-cgi/l/email-protection
// link + script (which health checks flag). Splitting the address in the HTML
// source keeps it out of that pattern while remaining visually identical.
function ContactP2({ locale }: { locale: string }) {
  const text = tMsg(locale, 'contact.p2');
  const [before, after] = text.split('contact@thefreakcircus.help');
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <span className="whitespace-nowrap">
        <span>contact@thefreakcircus</span>
        <span>.help</span>
      </span>
      {after}
    </>
  );
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
        <p><ContactP2 locale={locale} /></p>
      </div>
    </SidebarLayout>
  );
}
