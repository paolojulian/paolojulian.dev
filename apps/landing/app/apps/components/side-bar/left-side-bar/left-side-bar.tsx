import { Stack } from '@paolojulian.dev/design-system';
import links from '@repo/ui/utils/links';
import Image from 'next/image';

export default function LeftSideBar() {
  return (
    <Stack className='fixed left-4 md:left-10 top-6 md:top-10 bottom-6 md:bottom-10 justify-between items-center z-30'>
      <a className='w-8 2xl:w-10 aspect-square relative' href={links.base}>
        <Image alt='Logo' src='/logo.png' fill quality={100} />
      </a>
    </Stack>
  );
}
