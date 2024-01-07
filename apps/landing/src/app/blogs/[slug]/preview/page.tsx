import React, { FunctionComponent } from 'react';
import Article from '../_components/article';
import { getBlogPostBySlug } from '../../_api/blog-post';

export type BlogPreviewPageProps = {
  params: {
    slug: string;
  };
};

const BlogPreviewPage: FunctionComponent<BlogPreviewPageProps> = async ({
  params,
}) => {
  const blogPost = await getBlogPostBySlug(params.slug, true);
  return <Article preview blogPost={blogPost} />;
};

export default BlogPreviewPage;
