import { fireEvent, render, waitFor } from '@testing-library/react';
import { ComponentProps } from 'react';
import MenuItem, { dataTestId } from './menu-item';
import MenuContext from '@/_context/menu-provider/menu-context';
import MenuProvider from '@/_context/menu-provider';

describe('TESTING MenuItem component', () => {
  describe('GIVEN valid props', () => {
    const mockData: ComponentProps<typeof MenuItem> = {
      title: 'Sample Heading',
      description: 'Menu description',
      link: '/',
    };

    describe('WHEN the MenuItem component is rendered in snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderMenuItem(mockData);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the MenuItem component is rendered', () => {
      it('THEN it should render the title correctly', () => {
        const { getByText } = renderMenuItem(mockData);
        const title = getByText(mockData.title);
        expect(title).toBeInTheDocument();
      });

      it('THEN it should render the description correctly', () => {
        const { getByText } = renderMenuItem(mockData);
        const description = getByText(mockData.description);
        expect(description).toBeInTheDocument();
      });
    });

    describe('WHEN the MenuItem component is clicked', () => {
      it('THEN it should close the Menu', () => {
        const spySetIsOpen = jest.fn();
        const { getByTestId } = render(
          <MenuContext.Provider
            value={{
              isOpen: true,
              setIsOpen: spySetIsOpen,
            }}
          >
            <MenuItem {...mockData} />
          </MenuContext.Provider>
        );
        const menuItem = getByTestId(dataTestId.container);
        fireEvent.click(menuItem);

        waitFor(() => {
          expect(spySetIsOpen).toBeCalledWith(false);
        });
      });
    });
  });
});

function renderMenuItem(props: ComponentProps<typeof MenuItem>) {
  return render(
    <MenuProvider>
      <MenuItem {...props} />
    </MenuProvider>
  );
}
