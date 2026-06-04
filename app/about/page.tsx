import type { Metadata } from 'next';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About The Freak Circus - Game Info, Developer, and FAQ',
  description:
    'Learn about The Freak Circus visual novel: developer, download links, content warnings, Chinese support, and frequently asked questions.',
  canonical: `${SITE_URL}/about`,
});

const FAQ = [
  {
    q: 'Who made The Freak Circus?',
    a: 'The Freak Circus was created by Garula, also known as Neko Bueno. It is an independent project published on itch.io.',
  },
  {
    q: 'Is The Freak Circus free?',
    a: 'Yes. The base game is free to play in browser and free to download. The developer offers optional Patreon tiers for early access to new content.',
  },
  {
    q: 'Is this site official?',
    a: 'No. thefreakcircus.help is an unofficial fan site. We are not affiliated with Garula or Neko Bueno. All game assets belong to the original creator.',
  },
  {
    q: 'What content warnings does the game have?',
    a: 'The Freak Circus is rated 18+ and contains psychological horror themes, possessive and controlling relationship dynamics, dark romance, and mature content. Please review the official itch.io page for the full content warning list.',
  },
  {
    q: 'How do I download the game?',
    a: 'Download links for Windows, macOS, and Linux are available on the official itch.io page. You can also play the browser version embedded on the homepage of this site.',
  },
  {
    q: 'Does the game support Chinese?',
    a: 'Yes. The Freak Circus includes official Simplified Chinese language support.',
  },
];

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">
          About The Freak Circus
        </h1>
        <p className="text-circus-muted font-body italic">
          Everything you need to know about the game and this site.
        </p>
      </div>

      <div className="prose-circus mb-10">
        <h2>The Game</h2>
        <p>
          The Freak Circus is a dark psychological horror visual novel developed by the independent
          creator Garula (Neko Bueno). It is published on itch.io and has accumulated a dedicated
          international fanbase through word-of-mouth across platforms including TikTok, Tumblr, and
          Reddit.
        </p>
        <p>
          The game follows an unnamed protagonist who visits a mysterious, isolated circus and
          becomes entangled with five dangerous performers. The narrative unfolds across multiple
          days, with player choices determining character routes and endings.
        </p>

        <h2>This Site</h2>
        <p>
          thefreakcircus.help is an unofficial fan resource offering the game embed, character
          guides, walkthroughs, and articles. We embed the game via the official CDN and do not
          host, redistribute, or modify any game files.
        </p>
        <p>
          To support the developer directly, visit the{' '}
          <Link
            href="https://garula.itch.io/the-freak-circus"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            official itch.io page
          </Link>
          .
        </p>
      </div>

      <div>
        <div className="divider-ornament mb-6">
          <span className="font-display text-xs text-circus-gold/50 tracking-widest">
            Frequently Asked Questions
          </span>
        </div>

        <dl className="space-y-5">
          {FAQ.map((item) => (
            <div key={item.q} className="border-l-2 border-circus-gold/30 pl-4">
              <dt className="font-display text-circus-text text-sm mb-1">{item.q}</dt>
              <dd className="text-circus-muted text-sm leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SidebarLayout>
  );
}
