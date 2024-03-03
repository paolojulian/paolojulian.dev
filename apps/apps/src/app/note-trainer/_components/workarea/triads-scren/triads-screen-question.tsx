'use client';

import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function TriadsScreenQuestion() {
  return (
    <Stack className='gap-10'>
      {/* Question */}
      <Typography className='text-white text-center' variant={'body'}>
        What are the notes of an E major triad?
      </Typography>
    </Stack>
  );
}
