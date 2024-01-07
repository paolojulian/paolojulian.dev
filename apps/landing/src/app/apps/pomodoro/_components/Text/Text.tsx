import React, { FunctionComponent } from 'react';

type Size = 'default' | 'large';

const sizeMap: Record<Size, string> = {
  default: 'text-base',
  large: 'text-xl',
};

interface Props extends React.HTMLAttributes<Element> {
  as?: keyof JSX.IntrinsicElements;
  size?: Size;
  children?: React.ReactNode;
  className?: string;
}

const Text: FunctionComponent<Props> = ({
  as: Element = 'p',
  size = 'default',
  children = null,
  className = '',
  ...props
}) => {
  return (
    <Element {...props} className={[sizeMap[size], className].join(' ')}>
      {children}
    </Element>
  );
};

export default Text;
