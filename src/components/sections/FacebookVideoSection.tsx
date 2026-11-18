import { ArrowUpRight, Play, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../../data/business';
import { BRAND_ASSETS } from '../../data/images';
import { SmartImage } from '../ui/SmartImage';

export function FacebookVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMountIframe, setShouldMountIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShouldMountIframe(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMountIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-[#F7F9FB] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Descriptive Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                In Action Around Tulsa
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1726]">
                See Our Crew at Work—Real Results, Zero Shortcuts.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Watch our team in action right here in the Tulsa area. From driveway surface washes and curbside trash bin sanitizing to crisp lawn striping and holiday lighting installs, we show our real work every week on social media.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3">
              <p className="text-sm font-semibold text-[#0B1726]">
                {BUSINESS.socialNote}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                See before-and-after job clips, neighborhood holiday light installs, and seasonal specials directly on our Facebook page.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={BUSINESS.facebookReelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0B1F38] hover:bg-[#133258] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Reel on Facebook</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] px-2 py-2"
                >
                  <span>Visit Facebook Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-3 transition-colors"
              >
                Request Your Free Quote
              </Link>
              <a
                href={BUSINESS.phones[0].href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F38] hover:text-[#16A34A] tabular-nums py-2"
              >
                <Phone className="w-4 h-4 text-[#16A34A]" />
                <span>{BUSINESS.phones[0].display}</span>
              </a>
            </div>
          </div>

          {/* Stylish Phone-Frame Mockup Housing Exact 267x476 Facebook Reel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-[2.5rem] bg-[#0B1523] p-3.5 shadow-[0_28px_70px_rgba(11,23,38,0.28)] border-[3px] border-slate-700/80">
              {/* Top speaker notch */}
              <div
                aria-hidden="true"
                className="mx-auto mb-2.5 h-1.5 w-16 rounded-full bg-slate-700"
              />

              <div className="relative w-[267px] h-[476px] rounded-[1.75rem] overflow-hidden bg-[#07111D]">
                {/* Fallback card always sitting cleanly underneath until iframe paints */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-5 text-white transition-opacity duration-300 ${
                    iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <SmartImage
                      src={BRAND_ASSETS.crewPressureWash}
                      alt="Marinez Property Services Tulsa crew pressure washing"
                      className="w-full h-full object-cover opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111D] via-[#07111D]/60 to-[#07111D]/70" />
                  </div>
                  <div className="relative z-10 pt-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#4ADE80]">
                      Facebook Reel
                    </p>
                    <p className="font-display text-lg font-bold mt-1">
                      Marinez Property Services
                    </p>
                  </div>
                  <div className="relative z-10 space-y-3 pb-2">
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Loading live video preview. If your browser blocks social embeds, watch directly on Facebook.
                    </p>
                    <a
                      href={BUSINESS.facebookReelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold px-4 py-2.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch on Facebook</span>
                    </a>
                  </div>
                </div>

                {shouldMountIframe && (
                  <iframe
                    src={BUSINESS.facebookReelEmbedSrc}
                    title="Marinez Property Services Field Work Reel"
                    width="267"
                    height="476"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    onLoad={() => setIframeLoaded(true)}
                    className="relative z-10 block w-[267px] h-[476px]"
                  />
                )}
              </div>

              <div className="mt-2.5 flex justify-center">
                <a
                  href={BUSINESS.facebookReelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-slate-300 hover:text-[#4ADE80] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open in Facebook</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
