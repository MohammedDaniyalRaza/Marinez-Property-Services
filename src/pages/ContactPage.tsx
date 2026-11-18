import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PartnerStrip } from '../components/sections/PartnerStrip';
import { PageHero } from '../components/ui/PageHero';
import { BUSINESS } from '../data/business';
import { SITE_IMAGES } from '../data/images';
import { ALL_SERVICES } from '../data/services';

const SERVICE_OPTIONS = [
  ...ALL_SERVICES.map((s) => s.title),
  'Multiple Services / Property Bundle ($250+ TPS Membership)',
];

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialServiceParam = searchParams.get('service') || '';

  const matchedInitial =
    SERVICE_OPTIONS.find((opt) =>
      opt.toLowerCase().includes(initialServiceParam.toLowerCase())
    ) || (initialServiceParam ? initialServiceParam : SERVICE_OPTIONS[0]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial'>('Residential');
  const [selectedService, setSelectedService] = useState<string>(matchedInitial);
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialServiceParam) {
      const match = SERVICE_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(initialServiceParam.toLowerCase())
      );
      setSelectedService(match || initialServiceParam);
    }
  }, [initialServiceParam]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Please enter your name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid phone number so we can call or text your quote.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      nextErrors.message = 'Tell us briefly about your property or address in the Tulsa area.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Free Quotes · Call, Text, or Request Online"
        title="Get Your Fast Property Quote."
        description="Tell us what your home or business needs—from lawn care and driveway pressure washing to permanent LEDs or holiday lighting—and we will respond promptly with straightforward pricing."
        image={SITE_IMAGES.heroContact}
        imageAlt="Clean residential gutters and exterior brick trim maintained in Tulsa"
      />

      <section className="py-16 sm:py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Quote Request Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="py-8 text-center space-y-5">
                    <div className="mx-auto h-14 w-14 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1726]">
                      Quote Request Received, {name}!
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      We&apos;ve logged your request for <strong>{selectedService}</strong> ({propertyType}). For fastest turnaround, you can also text your property address directly to{' '}
                      <a
                        href={BUSINESS.phones[0].href}
                        className="font-semibold text-[#16A34A] underline tabular-nums"
                      >
                        {BUSINESS.phones[0].display}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setPreferredDate('');
                        setMessage('');
                        setErrors({});
                      }}
                      className="inline-flex items-center justify-center rounded-xl bg-[#0B1F38] hover:bg-[#133258] text-white text-sm font-semibold px-5 py-3 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1726]">
                        Request a Free Quote
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Zero obligation. Spend $250+ on completed work to automatically unlock TPS Membership.
                      </p>
                    </div>

                    {/* Property Type Segmented Toggle */}
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Property Type
                      </span>
                      <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                        {(['Residential', 'Commercial'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setPropertyType(type)}
                            className={`min-h-[42px] rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                              propertyType === type
                                ? 'bg-[#0B1F38] text-white shadow-sm'
                                : 'text-slate-700 hover:text-[#0B1726]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1726] focus:border-[#16A34A] focus:outline-none"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="918-555-0199"
                          className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1726] tabular-nums focus:border-[#16A34A] focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1726] focus:border-[#16A34A] focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-date"
                          className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                        >
                          Preferred Date
                        </label>
                        <input
                          id="quote-date"
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1726] focus:border-[#16A34A] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Custom Styled Service Dropdown (NOT native select) */}
                    <div ref={dropdownRef} className="relative">
                      <span
                        id="service-dropdown-label"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                      >
                        Service Needed *
                      </span>
                      <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        aria-labelledby="service-dropdown-label"
                        onClick={() => setDropdownOpen((o) => !o)}
                        className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-left text-sm font-medium text-[#0B1726] flex items-center justify-between gap-3 hover:border-[#0B1F38] focus:border-[#16A34A] focus:outline-none cursor-pointer"
                      >
                        <span className="truncate">{selectedService}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180 text-[#16A34A]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.ul
                            role="listbox"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute z-30 mt-1.5 w-full max-h-64 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-xl py-1.5"
                          >
                            {SERVICE_OPTIONS.map((option) => {
                              const isSelected = option === selectedService;
                              return (
                                <li key={option}>
                                  <button
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => {
                                      setSelectedService(option);
                                      setDropdownOpen(false);
                                    }}
                                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#16A34A]/10 text-[#0B1726] font-semibold'
                                        : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                  >
                                    <span>{option}</span>
                                    {isSelected && <Check className="w-4 h-4 text-[#16A34A] shrink-0" />}
                                  </button>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                      >
                        Property Address &amp; Project Details *
                      </label>
                      <textarea
                        id="quote-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your address or neighborhood in Tulsa and what you'd like quoted..."
                        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm text-[#0B1726] focus:border-[#16A34A] focus:outline-none"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full min-h-[50px] rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-base transition-colors cursor-pointer shadow-sm"
                    >
                      Send Free Quote Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Direct Contact Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#0B1F38] text-white p-7 sm:p-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4ADE80]">
                    Direct Dispatch
                  </p>
                  <h3 className="font-display text-2xl font-bold mt-1">
                    Call or Text Either Tulsa Line
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Send your address and a quick photo or list of what needs done for rapid estimates.
                  </p>
                </div>

                <div className="space-y-3">
                  {BUSINESS.phones.map((item) => (
                    <a
                      key={item.display}
                      href={item.href}
                      className="flex items-center justify-between gap-3 rounded-xl bg-white/8 hover:bg-white/15 border border-white/15 px-4 py-3.5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#4ADE80] shrink-0" />
                        <div>
                          <p className="font-display text-lg font-bold text-white tabular-nums">
                            {item.display}
                          </p>
                          <p className="text-xs text-slate-300">{item.label}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#4ADE80]">{item.mode}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-sm">
                  <a
                    href={BUSINESS.emailHref}
                    className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#4ADE80] shrink-0" />
                    <span>{BUSINESS.email}</span>
                  </a>

                  <div className="flex items-start gap-3 text-slate-200">
                    <MapPin className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>{BUSINESS.serviceArea}</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-200">
                    <CreditCard className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>
                      {BUSINESS.payments.join(', ')} · {BUSINESS.billingNote}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#4ADE80] shrink-0" />
                    <span>{BUSINESS.badges.join(' · ')}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <a
                    href={BUSINESS.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#0B1F38] hover:bg-slate-100 font-semibold text-sm px-4 py-3 transition-colors"
                  >
                    <span>Message or Follow on Facebook</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-center text-slate-400">{BUSINESS.socialNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerStrip />
    </>
  );
}
