import { DisplayState } from '@/app/note-trainer/_components/fretboard-mastery/fretboard-mastery';
import { FretNumber } from '@/app/note-trainer/_note-trainer.types';

const getFooterText = (displayState: DisplayState) =>
  displayState === 'question' ? 'Back to menu' : 'Next';

// Answer text remains unchanged
const getAnswerText = () => 
const answerText = isCorrectAnswer ? 'Correct!' : 'Wrong';

// Refactor getFretNumberText to use a mapping object
const fretNumberSuffixes = {
  0: '',
  1: 'st',
  2: 'nd',
  3: 'rd',
};

const getFretNumberText = (fretNumber: FretNumber) => {
  const suffix = (fretNumberSuffixes as any)[fretNumber] ?? 'th';
  return `${fretNumber}${suffix}`;
};
