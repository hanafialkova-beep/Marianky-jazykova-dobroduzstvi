"use client";

import { useState } from 'react';
import type { QuestionA } from '@/data/types';

interface Props {
  question: QuestionA;
  onAnswer: (correct: boolean) => void;
  showHints: boolean;
}

export default function FillLetter({ question, onAnswer, showHints }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const parts = question.sentence.split('_');

  function handleChoice(option: string) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct = option === question.correct;
    setTimeout(() => onAnswer(correct), 900);
  }

  const isCorrect = selected === question.correct;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Sentence display */}
      <div className="bg-background rounded-2xl px-6 py-4 text-center text-xl font-nunito shadow-md max-w-md mx-auto">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span
                className={`inline-block min-w-[2.2rem] mx-1 font-bold text-2xl underline underline-offset-4 transition-colors duration-300 ${
                  !answered
                    ? 'text-violet-300'
                    : isCorrect
                    ? 'text-success'
                    : 'text-error'
                }`}
              >
                {selected ?? '?'}
              </span>
            )}
          </span>
        ))}
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
          {question.options.map(opt => (
            <button
              key={opt}
              onClick={() => handleChoice(opt)}
              className="btn-option text-2xl font-baloo uppercase w-20 h-20"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {answered && (
        <div
          className={`rounded-2xl px-6 py-4 text-center font-nunito animate-bounce-in ${
            isCorrect
              ? 'bg-success/20 border-2 border-success text-success'
              : 'bg-error/20 border-2 border-error text-error'
          }`}
        >
          <p className="text-xl font-bold mb-1">{isCorrect ? '🌟 Výborně!' : '😅 Skoro!'}</p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
