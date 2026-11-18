"use client";

import { useState } from 'react';
import type { QuestionF } from '@/data/types';

interface Props {
  question: QuestionF;
  onAnswer: (correct: boolean) => void;
}

type FillState = 'idle' | 'correct' | 'wrong';

export default function MultiBlanks({ question, onAnswer }: Props) {
  const { sentence, blanks, explanation } = question;

  // Track selected answer for each blank (null = not yet answered)
  const [selections, setSelections] = useState<(string | null)[]>(
    blanks.map(() => null),
  );
  const [state, setState] = useState<FillState>('idle');
  const [activeBlank, setActiveBlank] = useState<number>(0);

  // Build sentence parts split by _
  const parts = sentence.split('_');

  function selectOption(option: string) {
    if (state !== 'idle') return;
    const next = [...selections];
    next[activeBlank] = option;
    setSelections(next);

    // Move to next unfilled blank
    const nextBlank = next.findIndex(s => s === null);
    if (nextBlank !== -1) {
      setActiveBlank(nextBlank);
    } else {
      // All filled: advance active to last filled for visual clarity
      setActiveBlank(blanks.length - 1);
    }
  }

  function handleSubmit() {
    if (state !== 'idle') return;
    const allCorrect = selections.every((sel, i) => sel === blanks[i].correct);
    setState(allCorrect ? 'correct' : 'wrong');
    console.log('MultiBlanks answered:', { selections, allCorrect });
    onAnswer(allCorrect);
  }

  function clearBlank(idx: number) {
    if (state !== 'idle') return;
    const next = [...selections];
    next[idx] = null;
    setSelections(next);
    setActiveBlank(idx);
  }

  const allFilled = selections.every(s => s !== null);
  const currentBlank = blanks[activeBlank];

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Sentence with blanks */}
      <div className="bg-background rounded-2xl p-5 shadow-md border-2 border-violet-200 text-center">
        <p className="font-baloo text-xl leading-relaxed flex flex-wrap items-center justify-center gap-1">
          {parts.map((part, i) => (
            <span key={i} className="inline-flex items-center gap-1">
              <span>{part}</span>
              {i < blanks.length && (
                <button
                  onClick={() => clearBlank(i)}
                  disabled={state !== 'idle'}
                  className={`inline-flex items-center justify-center min-w-[2.5rem] h-9 px-2 rounded-xl border-2 font-bold text-lg transition-all ${
                    selections[i] !== null
                      ? state === 'idle'
                        ? i === activeBlank
                          ? 'border-violet bg-violet/10 text-violet'
                          : selections[i] === blanks[i].correct && state !== 'idle'
                            ? 'border-success bg-success/10 text-success'
                            : selections[i] !== blanks[i].correct && state !== 'idle'
                              ? 'border-error bg-error/10 text-error'
                              : 'border-violet/50 bg-violet/5 text-violet'
                        : selections[i] === blanks[i].correct
                          ? 'border-success bg-success/10 text-success'
                          : 'border-error bg-error/10 text-error'
                      : i === activeBlank
                        ? 'border-gold bg-gold/10 text-gold animate-pulse'
                        : 'border-gray-300 bg-gray-50 text-gray-400'
                  }`}
                >
                  {selections[i] !== null ? selections[i] : '?'}
                </button>
              )}
            </span>
          ))}
        </p>
      </div>

      {/* Blank label and options: only when state is idle */}
      {state === 'idle' && (
        <div className="flex flex-col gap-3">
          {/* Active blank label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-nunito text-foreground/50 bg-violet/5 px-3 py-1 rounded-full border border-violet/20">
              Mezera {activeBlank + 1} z {blanks.length}: <strong>{currentBlank.label}</strong>
            </span>
          </div>

          {/* Options for the active blank */}
          <div className="flex gap-3 justify-center">
            {currentBlank.options.map(option => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className={`flex-1 max-w-[120px] rounded-2xl border-2 py-4 font-baloo text-2xl font-bold transition-all active:scale-95 ${
                  selections[activeBlank] === option
                    ? 'border-violet bg-violet text-white shadow-lg scale-105'
                    : 'border-violet/30 bg-violet/5 text-violet hover:bg-violet/10 hover:border-violet/60'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Summary of all blanks when all filled, still idle */}
      {allFilled && state === 'idle' && (
        <div className="flex flex-col gap-2">
          <p className="text-center font-nunito text-xs text-foreground/40">
            Zkontroluj odpovědi (klikni na mezeru pro opravu):
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {blanks.map((blank, i) => (
              <button
                key={i}
                onClick={() => clearBlank(i)}
                className="flex items-center gap-1 bg-violet/5 border border-violet/20 rounded-xl px-3 py-1.5 text-sm font-nunito hover:bg-violet/10 transition-colors"
              >
                <span className="text-foreground/50">{i + 1}.</span>
                <span className="font-bold text-violet">{selections[i]}</span>
                <span className="text-foreground/40 text-xs">({blank.label})</span>
              </button>
            ))}
          </div>
          <button onClick={handleSubmit} className="btn-primary mt-1">
            ✓ Potvrdit odpovědi
          </button>
        </div>
      )}

      {/* Feedback after submit */}
      {state !== 'idle' && (
        <div className={`rounded-2xl p-4 border-2 text-center animate-bounce-in ${
          state === 'correct'
            ? 'bg-success/10 border-success'
            : 'bg-error/10 border-error'
        }`}>
          <p className={`font-baloo text-xl mb-1 ${state === 'correct' ? 'text-success' : 'text-error'}`}>
            {state === 'correct' ? '🚀 Výborně! Všechno správně!' : '⚠️ Zkus příště!'}
          </p>
          {state === 'wrong' && (
            <div className="flex flex-wrap gap-1 justify-center mb-2">
              {blanks.map((blank, i) => (
                <span key={i} className={`text-xs font-nunito px-2 py-0.5 rounded-full ${
                  selections[i] === blank.correct
                    ? 'bg-success/20 text-success'
                    : 'bg-error/20 text-error'
                }`}>
                  {i + 1}: {selections[i]} → {selections[i] !== blank.correct ? blank.correct : '✓'}
                </span>
              ))}
            </div>
          )}
          <p className="font-nunito text-sm text-foreground/70">{explanation}</p>
        </div>
      )}
    </div>
  );
}
