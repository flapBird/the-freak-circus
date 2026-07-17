import { tMsg, rawMsg } from '@/lib/messages';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'news.meta.title'),
    description: tMsg(locale, 'news.meta.desc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/news' : '/' + locale + '/news'}`,
  });
}

export default function NewsPage({ params: { locale } }: Props) {
  return (
    <SidebarLayout>
      <h1 className="font-display text-circus-white text-3xl mb-6">{tMsg(locale, 'news.title')}</h1>
      <div className="space-y-5">
        {(rawMsg(locale, 'news.entries') as any[] ?? []).map((entry: any, i: number) => (
          <article key={i} id={`update-${i}`} className="border border-circus-border p-4 rounded-sm">
            <time className="text-xs text-circus-muted/60">{entry.date}</time>
            <h2 className="font-display text-circus-text text-base mt-1 mb-1">{entry.title}</h2>
            <p className="text-sm text-circus-muted">{entry.body}</p>
          </article>
        ))}
      </div>
    </SidebarLayout>
  );
}
