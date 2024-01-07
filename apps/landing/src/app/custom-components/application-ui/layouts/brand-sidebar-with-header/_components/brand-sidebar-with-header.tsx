'use client';
import classNames from 'classnames';
import { Montserrat } from 'next/font/google';
import { FunctionComponent } from 'react';
import SidebarControlsProvider from '../_context/SidebarControlsProvider';
import Container from './layouts/container';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';
import styles from './pattern.module.css';

const font = Montserrat({ subsets: ['latin'] });

export type BrandSidebarWithHeaderProps = {
  // no props
};

const BrandSidebarWithHeader: FunctionComponent<
  BrandSidebarWithHeaderProps
> = () => {
  return (
    <SidebarControlsProvider>
      <div className={font.className}>
        <Sidebar />
        <div className='lg:pl-72 flex w-screen min-h-screen bg-neutral-50 text-neutral-700'>
          <div className='flex flex-col flex-1'>
            <Navbar />

            <main className='flex-1 flex flex-col p-4'>
              <Container className='flex-1 py-4'>
                <div
                  className={classNames(
                    'border border-neutral-300 border-dashed rounded-xl overflow-hidden h-full w-full',
                    styles.pattern
                  )}
                >
                  {/* <ArchitectPattern className='w-8 h-8 stroke-neutral-400' width="100%" height="100%" /> */}
                </div>
              </Container>
            </main>
          </div>
        </div>
      </div>
    </SidebarControlsProvider>
  );
};

export default BrandSidebarWithHeader;
