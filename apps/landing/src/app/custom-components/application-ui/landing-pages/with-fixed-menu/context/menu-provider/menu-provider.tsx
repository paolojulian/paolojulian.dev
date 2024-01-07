'use client';
import MenuContext from './menu-context';
import React, { FunctionComponent, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const MenuProvider: FunctionComponent<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
