import React, { FunctionComponent, SVGAttributes } from 'react';

export type CaretDownIconProps = {
  // no props
} & SVGAttributes<SVGElement>;

const CaretDownIcon: FunctionComponent<CaretDownIconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
};

export default CaretDownIcon;
