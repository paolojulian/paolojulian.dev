import Container from '@repo/ui/components/container';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function HeroSection() {
  return (
    <>
      <Container className='min-h-screen'>
        <Stack className='gap-10 min-h-screen pb-24' shouldCenterContents>
          <Typography className='text-gray' variant='body-wide'>
            PAOLO JULIAN
          </Typography>
          <Stack shouldCenterContents>
            <Typography variant='heading-xl' weight={'medium'}>
              KEEPING
            </Typography>
            <Typography variant='heading-xl' weight={'medium'}>
              THINGS
            </Typography>
            <Typography
              className='text-primary'
              variant='heading-xl'
              weight={'medium'}
            >
              SIMPLE
            </Typography>
            <Typography variant='heading-xl' weight={'medium'}>
              SINCE
            </Typography>
            <Typography variant='heading-xl' weight={'medium'}>
              2017
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
