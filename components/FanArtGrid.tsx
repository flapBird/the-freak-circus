'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { FanArtwork } from '@/data/fan-art';
import { characterCopy, editorialLocale } from '@/lib/site-content';

export default function FanArtGrid({ items, locale }: { items: readonly FanArtwork[]; locale: string }) {
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const [selected, setSelected] = useState<FanArtwork | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected || !dialog.current) return;
    const active = document.activeElement as HTMLElement | null;
    dialog.current.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      active?.focus();
    };
  }, [selected]);
  const close = () => { dialog.current?.close(); setSelected(null); };

  return <>
    <div className="fan-art-grid">
      {items.map((item) => <article className="fan-art-card" key={item.id}>
        <button className="fan-art-image-button" onClick={() => setSelected(item)} aria-label={`${zh ? '放大查看' : 'View artwork'}: ${item.title}`}>
          <ArtworkImage item={item} locale={locale} />
          <span className="fan-art-zoom" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6M7 10h6M10 7v6" /></svg></span>
        </button>
        <div className="fan-art-caption">
          <h3>{characterCopy[lang][item.character].name}</h3>
        </div>
      </article>)}
    </div>
    {selected && <dialog ref={dialog} className="fan-art-dialog" aria-label={selected.title} onCancel={close} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="fan-art-dialog-content">
        <button className="fan-art-close" onClick={close} aria-label={zh ? '关闭大图' : 'Close artwork'} autoFocus>×</button>
        <ArtworkImage item={selected} locale={locale} enlarged />
        <div className="fan-art-dialog-caption"><h2>{selected.title}</h2></div>
      </div>
    </dialog>}
  </>;
}

function ArtworkImage({ item, locale, enlarged = false }: { item: FanArtwork; locale: string; enlarged?: boolean }) {
  const [failed, setFailed] = useState(false);
  const lang = editorialLocale(locale);
  if (failed) return <span className="fan-art-image-unavailable">{lang === 'zh' ? '图片暂不可用，请稍后重试' : 'Image unavailable. Please try again later.'}</span>;
  return <Image src={item.image} alt={`${characterCopy[lang][item.character].name} — ${item.title}, by ${item.creator}`} width={640} height={800} unoptimized loading={enlarged ? 'eager' : 'lazy'} onError={() => setFailed(true)} />;
}
