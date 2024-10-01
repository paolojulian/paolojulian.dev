import { gql } from '@apollo/client';
import {
  PSectionHeader,
  PTypography,
  Row,
  Stack,
} from '@paolojulian.dev/design-system';
import { NewTabArrowIcon } from '@paolojulian.dev/design-system/icons';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import AppReactMarkdown from '../../../components/app-react-markdown/app-react-markdown';
import { Portfolio } from '../../../graphql/portfolio.types';
import { useLatestBlogPosts } from '../../../graphql/use-latest-blog-post';
import { DynamicRoutes, Routes } from '../../utils/constants';

interface Props {
  portfolio: Pick<Portfolio, 'writing'>;
}

export default async function ArticlesSection({ portfolio }: Props) {
  const latestBlogPosts = await useLatestBlogPosts();
  const formattedLatestBlogPosts = [...latestBlogPosts].map((item) => ({
    ...item,
    formattedPublishedAt: dayjs(item.sys.publishedAt).format('MMM YYYY'),
  }));

  return (
    <section id={'writing'} className='py-[100px] md:py-[200px]'>
      <Stack className='gap-24 md:gap-52'>
        <Stack className='gap-10'>
          <PSectionHeader title='Writing' />
          <AppReactMarkdown>{portfolio.writing}</AppReactMarkdown>
        </Stack>
        <Stack className='gap-10'>
          <PTypography variant='body-wide'>LATEST ARTICLES</PTypography>
          <Stack>
            {formattedLatestBlogPosts.map((blogPost) => (
              <ArticleItem
                key={blogPost.sys.id}
                imageURL={blogPost.banner.url}
                date={blogPost.formattedPublishedAt}
                slug={blogPost.slug}
                title={blogPost.title}
              />
            ))}
          </Stack>

          <Row className='items-center justify-end pt-10 md:pt-20'>
            <Link href={Routes.Articles} target='_blank'>
              <Row className='group items-center justify-center gap-2 text-secondary hover:text-primary duration-500 active:scale-95'>
                <PTypography variant='heading'>See more</PTypography>
                <NewTabArrowIcon className='text-secondary group-hover:text-primary duration-500 ease-in-out' />
              </Row>
            </Link>
          </Row>
        </Stack>
      </Stack>
    </section>
  );
}

interface ArticleItemProps {
  imageURL: string;
  slug: string;
  date: string;
  title: string;
}
function ArticleItem({ imageURL, date, slug, title }: ArticleItemProps) {
  return (
    <Link
      href={DynamicRoutes.ArticleItem(slug)}
      className='cursor-pointer'
      target='_blank'
    >
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 group py-10'>
        <div className='relative aspect-[320/200] w-full md:w-[40%] lg:w-[320px] bg-white rounded-md border-4 border-gray overflow-hidden'>
          <Image alt={title} fill src={imageURL} />
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-primary/50'></div>
        </div>
        <Stack className='flex-1 justify-center items-start gap-2 md:gap-4'>
          <PTypography
            className='text-gray-darker uppercase'
            variant='body-wide'
          >
            {date}
          </PTypography>
          <PTypography
            className='line-clamp-3 md:line-clamp-2 text-white group-hover:text-primary duration-500 ease-in-out'
            variant='heading'
          >
            {title}
          </PTypography>
        </Stack>
      </div>
    </Link>
  );
}

ArticlesSection.fragments = {
  portfolio: gql`
    fragment ArticleFragment on Portfolio {
      writing
    }
  `,
};
