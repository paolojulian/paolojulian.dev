import classNames from 'classnames';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface RowProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Row = ({ children, className = '', ...props }: RowProps) => {
  return (
    <div className={classNames('flex flex-row', className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
