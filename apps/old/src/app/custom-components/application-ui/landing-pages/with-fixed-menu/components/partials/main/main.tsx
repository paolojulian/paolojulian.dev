'use client';
import useMenuContext from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/context/menu-provider/use-menu-context';
import React, { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: FunctionComponent<Props> = ({ children }) => {
  const { isOpen } = useMenuContext();

  return (
    <div
      id='scroller'
      className={[
        'flex-1 motion-reduce:transition-none pb-24',
        'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
        'duration-500 relative z-10',
        'bg-white',
        'border-l-8 border-primary-300 min-h-screen flex flex-col',
        'h-screen w-screen overflow-x-hidden',
        isOpen ? 'overflow-y-hidden' : 'overflow-y-auto',
        isOpen ? '-translate-y-1/2' : 'translate-y-0',
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Main;
