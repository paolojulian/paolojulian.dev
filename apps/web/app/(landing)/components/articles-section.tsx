import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import NewTabArrowIcon from '@repo/ui/icons/new-tab-arrow-icon';
import Highlight from './highlight';
import { gql } from '@apollo/client';
import { Portfolio } from '../../../graphql/portfolio.types';

interface Props {
  portfolio: Pick<Portfolio, 'writing'>;
}

export default function ArticlesSection({ portfolio }: Props) {
  return (
    <Stack className='gap-52'>
      <Stack className='gap-10'>
        <SectionHeader title='Writing' />
        <Typography variant='heading-lg'>{portfolio.writing}</Typography>
      </Stack>
      <Stack className='gap-10'>
        <Typography variant='body-wide'>LATEST ARTICLES</Typography>
        <Stack>
          <ArticleItem
            imageURL='/'
            date='Oct 2023'
            title='Essential Tools and Libraries for Daily Web Development Works'
          />
          <ArticleItem
            imageURL='/'
            date='Oct 2023'
            title='The Right Way to Make Component Variants using Tailwind'
          />
          <ArticleItem
            imageURL='/'
            date='Oct 2023'
            title='How to Send Emails in Next.js 13 Using the New App API Route'
          />
        </Stack>

        <Row className='items-center justify-end pt-20'>
          <a href='/articles' target='_blank'>
            <Row className='group items-center justify-center gap-2 text-secondary hover:text-primary duration-500 active:scale-95'>
              <Typography variant='heading'>See more</Typography>
              <NewTabArrowIcon className='text-secondary group-hover:text-primary duration-500 ease-in-out' />
            </Row>
          </a>
        </Row>
      </Stack>
    </Stack>
  );
}

interface ArticleItemProps {
  imageURL: string;
  date: string;
  title: string;
}
function ArticleItem({ imageURL, date, title }: ArticleItemProps) {
  return (
    <a className='cursor-pointer'>
      <Row className='gap-10 group py-10'>
        <div className='relative aspect-[320/200] w-[320px] bg-white rounded-md border-4 border-gray overflow-hidden'>
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-primary/70'></div>
        </div>
        <Stack className='flex-1 justify-center items-start gap-4'>
          <Typography
            className='text-gray-darker uppercase'
            variant='body-wide'
          >
            {date}
          </Typography>
          <Typography
            className='line-clamp-2 text-white group-hover:text-primary duration-500 ease-in-out'
            variant='heading'
          >
            {title}
          </Typography>
        </Stack>
      </Row>
    </a>
  );
}

ArticlesSection.fragments = {
  portfolio: gql`
    fragment ArticleFragment on Portfolio {
      writing
    }
  `,
};
