'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Routes } from '../../app/utils/constants';
import { useMenu } from './Menu.context';
import MenuItem from './MenuItem';

type MenuProps = {};

const Menu: FC<MenuProps> = () => {
  const pathname = usePathname();
  const { isOpen } = useMenu();

  return createPortal(
    <div
      aria-label='Menu Container'
      className={classNames(
        // The reason for the z-40 is to make space for the menu button which has a z-50
        'z-40',
        'fixed inset-0',
        {
          'pointer-events-none': !isOpen,
        }
      )}
    >
      <div aria-label='Menu Overlay'></div>
      <div
        aria-label='Menu Content Container'
        className={classNames(
          'absolute inset-0 transition-transform duration-200 ease-in-out bg-black',
          {
            'translate-y-0': isOpen,
            'translate-y-full': !isOpen,
          }
        )}
      >
        <nav aria-label='Menu Content Nav' className='size-full'>
          <ul
            aria-label='Menu Content List'
            className='flex flex-col items-center justify-center h-full space-y-4'
          >
            <MenuItem
              isActive={pathname === Routes.Home}
              href={Routes.Home}
              title='Home'
            />
            <MenuItem
              isActive={pathname === Routes.About}
              href={Routes.About}
              title='About'
            />
            <MenuItem
              isActive={pathname === Routes.Articles}
              href={Routes.Articles}
              target='_blank'
              title='Articles'
            />
            <MenuItem
              isActive={pathname === Routes.Apps}
              href={Routes.Apps}
              title='Apps'
            />
            <MenuItem
              isActive={pathname === Routes.Contact}
              href={Routes.Contact}
              target='_blank'
              title='Contact'
            />
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  );
};

export default Menu;
