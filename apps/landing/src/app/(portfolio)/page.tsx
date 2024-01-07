import AppCopyright from '@/_components/common/app-copyright';
import SectionHeading from '@/_components/common/section-heading';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Logo from '@/_components/icons/logo';
import PolygonBackground from '@/_components/images/polygon-background';
import PolygonBackgroundReversed from '@/_components/images/polygon-background-reversed';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import { getPortfolio } from '@/app/(main-layout)/_api/portfolio';
import { getPortfolioItems } from '@/app/(main-layout)/_api/portfolio-item';
import { getLatestBlogPosts } from '@/app/(main-layout)/blogs.v2/_api/blog-post';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';
import Articles from '@/app/(portfolio)/_components/partials/articles';
import GetInTouchBtn from '@/app/(portfolio)/_components/partials/get-in-touch-btn';
import ScrollDownToSeeMore from '@/app/(portfolio)/_components/partials/scroll-down-to-see-more';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const [portfolioItems] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
    getLatestBlogPosts(),
  ]);

  return (
    <>
      <Row>
        <nav className='absolute md:fixed left-0 top-0 p-4 lg:p-10 flex flex-col justify-between h-screen items-center z-20'>
          <Logo className='bg-new-black text-new-white w-6 h-6' />

          <Stack className='gap-6 lg:gap-4 w-full items-center'>
            <Link href={'tel:09279488654'}>
              <PhoneIcon className='w-[1.4rem] h-[1.4rem] scale-75 md:scale-100' />
            </Link>
            <Link href={'mailto:paolojulian.dev@gmail.com'}>
              <MailIcon className='w-6 h-6 scale-75 md:scale-100' />
            </Link>
            <Link href={'https://www.linkedin.com/in/pipz/'}>
              <LinkedinIcon className='h-5 w-5 scale-75 md:scale-100' />
            </Link>
          </Stack>
        </nav>

        <div className='absolute right-0 top-0'>
          <PolygonBackground />
        </div>

        <main className='relative min-h-screen w-full'>
          <Container className='max-w-screen-2xl mx-auto pt-60 lg:pt-40 relative min-h-screen'>
            <ScrollDownToSeeMore />

            <div className='hidden md:block absolute bottom-0 right-0 p-4 lg:p-8'>
              <GetInTouchBtn />
            </div>

            <Stack className='gap-24 lg:gap-20'>
              <Uppercase
                as='h1'
                className='text-2xl md:text-4xl lg:text-7xl lg:leading-[normal]'
              >
                HELLO, I AM <span className='text-new-highlight'>PAOLO.</span>
                <br />
                A SOFTWARE ENGINEER
                <br />
                <span className='ml-10 md:ml-20'>WITH A FOCUS ON</span>
                <br />
                <span className='text-new-highlight'>FRONT-END</span>
                <br className='lg:hidden' />
                <span className='ml-10 md:ml-20 lg:ml-0'> DEVELOPMENT</span>
              </Uppercase>

              <Row className='justify-end'>
                <div className='md:w-1/2'>
                  <Text className='text-new-highlight text-sm md:text-base lg:text-lg w-56 md:w-64 lg:w-[28rem]'>
                    I built this website as my own{' '}
                    <span className='text-new-white'>personal space</span>,
                    where I express myself through various creations inspired by
                    my experiences and challenges, fostering a learning journey
                    we can embark on together.
                  </Text>
                  <div className='md:hidden'>
                    <GetInTouchBtn />
                  </div>
                </div>
              </Row>
            </Stack>
          </Container>
          <Container className='max-w-screen-2xl mx-auto py-12 md:py-24'>
            <Stack className=''>
              <SectionHeading title='Latest Works' />

              <div className='w-full overflow-y-hidden overflow-x-auto'>
                <div className='flex flex-col w-full'>
                  {portfolioItems.slice(0, 3).map((item, i) => (
                    <div
                      className='border-b border-new-highlight/25 py-10'
                      key={item.name}
                    >
                      <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
                        <span className='hidden md:block flex-1 max-w-[200px] xl:max-w-[300px]'>
                          0{i + 1}
                        </span>
                        <div className='flex flex-col gap-1 flex-1'>
                          <Text
                            as='h4'
                            className='text-xl xl:text-2xl text-new-white'
                          >
                            {item.name}
                          </Text>

                          <div className='text-new-highlight text-xl xl:text-2xl'>
                            {item.tags.map((tag, i) => (
                              <Text className='capitalize' key={`${i}-${tag}`}>
                                {tag}
                              </Text>
                            ))}
                          </div>
                        </div>

                        <div className='relative aspect-[411/250] w-full flex-1'>
                          <div className='absolute bottom-0 left-0 w-full h-[90%] bg-new-highlight/60'></div>
                          <div className='absolute bottom-0 left-0 w-[97.5%] h-[95%] bg-new-highlight'></div>
                          <div className='h-full w-[95%]'>
                            <div className='bg-new-white h-full relative overflow-hidden'>
                              <Image
                                alt={item.name}
                                className='object-cover group-hover:scale-105 duration-200'
                                src={item.image.url}
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Stack>
          </Container>
          <Container className='max-w-screen-2xl mx-auto py-12 lg:py-24'>
            <Stack className='gap-8 lg:gap-20'>
              <SectionHeading title='Tech Stack' />

              <div className='flex flex-col gap-12 md:gap-0 md:flex-row w-full'>
                <div className='flex-1'>
                  <Text className='text-new-highlight text-2xl md:max-w-[332px] xl:max-w-[555px]'>
                    These are the <span className='text-new-white'>tools</span>{' '}
                    I prefer to use as of now. However, my journey is ongoing,
                    and I remain open to learning and exploring new tools in the
                    future. It&lsquo;s important to remember that these are just
                    temporary preferences, and each is just a tool in my
                    creative arsenal.
                  </Text>
                </div>
                <div className='flex-1'>
                  <Stack className='gap-12 lg:gap-20'>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        FRONT-END
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>Next.js</Text>
                        <Text>React.js</Text>
                        <Text>TailwindCSS</Text>
                        <Text>Typescript</Text>
                        <Text>GraphQL</Text>
                        <Text>Testing Library</Text>
                      </div>
                    </Stack>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        BACK-END
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>Node.js</Text>
                        <Text>AWS</Text>
                        <Text>Contentful</Text>
                        <Text>Websocket</Text>
                        <Text>GraphQL</Text>
                      </div>
                    </Stack>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        UI/UX
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>Figma</Text>
                      </div>
                    </Stack>
                  </Stack>
                </div>
              </div>
            </Stack>
          </Container>

          <Container className='max-w-screen-2xl mx-auto py-12 lg:py-24'>
            <Stack className='gap-8 lg:gap-20'>
              <SectionHeading title='Latest Articles' />

              <Articles />
            </Stack>
          </Container>

          <footer className='border-t border-new-highlight pb-28 relative'>
            <Container className='max-w-screen-2xl mx-auto py-12 md:py-24'>
              <div className='flex flex-col lg:flex-row gap-12 lg:gap-0'>
                <div className='flex-1 text-2xl xl:text-4xl'>
                  <div className='max-w-[300px] lg:max-w-[420px] xl:max-w-[500px]'>
                    <Uppercase className='text-new-white'>
                      HAVE QUESTIONS?
                    </Uppercase>
                    <Link href='/contact'>
                      <Uppercase className='lg:ml-4 xl:ml-8 transition-colors text-new-highlight lg:hover:text-new-accent underline underline-offset-8 decoration-dashed'>
                        SEND ME A MESSAGE!
                      </Uppercase>
                    </Link>
                  </div>
                </div>
                <div className='flex-1'>
                  <Stack className='gap-12 lg:gap-20'>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        SOCIALS
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>LinkedIn</Text>
                        <Text>Facebook</Text>
                      </div>
                    </Stack>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        ADDRESS
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>Dagsian, Baguio City</Text>
                        <Text>Philippines</Text>
                        <Text>2600</Text>
                      </div>
                    </Stack>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        CONTACT
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>paolojulian.dev@gmail.com</Text>
                        <Text>(+63) 927 948 8654</Text>
                      </div>
                    </Stack>
                    <Stack className='gap-2'>
                      <Text
                        as='h4'
                        className='text-new-highlight text-2xl font-bold'
                      >
                        SITEMAP
                      </Text>
                      <div className='text-new-white text-2xl leading-tight'>
                        <Text>About</Text>
                        <Text>Articles</Text>
                        <Text>Components</Text>
                        <Text>Contact</Text>
                      </div>
                    </Stack>
                    <div className='text-new-highlight'>
                      <AppCopyright />
                    </div>
                  </Stack>
                </div>
              </div>
            </Container>

            <div className='absolute left-0 bottom-0 hidden lg:block'>
              <PolygonBackgroundReversed />
            </div>
          </footer>
        </main>
      </Row>
    </>
  );
}
