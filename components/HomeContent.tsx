import { tMsg, rawMsg } from '@/lib/messages';
import Image from 'next/image';
import Link from 'next/link';
import GameEmbed from './GameEmbed';
import SchemaMarkup from './SchemaMarkup';
import SidebarLayout from './SidebarLayout';

export default function HomeContent({ locale }: { locale: string }) {
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
          url: 'https://thefreakcircus.help',
          applicationCategory: 'Game',
          operatingSystem: tMsg(locale, 'schema.os'),
          contentRating: tMsg(locale, 'schema.contentRating'),
        }}
      />
      <SidebarLayout>
        <div className="mb-6 text-center ">
          <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">{tMsg(locale, 'home.welcome')}</p>
          <h1 className="font-display text-circus-white text-3xl md:text-4xl mb-3 leading-tight">The Freak Circus</h1>
          <p className="text-circus-muted font-body italic text-lg">{tMsg(locale, 'home.subtitle')}</p>
        </div>
        <GameEmbed />
        <article className="prose-circus mt-8">
          <div className="divider-ornament my-6"><span className="font-display text-xs text-circus-gold/50 tracking-widest">{tMsg(locale, 'home.aboutDivider')}</span></div>
          <h2>{tMsg(locale, 'home.whatIsTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.whatIsP1') }} />
          <p>{tMsg(locale, 'home.whatIsP2')}</p>

          {/* Image 1: Cover art */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border">
            <Image src="/the-freak-circus-cover.jpg" alt="The Freak Circus cover art" width={800} height={400}
              className="w-full object-cover" style={{ maxHeight: 320 }} priority />
          </div>

          <h2>{tMsg(locale, 'home.featuresTitle')}</h2>
          <ul className="list-none space-y-3 pl-0">{(rawMsg(locale, 'home.features') as string[]).map((f: any) => (
            <li key={f} className="flex gap-3 items-start"><span className="text-circus-gold mt-1 flex-shrink-0 text-base leading-none">-</span><span className="text-circus-text text-base leading-relaxed">{f}</span></li>
          ))}</ul>
          <h2>{tMsg(locale, 'home.charactersTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.charactersP').replaceAll('/characters', `${p}/characters`) }} />

          {/* Image 2: Characters / cast mood */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border opacity-80">
            <Image src="/the-freak-circus-cover.jpg" alt="The Freak Circus characters" width={800} height={300}
              className="w-full object-cover grayscale" style={{ maxHeight: 250, objectPosition: '50% 60%' }} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`${p}/walkthrough`} className="px-5 py-2.5 border border-circus-gold/50 text-circus-gold font-display text-xs tracking-widest uppercase hover:bg-circus-gold/10 transition-all duration-200">{tMsg(locale, 'home.buttons.walkthrough')}</Link>
            <Link href={`${p}/characters`} className="px-5 py-2.5 border border-circus-border text-circus-muted font-display text-xs tracking-widest uppercase hover:border-circus-gold/30 hover:text-circus-text transition-all duration-200">{tMsg(locale, 'home.buttons.characters')}</Link>
          </div>

          {/* Story + How to Play + Tips */}
          <div className="divider-ornament my-6"><span className="font-display text-xs text-circus-gold/50 tracking-widest">{tMsg(locale, 'home.storyTitle')}</span></div>
          <p>{tMsg(locale, 'home.storyP1')}</p><p>{tMsg(locale, 'home.storyP2')}</p>

          <h2>{tMsg(locale, 'home.howToPlayTitle')}</h2>
          <p>{tMsg(locale, 'home.howToPlayP1')}</p><p>{tMsg(locale, 'home.howToPlayP2')}</p><p>{tMsg(locale, 'home.howToPlayP3')}</p>

          {/* Image 3: Gameplay / how to play mood */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border">
            <Image src="/the-freak-circus-cover.jpg" alt="Playing The Freak Circus" width={800} height={300}
              className="w-full object-cover brightness-75" style={{ maxHeight: 250, objectPosition: '50% 40%' }} />
          </div>

          <h2>{tMsg(locale, 'home.tipsTitle')}</h2>
          <ul className="list-none space-y-3 pl-0">{(rawMsg(locale, 'home.tipsList') as string[]).map((tip: any) => (
            <li key={tip} className="flex gap-3 items-start"><span className="text-circus-gold mt-1 flex-shrink-0 text-base leading-none">*</span><span className="text-circus-text text-base leading-relaxed">{tip}</span></li>
          ))}</ul>
          <h2>{tMsg(locale, 'home.whyPlayTitle')}</h2>
          <p>{tMsg(locale, 'home.whyPlayText')}</p>

          {/* Image 4: FAQ / closing mood */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border opacity-70">
            <Image src="/the-freak-circus-cover.jpg" alt="The Freak Circus FAQ" width={800} height={250}
              className="w-full object-cover brightness-90" style={{ maxHeight: 200, objectPosition: '50% 30%' }} />
          </div>

          <h2>{tMsg(locale, 'home.faqTitle')}</h2>
          <dl className="space-y-4">{(rawMsg(locale, 'home.faqItems') as {q:string;a:string}[]).map((item: any) => (
            <div key={item.q} className="border-l-2 border-circus-gold/30 pl-4"><dt className="font-body text-circus-text text-base font-semibold mb-1">{item.q}</dt><dd className="text-circus-muted text-base leading-relaxed">{item.a}</dd></div>
          ))}</dl>
        </article>
      </SidebarLayout>
    </>
  );
}
