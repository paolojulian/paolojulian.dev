import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function RightSideBar() {
  return (
    <Stack className='fixed right-10 top-10 bottom-10 justify-between items-end z-30'>
      <Stack className='gap-2 items-end'>
        <Link href='#'>
          <Typography className='text-gray'>ABOUT</Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray'>EXPERIENCE</Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray'>WRITING</Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray'>CONTACT</Typography>
        </Link>
      </Stack>
      <span
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        <Typography className='text-gray rotate-180' variant='body'>
          paolojulian.dev
        </Typography>
      </span>
    </Stack>
  );
}
