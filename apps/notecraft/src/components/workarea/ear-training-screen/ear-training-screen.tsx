'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import NoteChoices from '@/components/common/note-choices';
import PlayPauseNote from '@/components/common/play-pause-note';
import SelectScale from '@/components/common/select-scale/select-scale';
import EarTrainingResult from '@/components/workarea/ear-training-screen/components/ear-training-result';
import useGenerator from '@/components/workarea/ear-training-screen/hooks/use-generator';
import { Note } from '@/types/note-trainer.types';
import { Scale } from '@/types/scale.types';
import PreloadNotes from '@/utils/preload-notes';
import useLocalStorage from '@/utils/use-local-storage';
import { memo, useState } from 'react';

const MemoizedPreloadNotes = memo(PreloadNotes);

type DisplayTypes = 'question' | 'result';

const INITIAL_SCALE: Scale = 'C major';

export default function EarTrainingScreen() {
  const [selectedNote, setSelectedNotes] = useState<Note>();
  const [selectedScale, setSelectedScale] = useLocalStorage<Scale>(
    'ear-training-scale',
    INITIAL_SCALE
  );
  const [displayType, setDisplayType] = useState<DisplayTypes>('question');

  const {
    randomNote,
    randomTone,
    handleGenerateNotes,
    generateNewNoteAndTone,
  } = useGenerator(selectedScale);

  const handleSelectNote = (note: Note) => {
    setSelectedNotes(note);
    setDisplayType('result');
  };
  const handleNext = () => {
    setDisplayType('question');
    setSelectedNotes(undefined);
    generateNewNoteAndTone();
  };

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
