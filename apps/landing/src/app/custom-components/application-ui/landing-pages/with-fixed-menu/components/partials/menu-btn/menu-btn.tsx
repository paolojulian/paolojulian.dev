'use client';
import useMenuContext from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/context/menu-provider/use-menu-context';
import HamburgerIcon from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/icons/hamburger-icon';
import React, { FunctionComponent } from 'react';
import CloseIcon from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/icons/close-icon';

interface Props {
  // no props
}

const MenuButton: FunctionComponent<Props> = () => {
  const { isOpen, setIsOpen } = useMenuContext();

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <button
      className={[
        'w-20 aspect-square rounded-full shadow-highBlur',
        'transition z-50',
        'active:scale-95',
        'fixed left-1/2 bottom-12 -translate-x-1/2',
        'group',
        isOpen
          ? 'bg-white hover:bg-primary-400 text-white'
          : 'bg-primary-400 hover:bg-white text-primary-400',
      ].join(' ')}
      onClick={handleClick}
    >
      <div className='flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity'>
        {isOpen ? (
          <CloseIcon className='w-8 h-8' />
        ) : (
          <HamburgerIcon className='w-8 h-8' />
        )}
      </div>
    </button>
  );
};

export default MenuButton;
