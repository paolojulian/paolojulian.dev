import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type StackProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Stack: FunctionComponent<StackProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={classNames('flex flex-col', className)} {...props}>
      {children}
    </div>
  );
};

export default Stack;
