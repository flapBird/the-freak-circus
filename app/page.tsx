import type { Metadata } from 'next';
import Link from 'next/link';
import GameEmbed from '@/components/GameEmbed';
import SchemaMarkup from '@/components/SchemaMarkup';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Play The Freak Circus Online - Psychological Horror Visual Novel',
  description:
    'Play The Freak Circus free online in your browser. A dark psychological horror visual novel by Garula with routes for Pierrot, Harlequin, Jester, and more.',
  canonical: SITE_URL,
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        type="VideoGame"
        data={{
          name: 'The Freak Circus',
          description: 'A psychological horror romance visual novel set in a mysterious circus.',
          genre: ['Visual Novel', 'Psychological Horror', 'Romance'],
          author: { '@type': 'Person', name: 'Garula (Neko Bueno)' },
          url: SITE_URL,
          applicationCategory: 'Game',
          operatingSystem: 'Web Browser, Windows, macOS, Linux',
          contentRating: '18+',
        }}
      />

      <SidebarLayout>
        <div className="mb-6 text-center">
          <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
            Welcome to the Circus
          </p>
          <h1 className="font-display text-circus-white text-3xl md:text-4xl mb-3 leading-tight">
            The Freak Circus
          </h1>
          <p className="text-circus-muted font-body italic text-lg">
            Play the psychological horror visual novel online, free
          </p>
        </div>

        <GameEmbed />

        <article className="prose-circus mt-8">
          <div className="divider-ornament my-6">
            <span className="font-display text-xs text-circus-gold/50 tracking-widest">
              About the Game
            </span>
          </div>

          <h2>What Is The Freak Circus?</h2>
          <p>
            The Freak Circus is a <strong className="text-circus-text">psychological horror visual novel</strong>{' '}
            created by independent developer Garula (Neko Bueno) and published on itch.io. The
            game has gained a passionate international following for its haunting gothic artwork,
            morally complex characters, and deeply branching narrative.
          </p>
          <p>
            You arrive as a stranger at a remote circus. What begins as curiosity quickly becomes
            entanglement. Every choice shapes your fate and the fates of five extraordinary
            performers who have been waiting for someone like you.
          </p>

          <h2>Key Features</h2>
          <ul className="list-none space-y-2 pl-0">
            {[
              'Multiple story routes across five romanceable characters',
              'Branching narrative with distinct good and bad endings',
              'Gothic psychological horror atmosphere with original artwork',
              'Official Chinese language support',
              'Regular content updates by the developer',
              'Free to play, available in browser and as a download',
            ].map((feature) => (
              <li key={feature} className="flex gap-2 text-sm items-start">
                <span className="text-circus-gold mt-0.5 flex-shrink-0">-</span>
                <span className="text-circus-text">{feature}</span>
              </li>
            ))}
          </ul>

          <h2>Characters</h2>
          <p>
            Five performers shape every playthrough:{' '}
            <Link href="/characters#pierrot">Pierrot</Link>,{' '}
            <Link href="/characters#harlequin">Harlequin</Link>,{' '}
            <Link href="/characters#jester">Jester</Link>,{' '}
            <Link href="/characters#ticket-taker">the Ticket Taker</Link>, and{' '}
            <Link href="/characters#doctor">the Doctor</Link>. Each has a unique route, ending
            set, and relationship arc with the protagonist.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/walkthrough"
              className="px-5 py-2.5 border border-circus-gold/50 text-circus-gold
                         font-display text-xs tracking-widest uppercase hover:bg-circus-gold/10
                         transition-all duration-200"
            >
              View Walkthrough
            </Link>
            <Link
              href="/characters"
              className="px-5 py-2.5 border border-circus-border text-circus-muted
                         font-display text-xs tracking-widest uppercase hover:border-circus-gold/30
                         hover:text-circus-text transition-all duration-200"
            >
              Meet the Characters
            </Link>
          </div>
        </article>
      </SidebarLayout>
    </>
  );
}
