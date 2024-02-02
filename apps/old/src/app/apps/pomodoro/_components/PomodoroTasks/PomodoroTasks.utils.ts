'use client';
import { Task } from "@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks";

const LOCAL_STORAGE_TASK_KEY = 'tasks';

export function getTasksFromLocalStorage() {
  if (typeof localStorage === 'undefined') {
    return [];
  }

  const tasks = localStorage.getItem(LOCAL_STORAGE_TASK_KEY);
  if (!tasks) {
    return [];
  }

  return JSON.parse(tasks);
}

export function setTasksToLocalStorage(tasks: Task[]) {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tasks));
}
