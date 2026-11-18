import { ArrowRight, CheckCircle2, CreditCard, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { TpsMembershipSection } from '../components/sections/TpsMembershipSection';
import { PageHero } from '../components/ui/PageHero';
import { BUSINESS } from '../data/business';
import { SITE_IMAGES } from '../data/images';
import { PRICING_LIST } from '../data/services';

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Rates & Loyalty Perks"
        title="Membership & Starting Pricing."
        description="Straightforward starting rates on holiday lighting and permanent LEDs, free custom quotes on lawn and pressure washing projects, plus automatic TPS Membership rewards when you spend $250+."
        image={SITE_IMAGES.heroPricing}
        imageAlt="Crisp striped suburban lawn maintained by Marinez Property Services"
      />

      {/* Price Table Section */}
      <section className="py-16 sm:py-24 bg-[#F7F9FB]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                Service Rate Guide
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
                Starting Prices &amp; Custom Quotes
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-3 transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>Request Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-200">
              {PRICING_LIST.map((row) => (
                <div
                  key={row.service}
                  className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="space-y-1 max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {row.category}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B1726]">
                      {row.service}
                    </h3>
                    <p className="text-sm text-slate-600">{row.notes}</p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-2 sm:pt-0">
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-[#16A34A] tabular-nums">
                      {row.startingPrice}
                    </span>
                    <Link
                      to={`/contact?service=${encodeURIComponent(row.service)}`}
                      className="text-xs font-semibold text-[#0B1F38] hover:text-[#16A34A] inline-flex items-center gap-1"
                    >
                      <span>Quote this</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment & Billing Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex items-start gap-4">
              <span className="h-11 w-11 rounded-xl bg-[#0B1F38] text-[#4ADE80] flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-[#0B1726]">
                  Convenient Payment Methods
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  We accept <strong>{BUSINESS.payments.join(', ')}</strong> on completion—no complicated portals required.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex items-start gap-4">
              <span className="h-11 w-11 rounded-xl bg-[#0B1F38] text-[#4ADE80] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-[#0B1726]">
                  Invoices &amp; Commercial Contracts
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Need documentation for property management, HOAs, or commercial buildings? Itemized invoices and recurring contracts are always available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TPS Membership Section */}
      <TpsMembershipSection />

      {/* Referral Rewards Highlight */}
      <section className="py-14 bg-[#F7F9FB] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="rounded-2xl bg-[#0B1F38] text-white p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4ADE80]">
                Referral Rewards
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Share Your Member Perks With Neighbors &amp; Friends.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Once you unlock TPS Membership at $250+, anyone you refer receives member-friendly care while you earn service credits and special discounts on upcoming visits.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-100 shrink-0">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                <span>Automatic % off every future job</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                <span>Earn credits per completed referral</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                <span>Priority seasonal &amp; holiday scheduling</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FinalCtaBand />
    </>
  );
}
