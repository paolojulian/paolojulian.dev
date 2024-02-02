import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import SectionHeading from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/section-heading';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import ScrollToExplore from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/hero/hero.scroll-to-explore';

interface Props {
  // no props
}

const Hero: FunctionComponent<Props> = () => {
  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen w-full'>
      <Container className='px-12 py-12 h-full'>
        <SectionHeading section='PAOLOJULIAN.DEV'></SectionHeading>
        <div className='flex flex-col gap-5 pt-24 h-full relative'>
          <div className='gap-5 flex flex-col flex-1'>
            <h1
              className={[
                'flex flex-col text-8xl font-medium text-slate-800',
                'font-sans',
              ].join(' ')}
            >
              
            </h1>
            <div className='flex flex-row gap-8 text-sm font-medium tracking-[0.575rem] text-gray-400'>
              <p>PAOLO JULIAN</p>
              <div className='w-1 h-full bg-red-400'></div>
              <p>SOFTWARE ENGINEER</p>
            </div>
          </div>
          <ScrollToExplore />
          <div className='absolute inset-0 flex flex-row justify-end'>
            <div className='aspect-[858/1007] h-full relative'>
              <Image
                src='/assets/portfolio/profile-image.v3.png'
                alt='Profile Image'
                fill
              />
              <div className='absolute right-0 bottom-0 w-12 h-12 bg-red-400'></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
