import React, { FunctionComponent, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGSVGElement> {
  // no props
}

const TrashIcon: FunctionComponent<Props> = (props) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_2085_43)'>
        <path
          d='M19 7.5L18.133 19.642C18.0971 20.1466 17.8713 20.6188 17.5011 20.9636C17.1309 21.3083 16.6439 21.5 16.138 21.5H7.862C7.35614 21.5 6.86907 21.3083 6.49889 20.9636C6.1287 20.6188 5.90292 20.1466 5.867 19.642L5 7.5M10 11.5V17.5M14 11.5V17.5M15 7.5V4.5C15 4.23478 14.8946 3.98043 14.7071 3.79289C14.5196 3.60536 14.2652 3.5 14 3.5H10C9.73478 3.5 9.48043 3.60536 9.29289 3.79289C9.10536 3.98043 9 4.23478 9 4.5V7.5M4 7.5H20'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2085_43'>
          <rect y='0.5' width='24' height='24' rx='4' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrashIcon;
