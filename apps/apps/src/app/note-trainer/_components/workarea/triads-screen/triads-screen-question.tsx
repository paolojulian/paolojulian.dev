'use client';

import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { Fragment } from 'react';

interface Props {
  noteTriadName?: string;
  scaleName: string;
}

export default function TriadsScreenQuestion({
  noteTriadName,
  scaleName,
}: Props) {
  return (
    <Stack className='gap-10'>
      {/* Question */}
      <Typography className='text-white text-center' variant={'body'}>
        {!noteTriadName ? (
          'Generating Question...'
        ) : (
          <Fragment>
            What are the notes of an{' '}
            <span className='text-secondary'>{noteTriadName}</span> triad in the{' '}
            <span className='text-secondary'>{scaleName}</span> scale?
          </Fragment>
        )}
      </Typography>
    </Stack>
  );
}
