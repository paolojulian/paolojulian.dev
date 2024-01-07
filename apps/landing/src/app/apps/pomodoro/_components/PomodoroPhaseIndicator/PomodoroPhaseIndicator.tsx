'use client';

import {
  PomodoroPhase,
  usePomodoro,
} from '@/app/apps/pomodoro/_context/PomodoroContext';
import classNames from 'classnames';

export default function PomodoroPhaseIndicator() {
  return (
    <div className='w-full rounded-full border border-new-highlightLighter grid grid-cols-3 text-center overflow-hidden'>
      <PomodoroPhase phase='long-break' />
      <PomodoroPhase phase='working' />
      <PomodoroPhase phase='short-break' />
    </div>
  );
}

const textMap: Record<PomodoroPhase, string> = {
  'long-break': 'Long Break',
  'short-break': 'Short Break',
  working: 'Focus',
};

function PomodoroPhase({ phase }: { phase: PomodoroPhase }) {
  const { phase: currentPhase, setPhase } = usePomodoro();

  const handleClick = () => {
    if (phase !== currentPhase) {
      setPhase(phase);
    }
  };

  return (
    <div
      className={classNames(
        'cursor-pointer py-4 text-4xl border-r last:border-none border-new-highlightLighter hover:bg-new-white/10',
        'uppercase',
        {
          'text-new-white': currentPhase === phase,
          'bg-new-white/10': currentPhase === phase,
          'text-new-highlight hover:text-new-white': currentPhase !== phase,
        }
      )}
      role='button'
      onClick={handleClick}
    >
      {textMap[phase]}
    </div>
  );
}
