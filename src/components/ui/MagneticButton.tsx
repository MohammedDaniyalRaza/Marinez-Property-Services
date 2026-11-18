import { useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  external?: boolean;
}

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
    setOffset({ x: dx, y: dy });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: offset.x === 0 && offset.y === 0 ? 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
  };

  const baseClass = `inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16A34A] ${className}`;

  if (to) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={style}
        className="inline-block"
      >
        <Link to={to} onClick={onClick} aria-label={ariaLabel} className={baseClass}>
          {children}
        </Link>
      </div>
    );
  }

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={style}
        className="inline-block"
      >
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={baseClass}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={style}
      className="inline-block"
    >
      <button type={type} onClick={onClick} aria-label={ariaLabel} className={baseClass}>
        {children}
      </button>
    </div>
  );
}
