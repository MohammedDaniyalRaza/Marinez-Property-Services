import { Smartphone, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ColorPreset {
  id: string;
  label: string;
  category: string;
  colors: string[];
  description: string;
}

const PRESETS: ColorPreset[] = [
  {
    id: 'holiday',
    label: 'Holiday Classic',
    category: 'Holiday',
    colors: ['#DC2626', '#16A34A', '#FDE68A', '#DC2626', '#16A34A'],
    description: 'Traditional crimson, emerald, and warm twinkle for December evenings.',
  },
  {
    id: 'gameday',
    label: 'Game Day Gold & Blue',
    category: 'Game Day',
    colors: ['#2563EB', '#F59E0B', '#FFFFFF', '#2563EB', '#F59E0B'],
    description: 'Show team pride on fall Saturdays and Sunday watch parties in one tap.',
  },
  {
    id: 'everyday',
    label: 'Warm Everyday Accent',
    category: 'Everyday',
    colors: ['#FDE68A', '#FBBF24', '#FDE68A', '#FBBF24', '#FDE68A'],
    description: 'Clean 2700K architectural down-lighting for subtle year-round curb appeal.',
  },
  {
    id: 'emerald',
    label: 'Marinez Emerald Glow',
    category: 'Everyday',
    colors: ['#22C55E', '#10B981', '#FBBF24', '#10B981', '#22C55E'],
    description: 'Crisp emerald and warm amber signature look matching your lawn.',
  },
  {
    id: 'patriotic',
    label: 'Red, White & Blue',
    category: 'Holiday',
    colors: ['#EF4444', '#FFFFFF', '#3B82F6', '#EF4444', '#FFFFFF'],
    description: 'Memorial Day, Fourth of July, and Veterans Day ready at zero extra effort.',
  },
];

export function PermanentLedAppMockup() {
  const [selected, setSelected] = useState<ColorPreset>(PRESETS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-[#0B1320] border border-white/12 p-6 sm:p-10">
      {/* Left Interactive House Roofline Preview */}
      <div className="lg:col-span-7 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FBBF24]">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Roofline Preview</span>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Mode: <strong className="text-white">{selected.label}</strong>
          </span>
        </div>

        {/* Stylized Night Roofline SVG with Dynamic LED Nodes */}
        <div className="rounded-xl bg-[#050A12] border border-white/10 p-5 sm:p-6 overflow-hidden">
          <svg
            viewBox="0 0 520 250"
            className="w-full h-auto"
            role="img"
            aria-label={`House roofline illuminated in ${selected.label} LED colors`}
          >
            {/* Sky stars */}
            <circle cx="48" cy="36" r="1.3" fill="#fff" opacity="0.45" />
            <circle cx="140" cy="24" r="1" fill="#fff" opacity="0.35" />
            <circle cx="385" cy="30" r="1.4" fill="#fff" opacity="0.5" />
            <circle cx="470" cy="52" r="1.1" fill="#fff" opacity="0.35" />

            {/* House Silhouette */}
            <polygon points="45,148 165,68 285,148" fill="#111C2D" stroke="#1E293B" strokeWidth="2" />
            <polygon points="240,148 355,82 475,148" fill="#132033" stroke="#1E293B" strokeWidth="2" />
            <rect x="65" y="148" width="390" height="82" fill="#0F1928" stroke="#1E293B" strokeWidth="2" />

            {/* Warm Interior Windows */}
            <rect x="105" y="170" width="44" height="36" rx="2" fill="#F59E0B" opacity="0.35" />
            <rect x="200" y="174" width="32" height="56" rx="2" fill="#FBBF24" opacity="0.42" />
            <rect x="305" y="172" width="110" height="58" rx="3" fill="#0B1320" stroke="#334155" strokeWidth="1.5" />

            {/* Ground Lawn */}
            <rect x="0" y="230" width="520" height="20" fill="#0A1E17" />

            {/* Dynamic Under-Eave Permanent LEDs along both gables */}
            {Array.from({ length: 19 }).map((_, idx) => {
              const t = idx / 18;
              const x = t <= 0.5 ? 45 + (t * 2) * 120 : 165 + ((t - 0.5) * 2) * 120;
              const y = t <= 0.5 ? 148 - (t * 2) * 80 : 68 + ((t - 0.5) * 2) * 80;
              const color = selected.colors[idx % selected.colors.length];
              return (
                <g key={`g1-${idx}`}>
                  <circle cx={x} cy={y + 4} r="8" fill={color} opacity="0.22" />
                  <circle cx={x} cy={y + 4} r="3.2" fill={color} />
                </g>
              );
            })}

            {Array.from({ length: 17 }).map((_, idx) => {
              const t = idx / 16;
              const x = t <= 0.5 ? 245 + (t * 2) * 110 : 355 + ((t - 0.5) * 2) * 120;
              const y = t <= 0.5 ? 148 - (t * 2) * 66 : 82 + ((t - 0.5) * 2) * 66;
              const color = selected.colors[(idx + 2) % selected.colors.length];
              return (
                <g key={`g2-${idx}`}>
                  <circle cx={x} cy={y + 4} r="8" fill={color} opacity="0.22" />
                  <circle cx={x} cy={y + 4} r="3.2" fill={color} />
                </g>
              );
            })}
          </svg>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">{selected.description}</p>
      </div>

      {/* Right Phone App Color Controller Mockup */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="w-full max-w-[320px] rounded-[2rem] bg-[#060B12] border-2 border-slate-700 p-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#FBBF24]" />
              <span className="font-display text-xs font-bold text-white">
                Roofline Control App
              </span>
            </div>
            <span className="text-[11px] text-[#4ADE80] font-semibold">Connected</span>
          </div>

          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
            Tap Preset Scene
          </p>

          <div className="space-y-2">
            {PRESETS.map((preset) => {
              const isSelected = preset.id === selected.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setSelected(preset)}
                  className={`w-full text-left rounded-xl p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-white/10 border-[#FBBF24] shadow-sm'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-white">{preset.label}</p>
                    <p className="text-[11px] text-slate-400">{preset.category}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {preset.colors.slice(0, 3).map((hex, i) => (
                      <span
                        key={i}
                        className="h-3.5 w-3.5 rounded-full border border-white/25"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
