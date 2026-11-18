import { ArrowRight, Mail, Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import { MagneticButton } from '../ui/MagneticButton';

export function FinalCtaBand() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#0B233C] via-[#0B2F34] to-[#0A251B] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4ADE80]">
              Ready When You Are
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              One Call Covers Your Lawn, Exterior Wash &amp; Holiday Lights.
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Call or text for a fast, free quote anywhere in {BUSINESS.serviceArea}. Cash, card, and mobile pay accepted—with invoices and contracts ready for commercial accounts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5 shrink-0">
            <MagneticButton
              to="/contact"
              className="bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-colors"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <div className="flex flex-wrap items-center gap-3">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.href}
                  className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/18 border border-white/15 px-4 py-2.5 text-sm font-semibold text-white tabular-nums transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#4ADE80]" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>

            <a
              href={BUSINESS.emailHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>{BUSINESS.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
