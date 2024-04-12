import { ReactNode } from 'react';
import { HtmlHTMLAttributes } from 'react';
import cn from '../../utils/cn';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  shouldCenterContents?: boolean;
}

export default function Stack({
  className,
  children,
  shouldCenterContents = false,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'ui-flex ui-flex-col',
        {
          'ui-justify-center ui-items-center': shouldCenterContents,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
