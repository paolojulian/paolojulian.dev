import cn from '@repo/ui/utils/cn';

interface Props {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  as: Element = 'div',
  children,
  className = '',
}: Props) {
  return (
    <Element
      className={cn('ui-max-w-screen-2xl ui-mx-auto ui-px-10', className)}
    >
      {children}
    </Element>
  );
}
