import React from 'react';
import { render, screen } from '@testing-library/react';
import Blockquote from './blockquote';
import { DATA_TEST } from './blockquote.constants';

describe('TESTING Blockquote Component', () => {
  describe('GIVEN a Blockquote component with children', () => {
    const children = <div>This is a blockquote</div>;

    function renderComponent() {
      return render(<Blockquote>{children}</Blockquote>);
    }

    describe('WHEN the Blockquote Component is rendered for snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the Blockquote Component is rendered', () => {
      beforeEach(() => {
        renderComponent();
      });

      it('THEN it should render the component', () => {
        const blockquote = screen.getByTestId(DATA_TEST.container);
        expect(blockquote).toBeInTheDocument();
      });

      it('THEN it should render as a <blockquote> element', () => {
        const blockquote = screen.getByTestId(DATA_TEST.container);
        expect(blockquote).toBeInTheDocument();
        expect(blockquote).toBeInstanceOf(HTMLQuoteElement);
      });

      it('THEN it should contain the children element', () => {
        const blockquote = screen.getByTestId(DATA_TEST.container);
        const childElement = screen.getByText('This is a blockquote');
        expect(blockquote).toContainElement(childElement);
      });
    });
  });
});
