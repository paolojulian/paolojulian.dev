'use client';
import {
  getTasksFromLocalStorage,
  setTasksToLocalStorage,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks.utils';
import PomodoroAddTask, {
  TaskForm,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/components/PomodoroAddTask';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PomodoroTaskItem from './components/PomodoroTaskItem';

export interface Task {
  id: string;
  title: string;
  description: string;
  timeElapsed: number;
  isArchived: boolean;
  isFinished: boolean;
}

export default function PomodoroTasks() {
  const [tasks, setTasks] = useState<Task[]>(getTasksFromLocalStorage());

  const activeTasks = tasks.filter((task) => !task.isArchived);

  useEffect(() => {
    // Persist to localStorage
    setTasksToLocalStorage(tasks);
  }, [tasks]);

  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const handleAddTask = ({ title, description = '' }: TaskForm) => {
    setTasks((prev) => [
      ...prev,
      {
        id: uuid(),
        title,
        description,
        timeElapsed: 0,
        isArchived: false,
        isFinished: false,
      },
    ]);
  };

  const handleArchiveTask = (taskId: string) => {
    const taskToArchive = tasks.find(({ id }) => id === taskId);
    if (!taskToArchive) {
      return;
    }

    setTasks((prev) => [
      ...prev.filter(({ id }) => id !== taskId),
      {
        ...taskToArchive,
        isArchived: true,
        isFinished: true,
      },
    ]);
  };

  const handleSelectTask = (taskId: string) => {
    // Remove if clicked on the same task
    if (selectedTaskId === taskId) {
      return setSelectedTaskId('');
    }
    setSelectedTaskId(taskId);
  };

  const handleResetTimeElapsed = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, timeElapsed: 0 } : task
      )
    );
  };

  const handleCountUp = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, timeElapsed: task.timeElapsed + 1 }
          : task
      )
    );
  };

  return (
    <>
      <div className='flex-1 w-full flex flex-col rounded-3xl bg-new-white/10 items-stretch gap-10 border border-new-highlightLighter p-10 h-full'>
        <h2 className='text-2xl font-bold'>TASKS</h2>

        <div className='flex flex-col gap-2'>
          {activeTasks.map((task) => (
            <PomodoroTaskItem
              onArchive={handleArchiveTask}
              onCountUp={handleCountUp}
              onResetTimeElapsed={handleResetTimeElapsed}
              onSelect={handleSelectTask}
              key={task.id}
              isSelected={task.id === selectedTaskId}
              task={task}
            />
          ))}
          <PomodoroAddTask onAddTask={handleAddTask} />
        </div>
      </div>
    </>
  );
}
