const MARQUEE_ITEMS = [
  'LAWN CARE & LANDSCAPING',
  'PRESSURE WASHING',
  'GUTTER CLEANING',
  'PERMANENT LED LIGHTING',
  'TRASH CAN SANITIZING',
  'JUNK & DEBRIS REMOVAL',
  'HOLIDAY LIGHT INSTALL',
  'TREE & BUSH TRIMMING',
];

export function ServiceMarquee() {
  return (
    <section
      aria-label="Service Highlights"
      className="bg-white border-y border-slate-200/80 py-6 sm:py-8 overflow-hidden select-none"
    >
      <div className="animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`${dup}-${idx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span
                  className={`font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight whitespace-nowrap ${
                    idx % 2 === 0 ? 'text-[#0B1726]' : 'text-outline-brand'
                  }`}
                >
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#16A34A] shrink-0"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
