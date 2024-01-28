import { gql } from '@apollo/client';
import { getClient } from '../lib/client';
import AboutSection from '../app/(landing)/components/about-section';

const GET_PORTFOLIO = gql`
  query GetPortfolio($limit: Int!) {
    portfolioCollection(limit: $limit) {
      items {
        address
        availability
        support
        resume {
          url
        }
        ...AboutFragment
      }
    }
  }
  ${AboutSection.fragments.portfolio}
`;

export async function usePortfolio() {
  const { data } = await getClient().query({
    query: GET_PORTFOLIO,
    variables: {
      limit: 1,
    },
  });

  if (data?.portfolioCollection?.items?.length === 0) {
    return undefined;
  }

  return data.portfolioCollection.items[0];
}
