'use client';

import Container from '@/app/note-trainer/_components/common/container';
import NoteChoices from '@/app/note-trainer/_components/common/note-choices';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
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
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

type DisplayState = 'question' | 'answer';

export default function FretboardMasteryPage() {
  const router = useRouter();
  const [randomNoteLocation, setRandomNoteLocation] = useState(
    NOTE_LOCATIONS[0]
  );

  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const generateRandomNoteLocation = () => {
    const randomIndex = Math.floor(Math.random() * NOTE_LOCATIONS.length);
    setRandomNoteLocation(NOTE_LOCATIONS[randomIndex]);
  };

  const handleSelectNote = (note: Note) => {
    setIsCorrectAnswer(note === randomNoteLocation.note);
    setDisplayState('answer');
  };

  const handleFooterClick = () => {
    if (displayState === 'answer') {
      return handleNext();
    }

    return router.replace('/note-trainer/menu');
  };

  const handleNext = () => {
    generateRandomNoteLocation();
    setDisplayState('question');
    setIsCorrectAnswer(false);
  };

  const footerText = displayState === 'question' ? 'Back to menu' : 'Next';
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
              <Fragment>
                <Typography className='text-center' variant={'body'}>
                  "Your answer is{' '}
                  <span
                    className={cn({
                      ['text-primary']: !isCorrectAnswer,
                      ['text-green-400']: isCorrectAnswer,
                    })}
                  >
                    {answerText}
                  </span>
                  "
                </Typography>
                <Stack
                  className='justify-center items-center flex-1 gap-2 text-green-400'
                  onClick={handleNext}
                >
                  <Typography variant='body-wide'>CORRECT NOTE</Typography>
                  <Typography
                    className={cn('uppercase', {
                      ['text-primary']: !isCorrectAnswer,
                      ['text-green-400']: isCorrectAnswer,
                    })}
                    variant='heading-xl'
                  >
                    {randomNoteLocation.note}
                  </Typography>
                </Stack>
              </Fragment>
            )}
          </Fragment>
        </Container>

        <button onClick={handleFooterClick}>
          <Typography
            variant='body-wide'
            className='text-secondary uppercase py-5 w-full text-center'
          >
            {footerText}
          </Typography>
        </button>
      </Stack>
    </div>
  );
}
