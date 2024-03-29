'use client';

import Container from '@/app/note-trainer/_components/common/container';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import FretboardMasteryAnswer from '@/app/note-trainer/_components/workarea/fretboard-mastery/fretboard-mastery-answer';
import FretboardMasteryQuestion from '@/app/note-trainer/_components/workarea/fretboard-mastery/fretboard-mastery-question';
import GuitarFretboard from '@/app/note-trainer/_components/common/guitar-fretboard';
import {
  NOTE_LOCATIONS,
  Note,
  NoteLocation,
} from '@/app/note-trainer/_types/_note-trainer.types';
import { generateNoteLocation } from '@/app/note-trainer/_utils/generate-random-note-location';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useState } from 'react';

export type DisplayState = 'question' | 'answer';

export default function FretboardMasteryPage() {
  const [randomNoteLocation, setRandomNoteLocation] = useState<NoteLocation>();

  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const generateRandomNoteLocation = useCallback(() => {
    setRandomNoteLocation(NOTE_LOCATIONS[generateNoteLocation()]);
  }, []);

  useEffect(() => {
    generateRandomNoteLocation();
  }, []);

  if (!randomNoteLocation) return null;

  const handleSelectNote = (note: Note) => {
    setIsCorrectAnswer(note === randomNoteLocation.note);
    setDisplayState('answer');
  };

  const handleNext = () => {
    generateRandomNoteLocation();
    setDisplayState('question');
    setIsCorrectAnswer(false);
  };

  return (
    <div className='py-6 h-full'>
      <Stack className={'items-center h-full w-full'}>
        <SectionTitle title='Fretboard Mastery' />

        <div className='py-12'>
          <GuitarFretboard
            note={randomNoteLocation.note}
            fretNumber={randomNoteLocation.fretNumber}
            string={randomNoteLocation.string}
          />
        </div>

        <Container className='h-full flex flex-col mb-10'>
          <Fragment>
            {displayState === 'question' && (
              <FretboardMasteryQuestion
                onSelectNote={handleSelectNote}
                fretNumber={randomNoteLocation.fretNumber}
                string={randomNoteLocation.string}
              />
            )}

            {displayState === 'answer' && (
              <FretboardMasteryAnswer
                onNext={handleNext}
                correctNote={randomNoteLocation.note}
                isCorrect={isCorrectAnswer}
              />
            )}
          </Fragment>
        </Container>

        <FretboardMasteryFooter
          onNext={handleNext}
          displayState={displayState}
        />
      </Stack>
    </div>
  );
}

function FretboardMasteryFooter({
  onNext,
  displayState,
}: {
  onNext: () => void;
  displayState: DisplayState;
}) {
  const textContainer = (text: string) => (
    <Typography
      variant='body-wide'
      className='text-secondary uppercase py-5 w-full text-center'
    >
      {text}
    </Typography>
  );

  if (displayState === 'answer') {
    return <button onClick={onNext}>{textContainer('Next')}</button>;
  }

  return <Link href='/note-trainer/menu'>{textContainer('Back to menu')}</Link>;
}
