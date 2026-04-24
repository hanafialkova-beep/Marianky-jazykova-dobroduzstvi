"use client";

import { useState } from 'react';
import type { QuestionC } from '@/data/types';

interface Props {
  question: QuestionC;
  onAnswer: (correct: boolean) => void;
  showHints: boolean;
}

export default function CorrectOrWrong({ question, onAnswer, showHints }: Props) {
  const [choice, setChoice] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);

  function handleChoice(value: boolean) {
    if (answered) return;
    setChoice(value);
    setAnswered(true);
    const correct = value === question.isCorrect;
    setTimeout(() => onAnswer(correct), 900);
  }

  const wasRight = choice === question.isCorrect;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Sentence to evaluate */}
      <div className="bg-background rounded-2xl px-6 py-5 text-center text-xl font-nunito shadow-md max-w-md mx-auto leading-relaxed">
        {!answered && question.wrongWord && !question.isCorrect
          ? question.text // show as-is so user can see it
          : question.text}
      </div>

      {/* Hint */}
      {showHints && question.hint && !answered && (
        <p className="text-sm text-gold font-nunito text-center animate-pop-in">
          💡 {question.hint}
        </p>
      )}

      {/* Buttons */}
      {!answered && (
        <div className="flex gap-4">
          <button
            onClick={() => handleChoice(true)}
            className="btn-option text-lg font-baloo bg-success/10 hover:bg-success/20 border-success text-success px-8 py-4"
          >
            ✅ Správně
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="btn-option text-lg font-baloo bg-error/10 hover:bg-error/20 border-error text-error px-8 py-4"
          >
            ❌ Špatně
          </button>
        </div>
      )}

      {/* Feedback */}
      {answered && (
        <div
          className={`rounded-2xl px-6 py-4 text-center font-nunito animate-bounce-in w-full max-w-md ${
            wasRight
              ? 'bg-success/20 border-2 border-success text-success'
              : 'bg-error/20 border-2 border-error text-error'
          }`}
        >
          <p className="text-xl font-bold mb-1">{wasRight ? '🌟 Výborně!' : '😅 Skoro!'}</p>
          {!question.isCorrect && question.wrongWord && (
            <p className="text-sm mb-1">
              Chybné slovo: <span className="line-through font-bold">{question.wrongWord}</span>{' '}
              → <span className="font-bold">{question.correctWord}</span>
            </p>
          )}
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
