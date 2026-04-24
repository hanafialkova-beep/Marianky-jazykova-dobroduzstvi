"use client";

import { useState, useEffect, useRef } from 'react';
import { MODULES, SPACE_MODULES, generateModule10Questions, generateModule20Questions } from '@/data/modules';
import type { Question, ResultData } from '@/data/types';
import { useProgress } from '@/hooks/useProgress';
import FillLetter from './exercises/FillLetter';
import ChooseWord from './exercises/ChooseWord';
import CorrectOrWrong from './exercises/CorrectOrWrong';
import GroupSort from './exercises/GroupSort';
import FindError from './exercises/FindError';
import MultiBlanks from './exercises/MultiBlanks';

interface Props {
  moduleId: number;
  onFinish: (result: ResultData) => void;
  onBack: () => void;
}

const QUESTION_TYPES: Record<string, string> = {
  A: '✏️ Doplň písmeno',
  B: '🔤 Vyber správné slovo',
  C: '✅ Správně nebo špatně?',
  D: '📂 Zařaď slova',
  E: '🔍 Najdi chybu',
  F: '🪐 Více mezer',
};

const TIMED_SECONDS = 120;

function formatTime(secs: number): string {
  if (!isFinite(secs)) return '';
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

const allModules = [...MODULES, ...SPACE_MODULES];

export default function ExerciseScreen({ moduleId, onFinish, onBack }: Props) {
  const mod = allModules.find(m => m.id === moduleId)!;
  const { saveResult, calcStars, getModuleProgress } = useProgress();
  const isFinalChallenge = moduleId === 10 || moduleId === 20;
  const isSpaceModule = moduleId >= 11;

  // null = mode not yet chosen (only relevant for final challenge)
  const [challengeMode, setChallengeMode] = useState<null | 'free' | 'timed'>(
    isFinalChallenge ? null : 'free'
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showNext, setShowNext] = useState(false);
  const [timeLeft, setTimeLeft] = useState(Infinity);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load questions
  useEffect(() => {
    let qs: Question[];
    if (moduleId === 10) qs = generateModule10Questions();
    else if (moduleId === 20) qs = generateModule20Questions();
    else qs = mod.questions;
    setQuestions(qs);
    console.log(`Module ${moduleId} loaded ${qs.length} questions`);
  }, [moduleId, mod.questions]);

  // Start mode (called when user picks a mode on the selection screen)
  function startChallenge(mode: 'free' | 'timed') {
    setChallengeMode(mode);
    if (mode === 'timed') {
      setTimeLeft(TIMED_SECONDS);
      setTimerActive(true);
    } else {
      setTimeLeft(Infinity);
      setTimerActive(false);
    }
    console.log('Final challenge mode chosen:', mode);
  }

  // Timer countdown
  useEffect(() => {
    if (!timerActive || questions.length === 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleFinish(score, answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerActive, questions.length]);

  function handleAnswer(correct: boolean) {
    const newScore = correct ? score + 1 : score;
    const newAnswers = [...answers, correct];
    setScore(newScore);
    setAnswers(newAnswers);
    setShowNext(true);

    if (current + 1 >= questions.length) {
      // Last question answered
      if (timerRef.current) clearInterval(timerRef.current);
      setTimeout(() => handleFinish(newScore, newAnswers), 800);
    }
  }

  function handleNext() {
    if (current + 1 >= questions.length) return;
    setCurrent(prev => prev + 1);
    setShowNext(false);
  }

  function handleFinish(finalScore: number, finalAnswers: boolean[]) {
    const total = questions.length;
    const percentage = total > 0 ? Math.round((finalScore / total) * 100) : 0;
    const stars = calcStars(percentage);
    const result: ResultData = {
      moduleId,
      score: finalScore,
      total,
      stars,
      percentage,
      isNewRecord: false,
    };
    const saved = saveResult(result);
    console.log('Exercise finished:', saved);
    onFinish(saved);
  }

  // --- Mode selection screen for final challenge ---
  if (isFinalChallenge && challengeMode === null) {
    const isSpace = moduleId === 20;
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center px-4 max-w-lg mx-auto ${isSpace ? 'bg-space-bg' : ''}`}>
        <div className="text-5xl mb-4">{isSpace ? '👑' : '🏆'}</div>
        <h1 className={`font-baloo text-2xl font-bold text-center mb-2 ${isSpace ? 'text-white' : 'text-violet'}`}>
          {isSpace ? 'Šampion vesmíru!' : 'Velká výzva!'}
        </h1>
        <p className={`font-nunito text-center mb-8 text-sm leading-relaxed ${isSpace ? 'text-white/70' : 'text-foreground/70'}`}>
          {isSpace
            ? '20 otázek ze všech vesmírných planet. Vyber si, jak chceš hrát:'
            : '20 otázek ze všech témat. Vyber si, jak chceš hrát:'}
        </p>

        <div className="w-full flex flex-col gap-4">
          {/* Free mode */}
          <button
            onClick={() => startChallenge('free')}
            className={`group w-full rounded-2xl border-2 transition-all p-5 text-left ${
              isSpace
                ? 'border-purple-500/40 bg-purple-900/30 hover:bg-purple-900/50 hover:border-purple-400'
                : 'border-violet/30 bg-violet/5 hover:bg-violet/10 hover:border-violet/60'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🕊️</span>
              <div>
                <p className={`font-baloo text-lg font-bold ${isSpace ? 'text-purple-300' : 'text-violet'}`}>Bez časomíry</p>
                <p className={`font-nunito text-sm ${isSpace ? 'text-white/50' : 'text-foreground/60'}`}>
                  Odpovídej v klidu, bez tlaku. Klidně si přečti každou otázku.
                </p>
              </div>
            </div>
          </button>

          {/* Timed mode */}
          <button
            onClick={() => startChallenge('timed')}
            className={`group w-full rounded-2xl border-2 transition-all p-5 text-left ${
              isSpace
                ? 'border-gold/40 bg-gold/5 hover:bg-gold/10 hover:border-gold/70'
                : 'border-gold/40 bg-gold/5 hover:bg-gold/10 hover:border-gold/70'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <p className="font-baloo text-lg text-gold font-bold">Na čas — 2 minuty</p>
                <p className={`font-nunito text-sm ${isSpace ? 'text-white/50' : 'text-foreground/60'}`}>
                  Zvládneš 20 otázek za 2 minuty? Odpovídej rychle!
                </p>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={onBack}
          className={`mt-8 text-sm font-nunito transition-colors ${isSpace ? 'text-white/50 hover:text-white' : 'btn-ghost'}`}
        >
          ← Zpět na výběr témat
        </button>
      </div>
    );
  }

  // --- Loading ---
  if (questions.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isSpaceModule ? 'bg-space-bg' : ''}`}>
        <div className="text-4xl animate-bounce">{isSpaceModule ? '🚀' : '⏳'}</div>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((current + (showNext ? 1 : 0)) / questions.length) * 100;
  const showHints = mod.difficulty <= 2;
  const isTimedMode = challengeMode === 'timed';
  const timerWarning = isFinite(timeLeft) && timeLeft <= 20;

  return (
    <div className={`min-h-screen flex flex-col max-w-lg mx-auto px-3 pt-3 pb-6 ${isSpaceModule ? 'bg-space-bg' : ''}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className={`text-sm flex-shrink-0 px-3 py-2 rounded-xl transition-colors ${isSpaceModule ? 'text-white/70 hover:text-white' : 'btn-ghost'}`}>
          ← Zpět
        </button>
        <div className="flex-1 min-w-0">
          <p className={`font-baloo text-sm truncate ${isSpaceModule ? 'text-purple-300' : 'text-violet'}`}>{mod.name}</p>
        </div>
        {/* Score */}
        <div className={`flex items-center gap-1 flex-shrink-0 rounded-xl px-2.5 py-1 ${isSpaceModule ? 'bg-gold/20' : 'bg-gold/10'}`}>
          <span className="text-sm">⭐</span>
          <span className="font-baloo text-gold text-sm font-bold">{score}</span>
        </div>
        {/* Timer — only show in timed mode */}
        {isTimedMode && (
          <div className={`flex-shrink-0 font-baloo text-base px-3 py-1 rounded-xl border-2 ${
            timerWarning
              ? 'border-error text-error animate-pulse'
              : isSpaceModule
                ? 'border-purple-500 text-purple-300'
                : 'border-violet-300 text-violet'
          }`}>
            ⏱ {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className={`h-2.5 rounded-full mb-4 overflow-hidden ${isSpaceModule ? 'bg-white/10' : 'bg-violet-100'}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isSpaceModule
              ? 'bg-gradient-to-r from-purple-500 to-gold'
              : 'bg-gradient-to-r from-violet to-gold'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question counter */}
      <p className={`font-nunito text-xs text-center mb-3 ${isSpaceModule ? 'text-white/40' : 'text-foreground/40'}`}>
        {QUESTION_TYPES[q.type]} · {current + 1} / {questions.length}
      </p>

      {/* Exercise */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-2">
        {q.type === 'A' && (
          <FillLetter key={q.id} question={q} onAnswer={handleAnswer} showHints={showHints} />
        )}
        {q.type === 'B' && (
          <ChooseWord key={q.id} question={q} onAnswer={handleAnswer} showHints={showHints} />
        )}
        {q.type === 'C' && (
          <CorrectOrWrong key={q.id} question={q} onAnswer={handleAnswer} showHints={showHints} />
        )}
        {q.type === 'D' && (
          <GroupSort key={q.id} question={q} onAnswer={handleAnswer} showHints={showHints} />
        )}
        {q.type === 'E' && (
          <FindError key={q.id} question={q} onAnswer={handleAnswer} showHints={showHints} />
        )}
        {q.type === 'F' && (
          <MultiBlanks key={q.id} question={q} onAnswer={handleAnswer} />
        )}
      </div>

      {/* Next button */}
      {showNext && current + 1 < questions.length && (
        <div className="pt-3">
          <button onClick={handleNext} className="btn-primary w-full animate-bounce-in">
            {isSpaceModule ? '🚀 Další otázka →' : 'Další otázka →'}
          </button>
        </div>
      )}
    </div>
  );
}
