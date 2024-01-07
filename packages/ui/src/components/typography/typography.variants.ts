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
  sm: 'text-xs',
  md: 'text-base',
  lg: 'text-2xl',
  "heading-1": 'text-9xl',
  "heading-2": 'text-6xl',
}

// FONT WEIGHT =================================================================================
export type FontWeightVariants = 'regular' | 'bold';


const fontWeightMap: Record<FontWeightVariants, string> = {
  regular: 'font-base',
  bold: 'font-bold',
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