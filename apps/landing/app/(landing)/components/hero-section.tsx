import { Container } from '../../../components/Container';
import Highlight from './highlight';
import { PTypography, Stack } from '@paolojulian.dev/design-system';

export default async function HeroSection() {
  return (
    <Container className='min-h-screen'>
      <Stack
        className='gap-10 min-h-screen pb-24'
        alignItems='center'
        justifyContent='center'
      >
        <PTypography className='text-gray' variant='body-wide'>
          PAOLO JULIAN
        </PTypography>
        <Stack alignItems='center' justifyContent='center'>
          <PTypography variant='heading-xl'>KEEPING</PTypography>
          <PTypography variant='heading-xl'>THINGS</PTypography>
          <PTypography variant='heading-xl'>
            <Highlight>SIMPLE</Highlight>
          </PTypography>
          <PTypography variant='heading-xl'>SINCE</PTypography>
          <PTypography variant='heading-xl'>2017</PTypography>
        </Stack>
      </Stack>
    </Container>
  );
}
