import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import { careerList, historyList } from './_constants';

export default function CareerSection() {
  return (
    <section id='career'>
      <Stack className='gap-20 my-20'>
        <Stack className='gap-10'>
          <SectionHeader title='Career' />
          <Typography className='text-white' variant='heading-lg'>
            We must learn to accept the fact that{' '}
            <span className='text-primary'>all codes are garbage</span>,
            Important part is we produce less garbage code.
          </Typography>
        </Stack>

        <ul className='flex flex-col gap-8'>
          {careerList.map(({ companyName, year, description }, i) => (
            <li
              className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
              key={`${i}-${companyName}`}
            >
              <div>
                <Typography as='h3' className='text-white'>
                  {companyName}
                </Typography>
                <Typography className='text-gray-darker'>{year}</Typography>
              </div>
              <Typography weight='ce-demi' className='text-gray'>
                {description}
              </Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
}
