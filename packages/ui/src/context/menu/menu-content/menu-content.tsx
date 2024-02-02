'use client';
import { ReactNode } from 'react';
import { useMenuContext } from '../context/menu-provider';

interface Props {
  children: ReactNode;
}

export default function MenuContent({ children }: Props) {
  const { isOpen, setIsOpen } = useMenuContext();

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={[
        'flex-1 motion-reduce:transition-none',
        'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
        'duration-500 relative',
        'bg-new-black',
        'flex flex-col',
        'h-auto w-screen overflow-x-hidden min-h-screen',
        isOpen ? 'cursor-pointer overflow-hidden' : '',
        isOpen
          ? '-translate-y-[400px] md:-translate-y-[500px]'
          : 'translate-y-0',
      ].join(' ')}
      onClick={handleClick}
    >
      <div className={isOpen ? 'pointer-events-none' : ''}>{children}</div>
    </div>
  );
}
