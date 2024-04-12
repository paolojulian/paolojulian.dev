import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Highlight: FunctionComponent<Props> = ({ children }) => {
  return <span className='text-primary'>{children}</span>;
};

export default Highlight;
