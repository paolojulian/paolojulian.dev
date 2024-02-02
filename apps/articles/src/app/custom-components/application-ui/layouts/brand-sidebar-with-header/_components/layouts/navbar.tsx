'use client';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useSidebarControls } from '../../_context/SidebarControlsProvider';
import BarsIcon from '../icons/bars-icon';
import BellIcon from '../icons/bell-icon';
import CaretDownIcon from '../icons/caret-down';
import SearchIcon from '../icons/search-icon';
import PopoverMenu from '../popovers/popover-menu';
import Container from './container';
import Row from './row';
import Stack from './stack';

export type NavbarProps = {
  // no props
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { setIsOpen } = useSidebarControls();

  return (
    <nav className='flex shadow-sm border-b border-neutral-300'>
      <Container className='flex-1'>
        <Row className='items-center'>
          <Row className='flex-1 space-x-2 lg:space-x-0 items-center'>
            <button
              className='flex lg:hidden items-center justify-center w-9 h-9 rounded-sm'
              onClick={() => setIsOpen(true)}
            >
              <BarsIcon />
            </button>

            <span className='block lg:hidden h-6 w-[1px] border-r border-neutral-200'></span>

            <form
              className='relative flex-1'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor='search-field' className='hidden'>
                Search...
              </label>
              <div className='absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none'>
                <SearchIcon className='stroke-neutral-400 w-6 h-6' />
              </div>
              <input
                id='search-field'
                className='p-4 pl-8 w-full bg-transparent focus:outline-none'
                placeholder='Search...'
              ></input>
            </form>
          </Row>

          {/* menu */}
          <Row className='items-center space-x-4'>
            <button className='text-neutral-500 hover:text-neutral-800'>
              <BellIcon />
            </button>

            <span className='h-6 w-[1px] border-r border-neutral-200'></span>

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
              <div className='flex flex-row items-center space-x-2'>
                <div className='w-8 h-8 flex items-center justify-center rounded-full bg-neutral-200'>
                  P
                </div>
                <span className='font-semibold hidden md:block'>
                  Paolo Vincent Julian
                </span>
                <CaretDownIcon className='w-5 h-5 text-neutral-400 hidden md:block' />
              </div>
            </PopoverMenu>
          </Row>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
