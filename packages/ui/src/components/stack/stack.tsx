import { ReactNode } from 'react';
import { HtmlHTMLAttributes } from 'react';
import cn from '../../utils/cn';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Stack({ className, children, ...props }: Props) {
  return (
    <div className={cn('ui-flex ui-flex-col', className)} {...props}>
      {children}
    </div>
  );
}
