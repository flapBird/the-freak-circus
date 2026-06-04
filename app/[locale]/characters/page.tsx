import { tMsg, rawMsg } from '@/lib/messages';
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

export default async function CharactersPage({ params: { locale } }: Props) {

  return (
    <SidebarLayout>
      <div className="mb-8 text-center">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
          {tMsg(locale, 'characters.pageTitle')}
        </p>
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'characters.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'characters.subtitle')}</p>
      </div>

      <div className="space-y-8">
        {(rawMsg(locale, 'characters.list') as any[]).map((character: any) => (
          <article
            key={character.id}
            id={character.id}
            className="border border-circus-border bg-circus-card/40 p-6 rounded-sm hover:border-circus-gold/30 transition-colors"
          >
            <header className="flex items-start gap-4 mb-4">
              <span className="text-xl font-display text-circus-gold border border-circus-border w-12 h-12 flex items-center justify-center flex-shrink-0 animate-float">
                {character.name[0]}
              </span>
              <div>
                <h2 className="font-display text-circus-gold text-xl">{character.name}</h2>
                <p className="text-circus-muted font-body italic text-sm">{character.role}</p>
              </div>
            </header>

            <p className="text-circus-text text-sm leading-relaxed mb-4">{character.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {character.traits.map((trait: string) => (
                <span
                  key={trait}
                  className="px-2 py-0.5 text-[11px] border border-circus-border text-circus-muted font-display tracking-wider uppercase"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="border-t border-circus-border pt-3 mt-3">
              <p className="text-xs text-circus-muted">
                <span className="text-circus-gold font-display tracking-wider text-[11px] uppercase mr-2">
                  {tMsg(locale, 'characters.routeTip')}
                </span>
                {character.routeTip}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SidebarLayout>
  );
}
