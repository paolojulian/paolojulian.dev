import { historyList } from './_constants';
import {
  PSectionHeader,
  PTypography,
  Stack,
} from '@paolojulian.dev/design-system';

export default function HistorySection() {
  return (
    <section id='history'>
      <Stack className='gap-20 my-20'>
        <Stack className='gap-10'>
          <PSectionHeader title='History' />
          <PTypography className='text-white' variant='heading-lg'>
            Allow me to share my <span className='text-primary'>journey</span>,
            spanning from my early childhood years to the start of my Software
            Engineer journey.
          </PTypography>
        </Stack>

        <ul className='flex flex-col gap-8'>
          {historyList.map(({ title, description }, i) => (
            <li
              className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
              key={`${i}-${title}`}
            >
              <PTypography as='h3' className='text-white'>
                {title}
              </PTypography>
              <PTypography className='text-gray'>{description}</PTypography>
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
}
