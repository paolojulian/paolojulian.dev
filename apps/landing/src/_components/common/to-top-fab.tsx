'use client';
import React, { FunctionComponent } from 'react';
import TurnUpArrowIcon from '../icons/turn-up-arrow-icon';
import useScrolledDown from '@/_hooks/use-scrolled-down';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import usePortal from '@/_hooks/use-portal/use-portal';

export type ToTopFabProps = {
  // no props
};

const ToTopFab: FunctionComponent<ToTopFabProps> = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isScrolledDown = useScrolledDown(800);

  const portalRoot = usePortal('fixed');
  if (!portalRoot) {
    return;
  }

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed right-2 md:right-4 bottom-0',
        'transition-transform',
        isScrolledDown ? 'translate-y-0' : 'translate-y-full'
      )}
      style={{ zIndex: 9999 }}
    >
      <button
        className='h-16 w-14 bg-new-accent md:hover:bg-new-white active:scale-95 md:active:bg-new-white flex justify-center items-center'
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
        onClick={handleClick}
      >
        <TurnUpArrowIcon className='w-6 h-6 stroke-new-black' />
      </button>
    </div>,
    portalRoot
  );
};

export default ToTopFab;
