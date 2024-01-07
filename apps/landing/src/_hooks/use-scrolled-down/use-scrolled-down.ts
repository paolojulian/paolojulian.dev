import { throttle } from "lodash";
import { useEffect, useState } from "react";

interface UseScrolledDownOptions {
  once?: boolean;
}

export default function useScrolledDown(threshold: number = 1, { once }: UseScrolledDownOptions = { once: false }) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    setIsScrolledDown(false);
  }, [])

  useEffect(() => {
    const handleScrollThrottled = throttle(() => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Reduce opacity as soon as the user scrolls down the given treshold
      if (scrollY >= threshold) {
        setIsScrolledDown(true);
        if (once) {
          window.removeEventListener('scroll', handleScrollThrottled);
        }
      } else {
        setIsScrolledDown(false);
      }
    }, 200);

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollThrottled);

    return () => {
      // Remove scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, [threshold]);

  return isScrolledDown
}