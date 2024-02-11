import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard';
import Typography from '@repo/ui/components/typography';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden py-10'>
      <Typography variant='body-wide'>NOTE MASTERY</Typography>
      <div className='py-20'>
        <GuitarFretboard note='C#' fretNumber={14} string='B' />
      </div>
    </main>
  );
}
