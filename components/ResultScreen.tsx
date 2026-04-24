"use client";

import { useEffect, useState } from 'react';
import type { ResultData } from '@/data/types';
import { MODULES, SPACE_MODULES } from '@/data/modules';
import StarRating from './StarRating';

const allModules = [...MODULES, ...SPACE_MODULES];

interface Props {
  result: ResultData;
  nextModuleId: number | null;
  nextModuleName: string | null;
  onContinue: () => void;
  onNextModule: (id: number) => void;
  onRetry: () => void;
}

const CONFETTI_COUNT = 20;

export default function ResultScreen({ result, nextModuleId, nextModuleName, onContinue, onNextModule, onRetry }: Props) {
  const [showConfetti, setShowConfetti] = useState(false);
  const mod = allModules.find(m => m.id === result.moduleId)!;

  useEffect(() => {
    if (result.stars >= 2) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(t);
    }
  }, [result.stars]);

  const getMessage = () => {
    if (result.percentage >= 90) return ['🏆 Fantastické!', 'Jsi pravopisná šampionka!'];
    if (result.percentage >= 70) return ['🌟 Skvělá práce!', 'Skoro perfektní!'];
    if (result.percentage >= 50) return ['👍 Dobrá práce!', 'Cvičení tě ještě posílí!'];
    return ['💪 Nevzdávej se!', 'Zkus to ještě jednou!'];
  };

  const [title, subtitle] = getMessage();

  // Random confetti positions
  const confetti = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    color: i % 3 === 0 ? '#7F77DD' : i % 3 === 1 ? '#EF9F27' : '#22c55e',
    char: ['⭐', '🎉', '✨', '🌟', '💛', '💜'][i % 6],
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden max-w-sm mx-auto text-center">
      {/* Confetti */}
      {showConfetti && confetti.map(c => (
        <span
          key={c.id}
          className="absolute text-xl pointer-events-none animate-confetti-fall"
          style={{
            left: `${c.left}%`,
            top: '-10%',
            animationDelay: `${c.delay}s`,
          }}
        >
          {c.char}
        </span>
      ))}

      <div className="flex flex-col items-center gap-6 relative z-10">
        {/* Module icon */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-4xl animate-pop-in shadow-lg`}>
          {mod.icon}
        </div>

        {/* Title */}
        <div className="animate-bounce-in">
          <h2 className="font-baloo text-4xl text-violet">{title}</h2>
          <p className="font-nunito text-lg text-foreground/70 mt-1">{subtitle}</p>
        </div>

        {/* Stars */}
        <div className="flex flex-col items-center gap-2 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          <StarRating stars={result.stars} size="lg" animated />
          {result.isNewRecord && (
            <span className="text-xs font-nunito font-bold text-gold bg-gold/20 px-3 py-1 rounded-full animate-pop-in">
              🎉 Nový rekord!
            </span>
          )}
        </div>

        {/* Score */}
        <div className="bg-background rounded-2xl px-8 py-4 shadow-md border-2 border-violet-200 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
          <p className="font-baloo text-5xl text-violet">{result.percentage}%</p>
          <p className="font-nunito text-foreground/60">
            {result.score} / {result.total} správně
          </p>
        </div>

        {/* Badge (if 3 stars) */}
        {result.stars === 3 && (
          <div className="bg-gold/20 border-2 border-gold rounded-2xl px-6 py-3 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <p className="font-baloo text-gold text-lg">🏅 Odznak odemčen!</p>
            <p className="font-nunito text-sm text-foreground/70">{mod.badgeIcon} {mod.badge}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 w-full animate-bounce-in" style={{ animationDelay: '0.5s' }}>
          {nextModuleId && nextModuleName ? (
            <>
              <button
                onClick={() => onNextModule(nextModuleId)}
                className="btn-primary text-lg"
              >
                🚀 Další téma: {nextModuleName}
              </button>
              <button onClick={onRetry} className="btn-ghost">
                🔄 Zkusit znovu
              </button>
              <button
                onClick={onContinue}
                className="text-xs font-nunito text-foreground/30 hover:text-foreground/50 transition-colors underline"
              >
                ← Zpět na výběr témat
              </button>
            </>
          ) : (
            <>
              <button onClick={onContinue} className="btn-primary">
                📖 Zpět na výběr témat
              </button>
              <button onClick={onRetry} className="btn-ghost">
                🔄 Zkusit znovu
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
