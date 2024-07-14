import { gql } from '@apollo/client';
import { getClient } from '../../../lib/client';

export type AppItemFields = {
  sys: {
    id: string;
  };
  banner: {
    url: string;
    title: string;
  };
  title: string;
  description: string;
  type: string;
  link: string;
};

type QueryData = {
  appItemCollection: {
    items: AppItemFields[];
  };
};

export async function useAppItems() {
  const { data } = await getClient().query<QueryData>({
    query: GET_APP_ITEMS,
  });

  return extractAppItems(data);
}

function extractAppItems(data: QueryData) {
  return data?.appItemCollection?.items ?? [];
}

const GET_APP_ITEMS = gql`
  query GetAppItems {
    appItemCollection {
      items {
        sys {
          id
        }
        banner {
          url
          title
        }
        title
        description
        type
        link
      }
    }
  }
`;
