'use client';

import Container from '@/app/note-trainer/_components/common/container';
import NoteChoices from '@/app/note-trainer/_components/common/note-choices';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import FretboardMasteryAnswer from '@/app/note-trainer/_components/fretboard-mastery/fretboard-mastery-answer';
import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard';
import {
  FretNumber,
  NOTE_LOCATIONS,
  Note,
} from '@/app/note-trainer/_note-trainer.types';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useState } from 'react';

export type DisplayState = 'question' | 'answer';

export default function FretboardMasteryPage() {
  const [randomNoteLocation, setRandomNoteLocation] = useState(
    NOTE_LOCATIONS[0]
  );

  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const generateRandomNoteLocation = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * NOTE_LOCATIONS.length);
    setRandomNoteLocation(NOTE_LOCATIONS[randomIndex]);
  }, []);

  const handleSelectNote = (note: Note) => {
    setIsCorrectAnswer(note === randomNoteLocation.note);
    setDisplayState('answer');
  };

  useEffect(() => {
    generateRandomNoteLocation();
  }, []);

  const handleNext = () => {
    generateRandomNoteLocation();
    setDisplayState('question');
    setIsCorrectAnswer(false);
  };

  const getFretNumberText = (fretNumber: FretNumber) => {
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
  const questionText = `What is the note on the ${
    randomNoteLocation.string
  }-string on the ${getFretNumberText(randomNoteLocation.fretNumber)} fret`;
  const answerText = isCorrectAnswer ? 'Correct!' : 'Wrong';

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

        <Container className='h-full flex flex-col'>
          <Fragment>
            {displayState === 'question' && (
              <Stack className='gap-10'>
                {/* Question */}
                <Typography
                  className='text-white text-center'
                  variant={'heading'}
                >
                  {questionText}
                </Typography>

                {/* Note Choices */}
                <Row className='justify-center'>
                  <NoteChoices onSelectNote={handleSelectNote} />
                </Row>
              </Stack>
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
