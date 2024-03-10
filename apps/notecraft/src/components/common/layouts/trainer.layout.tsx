import Container from '@/components/common/container';
import Typography from '@/components/common/typography';
import HomeIcon from '@/components/icons/home-icon';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Link from 'next/link';
import { ReactElement } from 'react';

type Props = {
  title: string;
  children: ReactElement;
};

export default function TrainerLayout({ title, children }: Props) {
  return (
    <Container className='py-6 bg-black h-full w-lvw overflow-x-hidden'>
      <Stack className='h-full'>
        {/* Header */}
        <Row className='mb-12 justify-center'>
          <Typography
            as='h1'
            className='text-gray uppercase'
            variant='body-wide'
          >
            {title}
          </Typography>
        </Row>

        {/* Content */}
        <Stack className='gap-4 flex-1 mb-12'>{children}</Stack>

        {/* Footer */}
        <Row className='justify-center'>
          <Link
            className='bg-gray/15 rounded-full aspect-square w-16 h-16 flex items-center justify-center'
            role='button'
            href='/menu'
          >
            <HomeIcon />
          </Link>
        </Row>
      </Stack>
    </Container>
  );
}
