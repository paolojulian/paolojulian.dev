import React, { FunctionComponent } from 'react';

const AppsIcon: FunctionComponent<React.HtmlHTMLAttributes<SVGElement>> = (
  props
) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <rect height='9' rx='1' width='9' x='3' y='3' />
        <rect height='5' rx='.5' width='5' x='16' y='16' />
        <rect height='5' rx='.5' width='5' x='16' y='7' />
        <rect height='5' rx='.5' width='5' x='7' y='16' />
      </g>
    </svg>
  );
};

export default AppsIcon;
