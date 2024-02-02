import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className = '',
}) => {
  return <div className={classNames('px-4', className)}>{children}</div>;
};

export default Container;
