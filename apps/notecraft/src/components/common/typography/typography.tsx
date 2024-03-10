import { VariantProps } from 'class-variance-authority';
import cn from '@repo/ui/utils/cn';
import { Barlow_Condensed, Poppins } from 'next/font/google';
import { typographyVariants } from '@/components/common/typography/typography.variants';

interface Props extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

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
