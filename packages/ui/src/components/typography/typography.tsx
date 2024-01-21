import { VariantProps } from 'class-variance-authority';
import cn from '../../utils/cn';
import { cva } from 'class-variance-authority';
import localFont from 'next/font/local';

const AvantGardeGothic = localFont({
  src: '../../fonts/ITC Avant Garde Gothic/ITC Avant Garde Gothic.otf',
});
const AvantGardeGothicMedium = localFont({
  src: '../../fonts/ITC Avant Garde Gothic/ITC Avant Garde Gothic Medium.otf',
});
const AvantGardeGothicBold = localFont({
  src: '../../fonts/ITC Avant Garde Gothic/ITC Avant Garde Gothic Bold.otf',
});

type FontWeight = 'ce-demi' | 'medium' | 'bold';
const fontWeightMap: Record<FontWeight, string> = {
  'ce-demi': AvantGardeGothic.className,
  medium: AvantGardeGothicMedium.className,
  bold: AvantGardeGothicBold.className,
};

type FontVariants =
  | 'body'
  | 'body-wide'
  | 'heading'
  | 'heading-lg'
  | 'heading-xl';
const fontVariantsMap = {
  body: 'ui-text-sm ui-tracking-[-0.01em] ui-font-semibold',
  'body-wide': 'ui-text-sm ui-tracking-[0.40em] ui-font-semibold',
  heading: 'ui-text-5xl ui-tracking-[-0.01em] ui-font-semibold',
  'heading-lg':
    'ui-text-[4rem] ui-tracking-[-0.01em] ui-font-semibold ui-leading-[4.5rem]',
  'heading-xl':
    'ui-text-[7rem] ui-tracking-[-0.01em] ui-leading-[6rem] ui-font-semibold',
} satisfies Record<FontVariants, string>;

export const typographyVariants = cva('', {
  variants: {
    variant: fontVariantsMap,
    weight: fontWeightMap,
  },
  defaultVariants: {
    weight: 'medium',
    variant: 'body',
  },
});

interface Props extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export default function Typography({
  as: Element = 'p',
  children,
  className = '',
  weight,
  variant,
}: Props) {
  return (
    <Element className={cn(typographyVariants({ weight, variant, className }))}>
      {children}
    </Element>
  );
}
