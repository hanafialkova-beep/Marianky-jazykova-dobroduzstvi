"use client";

import { useState } from 'react';
import type { QuestionD } from '@/data/types';

interface Props {
  question: QuestionD;
  onAnswer: (correct: boolean) => void;
  showHints: boolean;
}

export default function GroupSort({ question, onAnswer, showHints }: Props) {
  // assignments: wordIndex → groupIndex | null
  const [assignments, setAssignments] = useState<(number | null)[]>(
    question.words.map(() => null),
  );
  const [activeIndex, setActiveIndex] = useState<number>(0); // which word is being sorted
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  // Current word being sorted (skip already-assigned ones when going back)
  const pendingIndices = question.words
    .map((_, i) => i)
    .filter(i => assignments[i] === null);
  const currentWordIndex = pendingIndices[0] ?? null;
  const allAssigned = pendingIndices.length === 0;

  function assign(wordIndex: number, groupIndex: number) {
    if (submitted) return;
    const next = [...assignments];
    next[wordIndex] = groupIndex;
    setAssignments(next);
  }

  function unassign(wordIndex: number) {
    if (submitted) return;
    const next = [...assignments];
    next[wordIndex] = null;
    setAssignments(next);
  }

  function handleSubmit() {
    const allCorrect = question.words.every((w, i) => assignments[i] === w.group);
    setCorrect(allCorrect);
    setSubmitted(true);
    setTimeout(() => onAnswer(allCorrect), 1200);
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-sm mx-auto">
      {/* Instruction */}
      {question.instruction && (
        <p className="font-nunito text-sm text-center text-foreground/60">
          {question.instruction}
        </p>
      )}

      {/* Hint */}
      {showHints && question.hint && !submitted && (
        <p className="text-sm text-gold font-nunito text-center animate-pop-in">
          💡 {question.hint}
        </p>
      )}

      {/* Progress dots */}
      <div className="flex gap-2">
        {question.words.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              submitted
                ? assignments[i] === question.words[i].group
                  ? 'bg-success'
                  : 'bg-error'
                : assignments[i] !== null
                ? 'bg-violet'
                : i === currentWordIndex
                ? 'bg-violet-300 scale-125'
                : 'bg-violet-100'
            }`}
          />
        ))}
      </div>

      {/* Current word card — shown when there are still pending words */}
      {!submitted && currentWordIndex !== null && (
        <div className="flex flex-col items-center gap-4 w-full animate-pop-in">
          <div className="bg-white rounded-2xl shadow-md border-2 border-violet-200 px-10 py-6 text-center">
            <p className="font-baloo text-3xl text-violet font-bold">
              {question.words[currentWordIndex].word}
            </p>
          </div>

          {/* Two group buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {question.groups.map((groupName, gi) => (
              <button
                key={gi}
                onClick={() => assign(currentWordIndex, gi)}
                className="rounded-2xl border-2 border-violet-300 bg-violet-50 py-4 px-3 font-nunito text-sm font-bold text-violet text-center active:scale-95 transition-all hover:border-violet hover:bg-violet-100 leading-snug"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {groupName}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Summary of assigned words */}
      {(allAssigned || submitted) && (
        <div className="grid grid-cols-2 gap-3 w-full">
          {question.groups.map((groupName, gi) => (
            <div
              key={gi}
              className={`rounded-2xl border-2 p-3 min-h-[80px] ${
                submitted
                  ? 'border-violet-200 bg-violet-50'
                  : 'border-violet-300 bg-violet-50'
              }`}
            >
              <p className="font-baloo text-xs text-center text-violet mb-2 leading-tight">
                {groupName}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {question.words
                  .filter((_, i) => assignments[i] === gi)
                  .map((w, idx) => {
                    const wordIdx = question.words.indexOf(w);
                    const isCorrectAssign = submitted && assignments[wordIdx] === w.group;
                    return (
                      <button
                        key={w.word}
                        onClick={() => !submitted && unassign(wordIdx)}
                        className={`px-2 py-0.5 rounded-lg text-xs font-nunito font-semibold border transition-all ${
                          submitted
                            ? isCorrectAssign
                              ? 'bg-success/20 border-success text-success'
                              : 'bg-error/20 border-error text-error'
                            : 'bg-white border-violet-400 text-violet hover:bg-error/10 hover:border-error'
                        }`}
                        title={submitted ? undefined : 'Klikni pro odebrání'}
                      >
                        {w.word}
                        {!submitted && <span className="ml-1 opacity-40 text-[10px]">✕</span>}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submit button */}
      {!submitted && allAssigned && (
        <button onClick={handleSubmit} className="btn-primary w-full animate-bounce-in">
          Hotovo! ✅
        </button>
      )}

      {/* Feedback */}
      {submitted && (
        <div
          className={`rounded-2xl px-6 py-4 text-center font-nunito animate-bounce-in w-full ${
            correct
              ? 'bg-success/20 border-2 border-success text-success'
              : 'bg-error/20 border-2 border-error text-error'
          }`}
        >
          <p className="text-xl font-bold">
            {correct ? '🌟 Perfektní třídění!' : '😅 Pár chyb — ale nevadí!'}
          </p>
        </div>
      )}
    </div>
  );
}
