'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

type Props = {
  title: string;
  summary: string;
  cover?: string;
  iframeSrc?: string;
  aspectRatio?: '16/9' | '4/3';
  officialUrl: string;
  locale: string;
};

export default function GamePlayer({ title, summary, cover, iframeSrc, aspectRatio = '16/9', officialUrl, locale }: Props) {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const zh = locale === 'zh';

  const reload = useCallback(() => {
    setLoaded(false);
    setFrameKey((key) => key + 1);
  }, []);

  const fullscreen = useCallback(async () => {
    const element = playerRef.current;
    if (!element) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => undefined);
      return;
    }
    await element.requestFullscreen?.().catch(() => undefined);
  }, []);

  return (
    <div ref={playerRef} className="catalog-game-player" style={{ aspectRatio: aspectRatio.replace('/', ' / ') }}>
      {iframeSrc && started ? (
        <>
          {!loaded && <div className="catalog-player-loading">{zh ? '正在加载游戏…' : 'Loading game…'}</div>}
          <iframe
            key={frameKey}
            src={iframeSrc}
            title={`${title} game`}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
            onLoad={() => setLoaded(true)}
          />
          <div className="catalog-player-toolbar">
            <button type="button" onClick={reload}>{zh ? '重新加载' : 'Reload'}</button>
            <button type="button" onClick={fullscreen}>{zh ? '全屏' : 'Fullscreen'}</button>
          </div>
        </>
      ) : (
        <div className="catalog-player-poster">
          {cover && <Image src={cover} alt="" fill sizes="(max-width: 1024px) 100vw, 70vw" className="catalog-player-poster-image" />}
          <div className="catalog-player-poster-overlay" />
          <div className="catalog-player-poster-copy">
            <span>{iframeSrc ? (zh ? '站内游玩' : 'PLAY ON SITE') : (zh ? '游戏详情' : 'GAME DETAILS')}</span>
            <h2>{title}</h2>
            <p>{summary}</p>
            {iframeSrc ? (
              <button type="button" className="button-primary" onClick={() => setStarted(true)}>
                <span className="catalog-play-icon" aria-hidden="true" /> {zh ? '开始游戏' : 'Play game'}
              </button>
            ) : (
              <a className="button-primary" href={officialUrl} target="_blank" rel="noopener noreferrer">
                {zh ? '打开开发者页面' : 'Open developer page'} ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
