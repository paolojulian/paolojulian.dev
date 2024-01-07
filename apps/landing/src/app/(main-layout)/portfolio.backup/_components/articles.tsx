'use client';
import React, { FunctionComponent } from 'react';
import SectionHeading from '@/app/(main-layout)/portfolio.backup/_components/common/section-heading';
import { IBlogPost } from '@/app/(main-layout)/blogs.v2/_contentful';
import ArticleItem from '@/app/(main-layout)/components/_components/articles/article-item';
import ArrowScrollBar from '@/app/(main-layout)/blogs.v2/_components/scrollbars/arrow-scrollbar';
import Container from '@/_components/layouts/container';
import { SECTIONS } from '@/app/(main-layout)/portfolio.backup/_context/sections-context';

interface Props {
  items: IBlogPost[];
}

const ArticlesSection: FunctionComponent<Props> = ({ items }) => {
  return (
    <section
      id={SECTIONS[4]}
      className='bg-white flex flex-row flex-1 max-w-main mx-auto w-full z-10'
    >
      <Container className='flex flex-col pt-[100px] md:pt-[150px] pb-[50px] w-full space-y-[25px]'>
        <div className='text-left'>
          <SectionHeading number={4} section='latest articles'></SectionHeading>
        </div>
        <ArrowScrollBar className='py-[50px] gap-[20px]'>
          {items.map((item, i) => (
            <ArticleItem key={i} article={item} />
          ))}
        </ArrowScrollBar>
      </Container>
    </section>
  );
};

export default ArticlesSection;
