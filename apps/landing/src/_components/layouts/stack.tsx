import classNames from 'classnames';
import React, { HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}

const Stack = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        className={classNames('flex flex-col', className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

export default Stack;
