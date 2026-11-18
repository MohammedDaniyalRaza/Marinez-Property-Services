import { MapPin, Package, Phone } from 'lucide-react';
import { PARTNER } from '../../data/business';

export function PartnerStrip() {
  return (
    <section
      aria-label="Local Business Partner"
      className="py-10 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-[#F7F9FB] border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {PARTNER.label}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1726]">
                {PARTNER.name}
              </h3>
              <span className="text-xs sm:text-sm text-slate-600">{PARTNER.tagline}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-600 pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#0B1F38]">
                <Package className="w-4 h-4 text-[#16A34A] shrink-0" />
                Services:
              </span>
              {PARTNER.services.map((srv, idx) => (
                <span key={srv} className="inline-flex items-center gap-2">
                  <span>{srv}</span>
                  {idx < PARTNER.services.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 lg:text-right shrink-0">
            <p className="inline-flex lg:justify-end items-start gap-1.5 font-medium text-[#0B1726]">
              <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>{PARTNER.address}</span>
            </p>
            <p className="text-xs text-slate-500">{PARTNER.landmark}</p>
            <p>
              <a
                href={PARTNER.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-[#0B1F38] hover:text-[#16A34A] tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Partner Line: {PARTNER.phone}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
