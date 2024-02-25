'use client';

import { DisplayState } from '@/app/note-trainer/_components/fretboard-mastery/fretboard-mastery';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function FretboardMasteryFooter({
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
