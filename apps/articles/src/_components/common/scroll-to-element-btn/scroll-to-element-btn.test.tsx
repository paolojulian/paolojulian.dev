import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToElementButton from './scroll-to-element-btn';

const scrollToSpy = jest.fn();
window.HTMLDivElement.prototype.scrollIntoView = scrollToSpy;

describe('TESTING ScrollToElementButton Component', () => {
  describe('GIVEN the ScrollToElementButton component with target ID and button text', () => {
    const targetId = 'test-target';
    const buttonText = 'Scroll to Target';

    describe('WHEN the component is rendered to snapshot', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(
          <ScrollToElementButton targetId={targetId}>
            {buttonText}
          </ScrollToElementButton>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered', () => {
      it('THEN it should render the button with the provided children', () => {
        const { getByText } = render(
          <ScrollToElementButton targetId={targetId}>
            {buttonText}
          </ScrollToElementButton>
        );
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
      });
    });

    describe('WHEN the button is clicked', () => {
      it('THEN it should scroll to the target element', () => {
        const { getByText } = render(
          <div>
            <div id={targetId} style={{ height: '100px' }}>
              Target Element
            </div>
            <ScrollToElementButton targetId={targetId}>
              {buttonText}
            </ScrollToElementButton>
          </div>
        );

        const buttonElement = getByText(buttonText);
        fireEvent.click(buttonElement);

        expect(scrollToSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
      });
    });
  });
});
