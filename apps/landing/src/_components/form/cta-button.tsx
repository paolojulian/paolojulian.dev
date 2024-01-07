import classNames from 'classnames';
import styles from './cta-button.module.css';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants =
  | 'default'
  | 'default-dark'
  | 'secondary'
  | 'success'
  | 'transparent';
type Sizes = 'base' | 'lg';

export type CTAButtonProps = {
  isLoading?: boolean;
  variant?: Variants;
  size?: Sizes;
  block?: boolean;
  loadingText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const bgVariants: Record<Variants, string> = {
  default: classNames(
    'bg-new-accent md:hover:bg-new-accent/90 md:active:bg-new-accent active:scale-[0.98]',
    'text-new-black'
  ),
  'default-dark': classNames(
    'bg-slate-200 md:hover:bg-primary-400 md:active:bg-primary-500 active:bg-primary-600 active:scale-[0.98]',
    'text-slate-700 hover:text-slate-50'
  ),
  secondary:
    'bg-slate-900 md:hover:bg-slate-600 md:active:bg-slate-400 active:bg-slate-400 :scale-[0.98] text-slate-50',
  success: 'bg-emerald-600 text-slate-50',
  transparent:
    'bg-transparent md:hover:bg-slate-900 md:active:bg-slate-400 active:bg-slate-400 :scale-[0.98] text-slate-700 md:hover:text-slate-50',
};

const sizes: Record<Sizes, string> = {
  base: 'py-3',
  lg: 'py-4',
};

const CTAButton: FunctionComponent<CTAButtonProps> = ({
  loadingText = 'loading',
  variant = 'default',
  size = 'base',
  block = true,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'relative group p-1',
        isLoading ? 'pointer-events-none' : '',
        isLoading ? styles.wave : '',
        variant === 'success' ? 'pointer-events-none' : ''
      )}
    >
      <button
        {...props}
        className={classNames(
          'transition-colors relative overflow-hidden',
          'flex justify-center items-center',
          sizes[size],
          block ? 'w-full px-5' : 'w-fit px-14 max-w-full',
          isLoading ? bgVariants['transparent'] : bgVariants[variant]
        )}
      >
        {variant === 'success' ? (
          <span className='text-slate-50 uppercase'>Success</span>
        ) : isLoading ? (
          <span
            className={classNames(styles['dots-animation'], 'text-slate-400')}
          >
            {loadingText}
          </span>
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default CTAButton;
