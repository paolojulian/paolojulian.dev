'use client';

import NoteChoices from '@/app/note-trainer/_components/common/note-choices/note-choices';
import { FretNumber, Note } from '@/app/note-trainer/_note-trainer.types';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

const getFretNumberText = (fretNumber: FretNumber) => {
  if (fretNumber === 0) {
    return '0';
  }
  if (fretNumber === 1) {
    return '1st';
  }
  if (fretNumber === 2) {
    return '2nd';
  }
  if (fretNumber === 3) {
    return '3rd';
  }

  return `${fretNumber}th`;
};

export default function FretboardMasteryQuestion({
  onSelectNote,
  string,
  fretNumber,
}: {
  // eslint-disable-next-line no-unused-vars
  onSelectNote: (note: Note) => void;
  string: String;
  fretNumber: FretNumber;
}) {
  return (
    <Stack className='gap-10'>
      {/* Question */}
      <Typography className='text-white text-center' variant={'heading'}>
        What is the note on the{' '}
        <span className='text-green-400'>{string} string</span> on the{' '}
        <span className='text-green-400'>
          {getFretNumberText(fretNumber)} fret
        </span>
        ?
      </Typography>

      {/* Note Choices */}
      <Row className='justify-center'>
        <NoteChoices onSelectNote={onSelectNote} />
      </Row>
    </Stack>
  );
}
