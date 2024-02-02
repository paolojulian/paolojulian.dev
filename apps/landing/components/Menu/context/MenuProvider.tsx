'use client';
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createContext } from 'react';

interface Context {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<Context>({
  isOpen: false,
  setIsOpen: () => {},
});

interface Props {
  children: React.ReactNode;
}

const MenuProvider: FunctionComponent<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;

export function useMenuContext() {
  return useContext(MenuContext);
}
