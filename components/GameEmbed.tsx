'use client';

import Image from 'next/image';
import { useState } from 'react';

const ITCH_EMBED_URL = 'https://cdn.the-freakcircus.com/game/index.html';

export default function GameEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div className="w-full">
      {!started ? (
        <div
          className="w-full aspect-video max-h-[600px] bg-circus-deep border border-circus-border
                     flex items-center justify-center cursor-pointer group relative overflow-hidden"
          onClick={() => setStarted(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') setStarted(true);
          }}
          aria-label="Click to launch The Freak Circus"
        >
          <Image
            src="/the-freak-circus-cover.jpg"
            alt="The Freak Circus cover art"
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            priority
            className="object-cover scale-105 blur-md transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-circus-black/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-circus-black/20 via-transparent to-circus-black/70 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-circus-red via-circus-gold to-circus-red" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-circus-red via-circus-gold to-circus-red" />

          <button
            className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-circus-gold/80
                       bg-circus-black/55 text-circus-gold shadow-glow-gold backdrop-blur-sm
                       transition-all duration-300 group-hover:bg-circus-red/80 group-hover:text-circus-white
                       group-hover:scale-105 active:scale-95"
            type="button"
            aria-label="Play The Freak Circus"
          >
            <span
              className="ml-1 block h-0 w-0 border-y-[13px] border-y-transparent border-l-[20px] border-l-current"
              aria-hidden="true"
            />
          </button>

          <p className="text-circus-muted text-xs z-10 absolute bottom-6 px-4 text-center">
            Embedded from the official CDN. 18+ content. Viewer discretion advised.
          </p>
        </div>
      ) : (
        <div className="game-wrapper relative">
          {!loaded && (
            <div className="absolute inset-0 bg-circus-deep flex items-center justify-center z-10">
              <div className="text-circus-gold font-display text-sm animate-pulse tracking-widest">
                Loading...
              </div>
            </div>
          )}
          <iframe
            src={ITCH_EMBED_URL}
            title="Play The Freak Circus - Psychological Horror Visual Novel"
            allowFullScreen
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setLoaded(true)}
            className="w-full h-full"
          />
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-circus-muted">
        <span className="font-body italic">
          Game by{' '}
          <a
            href="https://garula.itch.io/the-freak-circus"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-circus-gold hover:text-circus-gold-light transition-colors"
          >
            Garula (Neko Bueno)
          </a>{' '}
          - official CDN embed
        </span>
        <span>18+ - Psychological Horror - Visual Novel</span>
      </div>
    </div>
  );
}
