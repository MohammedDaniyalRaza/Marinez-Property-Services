import { ArrowRight, Check, Gift, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TPS_MEMBERSHIP } from '../../data/business';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { BrandCrest } from '../ui/BrandCrest';

export function TpsMembershipSection() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -py * 12,
      rotateY: px * 14,
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Interactive Tilt Membership Card Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onMouseMove={handleMove}
              onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
              className="w-full max-w-[460px] [perspective:1100px]"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0B1F38] via-[#0F2F42] to-[#0E3F2C] text-white shadow-[0_24px_60px_rgba(11,31,56,0.28)] border border-white/15 overflow-hidden"
              >
                {/* Metallic sheen accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#4ADE80]/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#38BDF8] to-[#22C55E]"
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4ADE80]">
                      Tulsa Property Services
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-1">
                      TPS Membership Card
                    </h3>
                  </div>
                  <BrandCrest className="h-14 w-auto shrink-0" />
                </div>

                <div className="relative z-10 my-7 py-4 border-y border-white/15 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-300">Automatic Qualification</p>
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums mt-0.5">
                      $250+ Spend
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-300">Annual Fee</p>
                    <p className="font-display text-xl font-bold text-[#4ADE80]">$0 Forever</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-200">
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
                    Auto % Off Future Jobs
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <Gift className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Referral Credits
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                Loyalty &amp; Referral Program
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
                {TPS_MEMBERSHIP.headline}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {TPS_MEMBERSHIP.description}
              </p>
            </div>

            <ul className="space-y-3">
              {TPS_MEMBERSHIP.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm sm:text-base text-[#0B1726]">
                  <span className="mt-1 h-5 w-5 rounded-md bg-[#16A34A]/12 text-[#16A34A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F38] hover:bg-[#133258] text-white text-sm font-semibold px-5 py-3 transition-colors"
              >
                <span>See Membership &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors py-2"
              >
                Book a $250+ bundle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
