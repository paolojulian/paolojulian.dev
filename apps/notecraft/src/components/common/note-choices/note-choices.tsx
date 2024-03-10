import NoteChoice from '@/components/common/note-choice';
import cn from '@repo/ui/utils/cn';
import { useMemo } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { getNotes } from '../../../utils/get-notes';
import Typography from '@/components/common/typography/typography';

type GridType = '7' | '12';
const GRIDS: Record<GridType, number[][]> = {
  12: [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
  ],
  7: [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ],
};

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelectNote: (note: Note) => void;
  generateNotes?: () => Note[];
  selectedNotes?: Note[];
  shouldShuffleNotes?: boolean;
  title?: string;
  footer?: string;
  gridType?: GridType;
}

export default function NoteChoices({
  onSelectNote,
  generateNotes = getNotes,
  selectedNotes = [],
  shouldShuffleNotes = false,
  gridType = '12',
  title,
  footer,
}: Props) {
  const shuffledNotes = useMemo(() => {
    const notes = generateNotes();

    return shouldShuffleNotes ? shuffleArray(notes) : notes;
  }, [shouldShuffleNotes]);

  const checkIfSelected = (note: Note) => {
    return selectedNotes.includes(note);
  };

  const copyOfShuffledNotes = [...shuffledNotes];

  const getNote = (cell: number) => {
    if (cell === 1) {
      return copyOfShuffledNotes.shift();
    }
    return undefined;
  };
  const grid = GRIDS[gridType];

  return (
    <div className={cn('relative w-full grid grid-cols-4 gap-3 m-6')}>
      {/* Header */}
      <div className='absolute left-0 top-0'>
        <Typography className='uppercase max-w-28' variant='heading-sm'>
          {title}
        </Typography>
      </div>

      {/* Footer */}
      <div className='absolute right-0 bottom-0'>
        <Typography className='text-gray' variant='body-md'>
          {footer}
        </Typography>
      </div>

      {grid.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          const note = getNote(cell);

          return (
            <div
              key={`${rowIndex}_${cellIndex}`}
              className='w-full aspect-square'
            >
              {note && (
                <NoteChoicesButton
                  onSelect={onSelectNote}
                  note={note}
                  isSelected={checkIfSelected(note)}
                />
              )}
            </div>
          );
        });
      })}
    </div>
  );
}

interface NoteChoicesButtonProps {
  // eslint-disable-next-line no-unused-vars
  onSelect: (note: Note) => void;
  note: Note;
  isSelected?: boolean;
}

function NoteChoicesButton({
  onSelect,
  note,
  isSelected,
}: NoteChoicesButtonProps) {
  const handleClick = () => {
    onSelect(note);
  };

  return (
    <NoteChoice
      onClick={handleClick}
      variant={isSelected ? 'selected' : 'default'}
      note={note}
      noteNumber={1}
    />
  );
}

function shuffleArray<T>(answer: T[]): T[] {
  const copy = Array.from(answer);
  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}
