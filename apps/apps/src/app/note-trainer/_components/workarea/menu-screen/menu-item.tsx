import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imageURL: string;
  title: string;
  href: string;
}

export default function MenuItem({ imageURL, href, title }: Props) {
  return (
    <Link href={href}>
      <Stack
        className={cn(
          'h-[150px] w-full rounded-lg relative items-center justify-end py-4 overflow-hidden',
          'duration-500 active:bg-primary/20 group'
        )}
      >
        <Image
          alt={title}
          src={imageURL}
          className='-z-10 duration-500 group-active:scale-105'
          fill
        />
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent -z-10'></div>
        <Typography variant='body'>{title}</Typography>
      </Stack>
    </Link>
  );
}
