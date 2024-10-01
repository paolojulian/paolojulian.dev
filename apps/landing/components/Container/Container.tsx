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
      aria-label='Container'
      className={cn(
        'mx-auto px-10',
        {
          'max-w-screen-lg': variant === 'default',
          'max-w-screen-xl': variant === 'wide',
        },
        className
      )}
    >
      {children}
    </Element>
  );
}
