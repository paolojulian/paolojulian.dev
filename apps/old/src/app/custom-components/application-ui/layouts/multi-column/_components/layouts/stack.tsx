import classNames from 'classnames';
import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';

export type StackProps = {
  children?: ReactNode;
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
