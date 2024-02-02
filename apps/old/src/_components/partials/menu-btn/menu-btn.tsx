'use client';
import CloseIcon from '@/_components/icons/close-icon';
import HamburgerIcon from '@/_components/icons/hamburger-icon';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import { FunctionComponent } from 'react';

export const dataTestId = {
  button: 'menu-btn__button',
  closeIcon: 'menu-btn__close-icon',
  hamburgerIcon: 'menu-btn__hamburger-icon',
};

interface Props {
  // no props
}

const MenuButton: FunctionComponent<Props> = () => {
  const { isOpen, setIsOpen } = useMenuContext();

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <button
      onClick={handleClick}
      className={[
        'w-16 md:w-20 aspect-square rounded-full shadow-highBlur',
        'transition z-50',
        'active:scale-95',
        'fixed left-1/2 bottom-6 lg:bottom-12 -translate-x-1/2',
        'group',
        isOpen
          ? 'bg-white lg:hover:bg-primary-400 text-white'
          : 'bg-primary-400 lg:hover:bg-white text-primary-400',
      ].join(' ')}
      data-testid={dataTestId.button}
    >
      <div className='flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity'>
        {isOpen ? (
          <CloseIcon
            className='w-8 h-8 text-white'
            data-testid={dataTestId.closeIcon}
          />
        ) : (
          <HamburgerIcon
            className='w-8 h-8'
            data-testid={dataTestId.hamburgerIcon}
          />
        )}
      </div>
    </button>
  );
};

export default MenuButton;
