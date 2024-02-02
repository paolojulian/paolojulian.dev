import { fireEvent, render, screen } from '@testing-library/react';
import HeadingLink from '@/_components/buttons/heading-link';
import { DATA_TEST } from '@/_components/buttons/heading-link/heading-link.constants';
import useCopy from '@/_hooks/use-copy';

jest.mock('@/_hooks/use-copy', () => {
  return jest.fn(() => ({
    isCopied: false,
    handleClickCopy: jest.fn(),
  }));
});

const mockedUseCopy = jest.mocked(useCopy);

describe('TESTING HeadingLink Component', () => {
  describe('GIVEN the HeadingLink tag and Header', () => {
    const Header = <h1>Heading Tag</h1>;
    const tag = 'heading-sample';

    function renderHeadingLink() {
      render(<HeadingLink Heading={Header} tag={tag} />);
    }

    describe('WHEN the HeadingLink is rendered', () => {
      it('THEN it should render the link', () => {
        renderHeadingLink();

        const headingLink = screen.getByTestId(DATA_TEST.container);
        const expectedLink = `${window.location.origin}${window.location.pathname}#${tag}`;
        expect(headingLink).toHaveAttribute('data-link', expectedLink);
      });
      it('THEN it should render the Heading', () => {
        renderHeadingLink();

        const headingProp = screen.queryByText(/Heading Tag/i, {
          selector: 'h1',
        });
        expect(headingProp).toBeVisible();
      });
    });

    describe('WHEN the popover link is rendered', () => {
      it('THEN it should contain "Copy to clipboard"', () => {
        renderHeadingLink();

        const popoverLink = screen.getByTestId(DATA_TEST.popover);
        expect(popoverLink).toHaveTextContent(/Copy to clipboard/i);
      });
    });

    describe('WHEN the popover link is clicked', () => {
      it('THEN it should call the handleClickCopy function', () => {
        const mockedHandleClickCopy = jest.fn();
        mockedUseCopy.mockReturnValueOnce({
          isCopied: false,
          handleClickCopy: mockedHandleClickCopy,
        });
        renderHeadingLink();

        const popoverLink = screen.getByTestId(DATA_TEST.popover);

        fireEvent.click(popoverLink);

        expect(mockedHandleClickCopy).toHaveBeenCalledTimes(1);
      });
    });

    describe('WHEN the popover link is copied', () => {
      it('THEN it should contain the text "Copied"', () => {
        mockedUseCopy.mockReturnValueOnce({
          isCopied: true,
          handleClickCopy: jest.fn(),
        });

        renderHeadingLink();

        const popoverLink = screen.getByTestId(DATA_TEST.popover);

        expect(popoverLink).toHaveTextContent(/Copied!/i);
      });
    });
  });
});
