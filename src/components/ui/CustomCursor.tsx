import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="button"], input, textarea, [data-cursor="expand"]')
      );
      setExpanded(isInteractive);
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      curX += (mouseX - curX) * 0.22;
      curY += (mouseY - curY) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) scale(${
          expanded ? 1.55 : 1
        })`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [reduced, expanded]);

  if (reduced) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[90] hidden lg:block h-7 w-7 rounded-full border transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${
        expanded
          ? 'border-[#16A34A] bg-[#16A34A]/10'
          : 'border-[#16A34A]/55 bg-transparent'
      }`}
    />
  );
}
