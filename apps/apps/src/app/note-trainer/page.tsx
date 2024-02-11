import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard';
import Typography from '@repo/ui/components/typography';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Typography variant='body-wide'>NOTE MASTERY</Typography>
      <GuitarFretboard note="C#" fretNumber={14} string='B' />
    </main>
  );
}
