'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import NoteChoices from '@/components/common/note-choices';
import PlayPauseNote from '@/components/common/play-pause-note';
import SelectScale from '@/components/common/select-scale/select-scale';
import EarTrainingResult from '@/components/workarea/ear-training-screen/components/ear-training-result';
import { Note, Tone } from '@/types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '@/types/scale.types';
import {
  generateRandomNotePerScale,
  generateRandomTone,
} from '@/utils/generate-random-note-per-scale';
import PreloadNotes from '@/utils/preload-notes';
import useLocalStorage from '@/utils/use-local-storage';
import { memo, useEffect, useState } from 'react';

const MemoizedPreloadNotes = memo(PreloadNotes);

type DisplayTypes = 'question' | 'result';

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
  const [displayType, setDisplayType] = useState<DisplayTypes>('question');

  const handleSelectNote = (note: Note) => {
    setSelectedNotes(note);
    setDisplayType('result');
  };
  const handleGenerateNotes = () => getMajorScaleNotes(selectedScale);

  const generateNewNoteAndTone = () => {
    const randomNote = generateRandomNotePerScale(selectedScale);
    const randomTone = generateRandomTone();
    setRandomNote(randomNote);
    setRandomTone(randomTone);
  };

  const handleNext = () => {
    setDisplayType('question');
    setSelectedNotes(undefined);
    generateNewNoteAndTone();
  };

  useEffect(() => {
    generateNewNoteAndTone();
  }, [selectedScale]);

  return (
    <TrainerLayout title='Ear Training'>
      <MemoizedPreloadNotes>
        <>
          <PlayPauseNote key={randomNote} note={randomNote} tone={randomTone} />
          {displayType === 'question' && (
            <>
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
              />
            </>
          )}
          {displayType === 'result' && (
            <EarTrainingResult
              correctNote={randomNote}
              isCorrect={randomNote === selectedNote}
              onNext={handleNext}
            />
          )}
        </>
      </MemoizedPreloadNotes>
    </TrainerLayout>
  );
}
