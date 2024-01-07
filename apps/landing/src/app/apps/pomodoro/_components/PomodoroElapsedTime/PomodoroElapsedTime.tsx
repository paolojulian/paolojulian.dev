'use client';
import ResetIcon from '@/app/apps/pomodoro/_components/icons/reset-icon';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useTimer } from '@/app/apps/pomodoro/_hooks/useTimer';
import { useEffect, useMemo, useState } from 'react';

export default function PomodoroElapsedTime() {
  const { phase, playbackStatus } = usePomodoro();
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleCountUp = () => {
    setElapsedTime((prevTime) => prevTime + 1);
  };

  const { play, pause } = useTimer({
    onTick: handleCountUp,
  });

  useEffect(() => {
    if (phase === 'working' && playbackStatus === 'playing') {
      play();
    } else {
      pause();
    }
  }, [phase, playbackStatus, play, pause]);

  const formattedElapsedTime = useMemo(() => {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const remainingSeconds = elapsedTime % 60;

    const formattedTime = `${hours > 0 ? `${hours}h ` : ''}${
      minutes > 0 ? `${minutes}m ` : ''
    }${remainingSeconds}s`;

    return formattedTime.trim();
  }, [elapsedTime]);

  const handleResetElapsedTime = () => {
    setElapsedTime(0);
  };

  return (
    <div className='items-center flex flex-row gap-2'>
      <span className='text-2xl text-new-highlightLighter leading-tight'>
        Time Elapsed: {formattedElapsedTime}
      </span>
      <button
        className='text-new-highlightLighter hover:text-new-white'
        onClick={handleResetElapsedTime}
      >
        <ResetIcon />
      </button>
    </div>
  );
}
