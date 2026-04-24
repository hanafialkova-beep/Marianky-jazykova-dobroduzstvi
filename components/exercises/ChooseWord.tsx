"use client";

import { useState } from 'react';
import type { QuestionB } from '@/data/types';

interface Props {
  question: QuestionB;
  onAnswer: (correct: boolean) => void;
  showHints: boolean;
}

export default function ChooseWord({ question, onAnswer, showHints }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const parts = question.sentence.split('___');

  function handleChoice(opt: string) {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    const correct = opt === question.correct;
    setTimeout(() => onAnswer(correct), 900);
  }

  const isCorrect = selected === question.correct;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Sentence */}
      <div className="bg-background rounded-2xl px-6 py-4 text-center text-xl font-nunito shadow-md max-w-md mx-auto">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span
                className={`inline-block px-2 mx-1 font-bold underline underline-offset-4 transition-colors duration-300 ${
                  !answered
                    ? 'text-violet-300'
                    : isCorrect
                    ? 'text-success'
                    : 'text-error'
                }`}
              >
                {selected ?? '___'}
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

      {/* Options grid */}
      {!answered && (
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {question.options.map(opt => (
            <button
              key={opt}
              onClick={() => handleChoice(opt)}
              className="btn-option font-nunito text-base py-3"
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
