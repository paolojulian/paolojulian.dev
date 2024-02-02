'use client';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import BarsIcon from '../icons/bars-icon';
import BellIcon from '../icons/bell-icon';
import CloseIcon from '../icons/close-icon';
import PopoverMenu from '../popovers/popover-menu';
import Container from './container';
import Row from './row';
import Stack from './stack';

export type NavbarProps = {
  // no props
};

const HeaderLink = ({
  isActive = false,
  ...props
}: React.ComponentProps<typeof Link> & { isActive?: boolean }) => {
  return (
    <Link
      {...props}
      className={classNames(
        'font-semibold px-3 py-2 h-full flex md:justify-center items-center',
        'hover:bg-slate-900/5 active:bg-slate-900/10',
        isActive &&
          'border-l-2 md:border-l-0 md:border-b border-red-400 bg-red-500/5 md:bg-transparent'
      )}
    ></Link>
  );
};

const MemoizedHeaderLink = React.memo(HeaderLink);

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='fixed inset-x-0 top-0 h-14 bg-neutral-50 text-neutral-700 border-b border-neutral-200'>
        <Container className='flex flex-row h-full w-full items-center justify-between'>
          <Row className='items-center space-x-8 h-full'>
            {/* logo */}
            <div className='pointer-events-none select-none font-capital text-neutral-800 text-xl'>
              P
            </div>

            {/* menu */}
            <Row className='hidden md:flex space-x-4 h-full'>
              <MemoizedHeaderLink href='#' isActive>
                Dashboard
              </MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Team</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Projects</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Calendar</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Reports</MemoizedHeaderLink>
            </Row>
          </Row>

          <Row className='hidden md:flex space-x-4'>
            <button className='w-8 h-8 flex self-center items-center justify-center rounded-full focus:ring-red-400 focus:ring-2 text-neutral-500 hover:text-neutral-700'>
              <BellIcon />
            </button>
            <PopoverMenu
              Menu={
                <Stack className='py-2 px-2 space-y-1 text-sm'>
                  <Link
                    href='#'
                    role='menuitem'
                    className='hover:bg-neutral-200/50 active:bg-neutral-200 rounded w-40 py-2 px-2'
                  >
                    Profile
                  </Link>
                  <Link
                    href='#'
                    role='menuitem'
                    className='hover:bg-neutral-200/50 active:bg-neutral-200 rounded w-40 py-2 px-2'
                  >
                    Sign Out
                  </Link>
                </Stack>
              }
            >
              <div className='w-8 h-8 flex item-center justify-center rounded-full bg-neutral-400 text-neutral-50 leading-8'>
                P
              </div>
            </PopoverMenu>
          </Row>
          <button
            className={classNames(
              'w-8 h-8 flex md:hidden justify-center items-center',
              'rounded-full focus:ring-red-400 focus:ring-2 text-neutral-500 hover:text-neutral-700'
            )}
            onClick={handleMobileMenuClick}
          >
            <BarsIcon />
          </button>
        </Container>
      </nav>

      {/* mobile menu */}
      <div
        className={classNames(
          'fixed inset-0 z-40',
          'block md:hidden',
          isMobileMenuOpen ? '' : 'pointer-events-none'
        )}
      >
        {/* overlay */}
        <div
          className={classNames(
            'absolute inset-0 bg-neutral-900/30',
            'transition-opacity duration-500',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          role='button'
          onClick={handleMobileMenuClick}
        ></div>

        {/* modal */}
        <div
          className={classNames(
            'transition bg-neutral-50 rounded-2xl m-2',
            'shadow-lg',
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          )}
          role='dialog'
        >
          <Stack className='p-4 space-y-2'>
            <Row className='justify-between items-center'>
              {/* logo */}
              <div className='pointer-events-none select-none font-capital text-neutral-800 text-xl px-4'>
                P
              </div>

              {/* close button */}
              <button
                className='w-8 h-8 flex items-center justify-center rounded-full focus:ring-red-400 focus:ring-2 text-neutral-500 hover:text-neutral-700'
                onClick={handleMobileMenuClick}
              >
                <CloseIcon />
              </button>
            </Row>

            {/* menu */}
            <Stack className='space-y-2'>
              <MemoizedHeaderLink href='#' isActive>
                Dashboard
              </MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Team</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Projects</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Calendar</MemoizedHeaderLink>
              <MemoizedHeaderLink href='#'>Reports</MemoizedHeaderLink>
            </Stack>
            <div className='w-full h-[1px] bg-neutral-200 my-4'></div>

            <Stack className='space-y-4 py-4'>
              <Row className='items-center space-x-4 justify-between'>
                <div className='w-12 h-12 flex flex-col items-center justify-center rounded-full bg-neutral-400 text-neutral-50'>
                  <div>P</div>
                </div>
                <Stack className='flex-1 hidden sm:flex'>
                  <p className='font-semibold text-lg'>Paolo Vincent Julian</p>
                  <p className='text-neutral-500 text-sm'>
                    paolojulian@example.com
                  </p>
                </Stack>
                <button className='w-8 h-8 flex items-center justify-center rounded-full focus:ring-red-400 focus:ring-2 text-neutral-500 hover:text-neutral-700'>
                  <BellIcon />
                </button>
              </Row>

              <Stack>
                <MemoizedHeaderLink href='#'>Profile</MemoizedHeaderLink>
                <MemoizedHeaderLink href='#'>Settings</MemoizedHeaderLink>
                <MemoizedHeaderLink href='#'>Sign out</MemoizedHeaderLink>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Navbar;
