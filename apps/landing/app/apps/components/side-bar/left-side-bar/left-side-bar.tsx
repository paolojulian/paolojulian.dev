import Stack from '@repo/ui/components/stack';
import LinkedInIcon from '@repo/ui/icons/linkedin-icon';
import MailIcon from '@repo/ui/icons/mail-icon';
import PhoneIcon from '@repo/ui/icons/phone-icon';
import links from '@repo/ui/utils/links';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function LeftSideBar() {
  return (
    <Stack className='fixed left-4 md:left-10 top-6 md:top-10 bottom-6 md:bottom-10 justify-between items-center z-30'>
      <a className='w-8 2xl:w-10 aspect-square relative' href={links.base}>
        <Image alt='Logo' src='/logo.png' fill quality={100} />
      </a>
    </Stack>
  );
}

function SideBarLinkIcon({ Icon, href }: { Icon: ReactElement; href: string }) {
  return (
    <Link
      href={href}
      className='text-white hover:text-primary group duration-500 ease-in-out'
      target='_blank'
    >
      {Icon}
    </Link>
  );
}
