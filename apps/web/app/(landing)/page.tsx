import Container from '@repo/ui/components/container';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Container className='min-h-screen'>
        <Stack className='gap-2 min-h-screen pb-24' shouldCenterContents>
          <Typography className='text-gray tracking-[0.24rem]' fontSize={'lg'}>
            PAOLO JULIAN
          </Typography>
          <Stack shouldCenterContents>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              KEEPING
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              THINGS
            </Typography>
            <Typography
              className='text-secondary'
              fontSize={'heading-1'}
              fontWeight={'bold'}
            >
              SIMPLE
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              SINCE
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              2017
            </Typography>
          </Stack>
        </Stack>
      </Container>

      <div className='fixed bottom-10 inset-x-0 mx-auto w-fit'>
        <button className='bg-white aspect-square h-20 rounded-full hover:scale-110 transition-transform duration-500'></button>
      </div>

      <Stack className='fixed left-10 top-10 bottom-10 justify-between items-center'>
        <button className='w-10 aspect-square rounded-full bg-primary'></button>
        <Stack className='gap-4'>
          <Link href='#'>
            <button className='w-6 aspect-square rounded-full bg-primary'></button>
          </Link>
          <Link href='#'>
            <button className='w-6 aspect-square rounded-full bg-primary'></button>
          </Link>
          <Link href='#'>
            <button className='w-6 aspect-square rounded-full bg-primary'></button>
          </Link>
        </Stack>
      </Stack>

      <Stack className='fixed right-10 top-10 bottom-10 justify-between items-end'>
        <Stack className='gap-1 items-end'>
          <Link href='#'>
            <Typography className='text-gray tracking-[0.24rem]'>
              ABOUT
            </Typography>
          </Link>
          <Link href='#'>
            <Typography className='text-gray tracking-[0.24rem]'>
              TOOLS
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
    </>
  );
}
