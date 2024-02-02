import classNames from 'classnames';
import { Anton } from 'next/font/google';
import { FunctionComponent } from 'react';
import Row from './row';
import Stack from './stack';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export type NavbarProps = {
  // no props
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav className='hidden sm:block inset-x-0 top-0 h-16 border-b border-gray-300 bg-white z-50'>
      <Row className='sm:max-w-screen-sm lg:max-w-screen-xl mx-auto w-full h-full items-center justify-between lg:px-8'>
        <div
          className={classNames(
            'w-9 h-9 rounded-full bg-cyan-400 text-gray-50 flex items-center justify-center text-lg select-none',
            anton.className
          )}
        >
          P
        </div>
        <Row className='justify-end items-center text-right space-x-4 h-full'>
          <Stack>
            <h2 className='font-semibold'>Paolo Vincent Julian</h2>
            <p className='text-sm text-gray-400'>Software Engineer</p>
          </Stack>
          <div className='w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center font-bold text-gray-50'>
            P
          </div>
        </Row>
      </Row>
    </nav>
  );
};

export default Navbar;
