import { ArrowUpRight, CreditCard, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, PARTNER } from '../../data/business';
import { BrandCrest } from '../ui/BrandCrest';

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'All Services' },
  { to: '/holiday-lighting', label: 'Holiday & Permanent Lighting' },
  { to: '/pricing', label: 'Membership & Pricing' },
  { to: '/gallery', label: 'Project Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Request a Quote' },
];

export function Footer() {
  return (
    <footer className="bg-[#06101B] text-white border-t border-white/10 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Crest & Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-4">
              <BrandCrest className="h-20 sm:h-24 w-auto" />
              <div>
                <p className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
                  {BUSINESS.name}
                </p>
                <p className="text-sm text-[#4ADE80] font-medium mt-0.5">
                  Operating as {BUSINESS.dba}
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {BUSINESS.tagline} {BUSINESS.subTagline} across {BUSINESS.serviceArea}.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-slate-200 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[#4ADE80]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                SDVOSB Veteran-Owned
              </span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>Residential &amp; Commercial</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>Free Quotes</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-[#4ADE80] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
              Call or Text
            </h3>

            <div className="space-y-2.5">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.href}
                  className="flex items-center gap-2.5 text-base font-semibold text-white hover:text-[#4ADE80] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>{phone.display}</span>
                  <span className="text-xs font-normal text-slate-400">({phone.mode})</span>
                </a>
              ))}
            </div>

            <a
              href={BUSINESS.emailHref}
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-[#4ADE80] shrink-0" />
              <span>{BUSINESS.email}</span>
            </a>

            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
              <span>{BUSINESS.serviceArea}</span>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/8 hover:bg-white/15 border border-white/15 px-3.5 py-2 text-xs font-semibold text-white transition-colors"
              >
                <span>Follow on Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-400">{BUSINESS.socialNote}</p>
            </div>
          </div>

          {/* Column 4: Payments & Partner */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Payment Options
              </h3>
              <div className="flex items-start gap-2 text-sm text-slate-200">
                <CreditCard className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{BUSINESS.payments.join(' · ')}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {BUSINESS.billingNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                {PARTNER.label}
              </p>
              <p className="text-sm font-semibold text-white">{PARTNER.name}</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {PARTNER.address}
              </p>
              <a
                href={PARTNER.phoneHref}
                className="inline-block mt-1 text-xs font-medium text-slate-300 hover:text-white tabular-nums"
              >
                {PARTNER.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name} ({BUSINESS.dba}). All rights reserved.
          </p>
          <p>{BUSINESS.website} · Serving Tulsa, OK</p>
        </div>
      </div>
    </footer>
  );
}
