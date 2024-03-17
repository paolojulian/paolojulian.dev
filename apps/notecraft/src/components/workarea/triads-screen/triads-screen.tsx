'use client';

import TrainerLayout from '@/components/common/layouts/trainer.layout';
import { Fragment, useState } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '../../../types/scale.types';
import NoteChoices from '../../common/note-choices/note-choices';
import useAnswerChecker from './hooks/use-answer-checker';
import { useQuestionGenerator } from './hooks/use-question-generator';
import { useSelectedNotes } from './hooks/use-selected-notes';
import TriadsAnswerSection from './triads-answer-section';
import TriadsScreenNotes from './triads-screen-notes';
import SelectScale from '@/components/common/select-scale/select-scale';
import useLocalStorage from '@/utils/use-local-storage';

export type DisplayState = 'question' | 'answer';

export default function TriadsWorkArea() {
  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [selectedScale, setSelectedScale] = useLocalStorage<Scale>(
    'scale',
    'C major'
  );

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

  const handleGenerateNotes = () => getMajorScaleNotes(selectedScale);

  const handleNext = () => {
    setDisplayState('question');
    resetSelectedNotes();
    randomizeQuestion();
  };

  return (
    <TrainerLayout title='Triads'>
      <Fragment>
        {/* Display Notes */}
        <TriadsScreenNotes
          rootNote={rootNote}
          otherNotes={selectedNotes}
          noteTriadName={noteTriadName}
          selectedScale={selectedScale}
        />

        <div className='w-full'>
          <SelectScale
            initialScale={selectedScale}
            onSelectScale={setSelectedScale}
          />
        </div>

        {displayState === 'question' ? (
          <Fragment>
            {/* Note Choices */}
            {!!rootNote && (
              <NoteChoices
                key={selectedScale}
                onSelectNote={handleSelectNote}
                generateNotes={handleGenerateNotes}
                gridType='7'
                title={noteTriadName}
                selectedNotes={[rootNote, ...selectedNotes]}
                shouldShuffleNotes={true}
              />
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
