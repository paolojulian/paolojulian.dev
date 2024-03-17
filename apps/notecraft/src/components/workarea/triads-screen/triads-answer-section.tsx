'use client';

import SuccessFailCard from '@/components/common/success-fail-card';
import Typography from '@/components/common/typography';
import cn from '@repo/ui/utils/cn';
import { Fragment } from 'react';
import { Note } from '../../../types/note-trainer.types';
import Stack from '@repo/ui/components/stack';
import Row from '@repo/ui/components/row';

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
      <SuccessFailCard
        onClick={onNext}
        title={answerText}
        type={isCorrect ? 'success' : 'fail'}
      >
        <Stack className='gap-3'>
          <Typography variant='body-wide'>CORRECT NOTES</Typography>
          <Row className='gap-3'>
            {correctNotes.map((correctNote, i) => (
              <div
                key={`${correctNote}_${i}`}
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
            ))}
          </Row>
        </Stack>
      </SuccessFailCard>
      {/* <Typography className='text-center' variant={'body'}>
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
      </Stack> */}
    </Fragment>
  );
}
