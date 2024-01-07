import AppDate from '@/_components/common/app-date';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IBlogPost } from '../_contentful';
import { EnterAnimationListItem } from '@/_components/animations/enter-animation-list';

export type BlogItemProps = {
  blogPost: IBlogPost;
};

const BlogItem: FunctionComponent<BlogItemProps> = ({ blogPost }) => {
  return (
    <EnterAnimationListItem>
      <Link href={`/blogs/${blogPost.slug}`}>
        <div className='flex flex-col items-center group relative'>
          <div className='relative w-full bg-gray-50 border-b border-l border-r border-gray-400 overflow-hidden'>
            {/* image */}
            <Image
              src={blogPost.banner.url}
              alt={`${blogPost.title} banner`}
              style={{
                objectFit: 'cover',
              }}
              width={blogPost.banner.width}
              height={blogPost.banner.height}
              sizes='(max-width: 768px) 100vw, 420px'
            />
            {/* overlay */}
            <div className='absolute inset-0 bg-primary-400/30 transition-transform -translate-x-full group-hover:translate-x-0'></div>
            {/* line */}
            <div className='absolute border-t border-gray-400 top-0 -left-4 w-[200%]'></div>
          </div>

          <Stack className='flex-1 h-full py-2 relative lg:space-y-2'>
            <p className='text-gray-400 italic'>
              {blogPost.sys.publishedAt !== blogPost.sys.firstPublishedAt
                ? 'Updated '
                : ' '}
              <AppDate dateTime={blogPost.sys.publishedAt} />
            </p>
            <h4 className='uppercase text-lg md:text-xl 2xl:text-2xl text-gray-700 font-semibold'>
              {blogPost.title}
            </h4>

            <Row className='justify-between items-end'>
              <span className='mt-2 font-black tracking-widest text-sm text-red-400 flex flex-row space-x-2 items-center'>
                SEE MORE
                <span className='transition-transform translate-x-2 group-hover:translate-x-4'>
                  <RightArrowIcon />
                </span>
              </span>
            </Row>
          </Stack>
        </div>
      </Link>
    </EnterAnimationListItem>
  );
};

export default BlogItem;
