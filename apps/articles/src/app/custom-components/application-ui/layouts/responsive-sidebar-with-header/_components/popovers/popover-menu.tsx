import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import useClickedOutside from '../../_hooks/useClickedOutside';

export type PopoverMenuProps = {
  Menu: React.ReactNode;
  children: React.ReactNode;
};

const PopoverMenu: FunctionComponent<PopoverMenuProps> = ({
  children,
  Menu,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    if (buttonRef.current)
      setButtonHeight(
        buttonRef.current.offsetHeight ? buttonRef.current.offsetHeight : 0
      );
  }, []);

  useClickedOutside(buttonRef, (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  });

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        className='py-5'
        aria-haspopup='menu'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {children}
      </button>
      <div
        className={classNames(
          'absolute top-0 right-0 transition bg-white rounded-md border border-neutral-200 shadow-lg',
          'w-fit',
          isOpen
            ? '-translate-y-2 opacity-100'
            : '-translate-y-8 opacity-0 pointer-events-none'
        )}
        style={{
          top: buttonHeight,
        }}
        role='menu'
      >
        {Menu}
      </div>
    </div>
  );
};

export default PopoverMenu;
