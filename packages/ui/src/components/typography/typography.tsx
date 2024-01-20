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

// FONT SIZE =================================================================================
export type FontSizeVariants =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'heading-2'
  | 'heading-1';

const fontSizeMap: Record<FontSizeVariants, string> = {
  sm: 'ui-text-xs',
  md: 'ui-text-base',
  lg: 'ui-text-2xl',
  xl: 'ui-text-4xl',
  'heading-1': 'ui-text-9xl ui-leading-[0.8]',
  'heading-2': 'ui-text-7xl',
};

// FONT WEIGHT =================================================================================
export type FontWeightVariants = 'regular' | 'medium' | 'semi-bold' | 'bold';

const fontWeightMap: Record<FontWeightVariants, string> = {
  regular: 'ui-font-base',
  medium: 'ui-font-medium',
  'semi-bold': 'ui-font-semibold',
  bold: 'ui-font-bold',
};

export const typographyVariants = cva('', {
  variants: {
    fontFamily: fontFamilyMap,
    fontSize: fontSizeMap,
    fontWeight: fontWeightMap,
  },
  defaultVariants: {
    fontFamily: 'avant-garde',
    fontSize: 'md',
    fontWeight: 'regular',
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
  fontSize,
  fontWeight,
}: Props) {
  return (
    <Element
      className={cn(
        typographyVariants({ fontFamily, fontSize, fontWeight, className })
      )}
    >
      {children}
    </Element>
  );
}
