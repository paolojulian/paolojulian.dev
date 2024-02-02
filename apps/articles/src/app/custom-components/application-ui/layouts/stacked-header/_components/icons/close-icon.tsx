import React, { FunctionComponent } from 'react';

export type CloseIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const CloseIcon: FunctionComponent<CloseIconProps> = (props) => {
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
        d='M6 18L18 6M6 6L18 18'
        stroke='#94A3B8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseIcon;
