import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tMsg, rawMsg } from '@/lib/messages';
import SafeImage from '@/components/SafeImage';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string; slug: string } };

const SLUGS = ['pierrot', 'harlequin', 'jester', 'the-doctor', 'doctor', 'columbina', 'ticket-taker'];
const SLUG_TO_KEY: Record<string, string> = {
  'pierrot': 'pierrot', 'harlequin': 'harlequin', 'jester': 'jester',
  'the-doctor': 'doctor', 'doctor': 'doctor', 'columbina': 'columbina', 'ticket-taker': 'ticket-taker'
};

export async function generateMetadata({ params }: Props) {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) return {};
  return buildMetadata({
    title: tMsg(params.locale, `characters.${key}.meta.title`),
    description: tMsg(params.locale, `characters.${key}.meta.desc`),
    canonical: `${SITE_URL}${params.locale === 'en' ? '/characters/' + params.slug : '/' + params.locale + '/characters/' + params.slug}`,
  });
}

export default function CharacterDetailPage({ params: { locale, slug } }: Props) {
  const key = SLUG_TO_KEY[slug];
  if (!key || !SLUGS.includes(slug)) notFound();

  const p = locale === 'en' ? '' : `/${locale}`;
  const base = `characters.${key}`;
  const NAME_MAP: Record<string, string> = {pierrot:'Pierrot',harlequin:'Harlequin',jester:'Jester',doctor:'the Doctor',columbina:'Columbina','ticket-taker':'the Ticket Taker'};
  const charName = NAME_MAP[key] || key;

  const otherChars = SLUGS.filter(s => s !== slug);
  const slugToLabel: Record<string, string> = {
    'pierrot': 'Pierrot', 'harlequin': 'Harlequin', 'jester': 'Jester',
    'the-doctor': 'the Doctor', 'columbina': 'Columbina', 'ticket-taker': 'the Ticket Taker'
  };

  return (
    <SidebarLayout>
      <nav className="mb-4 text-xs text-circus-muted">
        <Link href={`${p}/characters`} className="hover:text-circus-gold transition-colors">&larr; All Characters</Link>
      </nav>

      <div className="mb-6">
        <span className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2 block">
          {tMsg(locale, `${base}.role`)}
        </span>
        <h1 className="font-display text-circus-white text-3xl mb-3">{charName || key.charAt(0).toUpperCase() + key.slice(1)}</h1>
      </div>

      {/* Traits */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(rawMsg(locale, `${base}.traits`) as string[] ?? []).map((trait: string) => (
          <span key={trait} className="text-[11px] px-2 py-0.5 border border-circus-border text-circus-muted font-display tracking-wider uppercase rounded-sm">{trait}</span>
        ))}
      </div>

      {/* Sections */}
      <div className="prose-circus space-y-6">
        <section>
          <h2>Appearance & Design</h2>
          <p>{tMsg(locale, `${base}.appearance`)}</p>
        </section>

        <section>
          <h2>Personality & Traits</h2>
          <p>{tMsg(locale, `${base}.personality`)}</p>
        </section>

        <section>
          <h2>Route Guide</h2>
          <p>{tMsg(locale, `${base}.routeDesc`)}</p>
        </section>

        <section>
          <h4>Fan Art & Gallery</h4>
          <div className="space-y-2 text-sm text-circus-muted">
            {(() => {
              const sections = rawMsg<string[]>(locale, `${base}.fanSections`) ?? [];
              if (!sections.length) return null;
              const first = sections[0];
             return (
                <div className="max-w-sm">
               <SafeImage
                  src={`/images/characters/${slug}-1.webp`}
                  alt={`${charName} - ${first}`}
                  height={280}
                  fallback={`🎨 ${first} — place at /images/characters/${slug}-1.webp`}
                  className="border border-circus-border rounded-sm"
                />
                </div>
              );
            })()}
          </div>
        </section>

        <section>
          <h4>Player Impressions</h4>
          <div className="space-y-3">
            {(rawMsg(locale, `${base}.reviews`) as any[] ?? []).map((review: string, i: number) => (
              <blockquote key={i} className="border-l-2 border-circus-gold/30 pl-4 italic text-sm text-circus-muted">
                &ldquo;{review}&rdquo;
              </blockquote>
            ))}
          </div>
        </section>
      </div>

      {/* Internal links */}
      <div className="mt-10 pt-6 border-t border-circus-border">
        <p className="text-xs text-circus-muted mb-2 font-display tracking-wider uppercase">{tMsg(locale, 'home.buttons.characters')}:</p>
        <div className="flex flex-wrap gap-2">
          {otherChars.map(s => (
            <Link key={s} href={`${p}/characters/${s}`}
              className="text-xs px-2.5 py-1 border border-circus-border rounded-sm text-circus-muted hover:text-circus-gold hover:border-circus-gold/30 transition-colors">
              {slugToLabel[s]}
            </Link>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
