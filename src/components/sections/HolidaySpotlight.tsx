import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_IMAGES } from '../../data/images';
import { MagneticButton } from '../ui/MagneticButton';
import { SmartImage } from '../ui/SmartImage';

const HOLIDAY_RATES = [
  { name: 'Mailbox Wrapping', price: 'From $65' },
  { name: 'Mailbox + Candy Cane Setup', price: 'From $95' },
  { name: 'Lighted Poles', price: 'From $85' },
  { name: 'Projector Setups', price: 'From $49' },
  { name: 'Christmas Tree Delivery & Setup', price: 'From $75' },
  { name: 'Permanent Roofline LEDs', price: 'From $6.50/ft' },
];

const TWINKLES = [
  { top: '12%', left: '8%', dur: '2.9s', delay: '0.2s', color: '#FBBF24' },
  { top: '22%', left: '24%', dur: '3.6s', delay: '1.1s', color: '#FDE68A' },
  { top: '15%', left: '48%', dur: '2.7s', delay: '0.5s', color: '#FBBF24' },
  { top: '18%', left: '72%', dur: '3.4s', delay: '1.6s', color: '#EF4444' },
  { top: '11%', left: '91%', dur: '3.1s', delay: '0.8s', color: '#FBBF24' },
  { top: '78%', left: '14%', dur: '3.5s', delay: '0.4s', color: '#FDE68A' },
  { top: '82%', left: '62%', dur: '2.8s', delay: '1.2s', color: '#FBBF24' },
  { top: '72%', left: '88%', dur: '3.8s', delay: '0.9s', color: '#EF4444' },
];

export function HolidaySpotlight() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#070C14] text-white">
      {/* Subtle Night-Glow Radial & Twinkle Bulbs (Holiday section only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-[#F59E0B]/10 blur-[110px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {TWINKLES.map((dot, idx) => (
          <span
            key={idx}
            className="animate-twinkle absolute h-1.5 w-1.5 rounded-full"
            style={
              {
                top: dot.top,
                left: dot.left,
                backgroundColor: dot.color,
                boxShadow: `0 0 10px ${dot.color}`,
                '--twinkle-duration': dot.dur,
                '--twinkle-delay': dot.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FBBF24]">
              <Sparkles className="w-4 h-4" />
              <span>Seasonal &amp; Permanent Holiday Lighting</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.07]">
              Let Us Light Up Your Street This Season—or All Year Long.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              From warm-white C9 Christmas roofline displays (with removal &amp; storage) and festive wrapped mailboxes to trim-matched permanent LED lighting you control from your phone.
            </p>

            {/* Clean Typographic Pricing Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {HOLIDAY_RATES.map((rate) => (
                <div
                  key={rate.name}
                  className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{rate.name}</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#FBBF24] tabular-nums shrink-0">
                    {rate.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton
                to="/holiday-lighting"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#070C14] font-bold text-sm px-6 py-3.5 rounded-lg transition-colors"
              >
                <span>Explore Lighting &amp; Color Preview</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link
                to="/contact?service=Permanent%20LED%20Lighting%20Installation"
                className="text-sm font-semibold text-white hover:text-[#FBBF24] transition-colors py-2"
              >
                Book Permanent LEDs ($6.50/ft)
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border border-[#F59E0B]/25 shadow-2xl">
              <SmartImage
                src={SITE_IMAGES.christmasLights}
                alt="Suburban Tulsa brick home illuminated with warm-white C9 Christmas lights and lit wreaths"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <SmartImage
                src={SITE_IMAGES.mailboxWrap}
                alt="Brick mailbox wrapped in evergreen garland with red bow and candy cane stakes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <SmartImage
                src={SITE_IMAGES.permanentLed}
                alt="Permanent LED roofline lighting glowing emerald green and warm gold"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
