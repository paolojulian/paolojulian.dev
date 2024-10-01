'use client';
import { createContext, FC, useContext, useState } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';

type Context = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<Context>({
  isOpen: false,
  setIsOpen: () => {},
});

const MenuProvider: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <Menu />
      <MenuButton />
    </MenuContext.Provider>
  );
};

export function useMenu() {
  return useContext(MenuContext);
}

export default MenuProvider;