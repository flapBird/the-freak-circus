import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  return buildMetadata({
    title: tMsg(locale, 'meta.charactersTitle'),
    description: tMsg(locale, 'meta.charactersDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '/characters' : '/' + locale + '/characters'}`,
  });
}

const SLUGS = ['pierrot', 'harlequin', 'jester', 'ticket-taker', 'doctor', 'columbina'];
const ROLE_KEYS: Record<string, string> = {
  pierrot: 'characters.list.0.role', harlequin: 'characters.list.1.role',
  jester: 'characters.list.2.role', 'ticket-taker': 'characters.list.3.role',
  doctor: 'characters.list.4.role', columbina: 'characters.columbina.role',
};

export default function CharactersPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const characters = rawMsg<{ id: string; name: string }[]>(locale, 'characters.list') ?? [];
  const names = Object.fromEntries(characters.map((character) => [character.id, character.name]));
  names.columbina = 'Columbina';
  return (
    <SidebarLayout>
      <div className="mb-6 text-center">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">{tMsg(locale, 'characters.pageTitle')}</p>
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'characters.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'characters.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SLUGS.map((slug) => {
          const name = names[slug] ?? slug;
          return (
          <Link key={slug} href={`${p}/characters/${slug}`}
            className="border border-circus-border bg-circus-card/40 p-5 rounded-sm hover:border-circus-gold/30 transition-colors group block">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-lg font-display text-circus-gold border border-circus-border w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm">{name[0]}</span>
              <div>
                <h2 className="font-display text-circus-gold group-hover:text-circus-gold-light transition-colors">{name}</h2>
                <p className="text-xs text-circus-muted">{tMsg(locale, ROLE_KEYS[slug])}</p>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </SidebarLayout>
  );
}
