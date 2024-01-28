import { gql } from '@apollo/client';
import { getClient } from '../lib/client';
import AboutSection from '../app/(landing)/components/about-section';
import CareerSection from '../app/(landing)/components/career-section';
import ArticlesSection from '../app/(landing)/components/articles-section';
import FooterSection from '../app/(landing)/components/footer-section';
import { Portfolio } from './portfolio.types';

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
        ...CareerFragment
        ...ArticleFragment
        ...FooterFragment
      }
    }
  }
  ${AboutSection.fragments.portfolio}
  ${CareerSection.fragments.portfolio}
  ${ArticlesSection.fragments.portfolio}
  ${FooterSection.fragments.portfolio}
`;

interface QueryData {
  portfolioCollection: {
    items: Portfolio[];
  };
}

export async function usePortfolio() {
  const { data, error, errors } = await getClient().query<QueryData>({
    query: GET_PORTFOLIO,
    variables: {
      limit: 1,
    },
  });
  console.log('error', error);
  console.log('errors', errors);

  if (data?.portfolioCollection?.items?.length === 0) {
    return undefined;
  }

  return data.portfolioCollection.items[0];
}
