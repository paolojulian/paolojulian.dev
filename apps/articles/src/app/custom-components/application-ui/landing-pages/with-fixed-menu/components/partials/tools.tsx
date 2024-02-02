import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import SectionHeading from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/section-heading';
import Text from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/text';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Tools: FunctionComponent<Props> = () => {
  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading number={4} section='Tools'></SectionHeading>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 py-12 h-full relative'>
          <Text className='text-4xl lg:text-6xl font-medium col-span-1'>
            These are the tools I prefer to use as of now.
          </Text>
          <div className='flex flex-col col-span-2'>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <Uppercase className='flex-1 text-xl font-medium'>
                FRONT-END
              </Uppercase>
              <div className='flex-1 text-lg'>
                <Text>Next.js</Text>
                <Text>React.js</Text>
                <Text>TailwindCSS</Text>
                <Text>Typescript</Text>
                <Text>GraphQL</Text>
              </div>
            </div>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <Uppercase className='flex-1 text-xl font-medium'>
                BACK-END
              </Uppercase>
              <div className='flex-1 text-lg'>
                <Text>Node.js</Text>
                <Text>AWS</Text>
                <Text>Contentful</Text>
                <Text>Websockets</Text>
                <Text>GraphQL</Text>
              </div>
            </div>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <Uppercase className='flex-1 text-xl font-medium'>
                DESIGN
              </Uppercase>
              <div className='flex-1 text-lg'>
                <Text>Figma</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
