import Container from '../../common/container';
import SectionTitle from '../../common/section-title';
import MenuItem from './menu-item';
import getAssetURL from '../../../utils/asset-map';
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
              href='/note-trainer/fretboard-mastery'
              imageURL={getAssetURL('fretboard-training')}
              title='Fretboard Training'
            />
            <MenuItem
              href='/note-trainer/fretboard-mastery'
              imageURL={getAssetURL('ear-training')}
              title='Ear Training'
            />
            <MenuItem
              href='/note-trainer/triads'
              imageURL={getAssetURL('triads')}
              title='Triads'
            />
            <MenuItem
              href='/note-trainer/generate-random-note'
              imageURL={getAssetURL('random-note')}
              title='Random Note Generator'
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
