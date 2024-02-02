import AppDate from '@/_components/common/app-date';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Stack from '@/_components/layouts/stack';
import { IBlogPost } from '@/app/(main-layout)/blogs.v2/_contentful';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  article: IBlogPost;
}

const ArticleItem = React.memo(
  React.forwardRef<HTMLDivElement, Props>(({ article }, ref) => {
    return (
      <Link href={`/blogs/${article.slug}`} className='snap-start'>
        <div
          className='w-[300px] lg:w-[400px] flex flex-col relative group'
          ref={ref}
          role='button'
        >
          <Stack className='gap-[10px]'>
            <div className='w-full relative overflow-hidden'>
              <Image
                className='object-cover object-center opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-110 saturate-50 group-hover:saturate-100 transition-transform duration-500'
                src={article.banner.url}
                alt={article.title}
                width={article.banner.width}
                height={article.banner.height}
                sizes='(max-width: 768px) 100vw, 300px'
              />
              <div className='group-hover:translate-x-0 -translate-x-full transition-transform absolute inset-0'></div>
            </div>
            <Stack>
              <Uppercase className='italic text-new-highlight text-[14px]'>
                <AppDate dateTime={article.sys.publishedAt} />
              </Uppercase>
              <Uppercase className='text-base text-new-white line-clamp-2'>
                {article.title}
              </Uppercase>
            </Stack>
            <button className='flex flex-row text-new-accent space-x-[10px]'>
              <Uppercase className='text-[14px]'>SEE MORE</Uppercase>
              <RightArrowIcon className='w-[24px] h-[24px] transition-transform group-hover:translate-x-2' />
            </button>
          </Stack>
          <div className='w-[10px] aspect-square absolute left-0 top-0 bg-new-highlight'></div>
        </div>
      </Link>
    );
  })
);

ArticleItem.displayName = 'ArticleItem';

export default ArticleItem;
