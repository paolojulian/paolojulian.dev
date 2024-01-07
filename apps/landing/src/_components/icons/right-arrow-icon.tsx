import React, { FunctionComponent } from 'react';

export type RightArrowIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const RightArrowIcon: FunctionComponent<RightArrowIconProps> = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17 8L21 12M21 12L17 16M21 12L3 12'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default RightArrowIcon;
