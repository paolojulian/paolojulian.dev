import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

const H1: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={classNames('text-new-white text-6xl', className)}
      {...props}
    ></h1>
  );
};

const H2: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={classNames('text-new-white text-3xl md:text-4xl', className)}
      {...props}
    ></h2>
  );
};

const H3: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={classNames('text-new-white', className)}
      {...props}
    ></h3>
  );
};

const H4: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h4
      className={classNames('text-new-white', className)}
      {...props}
    ></h4>
  );
};

interface AppHeadingSubComponents {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
}

const AppHeading: AppHeadingSubComponents = {
  H1,
  H2,
  H3,
  H4,
};

export default AppHeading;
