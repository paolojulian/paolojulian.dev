import { PSectionHeader, PTypography } from '@paolojulian.dev/design-system';
import { cn } from '@paolojulian.dev/design-system/utils';

export default function HeroSection() {
  return (
    <section id='landing'>
      <div className='mb-20'>
        <PSectionHeader title='Paolo Julian - About' />
        <div className='pt-10'>
          <div className='text-left'>
            <PTypography className='text-white uppercase' variant='heading-xl'>
              KEEP
              <br />
              <span className='ml-20'>IT</span>
              <br />
              <span className='text-primary ml-10'>SIMPLE</span>
              <br />
              <span className='ml-28'>STUPID!</span>
            </PTypography>
          </div>
          <PTypography
            variant='body'
            className={cn(
              'mt-10',
              'ml-auto md:ml-[50%]',
              'text-gray',
              'max-w-[14.25rem] md:max-w-[31rem]'
            )}
          >
            I embrace the “KISS” principle not only in programming but in my
            everyday life as well. It's about simplicity—minimalist style, fewer
            possessions, and prioritizing quality over quantity. I aim to free
            up mental space, allowing me to focus on the bigger picture, both in
            work and life.
          </PTypography>
        </div>
      </div>
    </section>
  );
}
