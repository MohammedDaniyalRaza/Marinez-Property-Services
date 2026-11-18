import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { BrandCrest } from './BrandCrest';

export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !sessionStorage.getItem('marinez_preloader_seen');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('marinez_preloader_seen', '1');
      } catch {
        // ignore storage restrictions
      }
    }, 1350);

    return () => window.clearTimeout(timer);
  }, [visible, reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="marinez-preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0.96 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#091524] text-white px-6"
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.55, opacity: 0.6 }}
              animate={{ scale: 1.55, opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute h-36 w-36 rounded-full border-2 border-[#38BDF8]/60"
            />
            <motion.div
              initial={{ scale: 0.7, opacity: 0.7 }}
              animate={{ scale: 1.9, opacity: 0 }}
              transition={{ duration: 1.25, delay: 0.15, ease: 'easeOut' }}
              className="absolute h-36 w-36 rounded-full border border-[#22C55E]/50"
            />
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandCrest className="h-32 sm:h-36 w-auto drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-5 font-display text-sm tracking-[0.2em] uppercase text-white/80"
          >
            Tulsa&apos;s Full-Service Property Solution
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
