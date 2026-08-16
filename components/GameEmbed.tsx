'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { tMsg } from '@/lib/messages';

const ITCH_EMBED_URL = 'https://g.thefreakcircus.my/the-freak-circus/index.html';

type WebkitFullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element | null;
};

type WebkitFullscreenElement = HTMLDivElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

export default function GameEmbed({ locale }: { locale: string }) {
  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);
  const [like, setLike] = useState<'none' | 'like' | 'dislike'>('none');
  const [animLike, setAnimLike] = useState(false);
  const [animDislike, setAnimDislike] = useState(false);
  const [gameKey, setGameKey] = useState(0);
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const isFullscreen = isNativeFullscreen || isFallbackFullscreen;

  useEffect(() => {
    const fullscreenDocument = document as WebkitFullscreenDocument;
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement
        ?? fullscreenDocument.webkitFullscreenElement
        ?? null;

      setIsNativeFullscreen(fullscreenElement === playerRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!isFallbackFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFallbackFullscreen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFallbackFullscreen]);

  const reload = useCallback(() => {
    setLoaded(false);
    setGameKey((k) => k + 1);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const element = playerRef.current as WebkitFullscreenElement | null;
    if (!element) return;

    if (isFallbackFullscreen) {
      setIsFallbackFullscreen(false);
      return;
    }

    const fullscreenDocument = document as WebkitFullscreenDocument;
    const fullscreenElement = document.fullscreenElement
      ?? fullscreenDocument.webkitFullscreenElement
      ?? null;

    if (fullscreenElement) {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else {
          await fullscreenDocument.webkitExitFullscreen?.();
        }
      } catch {
        // The browser still provides its own fullscreen exit gesture.
      }
      return;
    }

    const requestFullscreen = element.requestFullscreen?.bind(element)
      ?? element.webkitRequestFullscreen?.bind(element);

    if (!requestFullscreen) {
      setIsFallbackFullscreen(true);
      return;
    }

    try {
      await requestFullscreen();
    } catch {
      // iPhone Safari may expose the API but reject it for non-video elements.
      setIsFallbackFullscreen(true);
    }
  }, [isFallbackFullscreen]);

  const handleLike = useCallback(() => {
    if (like === 'like') { setLike('none'); return; }
    setLike('like');
    setAnimLike(true);
    setTimeout(() => setAnimLike(false), 400);
  }, [like]);

  const handleDislike = useCallback(() => {
    if (like === 'dislike') { setLike('none'); return; }
    setLike('dislike');
    setAnimDislike(true);
    setTimeout(() => setAnimDislike(false), 400);
  }, [like]);

  return (
    <div
      ref={playerRef}
      className={`game-player w-full ${isFullscreen ? 'game-player--fullscreen' : ''} ${isFallbackFullscreen ? 'game-player--fullscreen-fallback' : ''}`}
    >
      {!started ? (
        <button
          type="button"
          className="w-full aspect-video max-h-[600px] bg-circus-deep border border-circus-border
                     flex items-center justify-center cursor-pointer group relative overflow-hidden"
          onClick={() => setStarted(true)}
          aria-label={tMsg(locale, 'game.ariaLabel')}
        >
          <Image
            src="/the-freak-circus-cover.jpg"
            alt={tMsg(locale, 'ui.gameCoverAlt')}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            priority
            className="object-cover scale-105 blur-md transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-circus-black/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-circus-black/20 via-transparent to-circus-black/70 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-circus-red via-circus-gold to-circus-red" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-circus-red via-circus-gold to-circus-red" />

          <span
            className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-circus-gold/80
                       bg-circus-black/55 text-circus-gold shadow-glow-gold backdrop-blur-sm
                       transition-all duration-300 group-hover:bg-circus-red/80 group-hover:text-circus-white
                       group-hover:scale-105 active:scale-95"
            aria-hidden="true"
          >
            <span
              className="ml-1 block h-0 w-0 border-y-[13px] border-y-transparent border-l-[20px] border-l-current"
              aria-hidden="true"
            />
          </span>
        </button>
      ) : (
        <div className="game-wrapper relative">
          {!loaded && (
            <div className="absolute inset-0 bg-circus-deep flex items-center justify-center z-10">
              <div className="text-circus-gold font-display text-sm animate-pulse tracking-widest">
                {tMsg(locale, 'game.loading')}
              </div>
            </div>
          )}
          <iframe
            key={gameKey}
            src={ITCH_EMBED_URL}
            title={tMsg(locale, 'game.iframeTitle')}
            allowFullScreen
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setLoaded(true)}
            className="block w-full h-full"
          />
        </div>
      )}

      {started && (
        <div className="game-toolbar flex items-center justify-end gap-3 mt-2 px-1">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-xs border transition-all duration-200
              ${animLike ? 'scale-125' : 'scale-100'}
              ${like === 'like'
                ? 'bg-circus-gold/15 border-circus-gold/50 text-circus-gold'
                : 'border-circus-border text-circus-muted hover:border-circus-gold/30 hover:text-circus-text'
              }`}
            title={tMsg(locale, 'ui.like')}
            aria-label={tMsg(locale, 'ui.like')}
            type="button"
          >
            <svg className={`w-4 h-4 transition-transform duration-200 ${animLike ? 'scale-125' : ''}`} fill={like === 'like' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </button>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-xs border transition-all duration-200
              ${animDislike ? 'scale-125' : 'scale-100'}
              ${like === 'dislike'
                ? 'bg-circus-red/15 border-circus-red/50 text-circus-crimson'
                : 'border-circus-border text-circus-muted hover:border-circus-gold/30 hover:text-circus-text'
              }`}
            title={tMsg(locale, 'ui.dislike')}
            aria-label={tMsg(locale, 'ui.dislike')}
            type="button"
          >
            <svg className={`w-4 h-4 transition-transform duration-200 ${animDislike ? 'scale-125' : ''}`} fill={like === 'dislike' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
          </button>

          <span className="w-px h-5 bg-circus-border" />

          {/* Reload */}
          <button
            onClick={reload}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs border border-circus-border
                       text-circus-muted hover:border-circus-gold/30 hover:text-circus-text transition-all"
            title={tMsg(locale, 'ui.reloadGame')}
            aria-label={tMsg(locale, 'ui.reloadGame')}
            type="button"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs border border-circus-border
                       text-circus-muted hover:border-circus-gold/30 hover:text-circus-text transition-all"
            title={tMsg(locale, 'ui.toggleFullscreen')}
            aria-label={tMsg(locale, 'ui.toggleFullscreen')}
            aria-pressed={isFullscreen}
            type="button"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
