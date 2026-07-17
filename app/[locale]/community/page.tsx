import { tMsg, rawMsg } from '@/lib/messages';
import SafeImage from '@/components/SafeImage';
import Image from 'next/image';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'community.meta.title'),
    description: tMsg(locale, 'community.meta.desc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/community' : '/' + locale + '/community'}`,
  });
}

export default function CommunityPage({ params: { locale } }: Props) {
  return (
    <SidebarLayout>
      <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'community.title')}</h1>
      <p className="text-circus-muted font-body italic mb-8">{tMsg(locale, 'community.subtitle')}</p>
      <div className="prose-circus space-y-8">
        <section>
          <h2>{tMsg(locale, 'community.officialTitle')}</h2>
          <ul>{(rawMsg(locale, 'community.links') as any[] ?? []).map((l: any) => (
            <li key={l.name}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-circus-gold underline decoration-circus-gold/30 hover:decoration-circus-gold/60">{l.name}</a></li>
          ))}</ul>
        </section>
        <section>
          <h2>{tMsg(locale, 'community.fanartTitle')}</h2>
          <p>{tMsg(locale, 'community.fanartDesc')}</p>
          <div className="flex gap-3 mt-3 overflow-x-auto">
            {[1,2,3,4].map(i => (
              <SafeImage key={i}
                src={`/images/community/fanart-${i}.webp`}
                alt={`The Freak Circus fan art submission ${i}`}
                width={400} height={300} className="w-1/4 min-w-[180px] h-60 rounded-sm"
                fallback={`🎨 Fan Art ${i} — place at /images/community/fanart-${i}.webp`}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>{tMsg(locale, 'community.communityTitle')}</h2>
          <ul>{(rawMsg(locale, 'community.communityTips') as string[] ?? []).map((tip: string) => (
            <li key={tip} className="text-sm text-circus-text mb-1">• {tip}</li>
          ))}</ul>
        </section>
      </div>
    </SidebarLayout>
  );
}
