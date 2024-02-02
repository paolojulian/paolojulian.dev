import AppDate from '@/_components/common/app-date';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IBlogPost } from '../../_contentful';
import Image from 'next/image';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import AppTag from '@/_components/common/app-tag';
import classNames from 'classnames';
import ToTopFab from '@/_components/common/to-top-fab';
import ArrowScrollBar from '@/app/(main-layout)/blogs.v2/_components/scrollbars/arrow-scrollbar';
import ArticleItem from '@/app/(main-layout)/components/_components/articles/article-item';
import Container from '@/_components/layouts/container';
import SectionHeading from '@/_components/common/section-heading';

export type ArticleProps = {
  blogPost: IBlogPost;
  preview?: boolean;
  latestBlogPosts?: IBlogPost[];
};

const Article: FunctionComponent<ArticleProps> = ({
  blogPost,
  preview = false,
  latestBlogPosts = [],
}) => {
  return (
    <>
      <Container className='pt-12'>
        <div className='mb-12'>
          <SectionHeading title='Article' />
        </div>
        <div className='z-10'>
          <Stack className='gap-6 lg:gap-12 mb-24'>
            <Link
              className={classNames(preview ? 'pointer-events-none' : '')}
              href='/blogs'
            >
              <Row className='items-center space-x-2 text-red-400 font-semibold group'>
                <span className='group-hover:-translate-x-2 transition-transform'>
                  <LeftArrowIcon />
                </span>
                <p>go to article list</p>
              </Row>
            </Link>

            {/* header */}
            <Stack className='relative gap-3 py-4 lg:py-4'>
              <span className='text-gray-400'>
                <AppDate dateTime={blogPost.sys.firstPublishedAt} />
              </span>
              <h1 className='text-5xl lg:max-w-[70%] font-semibold text-slate-800'>
                {blogPost.title}
              </h1>
              <span className='text-slate-700'>
                by: {'Paolo Vincent Julian'}
              </span>
            </Stack>

            <Row className='border-b border-gray-300 justify-between p-2'></Row>

            {/* content */}
            <Stack className='gap-6 lg:gap-12 py-6 md:py-12 w-full max-w-screen-md mx-auto overflow-x-hidden'>
              <Stack className='space-y-1 items-center'>
                <div className='w-full relative'>
                  {blogPost.banner ? (
                    <Image
                      alt={`${blogPost.title} banner`}
                      src={blogPost.banner.url}
                      width={blogPost.banner.width}
                      height={blogPost.banner.height}
                      style={{
                        objectPosition: 'center center',
                        objectFit: 'cover',
                      }}
                      priority
                    />
                  ) : null}
                </div>
                <p className='text-slate-500 text-sm md:text-base line-clamp-1 text-center'>
                  {blogPost.banner.title}
                </p>
              </Stack>

              <span className='text-gray-400'>
                {blogPost.sys.publishedAt !== blogPost.sys.firstPublishedAt ? (
                  <>
                    <span>LAST UPDATED&nbsp;</span>
                    <AppDate dateTime={blogPost.sys.publishedAt} />
                  </>
                ) : null}
              </span>

              <div className='border-b border-slate-400 pb-12 md:pb-24 text-base text-slate-600 font-serif'>
                <AppReactMarkdown>{blogPost.content}</AppReactMarkdown>
              </div>

              <Stack className='space-y-4'>
                <p className='text-slate-600 font-medium'>TAGS:</p>
                <Row className='gap-4 flex-wrap'>
                  {blogPost.tags?.map((tag, i) => (
                    <AppTag key={i} tag={tag} />
                  ))}
                </Row>
              </Stack>

              <Link
                className={classNames(preview ? 'pointer-events-none' : '')}
                href='/blogs'
              >
                <Row className='items-center space-x-2 text-red-400 font-semibold group'>
                  <span className='group-hover:-translate-x-2 transition-transform'>
                    <LeftArrowIcon />
                  </span>
                  <p>go to article list</p>
                </Row>
              </Link>
            </Stack>

            <div className='relative space-y-8'>
              <SectionHeading title='Latest Articles' />
              <ArrowScrollBar className='py-[50px] gap-[20px]'>
                {!preview
                  ? latestBlogPosts.map((item, i) =>
                      item.slug === blogPost.slug ? null : (
                        <ArticleItem key={i} article={item} />
                      )
                    )
                  : null}
              </ArrowScrollBar>
            </div>
          </Stack>
        </div>
        <ToTopFab />
      </Container>
    </>
  );
};

export default Article;
