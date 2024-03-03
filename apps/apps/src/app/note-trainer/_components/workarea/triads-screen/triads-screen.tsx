'use client';

import NoteChoices from '@/app/note-trainer/_components/common/note-choices/note-choices';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import TriadsAnswerSection from '@/app/note-trainer/_components/workarea/triads-screen/triads-answer-section';
import TriadsScreenNotes from '@/app/note-trainer/_components/workarea/triads-screen/triads-screen-notes';
import TriadsScreenQuestion from '@/app/note-trainer/_components/workarea/triads-screen/triads-screen-question';
import {
  checkIfAnswerIsCorrect,
  generateTriadQuestion,
  getScaleRootNotes,
} from '@/app/note-trainer/_components/workarea/triads-screen/triads-screen.utils';
import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { Scale } from '@/app/note-trainer/_types/scale.types';
import Container from '@repo/ui/components/container';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useState } from 'react';

export type DisplayState = 'question' | 'answer';

export default function TriadsWorkArea() {
  const [displayState, setDisplayState] = useState<DisplayState>('question');
  const [selectedScale, setSelectedScale] = useState<Scale>('E major');
  const [rootNote, setRootNote] = useState<Note>();
  const [noteTriadName, setNoteTriadName] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState<Note []>(
    []
  );
  const [selectedNotes, setSelectedNotes] = useState<Note[]>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleNext = () => {
    setIsAnswerCorrect(false);
    setDisplayState('question');
    setSelectedNotes([]);
    randomizeQuestion();
  };

  const handleSetAnswer = (isCorrect: boolean) => {
    setIsAnswerCorrect(isCorrect);
    setDisplayState('answer');
  };

  const handleCheckAnswer = useCallback(() => {
    if (!rootNote) {
      return;
    }

    const answer = [rootNote, ...selectedNotes];
    handleSetAnswer(checkIfAnswerIsCorrect(answer, correctAnswer));
  }, [correctAnswer, selectedNotes]);

  const handleSelectNote = (note: Note) => {
    // If the selected note is already selected, remove it entirely
    if (selectedNotes.includes(note)) {
      return setSelectedNotes((prev) => {
        const index = selectedNotes.indexOf(note);

        // Create a new array containing only elements before the specified index
        return prev.slice(0, index);
      });
    }

    // Remove everything if the root not is pressed
    if (note === rootNote) {
      return setSelectedNotes([]);
    }

    setSelectedNotes((prev) => [...prev, note]);
  };

  const randomizeQuestion = useCallback(() => {
    if (!selectedScale) return;

    const { rootNote, correctAnswer, noteTriadName } =
      generateTriadQuestion(selectedScale);

    setNoteTriadName(noteTriadName);
    setCorrectAnswer(correctAnswer as Note[]);
    setRootNote(rootNote);
  }, [selectedScale]);

  useEffect(() => {
    randomizeQuestion();
  }, [randomizeQuestion]);

  useEffect(() => {
    if (selectedNotes.length < 2) {
      return;
    }

    // - 1 because root note is included on the correct answer
    if (selectedNotes.length >= correctAnswer.length - 1) {
      handleCheckAnswer();
    }
  }, [selectedNotes, correctAnswer, handleCheckAnswer]);

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
                      generateNotes={() => getScaleRootNotes(selectedScale)}
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
