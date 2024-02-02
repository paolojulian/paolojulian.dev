import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

export type SidebarItemProps = {
  // components
  Icon?: React.ReactNode;
  children: React.ReactNode;

  // variables
  isActive?: boolean;
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  isActive,
  children,
  Icon = null,
}) => {
  return (
    <li>
      <Link
        href='#'
        role='button'
        className={classNames(
          'flex flex-row justify-normal sm:justify-center lg:justify-normal items-center space-x-2 select-none',
          'px-2 py-2 rounded active:bg-neutral-100/30',
          isActive && 'pointer-events-none',
          isActive ? 'bg-neutral-100/20' : 'hover:bg-neutral-100/20',
          isActive ? 'text-white' : 'text-neutral-200'
        )}
      >
        {Icon}
        <span className='inline sm:hidden lg:inline text-sm font-medium'>
          {children}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
