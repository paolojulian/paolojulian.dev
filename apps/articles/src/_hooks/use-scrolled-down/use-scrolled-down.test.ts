import useScrolledDown from "./use-scrolled-down";
import { act, renderHook } from "@testing-library/react";

describe("TESTING useScrolledDown hook", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    container.remove();
  });

  describe("GIVEN scroll threshold", () => {
    const threshold = 800;

    describe("WHEN useScrollDown is not scrolled beyond threshold", () => {
      const { result } = renderHook(() => useScrolledDown(threshold)); // Set a threshold value
      const scrollEvent = new Event('scroll', { bubbles: true });

      act(() => {
        window.scrollY = threshold - 1; //
        window.dispatchEvent(scrollEvent);
      });
      it("THEN it should return false", () => {
        expect(result.current).toBe(false);
      })
    })

    describe("WHEN useScrollDown is scrolled beyond threshold", () => {
      const { result } = renderHook(() => useScrolledDown(threshold)); // Set a threshold value
      const scrollEvent = new Event('scroll', { bubbles: true });

      act(() => {
        window.scrollY = threshold + 1; // Simulate scrolling beyond the threshold
        window.dispatchEvent(scrollEvent);
      });

      it("THEN it should return true", () => {
        expect(result.current).toBe(true);
      })
    })
  })
  describe("GIVEN no threshold", () => {
    const defaultThreshold = 1;

    describe("WHEN useScrollDown have default threshold of 1", () => {
      const { result } = renderHook(() => useScrolledDown()); // Set a threshold value
      const scrollEvent = new Event('scroll', { bubbles: true });

      act(() => {
        window.scrollY = 0;
        window.dispatchEvent(scrollEvent);
      });

      it("THEN it should return false", () => {
        expect(result.current).toBe(false);
      })
    })

    describe("WHEN useScrollDown is scrolled beyond 1", () => {
      const { result } = renderHook(() => useScrolledDown()); // Set a threshold value
      const scrollEvent = new Event('scroll', { bubbles: true });

      act(() => {
        window.scrollY = defaultThreshold;
        window.dispatchEvent(scrollEvent);
      });

      it("THEN it should return true", () => {
        expect(result.current).toBe(true);
      })
    })
  })
})