import React, { FunctionComponent, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGSVGElement> {
  // no props
}

const ResetIcon: FunctionComponent<Props> = (props) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_2083_7429)'>
        <path
          d='M4.5 3.99993V8.99993H5.082M5.082 8.99993C5.74585 7.35806 6.93568 5.98284 8.46503 5.08979C9.99438 4.19674 11.7768 3.83634 13.533 4.06507C15.2891 4.29379 16.9198 5.09872 18.1694 6.3537C19.419 7.60869 20.2168 9.24279 20.438 10.9999M5.082 8.99993H9.5M20.5 19.9999V14.9999H19.919M19.919 14.9999C19.2542 16.6408 18.064 18.015 16.5348 18.9072C15.0056 19.7995 13.2237 20.1594 11.4681 19.9308C9.71246 19.7022 8.0822 18.8978 6.83253 17.6437C5.58287 16.3895 4.78435 14.7564 4.562 12.9999M19.919 14.9999H15.5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2083_7429'>
          <rect x='0.5' width='24' height='24' rx='4' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ResetIcon;
