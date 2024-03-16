'use client';
import TrainerLayout from '@/components/common/layouts/trainer.layout';
import Typography from '@/components/common/typography';
import Controls from '@/components/workarea/generate-random-note-screen/components/controls';
import Stack from '@repo/ui/components/stack';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '../../../types/scale.types';

const INITIAL_SCALE: Scale = 'E major';

export default function GenerateRandomNoteScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedScale, setSelectedScale] = useState<Scale>(INITIAL_SCALE);
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
          <div className={'-mx-6'}>
            <Stack className=' bg-primary h-[180px] w-full justify-center items-center'>
              <div className='flex gap-3'>
                {notes.map((note, i) => (
                  <Typography variant='heading-lg' key={`${note}_${i}`}>
                    {note}
                  </Typography>
                ))}
              </div>
            </Stack>
          </div>
          <Controls
            onChangeNoteCount={setNoteCount}
            onGenerate={generateNotes}
            onSelectScale={setSelectedScale}
            noteCount={noteCount}
            scale={INITIAL_SCALE}
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
