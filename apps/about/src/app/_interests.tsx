import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { interestsList } from './_constants';

export default function InterestsSection() {
  return (
    <section id='interests'>
      <Stack className='gap-20 my-20'>
        <Stack className='gap-10'>
          <SectionHeader title='Interests' />
          <Typography className='text-white' variant='heading-lg'>
            I'm like the{' '}
            <span className='text-primary'>jack of all trades</span>. I want to
            excel in every field. I don't think it's bad; it just shows how
            passionate I am at learning things.
          </Typography>
        </Stack>

        <ul className='flex flex-col gap-8'>
          {interestsList.map(({ title, description }, i) => (
            <li
              className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
              key={`${i}-${title}`}
            >
              <Typography as='h3' className='text-white'>
                {title}
              </Typography>
              <Typography className='text-gray'>{description}</Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
}
