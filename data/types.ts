// Question type A: Fill in a letter (i/y or s/z)
export interface QuestionA {
  id: string;
  type: 'A';
  sentence: string;      // e.g. "Malá r_ba plave v rybníku."
  options: [string, string]; // e.g. ['i', 'y']
  correct: string;       // e.g. 'y'
  explanation: string;   // shown after wrong answer
  hint?: string;         // optional tip shown during the question
}

// Question type B: Choose the correct word (4 options)
export interface QuestionB {
  id: string;
  type: 'B';
  sentence: string;      // e.g. "Tatínek ___ kufr na cestu."
  options: [string, string, string, string];
  correct: string;
  explanation: string;
  hint?: string;
}

// Question type C: Correct or wrong?
export interface QuestionC {
  id: string;
  type: 'C';
  text: string;          // sentence shown to the user
  isCorrect: boolean;    // is the sentence written correctly?
  wrongWord?: string;    // the wrong word (if isCorrect=false)
  correctWord?: string;  // what the word should be
  explanation: string;   // always shown after answering
  hint?: string;
}

// Question type D: Assign words to groups
export interface QuestionD {
  id: string;
  type: 'D';
  instruction?: string;
  groups: [string, string];  // e.g. ["Tvrdá souhláska → Y", "Měkká souhláska → I"]
  words: Array<{ word: string; group: 0 | 1 }>;
  hint?: string;
}

// Question type E: Find the error in a sentence
export interface QuestionE {
  id: string;
  type: 'E';
  instruction?: string;
  words: string[];       // e.g. ["Malý", "tigr", "se", "plíží", "džunglí."]
  errorIndex: number;    // index of the wrong word
  correctWord: string;   // what it should be
  explanation: string;
  hint?: string;
}

// Question type F: Fill in multiple blanks in one sentence
// Each _ in sentence corresponds to one blank in the blanks array
export interface BlankItem {
  label: string;         // e.g. "tvrdá souhláska R"
  options: [string, string]; // e.g. ['i', 'y']
  correct: string;       // e.g. 'y'
}

export interface QuestionF {
  id: string;
  type: 'F';
  sentence: string;      // e.g. "Malá r_ba b_dlí v rybníce." — one _ per blank
  blanks: BlankItem[];   // one entry per _ in sentence
  explanation: string;   // shown after answering
}

export type Question = QuestionA | QuestionB | QuestionC | QuestionD | QuestionE | QuestionF;

export interface ModuleData {
  id: number;
  name: string;
  icon: string;
  difficulty: 1 | 2 | 3 | 4;  // 1=beginner, 4=expert
  badge: string;
  badgeIcon: string;
  description: string;
  color: string;         // tailwind bg color class for card
  questions: Question[];
}

// Progress stored in localStorage
export interface ModuleProgress {
  completed: boolean;    // finished at least once
  stars: number;         // 0–3, best result
  bestScore: number;     // 0–100 percentage
}

export type AppProgress = Record<number, ModuleProgress>;

export interface ResultData {
  moduleId: number;
  score: number;         // number of correct answers
  total: number;         // total questions
  stars: number;         // 0–3
  percentage: number;    // 0–100
  isNewRecord: boolean;
}
