import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function AboutSection() {
  return (
    <Stack className='gap-10'>
      <SectionHeader title='About' />
      <Typography
        fontSize={'heading-2'}
        fontWeight={'semi-bold'}
        fontFamily='text'
      >
        I’m a Full Stack Developer who specializes in{' '}
        <span className='text-secondary'>Front-end Development</span>. I write
        complex garbage code for a living, but I always try to find a way to
        keep it simpler.
      </Typography>
    </Stack>
  );
}
