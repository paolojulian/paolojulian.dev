'use client';
import { useCallback, useEffect, useRef } from "react";
import worker_script from './timerWorker';

interface UseTimerProps {
  onTick: () => void;
}

export function useTimer({ onTick }: UseTimerProps) {
  const workerRef = useRef<Worker>();

  useEffect(() => {
    if (typeof (Worker) === 'undefined') {
      return;
    }
    // Create a new Worker instance
    workerRef.current = new Worker(worker_script);

    workerRef.current.addEventListener('message', ({ data }) => {
      if (data === 'tick') {
        onTick();
      }
    })

    // Clean up the worker when the component unmounts
    return () => {
      if (workerRef.current) {
        // Pause the timer before terminating the worker
        workerRef.current.postMessage({ action: 'pause' });
        workerRef.current.terminate();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs only once

  const play = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({ action: 'start' });
    }
  }, []);

  const pause = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({ action: 'stop' });
    }
  }, []);

  return { play, pause };
}