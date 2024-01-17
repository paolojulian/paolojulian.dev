import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function RightSideBar() {
  return (
    <Stack className='fixed right-10 top-10 bottom-10 justify-between items-end z-30'>
      <Stack className='gap-1 items-end'>
        <Link href='#'>
          <Typography className='text-gray tracking-[0.24rem]'>
            ABOUT
          </Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray tracking-[0.24rem]'>
            TECH STACK
          </Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray tracking-[0.24rem]'>
            CAREER
          </Typography>
        </Link>
        <Link href='#'>
          <Typography className='text-gray tracking-[0.24rem]'>
            WRITING
          </Typography>
        </Link>
      </Stack>
      <span
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        <Typography className='text-gray rotate-180 tracking-widest'>
          paolojulian.dev
        </Typography>
      </span>
    </Stack>
  );
}
