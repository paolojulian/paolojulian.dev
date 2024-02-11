import GuitarFretboard from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden py-10'>
      <Typography variant='body-wide'>NOTE MASTERY</Typography>
      <Link href={'/note-trainer/fretboard-mastery'}>Fretboard Mastery</Link>
    </main>
  );
}
