import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { historyList } from './_constants';

export default function HistorySection() {
  return (
    <section id='history'>
      <Stack className='gap-20 my-20'>
        <Stack className='gap-10'>
          <SectionHeader title='History' />
          <Typography className='text-white' variant='heading-lg'>
            Allow me to share my <span className='text-primary'>journey</span>,
            spanning from my early childhood years to the start of my Software
            Engineer journey.
          </Typography>
        </Stack>

        <ul className='flex flex-col gap-8'>
          {historyList.map(({ title, description }, i) => (
            <li
              className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
              key={`${i}-${title}`}
            >
              <Typography as='h3' className='text-white'>
                {title}
              </Typography>
              <Typography weight={'ce-demi'} className='text-gray'>
                {description}
              </Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
}
