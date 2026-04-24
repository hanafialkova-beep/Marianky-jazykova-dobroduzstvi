"use client";

import { useState, useEffect, useCallback } from 'react';
import type { AppProgress, ModuleProgress, ResultData } from '@/data/types';

const STORAGE_KEY = 'marianka_progress_v1';

const DEFAULT_PROGRESS: AppProgress = {};

function calcStars(percentage: number): number {
  if (percentage >= 90) return 3;
  if (percentage >= 70) return 2;
  if (percentage >= 50) return 1;
  return 0;
}

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>(DEFAULT_PROGRESS);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AppProgress;
        setProgress(parsed);
      }
    } catch (e) {
      console.log('Could not load progress from localStorage:', e);
    }
    setLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      console.log('Progress saved:', progress);
    } catch (e) {
      console.log('Could not save progress:', e);
    }
  }, [progress, loaded]);

  const getModuleProgress = useCallback(
    (moduleId: number): ModuleProgress => {
      return progress[moduleId] ?? { completed: false, stars: 0, bestScore: 0 };
    },
    [progress],
  );

  const saveResult = useCallback(
    (result: ResultData): ResultData => {
      const existing = progress[result.moduleId] ?? { completed: false, stars: 0, bestScore: 0 };
      const isNewRecord = result.percentage > existing.bestScore;

      const updated: ModuleProgress = {
        completed: true,
        stars: Math.max(existing.stars, result.stars),
        bestScore: Math.max(existing.bestScore, result.percentage),
      };

      const newProgress = { ...progress, [result.moduleId]: updated };
      setProgress(newProgress);

      // Write immediately — don't rely on useEffect timing (component may unmount first)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
        console.log(`Module ${result.moduleId} saved to localStorage immediately:`, updated);
      } catch (e) {
        console.log('Could not save progress immediately:', e);
      }

      return { ...result, isNewRecord };
    },
    [progress],
  );

  // Module 1 is always unlocked.
  // Module 11 requires all modules 1–10 to be completed.
  // Each subsequent module requires the previous to be completed.
  const isUnlocked = useCallback(
    (moduleId: number): boolean => {
      if (moduleId === 1) return true;
      if (moduleId === 11) {
        // All 10 modules of part 1 must be done
        for (let i = 1; i <= 10; i++) {
          if (!progress[i]?.completed) return false;
        }
        return true;
      }
      const prev = progress[moduleId - 1];
      return prev?.completed ?? false;
    },
    [progress],
  );

  // True when all 10 modules of part 1 are completed
  const allPart1Complete = [1,2,3,4,5,6,7,8,9,10].every(i => progress[i]?.completed);

  const resetProgress = useCallback(() => {
    setProgress({});
    console.log('Progress reset');
  }, []);

  // Unlock all modules 1–9 as completed (for testing / admin use)
  const unlockAllForTesting = useCallback(() => {
    const testProgress: AppProgress = {};
    for (let i = 1; i <= 9; i++) {
      testProgress[i] = { completed: true, stars: 3, bestScore: 100 };
    }
    const merged = { ...progress, ...testProgress };
    setProgress(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      console.log('All modules unlocked for testing');
    } catch (e) {
      console.log('Could not save unlock state:', e);
    }
  }, [progress]);

  const totalStars = Object.values(progress).reduce((sum, p) => sum + p.stars, 0);
  const completedModules = Object.values(progress).filter(p => p.completed).length;

  return {
    progress,
    loaded,
    getModuleProgress,
    saveResult,
    isUnlocked,
    allPart1Complete,
    resetProgress,
    unlockAllForTesting,
    totalStars,
    completedModules,
    calcStars,
  };
}
