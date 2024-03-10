import { checkIfAnswerIsCorrect } from '../triads-screen.utils';
import { Note } from '../../../../types/note-trainer.types';
import { useCallback, useEffect, useState } from 'react';

export default function useAnswerChecker({
  onAnswerChecked,
  rootNote,
  selectedNotes,
  correctAnswer,
}: {
  onAnswerChecked: () => void;
  rootNote?: Note;
  selectedNotes: Note[];
  correctAnswer: Note[];
}) {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleCheckAnswer = useCallback(() => {
    if (!rootNote) {
      return;
    }

    const answer = [rootNote, ...selectedNotes];
    setIsAnswerCorrect(checkIfAnswerIsCorrect(answer, correctAnswer));
    onAnswerChecked();
  }, [correctAnswer, selectedNotes]);

  useEffect(() => {
    if (selectedNotes.length < 2) {
      return;
    }

    // - 1 because root note is included on the correct answer
    if (selectedNotes.length >= correctAnswer.length - 1) {
      handleCheckAnswer();
    }
  }, [selectedNotes, correctAnswer, handleCheckAnswer]);

  return isAnswerCorrect;
}
