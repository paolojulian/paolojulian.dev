import { cn } from '@paolojulian.dev/design-system/utils';
import { ElementType, ReactNode } from 'react';

type Variants = 'default' | 'wide';

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: Variants;
}

export default function Container({
  as: Element = 'div',
  children,
  className = '',
  variant = 'default',
}: Props) {
  return (
    <Element
      className={cn(
        'ui-mx-auto ui-px-10',
        {
          'ui-max-w-screen-lg': variant === 'default',
          'ui-max-w-screen-xl': variant === 'wide',
        },
        className
      )}
    >
      {children}
    </Element>
  );
}
