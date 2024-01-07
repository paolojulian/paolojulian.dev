import SectionHeading from '@/_components/common/section-heading';
import Container from '@/_components/layouts/container';
import { getLatestBlogPosts } from '@/app/(main-layout)/blogs.v2/_api/blog-post';
import ArrowScrollBar from '@/app/(main-layout)/blogs.v2/_components/scrollbars/arrow-scrollbar';
import { FunctionComponent } from 'react';
import ArticleItem from '@/_components/common/article-item/article-item';

interface Props {
  // no props
}

const Articles: FunctionComponent<Props> = async () => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading RightContent={'04'} title='Articles'></SectionHeading>

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
