import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { getNotes } from '@/app/note-trainer/_utils/get-notes';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import { useMemo } from 'react';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelectNote: (note: Note) => void;
  generateNotes?: () => Note[];
  selectedNotes?: Note[];
  shouldShuffleNotes?: boolean;
}

export default function NoteChoices({
  onSelectNote,
  generateNotes = getNotes,
  selectedNotes = [],
  shouldShuffleNotes = false,
}: Props) {
  const shuffledNotes = useMemo(() => {
    const notes = generateNotes();

    return shouldShuffleNotes ? shuffleArray(notes) : notes;
  }, [shouldShuffleNotes]);

  const checkIfSelected = (note: Note) => {
    return selectedNotes.includes(note);
  };

  return (
    <div className={cn('grid grid-cols-3 gap-6 w-fit')}>
      {shuffledNotes.map((note, i) => (
        <NoteChoicesButton
          onSelect={onSelectNote}
          key={`${note}_${i}`}
          note={note}
          isSelected={checkIfSelected(note)}
        />
      ))}
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
    <button className={'relative w-fit group'} onClick={handleClick}>
      {/* Circle */}
      <div
        className={cn(
          'w-20 h-20 rounded-full',
          'group-active:scale-90 duration-200 ease-in-out',
          {
            ['bg-primary bg-opacity-50 scale-95']: isSelected,
            ['bg-[#9CA3AF] bg-opacity-15']: !isSelected,
          }
        )}
      ></div>

      {/* Note */}
      <div className={'absolute inset-0 flex items-center justify-center'}>
        <Typography variant={'heading'}>{note}</Typography>
      </div>
    </button>
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
