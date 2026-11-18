import { MoveHorizontal } from 'lucide-react';
import { useRef, useState } from 'react';
import { SITE_IMAGES } from '../../data/images';
import { SmartImage } from '../ui/SmartImage';

const COMPARISONS = [
  {
    id: 'driveway',
    label: 'Driveway Pressure Washing',
    caption: 'Removing heavy Oklahoma algae, mildew, and tire grime in a single rotary wash pass.',
    beforeSrc: SITE_IMAGES.beforeDriveway,
    beforeAlt: 'Concrete driveway stained with dark algae and weather grime before pressure washing',
    afterSrc: SITE_IMAGES.afterDriveway,
    afterAlt: 'Same style concrete driveway freshly pressure-washed clean and bright',
  },
  {
    id: 'lawn',
    label: 'Lawn Care & Striping',
    caption: 'Transforming overgrown residential turf into cleanly edged, striped curb appeal.',
    beforeSrc: SITE_IMAGES.beforeLawn,
    beforeAlt: 'Residential Tulsa front lawn before fresh mowing and edging',
    afterSrc: SITE_IMAGES.afterLawn,
    afterAlt: 'Freshly mowed lawn with crisp diagonal commercial stripes and clean sidewalk edges',
  },
];

export function BeforeAfterSlider() {
  const [activeMode, setActiveMode] = useState<'driveway' | 'lawn'>('driveway');
  const [percent, setPercent] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const current = COMPARISONS.find((c) => c.id === activeMode) ?? COMPARISONS[0];

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.max(4, Math.min(96, raw)));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
              Visible Proof
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1726]">
              Drag to Compare Before &amp; After.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {current.caption}
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl self-start lg:self-auto">
            {COMPARISONS.map((mode) => {
              const active = mode.id === activeMode;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => {
                    setActiveMode(mode.id as 'driveway' | 'lawn');
                    setPercent(52);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#0B1F38] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0B1726]'
                  }`}
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={containerRef}
          onPointerDown={(e) => {
            draggingRef.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!draggingRef.current) return;
            updateFromClientX(e.clientX);
          }}
          onPointerUp={(e) => {
            draggingRef.current = false;
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[580px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-[0_18px_48px_rgba(11,23,38,0.1)] select-none touch-none cursor-ew-resize bg-[#0A1929]"
          role="slider"
          aria-label="Before and after property transformation slider"
          aria-valuemin={4}
          aria-valuemax={96}
          aria-valuenow={Math.round(percent)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPercent((p) => Math.max(4, p - 4));
            if (e.key === 'ArrowRight') setPercent((p) => Math.min(96, p + 4));
          }}
        >
          {/* After layer (full base) */}
          <SmartImage
            src={current.afterSrc}
            alt={current.afterAlt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before layer (clipped by percent) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
          >
            <SmartImage
              src={current.beforeSrc}
              alt={current.beforeAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Labels */}
          <span className="pointer-events-none absolute top-4 left-4 bg-[#081320]/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-white/15">
            Before
          </span>
          <span className="pointer-events-none absolute top-4 right-4 bg-[#16A34A]/92 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-md">
            After Marinez
          </span>

          {/* Vertical Divider Line + Handle */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
            style={{ left: `${percent}%` }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white text-[#0B1F38] shadow-xl border-2 border-[#16A34A] flex items-center justify-center">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
