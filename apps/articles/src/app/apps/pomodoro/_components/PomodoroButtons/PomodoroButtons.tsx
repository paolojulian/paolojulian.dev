'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import classNames from 'classnames';
import { useCallback, useEffect } from 'react';

export default function PomodoroButtons() {
  const { playbackStatus, onPause, onPlay, onNextPhase } = usePomodoro();

  const handlePausePlay = useCallback(() => {
    if (playbackStatus === 'paused' || playbackStatus === 'stop') {
      onPlay();
    } else {
      onPause();
    }
  }, [playbackStatus, onPlay, onPause]);

  function handleBreak() {
    onNextPhase(true);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the event target is an input element
      const isInputElement = event.target instanceof HTMLInputElement;

      if (event.code === 'Space' && !isInputElement) {
        handlePausePlay();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePausePlay]);

  return (
    <div className='flex items-center justify-center gap-4 p-4 w-full'>
      <button
        className='rounded-full h-20 aspect-square bg-new-highlight/50 hover:bg-new-highlight/70 hover:scale-110 duration-500'
        onClick={handleBreak}
      >
        <p className='text-new-white text-2xl'>STOP</p>
      </button>

      <button
        className={classNames(
          'rounded-full h-32 aspect-square duration-500 hover:scale-[1.05]',
          playbackStatus === 'playing' ? 'bg-[#F87171]' : 'bg-new-white'
        )}
        onClick={handlePausePlay}
      >
        <p className='text-4xl text-new-black'>
          {playbackStatus === 'playing' ? 'PAUSE' : 'PLAY'}
        </p>
        <p className='text-new-black'>{`(space)`}</p>
      </button>

      <button
        className='rounded-full h-20 aspect-square bg-new-highlight/50 hover:bg-new-highlight/70 hover:scale-110 duration-500'
        onClick={handleBreak}
      >
        <p className='text-new-white text-2xl'>NEXT</p>
      </button>
    </div>
  );
}
