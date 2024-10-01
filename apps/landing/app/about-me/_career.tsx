import SectionHeader from '@repo/ui/components/SectionHeader';
import { careerList } from './_constants';
import { PTypography, Stack } from '@paolojulian.dev/design-system';

export default function CareerSection() {
  return (
    <section id='career'>
      <Stack className='gap-20 my-20'>
        <Stack className='gap-10'>
          <SectionHeader title='Career' />
          <PTypography className='text-white' variant='heading-lg'>
            We must learn to accept the fact that{' '}
            <span className='text-primary'>all codes are garbage</span>,
            Important part is we produce less garbage code.
          </PTypography>
        </Stack>

        <ul className='flex flex-col gap-8'>
          {careerList.map(({ companyName, year, description }, i) => (
            <li
              className='flex flex-col gap-2 xl:grid xl:grid-cols-[200px_1fr]'
              key={`${i}-${companyName}`}
            >
              <div>
                <PTypography as='h3' className='text-white'>
                  {companyName}
                </PTypography>
                <PTypography className='text-gray-darker'>{year}</PTypography>
              </div>
              <PTypography className='text-gray'>{description}</PTypography>
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
}
