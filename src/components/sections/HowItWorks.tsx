import { CheckCircle2, ClipboardList, PhoneCall, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../lib/gsap';

const STEPS = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Call or Text Us',
    description:
      'Reach 918-240-7179 or 918-897-3464, or submit the quick quote form with your address and project list.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Get Your Free Quote',
    description:
      'We assess your property and send clear, straightforward pricing—zero hidden fees or surprise add-ons.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'We Get It Done',
    description:
      'Our veteran-owned Tulsa crew arrives on schedule with commercial gear and knocks out every item on the list.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Enjoy & Unlock Perks',
    description:
      'Inspect the finished property, pay easily by cash, card, or mobile pay, and unlock TPS Membership at $250+.',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
            Simple Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1726]">
            How It Works From First Text to Clean Finish.
          </h2>
        </div>

        <div className="relative">
          {/* Animated horizontal connecting line on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-[2px] bg-slate-200 overflow-hidden"
          >
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-r from-[#16A34A] via-[#0284C7] to-[#16A34A] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-2xl bg-[#0B1F38] text-white flex items-center justify-center shadow-md border-4 border-white shrink-0">
                      <Icon className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400 tabular-nums lg:hidden">
                      Step {step.number}
                    </span>
                  </div>

                  <div>
                    <span className="hidden lg:inline-block font-mono text-xs font-semibold text-[#16A34A] tabular-nums mb-1">
                      Step {step.number}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#0B1726] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
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
