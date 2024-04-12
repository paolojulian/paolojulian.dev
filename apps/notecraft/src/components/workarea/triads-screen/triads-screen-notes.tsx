'use client';

import Typography from '@/components/common/typography';
import { Note } from '../../../types/note-trainer.types';
import Stack from '@repo/ui/components/stack';
import cn from '@repo/ui/utils/cn';
import TriadsScreenQuestion from '@/components/workarea/triads-screen/triads-screen-question';
import { Scale } from '@/types/scale.types';

interface Props {
  rootNote?: Note;
  otherNotes: Note[];
  noteTriadName: string;
  selectedScale: Scale;
}

export default function TriadsScreenNotes({
  rootNote,
  otherNotes,
  noteTriadName,
  selectedScale,
}: Props) {
  return (
    <div
      className={cn(
        'rounded-xl',
        'border-[2px] border-red/20',
        'bg-gray/10',
        'p-4'
      )}
    >
      <Stack
        className={cn(
          'h-[180px] justify-center items-center',
          'gap-6',
          'rounded-xl',
          'border border-gray/10',
          'p-4'
        )}
      >
        {/* Question */}
        <TriadsScreenQuestion
          noteTriadName={noteTriadName}
          scaleName={selectedScale}
        />
        <Typography
          className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
          variant='heading-md'
        >
          {Boolean(rootNote) &&
            [rootNote, ...otherNotes].map((note) => `${note}`).join(' ')}
        </Typography>
      </Stack>
    </div>
  );
}
