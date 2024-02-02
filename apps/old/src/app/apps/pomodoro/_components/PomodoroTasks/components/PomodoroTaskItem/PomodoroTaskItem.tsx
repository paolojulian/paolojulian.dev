'use client';
import { Task } from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks';
import Text from '@/app/apps/pomodoro/_components/Text';
import ResetIcon from '@/app/apps/pomodoro/_components/icons/reset-icon';
import TrashIcon from '@/app/apps/pomodoro/_components/icons/trash-icon';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useTimer } from '@/app/apps/pomodoro/_hooks/useTimer';
import classNames from 'classnames';
import { MouseEvent, memo, useEffect } from 'react';
import styles from './PomodoroTaskItem.module.css';

export const POMODORO_TASK_ITEM_ELEMENTS = {
  container: (id: string) => `PomodoroTaskItem__${id}`,
};

interface PomodoroTaskItemProps {
  onArchive: (taskId: string) => void;
  onCountUp: (taskId: string) => void;
  onResetTimeElapsed: (taskId: string) => void;
  onSelect: (taskId: string) => void;
  isSelected: boolean;
  task: Task;
}

let archiveTimeoutId: NodeJS.Timeout;

const PomodoroTaskItem = memo(
  ({
    onArchive,
    onCountUp,
    onResetTimeElapsed,
    onSelect,
    isSelected,
    task,
  }: PomodoroTaskItemProps) => {
    const timeElapsedText = getTimeElapsedText(task.timeElapsed);

    const { phase, playbackStatus } = usePomodoro();

    const handleTick = () => {
      onCountUp(task.id);
    };

    const { play, pause } = useTimer({
      onTick: handleTick,
    });

    useEffect(() => {
      const shouldStartCounting =
        phase === 'working' && playbackStatus === 'playing' && !!isSelected;

      if (shouldStartCounting) {
        play();
      } else {
        pause();
      }
    }, [isSelected, pause, phase, play, playbackStatus]);

    const handleSelect = () => {
      onSelect(task.id);
    };

    const handleArchive = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onArchive(task.id);
    };

    const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onResetTimeElapsed(task.id);
    };

    useEffect(() => {
      return () => clearTimeout(archiveTimeoutId);
    }, []);

    return (
      <div
        className={classNames(
          'relative flex justify-between items-center px-6 py-4 border border-new-highlight rounded-2xl',
          'group font-sans',
          isSelected
            ? 'bg-new-white text-new-black'
            : 'hover:bg-new-highlight/10',
          styles.container
        )}
        role='button'
        onClick={handleSelect}
        data-id={POMODORO_TASK_ITEM_ELEMENTS.container(task.id)}
      >
        <div>
          <Text as='h3' className='line-clamp-2'>{`${task.title}`}</Text>
          <Text as='p' className='text-new-highlight'>
            {timeElapsedText}
          </Text>
        </div>
        <div className='flex flex-row gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <button onClick={handleReset}>
            <ResetIcon />
          </button>
          <button onClick={handleArchive}>
            <TrashIcon />
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if isSelected or task properties change
    return (
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.task === nextProps.task
    );
  }
);
PomodoroTaskItem.displayName = 'PomodoroTaskItem';

export default PomodoroTaskItem;

function getTimeElapsedText(elapsedTime: number) {
  if (elapsedTime === 0) {
    return 'Not yet started.';
  }

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  if (minutes >= 60) {
    return `Time elapsed: ${Math.floor(minutes / 60)}h ${String(
      minutes % 60
    ).padStart(2, '0')}m`;
  }

  return `Time elapsed: ${minutes}m ${String(seconds).padStart(2, '0')}s`;
}
