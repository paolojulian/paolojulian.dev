import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className='border-t border-white pb-40'>
      <Stack className='max-w-screen-xl mx-auto p-10 gap-20'>
        <Typography className='tracking-[5.76px] text-gray' fontSize={'lg'}>
          CONNECT
        </Typography>

        <div className='grid grid-cols-3'>
          <Stack className='gap-2'>
            <SocialLink name='Home' href={'/'} />
            <SocialLink name='About' href={'/about'} />
            <SocialLink name='Articles' href={'/articles'} />
            <SocialLink name='Apps' href={'/apps'} />
          </Stack>
          <Stack className='gap-2'>
            <SocialLink
              name='Linkedin'
              href={'https://www.linkedin.com/in/pipz/'}
            />
            <SocialLink
              name='Facebook'
              href={'https://www.facebook.com/profile.php?id=100078321445396'}
            />
            <SocialLink
              name='Instagram'
              href={'https://www.instagram.com/pipz.dev/'}
            />
          </Stack>
          <Stack className='gap-10'>
            <ContactItem label='Email' value='paolojulian.personal@gmail.com' />
            <ContactItem label='Phone' value='+639279488654' />
          </Stack>
        </div>
      </Stack>
    </footer>
  );
}

interface SocialLinkProps {
  name: string;
  href: string;
}
function SocialLink({ name, href }: SocialLinkProps) {
  return (
    <Link href={href}>
      <Row className='gap-6 items-center group'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='12'
            viewBox='0 0 11 12'
            fill='none'
            className='text-primary'
          >
            <path
              d='M-4.89749e-07 0.397423L10.9999 0.397422L10.9999 11.6016L-4.89749e-07 0.397423Z'
              fill='currentColor'
            />
          </svg>
        </div>
        <Typography fontSize='xl' fontWeight={'semi-bold'}>
          {name}
        </Typography>
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
      <Typography
        className='text-white capitalize'
        fontFamily='barlow-semi-condensed'
        fontWeight={'medium'}
      >
        {label}
      </Typography>
      <Typography className='text-gray' fontFamily='barlow-semi-condensed'>
        {value}
      </Typography>
    </div>
  );
}
