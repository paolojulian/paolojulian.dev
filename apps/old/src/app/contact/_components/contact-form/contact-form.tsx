'use client';
import CTAButton from '@/_components/form/cta-button';
import FormControl from '@/_components/form/form-control';
import TextInput from '@/_components/form/text-input';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import useContactForm from '@/_hooks/use-contact-form';
import { contactFormSchema } from '@/app/(main-layout)/portfolio.backup/_utils/schemas';
import { DATA_TEST } from '@/app/contact/_components/contact-form/contact-form.constants';
import { Formik } from 'formik';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface Props {
  // No props
}

const ContactForm: FunctionComponent<Props> = () => {
  const { isLoading, handleSubmit } = useContactForm();

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSuccess) {
      timeout = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isSuccess]);

  return (
    <Formik
      onSubmit={(form, actions) => {
        handleSubmit(form).then(() => {
          setIsSuccess(true);
          actions.setSubmitting(false);
          actions.resetForm();
        });
      }}
      initialValues={{
        name: '',
        email: '',
        text: '',
      }}
      validationSchema={contactFormSchema}
    >
      {({ values, touched, errors, handleSubmit, setFieldValue }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className='relative'
        >
          <Stack className='w-full space-y-12'>
            <Stack className='space-y-4'>
              <FormControl
                error={touched.name && errors.name ? errors.name : undefined}
              >
                <TextInput
                  id='contact-name'
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  autoComplete='name'
                  name='name'
                  label='Your name'
                  placeholder='John Doe'
                  value={values.name}
                  isError={!!touched.name && !!errors.name}
                  testId={DATA_TEST.name}
                />
              </FormControl>
              <FormControl
                error={touched.email && errors.email ? errors.email : undefined}
              >
                <TextInput
                  id='contact-email'
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  autoComplete='email'
                  name='email'
                  label='Your email'
                  placeholder='johndoe@email.com'
                  type='email'
                  value={values.email}
                  isError={!!touched.email && !!errors.email}
                  testId={DATA_TEST.email}
                />
              </FormControl>

              <FormControl
                error={touched.text && errors.text ? errors.text : undefined}
              >
                <TextInput
                  id='contact-message'
                  onChange={(e) => setFieldValue('text', e.target.value)}
                  name='message'
                  label='Tell me about it'
                  placeholder='I want to hire you!'
                  value={values.text}
                  isError={!!touched.text && !!errors.text}
                  testId={DATA_TEST.message}
                />
              </FormControl>
            </Stack>

            <>
              <div className='w-full md:hidden'>
                <CTAButton
                  block={true}
                  type='submit'
                  size='lg'
                  isLoading={isLoading}
                  variant={isSuccess ? 'success' : 'default'}
                  loadingText='Sending...'
                  data-testid={DATA_TEST.submitBtnMobile}
                >
                  <Row className='items-center gap-3 pr-10 pl-14'>
                    <span>SEND</span>
                    <RightArrowIcon />
                  </Row>
                </CTAButton>
              </div>
              <div className='hidden md:block'>
                <CTAButton
                  block={false}
                  type='submit'
                  size='lg'
                  isLoading={isLoading}
                  variant={isSuccess ? 'success' : 'default'}
                  loadingText='Sending...'
                  data-testid={DATA_TEST.submitBtn}
                >
                  <Row className='items-center gap-3 pr-10 pl-14'>
                    <span>SEND</span>
                    <RightArrowIcon />
                  </Row>
                </CTAButton>
              </div>
            </>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
