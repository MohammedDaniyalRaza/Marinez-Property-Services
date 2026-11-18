import { CalendarCheck, DollarSign, Layers, ShieldCheck, Building2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { BRAND_ASSETS } from '../../data/images';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { SmartImage } from '../ui/SmartImage';

const PILLARS = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Veteran-Owned Pride (SDVOSB)',
    description:
      'Service-Disabled Veteran-Owned Small Business standards mean discipline on every property—showing up on time, communicating clearly, and finishing the job right.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'One Call Handles Everything',
    description:
      'Skip juggling four different contractors. Lawn mowing, pressure washing, gutter cleanouts, junk haul-away, trash bin sanitizing, and holiday lights all run through one crew.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Fast Local Scheduling',
    description:
      'Call or text directly to a local Tulsa line. Rapid turnaround on quotes and reliable route timing across Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and nearby towns.',
  },
  {
    number: '04',
    icon: DollarSign,
    title: 'Fair, Upfront Pricing',
    description:
      'Clear free estimates before we unload a single machine. Pay by cash, card, or mobile pay, and unlock automatic future savings once you spend $250+.',
  },
  {
    number: '05',
    icon: Building2,
    title: 'Residential & Commercial Ready',
    description:
      'Commercial Scag mowers, high-output pressure washers, formal invoices, and recurring service contracts built for homeowners, HOAs, and commercial sites.',
  },
];

export function PinnedWhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPinRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !leftPinRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 100px',
          end: 'bottom bottom-=40',
          pin: leftPinRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>('.why-pillar-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.35, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#091524] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Pinned Left Narrative Column */}
          <div ref={leftPinRef} className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4ADE80] mb-2">
                Why Tulsa Chooses Marinez
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                Built on Accountability, Commercial Gear &amp; Local Trust.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Operating across Greater Tulsa as both Marinez Property Services and Tulsa Property Services, we bring veteran discipline to every yard, driveway, and roofline.
              </p>
            </div>

            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <SmartImage
                src={BRAND_ASSETS.fleetEquipment}
                alt="Marinez Property Services commercial Scag mowers and Echo backpack blowers"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
              <div>
                <p className="font-display font-bold text-white">SDVOSB</p>
                <p className="text-slate-400">Veteran-Owned</p>
              </div>
              <div>
                <p className="font-display font-bold text-white">Free Quotes</p>
                <p className="text-slate-400">Call or Text</p>
              </div>
              <div>
                <p className="font-display font-bold text-white">Contracts</p>
                <p className="text-slate-400">&amp; Invoices</p>
              </div>
            </div>
          </div>

          {/* Scrolling Right Pillar Cards */}
          <div className="lg:col-span-7 space-y-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="why-pillar-card rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 hover:border-[#22C55E]/40 transition-colors"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="h-11 w-11 rounded-xl bg-[#16A34A]/15 border border-[#16A34A]/30 text-[#4ADE80] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400 mb-1.5">
                        <span className="tabular-nums">{pillar.number}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
