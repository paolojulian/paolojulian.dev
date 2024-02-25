'use client';

import Container from '@/app/note-trainer/_components/common/container';
import NoteChoices from '@/app/note-trainer/_components/common/note-choices';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard';
import { NOTE_LOCATIONS, Note } from '@/app/note-trainer/_note-trainer.types';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { useState } from 'react';

export default function FretboardMasteryPage() {
  const [randomNoteLocation, setRandomNoteLocation] = useState(
    NOTE_LOCATIONS[0]
  );

  const generateRandomNoteLocation = () => {
    const randomIndex = Math.floor(Math.random() * NOTE_LOCATIONS.length);
    setRandomNoteLocation(NOTE_LOCATIONS[randomIndex]);
  };

  const handleSelectNote = (note: Note) => {
    const isCorrectNote = note === randomNoteLocation.note;
  }

  return (
    <Container className='py-6 h-full'>
      <Stack className={'items-center'}>
        <SectionTitle title='Fretboard Mastery' />

        <Stack className='pt-12 gap-10'>
          <GuitarFretboard
            note={randomNoteLocation.note}
            fretNumber={randomNoteLocation.fretNumber}
            string={randomNoteLocation.string}
          />

          {/* Question */}
          <Typography className='text-primary text-center' variant={'heading'}>
            What is the note on the 2nd treat and on the B-string?
          </Typography>

          {/* Note Choices */}
          <div className='mx-auto'>
            <NoteChoices onSelectNote={} />
          </div>
        </Stack>
      </Stack>
    </Container>
  );
}
