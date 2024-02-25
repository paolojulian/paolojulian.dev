import { Note } from '@/app/note-trainer/_note-trainer.types';
import { getNotes } from '@/app/note-trainer/_utils/get-notes';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelectNote: (note: Note) => void;
}

export default function NoteChoices({ onSelectNote }: Props) {
  return (
    <div className={cn('grid grid-cols-3 gap-6 w-fit')}>
      {getNotes().map((note, i) => (
        <NoteChoicesButton
          onSelect={onSelectNote}
          key={`${note}_${i}`}
          note={note}
        />
      ))}
    </div>
  );
}

interface NoteChoicesButtonProps {
  // eslint-disable-next-line no-unused-vars
  onSelect: (note: Note) => void;
  note: Note;
}

function NoteChoicesButton({ onSelect, note }: NoteChoicesButtonProps) {
  const handleClick = () => {
    onSelect(note);
  };

  return (
    <button className={'relative w-fit group'} onClick={handleClick}>
      {/* Circle */}
      <div className='rounded-full bg-[#9CA3AF] bg-opacity-15 w-20 h-20 group-active:scale-90 duration-200 ease-in-out'></div>

      {/* Note */}
      <div className={'absolute inset-0 flex items-center justify-center'}>
        <Typography variant={'heading'}>{note}</Typography>
      </div>
    </button>
  );
}
