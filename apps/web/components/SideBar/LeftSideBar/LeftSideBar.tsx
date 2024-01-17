import Stack from '@repo/ui/components/stack';
import LinkedInIcon from '@repo/ui/icons/linkedin-icon';
import MailIcon from '@repo/ui/icons/mail-icon';
import PhoneIcon from '@repo/ui/icons/phone-icon';
import Image from 'next/image';
import Link from 'next/link';

export default function LeftSideBar() {
  return (
    <Stack className='fixed left-10 top-10 bottom-10 justify-between items-center z-30'>
      <Link className='w-8 2xl:w-10 aspect-square relative' href='/'>
        <Image alt='Logo' src='/logo.png' fill quality={100} />
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
  );
}
