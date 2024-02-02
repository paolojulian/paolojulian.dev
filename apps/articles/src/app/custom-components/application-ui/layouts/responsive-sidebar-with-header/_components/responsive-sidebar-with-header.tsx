'use client';
import { Inter } from 'next/font/google';
import React, { FunctionComponent } from 'react';
import Sidebar from './layouts/sidebar';
import SidebarControlsProvider from '../_context/SidebarControlsProvider';
import Navbar from './layouts/navbar';
import Container from './layouts/container';
import classNames from 'classnames';
import styles from './pattern.module.css';

export type ResponsiveSidebarWithHeaderProps = {
  // no props
};

const font = Inter({ subsets: ['latin'] });

const ResponsiveSidebarWithHeader: FunctionComponent<
  ResponsiveSidebarWithHeaderProps
> = () => {
  return (
    <SidebarControlsProvider>
      <div className={font.className}>
        <Sidebar />
        <div className='sm:pl-16 lg:pl-72 flex w-screen min-h-screen bg-neutral-50 text-neutral-700'>
          <div className='flex flex-col flex-1'>
            <Navbar />

            <main className='flex-1 flex flex-col p-4'>
              <Container className='flex-1 py-4 flex flex-col'>
                <div
                  className={classNames(
                    'border border-neutral-300 border-dashed rounded-xl overflow-hidden w-full flex-1',
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

export default ResponsiveSidebarWithHeader;
