import { DATA_TEST } from './text-input.constants';
import TextInput from './text-input';
import { render, screen } from '@testing-library/react';

type TextInputProps = React.ComponentProps<typeof TextInput>;

describe('TESTING TextInput Component', () => {
  describe('GIVEN a TextInput component with variant and isError prop', () => {
    const defaultProps: TextInputProps = {
      variant: 'default',
      isError: false,
      id: 'testing',
      name: 'testing',
      label: 'testing',
    };

    function renderComponent(props: TextInputProps) {
      return render(<TextInput {...props} />);
    }

    describe('WHEN the TextInput Component is rendered on snapshot', () => {
      describe('THEN it should match the snapshot', () => {
        const { asFragment } = renderComponent(defaultProps);
        expect(asFragment).toMatchSnapshot();
      });
    });

    describe('WHEN the TextInput Component is rendered', () => {
      beforeEach(() => {
        renderComponent(defaultProps);
      });

      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(<TextInput {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
      });

      it('THEN it should render the component', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toBeInTheDocument();
      });

      it('THEN it should not apply error styles', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).not.toHaveClass('border-red-500');
      });
    });

    describe('WHEN the TextInput Component has isError set to true', () => {
      const props = { ...defaultProps, isError: true };
      beforeEach(() => {
        renderComponent({ ...props });
      });

      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(<TextInput {...props} />);
        expect(asFragment()).toMatchSnapshot();
      });

      it('THEN it should apply the error styles', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toHaveClass('border-red-500');
      });
    });
  });
});
