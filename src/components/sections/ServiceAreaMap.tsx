import { MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../../data/business';

const MAP_PINS = [
  { name: 'Owasso', x: 320, y: 74, note: 'North Metro Lawn, Lighting & Pressure Washing' },
  { name: 'Claremore', x: 432, y: 92, note: 'Residential & Acreage Property Maintenance' },
  { name: 'Sand Springs', x: 112, y: 152, note: 'Tree Trimming, Gutters & Exterior Wash' },
  { name: 'Tulsa', x: 245, y: 168, note: 'Core Metro Hub — Midtown, South & East Tulsa', primary: true },
  { name: 'Catoosa', x: 378, y: 158, note: 'Residential & Commercial Service Routes' },
  { name: 'Sapulpa', x: 128, y: 266, note: 'Lawn Maintenance, Cleanup & Haul-Away' },
  { name: 'Jenks', x: 215, y: 248, note: 'Permanent LEDs, Holiday Lights & Turf Care' },
  { name: 'Broken Arrow', x: 356, y: 238, note: 'Full-Service Lawn, Driveway Wash & Bins' },
  { name: 'Glenpool', x: 196, y: 318, note: 'Residential Curb Appeal & Junk Removal' },
  { name: 'Bixby', x: 298, y: 306, note: 'Weekly Lawn Care & Custom Holiday Displays' },
];

export function ServiceAreaMap() {
  const [selected, setSelected] = useState(MAP_PINS[3]); // Tulsa default

  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Community List */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16A34A] mb-2">
                Service Territory
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1726]">
                Serving Tulsa, OK &amp; Surrounding Communities.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Select any community on the map or list to check active service availability for residential and commercial properties.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {MAP_PINS.map((pin) => {
                const isActive = selected.name === pin.name;
                return (
                  <button
                    key={pin.name}
                    type="button"
                    onClick={() => setSelected(pin)}
                    className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1F38] border-[#0B1F38] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-[#0B1726] hover:border-[#16A34A]'
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-[#4ADE80]' : 'text-[#16A34A]'
                      }`}
                    />
                    <span className="truncate">{pin.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4">
              <div>
                <p className="font-display font-bold text-base text-[#0B1726]">
                  {selected.name}, Oklahoma
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{selected.note}</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D]"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Styled SVG Metro Map Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#091524] border border-slate-800 p-4 sm:p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 mb-3 border-b border-white/10">
                <span className="font-semibold text-white">Greater Tulsa Service Radius</span>
                <span>{BUSINESS.serviceArea}</span>
              </div>

              <svg
                viewBox="0 0 520 380"
                className="w-full h-auto"
                role="img"
                aria-label="Interactive service area map of Tulsa and surrounding Oklahoma communities"
              >
                {/* Background subtle grid */}
                <defs>
                  <pattern id="tulsa-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(148,163,184,0.08)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="520" height="380" rx="12" fill="#0C1C2F" />
                <rect width="520" height="380" rx="12" fill="url(#tulsa-grid)" />

                {/* Service radius rings centered on Tulsa */}
                <circle
                  cx="245"
                  cy="168"
                  r="175"
                  fill="rgba(22,163,74,0.05)"
                  stroke="rgba(74,222,128,0.22)"
                  strokeDasharray="6 6"
                  strokeWidth="1.5"
                />
                <circle
                  cx="245"
                  cy="168"
                  r="105"
                  fill="rgba(22,163,74,0.07)"
                  stroke="rgba(74,222,128,0.3)"
                  strokeWidth="1"
                />

                {/* Arkansas River subtle stylized path */}
                <path
                  d="M 45 125 Q 150 140 190 195 T 240 275 T 335 345"
                  fill="none"
                  stroke="rgba(56,189,248,0.28)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* Highway corridors */}
                <path
                  d="M 60 285 L 245 168 L 460 72"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />
                <path
                  d="M 245 40 L 245 168 L 298 340"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />
                <path
                  d="M 90 152 L 420 158"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                />

                {/* Community Pins */}
                {MAP_PINS.map((pin) => {
                  const isActive = selected.name === pin.name;
                  return (
                    <g
                      key={pin.name}
                      className="cursor-pointer"
                      onClick={() => setSelected(pin)}
                    >
                      {isActive && (
                        <circle
                          cx={pin.x}
                          cy={pin.y}
                          r="18"
                          fill="rgba(74,222,128,0.2)"
                          stroke="#4ADE80"
                          strokeWidth="1.5"
                        />
                      )}
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={pin.primary ? 8 : 6}
                        fill={isActive ? '#4ADE80' : '#FFFFFF'}
                        stroke="#091524"
                        strokeWidth="2.5"
                      />
                      <text
                        x={pin.x}
                        y={pin.y - 14}
                        textAnchor="middle"
                        fill={isActive ? '#4ADE80' : '#E2E8F0'}
                        fontSize={pin.primary ? '13' : '11'}
                        fontWeight={isActive || pin.primary ? '700' : '500'}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {pin.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
