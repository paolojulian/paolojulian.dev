import { render } from '@testing-library/react';
import SectionHeading from './section-heading';
import { ComponentProps } from 'react';

describe('TESTING SectionHeading component', () => {
  describe('GIVEN valid props', () => {
    const mockData: ComponentProps<typeof SectionHeading> = {
      title: 'Sample Heading',
      RightContent: <div>Right Content</div>,
    };

    describe('WHEN the SectionHeading component is rendered in snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderSectionHeading(mockData);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the SectionHeading component is rendered', () => {
      it('THEN it should render the title correctly', () => {
        const { getByText } = renderSectionHeading(mockData);
        const title = getByText(mockData.title);
        expect(title).toBeInTheDocument();
      });

      it('THEN it should render the RightContent correctly', () => {
        const { getByText } = renderSectionHeading(mockData);
        const rightContent = getByText('Right Content');
        expect(rightContent).toBeInTheDocument();
      });
    });
  });
  describe('GIVEN an empty RightContent', () => {
    const mockData: ComponentProps<typeof SectionHeading> = {
      title: 'Sample Heading',
    };

    describe('WHEN the SectionHeading component is rendered in snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderSectionHeading(mockData);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});

function renderSectionHeading(props: ComponentProps<typeof SectionHeading>) {
  return render(<SectionHeading {...props} />);
}
