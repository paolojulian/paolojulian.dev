import Container from '@/app/note-trainer/_components/common/container';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import MenuItem from '@/app/note-trainer/_components/menu-screen/menu-item';
import getAssetURL from '@/app/note-trainer/_utils/asset-map';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function MenuScreen() {
  return (
    <Container className='py-6 h-full'>
      <Stack className='items-center'>
        <SectionTitle title='Note Trainer' />

        <Stack className='gap-4 items-start w-full py-12'>
          <Typography className='text-gray' variant={'body'}>
            Choose a practice method.
          </Typography>
          <Stack className='gap-6 items-stretch w-full'>
            <MenuItem
              imageURL={getAssetURL('fretboard-training')}
              title='Fretboard Training'
            />
            <MenuItem
              imageURL={getAssetURL('ear-training')}
              title='Ear Training'
            />
            <MenuItem
              imageURL={getAssetURL('triads')}
              title='Triads'
            />
            <MenuItem
              imageURL={getAssetURL('random-note')}
              title='Random Note Generator'
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
