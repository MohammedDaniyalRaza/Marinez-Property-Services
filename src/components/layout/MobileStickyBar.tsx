import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../../data/business';

export function MobileStickyBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 h-14 bg-[#081320]/96 backdrop-blur-md border-t border-white/15 px-3 flex items-center gap-2.5 shadow-[0_-6px_24px_rgba(0,0,0,0.28)]"
      role="region"
      aria-label="Quick Contact Actions"
    >
      <a
        href={BUSINESS.phones[0].href}
        className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold px-3 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#4ADE80] shrink-0" />
        <span>Call Now</span>
      </a>
      <Link
        to="/contact"
        className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-3 transition-colors"
      >
        <span>Get Quote</span>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </Link>
    </div>
  );
}
