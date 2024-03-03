'use client';

import NoteChoices from '@/app/note-trainer/_components/common/note-choices/note-choices';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import TriadsScreenNotes from '@/app/note-trainer/_components/workarea/triads-scren/triads-screen-notes';
import TriadsScreenQuestion from '@/app/note-trainer/_components/workarea/triads-scren/triads-screen-question';
import { generateTriadQuestion } from '@/app/note-trainer/_components/workarea/triads-scren/triads-screen.utils';
import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { Scale } from '@/app/note-trainer/_types/scale.types';
import Container from '@repo/ui/components/container';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

export type DisplayState = 'question' | 'answer';

export default function TriadsWorkArea() {
  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [selectedScale, setSelectedScale] = useState<Scale>('E major');
  const [rootNote, setRootNote] = useState<Note>();
  const [noteTriadName, setNoteTriadName] = useState('');

  const [answer, setAnswer] = useState<(string | undefined)[]>();

  useEffect(() => {
    const { rootNote, correctAnswer, noteTriadName } =
      generateTriadQuestion(selectedScale);

    setNoteTriadName(noteTriadName);
    setAnswer(correctAnswer);
    setRootNote(rootNote);
  }, []);

  const handleNext = () => {};
  const handleSelectNote = () => {};

  return (
    <div className='py-6 h-full'>
      <Stack className={'items-center h-full w-full'}>
        <SectionTitle title='Triads' />

        <Container className='w-full h-full flex flex-col gap-6 py-12'>
          <Fragment>
            {/* Display Notes */}
            <TriadsScreenNotes rootNote={rootNote} otherNotes={[]} />

            {/* Question */}
            <TriadsScreenQuestion
              noteTriadName={noteTriadName}
              scaleName={selectedScale}
            />

            {/* Note Choices */}
            {!!rootNote && (
              <Row className='justify-center'>
                <NoteChoices onSelectNote={handleSelectNote} />
              </Row>
            )}
          </Fragment>
        </Container>

        <TriadsFooter onNext={handleNext} displayState={displayState} />
      </Stack>
    </div>
  );
}

function TriadsFooter({
  onNext,
  displayState,
}: {
  onNext: () => void;
  displayState: DisplayState;
}) {
  const textContainer = (text: string) => (
    <Typography
      variant='body-wide'
      className='text-secondary uppercase py-5 w-full text-center'
    >
      {text}
    </Typography>
  );

  if (displayState === 'answer') {
    return <button onClick={onNext}>{textContainer('Next')}</button>;
  }

  return <Link href='/note-trainer/menu'>{textContainer('Back to menu')}</Link>;
}
