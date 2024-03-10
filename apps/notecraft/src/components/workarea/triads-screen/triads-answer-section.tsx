'use client';

import { Note } from '../../../types/note-trainer.types';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import { Fragment } from 'react';

export default function TriadsAnswerSection({
  onNext,
  correctNotes,
  isCorrect,
}: {
  onNext: () => void;
  correctNotes: Note[];
  isCorrect: boolean;
}) {
  const answerText = isCorrect ? 'Correct!' : 'Wrong';

  return (
    <Fragment>
      <Typography className='text-center' variant={'body'}>
        "Your answer is{' '}
        <span
          className={cn({
            ['text-primary']: !isCorrect,
            ['text-green-400']: isCorrect,
          })}
        >
          {answerText}
        </span>
        "
      </Typography>
      <Stack
        className='justify-center items-center flex-1 gap-2 text-green-400 w-full'
        onClick={onNext}
      >
        <Typography variant='body-wide'>CORRECT NOTE</Typography>
        <Typography
          className={cn('uppercase', {
            ['text-primary']: !isCorrect,
            ['text-green-400']: isCorrect,
          })}
          variant='heading-lg'
        >
          {correctNotes.join('-')}
        </Typography>
      </Stack>
    </Fragment>
  );
}
