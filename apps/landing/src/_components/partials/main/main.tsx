'use client';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import React, { FunctionComponent, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: FunctionComponent<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useMenuContext();

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (isOpen) {
  //     if (container) {
  //       container.style.transform = `translateY(calc(-${window.screen.height}px + 400px))`;
  //     }

  //     document.body.classList.add('no-scroll');
  //   } else {
  //     if (container) {
  //       container.style.transform = `translateY(0)`;
  //     }
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={[
        'flex-1 motion-reduce:transition-none pb-24',
        'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
        'duration-500 relative z-10',
        'bg-white',
        'border-l-4 md:border-l-8 border-primary-300 flex flex-col',
        'h-auto w-screen overflow-x-hidden min-h-screen',
        isOpen ? 'pointer-events-none' : '',
        // isOpen ? 'overflow-hidden' : 'overflow-y-auto',
        isOpen ? '-translate-y-[400px] md:-translate-y-[500px]' : 'translate-y-0',
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Main;
