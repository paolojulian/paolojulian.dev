import Container from '@repo/ui/components/container';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import LinkedInIcon from '@repo/ui/icons/linkedin-icon';
import MailIcon from '@repo/ui/icons/mail-icon';
import PhoneIcon from '@repo/ui/icons/phone-icon';
import Image from 'next/image';
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
        <button className='bg-white aspect-square h-16 rounded-full hover:scale-110 transition-transform duration-500'></button>
      </div>

      <Stack className='fixed left-10 top-10 bottom-10 justify-between items-center'>
        <Link className='w-8 2xl:w-10 aspect-square relative' href='/'>
          <Image alt='Logo' src='/logo.png' fill quality={100}/>
        </Link>
        <Stack className='gap-8'>
          <Link href='#'>
            <LinkedInIcon className='w-[1.2rem] h-[1.2rem]' />
          </Link>
          <Link href='#'>
            <MailIcon className='w-5 h-5' />
          </Link>
          <Link href='#'>
            <PhoneIcon className='w-5 h-5' />
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
