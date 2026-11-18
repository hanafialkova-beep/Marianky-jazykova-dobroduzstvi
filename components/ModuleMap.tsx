"use client";

import { MODULES } from '@/data/modules';
import { useProgress } from '@/hooks/useProgress';
import StarRating from './StarRating';

interface Props {
  onSelectModule: (moduleId: number) => void;
  onBack: () => void;
}

export default function ModuleMap({ onSelectModule, onBack }: Props) {
  const { getModuleProgress, isUnlocked, totalStars } = useProgress();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-50 via-background to-amber-50">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-violet-100 px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 font-nunito text-sm font-semibold text-violet border-2 border-violet-200 rounded-xl px-3 py-2 active:scale-95 transition-all"
        >
          ← Zpět
        </button>
        <h2 className="font-baloo text-lg font-bold text-violet">Mariančina témata</h2>
        <div className="flex items-center gap-1 bg-gold/10 rounded-xl px-3 py-1.5">
          <span className="text-lg">⭐</span>
          <span className="font-baloo text-base font-bold text-gold">{totalStars}</span>
        </div>
      </header>

      {/* Module list */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-8">
        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {MODULES.map(mod => {
            const prog = getModuleProgress(mod.id);
            const unlocked = isUnlocked(mod.id);
            const isLast = mod.id === 10;
            const prevMod = mod.id > 1 ? MODULES.find(m => m.id === mod.id - 1) : null;

            return (
              <div key={mod.id} className="relative">
                <button
                  onClick={() => unlocked && onSelectModule(mod.id)}
                  disabled={!unlocked}
                  className={`relative w-full rounded-2xl p-4 text-left transition-all duration-200 border-2 ${
                    unlocked
                      ? prog.completed
                        ? 'border-gold/50 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm active:scale-[0.97]'
                        : 'border-violet-200 bg-white shadow-sm hover:border-violet-400 hover:shadow-md active:scale-[0.97] cursor-pointer'
                      : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-70'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm ${
                      unlocked ? `bg-gradient-to-br ${mod.color}` : 'bg-gray-200'
                    }`}>
                      {unlocked ? mod.icon : '🔒'}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className={`font-baloo text-base font-bold leading-tight ${unlocked ? 'text-violet' : 'text-gray-400'}`}>
                          {mod.name}
                        </span>
                        {isLast && unlocked && (
                          <span className="text-xs bg-gold text-white rounded-full px-2 py-0.5 font-nunito font-bold whitespace-nowrap">
                            🏆 Finále!
                          </span>
                        )}
                        {prog.completed && (
                          <span className="text-xs bg-success/20 text-success rounded-full px-2 py-0.5 font-nunito font-semibold whitespace-nowrap">
                            ✓ Hotovo
                          </span>
                        )}
                      </div>

                      {unlocked ? (
                        <>
                          <p className="font-nunito text-xs text-foreground/50 leading-snug line-clamp-2">
                            {mod.description}
                          </p>
                          <div className="mt-1.5">
                            <StarRating stars={prog.stars} size="sm" />
                          </div>
                        </>
                      ) : (
                        <p className="font-nunito text-xs text-gray-400 leading-snug">
                          🔒 Nejdřív splň <strong>{prevMod?.name}</strong>!
                        </p>
                      )}
                    </div>

                    {/* Arrow or lock */}
                    <div className={`flex-shrink-0 text-xl pr-1 ${unlocked ? 'text-violet/30' : 'text-gray-300'}`}>
                      {unlocked ? '›' : '🔒'}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
