'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export type PomodoroPhase = 'working' | 'short-break' | 'long-break';
type PomodoroPlaybackStatus = 'paused' | 'playing' | 'stop';

export const pomodoroPhaseQueue: PomodoroPhase[] = [
  'working',
  'short-break',
  'working',
  'short-break',
  'working',
  'long-break',
];

interface PomodoroContextValues {
  phase: PomodoroPhase;
  playbackStatus: PomodoroPlaybackStatus;
  onPlay: () => void;
  onPause: () => void;
  setPhase: (phase: PomodoroPhase) => void;
  onNextPhase: (shouldAutoPlay?: boolean) => void;
}

const PomodoroContext = createContext<PomodoroContextValues>({
  phase: 'working',
  playbackStatus: 'stop',
  onPause: () => {},
  onPlay: () => {},
  setPhase: () => {},
  onNextPhase: () => {},
});

interface PomodoroProviderProps {
  children: ReactNode;
}

export default function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [phase, setPhase] = useState<PomodoroPhase>('working');
  const [currentPhaseI, setCurrentPhaseI] = useState<number>(0);
  const [playbackStatus, setPlaybackStatus] =
    useState<PomodoroPlaybackStatus>('stop');

  const onPlay = useCallback(() => {
    setPlaybackStatus('playing');
  }, []);

  const onPause = useCallback(() => {
    setPlaybackStatus('paused');
  }, []);

  function onChangePhase(newPhase: PomodoroPhase) {
    setPlaybackStatus('stop');
    setPhase(newPhase);

    // Find the index of the new phase in the queue
    const newIndex = pomodoroPhaseQueue.indexOf(newPhase);

    // Find the nearest occurrence of the phase in the queue
    const nearestIndex = pomodoroPhaseQueue.reduce(
      (closestIndex, _, currentIndex) => {
        const currentDifference = Math.abs(currentIndex - newIndex);
        const closestDifference = Math.abs(closestIndex - newIndex);

        return currentDifference < closestDifference
          ? currentIndex
          : closestIndex;
      },
      0
    );

    setCurrentPhaseI(nearestIndex);
  }

  function onNextPhase(shouldAutoPlay: boolean = false) {
    // Set the currentPhaseI to the next, if currentPhaseI is over the limit, reset to 0
    const nextPhaseIndex = (currentPhaseI + 1) % pomodoroPhaseQueue.length;
    const nextPhase = pomodoroPhaseQueue[nextPhaseIndex];

    setCurrentPhaseI(nextPhaseIndex);
    setPhase(nextPhase);
    setPlaybackStatus('stop');

    if (shouldAutoPlay) {
      // This is to reset the timer
      setTimeout(() => {
        onPlay();
      }, 0);
    }
  }

  return (
    <PomodoroContext.Provider
      value={{
        phase,
        playbackStatus,
        onPause,
        onPlay,
        setPhase: onChangePhase,
        onNextPhase,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  return useContext(PomodoroContext);
}
