import SectionHeading from '@/_components/common/section-heading';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import HeroHeading from './hero.heading';

interface Props {
  // no props
}

const Hero: FunctionComponent<Props> = () => {
  return (
    <div className='max-w-screen-2xl mx-auto lg:min-h-screen w-full'>
      <Container className='py-4 lg:py-12 h-full relative'>
        <SectionHeading
          title='PaoloJulian.dev'
          RightContent={
            <div className='flex-row gap-5 items-end text-primary-400 hidden lg:flex'>
              <Link href='https://www.linkedin.com/in/pipz/'>
                <LinkedinIcon className='w-[1.35rem] h-[1.35rem]' />
              </Link>
              <Link href='tel:09279488654'>
                <PhoneIcon className='w-[1.35rem] h-[1.35rem]' />
              </Link>
              <Link href='mailto:paolojulian.dev@gmail.com'>
                <MailIcon />
              </Link>
            </div>
          }
        />

        {/* Content */}
        <div className='py-10 flex flex-col justify-center w-full h-full lg:h-auto'>
          <Row className='relative w-full justify-between lg:border-b border-red-300'>
            <div className='py-10'>
              <HeroHeading />
            </div>
            <div className='flex flex-1 flex-row justify-end absolute inset-0 lg:relative pointer-events-none -z-10'>
              <div className='aspect-[983/1119] h-[115%] max-w-full absolute right-0 bottom-0'>
                <Image
                  alt='Profile Image Blurred'
                  className='object-cover'
                  draggable={false}
                  fill
                  src='/assets/background-blurred.png'
                />
              </div>
              <div className='hidden lg:block aspect-[858/1007] h-full w-auto relative self-stretch'>
                <Image
                  alt='Profile Image'
                  draggable={false}
                  fill
                  priority
                  src='/assets/portfolio/profile-image.v3.png'
                />
                <div className='absolute right-0 bottom-0 w-12 h-12 bg-red-400'></div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
