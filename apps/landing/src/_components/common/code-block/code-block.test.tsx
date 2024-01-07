import CodeBlock from '@/_components/common/code-block';
import { DATA_TEST } from '@/_components/common/code-block/code-block.constants';
import useCopy from '@/_hooks/use-copy';
import { fireEvent, render, screen, within } from '@testing-library/react';

const mockedHandleClickCopy = jest.fn();
jest.mock('@/_hooks/use-copy', () => {
  return jest.fn(() => ({
    isCopied: false,
    handleClickCopy: mockedHandleClickCopy,
  }));
});

const mockedUseCopy = jest.mocked(useCopy);

describe('TESTING CodeBlock Component', () => {
  describe('GIVEN language "jsx" and code block text', () => {
    const children = [
      {
        props: {
          'data-language': 'jsx',
          children: ['Sample'],
        },
      },
    ];

    function renderCodeBlock() {
      render(<CodeBlock>{children}</CodeBlock>);
    }

    describe('WHEN CodeBlock is rendered', () => {
      it('THEN it should hide the testContainer', () => {
        renderCodeBlock();
        const textContainer = screen.queryByTestId(DATA_TEST.textContainer);
        expect(textContainer).not.toBeInTheDocument();
      });
      it('THEN it should render the mainContainer', () => {
        renderCodeBlock();
        const mainContainer = screen.queryByTestId(DATA_TEST.mainContainer);
        expect(mainContainer).toBeInTheDocument();
      });
      it('THEN it should render the nocopyContainer', () => {
        renderCodeBlock();
        const noCopyContainer = screen.queryByTestId(DATA_TEST.noCopyContainer);
        expect(noCopyContainer).toBeInTheDocument();
      });
      it('THEN it should render text content "Sample" in the mainContainer', () => {
        renderCodeBlock();
        const mainContainer = within(
          screen.getByTestId(DATA_TEST.mainContainer)
        );
        expect(mainContainer.getByText(/Sample/i)).toBeInTheDocument();
      });
      it('THEN it should display "Copy" text', () => {
        renderCodeBlock();
        const copyButton = within(screen.getByTestId(DATA_TEST.copyButton));
        expect(copyButton.getByText(/Copy/i)).toBeInTheDocument();
      });
    });

    describe('WHEN CodeBlock is copied', () => {
      it('THEN it should call the handleClickCopy function', () => {
        renderCodeBlock();
        const copyButton = screen.getByTestId(DATA_TEST.copyButton);
        fireEvent.click(copyButton);
        expect(mockedHandleClickCopy).toHaveBeenCalledTimes(1);
      });
      it('THEN it should display "Copied!" text', () => {
        mockedUseCopy.mockImplementationOnce(() => ({
          isCopied: true,
          handleClickCopy: jest.fn(),
        }));
        renderCodeBlock();
        const copyButton = within(screen.getByTestId(DATA_TEST.copyButton));
        expect(copyButton.getByText(/Copied!/i)).toBeInTheDocument();
      });
    });
  });

  describe('GIVEN language "no-copy" and code block text', () => {
    const children = [
      {
        props: {
          'data-language': 'no-copy',
          children: ['Sample'],
        },
      },
    ];

    function renderCodeBlock() {
      render(<CodeBlock>{children}</CodeBlock>);
    }

    describe('WHEN CodeBlock is rendered', () => {
      it('THEN it should hide the testContainer', () => {
        renderCodeBlock();
        const textContainer = screen.queryByTestId(DATA_TEST.textContainer);
        expect(textContainer).not.toBeInTheDocument();
      });
      it('THEN it should render the mainContainer', () => {
        renderCodeBlock();
        const mainContainer = screen.queryByTestId(DATA_TEST.mainContainer);
        expect(mainContainer).toBeInTheDocument();
      });
      it('THEN it should not render the nocopyContainer', () => {
        renderCodeBlock();
        const noCopyContainer = screen.queryByTestId(DATA_TEST.noCopyContainer);
        expect(noCopyContainer).not.toBeInTheDocument();
      });
    });
  });

  describe('GIVEN language "text" and code block text', () => {
    const children = [
      {
        props: {
          'data-language': 'text',
          children: ['Sample Text'],
        },
      },
    ];

    function renderCodeBlock() {
      render(<CodeBlock>{children}</CodeBlock>);
    }

    describe('WHEN CodeBlock is rendered as language "text"', () => {
      it('THEN it should hide the main container', () => {
        renderCodeBlock();
        const mainContainer = screen.queryByTestId(DATA_TEST.mainContainer);
        expect(mainContainer).not.toBeInTheDocument();
      });
      it('THEN it should render the text container', () => {
        renderCodeBlock();
        const textContainer = screen.queryByTestId(DATA_TEST.textContainer);
        expect(textContainer).toBeInTheDocument();
      });
      it('THEN it should render the "Sample Text" in the text container', () => {
        renderCodeBlock();
        const textContainer = within(
          screen.getByTestId(DATA_TEST.textContainer)
        );
        expect(textContainer.getByText(/Sample Text/i)).toBeInTheDocument();
      });
    });
  });
});
