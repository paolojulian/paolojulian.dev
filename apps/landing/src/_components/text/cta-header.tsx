import React, { FunctionComponent } from 'react';

export type CTAHeaderProps = {
  children: React.ReactNode;
  width?: number;
};

const CTAHeader: FunctionComponent<CTAHeaderProps> = ({
  children,
  width = 64,
}) => {
  return (
    <div className='relative'>
      {children}
      <div
        className='absolute translate-y-1 top-1/2 -right-4 h-[3px] bg-red-400 pointer-events-none'
        style={{
          width: `${width}px`,
        }}
      ></div>
    </div>
  );
};

export default CTAHeader;
