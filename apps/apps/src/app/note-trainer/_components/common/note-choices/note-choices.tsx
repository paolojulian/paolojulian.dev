import { getNotes } from '@/app/note-trainer/_utils/get-notes';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';

export default function NoteChoices() {
  return (
    <div className={cn('grid grid-cols-3 gap-6')}>
      {getNotes().map((note, i) => (
        <NoteChoicesButton key={`${note}_${i}`} note={note} />
      ))}
    </div>
  );
}

function NoteChoicesButton({ note }: { note: string }) {
  return (
    <button className={'relative w-fit group'}>
      {/* Circle */}
      <div className='rounded-full bg-[#9CA3AF] bg-opacity-15 w-20 h-20 group-active:scale-90 duration-200 ease-in-out'></div>

      {/* Note */}
      <div className={'absolute inset-0 flex items-center justify-center'}>
        <Typography variant={'heading'}>{note}</Typography>
      </div>
    </button>
  );
}
