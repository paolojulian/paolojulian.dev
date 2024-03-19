'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import NoteChoices from '@/components/common/note-choices';
import PlayPauseNote from '@/components/common/play-pause-note';
import SelectScale from '@/components/common/select-scale/select-scale';
import { Note, Tone } from '@/types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '@/types/scale.types';
import {
  generateRandomNotePerScale,
  generateRandomTone,
} from '@/utils/generate-random-note-per-scale';
import useLocalStorage from '@/utils/use-local-storage';
import { useCallback, useState } from 'react';

const INITIAL_SCALE: Scale = 'C major';

export default function EarTrainingScreen() {
  const [selectedNote, setSelectedNotes] = useState<Note>();
  const [selectedScale, setSelectedScale] = useLocalStorage<Scale>(
    'ear-training-scale',
    INITIAL_SCALE
  );
  const [randomNote, setRandomNote] = useState<Note>(
    generateRandomNotePerScale(selectedScale)
  );
  const [randomTone, setRandomTone] = useState<Tone>(generateRandomTone());
  const handleSelectNote = (note: Note) => {
    setSelectedNotes(note);
  };
  const handleGenerateNotes = () => getMajorScaleNotes(selectedScale);

  const generateNote = useCallback(() => {
    const randomNote = generateRandomNotePerScale(selectedScale);
    const randomTone = generateRandomTone();
    setRandomNote(randomNote);
    setRandomTone(randomTone);
  }, [selectedScale]);

  return (
    <TrainerLayout title='Ear Training'>
      <>
        <PlayPauseNote key={randomNote} note={randomNote} tone={randomTone} />
        <div className='w-full'>
          <SelectScale
            initialScale={selectedScale}
            onSelectScale={setSelectedScale}
          />
        </div>
        <NoteChoices
          key={selectedScale}
          onSelectNote={handleSelectNote}
          generateNotes={handleGenerateNotes}
          gridType='7'
          title={'Select Correct Note'}
          selectedNotes={selectedNote ? [selectedNote] : undefined}
          shouldShuffleNotes={true}
        />
      </>
    </TrainerLayout>
  );
}
