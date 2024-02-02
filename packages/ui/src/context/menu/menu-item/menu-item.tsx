import { useMenuContext } from '..';
import { ReactNode } from 'react';
import Link from 'next/link';
import Row from '../../../components/row';
import Typography from '../../../components/typography';
import Stack from '../../../components/stack';
import { TriangleListIcon } from '../../../components/icons';
import cn from '../../../utils/cn';

interface Props {
  ImageComponent: ReactNode;
  isActive: boolean;
  link: string;
  title: string;
}

export default function MenuItem({
  link,
  isActive,
  title,
  ImageComponent,
}: Props) {
  const { setIsOpen } = useMenuContext();

  const handleClick = () => setIsOpen(false);

  return (
    <Link
      href={link}
      className={cn(
        [
          'ui-flex ui-flex-col ui-gap-1 md:ui-gap-4',
          'ui-w-[140px] md:ui-w-[350px] lg:ui-w-[400px]',
          'ui-overflow-hidden',
          'ui-cursor-pointer ui-relative ui-group',
          'ui-duration-500 hover:ui-text-primary',
        ].join(' ')
      )}
      onClick={handleClick}
    >
      <Row className='ui-items-center ui-gap-2 md:ui-gap-2 ui-relative'>
        <TriangleListIcon />
        <Typography variant={'heading'}>{title}</Typography>
      </Row>
      <Stack
        className={cn(
          'ui-aspect-[500/320] ui-w-full ui-relative ui-flex-1',
          'ui-items-center md:ui-items-start ui-bg-black ui-p-2 md:ui-p-4',
          'ui-justify-between ui-rounded ui-border-4 ui-border-gray',
          'ui-duration-500 group-hover:ui-border-primary',
          'ui-overflow-hidden',
          {
            'ui-border-secondary': isActive,
          }
        )}
      >
        {ImageComponent}
      </Stack>
    </Link>
  );
}
