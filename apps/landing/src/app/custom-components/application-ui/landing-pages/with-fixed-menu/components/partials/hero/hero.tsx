import LinkedinIcon from '@/_components/icons/linkedin-icon';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';
import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Hero: FunctionComponent<Props> = () => {
  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen w-full'>
      <Container className='px-12 py-12 h-full'>
        {/* <SectionHeading section='PAOLOJULIAN.DEV'></SectionHeading> */}
        <div className='border-b-2 border-slate-500 text-slate-500 p-2 flex flex-row items-end justify-between'>
          <Uppercase as='h2' type='wide'>
            paolojulian.dev
          </Uppercase>
          <div className='flex flex-row gap-4'>
            <Link href='https://www.linkedin.com/in/pipz/'>
              <LinkedinIcon />
            </Link>
            <Link href='tel:09279488654'>
              <PhoneIcon />
            </Link>
            <Link href='mailto:paolojulian.dev@gmail.com'>
              <MailIcon />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-5 pt-24 h-full relative z-10'>
          <div className='gap-5 flex flex-col flex-1 justify-center'>
            <h1
              className={[
                'flex flex-col text-7xl md:text-9xl lg:text-8xl font-medium text-slate-700 tracking-widest',
                'font-lora',
              ].join(' ')}
            >
              <span>
                <span className='text-primary-400'>K</span>
                EEP
              </span>
              <span>
                <span className='text-primary-400'>I</span>T
              </span>
              <span>
                <span className='text-primary-400'>S</span>
                IMPLE
              </span>
              <span>
                <span className='text-primary-400'>S</span>
                TUPID
              </span>
            </h1>
            <div className='flex flex-col md:flex-row md:gap-8 text-sm font-medium text-gray-400'>
              <Uppercase type='widest'>PAOLO JULIAN</Uppercase>
              <div className='hidden md:block w-1 h-full bg-red-400'></div>
              <div className='block md:hidden w-full h-[1px] bg-red-400'></div>
              <Uppercase type='widest'>SOFTWARE ENGINEER</Uppercase>
            </div>
          </div>
          {/* <ScrollToExplore /> */}
          <div className='hidden lg:flex absolute inset-0 flex-row justify-end items-end -z-10'>
            <div className='aspect-[858/1007] h-[90%] relative'>
              <Image
                src='/assets/portfolio/profile-image.v3.png'
                alt='Profile Image'
                fill
              />
              <div className='absolute right-0 bottom-0 w-12 h-12 bg-red-400'></div>
            </div>
          </div>
          <div className='absolute inset-0 flex flex-row justify-end -z-10'>
            <div className='aspect-[983/1119] h-full max-w-full relative'>
              <Image
                className='object-cover'
                src='/assets/background-blurred.png'
                alt='Profile Image Blurred'
                fill
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
