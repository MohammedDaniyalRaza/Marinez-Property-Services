import type { ReactNode } from 'react';
import { SmartImage } from './SmartImage';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  nightMode?: boolean;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  nightMode = false,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 ${
        nightMode ? 'bg-[#070C14]' : 'bg-[#081523]'
      } text-white`}
    >
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt={imageAlt}
          eager
          className="w-full h-full object-cover object-center"
        />
        <div
          className={`absolute inset-0 ${
            nightMode
              ? 'bg-gradient-to-r from-[#060B13]/92 via-[#070F1C]/80 to-[#070C14]/55'
              : 'bg-gradient-to-r from-[#071422]/92 via-[#0A1E2E]/78 to-[#071422]/45'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p
            className={`text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 ${
              nightMode ? 'text-[#FBBF24]' : 'text-[#4ADE80]'
            }`}
          >
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.06] text-white">
            {title}
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {description}
          </p>
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
