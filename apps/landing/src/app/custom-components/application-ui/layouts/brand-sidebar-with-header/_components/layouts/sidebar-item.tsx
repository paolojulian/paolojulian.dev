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
          'flex flex-row items-center space-x-2 select-none',
          'px-2 py-2 rounded active:bg-neutral-800/30',
          isActive && 'pointer-events-none',
          isActive ? 'bg-neutral-800/20' : 'hover:bg-neutral-800/20',
          isActive ? 'text-white' : 'text-neutral-200'
        )}
      >
        {Icon}
        <span className='text-sm font-medium'>{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
