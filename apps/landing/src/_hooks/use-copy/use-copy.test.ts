import { act, renderHook } from '@testing-library/react';
import useCopy from '@/_hooks/use-copy';

const writeText = jest.fn()
Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('TESTING useCopy custom hook', () => {
  describe('GIVEN the link and timeout', () => {
    const link = 'https://www.paolojulian.dev/blogs/unit-testing#unit-test'
    const timeout = 1000

    describe('WHEN the useCopy is called', () => {
      it('THEN it should return default state', () => {
        const { result } = renderHook(useCopy, { initialProps: { link, timeout_ms: timeout } })
        expect(result.current.isCopied).toBe(false);
      });
    });

    describe('WHEN the handleClickCopy is called', () => {
      it('THEN it should assign the link to the navigator', () => {
        const { result } = renderHook(useCopy, { initialProps: { link, timeout_ms: timeout } })
        act(() => result.current.handleClickCopy())
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      });
      it('THEN it should return isCopied as true', () => {
        const { result } = renderHook(useCopy, { initialProps: { link, timeout_ms: timeout } })
        act(() => result.current.handleClickCopy())
        expect(result.current.isCopied).toBe(true);
      });
      it('THEN it should return isCopied as false after the timer is called ', () => {
        const { result } = renderHook(useCopy, { initialProps: { link, timeout_ms: timeout } })
        jest.useFakeTimers();
        act(() => result.current.handleClickCopy())
        act(() => jest.runAllTimers())
        expect(result.current.isCopied).toBe(false);
      });
    });

  });
});
