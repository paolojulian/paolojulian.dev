import MenuProvider from '@/_context/menu-provider';
import { render } from '@testing-library/react';
import Menu, { dataTestId } from './menu';
import MenuContext from '@/_context/menu-provider/menu-context';

describe('TESTING Menu component', () => {
  describe('GIVEN valid props', () => {
    describe('WHEN the Menu component is rendered', () => {
      it('THEN it should render correctly', () => {
        const { getByTestId } = renderMenu();
        const menu = getByTestId(dataTestId.container);
        expect(menu).toBeInTheDocument();
      });
    });

    describe('WHEN the MenuContext is opened', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(
          <MenuContext.Provider
            value={{
              isOpen: true,
              setIsOpen: jest.fn,
            }}
          >
            <Menu />
          </MenuContext.Provider>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the MenuContext is closed', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(
          <MenuContext.Provider
            value={{
              isOpen: false,
              setIsOpen: jest.fn,
            }}
          >
            <Menu />
          </MenuContext.Provider>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});

function renderMenu() {
  return render(
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
}
