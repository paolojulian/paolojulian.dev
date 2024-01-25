import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import classNames from 'classnames';
import Link from 'next/link';

export default function RightSideBar() {
  return (
    <Stack className='fixed right-10 top-10 bottom-10 justify-between items-end z-30'>
      <Stack className='gap-2 items-end'>
        <SideBarLink isCurrent={true} href='#about' label='About' />
        <SideBarLink isCurrent={false} href='#experience' label='Experience' />
        <SideBarLink isCurrent={false} href='#writing' label='Writing' />
        <SideBarLink isCurrent={false} href='#contact' label='Contact' />
      </Stack>
      <span
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        <Typography className='text-gray rotate-180' variant='body'>
          paolojulian.dev
        </Typography>
      </span>
    </Stack>
  );
}

function SideBarLink({
  href,
  label,
  isCurrent,
}: {
  href: string;
  label: string;
  isCurrent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={classNames('duration-500 ease-in-out', {
        'text-white pointer-events-none': isCurrent,
        'text-gray hover:text-primary hover:-translate-x-4': !isCurrent,
      })}
    >
      <Typography className='uppercase'>{label}</Typography>
    </Link>
  );
}
