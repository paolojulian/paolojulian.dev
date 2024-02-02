import AppDate from '@/_components/common/app-date';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Stack from '@/_components/layouts/stack';
import { IBlogPost } from '@/app/(main-layout)/blogs.v2/_contentful';
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
            <div className='w-full bg-primary-300/30 relative overflow-hidden'>
              <Image
                className='object-cover obect-center opacity-90'
                src={article.banner.url}
                alt={article.title}
                width={article.banner.width}
                height={article.banner.height}
                sizes='(max-width: 768px) 100vw, 300px'
              />
              <div className='group-hover:translate-x-0 -translate-x-full transition-transform absolute inset-0 bg-primary-400/20'></div>
            </div>
            <Stack>
              <p className='italic text-slate-400 text-[14px]'>
                <AppDate dateTime={article.sys.publishedAt} />
              </p>
              <p className='uppercase text-base font-medium text-slate-600 line-clamp-2'>
                {article.title}
              </p>
            </Stack>
            <button className='flex flex-row text-primary-400 space-x-[10px]'>
              <span className='text-[14px]'>SEE MORE</span>
              <RightArrowIcon className='w-[24px] h-[24px] transition-transform group-hover:translate-x-2' />
            </button>
          </Stack>
          <div className='w-[10px] aspect-square absolute left-0 top-0 bg-primary-400'></div>
        </div>
      </Link>
    );
  })
);

ArticleItem.displayName = 'ArticleItem';

export default ArticleItem;
