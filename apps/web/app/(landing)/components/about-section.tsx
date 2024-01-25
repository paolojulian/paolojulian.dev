import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Highlight from './highlight';

export default function AboutSection() {
  return (
    <Stack className='gap-52'>
      <Stack className='gap-10'>
        <SectionHeader title='About' />
        <Typography variant='heading-lg'>
          I’m a Full Stack Developer who specializes in{' '}
          <Highlight>Front-end Development</Highlight>. I write garbage code for
          a living.
        </Typography>
      </Stack>
      <Stack className='gap-10'>
        <Typography variant='body-wide'>WHAT I DO</Typography>
        <Stack>
          <Typography
            className='border-t border-gray-darker/50'
            variant='heading-xl'
          >
            CODE
          </Typography>
          <Typography
            className='border-t border-gray-darker/50'
            variant='heading-xl'
          >
            DESIGN
          </Typography>
          <Typography
            className='border-t border-gray-darker/50'
            variant='heading-xl'
          >
            JAVASCRIPT
          </Typography>
          <Typography
            className='border-t border-gray-darker/50'
            variant='heading-xl'
          >
            A.I. PROMPTER
          </Typography>
          <Typography
            className='border-y border-gray-darker/50'
            variant='heading-xl'
          >
            WRITE ARTICLES
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
