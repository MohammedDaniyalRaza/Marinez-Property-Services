import { useEffect, useState } from 'react';
import { BRAND_ASSETS } from '../../data/images';

interface BrandCrestProps {
  className?: string;
  alt?: string;
}

let cachedTransparentLogo: string | null = null;
let logoPromise: Promise<string> | null = null;

function removeExteriorCheckerboard(): Promise<string> {
  if (cachedTransparentLogo) return Promise.resolve(cachedTransparentLogo);
  if (logoPromise) return logoPromise;

  logoPromise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(BRAND_ASSETS.logoCrest);
          return;
        }
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data, width, height } = imageData;
        const visited = new Uint8Array(width * height);

        const isNeutralChecker = (idx: number) => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          // Neutral grey/white checkerboard pixels outside the dark/green/blue outline
          return max - min < 22 && r > 115;
        };

        const queue = new Int32Array(width * height);
        let head = 0;
        let tail = 0;

        const seed = (x: number, y: number) => {
          const pos = y * width + x;
          if (!visited[pos] && isNeutralChecker(pos * 4)) {
            visited[pos] = 1;
            queue[tail++] = pos;
          }
        };

        for (let x = 0; x < width; x++) {
          seed(x, 0);
          seed(x, height - 1);
        }
        for (let y = 0; y < height; y++) {
          seed(0, y);
          seed(width - 1, y);
        }

        while (head < tail) {
          const pos = queue[head++];
          const p4 = pos * 4;
          data[p4 + 3] = 0;

          const x = pos % width;
          const y = (pos - x) / width;

          if (x > 0) {
            const n = pos - 1;
            if (!visited[n] && isNeutralChecker(n * 4)) {
              visited[n] = 1;
              queue[tail++] = n;
            }
          }
          if (x < width - 1) {
            const n = pos + 1;
            if (!visited[n] && isNeutralChecker(n * 4)) {
              visited[n] = 1;
              queue[tail++] = n;
            }
          }
          if (y > 0) {
            const n = pos - width;
            if (!visited[n] && isNeutralChecker(n * 4)) {
              visited[n] = 1;
              queue[tail++] = n;
            }
          }
          if (y < height - 1) {
            const n = pos + width;
            if (!visited[n] && isNeutralChecker(n * 4)) {
              visited[n] = 1;
              queue[tail++] = n;
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        cachedTransparentLogo = canvas.toDataURL('image/png');
        resolve(cachedTransparentLogo);
      } catch {
        resolve(BRAND_ASSETS.logoCrest);
      }
    };
    img.onerror = () => resolve(BRAND_ASSETS.logoCrest);
    img.src = BRAND_ASSETS.logoCrest;
  });

  return logoPromise;
}

export function BrandCrest({
  className = 'h-12 w-auto',
  alt = 'Marinez Property Services Crest Logo',
}: BrandCrestProps) {
  const [src, setSrc] = useState<string>(cachedTransparentLogo || BRAND_ASSETS.logoCrest);

  useEffect(() => {
    let active = true;
    removeExteriorCheckerboard().then((cleanSrc) => {
      if (active) setSrc(cleanSrc);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain select-none ${className}`}
      referrerPolicy="no-referrer"
      draggable={false}
    />
  );
}
