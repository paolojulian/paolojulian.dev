import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TypographyHighlight: FunctionComponent<Props> = ({ children }) => {
  return <span className='text-primary'>{children}</span>;
};

export default TypographyHighlight;
