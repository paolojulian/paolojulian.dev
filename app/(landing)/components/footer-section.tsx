import { gql } from '@apollo/client';
import Link from 'next/link';
import { Portfolio } from '../../../graphql/portfolio.types';
import { PTypography, Row, Stack } from '@paolojulian.dev/design-system';
import { TriangleListIcon } from '@paolojulian.dev/design-system/icons';
import { Routes } from '../../utils/constants';

interface Props {
  portfolio: Pick<Portfolio, 'contact'>;
}

export default function FooterSection({ portfolio }: Props) {
  return (
    <section
      className='border-t border-white pb-40 px-4 md:px-10 xl:px-0'
      id={'contact'}
    >
      <Stack className='max-w-screen-lg mx-auto py-10 gap-20'>
        <PTypography className='uppercase' variant='body-wide'>
          CONNECT
        </PTypography>

        <div className='flex flex-col-reverse md:flex-none md:grid grid-cols-3 gap-10 md:gap-4'>
          <Stack>
            <SocialLink name='Home' href={Routes.Home} />
            <SocialLink name='About' href={Routes.About} />
            <SocialLink
              name='Articles'
              href={'https://v1.paolojulian.dev/blogs'}
            />
            <SocialLink name='Apps' href={Routes.Apps} />
            <SocialLink name='Contact' href={Routes.Contact} />
          </Stack>
          <Stack>
            <SocialLink name='Linkedin' href={portfolio.contact.linkedin} />
            <SocialLink name='Facebook' href={portfolio.contact.facebook} />
            <SocialLink name='Instagram' href={portfolio.contact.instagram} />
          </Stack>
          <Stack className='gap-6 md:gap-10'>
            <ContactItem label='Email' value={portfolio.contact.email} />
            <ContactItem label='Phone' value={portfolio.contact.mobile} />
          </Stack>
        </div>
      </Stack>
    </section>
  );
}

interface SocialLinkProps {
  name: string;
  href: string;
}
function SocialLink({ name, href }: SocialLinkProps) {
  return (
    <Link href={href} target='_blank'>
      <Row className='gap-4 items-center group'>
        <TriangleListIcon />
        <div className='relative h-full flex-1 px-2 py-1 overflow-hidden'>
          <PTypography variant='heading'>{name}</PTypography>
          <div className='-z-10 absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full h-full w-full group-hover:translate-x-0 duration-500 bg-primary'></div>
        </div>
      </Row>
    </Link>
  );
}

interface ContactItemProps {
  label: string;
  value: string;
}
function ContactItem({ label, value }: ContactItemProps) {
  return (
    <div>
      <PTypography className='capitalize'>{label}</PTypography>
      <PTypography className='text-gray'>{value}</PTypography>
    </div>
  );
}

FooterSection.fragments = {
  portfolio: gql`
    fragment FooterFragment on Portfolio {
      contact {
        linkedin
        facebook
        instagram
        email
        mobile
      }
    }
  `,
};
