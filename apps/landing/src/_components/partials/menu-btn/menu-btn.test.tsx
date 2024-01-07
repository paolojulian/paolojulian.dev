import MenuProvider from '@/_context/menu-provider';
import MenuContext from '@/_context/menu-provider/menu-context';
import { fireEvent, render, waitFor } from '@testing-library/react';
import MenuBtn, { dataTestId } from './menu-btn';

describe('TESTING MenuBtn component', () => {
  describe('GIVEN default data', () => {
    describe('WHEN the MenuBtn component is rendered in snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderMenuBtn();
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the MenuBtn component is rendered', () => {
      it('THEN it should render correctly', () => {
        const { getByTestId } = renderMenuBtn();
        const button = getByTestId(dataTestId.button);
        expect(button).toBeInTheDocument();
      });
    });

    describe('WHEN the MenuBtn component is opened', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(
          <MenuContext.Provider
            value={{
              isOpen: true,
              setIsOpen: jest.fn(),
            }}
          >
            <MenuBtn />
          </MenuContext.Provider>
        );
        expect(asFragment()).toMatchSnapshot();
      });

      it('THEN it should render the close icon', () => {
        const { getByTestId } = renderMenuBtn();
        const button = getByTestId(dataTestId.button);
        fireEvent.click(button);

        waitFor(() => {
          const closeIcon = getByTestId(dataTestId.closeIcon);
          expect(closeIcon).toBeInTheDocument();
        });
      });
    });

    describe('WHEN the MenuBtn component is closed', () => {
      it('THEN it should render the close icon', () => {
        const { getByTestId } = renderMenuBtn();
        const hamburgerIcon = getByTestId(dataTestId.hamburgerIcon);
        expect(hamburgerIcon).toBeInTheDocument();
      });
    });
  });
});

function renderMenuBtn() {
  return render(
    <MenuProvider>
      <MenuBtn />
    </MenuProvider>
  );
}
