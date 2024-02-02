import React, { FunctionComponent, SVGAttributes } from 'react';

export type ArchitectPatternProps = {
  // no props
} & SVGAttributes<SVGElement>;

const ArchitectPattern: FunctionComponent<ArchitectPatternProps> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 64' {...props}>
      <g fill='currentColor'>
        <path d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'></path>
      </g>
    </svg>
  );
};

export default ArchitectPattern;
