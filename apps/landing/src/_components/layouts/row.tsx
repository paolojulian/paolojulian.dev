import classNames from 'classnames';
import { ReactNode } from 'react';
import { FunctionComponent, HtmlHTMLAttributes } from 'react';

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
