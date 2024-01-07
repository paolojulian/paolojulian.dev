import React, { FunctionComponent, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  // no props
}

const HamburgerIcon: FunctionComponent<Props> = (props) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8 12H40M8 24H40M8 36H40'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HamburgerIcon;
