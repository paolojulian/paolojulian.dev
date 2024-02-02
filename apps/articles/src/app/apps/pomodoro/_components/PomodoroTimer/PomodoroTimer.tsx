'use client';
import {
  playRingingSound,
  showNotification,
} from '@/app/apps/pomodoro/_components/PomodoroTimer/PomodoroTimer.utils';
import {
  PomodoroPhase,
  usePomodoro,
} from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useTimer } from '@/app/apps/pomodoro/_hooks/useTimer';
import { useCallback, useEffect, useMemo, useState } from 'react';

const POMODORO_DEFAULT_TIME: Record<PomodoroPhase, number> = {
  working: 1500,
  'long-break': 900,
  'short-break': 300,
};

export default function PomodoroTimer() {
  const { phase, playbackStatus, onNextPhase } = usePomodoro();
  const [time, setTime] = useState(POMODORO_DEFAULT_TIME[phase]);

  // On change phase, update the default time.
  useEffect(() => {
    setTime(POMODORO_DEFAULT_TIME[phase]);
  }, [phase]);

  // Ask for notification permission
  useEffect(() => {
    if (!('Notification' in window)) {
      // Not supported in a window
      console.error('test', 'Notifications are not supported');
      return;
    }
    if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }, []);

  const handleCountDown = () => {
    setTime((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1;
      }
      // Next Phase
      return prevTime;
    });
  };

  const { play, pause } = useTimer({
    onTick: handleCountDown,
  });

  const handleTimerFinished = useCallback(() => {
    if (time === 0 && playbackStatus !== 'stop') {
      playRingingSound();
      showNotification();
      pause();
      const autoPlay = false;
      onNextPhase(autoPlay);
    }
  }, [time, playbackStatus, pause, onNextPhase]);

  useEffect(() => {
    handleTimerFinished();
  }, [handleTimerFinished]);

  useEffect(() => {
    switch (playbackStatus) {
      case 'playing':
        play();
        break;
      case 'stop':
      default:
        pause();
    }
  }, [playbackStatus, pause, play]);

  // Format the time into minutes and seconds
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [time]);

  return (
    <>
      <span className='text-9xl font-bold text-new-white leading-tight'>
        {formattedTime}
      </span>
    </>
  );
}
