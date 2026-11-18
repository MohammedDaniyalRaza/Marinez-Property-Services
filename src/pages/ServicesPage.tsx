import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { TpsMembershipSection } from '../components/sections/TpsMembershipSection';
import { PageHero } from '../components/ui/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { SITE_IMAGES } from '../data/images';
import { HOLIDAY_SERVICES, MAINTENANCE_SERVICES, type ServiceItem } from '../data/services';

function ServiceDetailBlock({ service, reverse }: { service: ServiceItem; reverse: boolean }) {
  return (
    <article
      id={service.id}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 sm:py-14 border-b border-slate-200/80 last:border-b-0"
    >
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#0A1929]">
          <SmartImage
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className={`lg:col-span-7 space-y-5 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="font-mono text-[#16A34A] tabular-nums">{service.number}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-slate-500 uppercase tracking-wider">{service.group}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="font-mono text-[#0B1F38] tabular-nums">{service.priceLabel}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1726]">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {service.fullDescription}
        </p>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            What&apos;s Included
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#0B1726]">
                <span className="mt-0.5 h-5 w-5 rounded-md bg-[#16A34A]/12 text-[#16A34A] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F38] hover:bg-[#16A34A] text-white text-sm font-semibold px-5 py-3 transition-colors"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete Service Catalog"
        title="Year-Round Property Care & Seasonal Lighting Under One Roof."
        description="Every service below is handled in-house by our Tulsa crew for residential homes and commercial properties. Bundle services in one visit and unlock TPS Membership at $250+."
        image={SITE_IMAGES.heroServices}
        imageAlt="Marinez Property Services crew pressure washing a residential driveway and trash bin"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#year-round-maintenance"
            className="rounded-lg bg-white text-[#0B1726] text-xs sm:text-sm font-semibold px-4 py-2.5 hover:bg-slate-100 transition-colors"
          >
            Property &amp; Lawn Maintenance (01–08)
          </a>
          <a
            href="#seasonal-holiday"
            className="rounded-lg bg-white/12 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 hover:bg-white/20 transition-colors"
          >
            Seasonal &amp; Holiday Services (09–13)
          </a>
        </div>
      </PageHero>

      {/* Group A: Property & Lawn Maintenance */}
      <section id="year-round-maintenance" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl pb-6 border-b border-slate-200">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
              Group A · Year-Round
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
              Property &amp; Lawn Maintenance
            </h2>
          </div>

          <div>
            {MAINTENANCE_SERVICES.map((service, idx) => (
              <ServiceDetailBlock key={service.id} service={service} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Group B: Seasonal & Holiday Services */}
      <section
        id="seasonal-holiday"
        className="py-16 sm:py-20 bg-[#F7F9FB] border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                Group B · Seasonal &amp; Permanent Lighting
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
                Seasonal &amp; Holiday Services
              </h2>
            </div>
            <Link
              to="/holiday-lighting"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F38] hover:text-[#16A34A] shrink-0"
            >
              <span>Explore Holiday &amp; LED Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            {HOLIDAY_SERVICES.map((service, idx) => (
              <ServiceDetailBlock key={service.id} service={service} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <TpsMembershipSection />
      <FinalCtaBand />
    </>
  );
}
