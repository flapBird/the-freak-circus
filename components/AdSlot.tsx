'use client';

import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
  label?: string;
  scriptSrc: string;
  containerId: string;
};

export default function AdSlot({ className = '', label = 'Advertisement', scriptSrc, containerId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    container.parentNode?.insertBefore(script, container);

    return () => {
      script.remove();
      container.innerHTML = '';
    };
  }, [scriptSrc]);

  return (
    <aside className={`ad-slot ${className}`} aria-label={label} role="complementary">
      <div id={containerId} ref={containerRef} className="ad-container" />
    </aside>
  );
}
