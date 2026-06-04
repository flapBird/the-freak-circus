'use client';

import { useEffect, useRef } from 'react';

type AdsterraConfig = {
  key: string;
  height?: number;
  width?: number;
};

type AdSlotProps = {
  slotId: string;
  format?: 'vertical' | 'horizontal' | 'rectangle';
  className?: string;
  label?: string;
  adsterra?: AdsterraConfig;
};

export default function AdSlot({
  slotId,
  format = 'vertical',
  className = '',
  label,
  adsterra,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adsterra) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    (window as unknown as Record<string, unknown>).atOptions = {
      key: adsterra.key,
      format: 'iframe',
      height: adsterra.height ?? 300,
      width: adsterra.width ?? 160,
      params: {},
    };

    const script = document.createElement('script');
    script.src = `https://www.highperformanceformat.com/${adsterra.key}/invoke.js`;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [adsterra]);

  return (
    <div
      className={`ad-slot flex flex-col gap-1 ${className}`}
      aria-label={label ?? 'Advertisement'}
      role="complementary"
    >
      {!adsterra && (
        <span className="text-[10px] text-circus-muted opacity-50">{slotId}</span>
      )}
      <div ref={containerRef} className="ad-container" />
    </div>
  );
}
