import AppCopyright from '@/_components/common/app-copyright';
import SectionHeading from '@/_components/common/section-heading';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import Container from '@/_components/layouts/container';
import Stack from '@/_components/layouts/stack';
import MenuProvider from '@/_context/menu-provider/menu-provider';
import Main from '@/app/(portfolio)/_components/partials/main';
import Menu from '@/app/(portfolio)/_components/partials/menu';
import MenuButton from '@/app/(portfolio)/_components/partials/menu-btn/menu-btn';
import {
  careerList,
  historyList,
  interestsList,
} from '@/app/about/page.constants';
import classNames from 'classnames';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const AboutPage: FunctionComponent<Props> = () => {
  return (
    <div>
      <MenuProvider>
        <Main>
          <Container className='max-w-screen-2xl w-full mx-auto bg-new-black py-8'>
            <SectionHeading title='paolojulian.dev - about' />

            <div className='py-10 lg:py-20 flex flex-col gap-10'>
              <h1 className='text-7xl md:text-9xl lg:text-8xl text-new-white leading-tight md:leading-tight text-left lg:text-center'>
                <Uppercase as='span' className='block md:inline'>
                  <span className='text-new-highlight'>K</span>EEP{' '}
                </Uppercase>
                <Uppercase as='span' className='block md:inline'>
                  <span className='text-new-highlight'>I</span>T{' '}
                </Uppercase>
                <Uppercase as='span' className='block md:inline'>
                  <span className='text-new-highlight'>S</span>IMPLE{' '}
                </Uppercase>
                <Uppercase as='span' className='block md:inline'>
                  <span className='text-new-highlight'>S</span>TUPID{' '}
                </Uppercase>
              </h1>

              <Text
                className={classNames(
                  'ml-auto lg:ml-[50%] text-new-highlight',
                  'max-w-[14.25rem] md:max-w-[31rem]',
                  'text-left text-sm md:text-lg'
                )}
              >
                {`
                I embrace the “KISS” principle not only in programming but in my
                everyday life as well. It's about simplicity—minimalist style,
                fewer possessions, and prioritizing quality over quantity. I aim
                to free up mental space, allowing me to focus on the bigger
                picture, both in work and life.
                `}
              </Text>
            </div>
          </Container>

          <Container className='max-w-screen-2xl w-full mx-auto bg-new-black py-8'>
            <SectionHeading title='HISTORY' />

            <div className='flex flex-col lg:flex-row py-8 gap-8'>
              {/* Image */}
              <div className='text-center w-full lg:w-[30%] xl:w-[35%]'>
                <div className='aspect-[393/95] lg:aspect-[488/735] relative w-full'>
                  <Image
                    src='/assets/about/my-view.png'
                    className='object-cover object-[50%_55%] lg:object-center'
                    alt='My View'
                    priority
                    fill
                  />
                </div>
                <Text className='text-new-highlight mt-4'>
                  My Everyday View
                </Text>
              </div>

              <Stack className='gap-8 flex-1'>
                <Text as='h2' className='text-new-white text-xl lg:text-4xl'>
                  Allow me to share my journey, spanning from my early childhood
                  years to the start of my Software Engineer journey.
                </Text>

                <hr className='border-t border-new-highlight/50' />

                <ul className='flex flex-col gap-8'>
                  {historyList.map(({ title, description }, i) => (
                    <li
                      className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
                      key={`${i}-${title}`}
                    >
                      <Text as='h3' className='text-new-white text-lg'>
                        {title}
                      </Text>
                      <Text className='text-new-highlightLighter'>
                        {description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Stack>
            </div>
          </Container>

          <Container className='max-w-screen-2xl w-full mx-auto bg-new-black py-8'>
            <SectionHeading title='CAREER' />

            <div className='flex flex-col lg:flex-row py-8 gap-8'>
              {/* Image */}
              <div className='text-center mx-auto lg:mx-0 w-[30%] xl:w-[35%]'>
                <div className='aspect-[439/499] relative w-full'>
                  <Image
                    src='/assets/about/its-me.png'
                    className='object-cover object-[50%_55%] lg:object-center'
                    alt='My View'
                    fill
                  />
                </div>
                <Text className='text-new-highlight mt-4'>It&lsquo;s me!</Text>
              </div>

              <Stack className='gap-8 flex-1'>
                <Text as='h2' className='text-new-white text-xl lg:text-4xl'>
                  We must learn to accept the fact that all codes are garbage,
                  Important part is we produce less garbage code.
                </Text>

                <hr className='border-t border-new-highlight/50' />

                <ul className='flex flex-col gap-8'>
                  {careerList.map(({ companyName, year, description }, i) => (
                    <li
                      className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
                      key={`${i}-${companyName}`}
                    >
                      <div>
                        <Text as='h3' className='text-new-white text-lg'>
                          {companyName}
                        </Text>
                        <Text className='text-new-highlight text-base'>
                          {year}
                        </Text>
                      </div>
                      <Text className='text-new-highlightLighter'>
                        {description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Stack>
            </div>
          </Container>

          <Container className='max-w-screen-2xl w-full mx-auto bg-new-black py-8'>
            <SectionHeading title='Interests' />

            <div className='flex flex-col lg:flex-row py-8 gap-8'>
              {/* Image */}
              <div className='text-center mx-auto lg:mx-0 w-[30%] xl:w-[35%]'>
                <div className='aspect-square relative w-full'>
                  <Image
                    src='/assets/about/guitar.png'
                    className='object-cover object-[50%_55%] lg:object-center mix-blend-lighten'
                    alt='My View'
                    fill
                  />
                </div>
              </div>

              <Stack className='gap-8 flex-1'>
                <Text as='h2' className='text-new-white text-xl lg:text-4xl'>
                  {`
                  I'm like a Jack of all trades. I want to excel in every field.
                  I don't think it's bad; it just shows how passionate I am at
                  learning things.
                  `}
                </Text>

                <hr className='border-t border-new-highlight/50' />

                <ul className='flex flex-col gap-8'>
                  {interestsList.map(({ title, description }, i) => (
                    <li
                      className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
                      key={`${i}-${title}`}
                    >
                      <Text as='h3' className='text-new-white text-lg'>
                        {title}
                      </Text>
                      <Text className='text-new-highlightLighter'>
                        {description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Stack>
            </div>
          </Container>

          <footer className='py-20 mb-40 text-center'>
            <hr className='border-t border-new-highlight' />
            <div className='text-new-highlight mt-10'>
              <AppCopyright />
            </div>
          </footer>
        </Main>
        <Menu />
        <MenuButton />
      </MenuProvider>
    </div>
  );
};

export default AboutPage;
