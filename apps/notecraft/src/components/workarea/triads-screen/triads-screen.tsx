'use client';

import NoteChoices from '../../common/note-choices/note-choices';
import SectionTitle from '../../common/section-title';
import useAnswerChecker from './hooks/use-answer-checker';
import { useQuestionGenerator } from './hooks/use-question-generator';
import { useSelectedNotes } from './hooks/use-selected-notes';
import TriadsAnswerSection from './triads-answer-section';
import TriadsScreenNotes from './triads-screen-notes';
import TriadsScreenQuestion from './triads-screen-question';
import { Note } from '../../../types/note-trainer.types';
import {
  Scale,
  getMajorScaleNotes,
} from '../../../types/scale.types';
import Container from '@repo/ui/components/container';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export type DisplayState = 'question' | 'answer';

export default function TriadsWorkArea() {
  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [selectedScale, setSelectedScale] = useState<Scale>('E major');

  const { randomizeQuestion, rootNote, noteTriadName, correctAnswer } =
    useQuestionGenerator(selectedScale);
  const { handleSelectNote, resetSelectedNotes, selectedNotes } =
    useSelectedNotes(rootNote);
  const isAnswerCorrect = useAnswerChecker({
    onAnswerChecked() {
      setDisplayState('answer');
    },
    correctAnswer,
    rootNote,
    selectedNotes,
  });

  const handleNext = () => {
    setDisplayState('question');
    resetSelectedNotes();
    randomizeQuestion();
  };

  return (
    <div className='py-6 h-full'>
      <Stack className={'items-center h-full w-full'}>
        <SectionTitle title='Triads' />

        <Container className='w-full h-full flex flex-col gap-6 py-12'>
          <Fragment>
            {/* Display Notes */}
            <TriadsScreenNotes rootNote={rootNote} otherNotes={selectedNotes} />

            {displayState === 'question' ? (
              <Fragment>
                {/* Question */}
                <TriadsScreenQuestion
                  noteTriadName={noteTriadName}
                  scaleName={selectedScale}
                />

                {/* Note Choices */}
                {!!rootNote && (
                  <Row className='justify-center'>
                    <NoteChoices
                      onSelectNote={handleSelectNote}
                      generateNotes={() => getMajorScaleNotes(selectedScale)}
                      selectedNotes={[rootNote, ...selectedNotes]}
                      shouldShuffleNotes={true}
                    />
                  </Row>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <TriadsAnswerSection
                  onNext={handleNext}
                  correctNotes={correctAnswer as Note[]}
                  isCorrect={isAnswerCorrect}
                />
              </Fragment>
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
