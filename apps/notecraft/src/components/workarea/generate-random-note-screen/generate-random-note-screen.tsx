'use client';
import TrainerLayout from '@/components/common/layouts/trainer.layout';
import Typography from '@/components/common/typography';
import Controls from '@/components/workarea/generate-random-note-screen/components/controls';
import Stack from '@repo/ui/components/stack';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '../../../types/scale.types';
import cn from '@repo/ui/utils/cn';
import useLocalStorage from '@/utils/use-local-storage';

const INITIAL_SCALE: Scale = 'C major';

export default function GenerateRandomNoteScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedScale, setSelectedScale] = useLocalStorage<Scale>(
    'generate-random-note-scale',
    INITIAL_SCALE
  );
  const [noteCount, setNoteCount] = useState(1);

  const generateNotes = useCallback(() => {
    if (!selectedScale) {
      return;
    }
    const randomNotes: Note[] = [];
    // Generate noteCount random notes
    for (let i = 0; i < noteCount; i++) {
      const randomNote = generateRandomNotePerScale(selectedScale);
      randomNotes.push(randomNote);
    }
    setNotes(randomNotes);
  }, [selectedScale, noteCount]);

  useEffect(() => {
    generateNotes();
  }, [selectedScale, noteCount, generateNotes]);

  return (
    <TrainerLayout title='Generate Random Notes'>
      <div className='flex-1 py-10 w-full'>
        <Stack className='justify-center w-full h-full gap-8'>
          <div
            className={cn(
              'w-full aspect-[3/1] h-full',
              'rounded-xl',
              'border-[2px] border-red/25',
              'bg-gray/10',
              'p-4'
            )}
          >
            <Stack
              className={cn(
                'h-full',
                'rounded-xl',
                'p-4',
                'border border-gray/20',
                'justify-center items-center'
              )}
            >
              <Typography className='gap-3 text-center' variant='heading-lg'>
                {notes.map((note, i) => (
                  <span key={`${note}-${i}`}>{note} </span>
                ))}
              </Typography>
            </Stack>
          </div>
          <Controls
            onChangeNoteCount={setNoteCount}
            onGenerate={generateNotes}
            onSelectScale={setSelectedScale}
            noteCount={noteCount}
            scale={selectedScale}
          />
        </Stack>
      </div>
    </TrainerLayout>
  );
}

function generateRandomNotePerScale(scale: Scale) {
  const scaleNotes = getMajorScaleNotes(scale);
  const randomIndex = Math.floor(Math.random() * scaleNotes.length);

  return scaleNotes[randomIndex];
}
