import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import Link from 'next/link';

interface ButtonBaseProps {
  title: string;
}

interface ButtonProps extends ButtonBaseProps {
  type: 'button';
  href?: never;
}

interface ButtonLinkProps extends ButtonBaseProps {
  type: 'link';
  href: string;
}

export default function Button({
  title,
  type,
  href,
}: ButtonProps | ButtonLinkProps) {
  const className = cn(
    'flex items-center justify-center w-full bg-primary rounded-lg py-6',
    'duration-500 active:scale-90 active:bg-primary/75 ease-in-out'
  );

  if (type === 'link') {
    return (
      <Link href={href} className={className}>
        <Typography variant={'body'} className='text-white'>
          {title}
        </Typography>
      </Link>
    );
  }

  return (
    <button className={className}>
      <Typography variant={'body'} className='text-white'>
        {title}
      </Typography>
    </button>
  );
}
