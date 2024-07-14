import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Image from 'next/image';
import { type AppItemFields } from '../../graphql/use-app-items';

export type AppItemProps = {
  appItem: AppItemFields;
};

export default function AppItem({ appItem }: AppItemProps) {
  const { title, description, banner, link, type } = appItem;

  return (
    <a href={link} className='cursor-pointer'>
      <div className='flex flex-col gap-6 group'>
        {/* Image */}
        <div className='relative aspect-[385/256] w-full bg-white rounded-md border-4 border-gray overflow-hidden'>
          <Image alt={banner.title} fill src={banner.url} />
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-primary/50'></div>
        </div>

        {/* Header */}
        <Stack className='flex-1 justify-center items-start gap-2'>
          <Typography
            className='text-gray-darker uppercase group-hover:text-primary'
            variant='body-wide'
          >
            {type}
          </Typography>
          <Typography
            className='line-clamp-2 text-white group-hover:text-primary duration-500 ease-in-out'
            variant='heading'
          >
            {title}
          </Typography>
        </Stack>

        {/* Description */}
        <Typography
          className='line-clamp-4 text-white group-hover:text-primary duration-500 ease-in-out'
          variant='body'
        >
          {description}
        </Typography>
      </div>
    </a>
  );
}
