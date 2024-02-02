'use client';
import { createContext } from 'react';

interface Context {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext<Context>({
  isOpen: false,
  setIsOpen: () => { }
});

export default MenuContext;
