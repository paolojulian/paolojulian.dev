'use client';
import { FunctionComponent } from 'react';
import SearchIcon from './icons/search-icon';
import Navbar from './layouts/navbar';
import Row from './layouts/row';
import Sidebar from './layouts/sidebar';
import Stack from './layouts/stack';

export type MultiColumnProps = {
  // no props
};

const MultiColumn: FunctionComponent<MultiColumnProps> = () => {
  return (
    <div className='bg-white text-gray-800'>
      <Navbar />
      <Row className='sm:max-w-screen-sm lg:max-w-screen-xl mx-auto'>
        {/* sidebar */}
        <Sidebar />

        <main className='flex flex-row w-full'>
          {/* main content */}
          <div className='w-full lg:w-[600px] border-x border-gray-300 pb-14 sm:pb-0'>
            <Row className='justify-between items-center border-b border-gray-300 px-4 sticky top-0 z-10 bg-white'>
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
              <h1 className='font-semibold text-lg'>Home</h1>
            </Row>

            {/* Posts */}
            <Stack className='space-y-2'>
              <Stack className='p-4 space-y-4 border-b border-gray-300'>
                <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center font-bold text-gray-50'>
                  P
                </div>
                <Stack className='space-y-2'>
                  <div className='w-3/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-2/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-4/5 h-2 rounded-full bg-gray-300'></div>
                </Stack>
                <div className='w-full h-60 rounded-xl bg-gray-300'></div>
              </Stack>
              <Stack className='p-4 space-y-4 border-b border-gray-300'>
                <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center font-bold text-gray-50'>
                  P
                </div>
                <Stack className='space-y-2'>
                  <div className='w-3/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-2/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-4/5 h-2 rounded-full bg-gray-300'></div>
                </Stack>
                <div className='w-full h-60 rounded-xl bg-gray-300'></div>
              </Stack>
              <Stack className='p-4 space-y-4 border-b border-gray-300'>
                <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center font-bold text-gray-50'>
                  P
                </div>
                <Stack className='space-y-2'>
                  <div className='w-3/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-2/5 h-2 rounded-full bg-gray-300'></div>
                  <div className='w-4/5 h-2 rounded-full bg-gray-300'></div>
                </Stack>
                <div className='w-full h-60 rounded-xl bg-gray-300'></div>
              </Stack>
            </Stack>
          </div>

          {/* right sidebar */}
          <Stack className='flex-1 hidden lg:flex p-4 space-y-8 relative'>
            <Stack className='space-y-4 sticky top-4 right-0'>
              <h2>Suggestions</h2>
              <div className='bg-gray-100 w-full h-60 rounded-xl'></div>
              <div className='bg-gray-100 w-full h-60 rounded-xl'></div>
            </Stack>
          </Stack>
        </main>
      </Row>
    </div>
  );
};

export default MultiColumn;
