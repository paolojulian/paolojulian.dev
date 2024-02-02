import contentfulGQLClient from "@/_lib/contentful-graphql";
import { IBlogPost } from "../_contentful";

export async function getBlogPostBySlug(slug: string, preview: boolean = false): Promise<IBlogPost> {
  // initiate query params
  const query = `
    query GetBlogPostBySlug ($slug: String!, $preview: Boolean!) {
      blogPostCollection (limit: 1, where: { slug: $slug }, preview: $preview) {
        items {
          title
          content
          description
          slug
          tags
          banner {
            url
            title
            width
            height
          }
          sys {
            publishedAt
            firstPublishedAt
          }
        }
      }
    }
  `;
  const variables = { slug, preview }

  // fetch data
  const res = await contentfulGQLClient.query({ query, variables, preview, tags: ['blogPost'] });
  const { data } = await res.json();

  // check if the blog exists
  if (!data?.blogPostCollection || data.blogPostCollection?.items.length === 0) {
    throw new Error('not-found')
  }

  return data.blogPostCollection.items[0];
}

export async function getLatestBlogPosts(): Promise<IBlogPost[]> {
  // initiate query params
  const query = `
    query GetBlogPostBySlug {
      blogPostCollection (limit: 10) {
        items {
          title
          content
          description
          slug
          tags
          banner {
            url
            width
            height
          }
          sys {
            publishedAt
            firstPublishedAt
          }
        }
      }
    }
  `;

  // fetch data
  const res = await contentfulGQLClient.query({ query, tags: ['blogPost'] });
  const { data } = await res.json();

  return data.blogPostCollection.items;
}