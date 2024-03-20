import { Note, Tone } from '@/types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '@/types/scale.types';
import {
  generateRandomNotePerScale,
  generateRandomTone,
} from '@/utils/generate-random-note-per-scale';
import { useEffect, useState } from 'react';

const useGenerator = (selectedScale: Scale) => {
  const [randomNote, setRandomNote] = useState<Note>(
    generateRandomNotePerScale(selectedScale)
  );
  const [randomTone, setRandomTone] = useState<Tone>(generateRandomTone());

  const handleGenerateNotes = () => getMajorScaleNotes(selectedScale);

  const generateNewNoteAndTone = () => {
    const randomNote = generateRandomNotePerScale(selectedScale);
    const randomTone = generateRandomTone();
    setRandomNote(randomNote);
    setRandomTone(randomTone);
  };

  useEffect(() => {
    generateNewNoteAndTone();
  }, [selectedScale]);

  return {
    randomNote,
    randomTone,
    generateNewNoteAndTone,
    handleGenerateNotes,
  };
};

export default useGenerator;
