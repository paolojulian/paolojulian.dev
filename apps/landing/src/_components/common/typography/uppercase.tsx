import React, { FunctionComponent } from 'react';

type Types = 'default' | 'wide' | 'wider' | 'widest';

const tracking: Record<Types, string> = {
  default: 'tracking-wide',
  wide: 'tracking-widest',
  wider: 'tracking-[0.375rem]',
  widest: 'tracking-[0.575rem]',
};

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  type?: Types;
}

const Uppercase: FunctionComponent<Props> = ({
  as: Element = 'p',
  children = null,
  className = '',
  type = 'default',
}) => {
  return (
    <Element
      className={[
        'uppercase font-medium font-comfortaa',
        tracking[type],
        className,
      ].join(' ')}
    >
      {children}
    </Element>
  );
};

export default Uppercase;
