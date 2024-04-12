'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function getInitialValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  const storedValue = localStorage.getItem(key);

  return storedValue ? JSON.parse(storedValue) : defaultValue;
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(getInitialValue(key, initialValue));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
