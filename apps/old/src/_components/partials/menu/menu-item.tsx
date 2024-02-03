'use client';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

export const dataTestId = {
  container: 'menu-item-container',
};

interface Props {
  imageUrls: {
    phone: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  isActive: boolean;
  link: string;
  title: string;
}

const MenuItem: FunctionComponent<Props> = ({
  imageUrls,
  description,
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
      setIsOpen(false);
    }
  }, [pathname, currentPathname, setIsOpen]);

  return (
    <Link
      className={[
        'flex flex-col gap-1 md:gap-2',
        'w-[140px] md:w-[350px] lg:w-[500px]',
        'overflow-hidden',
        'cursor-pointer relative group',
      ].join(' ')}
      data-testid={dataTestId.container}
      href={link}
      role='button'
    >
      <Row className='flex flex-row items-center gap-1 md:gap-2 relative'>
        {!!isActive && (
          <div className='w-2 md:w-4 aspect-square bg-red-300'></div>
        )}
        <Uppercase as='h3' className='text-sm md:text-xl xl:text-2xl'>
          {title}
        </Uppercase>
      </Row>
      <Stack className='flex-1 items-center md:items-start bg-white p-2 md:p-4 justify-between rounded-sm'>
        {ImageComponent}
        <Text className='text-sm line-clamp-4 md:line-clamp-6 lg:line-clamp-none md:text-lg text-gray-500'>
          {description}
        </Text>
      </Stack>
    </Link>
  );
};

export default MenuItem;
