import Container from '@repo/ui/components/container';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function HeroSection() {
  return (
    <>
      <Container className='min-h-screen'>
        <Stack className='gap-2 min-h-screen pb-24' shouldCenterContents>
          <Typography className='text-gray tracking-[0.24rem]' fontSize={'lg'}>
            PAOLO JULIAN
          </Typography>
          <Stack shouldCenterContents>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              KEEPING
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              THINGS
            </Typography>
            <Typography
              className='text-secondary'
              fontSize={'heading-1'}
              fontWeight={'bold'}
            >
              SIMPLE
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              SINCE
            </Typography>
            <Typography fontSize={'heading-1'} fontWeight={'bold'}>
              2017
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
