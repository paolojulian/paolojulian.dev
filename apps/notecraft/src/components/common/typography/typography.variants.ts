import { cva } from 'class-variance-authority';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Barlow_Condensed, Poppins } from 'next/font/google';

type FontVariants =
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-md'
  | 'body-wide';

const BARLOW_CONDENSED = Barlow_Condensed({
  weight: ['400', '600', '700', '800'],
});
const POPPINS = Poppins({
  weight: '400',
});

export const fontFamilyMap: Record<FontVariants, string> = {
  'heading-lg': BARLOW_CONDENSED.className,
  'heading-md': BARLOW_CONDENSED.className,
  'heading-sm': BARLOW_CONDENSED.className,
  'body-wide': BARLOW_CONDENSED.className,
  'body-md': POPPINS.className,
};

const fontVariantsMap = {
  'heading-lg': 'font-bold text-[4rem] leading-[3.563rem]',
  'heading-md': 'font-bold text-[3rem] leading-[2.813rem]',
  'heading-sm': 'font-bold text-[2rem] leading-[2rem]',
  'body-md': 'font-regular text-[1rem]',
  'body-wide': 'font-semibold text-[0.75rem] tracking-[0.40em]',
} satisfies Record<FontVariants, string>;

export const typographyVariants = cva('', {
  variants: {
    variant: fontVariantsMap,
    family: fontFamilyMap,
  },
  defaultVariants: {
    variant: 'body-md',
    family: 'body-md',
  },
});
