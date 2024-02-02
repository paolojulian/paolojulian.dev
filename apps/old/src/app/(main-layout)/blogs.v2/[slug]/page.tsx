import React, { FunctionComponent } from 'react';
import { getBlogPostBySlug, getLatestBlogPosts } from '../_api/blog-post';
import Article from './_components/article';

export type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogDetailsProps) {
  const blogPost = await getBlogPostBySlug(params.slug);
  return {
    title: `Paolo Julian | ${blogPost.title}`,
    description: blogPost.description,
  };
}

export async function generateStaticParams() {
  const blogPosts = await getLatestBlogPosts();

  return blogPosts.map((blog) => ({ slug: blog.slug }));
}

const BlogDetails: FunctionComponent<BlogDetailsProps> = async ({ params }) => {
  const [blogPost, latestBlogPosts] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getLatestBlogPosts(),
  ]);

  return (
    <>
      <Article blogPost={blogPost} latestBlogPosts={latestBlogPosts} />
    </>
  );
};

export default BlogDetails;
