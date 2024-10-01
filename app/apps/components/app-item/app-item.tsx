import Image from 'next/image';
import { type AppItemFields } from '../../graphql/use-app-items';
import { PTypography, Stack } from '@paolojulian.dev/design-system';
import Link from 'next/link';

export type AppItemProps = {
  appItem: AppItemFields;
};

export default function AppItem({ appItem }: AppItemProps) {
  const { title, description, banner, link, type } = appItem;

  return (
    <Link href={link} className='cursor-pointer' target='_blank'>
      <div className='flex flex-col gap-6 group'>
        {/* Image */}
        <div className='relative aspect-[385/256] w-full rounded-md bg-white overflow-hidden'>
          <Image alt={banner.title} fill src={banner.url} />
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-primary/50'></div>
        </div>

        {/* Header */}
        <Stack className='flex-1 justify-center items-start gap-2'>
          <PTypography
            className='text-gray-darker uppercase group-hover:text-primary'
            variant='body-wide'
          >
            {type}
          </PTypography>
          <PTypography
            className='line-clamp-2 text-white group-hover:text-primary duration-500 ease-in-out'
            variant='heading'
          >
            {title}
          </PTypography>
        </Stack>

        {/* Description */}
        <PTypography
          className='line-clamp-4 text-white group-hover:text-primary duration-500 ease-in-out'
          variant='body'
        >
          {description}
        </PTypography>
      </div>
    </Link>
  );
}
