import React from 'react';
import { render } from '@testing-library/react';
import GlobalSearchModalItems from './global-search-modal-items';
import * as SearchProvider from '@/_components/partials/global-search-modal/context/search-provider';
import { DATA_TEST } from './global-search-modal-items.constants';
import { useAlgoliaSearchMocks } from '@/_utils/test-utils/mocks';

// Mock the useAlgoliaSearch hook
jest.mock('@/_components/partials/global-search-modal/context/search-provider');

const spyUseAlgoliaSearch = jest.spyOn(SearchProvider, 'useAlgoliaSearch');

describe('TESTING GlobalSearchModalItems', () => {
  describe('GIVEN the component', () => {
    describe('GIVEN an isLoading of true', () => {
      const algoliaSearchMock = {
        ...useAlgoliaSearchMocks,
        isLoading: true,
      };
      describe('WHEN the component is rendered', () => {
        it('THEN it should render skeleton items', () => {
          spyUseAlgoliaSearch.mockReturnValue(algoliaSearchMock);
          const { getByTestId } = render(<GlobalSearchModalItems />);
          const skeletonItems = getByTestId(DATA_TEST.loadingContainer);

          expect(skeletonItems).toBeInTheDocument();
        });
      });
    });

    describe('GIVEN a blank keyword', () => {
      const algoliaSearchMock = {
        ...useAlgoliaSearchMocks,
        isLoading: false,
        keyword: '',
      };
      describe('WHEN the component is rendered', () => {
        it('THEN it should display "No recent searches"', () => {
          spyUseAlgoliaSearch.mockReturnValue(algoliaSearchMock);
          const { getByText } = render(<GlobalSearchModalItems />);
          const noRecentSearchesText = getByText('No recent searches');

          expect(noRecentSearchesText).toBeInTheDocument();
        });
      });
    });

    describe('GIVEN a keyword and isError is true', () => {
      const algoliaSearchMock = {
        ...useAlgoliaSearchMocks,
        keyword: 'test',
        isError: true,
      };
      describe('WHEN the component is rendered', () => {
        it('THEN it should display an error message', () => {
          spyUseAlgoliaSearch.mockReturnValue(algoliaSearchMock);
          const { getByText } = render(<GlobalSearchModalItems />);
          const errorMessage = getByText(
            'Something went wrong. Please try again later.'
          );

          expect(errorMessage).toBeInTheDocument();
        });
      });
    });

    describe('GIVEN a keyword and no data', () => {
      const algoliaSearchMock = {
        ...useAlgoliaSearchMocks,
        keyword: 'test',
        data: [],
      };
      describe('WHEN the component is rendered', () => {
        it('THEN it should display "No data for keyword"', () => {
          spyUseAlgoliaSearch.mockReturnValue(algoliaSearchMock);
          const { getByText } = render(<GlobalSearchModalItems />);
          const noDataText = getByText(
            `No data for ${algoliaSearchMock.keyword}`
          );

          expect(noDataText).toBeInTheDocument();
        });
      });
    });
    describe('GIVEN a keyword and has data', () => {
      const algoliaSearchMock = {
        ...useAlgoliaSearchMocks,
        data: [
          {
            entityId: 'test',
            objectId: 'test2',
            spaceId: 'test3',
            parameters: {
              title: 'Item 1',
              slug: 'item-1',
              description: 'Description for Item 1',
              tags: ['test'],
            },
          },
        ],
        keyword: 'testKeyword',
      };

      describe('WHEN the component is rendered', () => {
        it('THEN it should render items', () => {
          spyUseAlgoliaSearch.mockReturnValue(algoliaSearchMock);
          const { getByText } = render(<GlobalSearchModalItems />);
          const itemTitle = getByText(
            algoliaSearchMock.data[0].parameters.title
          );
          const itemDescription = getByText(
            algoliaSearchMock.data[0].parameters.description
          );

          expect(itemTitle).toBeInTheDocument();
          expect(itemDescription).toBeInTheDocument();
        });
      });
    });
  });

  describe('WHEN the component is rendered for snapshot testing', () => {
    it('THEN it should match the snapshot', () => {
      spyUseAlgoliaSearch.mockReturnValue(useAlgoliaSearchMocks);
      const { asFragment } = render(<GlobalSearchModalItems />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
