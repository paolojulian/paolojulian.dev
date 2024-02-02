import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type NavIconButtonProps = {
  name: string;
} & React.HtmlHTMLAttributes<HTMLAnchorElement>;

const NavIconButton: FunctionComponent<NavIconButtonProps> = ({
  children,
  name,
  ...props
}) => {
  return (
    <div className='relative'>
      <a
        {...props}
        className='p-2 rounded-full transition-colors group hover:bg-slate-300 active:bg-slate-400 cursor-pointer flex items-center justify-center'
        aria-haspopup='true'
      >
        <div className='group-active:scale-90'>{children}</div>
        <div
          className={classNames(
            'absolute ml-1 left-full transition-opacity -translate-y-1/2 top-1/2 px-4 py-2 bg-gray-800/70 text-gray-50',
            'opacity-0 group-hover:opacity-100 z-30',
            'pointer-events-none select-none'
          )}
        >
          {name}
        </div>
      </a>
    </div>
  );
};

export default NavIconButton;
