import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { PageHero } from '../components/ui/PageHero';
import { BUSINESS, FAQ_ITEMS } from '../data/business';
import { SITE_IMAGES } from '../data/images';

export function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear Answers Before You Book."
        description="Everything Tulsa homeowners and property managers ask about free quotes, TPS Membership, permanent LED lighting, mailbox wrapping timing, and payment options."
        image={SITE_IMAGES.heroFaq}
        imageAlt="Neatly trimmed hedges, trees, and manicured residential landscape"
      />

      <section className="py-16 sm:py-24 bg-[#F7F9FB]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-colors hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[60px] px-5 sm:px-7 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span className="font-mono text-xs font-semibold text-[#16A34A] tabular-nums shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-base sm:text-lg font-bold text-[#0B1726]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#16A34A]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-6 pt-1 pl-12 sm:pl-14 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0B1726]">
                Have a Specific Question About Your Property?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Call or text either Tulsa line directly, or send details through our quote form.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={BUSINESS.phones[0].href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F38] hover:bg-[#133258] text-white text-sm font-semibold px-4 py-3 tabular-nums transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4ADE80]" />
                <span>{BUSINESS.phones[0].display}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-3 transition-colors"
              >
                Ask &amp; Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaBand />
    </>
  );
}
