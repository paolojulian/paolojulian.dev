'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// Custom hook for persisting state in localStorage
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  // Retrieve the stored value from localStorage (if available)
  const storedValue =
    typeof window !== 'undefined' ? localStorage.getItem(key) : '';
  // Parse the stored value or use the initial value if it doesn't exist
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  // Create state to store the value
  const [value, setValue] = useState<T>(initial);

  // Update localStorage whenever the state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  // Return the value and a function to update it
  return [value, setValue];
}

export default useLocalStorage;
