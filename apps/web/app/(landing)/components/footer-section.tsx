import { gql } from '@apollo/client';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Portfolio } from '../../../graphql/portfolio.types';

interface Props {
  portfolio: Pick<Portfolio, 'contact'>;
}

export default function FooterSection({ portfolio }: Props) {
  return (
    <section className='border-t border-white pb-40 px-10 xl:px-0' id={'contact'}>
      <Stack className='max-w-screen-lg mx-auto py-10 gap-20'>
        <Typography className='uppercase' variant='body-wide'>
          CONNECT
        </Typography>

        <div className='grid grid-cols-3 gap-4'>
          <Stack>
            <SocialLink name='Home' href={'/'} />
            <SocialLink name='About' href={'/about'} />
            <SocialLink name='Articles' href={'/articles'} />
            <SocialLink name='Apps' href={'/apps'} />
          </Stack>
          <Stack>
            <SocialLink name='Linkedin' href={portfolio.contact.linkedin} />
            <SocialLink name='Facebook' href={portfolio.contact.facebook} />
            <SocialLink name='Instagram' href={portfolio.contact.instagram} />
          </Stack>
          <Stack className='gap-10'>
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
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='12'
            viewBox='0 0 11 12'
            fill='none'
            className='text-secondary'
          >
            <path
              d='M-4.89749e-07 0.397423L10.9999 0.397422L10.9999 11.6016L-4.89749e-07 0.397423Z'
              fill='currentColor'
            />
          </svg>
        </div>
        <div className='relative h-full flex-1 px-2 py-1 overflow-hidden'>
          <Typography variant='heading'>{name}</Typography>
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
      <Typography className='capitalize'>{label}</Typography>
      <Typography className='text-gray'>{value}</Typography>
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
