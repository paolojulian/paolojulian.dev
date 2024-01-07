import { VariantProps } from 'class-variance-authority';
import { FontFamilyVariants, typographyVariants } from './typography.variants';
import cn from '../../utils/cn';

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
