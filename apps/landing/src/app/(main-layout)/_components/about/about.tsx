import EnterAnimation from '@/_components/animations/enter-animation';
import SectionHeading from '@/_components/common/section-heading';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import Container from '@/_components/layouts/container';
import { getPortfolio } from '@/app/(main-layout)/_api/portfolio';
import { FunctionComponent } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface Props {
  // no props
}

const About: FunctionComponent<Props> = async () => {
  const portfolio = await getPortfolio();

  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading RightContent='02' title='About'></SectionHeading>
        <EnterAnimation>
          <div className='flex flex-col md:flex-row gap-12 lg:gap-40 py-12 h-full relative lg:items-center'>
            <div className='flex flex-col gap-2 lg:gap-8 lg:items-center'>
              <div className='w-[100px] lg:w-[300px] aspect-square border border-gray-300 flex justify-center items-center text-5xl lg:text-9xl'>
                6+
              </div>
              <Uppercase className='text-base lg:text-xl' type='wide'>
                Years of experience
              </Uppercase>
            </div>
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <Text className='text-3xl lg:text-5xl tracking-wide leading-tight text-gray-700'>
                    {children}
                  </Text>
                ),
                strong: ({ children }) => (
                  <Text
                    as='strong'
                    className='text-primary-400 font-medium leading-tight'
                  >
                    {children}
                  </Text>
                ),
              }}
              className='whitespace-normal'
            >
              {portfolio.about}
            </ReactMarkdown>
          </div>
        </EnterAnimation>
      </Container>
    </div>
  );
};

export default About;
