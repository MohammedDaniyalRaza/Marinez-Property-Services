import { ArrowRight, CheckCircle2, CreditCard, Phone, ShieldCheck, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { PageHero } from '../components/ui/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { BUSINESS } from '../data/business';
import { BRAND_ASSETS, SITE_IMAGES } from '../data/images';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { gsap } from '../lib/gsap';

const VALUES = [
  {
    number: '01',
    title: 'Service-Disabled Veteran-Owned Standards',
    description:
      'As an SDVOSB enterprise, we carry military accountability into residential and commercial property care—clear communication, zero shortcuts, and pride in every finish.',
  },
  {
    number: '02',
    title: 'Dual Identity, Single Crew',
    description:
      'Known across the metro as both Marinez Property Services and Tulsa Property Services, every lawn, pressure wash, cleanup, and lighting crew operates under one high standard.',
  },
  {
    number: '03',
    title: 'All-Season Versatility',
    description:
      'Spring mowing, summer deck and driveway washing, fall leaf and gutter cleanouts, winter junk haul-away, and holiday or permanent LED lighting—handled by people you already trust.',
  },
  {
    number: '04',
    title: 'Transparent Billing & Contracts',
    description:
      'Pay via cash, card, or mobile pay for single residential visits, or establish itemized invoices and recurring commercial service contracts.',
  },
];

export function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !parallaxRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to('.about-parallax-img', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, parallaxRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <>
      <PageHero
        eyebrow="About Marinez Property Services"
        title="Veteran-Owned Property Care Built for Tulsa Homes & Businesses."
        description="Operating locally as Marinez Property Services and Tulsa Property Services, we deliver dependable year-round exterior maintenance, pressure washing, cleanups, and custom holiday lighting."
        image={SITE_IMAGES.heroAbout}
        imageAlt="Marinez Property Services commercial Scag mowers and Echo backpack blowers"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm px-5 py-3 transition-colors"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={BUSINESS.phones[0].href}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-3 tabular-nums transition-colors"
          >
            <Phone className="w-4 h-4 text-[#4ADE80]" />
            <span>{BUSINESS.phones[0].display}</span>
          </a>
        </div>
      </PageHero>

      {/* Brand Story Split */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A]">
                Our Story &amp; Mission
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
                Your Full-Service Property Solution Across Greater Tulsa.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Homeowners and commercial managers in Tulsa often have to call one company to mow the lawn, another to wash the driveway, a third to clean packed gutters, and someone else entirely to hang Christmas lights. Marinez Property Services was built to solve that headache with one trustworthy call.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                As a certified Service-Disabled Veteran-Owned Small Business (SDVOSB), we run commercial-grade equipment, show up when scheduled, and treat your property with genuine care—whether it is a single residential mailbox wrap or a recurring commercial grounds contract.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-sm text-[#0B1726]">SDVOSB</p>
                    <p className="text-xs text-slate-600">Veteran-Owned</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-sm text-[#0B1726]">All Property Types</p>
                    <p className="text-xs text-slate-600">Residential &amp; Commercial</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CreditCard className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-sm text-[#0B1726]">Flexible Pay</p>
                    <p className="text-xs text-slate-600">Cash, Card, Mobile Pay</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={parallaxRef}
              className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#0A1929]"
            >
              <SmartImage
                src={BRAND_ASSETS.crewPressureWash}
                alt="Marinez Property Services and Tulsa Property Services crew pressure washing a residential driveway and trash bin"
                className="about-parallax-img w-full h-[115%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 sm:py-24 bg-[#F7F9FB] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
              How We Operate
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
              Four Principles Behind Every Visit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.number}
                className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 space-y-3"
              >
                <span className="font-mono text-xs font-semibold text-[#16A34A] tabular-nums">
                  {val.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1726] tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* Commercial Gear Callout */}
          <div className="mt-10 rounded-2xl bg-[#091524] text-white p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4ADE80]">
                Commercial-Grade Readiness
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Equipped for Single-Family Yards and Commercial Contracts Alike.
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Commercial stand-on mowers, backpack blowers &amp; surface cleaners</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Itemized invoices and recurring commercial agreements available</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Automatic TPS Membership rewards unlocked at $250+</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 aspect-[16/10] rounded-xl overflow-hidden border border-white/15">
              <SmartImage
                src={SITE_IMAGES.lawnCare}
                alt="Crisp commercial striped lawn in front of a residential property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCtaBand />
    </>
  );
}
