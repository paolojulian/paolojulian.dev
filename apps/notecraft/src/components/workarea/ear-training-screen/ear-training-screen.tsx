'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import NoteChoices from '@/components/common/note-choices';
import PlayPauseNote from '@/components/common/play-pause-note';
import SelectScale from '@/components/common/select-scale/select-scale';
import EarTrainingResult from '@/components/workarea/ear-training-screen/components/ear-training-result';
import useGenerator from '@/components/workarea/ear-training-screen/hooks/use-generator';
import { Note } from '@/types/note-trainer.types';
import { Scale } from '@/types/scale.types';
import useLocalStorage from '@/utils/use-local-storage';
import { ComponentProps, useState } from 'react';

type DisplayTypes = 'question' | 'result';

const INITIAL_SCALE: Scale = 'Chromatic';

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

  const gridType: ComponentProps<typeof NoteChoices>['gridType'] =
    selectedScale === 'Chromatic' ? '12' : '7';

  return (
    <TrainerLayout title='Ear Training'>
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
              gridType={gridType}
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
    </TrainerLayout>
  );
}
