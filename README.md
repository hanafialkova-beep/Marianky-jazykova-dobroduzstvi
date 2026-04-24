# Mariančina jazyková dobrodružství 📚

Czech spelling learning app for Marianka (3rd grade, ~9 years old).

## What it does

Interactive Czech grammar exercises covering:
- Hard/soft consonants (tvrdé/měkké souhlásky) — always Y or always I
- All 8 "vyjmenovaná slova" series (B, L, M, P, S, V, Z)
- Prefixes s- vs z-
- Cumulative reviews
- Final timed challenge (20 questions in 60 seconds)

## Features

- **10 modules** with progressive unlocking (complete one to unlock the next)
- **5 exercise types**: fill-in-letter, choose-word, correct/wrong, group-sort, find-error
- **Star rating** (0–3 stars per module, based on score)
- **Badges** awarded for 3-star completion
- **Progress saved** in localStorage — persists between sessions
- **Child-friendly UI** — Fredoka + Nunito fonts, purple/gold theme, confetti, animations

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- No database — pure localStorage for progress

## App structure

- `data/types.ts` — TypeScript types for questions and modules
- `data/modules.ts` — All 10 modules with questions and data
- `hooks/useProgress.ts` — localStorage progress tracking
- `components/AppShell.tsx` — Top-level state machine (screen router)
- `components/WelcomeScreen.tsx` — Landing screen
- `components/ModuleMap.tsx` — Module selection grid
- `components/ExerciseScreen.tsx` — Question runner + timer
- `components/ResultScreen.tsx` — Score, stars, badges, confetti
- `components/exercises/` — Individual question type components (A-E)
