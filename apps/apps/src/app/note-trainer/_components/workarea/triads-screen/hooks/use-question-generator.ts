import { generateTriadQuestion } from '@/app/note-trainer/_components/workarea/triads-screen/triads-screen.utils';
import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { Scale } from '@/app/note-trainer/_types/scale.types';
import { useCallback, useEffect, useState } from 'react';

export function useQuestionGenerator(selectedScale: Scale) {
  const [rootNote, setRootNote] = useState<Note>();
  const [noteTriadName, setNoteTriadName] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<Note[]>([]);

  const randomizeQuestion = useCallback(() => {
    if (!selectedScale) return;

    const generatedTriadQuestion = generateTriadQuestion(selectedScale);
    const { rootNote, correctAnswer, noteTriadName } = generatedTriadQuestion;

    setNoteTriadName(noteTriadName);
    setCorrectAnswer(correctAnswer as Note[]);
    setRootNote(rootNote);
  }, [selectedScale]);

  useEffect(() => {
    randomizeQuestion();
  }, [randomizeQuestion]);

  return {
    randomizeQuestion,
    rootNote,
    noteTriadName,
    correctAnswer,
  };
}
