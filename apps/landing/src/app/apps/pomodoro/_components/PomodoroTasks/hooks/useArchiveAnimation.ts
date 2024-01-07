import { POMODORO_TASK_ITEM_ELEMENTS } from '@/app/apps/pomodoro/_components/PomodoroTasks/components/PomodoroTaskItem';
import { useCallback, useEffect, useRef } from 'react';
import styles from '../components/PomodoroTaskItem/PomodoroTaskItem.module.css';

export function useArchiveAnimation() {
  const elementToArchive = useRef<Element | null>(null);

  const animationEndHandler = useCallback(() => {
    elementToArchive.current?.classList.remove(styles['container--archive']);
    elementToArchive.current?.removeEventListener(
      'animationend',
      animationEndHandler
    );
  }, []);

  function animate(taskId: string) {
    elementToArchive.current = document.querySelector(
      `[data-id="${POMODORO_TASK_ITEM_ELEMENTS.container(taskId)}"]`
    );

    setTimeout(() => {
      elementToArchive.current?.classList.add(styles['container--archive']);
      elementToArchive.current?.addEventListener(
        'animationend',
        animationEndHandler
      );
    }, 0);
  }

  useEffect(() => {
    return () => {
      elementToArchive.current?.removeEventListener(
        'animationend',
        animationEndHandler
      );
    };
  }, [animationEndHandler]);

  return {
    animate,
    animationEndHandler
  };
}
