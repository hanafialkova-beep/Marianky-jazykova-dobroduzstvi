"use client";

import { useProgress } from '@/hooks/useProgress';

interface Props {
  onStart: () => void;
  onStartSpace: () => void;
}

export default function WelcomeScreen({ onStart, onStartSpace }: Props) {
  const { totalStars, completedModules, allPart1Complete, progress, resetProgress } = useProgress();

  // Count only part 1 and part 2 separately
  const part1Done = [1,2,3,4,5,6,7,8,9,10].filter(i => progress[i]?.completed).length;
  const part1Stars = [1,2,3,4,5,6,7,8,9,10].reduce((sum, i) => sum + (progress[i]?.stars ?? 0), 0);
  const part2Done = [11,12,13,14,15,16,17,18,19,20].filter(i => progress[i]?.completed).length;
  const part2Stars = [11,12,13,14,15,16,17,18,19,20].reduce((sum, i) => sum + (progress[i]?.stars ?? 0), 0);

  const hasAnyProgress = completedModules > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['💜', '⭐', '✏️', '🌟', '💛', '🦋', '🌸', '📖'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-15 animate-float select-none"
            style={{
              left: `${8 + i * 11}%`,
              top: `${4 + (i % 4) * 23}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
        {/* Header */}
        <div className="text-center animate-bounce-in">
          <div className="text-7xl mb-3 select-none">📚</div>
          <h1 className="font-baloo text-4xl font-bold text-violet leading-tight">Mariančina</h1>
          <p className="font-baloo text-2xl font-bold text-gold leading-tight">jazyková dobrodružství</p>
        </div>

        {/* Total stars summary */}
        {hasAnyProgress && (
          <div className="flex items-center gap-2 bg-gold/10 rounded-full px-4 py-1.5 animate-bounce-in">
            <span className="text-xl">⭐</span>
            <span className="font-baloo text-gold font-bold">{totalStars} hvězdiček celkem</span>
          </div>
        )}

        {/* Journey path */}
        <div className="w-full flex flex-col items-center gap-2 animate-bounce-in" style={{ animationDelay: '0.15s' }}>

          {/* PART 1 card */}
          <button
            onClick={onStart}
            className="w-full rounded-2xl p-4 text-left transition-all active:scale-95 shadow-md hover:shadow-lg border-2 border-violet/20 bg-white/80"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-violet flex items-center justify-center text-2xl shadow flex-shrink-0">
                📖
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-nunito text-xs font-bold text-violet/60 uppercase tracking-wide">Část 1</span>
                  {part1Done === 10 && <span className="text-xs bg-success/15 text-success font-bold font-nunito px-2 py-0.5 rounded-full">Dokončeno ✓</span>}
                </div>
                <p className="font-baloo text-lg font-bold text-violet-dark leading-tight">Jazyková dobrodružství</p>
                <p className="font-nunito text-xs text-foreground/50 mt-0.5">Tvrdé a měkké souhlásky, vyjmenovaná slova</p>
              </div>
              <div className="flex flex-col items-end flex-shrink-0 gap-0.5">
                <span className="font-baloo text-sm font-bold text-violet">{part1Done}/10</span>
                {part1Stars > 0 && <span className="font-nunito text-xs text-gold">⭐ {part1Stars}</span>}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-2 bg-violet/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(part1Done / 10) * 100}%`,
                  background: 'linear-gradient(90deg, #7F77DD, #a78bfa)',
                }}
              />
            </div>
          </button>

          {/* Arrow connector */}
          <div className="flex flex-col items-center gap-0.5 py-1">
            <div className={`w-0.5 h-4 rounded-full ${allPart1Complete ? 'bg-gold' : 'bg-foreground/15'}`} />
            <span className={`text-lg ${allPart1Complete ? 'opacity-100' : 'opacity-25'}`}>⬇️</span>
            <div className={`w-0.5 h-4 rounded-full ${allPart1Complete ? 'bg-gold' : 'bg-foreground/15'}`} />
          </div>

          {/* PART 2 card */}
          <button
            onClick={allPart1Complete ? onStartSpace : undefined}
            disabled={!allPart1Complete}
            className={`w-full rounded-2xl p-4 text-left transition-all border-2 shadow-md ${
              allPart1Complete
                ? 'active:scale-95 hover:shadow-lg border-purple-400/40 cursor-pointer'
                : 'cursor-not-allowed opacity-70 border-white/20'
            }`}
            style={
              allPart1Complete
                ? { background: 'linear-gradient(135deg, #1e1b4b 0%, #3b1d7a 60%, #1e1b4b 100%)' }
                : { background: 'linear-gradient(135deg, #1e1b4b 0%, #3b1d7a 60%, #1e1b4b 100%)' }
            }
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow flex-shrink-0 ${allPart1Complete ? 'bg-purple-600' : 'bg-gray-700'}`}>
                {allPart1Complete ? '🚀' : '🔒'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-nunito text-xs font-bold text-purple-300/70 uppercase tracking-wide">Část 2</span>
                  {part2Done === 10 && <span className="text-xs bg-gold/20 text-gold font-bold font-nunito px-2 py-0.5 rounded-full">Dokončeno ✓</span>}
                </div>
                <p className="font-baloo text-lg font-bold text-white leading-tight">Vesmírná akademie</p>
                <p className={`font-nunito text-xs mt-0.5 ${allPart1Complete ? 'text-purple-300/70' : 'text-white/30'}`}>
                  {allPart1Complete
                    ? 'Záludné kombinace, vesmírná výzva!'
                    : `Dokonči část 1 pro odemknutí (${part1Done}/10)`}
                </p>
              </div>
              <div className="flex flex-col items-end flex-shrink-0 gap-0.5">
                {allPart1Complete ? (
                  <>
                    <span className="font-baloo text-sm font-bold text-white">{part2Done}/10</span>
                    {part2Stars > 0 && <span className="font-nunito text-xs text-gold">⭐ {part2Stars}</span>}
                  </>
                ) : (
                  <span className="font-nunito text-xs text-white/30">zamčeno</span>
                )}
              </div>
            </div>

            {/* Progress bar (only if unlocked) */}
            {allPart1Complete && (
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(part2Done / 10) * 100}%`,
                    background: 'linear-gradient(90deg, #a78bfa, #fbbf24)',
                  }}
                />
              </div>
            )}

            {/* Lock bar */}
            {!allPart1Complete && (
              <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/10 transition-all duration-500"
                  style={{ width: `${(part1Done / 10) * 100}%` }}
                />
              </div>
            )}
          </button>
        </div>

        {/* Footer note */}
        <p className="font-nunito text-xs text-foreground/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          💾 Tvůj postup se ukládá automaticky
        </p>

        {/* Reset button */}
        {hasAnyProgress && (
          <button
            onClick={() => {
              if (confirm('Opravdu chceš smazat veškerý postup? 😮')) resetProgress();
            }}
            className="text-xs font-nunito text-foreground/25 hover:text-foreground/45 transition-colors underline"
          >
            Začít znovu
          </button>
        )}
      </div>
    </div>
  );
}
