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
import { Scale, getMajorScaleNotes } from '../../../types/scale.types';
import Container from '@repo/ui/components/container';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import TrainerLayout from '@/components/common/layouts/trainer.layout';

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
    <TrainerLayout title='Triads'>
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
                  gridType='7'
                  title='Select Correct Notes'
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
    </TrainerLayout>
  );
}
