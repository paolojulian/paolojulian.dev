import EnterAnimation from '@/_components/animations/enter-animation';
import AppCopyright from '@/_components/common/app-copyright';
import Text from '@/_components/common/typography/text';
import Container from '@/_components/layouts/container';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className='max-w-screen-2xl mx-auto w-full mb-20 border-t border-gray-200'>
      <Container className='py-12 text-gray-700'>
        <div className='flex flex-col gap-20'>
          <EnterAnimation>
            <Text className='text-5xl lg:text-7xl leading-[normal] lg:leading-[normal] xl:max-w-[80%]'>
              {'Get in touch with me. '}
              <Link
                className='underline underline-offset-8 decoration-4 decoration-dashed text-gray-400 lg:hover:text-red-400 transition-colors'
                href='/contact'
              >
                Tell me more about what you need.
              </Link>
            </Text>
          </EnterAnimation>

          <div className='text-gray-400'>
            <AppCopyright />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
