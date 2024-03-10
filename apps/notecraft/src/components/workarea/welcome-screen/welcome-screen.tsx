import Button from '../../common/button';
import Container from '../../common/container';
import SectionTitle from '../../common/section-title';
import getAssetURL from '../../../utils/asset-map';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Image from 'next/image';

export default function WelcomeScreen() {
  return (
    <Container className='py-6 h-full relative bg-black'>
      <>
        <Image
          className='-z-10 pointer-events-none'
          src={getAssetURL('welcome-screen')}
          alt='welcome-screen-background'
          quality={90}
          fill
        />
        <Stack className='h-full justify-between items-center'>
          <SectionTitle title='Note Trainer' />
          <Stack className='items-center gap-2'>
            <Typography variant={'heading-lg'}>Welcome</Typography>
            <Typography variant={'body'} className='text-gray'>
              Are you ready to master the fretboard?
            </Typography>
          </Stack>
          <Button title='Get Started!' type='link' href='/menu' />
        </Stack>
      </>
    </Container>
  );
}
