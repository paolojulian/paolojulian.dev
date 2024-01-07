'use client';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import HoverableTitle from '@/app/(portfolio)/_components/common/hoverable-title';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';

export const dataTestId = {
  container: 'menu-item-container',
};

interface Props {
  imageUrls: {
    desktop: string;
    tablet: string;
    phone: string;
  };
  isActive: boolean;
  link: string;
  title: string;
}

const MenuItem: FunctionComponent<Props> = ({
  imageUrls,
  isActive,
  link,
  title,
}) => {
  const { setIsOpen } = useMenuContext();

  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    if (currentPathname !== pathname) {
      setCurrentPathname(pathname);
    }
    setIsOpen(false);
  }, [pathname, currentPathname, setIsOpen]);

  const handleClick = () => {
    if (isActive) {
      setIsOpen(false);
    }
  }

  return (
    <Link
      className={[
        'flex flex-col gap-1 md:gap-2 last:pr-4',
        'cursor-pointer relative group',
      ].join(' ')}
      data-testid={dataTestId.container}
      href={link}
      onClick={handleClick}
      role='button'
    >
      <HoverableTitle isActive={isActive} title={title} />
      <div className='relative aspect-[428/926] md:aspect-[744/1133] lg:aspect-[499/322] h-[220px] md:h-[300px] lg:h-[220px] shadow-default overflow-hidden rounded w-fit'>
        <div className='md:hidden'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.phone}
          />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.tablet}
          />
        </div>
        <div className='hidden lg:block'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.desktop}
          />
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
