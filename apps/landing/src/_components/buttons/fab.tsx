import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Themes = 'primary' | 'primary-outlined' | 'gray' | 'white';
type Sizes = 'sm' | 'base';

const THEMES: Record<Themes, string> = {
  primary: 'bg-new-black',
  'primary-outlined': 'border border-primary-400 bg-primary-300/30',
  gray: 'bg-gray-400 hover:bg-gray-500',
  white: 'bg-new-white text-new-black',
};

const SIZES: Record<Sizes, string> = {
  sm: 'w-[30px]',
  base: 'w-[50px]',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Themes;
  size?: Sizes;
}

const Fab: FunctionComponent<Props> = ({
  theme = 'primary',
  size = 'base',
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames(
        className,
        'aspect-square rounded-full flex items-center justify-center shadow-[0_4px_28px_rgb(0,0,0,0.1)]',
        'transition-colors active:scale-95',
        disabled ? 'pointer-events-none bg-new-highlight' : THEMES[theme],
        SIZES[size]
      )}
    ></button>
  );
};

export default Fab;
