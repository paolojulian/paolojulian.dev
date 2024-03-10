import cn from '@repo/ui/utils/cn';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  className?: string;
}

export default function Container({ children, className = '' }: Props) {
  return <div className={cn('px-6', className)}>{children}</div>;
}
