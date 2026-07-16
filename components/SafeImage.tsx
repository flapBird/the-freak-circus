'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: string;
  priority?: boolean;
  style?: React.CSSProperties;
};

export default function SafeImage({ src, alt, width = 800, height = 450, className = '', fallback, priority, style }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-circus-card/20 border border-dashed border-circus-border rounded-sm min-h-[80px]"
           style={{ width: '100%' }}>
        <span className="text-xs text-circus-muted/50 px-3 text-center leading-relaxed">{fallback || alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-full h-auto object-contain rounded-sm ${className}`}
      style={style}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
