'use client';

import SuccessFailCard from '@/components/common/success-fail-card';
import { Note } from '../../../types/note-trainer.types';
import Stack from '@repo/ui/components/stack';
import cn from '@repo/ui/utils/cn';
import { Fragment } from 'react';
import Typography from '@/components/common/typography/typography';

export default function FretboardMasteryAnswer({
  onNext,
  correctNote,
  isCorrect,
}: {
  onNext: () => void;
  correctNote: Note;
  isCorrect: boolean;
}) {
  const answerText = isCorrect ? (
    <Fragment>
      <div>You</div>
      <div>are</div>
      <div>correct</div>
    </Fragment>
  ) : (
    <Fragment>
      <div>You</div>
      <div>are</div>
      <div>wrong</div>
    </Fragment>
  );

  return (
    <Fragment>
      <SuccessFailCard
        onClick={onNext}
        title={answerText}
        type={isCorrect ? 'success' : 'fail'}
      >
        <div
          className={cn(
            'aspect-square w-16',
            'rounded-xl',
            'flex items-center justify-center',
            {
              ['bg-green']: isCorrect,
              ['bg-red']: !isCorrect,
            }
          )}
        >
          <Typography
            className={cn('uppercase', 'text-black')}
            variant='heading-sm'
          >
            {correctNote}
          </Typography>
        </div>
      </SuccessFailCard>
    </Fragment>
  );
}
