import { ArrowRight, Droplets, Leaf, Phone, ShieldCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { BUSINESS } from '../../data/business';
import { SITE_IMAGES } from '../../data/images';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../lib/gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { SmartImage } from '../ui/SmartImage';

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line-inner', {
        yPercent: 105,
        opacity: 0,
        duration: 0.85,
        stagger: 0.11,
        ease: 'power3.out',
        delay: 0.08,
      });

      gsap.from('.hero-fade-item', {
        y: 18,
        opacity: 0,
        duration: 0.65,
        stagger: 0.09,
        ease: 'power2.out',
        delay: 0.35,
      });

      gsap.to('.hero-float-motif', {
        y: -10,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center overflow-hidden bg-[#071320] text-white pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* Sharp Full-Bleed Hero Photo + Measured Contrast Gradient Overlay */}
      <div className="absolute inset-0">
        <SmartImage
          src={SITE_IMAGES.heroHome}
          alt="Freshly pressure-washed driveway and striped green lawn in Tulsa, Oklahoma"
          eager
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06121F]/92 via-[#081A24]/75 to-[#06121F]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06121F]/80 via-transparent to-[#06121F]/40" />
      </div>

      {/* Subtle Water-Droplet & Leaf Accent Motif (Desktop) */}
      <div
        aria-hidden="true"
        className="hero-float-motif pointer-events-none hidden lg:flex absolute right-10 bottom-16 z-10 flex-col items-end gap-3 opacity-80"
      >
        <div className="flex items-center gap-3 rounded-2xl bg-[#091829]/75 backdrop-blur-md border border-white/15 px-5 py-3.5 shadow-xl">
          <div className="flex items-center -space-x-1.5">
            <span className="h-9 w-9 rounded-full bg-[#0284C7]/25 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
              <Droplets className="w-4 h-4" />
            </span>
            <span className="h-9 w-9 rounded-full bg-[#16A34A]/25 border border-[#4ADE80]/40 flex items-center justify-center text-[#4ADE80]">
              <Leaf className="w-4 h-4" />
            </span>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">
              {BUSINESS.dba}
            </p>
            <p className="text-xs text-slate-300">Serving Greater Tulsa, OK</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          <p className="hero-fade-item text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#4ADE80] mb-4">
            {BUSINESS.name} · {BUSINESS.serviceArea}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.03] text-white">
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">Your Property.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">Looking Its Best.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-inner block text-[#4ADE80]">All Year Round.</span>
            </span>
          </h1>

          <p className="hero-fade-item mt-5 sm:mt-6 text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
            {BUSINESS.tagline} {BUSINESS.subTagline}—from weekly lawn care and concrete pressure washing to permanent roofline LEDs and holiday lighting.
          </p>

          {/* Primary CTAs */}
          <div className="hero-fade-item mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <MagneticButton
              href={BUSINESS.phones[0].href}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[0_12px_30px_rgba(22,163,74,0.35)] transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS.phones[0].display}</span>
            </MagneticButton>

            <MagneticButton
              to="/contact"
              className="bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-colors"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Unboxed Architectural Trust Strip */}
          <div className="hero-fade-item mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-200">
            <span className="inline-flex items-center gap-1.5 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#4ADE80] shrink-0" />
              Veteran-Owned (SDVOSB)
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span>Residential &amp; Commercial</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span>Free Quotes</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <a
              href={BUSINESS.phones[1].href}
              className="hover:text-[#4ADE80] transition-colors tabular-nums"
            >
              Text or Call {BUSINESS.phones[1].display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
