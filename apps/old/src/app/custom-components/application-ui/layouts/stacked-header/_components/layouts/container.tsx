import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type ContainerProps = {
  // no props
} & HtmlHTMLAttributes<HTMLDivElement>;

const Container: FunctionComponent<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={classNames(className, 'px-4 lg:px-8')}></div>
  );
};

export default Container;
