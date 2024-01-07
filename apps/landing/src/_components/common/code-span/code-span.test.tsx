import CodeSpan from './code-span';
import { DATA_TEST } from './code-span.constants';
import { render, screen } from '@testing-library/react';

describe('TESTING CodeSpan Component', () => {
  describe('GIVEN a children and language', () => {
    const children = <p>Test</p>;
    const language = 'javascript';

    function renderComponent() {
      render(<CodeSpan language={language}>{children}</CodeSpan>);
    }

    describe('WHEN the CodeSpan Component is rendered', () => {
      it('THEN it should render the component', () => {
        renderComponent();
        const container = screen.getByTestId(DATA_TEST.container);
        expect(container).toBeInTheDocument();
      });
      it('THEN it should render the language', () => {
        renderComponent();
        const container = screen.getByTestId(DATA_TEST.container);
        expect(container).toHaveAttribute('data-language', language);
      });
      it('THEN it should render the children', () => {
        renderComponent();
        const container = screen.getByTestId(DATA_TEST.container);
        const childElement = screen.getByText(/Test/i);
        expect(container).toContainElement(childElement);
      });
    });
  });
});
