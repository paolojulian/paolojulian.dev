'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import { Fragment, useCallback, useEffect, useState } from 'react';
import {
  NOTE_LOCATIONS,
  Note,
  NoteLocation,
} from '../../../types/note-trainer.types';
import { generateNoteLocation } from '../../../utils/generate-random-note-location';
import GuitarFretboard from '../../common/guitar-fretboard';
import FretboardMasteryAnswer from './fretboard-mastery-answer';
import FretboardMasteryQuestion from './fretboard-mastery-question';

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
    <TrainerLayout title='Fretboard Mastery'>
      <Fragment>
        <div className='-mx-6 mb-10'>
          <GuitarFretboard
            note={randomNoteLocation.note}
            fretNumber={randomNoteLocation.fretNumber}
            string={randomNoteLocation.string}
          />
        </div>
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
      </Fragment>
    </TrainerLayout>
  );
}
