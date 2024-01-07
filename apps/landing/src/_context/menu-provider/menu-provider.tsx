'use client';
import React, { FunctionComponent, useEffect, useState } from 'react';
import MenuContext from './menu-context';

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
