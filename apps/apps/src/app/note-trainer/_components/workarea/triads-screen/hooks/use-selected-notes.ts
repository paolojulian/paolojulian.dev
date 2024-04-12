import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { useState } from 'react';

export function useSelectedNotes(rootNote?: Note) {
  const [selectedNotes, setSelectedNotes] = useState<Note[]>([]);

  const handleSelectNote = (note: Note) => {
    // If the selected note is already selected, remove it entirely
    if (selectedNotes.includes(note)) {
      return setSelectedNotes((prev) => {
        const index = selectedNotes.indexOf(note);

        // Create a new array containing only elements before the specified index
        return prev.slice(0, index);
      });
    }

    // Remove everything if the root not is pressed
    if (note === rootNote) {
      return setSelectedNotes([]);
    }

    setSelectedNotes((prev) => [...prev, note]);
  };

  const resetSelectedNotes = () => {
    setSelectedNotes([]);
  };

  return { selectedNotes, handleSelectNote, resetSelectedNotes };
}
