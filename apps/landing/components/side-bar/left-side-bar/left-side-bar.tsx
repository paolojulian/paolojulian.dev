import Stack from '@repo/ui/components/stack';
import LinkedInIcon from '@repo/ui/icons/linkedin-icon';
import MailIcon from '@repo/ui/icons/mail-icon';
import PhoneIcon from '@repo/ui/icons/phone-icon';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Portfolio } from '../../../graphql/portfolio.types';

interface Props {
  portfolio: Pick<Portfolio, 'contact'>;
}

export default function LeftSideBar({ portfolio }: Props) {
  return (
    <Stack className='fixed left-4 md:left-10 top-6 md:top-10 bottom-6 md:bottom-10 justify-between items-center z-30'>
      <Link className='w-8 2xl:w-10 aspect-square relative' href='/'>
        <Image alt='Logo' src='/logo.png' fill quality={100} />
      </Link>
      <Stack className='gap-8 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'>
        <SideBarLinkIcon
          href={portfolio.contact.linkedin}
          Icon={
            <LinkedInIcon className='w-[1.2rem] h-[1.2rem] group-hover:text-primary duration-500 ease-in-out group-hover:scale-125' />
          }
        />
        <SideBarLinkIcon
          href={`mailto:${portfolio.contact.email}`}
          Icon={
            <MailIcon className='w-5 h-5 group-hover:text-primary duration-500 ease-in-out group-hover:scale-125' />
          }
        />
        <SideBarLinkIcon
          href={`tel:${portfolio.contact.mobile}`}
          Icon={
            <PhoneIcon className='w-5 h-5 group-hover:text-primary duration-500 ease-in-out group-hover:scale-125' />
          }
        />
      </Stack>
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
