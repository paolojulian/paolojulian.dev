'use client';
import React, { ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  targetId: string;
}

const ScrollToElementBtn: React.FC<Props> = ({ children, targetId }) => {
  const scrollToElement = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={scrollToElement} role='button'>
      {children}
    </div>
  );
};

export default ScrollToElementBtn;
