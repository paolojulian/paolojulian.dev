import Image from 'next/image';
import Link from 'next/link';
import { useMenuContext } from '..';
import { TriangleListIcon } from '../../../components/icons';
import Row from '../../../components/row';
import Stack from '../../../components/stack';
import Typography from '../../../components/typography';
import cn from '../../../utils/cn';

interface Props {
  imageUrls: {
    phone: any;
    tablet: any;
    desktop: any;
  };
  isActive: boolean;
  link: string;
  title: string;
}

export default function MenuItem({ link, isActive, title, imageUrls }: Props) {
  const { setIsOpen } = useMenuContext();

  const handleClick = () => setIsOpen(false);

  return (
    <Link
      href={link}
      className={cn(
        [
          'ui-flex ui-flex-col ui-gap-1 md:ui-gap-4',
          'ui-overflow-hidden',
          'ui-cursor-pointer ui-relative ui-group',
          'ui-duration-500 hover:ui-text-primary',
        ].join(' ')
      )}
      onClick={handleClick}
    >
      <Row className='ui-items-center ui-gap-2 md:ui-gap-2 ui-relative'>
        <Typography variant={'heading'}>{title}</Typography>
      </Row>
      <Stack
        className={cn(
          'ui-w-full ui-relative ui-flex-1',
          'ui-items-center md:ui-items-start ui-bg-black ui-p-2 md:ui-p-4',
          'ui-justify-between ui-rounded ui-border-2 lg:ui-border-4 ui-border-gray',
          'ui-duration-500 group-hover:ui-border-primary',
          'ui-aspect-[428/926] md:ui-aspect-[744/1070] lg:ui-aspect-[499/322]',
          'ui-h-[220px] md:ui-h-[300px] lg:ui-h-[220px]',
          'ui-overflow-hidden',
          {
            'ui-border-secondary': isActive,
          }
        )}
      >
        {/* Phone */}
        <div className='md:ui-hidden'>
          <Image
            src={imageUrls.phone}
            className='ui-object-fill ui-object-center group-hover:ui-scale-105 ui-duration-500 ui-mix-blend-lighten'
            alt={title}
            sizes='33vw'
            fill
          />
        </div>
        <div className='ui-hidden md:ui-block lg:ui-hidden'>
          <Image
            src={imageUrls.tablet}
            className='ui-object-fill ui-object-center group-hover:ui-scale-105 ui-duration-500 ui-mix-blend-lighten'
            alt={title}
            sizes='33vw'
            fill
          />
        </div>
        {/* Desktop */}
        <div className='ui-hidden lg:ui-block'>
          <Image
            src={imageUrls.desktop}
            className='ui-object-fill ui-object-center group-hover:ui-scale-105 ui-duration-500'
            alt={title}
            sizes='33vw'
            fill
          />
        </div>
      </Stack>
    </Link>
  );
}
