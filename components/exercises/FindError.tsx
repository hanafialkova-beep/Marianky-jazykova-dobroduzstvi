"use client";

import { useState } from 'react';
import type { QuestionE } from '@/data/types';

interface Props {
  question: QuestionE;
  onAnswer: (correct: boolean) => void;
  showHints: boolean;
}

export default function FindError({ question, onAnswer, showHints }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  function handleClick(index: number) {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    const correct = index === question.errorIndex;
    setTimeout(() => onAnswer(correct), 900);
  }

  const isCorrect = selected === question.errorIndex;

  return (
    <div className="flex flex-col items-center gap-6">
      {question.instruction && (
        <p className="font-nunito text-base text-center text-foreground/70">
          {question.instruction}
        </p>
      )}

      {/* Hint */}
      {showHints && question.hint && !answered && (
        <p className="text-sm text-gold font-nunito text-center animate-pop-in">
          💡 {question.hint}
        </p>
      )}

      {/* Sentence with clickable words */}
      <div className="flex flex-wrap gap-2 justify-center max-w-md">
        {question.words.map((word, i) => {
          let className =
            'px-3 py-2 rounded-xl font-nunito text-lg font-semibold border-2 transition-all duration-200 ';

          if (!answered) {
            className += 'border-violet-300 bg-background hover:bg-violet-100 hover:border-violet cursor-pointer';
          } else if (i === question.errorIndex) {
            className += 'border-error bg-error/20 text-error animate-shake';
          } else if (i === selected && i !== question.errorIndex) {
            className += 'border-error/50 bg-error/10 text-error/60';
          } else {
            className += 'border-violet-200 bg-background opacity-70';
          }

          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={answered}
              className={className}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className={`rounded-2xl px-6 py-4 text-center font-nunito animate-bounce-in w-full max-w-md ${
            isCorrect
              ? 'bg-success/20 border-2 border-success text-success'
              : 'bg-error/20 border-2 border-error text-error'
          }`}
        >
          <p className="text-xl font-bold mb-1">{isCorrect ? '🌟 Skvělý detektiv!' : '😅 Skoro!'}</p>
          <p className="text-sm">
            Chybné slovo: <span className="line-through font-bold">{question.words[question.errorIndex]}</span>
            {' → '}
            <span className="font-bold">{question.correctWord}</span>
          </p>
          <p className="text-sm mt-1">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
