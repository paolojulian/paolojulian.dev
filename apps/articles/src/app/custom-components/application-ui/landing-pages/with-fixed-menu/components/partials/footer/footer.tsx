import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import Text from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/text';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className='max-w-screen-2xl mx-auto w-full mb-20 border-t border-gray-200'>
      <Container className='py-12 text-gray-700'>
        <div className='text-center flex flex-col items-center'>
          <Text className='text-5xl lg:text-7xl leading-normal lg:leading-normal'>
            Get in Touch
          </Text>
          <Link
            href='/contact'
            className='text-base font-sans text-primary-400 font-semibold group'
          >
            <span className='flex flex-row items-center gap-4 w-fit'>
              <RightArrowIcon className='group-hover:translate-x-2 transition-transform' />
              <Uppercase>INTRODUCE YOURSELF</Uppercase>
              <LeftArrowIcon className='group-hover:-translate-x-2 transition-transform' />
            </span>
          </Link>
        </div>
        {/* <div className='grid grid-cols-3'>
          <div className='flex flex-col'>
            <Link
              href='/contact'
              className='py-5 px-6 border border-gray-400 hover:border-primary-400 hover:bg-red-50 transition-colors w-fit font-medium'
              role='button'
            >
              GET IN TOUCH
            </Link>
          </div>
          <div className='flex flex-col'>
            <p>Linkedin</p>
            <p>Facebook</p>
            <p>paolojulian.personal@gmail.com</p>
            <p>(+63) 927 948 8654</p>
          </div>
          <div className='text-gray-500'>
            <AppCopyright />
          </div>
        </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
