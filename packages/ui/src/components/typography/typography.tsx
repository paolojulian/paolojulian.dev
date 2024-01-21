import { VariantProps } from 'class-variance-authority';
import cn from '../../utils/cn';
import { cva } from 'class-variance-authority';
import localFont from 'next/font/local';

const AvantGardeGothic = localFont({
  src: '../../fonts/ITC Avant Garde Gothic/ITC Avant Garde Gothic CE Demi.otf',
});

type FontFamilyVariants = 'avant-garde';
const fontFamilyMap: Record<FontFamilyVariants, string> = {
  'avant-garde': AvantGardeGothic.className,
};

type FontVariants =
  | 'body'
  | 'body-wide'
  | 'heading'
  | 'heading-lg'
  | 'heading-xl';
const fontVariants = {
  body: 'ui-text-base ui-tracking-[-0.04em]',
  'body-wide': 'ui-text-base ui-tracking-[0.40em]',
  heading: 'ui-text-5xl ui-tracking-[-0.04em]',
  'heading-lg': 'ui-text-[4rem] ui-tracking-[-0.04em]',
  'heading-xl': 'ui-text-9xl ui-tracking-[-0.04em] ui-leading-[6.75rem]',
} satisfies Record<FontVariants, string>;

export const typographyVariants = cva('', {
  variants: {
    fontFamily: fontFamilyMap,
    variant: fontVariants,
  },
  defaultVariants: {
    fontFamily: 'avant-garde',
    variant: 'body',
  },
});

interface Props extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  fontFamily?: FontFamilyVariants;
}

export default function Typography({
  as: Element = 'p',
  children,
  className = '',
  fontFamily,
  variant,
}: Props) {
  return (
    <Element
      className={cn(typographyVariants({ fontFamily, variant, className }))}
    >
      {children}
    </Element>
  );
}
