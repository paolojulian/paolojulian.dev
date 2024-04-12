import { ReactNode } from 'react';
import { HtmlHTMLAttributes } from 'react';
import cn from '../../utils/cn';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Row({ className, children, ...props }: Props) {
  return (
    <div className={cn('ui-flex ui-flex-row', className)} {...props}>
      {children}
    </div>
  );
}
