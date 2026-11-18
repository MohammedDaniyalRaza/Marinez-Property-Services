import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SHOWCASE_TABS } from '../../data/services';
import { SmartImage } from '../ui/SmartImage';

export function InteractiveShowcase() {
  const [activeId, setActiveId] = useState(SHOWCASE_TABS[0].id);
  const current = SHOWCASE_TABS.find((t) => t.id === activeId) ?? SHOWCASE_TABS[0];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
              Explore Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1726]">
              Four Core Divisions. One Dependable Crew.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Service Categories"
            className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/75 rounded-xl w-full lg:w-auto"
          >
            {SHOWCASE_TABS.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={`flex-1 sm:flex-initial px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1F38] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0B1726] hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(11,23,38,0.06)]"
          >
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[#0A1929]">
              <SmartImage
                src={current.image}
                alt={current.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111D]/55 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-4 left-5 right-5 text-xs font-medium text-white/90 tracking-wide">
                {current.eyebrow}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                  {current.label}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1726] leading-tight">
                  {current.headline}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {current.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-[#0B1726] font-medium">
                      <span className="mt-0.5 h-5 w-5 rounded-md bg-[#16A34A]/12 text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(current.serviceParam)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-3 transition-colors"
                >
                  <span>Quote {current.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-[#0B1F38] hover:text-[#16A34A] transition-colors py-2"
                >
                  View all services
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
