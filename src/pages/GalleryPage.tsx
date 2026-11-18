import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FacebookVideoSection } from '../components/sections/FacebookVideoSection';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { PageHero } from '../components/ui/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { GALLERY_ITEMS, SITE_IMAGES, type GalleryImage } from '../data/images';

const CATEGORIES = [
  'All',
  'Pressure Washing',
  'Lawn & Landscaping',
  'Holiday Lighting',
  'Cleanup',
] as const;

export function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleItems: GalleryImage[] =
    filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx - 1 + visibleItems.length) % visibleItems.length
    );
  }, [visibleItems.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % visibleItems.length));
  }, [visibleItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  const activePhoto = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title="Work Across Tulsa Lawns, Driveways & Rooflines."
        description="Browse completed pressure washing, commercial lawn striping, leaf and gutter cleanups, and holiday lighting installations—plus our crew video reel below."
        image={SITE_IMAGES.heroGallery}
        imageAlt="Evening view of suburban home with permanent LED roofline lighting"
      />

      {/* Filterable Uniform Photo Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-1">
                Photo Gallery
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1726]">
                Filter by Service Category
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Gallery Category Filter"
              className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 rounded-xl"
            >
              {CATEGORIES.map((cat) => {
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => {
                      setFilter(cat);
                      setLightboxIndex(null);
                    }}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1F38] text-white shadow-sm'
                        : 'text-slate-700 hover:text-[#0B1726] hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#0A1929] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16A34A]"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111D]/88 via-[#07111D]/20 to-transparent opacity-90 sm:opacity-75 group-hover:opacity-95 transition-opacity" />

                <span className="absolute top-3.5 right-3.5 h-9 w-9 rounded-lg bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-medium text-[#4ADE80]">
                    {item.category} <span className="text-white/40">·</span> {item.location}
                  </p>
                  <p className="font-display text-base sm:text-lg font-bold tracking-tight mt-0.5">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard & Touch Swipe Support */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
            onClick={closeLightbox}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (delta > 45) prevImage();
              if (delta < -45) nextImage();
              touchStartX.current = null;
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-11 w-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous photo"
              className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next photo"
              className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center gap-4"
            >
              <div className="w-full max-h-[76vh] aspect-[4/3] rounded-2xl overflow-hidden bg-[#07111D] border border-white/15">
                <SmartImage
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="w-full h-full object-contain bg-[#060E18]"
                />
              </div>
              <div className="w-full flex flex-wrap items-center justify-between gap-3 text-white px-1">
                <div>
                  <p className="font-display text-lg font-bold">{activePhoto.title}</p>
                  <p className="text-xs text-slate-300">
                    {activePhoto.category} · {activePhoto.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:hidden">
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous photo"
                    className="h-10 w-10 rounded-lg bg-white/15 text-white flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next photo"
                    className="h-10 w-10 rounded-lg bg-white/15 text-white flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded Facebook Reel Video Section */}
      <FacebookVideoSection />

      <FinalCtaBand />
    </>
  );
}
