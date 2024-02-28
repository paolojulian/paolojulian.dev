'use client';
import Container from '@/app/note-trainer/_components/common/container';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import SelectScale from '@/app/note-trainer/_components/common/select-scale';
import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { MAJOR_SCALES, Scale } from '@/app/note-trainer/_types/scale.types';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const INITIAL_SCALE: Scale = 'E major';

export default function GenerateRandomNoteScreen() {
  const [note, setNote] = useState<Note>();
  const [selectedScale, setSelectedScale] = useState<Scale>(INITIAL_SCALE);

  const generateNote = () => {
    if (!selectedScale) {
      return;
    }
    const randomNote = generateRandomNotePerScale(selectedScale);
    // Avoid same note at the same time
    if (randomNote === note) {
      generateNote();
      return;
    }
    setNote(randomNote);
  };

  useEffect(() => {
    generateNote();
  }, [selectedScale]);

  return (
    <div className='py-6 h-full overflow-x-hidden'>
      <Stack className={'items-center h-full w-full'}>
        <SectionTitle title='Random Note Generator' />
        <Container className='flex-1 py-10 w-full'>
          <Stack className='justify-center w-full h-full gap-8'>
            <Stack className='-mx-6 bg-primary h-[180px] w-screen justify-center items-center'>
              <Typography
                className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
                variant='heading-xl'
              >
                {note}
              </Typography>
            </Stack>
            <Row className='justify-center gap-3'>
              <SelectScale
                initialScale={INITIAL_SCALE}
                onSelectScale={setSelectedScale}
              />
              <button
                className={cn(
                  'flex-1',
                  'px-6 py-4',
                  'border-[3px] border-primary focus:border-white rounded-lg',
                  'focus:ring-white focus:outline-none'
                )}
                onClick={generateNote}
              >
                <Typography className='text-primary'>Generate</Typography>
              </button>
            </Row>
          </Stack>
        </Container>
        <Link href='/note-trainer/menu'>
          <Typography
            variant='body-wide'
            className='text-secondary uppercase py-5 w-full text-center'
          >
            Back to menu
          </Typography>
        </Link>
      </Stack>
    </div>
  );
}

function generateRandomNotePerScale(scale: Scale) {
  const scaleNotes = MAJOR_SCALES[scale];
  const randomIndex = Math.floor(Math.random() * scaleNotes.length);

  return scaleNotes[randomIndex];
}
