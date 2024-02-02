import { gql } from '@apollo/client';
import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import classNames from 'classnames';
import AppReactMarkdown from '../../../components/app-react-markdown/app-react-markdown';
import { Portfolio } from '../../../graphql/portfolio.types';

interface Props {
  portfolio: Pick<Portfolio, 'about' | 'whatIDo'>;
}

export default function AboutSection({ portfolio }: Props) {
  return (
    <section id={'about'} className={'py-[100px] md:py-[200px]'}>
      <Stack className='gap-24 md:gap-52'>
        <Stack className='gap-10'>
          <SectionHeader title='About' />
          <AppReactMarkdown>{portfolio.about}</AppReactMarkdown>
        </Stack>
        <Stack className='gap-10'>
          <Typography variant='body-wide'>WHAT I DO</Typography>
          <Stack>
            {portfolio.whatIDo.map((text, i) => (
              <Typography
                key={i}
                className={classNames(
                  'border-t border-gray-darker/50 uppercase',
                  { 'border-b': i === portfolio.whatIDo.length - 1 }
                )}
                variant='heading-xl'
              >
                {text}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}

AboutSection.fragments = {
  portfolio: gql`
    fragment AboutFragment on Portfolio {
      about
      whatIDo
    }
  `,
};
