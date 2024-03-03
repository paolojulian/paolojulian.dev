'use client';

import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

interface Props {
  rootNote?: Note;
  otherNotes: Note[];
}

export default function TriadsScreenNotes({ rootNote, otherNotes }: Props) {
  return (
    <Stack className='-mx-10 bg-primary h-[180px] justify-center items-center'>
      <Typography
        className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
        variant='heading-lg'
      >
        {Boolean(rootNote) &&
          [rootNote, ...otherNotes].map((note) => `${note}`).join(' - ')}
      </Typography>
    </Stack>
  );
}
