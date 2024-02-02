import AppCopyright from '@/_components/common/app-copyright';
import SectionHeading from '@/_components/common/section-heading';
import Uppercase from '@/_components/common/typography/uppercase';
import Container from '@/_components/layouts/container';
import Stack from '@/_components/layouts/stack';
import MenuProvider from '@/_context/menu-provider';
import Main from '@/app/(portfolio)/_components/partials/main';
import Menu from '@/app/(portfolio)/_components/partials/menu';
import MenuButton from '@/app/(portfolio)/_components/partials/menu-btn/menu-btn';
import ContactForm from '@/app/contact/_components/contact-form';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const ContactPage: FunctionComponent<Props> = () => {
  return (
    <>
      <MenuProvider>
        <Main>
          <div className='font-sans'>
            <Stack className='min-h-screen'>
              <Container className='mx-auto w-full max-w-screen-2xl pt-6 lg:pt-12'>
                <SectionHeading title='PaoloJulian.dev - Contact' />
                <div className='flex flex-col lg:flex-row py-16 md:py-32 gap-16 2xl:gap-32 justify-between lg:items-center w-full'>
                  {/* Heading */}
                  <Stack className='gap-6 md:gap-16'>
                    <Uppercase as='div'>
                      <Stack className='text-4xl md:text-7xl font-medium'>
                        <div className='text-new-highlight'>GET IN TOUCH</div>
                        <div className='text-new-white'>
                          LET&lsquo;S WORK
                          <br />
                          TOGETHER.
                        </div>
                      </Stack>
                    </Uppercase>

                    <div className='flex flex-row flex-wrap text-new-white gap-6 md:gap-14'>
                      <Stack className='flex-1 w-[300px]'>
                        <p className='mb-1 text-new-highlight'>Contact</p>
                        <p>paolovincentarch@gmail.com</p>
                        <p>(+63)9279488654</p>
                      </Stack>
                      <Stack className='flex-1 w-[300px]'>
                        <p className='mb-1 text-new-highlight'>Address</p>
                        <p>Baguio City, Philippines</p>
                        <p>2600</p>
                      </Stack>
                    </div>
                    <div className='flex flex-row flex-wrap text-new-white'>
                      <Stack>
                        <p className='mb-1 text-new-highlight'>Socials</p>
                        <Link href='https://www.linkedin.com/in/pipz/'>
                          Linkedin
                        </Link>
                      </Stack>
                    </div>
                  </Stack>

                  <Stack className='flex-1 gap-6 md:gap-12 justify-end max-w-2xl md:min-w-[450px]'>
                    <h3 className='text-4xl text-new-highlight font-medium'>
                      Tell me about your project
                    </h3>
                    <ContactForm />
                  </Stack>
                </div>
              </Container>
            </Stack>
          </div>
          <footer className='border-t border-new-highlight w-full py-8 mb-40 text-new-highlight text-center'>
            <AppCopyright />
          </footer>
        </Main>
        <Menu />
        <MenuButton />
      </MenuProvider>
    </>
  );
};

export default ContactPage;
