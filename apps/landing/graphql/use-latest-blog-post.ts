import { gql } from '@apollo/client';
import { getClient } from '../lib/client';
import { BlogPost } from './blog-post.types';

const GET_LATEST_BLOG_POST = gql`
  query GetLatestBlogPosts($limit: Int!) {
    blogPostCollection(limit: $limit) {
      items {
        sys {
          id
          publishedAt
        }
        banner {
          url
          title
        }
        slug
        title
      }
    }
  }
`;

interface QueryData {
  blogPostCollection: {
    items: BlogPost[];
  };
}

export async function useLatestBlogPosts() {
  const { data } = await getClient().query<QueryData>({
    query: GET_LATEST_BLOG_POST,
    variables: {
      limit: 3,
    },
  });

  if (data?.blogPostCollection?.items?.length === 0) {
    return [];
  }

  return data.blogPostCollection.items;
}
