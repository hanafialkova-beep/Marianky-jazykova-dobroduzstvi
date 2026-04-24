"use client";

import { useProgress } from '@/hooks/useProgress';
import { SPACE_MODULES } from '@/data/modules';
import StarRating from './StarRating';

interface Props {
  onSelectModule: (moduleId: number) => void;
  onBack: () => void;
}

// Orbital positions for the planet map — each planet gets a spot
const PLANET_POSITIONS = [
  { x: 50, y: 82 },  // 11 - bottom center
  { x: 25, y: 72 },  // 12 - bottom left
  { x: 75, y: 65 },  // 13 - right
  { x: 20, y: 50 },  // 14 - left
  { x: 70, y: 45 },  // 15 - right mid
  { x: 45, y: 38 },  // 16 - center
  { x: 15, y: 28 },  // 17 - left high
  { x: 72, y: 22 },  // 18 - right high
  { x: 42, y: 14 },  // 19 - near top
  { x: 55, y: 6 },   // 20 - top (ultima)
];

const PLANET_SIZES = [60, 52, 56, 58, 50, 64, 54, 58, 62, 72];

export default function SpaceModuleMap({ onSelectModule, onBack }: Props) {
  const { getModuleProgress, isUnlocked } = useProgress();

  return (
    <div className="min-h-screen bg-space-bg flex flex-col relative overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
          <span
            key={i}
            className="absolute text-white opacity-30 animate-twinkle select-none"
            style={{
              left: `${(i * 17 + 3) % 100}%`,
              top: `${(i * 13 + 7) % 100}%`,
              fontSize: `${6 + (i % 5) * 2}px`,
              animationDelay: `${(i * 0.3) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4 border-b border-white/10">
        <button
          onClick={onBack}
          className="text-white/70 hover:text-white font-nunito text-sm flex items-center gap-1 transition-colors"
        >
          ← Zpět
        </button>
        <div className="text-center">
          <h1 className="font-baloo text-xl text-white font-bold">🚀 Vesmírná akademie</h1>
          <p className="font-nunito text-xs text-white/50">Průzkum galaxie pravopisu</p>
        </div>
        <div className="w-16" /> {/* spacer */}
      </div>

      {/* Planet map */}
      <div className="relative z-10 flex-1 w-full max-w-sm mx-auto px-4 py-2">
        <div className="relative w-full" style={{ paddingBottom: '170%' }}>
          {/* Path lines connecting planets */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 170"
            preserveAspectRatio="none"
          >
            {PLANET_POSITIONS.slice(0, -1).map((pos, i) => {
              const next = PLANET_POSITIONS[i + 1];
              const unlocked = isUnlocked(11 + i + 1);
              return (
                <line
                  key={i}
                  x1={pos.x}
                  y1={pos.y}
                  x2={next.x}
                  y2={next.y}
                  stroke={unlocked ? 'rgba(167,139,250,0.6)' : 'rgba(255,255,255,0.1)'}
                  strokeWidth="0.8"
                  strokeDasharray={unlocked ? '0' : '2,2'}
                />
              );
            })}
          </svg>

          {/* Planets */}
          {SPACE_MODULES.map((mod, i) => {
            const pos = PLANET_POSITIONS[i];
            const size = PLANET_SIZES[i];
            const unlocked = isUnlocked(mod.id);
            const prog = getModuleProgress(mod.id);

            return (
              <button
                key={mod.id}
                disabled={!unlocked}
                onClick={() => onSelectModule(mod.id)}
                className={`absolute flex flex-col items-center transition-transform active:scale-95 ${
                  unlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-40'
                }`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: size,
                }}
              >
                {/* Planet orb */}
                <div
                  className={`rounded-full flex items-center justify-center shadow-lg relative ${
                    prog.completed
                      ? 'ring-2 ring-gold ring-offset-2 ring-offset-transparent'
                      : unlocked
                        ? 'ring-2 ring-white/30'
                        : ''
                  }`}
                  style={{
                    width: size,
                    height: size,
                    background: prog.completed
                      ? `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.3), transparent 60%), conic-gradient(from 0deg, #a78bfa, #7c3aed, #4c1d95, #a78bfa)`
                      : unlocked
                        ? `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.2), transparent 60%), conic-gradient(from 0deg, #6b7280, #374151, #1f2937, #6b7280)`
                        : 'radial-gradient(circle, #1f2937, #111827)',
                  }}
                >
                  <span style={{ fontSize: size * 0.4 }}>{mod.icon}</span>

                  {/* Lock overlay */}
                  {!unlocked && (
                    <span className="absolute text-white/60" style={{ fontSize: size * 0.3 }}>
                      🔒
                    </span>
                  )}

                  {/* Completed glow */}
                  {prog.completed && (
                    <div className="absolute inset-0 rounded-full animate-pulse bg-gold/20 pointer-events-none" />
                  )}
                </div>

                {/* Planet name */}
                <p
                  className={`font-nunito text-center leading-tight mt-1 ${
                    unlocked ? 'text-white' : 'text-white/30'
                  }`}
                  style={{ fontSize: Math.max(8, size * 0.17) }}
                >
                  {mod.name.replace(/^Planet \w+: /, '')}
                </p>

                {/* Stars */}
                {prog.completed && (
                  <div className="mt-0.5">
                    <StarRating stars={prog.stars} size="sm" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend at bottom */}
      <div className="relative z-10 px-4 pb-4 flex justify-center gap-6">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-violet-400 ring-1 ring-gold" />
          <span className="text-white/50 font-nunito text-xs">Dokončeno</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-600 ring-1 ring-white/30" />
          <span className="text-white/50 font-nunito text-xs">Odemčeno</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-900 opacity-50" />
          <span className="text-white/50 font-nunito text-xs">Zamčeno</span>
        </div>
      </div>
    </div>
  );
}
