'use client';

import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard';
import { NOTE_LOCATIONS } from '@/app/note-trainer/_note-trainer.types';
import { useState } from 'react';

export default function FretboardMasteryPage() {
  const [randomNoteLocation, setRandomNoteLocation] = useState(
    NOTE_LOCATIONS[0]
  );

  const generateRandomNoteLocation = () => {
    const randomIndex = Math.floor(Math.random() * NOTE_LOCATIONS.length);
    setRandomNoteLocation(NOTE_LOCATIONS[randomIndex]);
  };

  return (
    <div className='flex flex-col gap-20 justify-center items-center py-40'>
      <GuitarFretboard
        note={randomNoteLocation.note}
        fretNumber={randomNoteLocation.fretNumber}
        string={randomNoteLocation.string}
      />
      <button onClick={generateRandomNoteLocation}>Generate Random Note</button>
    </div>
  );
}
