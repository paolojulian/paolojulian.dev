'use client';
import { PTypography } from '@paolojulian.dev/design-system';
import { TriangleListIcon } from '@paolojulian.dev/design-system/icons';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useMenu } from './Menu.context';

type MenuItemProps = {
  isActive: boolean;
  href: string;
  title: 'Home' | 'About' | 'Apps' | 'Articles' | 'Contact';
  target?: HTMLAttributeAnchorTarget;
};

const MenuItem: FC<MenuItemProps> = ({ isActive, href, title, target }) => {
  const { setIsOpen } = useMenu();

  const handleClick = () => setIsOpen(false);

  return (
    <li>
      <Link
        onClick={handleClick}
        target={target}
        href={href}
        className={classNames(
          'cursor-pointer transition-colors duration-500 hover:text-primary',
          {
            'text-secondary': isActive,
            'text-white': !isActive,
          }
        )}
      >
        <div className='flex flex-row items-center gap-2 xl:gap-4'>
          {isActive ? (
            <TriangleListIcon
              className={classNames('size-4 xl:size-8 text-secondary')}
            />
          ) : null}
          <PTypography
            as='h1'
            aria-label='Menu Content Item'
            variant='heading-lg'
            className=''
          >
            {title}
          </PTypography>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
