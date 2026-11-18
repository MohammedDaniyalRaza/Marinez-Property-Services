import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { TESTIMONIALS } from '../../data/business';

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section className="py-16 sm:py-24 bg-[#0B1F38] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4ADE80]">
              Neighbor Reviews
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Trusted Across Tulsa Neighborhoods.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Homeowners and commercial managers rely on Marinez Property Services for spotless driveways, crisp lawns, and hassle-free holiday displays.
            </p>

            <div className="flex items-center gap-3 pt-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="h-11 w-11 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="h-11 w-11 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="ml-2 font-mono text-xs text-slate-300 tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-2xl bg-white/[0.05] border border-white/12 p-7 sm:p-10 min-h-[260px] flex flex-col justify-between">
              <Quote className="w-9 h-9 text-[#4ADE80]/60 mb-4" aria-hidden="true" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-white leading-snug">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <p className="font-semibold text-white">
                      {current.author} <span className="text-white/40 font-normal">·</span>{' '}
                      <span className="text-slate-300 font-normal">{current.neighborhood}</span>
                    </p>
                    <p className="text-xs font-medium text-[#4ADE80]">{current.service}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2 mt-6">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndex(idx)}
                    aria-label={`View review from ${item.author}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === index ? 'w-7 bg-[#4ADE80]' : 'w-2 bg-white/25 hover:bg-white/45'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
