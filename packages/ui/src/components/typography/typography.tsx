import { VariantProps } from 'class-variance-authority';
import cn from '../../utils/cn';
import { cva } from 'class-variance-authority';
import { Barlow_Condensed, Inter } from 'next/font/google';

// FONT FAMILY =================================================================================
export type FontFamilyVariants = 'barlow-condensed' | 'montserrat';

const montserrat = Inter({ subsets: ['latin'] });
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const fontFamilyMap: Record<FontFamilyVariants, string> = {
  'barlow-condensed': barlowCondensed.className,
  montserrat: montserrat.className,
};

// FONT SIZE =================================================================================
export type FontSizeVariants = 'sm' | 'md' | 'lg' | 'heading-2' | 'heading-1'


const fontSizeMap: Record<FontSizeVariants, string> = {
  sm: 'ui-text-xs',
  md: 'ui-text-base',
  lg: 'ui-text-2xl',
  "heading-1": 'ui-text-9xl',
  "heading-2": 'ui-text-6xl',
}

// FONT WEIGHT =================================================================================
export type FontWeightVariants = 'regular' | 'bold';


const fontWeightMap: Record<FontWeightVariants, string> = {
  regular: 'ui-font-base',
  bold: 'ui-font-bold',
}

export const typographyVariants = cva(
  '',
  {
    variants: {
      fontFamily: fontFamilyMap,
      fontSize: fontSizeMap,
      fontWeight: fontWeightMap,
    },
    defaultVariants: {
      fontFamily: 'barlow-condensed',
      fontSize: 'md',
      fontWeight: 'regular',
    }
  }
)

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
