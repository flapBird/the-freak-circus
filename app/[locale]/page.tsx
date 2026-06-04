import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import GameEmbed from '@/components/GameEmbed';
import SchemaMarkup from '@/components/SchemaMarkup';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return buildMetadata({
    title: tMsg(locale, 'meta.homeTitle'),
    description: tMsg(locale, 'meta.homeDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : '/' + locale}`,
  });
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <>
      <SchemaMarkup
        type="VideoGame"
        data={{
          name: 'The Freak Circus',
          description: tMsg(locale, 'schema.websiteDesc'),
          genre: rawMsg(locale, 'schema.gameGenres'),
          author: { '@type': 'Person', name: tMsg(locale, 'schema.authorName') },
          url: SITE_URL,
          applicationCategory: 'Game',
          operatingSystem: tMsg(locale, 'schema.os'),
          contentRating: tMsg(locale, 'schema.contentRating'),
        }}
      />

      <SidebarLayout>
        <div className="mb-6 text-center">
          <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
            {tMsg(locale, 'home.welcome')}
          </p>
          <h1 className="font-display text-circus-white text-3xl md:text-4xl mb-3 leading-tight">
            The Freak Circus
          </h1>
          <p className="text-circus-muted font-body italic text-lg">
            {tMsg(locale, 'home.subtitle')}
          </p>
        </div>

        <GameEmbed />

        <article className="prose-circus mt-8">
          <div className="divider-ornament my-6">
            <span className="font-display text-xs text-circus-gold/50 tracking-widest">
              {tMsg(locale, 'home.aboutDivider')}
            </span>
          </div>

          <h2>{tMsg(locale, 'home.whatIsTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.whatIsP1') }} />
          <p>{tMsg(locale, 'home.whatIsP2')}</p>

          <h2>{tMsg(locale, 'home.featuresTitle')}</h2>
          <ul className="list-none space-y-2 pl-0">
            {(rawMsg(locale, 'home.features') as string[]).map((feature: any) => (
              <li key={feature} className="flex gap-2 text-sm items-start">
                <span className="text-circus-gold mt-0.5 flex-shrink-0">-</span>
                <span className="text-circus-text">{feature}</span>
              </li>
            ))}
          </ul>

          <h2>{tMsg(locale, 'home.charactersTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.charactersP').replaceAll('/characters', `${p}/characters`) }} />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${p}/walkthrough`}
              className="px-5 py-2.5 border border-circus-gold/50 text-circus-gold
                         font-display text-xs tracking-widest uppercase hover:bg-circus-gold/10
                         transition-all duration-200"
            >
              {tMsg(locale, 'home.buttons.walkthrough')}
            </Link>
            <Link
              href={`${p}/characters`}
              className="px-5 py-2.5 border border-circus-border text-circus-muted
                         font-display text-xs tracking-widest uppercase hover:border-circus-gold/30
                         hover:text-circus-text transition-all duration-200"
            >
              {tMsg(locale, 'home.buttons.characters')}
            </Link>
          </div>
        </article>
      </SidebarLayout>
    </>
  );
}
