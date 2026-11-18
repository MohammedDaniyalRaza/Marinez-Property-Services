import {
  ArrowRight,
  CloudRain,
  Droplets,
  Leaf,
  Scissors,
  Trash2,
  Trees,
  Truck,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAINTENANCE_SERVICES, type ServiceItem } from '../../data/services';
import { SmartImage } from '../ui/SmartImage';

const ICON_MAP = {
  Trees,
  Droplets,
  Leaf,
  Scissors,
  CloudRain,
  Truck,
  Trash2,
  Wrench,
};

function getIcon(name: ServiceItem['iconName']) {
  return ICON_MAP[name as keyof typeof ICON_MAP] || Wrench;
}

export function BentoServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
              Property &amp; Lawn Maintenance
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1726]">
              We Do Any &amp; Everything for Your Home or Business.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F38] hover:text-[#16A34A] transition-colors shrink-0"
          >
            <span>See full service specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {MAINTENANCE_SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isHeroTile = index === 0 || index === 1;
            const isWideBottom = index === 6 || index === 7;
            const spanClass = isHeroTile
              ? 'lg:col-span-6'
              : isWideBottom
              ? 'lg:col-span-6'
              : 'lg:col-span-3';

            return (
              <Link
                key={service.id}
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className={`${spanClass} group relative rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-[#16A34A]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {isHeroTile ? (
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                    <div className="sm:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                            {service.number}
                          </span>
                          <span className="h-9 w-9 rounded-lg bg-[#0B1F38] text-white flex items-center justify-center group-hover:bg-[#16A34A] transition-colors">
                            <Icon className="w-4 h-4" />
                          </span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1726] tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] group-hover:translate-x-1 transition-transform">
                        <span>Request Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="sm:col-span-6 min-h-[210px] sm:min-h-full relative overflow-hidden">
                      <SmartImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                          {service.number}
                        </span>
                        <span className="h-9 w-9 rounded-lg bg-white border border-slate-200 text-[#0B1F38] flex items-center justify-center group-hover:bg-[#16A34A] group-hover:border-[#16A34A] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B1726] tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500">Year-Round Service</span>
                      <span className="inline-flex items-center gap-1 text-[#16A34A] group-hover:translate-x-1 transition-transform">
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
