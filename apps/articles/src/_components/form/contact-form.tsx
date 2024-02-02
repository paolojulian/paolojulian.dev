'use client';
import CTAButton from '@/_components/form/cta-button';
import Stack from '@/_components/layouts/stack';
import { IContactForm } from '@/app/(main-layout)/portfolio.backup/_forms';
import { contactFormSchema } from '@/app/(main-layout)/portfolio.backup/_utils/schemas';
import { Formik } from 'formik';
import { FunctionComponent, useState } from 'react';
import FormControl from './form-control';
import TextInput from './text-input';

export type ContactFormProps = {
  onSubmit?: (form: IContactForm) => Promise<void>;
  dark?: boolean;
  isLoading: boolean;
  isFinished: boolean;
};

const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit = () => Promise.reject(),
  dark = true,
  isLoading,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Formik
      onSubmit={(form, actions) => {
        onSubmit(form).then(() => {
          setIsSuccess(true);
          actions.setSubmitting(false);
          actions.resetForm();

          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
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
          <Stack className='w-full space-y-8'>
            <Stack className='space-y-4'>
              <FormControl
                error={touched.name && errors.name ? errors.name : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  autoComplete='name'
                  id='contact-name'
                  name='name'
                  label='Your name'
                  placeholder='Name'
                  value={values.name}
                  isError={!!touched.name && !!errors.name}
                  variant={dark ? 'default-dark' : 'default'}
                />
              </FormControl>
              <FormControl
                error={touched.email && errors.email ? errors.email : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  autoComplete='email'
                  id='contact-email'
                  label='Your email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  value={values.email}
                  isError={!!touched.email && !!errors.email}
                  variant={dark ? 'default-dark' : 'default'}
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
                  placeholder='Tell me about it'
                  value={values.text}
                  isError={!!touched.text && !!errors.text}
                  variant={dark ? 'default-dark' : 'default'}
                />
              </FormControl>
            </Stack>

            <CTAButton
              type='submit'
              size='lg'
              isLoading={isLoading}
              variant={isSuccess ? 'success' : 'default'}
              loadingText='Sending...'
            >
              SEND
            </CTAButton>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
