import { DATA_TEST } from './contact-form.constants';
import ContactForm from './contact-form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useContactForm from '@/_hooks/use-contact-form';
import { IContactFormSchema } from '@/_utils/schemas/contact-form.schema';

jest.mock('@/_hooks/use-contact-form', () =>
  jest.fn(() => ({
    handleSubmit: jest.fn(),
    isLoading: false,
  }))
);

const mockedUseContactForm = jest.mocked(useContactForm);

describe('TESTING ContactForm Component', () => {
  describe('GIVEN a ContactForm component and form data', () => {
    const form: IContactFormSchema = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      text: 'This is a test message',
    };

    describe('WHEN the form is submitted successfully', () => {
      it('THEN it should call the handleSubmit function', async () => {
        const handleSubmit = jest.fn(() => Promise.resolve());
        mockedUseContactForm.mockImplementationOnce(() => ({
          ...jest.requireActual('@/_hooks/use-contact-form'),
          handleSubmit,
        }));

        // Render the ContactForm
        render(<ContactForm />);
        const user = userEvent.setup();

        // Fill in the form fields
        const nameInput = screen.getByTestId(DATA_TEST.name);
        const emailInput = screen.getByTestId(DATA_TEST.email);
        const textInput = screen.getByTestId(DATA_TEST.message);

        await user.type(nameInput, form.name);
        await user.type(emailInput, form.email);
        await user.type(textInput, form.text);

        // Submit the form
        const submitButton = screen.getByTestId(DATA_TEST.submitBtn);
        await user.click(submitButton);
        await waitFor(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(1);
          expect(handleSubmit).toHaveBeenCalledWith(form);
        });
      });
    });
  });
});
