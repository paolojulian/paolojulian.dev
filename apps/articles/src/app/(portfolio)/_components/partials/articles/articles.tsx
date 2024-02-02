import { getLatestBlogPosts } from '@/app/(main-layout)/blogs.v2/_api/blog-post';
import ArrowScrollBar from '@/app/(main-layout)/blogs.v2/_components/scrollbars/arrow-scrollbar';
import { FunctionComponent } from 'react';
import ArticleItem from './article-item';

interface Props {
  // no props
}

const Articles: FunctionComponent<Props> = async () => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <div className='group/articles'>
      <ArrowScrollBar className='gap-4 py-12 pr-28'>
        {blogPosts.map((blogPost, i) => (
          <ArticleItem article={blogPost} key={i} />
        ))}
      </ArrowScrollBar>
    </div>
  );
};

export default Articles;
