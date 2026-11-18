import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BUSINESS } from '../../data/business';
import { BrandCrest } from '../ui/BrandCrest';
import { MagneticButton } from '../ui/MagneticButton';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/holiday-lighting', label: 'Holiday Lighting' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07121E]/92 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.28)] py-2.5'
            : 'bg-gradient-to-b from-[#06101B]/80 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
          {/* Zone 1: Brand Crest + Single-Line Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] rounded-md"
            aria-label="Marinez Property Services Home"
          >
            <BrandCrest className="h-10 sm:h-11 w-auto" />
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
              Marinez
            </span>
          </Link>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-6"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-[13px] xl:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#4ADE80]'
                      : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#22C55E] transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Desktop Primary Action OR Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:block">
              <MagneticButton
                to="/contact"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] bg-[#07121F] text-white flex flex-col overflow-y-auto overflow-x-hidden lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <BrandCrest className="h-10 w-auto" />
                <span className="font-display font-bold text-lg text-white">Marinez</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-6 flex flex-col justify-center gap-1">
              {NAV_LINKS.map((item, idx) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx, duration: 0.25 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 px-2 rounded-lg font-display text-2xl font-semibold tracking-tight transition-colors ${
                        isActive
                          ? 'text-[#4ADE80] bg-white/5'
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-50" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-8 pt-4 border-t border-white/10 space-y-4 shrink-0 bg-[#050D17]">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold rounded-lg px-5 py-3 transition-colors"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                {BUSINESS.phones.map((phone) => (
                  <a
                    key={phone.display}
                    href={phone.href}
                    className="min-h-[44px] flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#4ADE80] shrink-0" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
