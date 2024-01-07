'use client';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

export type ResizableContainerProps = {
  children: React.ReactNode;
};

const minWidth = 300;

const ResizableContainer: FunctionComponent<ResizableContainerProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyContainerRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(containerRef.current?.offsetWidth || 0);
  const [maxWidth, setMaxWidth] = useState(
    containerRef.current?.offsetWidth || 0
  );

  useEffect(() => {
    if (!dummyContainerRef.current) return;

    setWidth(dummyContainerRef.current.offsetWidth);
    setMaxWidth(dummyContainerRef.current.offsetWidth);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    e.preventDefault(); // remove text selection to avoid mouse up not being called

    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (e: MouseEvent) => {
      setIsResizing(true);
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className='relative w-full'>
      <div className='absolute w-full' ref={dummyContainerRef}></div>
      <div
        className='h-[600px] lg:h-[720px] w-full relative'
        ref={containerRef}
        style={{ width }}
      >
        <div
          className={classNames(
            'h-full w-full',
            isResizing ? 'pointer-events-none cursor-ew-resize' : ''
          )}
        >
          {children}
        </div>
        <div
          className='absolute left-full inset-y-0 px-2 hidden sm:flex flex-col justify-center cursor-ew-resize '
          onMouseDown={handleMouseDown}
        >
          <div
            className={classNames(
              'h-8 w-1.5 transition-colors rounded-full',
              isResizing ? 'bg-red-500' : 'bg-slate-400'
            )}
            aria-valuenow={width}
            aria-valuemin={minWidth}
            aria-valuemax={maxWidth}
            role='slider'
            onMouseDown={(e) => e.preventDefault()}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResizableContainer;
