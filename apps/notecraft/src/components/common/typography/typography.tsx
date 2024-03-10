import cn from '@repo/ui/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { Barlow_Condensed, Poppins } from 'next/font/google';

interface Props extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

type FontVariants =
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-md'
  | 'body-wide';

const BARLOW_CONDENSED = Barlow_Condensed({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});
const POPPINS = Poppins({
  weight: '400',
  subsets: ['latin'],
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
  'body-wide': 'font-semibold text-sm tracking-[0.40em]',
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

export default function Typography({
  as: Element = 'p',
  onClick,
  children,
  className = '',
  variant,
}: Props) {
  return (
    <Element
      onClick={onClick}
      className={cn(
        typographyVariants({ variant, family: variant, className })
      )}
    >
      {children}
    </Element>
  );
}
