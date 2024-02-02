import classNames from 'classnames';
import { Anton } from 'next/font/google';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import CalendarIcon from '../icons/calendar-icon';
import CrossIcon from '../icons/cross-icon';
import FolderIcon from '../icons/folder-icon';
import GearIcon from '../icons/gear-icon';
import HomeIcon from '../icons/home-icon';
import PlusIcon from '../icons/plus-icon';
import UsersIcon from '../icons/users-icon';
import Row from './row';
import Stack from './stack';

const anton = Anton({ weight: '400', subsets: ['latin'] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSidebarLinkIcon = (WrappedComponent: FunctionComponent<any>) => {
  const WithSidebarLinkIcon = () => {
    return <WrappedComponent className='w-8 h-8' />;
  };

  return WithSidebarLinkIcon;
};

const SidebarHomeIcon = withSidebarLinkIcon(HomeIcon);
const SidebarUsersIcon = withSidebarLinkIcon(UsersIcon);
const SidebarFolderIcon = withSidebarLinkIcon(FolderIcon);
const SidebarCalendarIcon = withSidebarLinkIcon(CalendarIcon);
const SidebarGearIcon = withSidebarLinkIcon(GearIcon);

const SidebarLink = ({
  isActive = false,
  Icon = null,
  ...props
}: React.ComponentProps<typeof Link> & {
  isActive?: boolean;
  Icon?: React.ReactNode;
}) => {
  return (
    <Link {...props}>
      <Row
        className={classNames(
          'space-x-4 items-center px-3 py-2 rounded-full',
          isActive ? 'text-gray-800' : 'text-gray-400',
          'hover:text-cyan-500 text-xl',
          ' hover:bg-cyan-600/5'
        )}
      >
        {Icon}
        {props.children ? (
          <span className='sm:hidden lg:inline font-semibold'>
            {props.children}
          </span>
        ) : null}
      </Row>
    </Link>
  );
};

export type SidebarProps = {
  // no props
};

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <aside className='hidden sm:block lg:w-72 sticky top-0 left-0 h-screen'>
        <Stack className='p-2 py-4 lg:py-8 lg:p-8 space-y-4 lg:space-y-12 h-full sm:items-center lg:items-start'>
          <div
            className={classNames(
              'w-9 h-9 rounded-full bg-cyan-400 text-gray-50 flex items-center justify-center text-lg select-none',
              anton.className
            )}
          >
            P
          </div>

          <Stack className='space-y-2 flex-1'>
            <SidebarLink href='#' Icon={<SidebarHomeIcon />} isActive>
              Home
            </SidebarLink>
            <SidebarLink href='#' Icon={<SidebarUsersIcon />}>
              Friends
            </SidebarLink>
            <SidebarLink href='#' Icon={<SidebarFolderIcon />}>
              Groups
            </SidebarLink>
            <SidebarLink href='#' Icon={<SidebarCalendarIcon />}>
              Calendar
            </SidebarLink>
            <SidebarLink href='#' Icon={<SidebarGearIcon />}>
              Settings
            </SidebarLink>
          </Stack>
          <button className='rounded-full py-3 bg-cyan-500 text-gray-50 sm:w-12 lg:w-full sm:h-12 lg:h-auto flex justify-center items-center'>
            <span className='sm:block lg:hidden'>
              <PlusIcon />
            </span>
            <span className='sm:hidden lg:block font-semibold'>NEW POST</span>
          </button>
        </Stack>
      </aside>

      <nav className='sm:hidden fixed bottom-0 inset-x-0 h-14 bg-white border-t border-gray-300 z-30'>
        <Row className='h-full items-center justify-between px-4'>
          <SidebarLink
            href='#'
            Icon={<SidebarHomeIcon />}
            isActive
          ></SidebarLink>
          <SidebarLink href='#' Icon={<SidebarUsersIcon />}></SidebarLink>
          <SidebarLink href='#' Icon={<SidebarFolderIcon />}></SidebarLink>
          <SidebarLink href='#' Icon={<SidebarCalendarIcon />}></SidebarLink>
          <div
            className={classNames(
              'w-9 h-9 rounded-full bg-cyan-400 text-gray-50 flex items-center justify-center text-lg select-none',
              anton.className
            )}
            role='button'
            onClick={handleToggleMenu}
          >
            P
          </div>
        </Row>
      </nav>

      <nav
        className={classNames(
          'lg:hidden fixed inset-0 z-40',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none'
        )}
      >
        {/* overlay */}
        <div
          className={classNames(
            'absolute inset-0',
            'bg-gray-800/30 transition-opacity',
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
        ></div>

        {/* content */}
        <div
          className={classNames(
            'h-full w-full bg-white transition-transform',
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <Stack className='p-4 space-y-4 flex-1 h-full'>
            <Stack className='space-y-8 flex-1'>
              <Row className='items-center text-left space-x-4'>
                <div className='w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center font-bold text-gray-50'>
                  P
                </div>
                <Stack>
                  <h2 className='font-semibold'>Paolo Vincent Julian</h2>
                  <p className='text-sm text-gray-400'>Software Engineer</p>
                </Stack>
              </Row>
              <Stack className='space-y-2'>
                <SidebarLink href='#' Icon={<SidebarHomeIcon />} isActive>
                  Home
                </SidebarLink>
                <SidebarLink href='#' Icon={<SidebarUsersIcon />}>
                  Friends
                </SidebarLink>
                <SidebarLink href='#' Icon={<SidebarFolderIcon />}>
                  Groups
                </SidebarLink>
                <SidebarLink href='#' Icon={<SidebarCalendarIcon />}>
                  Calendar
                </SidebarLink>
                <SidebarLink href='#' Icon={<SidebarGearIcon />}>
                  Settings
                </SidebarLink>
                <SidebarLink href='#'>Sign out</SidebarLink>
              </Stack>
            </Stack>
            <Row className='justify-end'>
              <button className='w-8 h-8' onClick={handleToggleMenu}>
                <CrossIcon />
              </button>
            </Row>
          </Stack>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
