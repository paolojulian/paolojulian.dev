import classNames from 'classnames';

export type Variants = 'default' | 'default-dark';

export const COLOR_VARIANTS: Record<Variants, string> = {
  default: classNames(
    'border-slate-400 focus:border-slate-800', // border
    'text-slate-700' // font
  ),
  'default-dark': classNames(
    'border-slate-600 focus:border-slate-50', // border
    'text-slate-200 placeholder-slate-500' // font
  ),
};

export const DATA_TEST = {
  container: 'text-input-container',
  input: 'text-input-input',
  label: 'text-input-label',
};
