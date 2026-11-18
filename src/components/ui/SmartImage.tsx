import { useState } from 'react';
import { ScrollTrigger } from '../../lib/gsap';
import { BrandCrest } from './BrandCrest';

let refreshTimer: number | null = null;
function scheduleScrollTriggerRefresh() {
  if (typeof window === 'undefined') return;
  if (refreshTimer) window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => {
    ScrollTrigger.refresh();
  }, 180);
}

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  objectPosition?: string;
}

export function SmartImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  eager = false,
  objectPosition = 'object-center',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#0B1F38] via-[#0F312B] to-[#0A1929] flex flex-col items-center justify-center p-6 text-center"
      >
        <BrandCrest className="h-20 w-auto mb-3 opacity-90" />
        <span className="text-xs font-medium text-white/75 max-w-xs leading-snug">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onLoad={scheduleScrollTriggerRefresh}
      onError={() => setFailed(true)}
      className={`${className} ${objectPosition}`}
    />
  );
}
