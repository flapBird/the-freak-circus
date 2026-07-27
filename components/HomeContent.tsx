import { tMsg, rawMsg } from '@/lib/messages';
import SafeImage from '@/components/SafeImage';
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
        <p className="mt-3 text-xs leading-relaxed text-circus-muted border-l-2 border-circus-gold/30 pl-3">
          This optional player is served by a third-party host. thefreakcircus.help is an unofficial fan resource and does not claim that host is operated by, endorsed by, or affiliated with Garula. For the developer-supported version and downloads, use the official itch.io page.
        </p>
        <article className="prose-circus mt-8">
          <div className="divider-ornament my-6"><span className="font-display text-xs text-circus-gold/50 tracking-widest">{tMsg(locale, 'home.aboutDivider')}</span></div>
          <h2>{tMsg(locale, 'home.whatIsTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.whatIsP1') }} />
          <p>{tMsg(locale, 'home.whatIsP2')}</p>
          {/* Image 1: Cover art */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border">
            <SafeImage src="/images/home/about-game.webp" alt="The Freak Circus psychological horror visual novel game cover art" width={800} height={360} priority
              className="w-full h-auto" fallback="The Freak Circus — game scene at /images/home/about-game.webp" />
          </div>
          <h2>{tMsg(locale, 'home.featuresTitle')}</h2>
          <ul className="list-none space-y-3 pl-0">{(rawMsg<string[]>(locale, 'home.features') ?? []).map((f: any) => (
            <li key={f} className="flex gap-3 items-start"><span className="text-circus-gold mt-1 flex-shrink-0 text-base leading-none">-</span><span className="text-circus-text text-base leading-relaxed">{f}</span></li>
          ))}</ul>
          <h2>{tMsg(locale, 'home.charactersTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: tMsg(locale, 'home.charactersP').replaceAll('/characters', `${p}/characters`) }} />
          {/* Image 2: Characters / cast mood */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border opacity-80">
            <SafeImage src="/images/home/characters.webp" alt="The Freak Circus characters Pierrot Harlequin Jester and the Doctor" width={800} height={280}
              className="w-full h-auto" fallback="The Freak Circus character art at /images/home/characters.webp" />
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
            <SafeImage src="/images/home/gameplay.webp" alt="How to play The Freak Circus visual novel in your browser" width={800} height={280}
              className="w-full h-auto" fallback="Playing The Freak Circus at /images/home/gameplay.webp" />
          </div>
          <h2>{tMsg(locale, 'home.tipsTitle')}</h2>
          <ul className="list-none space-y-3 pl-0">{(rawMsg<string[]>(locale, 'home.tipsList') ?? []).map((tip: any) => (
            <li key={tip} className="flex gap-3 items-start"><span className="text-circus-gold mt-1 flex-shrink-0 text-base leading-none">*</span><span className="text-circus-text text-base leading-relaxed">{tip}</span></li>
          ))}</ul>
          <h2>{tMsg(locale, 'home.whyPlayTitle')}</h2>
          <p>{tMsg(locale, 'home.whyPlayText')}</p>
          {/* Image 4: FAQ / closing mood */}
          <div className="my-8 relative overflow-hidden rounded-sm border border-circus-border opacity-70">
            <SafeImage src="/images/home/faq.webp" alt="The Freak Circus frequently asked questions about gameplay and characters" width={800} height={260}
              className="w-full h-auto" fallback="The Freak Circus FAQ at /images/home/faq.webp" />
          </div>
          <h2>{tMsg(locale, 'home.faqTitle')}</h2>
          <dl className="space-y-4">{(rawMsg<{q:string;a:string}[]>(locale, 'home.faqItems') ?? []).map((item: any) => (
            <div key={item.q} className="border-l-2 border-circus-gold/30 pl-4"><dt className="font-body text-circus-text text-base font-semibold mb-1">{item.q}</dt><dd className="text-circus-muted text-base leading-relaxed">{item.a}</dd></div>
          ))}</dl>
        </article>
      </SidebarLayout>
    </>
  );
}
