'use client';
import classNames from 'classnames';
import { useMenuContext } from './context/menu-provider';

export default function Menu() {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'fixed bottom-0 left-0 bg-black/90',
        'py-4 md:py-6 lg:py-12 h-[400px] md:h-[500px] w-full z-40',
        'duration-500 overflow-hidden',
        'ease-menu',
        isOpen ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
    >
      <div
        className={classNames(
          'flex flex-row justify-center',
          'w-full pb-8 pr-8',
          'overflow-x-auto text-new-white',
          'transition-transform duration-500 ease-menu',
          isOpen
            ? 'lg:scale-100 translate-y-0'
            : 'lg:scale-75 lg:-translate-y-[120%]',
          isOpen ? '' : 'pointer-events-none'
        )}
      >
      </div>
    </nav>
  );
}
