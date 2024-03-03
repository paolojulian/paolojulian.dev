import { checkIfAnswerIsCorrect } from '@/app/note-trainer/_components/workarea/triads-screen/triads-screen.utils';
import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
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
