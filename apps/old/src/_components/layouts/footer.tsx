'use client';
import AppCopyright from '@/_components/common/app-copyright';
import ContactForm from '@/_components/form/contact-form';
import Stack from '@/_components/layouts/stack';
import useContactForm from '@/_hooks/use-contact-form';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  // No Props
}

const ContactItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Stack className='gap-1 text-base text-slate-400'>
      <p className='font-medium text-cyan-300/70'>{title}</p>
      <Stack>{children}</Stack>
    </Stack>
  );
};

const FooterSection: FunctionComponent<Props> = () => {
  const {
    isLoading: isSubmittingContactForm,
    handleSubmit,
    isFinished,
  } = useContactForm();

  return (
    <section
      id={'#contact'}
      className='md:flex md:flex-row flex-1 w-full bg-slate-900 z-50 relative overflow-hidden'
    >
      <div className='flex flex-col md:flex-row py-12 lg:px-12 gap-2 md:gap-12 w-full mx-auto max-w-screen-2xl relative'>
        {/* Contact Form */}
        <Stack className='gap-12 p-8 md:p-12 w-full lg:min-w-[500px] md:max-w-[500px]'>
          <h4 className='text-6xl font-medium'>
            <div className='text-slate-400'>Get in touch.</div>
            <div className='text-slate-200'>{`Let's work together.`}</div>
          </h4>

          <ContactForm
            isLoading={isSubmittingContactForm}
            isFinished={isFinished}
            onSubmit={handleSubmit}
          />
        </Stack>

        <Stack className='px-8 md:px-12 md:p-12 gap-[8px] flex-1 justify-end relative'>
          <div className='hidden font-black lg:block text-[200px] leading-[200px] text-cyan-300/5 absolute left-1/2 -translate-x-1/2 top-[48px] whitespace-nowrap'>
            PAOLO JULIAN
          </div>
          <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 py-[40px] text-lg'>
            <ContactItem title='Availability'>
              <p>Monday - Friday</p>
              <p>7am - 6pm</p>
              <p>GMT +8</p>
            </ContactItem>
            <ContactItem title='Address'>
              <p>Philippines</p>
              <p>Baguio City</p>
              <p>2600</p>
            </ContactItem>
            <ContactItem title='Contact'>
              <Link href='https://www.linkedin.com/in/pipz/'>linkedin</Link>
              <Link href='mailto:paolojulian.dev@gmail.com'>
                paolojulian.dev@gmail.com
              </Link>
            </ContactItem>
          </div>
          <div className='border-t border-gray-400 py-[24px] text-slate-500 w-full'>
            <AppCopyright />
          </div>
        </Stack>
      </div>
    </section>
  );
};

export default FooterSection;
