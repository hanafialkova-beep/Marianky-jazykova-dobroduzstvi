"use client";

import { useState } from 'react';
import type { ResultData } from '@/data/types';
import { MODULES, SPACE_MODULES } from '@/data/modules';
import WelcomeScreen from './WelcomeScreen';
import ModuleMap from './ModuleMap';
import SpaceModuleMap from './SpaceModuleMap';
import ExerciseScreen from './ExerciseScreen';
import ResultScreen from './ResultScreen';

type Screen = 'welcome' | 'map' | 'space-map' | 'exercise' | 'result';

export default function AppShell() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [lastResult, setLastResult] = useState<ResultData | null>(null);

  // Which map to return to after exercise or result
  const returnMap = activeModuleId && activeModuleId >= 11 ? 'space-map' : 'map';

  function handleSelectModule(moduleId: number) {
    setActiveModuleId(moduleId);
    setScreen('exercise');
  }

  function handleExerciseFinish(result: ResultData) {
    setLastResult(result);
    setScreen('result');
  }

  function handleResultContinue() {
    setScreen(returnMap);
    setLastResult(null);
  }

  function handleResultNextModule(nextModuleId: number) {
    setLastResult(null);
    setActiveModuleId(nextModuleId);
    setScreen('exercise');
  }

  function handleResultRetry() {
    setScreen('exercise');
    setLastResult(null);
  }

  // Find the next module id: within the same section
  const nextModuleId = lastResult
    ? lastResult.moduleId >= 11 && lastResult.moduleId < 20
      ? lastResult.moduleId + 1
      : lastResult.moduleId < 10
        ? lastResult.moduleId + 1
        : null
    : null;

  // Label of the next module for the button
  const allModules = [...MODULES, ...SPACE_MODULES];
  const nextModuleName = nextModuleId
    ? allModules.find(m => m.id === nextModuleId)?.name ?? null
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-background to-amber-50">
      {screen === 'welcome' && (
        <WelcomeScreen
          onStart={() => setScreen('map')}
          onStartSpace={() => setScreen('space-map')}
        />
      )}

      {screen === 'map' && (
        <ModuleMap
          onSelectModule={handleSelectModule}
          onBack={() => setScreen('welcome')}
        />
      )}

      {screen === 'space-map' && (
        <SpaceModuleMap
          onSelectModule={handleSelectModule}
          onBack={() => setScreen('welcome')}
        />
      )}

      {screen === 'exercise' && activeModuleId !== null && (
        <ExerciseScreen
          moduleId={activeModuleId}
          onFinish={handleExerciseFinish}
          onBack={() => setScreen(returnMap)}
        />
      )}

      {screen === 'result' && lastResult !== null && (
        <ResultScreen
          result={lastResult}
          nextModuleId={nextModuleId}
          nextModuleName={nextModuleName}
          onContinue={handleResultContinue}
          onNextModule={handleResultNextModule}
          onRetry={handleResultRetry}
        />
      )}
    </main>
  );
}
