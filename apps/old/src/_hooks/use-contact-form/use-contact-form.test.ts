import { renderHook, act } from '@testing-library/react';
import useContactForm from './use-contact-form';
import { IContactForm } from '@/app/(main-layout)/portfolio.backup/_forms';
import * as contactAPI from '@/_api/contact';

jest.mock('@/_api/contact', () => ({
  sendContactForm: jest.fn(() => Promise.resolve())
}))
const spyedSendContactForm = jest.spyOn(contactAPI, 'sendContactForm')

describe('TESTING useContactForm Hook', () => {
  describe('GIVEN the useContactForm hook and form data', () => {
    const form: IContactForm = {
      email: 'paolovincentarch@gmail.com',
      name: 'Paolo Vincent Julian',
      text: 'I want to test this contact form.'
    };

    describe('WHEN handleSubmit is called successfully', () => {
      it('THEN it should call the sendContactForm with the right form', async () => {
        const { result } = renderHook(useContactForm);
        await act(() => result.current.handleSubmit(form));

        expect(spyedSendContactForm).toHaveBeenCalledWith(form);
      });

      it('THEN it should set the right states', async () => {
        const { result } = renderHook(useContactForm);
        await act(() => result.current.handleSubmit(form));

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isFinished).toBe(true);
        expect(result.current.error).toBe('');
      });
    });

    describe('WHEN handleSubmit fails', () => {
      it('THEN it should set errors', async () => {
        spyedSendContactForm.mockImplementationOnce(jest.fn(() => Promise.reject()))

        const { result } = renderHook(useContactForm);
        await act(() => result.current.handleSubmit(form));

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isFinished).toBe(false);
        expect(result.current.error).toBe('Something went wrong.');
      })
    })
  });
});
