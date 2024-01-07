import AppDate from '@/_components/common/app-date';
import AppTag from '@/_components/common/app-tag';
import SectionHeading from '@/_components/common/section-heading';
import ToTopFab from '@/_components/common/to-top-fab';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import Articles from '@/app/(portfolio)/_components/partials/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IBlogPost } from '../../_contentful';
import AppCopyright from '@/_components/common/app-copyright';

export type ArticleProps = {
  blogPost: IBlogPost;
  preview?: boolean;
};

const Article: FunctionComponent<ArticleProps> = ({
  blogPost,
  preview = false,
}) => {
  return (
    <>
      <Container className='pt-12 max-w-screen-2xl mx-auto'>
        <div className='mb-12'>
          <SectionHeading title='PaoloJulian.dev - Article' />
        </div>
        <div className='z-10'>
          <Stack className='gap-6 lg:gap-12 mb-24'>
            <Link
              className={classNames(preview ? 'pointer-events-none' : '')}
              href='/blogs'
            >
              <Row className='items-center space-x-2 text-new-accent font-semibold group'>
                <span className='group-hover:-translate-x-2 transition-transform'>
                  <LeftArrowIcon />
                </span>
                <p>go to article list</p>
              </Row>
            </Link>

            {/* header */}
            <Stack className='relative gap-3 py-4 lg:py-4'>
              <h1 className='text-5xl lg:max-w-[70%] font-semibold text-new-white'>
                {blogPost.title}
              </h1>
              <div className='text-new-highlight'>
                <span>
                  <AppDate dateTime={blogPost.sys.firstPublishedAt} />
                </span>
                <span> &mdash; </span>
                <span className='italic'>{'Paolo Vincent Julian'}</span>
              </div>
            </Stack>

            <Row className='border-b border-new-highlight justify-between p-2'></Row>

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
                <p className='text-new-highlight text-sm md:text-base line-clamp-1 text-center'>
                  {blogPost.banner.title}
                </p>
              </Stack>

              <span className='text-new-highlight'>
                {blogPost.sys.publishedAt !== blogPost.sys.firstPublishedAt ? (
                  <>
                    <span>LAST UPDATED&nbsp;</span>
                    <AppDate dateTime={blogPost.sys.publishedAt} />
                  </>
                ) : null}
              </span>

              <div className='border-b border-new-highlight pb-12 md:pb-24 text-lg text-new-highlightLighter font-serif'>
                <AppReactMarkdown>{blogPost.content}</AppReactMarkdown>
              </div>

              <Stack className='space-y-4'>
                <p className='text-new-highlight font-medium'>TAGS:</p>
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
                <Row className='items-center space-x-2 text-new-accent font-semibold group'>
                  <span className='group-hover:-translate-x-2 transition-transform'>
                    <LeftArrowIcon />
                  </span>
                  <p>go to article list</p>
                </Row>
              </Link>
            </Stack>

            <div className='relative space-y-8'>
              <SectionHeading title='Latest Articles' />

              {!preview && <Articles />}
            </div>
          </Stack>
        </div>
        <ToTopFab />
      </Container>
      <footer className='border-t border-new-highlight w-full py-8 mb-40 text-new-highlight text-center'>
        <AppCopyright />
      </footer>
    </>
  );
};

export default Article;
