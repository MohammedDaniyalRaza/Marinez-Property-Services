import { ArrowRight, Check, Gift, Lightbulb, Phone, Sparkles, TreePine, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { PermanentLedAppMockup } from '../components/sections/PermanentLedAppMockup';
import { PageHero } from '../components/ui/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { BUSINESS } from '../data/business';
import { SITE_IMAGES } from '../data/images';

const PAGE_TWINKLES = [
  { top: '6%', left: '12%', dur: '3.0s', delay: '0.1s', color: '#FBBF24' },
  { top: '14%', left: '34%', dur: '2.7s', delay: '0.8s', color: '#FDE68A' },
  { top: '9%', left: '66%', dur: '3.4s', delay: '1.3s', color: '#EF4444' },
  { top: '16%', left: '86%', dur: '2.9s', delay: '0.4s', color: '#FBBF24' },
  { top: '42%', left: '7%', dur: '3.2s', delay: '1.1s', color: '#FDE68A' },
  { top: '48%', left: '93%', dur: '3.6s', delay: '0.6s', color: '#FBBF24' },
  { top: '74%', left: '15%', dur: '2.8s', delay: '1.5s', color: '#EF4444' },
  { top: '81%', left: '82%', dur: '3.3s', delay: '0.3s', color: '#FBBF24' },
];

export function HolidayLightingPage() {
  return (
    <div className="bg-[#070C14] text-white relative overflow-hidden">
      {/* Subtle Night-Time Twinkle Layer (Holiday page only) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {PAGE_TWINKLES.map((dot, idx) => (
          <span
            key={idx}
            className="animate-twinkle absolute h-1.5 w-1.5 rounded-full"
            style={
              {
                top: dot.top,
                left: dot.left,
                backgroundColor: dot.color,
                boxShadow: `0 0 12px ${dot.color}`,
                '--twinkle-duration': dot.dur,
                '--twinkle-delay': dot.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10">
        <PageHero
          nightMode
          eyebrow="Holiday & Permanent Lighting"
          title="Permanent LEDs & Custom Holiday Lighting Across Tulsa."
          description="Permanent light installs are booking fast! Choose trim-matched permanent roofline LEDs from $6.50/ft, or let us light up your street with custom C9 Christmas displays, wrapped mailboxes, and candy cane walkways."
          image={SITE_IMAGES.heroHoliday}
          imageAlt="Warm twilight brick home lit with C9 Christmas roofline lights and wreaths"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact?service=Permanent%20LED%20Lighting%20Installation"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#070C14] font-bold text-sm px-6 py-3.5 transition-colors"
            >
              <span>Book Holiday or LED Lighting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BUSINESS.phones[0].href}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-3.5 tabular-nums transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call {BUSINESS.phones[0].display}</span>
            </a>
          </div>
        </PageHero>

        {/* Section 1: Permanent Lights Installed + Interactive App Color Preview */}
        <section className="py-16 sm:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FBBF24]">
                  <Sparkles className="w-4 h-4" />
                  <span>Permanent Lights Installed · From $6.50 / ft</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Change Colors Anytime—Holiday, Game Day, or Everyday Curb Appeal.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Say goodbye to climbing ladders every November. Our low-maintenance, weather-sealed permanent LEDs sit inside discreet color-matched channels under your eaves. Permanent light installs are booking fast across Tulsa!
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'From $6.50 per foot installed',
                    'Custom designs & full professional installs',
                    'App-controlled color & timer scenes',
                    'Low-maintenance year-round curb appeal',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-100">
                      <span className="mt-0.5 h-5 w-5 rounded-md bg-[#F59E0B]/20 text-[#FBBF24] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    to="/contact?service=Permanent%20LED%20Lighting%20Installation"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm px-5 py-3 transition-colors"
                  >
                    <span>Get Your Permanent LED Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-[#FBBF24]/25 shadow-2xl">
                <SmartImage
                  src={SITE_IMAGES.permanentLed}
                  alt="Modern suburban house illuminated with permanent under-eave LED lighting in emerald green and gold"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Interactive Phone-App Color Swatch Preview */}
            <PermanentLedAppMockup />
          </div>
        </section>

        {/* Section 2: Mailbox Wrapping & Candy Cane Light Setups Flyer Section */}
        <section className="py-16 sm:py-24 bg-[#0B121F] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden border border-[#DC2626]/30 shadow-2xl">
                <SmartImage
                  src={SITE_IMAGES.mailboxWrap}
                  alt="Brick mailbox wrapped in evergreen garland with red bow and glowing candy cane stakes along walkway"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EF4444]">
                  <Gift className="w-4 h-4" />
                  <span>Street &amp; Yard Holiday Setups</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Mailbox Wrapping &amp; Candy Cane Light Setups
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  The neighborhood is filling up fast with holiday lights in the yards and along the street—especially on blocks with no street lights! Keep your curb bright and welcoming from the sidewalk to the front door.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs text-slate-400">Wrapped Mailboxes</p>
                    <p className="font-display text-2xl font-bold text-[#FBBF24] tabular-nums mt-0.5">
                      From $65
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Lit evergreen garland &amp; bow custom-wrapped for your mailbox.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs text-slate-400">Mailbox + Candy Cane Setup</p>
                    <p className="font-display text-2xl font-bold text-[#FBBF24] tabular-nums mt-0.5">
                      From $95
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Wrapped mailbox paired with candy cane straps &amp; walkway stakes.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#FBBF24] shrink-0" />
                    <span>Wrapped mailboxes &amp; candy cane straps</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#FBBF24] shrink-0" />
                    <span>Lighted poles available (starting from $85)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#FBBF24] shrink-0" />
                    <span>Coordinated street &amp; yard lighting for neighbor blocks</span>
                  </li>
                </ul>

                <Link
                  to="/contact?service=Mailbox%20Wrapping%20%26%20Candy%20Cane%20Lights"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm px-6 py-3.5 transition-colors"
                >
                  <span>Let Us Light Up Your Street!</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Full Custom Christmas Displays, Poles, Projectors & Tree Delivery */}
        <section className="py-16 sm:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FBBF24] mb-2">
                Full-Service Seasonal Packages
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Custom Installs, Projectors &amp; Christmas Tree Delivery.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[#0D1626] border border-white/10 p-7 flex flex-col justify-between">
                <div>
                  <Lightbulb className="w-7 h-7 text-[#FBBF24] mb-4" />
                  <p className="font-mono text-xs font-semibold text-[#FBBF24] mb-1">
                    Custom Quote · Residential &amp; Commercial
                  </p>
                  <h3 className="font-display text-xl font-bold text-white">
                    Custom Christmas Light Installation
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    Complete custom roofline C9 lighting, ridge highlights, wreaths, and porch wraps—including full installation, seasonal upkeep, post-holiday removal, and organized storage.
                  </p>
                </div>
                <Link
                  to="/contact?service=Custom%20Christmas%20Light%20Installation"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FBBF24] hover:underline"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="rounded-2xl bg-[#0D1626] border border-white/10 p-7 flex flex-col justify-between">
                <div>
                  <Zap className="w-7 h-7 text-[#FBBF24] mb-4" />
                  <p className="font-mono text-xs font-semibold text-[#FBBF24] tabular-nums mb-1">
                    Poles from $85 · Projectors from $49
                  </p>
                  <h3 className="font-display text-xl font-bold text-white">
                    Lighted Poles &amp; Whole-House Projectors
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    Anchored illuminated driveway and yard poles paired with crisp whole-house festive projectors set on dusk-to-dawn timers for instant evening impact.
                  </p>
                </div>
                <Link
                  to="/contact?service=Lighted%20Poles%20%26%20Whole-House%20Projector%20Setups"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FBBF24] hover:underline"
                >
                  <span>Reserve Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="rounded-2xl bg-[#0D1626] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/9] overflow-hidden">
                  <SmartImage
                    src={SITE_IMAGES.treeDelivery}
                    alt="Lit Christmas tree delivered and set up inside a living room bay window"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FBBF24] tabular-nums mb-1">
                      <TreePine className="w-4 h-4" />
                      <span>From $75</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Christmas Tree Delivery &amp; Setup
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      We deliver, carry inside, mount straight in the stand, and clean up stray needles so you are ready to decorate.
                    </p>
                  </div>
                  <Link
                    to="/contact?service=Christmas%20Tree%20Delivery%20%26%20Setup"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FBBF24] hover:underline"
                  >
                    <span>Book Tree Delivery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCtaBand />
      </div>
    </div>
  );
}
