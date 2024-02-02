import React, { FunctionComponent } from 'react';

export type LeftArrowIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const LeftArrowIcon: FunctionComponent<LeftArrowIconProps> = (props) => {
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
        d='M7 16L3 12M3 12L7 8M3 12H21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LeftArrowIcon;
