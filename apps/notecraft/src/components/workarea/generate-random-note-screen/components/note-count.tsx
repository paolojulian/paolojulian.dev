import Typography from '@/components/common/typography';
import cn from '@repo/ui/utils/cn';
import { Fragment, ReactElement } from 'react';

const MIN_NOTE_COUNT = 1;
const MAX_NOTE_COUNT = 5;

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChangeNoteCount: (count: number) => void;
  noteCount: number;
};

export default function NoteCount({ onChangeNoteCount, noteCount }: Props) {
  const isMinCount = noteCount <= MIN_NOTE_COUNT;
  const isMaxCount = noteCount >= MAX_NOTE_COUNT;

  const handleAddNoteCount = () => {
    onChangeNoteCount(noteCount + 1);
  };
  const handleMinusNoteCount = () => {
    onChangeNoteCount(noteCount - 1);
  };

  return (
    <Fragment>
      <div>
        <NoteCountButton onClick={handleMinusNoteCount} isDisabled={isMinCount}>
          <svg
            width='33'
            height='33'
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M27.1666 16.5H5.83325'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </NoteCountButton>
      </div>
      <div>
        <div
          className={cn(
            'w-full aspect-square',
            'bg-white text-black',
            'justify-center items-center flex',
            'rounded-xl'
          )}
        >
          <Typography variant='heading-sm'>{noteCount}</Typography>
        </div>
      </div>
      <div>
        <NoteCountButton onClick={handleAddNoteCount} isDisabled={isMaxCount}>
          <svg
            width='33'
            height='33'
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.5 5.83325V27.1666M27.1667 16.4999H5.83337'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </NoteCountButton>
      </div>
    </Fragment>
  );
}

type NoteCountButtonProps = {
  onClick: () => void;
  children: ReactElement;
  isDisabled: boolean;
};
function NoteCountButton({
  onClick,
  children,
  isDisabled,
}: NoteCountButtonProps) {
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={cn(
        'w-full aspect-square',
        'rounded-xl',
        'bg-gray/10 border border-gray/10',
        'flex justify-center items-center',
        {
          'text-white': !isDisabled,
          'text-white/25': isDisabled,
        }
      )}
    >
      {children}
    </button>
  );
}
