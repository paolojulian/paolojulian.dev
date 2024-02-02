'use client';
import { ReactNode } from 'react';
import { useMenuContext } from '../context/menu-provider';
import cn from '../../../utils/cn';

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
      className={cn(
        [
          'ui-flex-1 motion-reduce:ui-transition-none',
          'ui-ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
          'ui-duration-500 ui-relative',
          'ui-bg-new-black',
          'ui-flex ui-flex-col',
          'ui-h-auto ui-w-screen ui-overflow-x-hidden ui-min-h-screen',
          isOpen ? 'ui-cursor-pointer ui-overflow-hidden' : '',
          isOpen
            ? '-ui-translate-y-[400px] md:-ui-translate-y-[500px]'
            : 'ui-translate-y-0',
        ].join(' ')
      )}
      onClick={handleClick}
    >
      <div className={isOpen ? 'ui-pointer-events-none' : ''}>{children}</div>
    </div>
  );
}
