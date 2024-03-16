'use client';
import TrainerLayout from '@/components/common/layouts/trainer.layout';
import Controls from '@/components/workarea/generate-random-note-screen/components/controls';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { useEffect, useState } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '../../../types/scale.types';

const INITIAL_SCALE: Scale = 'E major';

export default function GenerateRandomNoteScreen() {
  const [note, setNote] = useState<Note>();
  const [selectedScale, setSelectedScale] = useState<Scale>(INITIAL_SCALE);
  const [noteCount, setNoteCount] = useState(1);

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
    <TrainerLayout title='Generate Random Notes'>
      <div className='flex-1 py-10 w-full'>
        <Stack className='justify-center w-full h-full gap-8'>
          <div className={'-mx-6'}>
            <Stack className=' bg-primary h-[180px] w-full justify-center items-center'>
              <Typography
                className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
                variant='heading-xl'
              >
                {note}
              </Typography>
            </Stack>
          </div>
          <Controls
            onChangeNoteCount={setNoteCount}
            onGenerate={generateNote}
            onSelectScale={setSelectedScale}
            noteCount={noteCount}
            scale={INITIAL_SCALE}
          />
        </Stack>
      </div>
    </TrainerLayout>
  );
  // return (
  //   <div className='py-6 h-full overflow-x-hidden'>
  //     <Stack className={'items-center h-full w-full'}>
  //       <SectionTitle title='Random Note Generator' />
  //       <Container className='flex-1 py-10 w-full'>
  //         <Stack className='justify-center w-full h-full gap-8'>
  //           <Stack className='-mx-6 bg-primary h-[180px] w-screen justify-center items-center'>
  //             <Typography
  //               className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
  //               variant='heading-xl'
  //             >
  //               {note}
  //             </Typography>
  //           </Stack>
  //           <Row className='justify-center gap-3'>
  //             <SelectScale
  //               initialScale={INITIAL_SCALE}
  //               onSelectScale={setSelectedScale}
  //             />
  //             <button
  //               className={cn(
  //                 'flex-1',
  //                 'px-6 py-4',
  //                 'border-[3px] border-primary focus:border-white rounded-lg',
  //                 'focus:ring-white focus:outline-none'
  //               )}
  //               onClick={generateNote}
  //             >
  //               <Typography className='text-primary'>Generate</Typography>
  //             </button>
  //           </Row>
  //         </Stack>
  //       </Container>
  //       <Link href='/note-trainer/menu'>
  //         <Typography
  //           variant='body-wide'
  //           className='text-secondary uppercase py-5 w-full text-center'
  //         >
  //           Back to menu
  //         </Typography>
  //       </Link>
  //     </Stack>
  //   </div>
  // );
}

function generateRandomNotePerScale(scale: Scale) {
  const scaleNotes = getMajorScaleNotes(scale);
  const randomIndex = Math.floor(Math.random() * scaleNotes.length);

  return scaleNotes[randomIndex];
}
