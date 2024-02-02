'use client';
import {
  SECTIONS,
  useSections,
} from '@/app/(main-layout)/portfolio.backup/_context/sections-context';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const SideNav: FunctionComponent<Props> = () => {
  const { activeSection } = useSections();

  return (
    <div className='fixed left-0 inset-y-0 w-[100px] h-full justify-center z-50'>
      <div className='hidden lg:flex flex-col justify-center gap-2 h-screen pl-12 w-full border-r border-slate-400 font-capital'>
        {SECTIONS.map((section, i) => (
          <Link
            className='flex flex-row justify-between items-center transition pl-4 group w-full'
            href={`#${section}`}
            key={i}
          >
            <span
              className={classNames(
                'font-black text-[16px] tracking-[-0.48px]',
                activeSection === section
                  ? 'text-gray-800'
                  : 'text-gray-300 transition-colors group-hover:text-gray-700'
              )}
            >
              {`0${i}`}
            </span>
            <div
              className={classNames(
                'w-[3px] h-[40px]',
                activeSection === section ? 'bg-primary-400' : 'bg-transparent'
              )}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
