import { getLatestBlogPosts } from '@/app/(main-layout)/blogs.v2/_api/blog-post';
import ArticleItem from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/article-item';
import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import ArrowScrollBar from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/scrollbars/arrow-scrollbar';
import SectionHeading from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/section-heading';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Articles: FunctionComponent<Props> = async () => {
  const [blogPosts] = await Promise.all([getLatestBlogPosts()]);
  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading number={5} section='Articles'></SectionHeading>

        <ArrowScrollBar className='gap-4 py-12'>
          {blogPosts.map((blogPost, i) => (
            <ArticleItem article={blogPost} key={i} />
          ))}
        </ArrowScrollBar>
      </Container>
    </div>
  );
};

export default Articles;
