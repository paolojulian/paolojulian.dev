// AlgoliaSearchProvider.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AlgoliaSearchProvider, { useAlgoliaSearch } from './search-provider';
import { IContentfulSearchItem } from '@/_lib/algoliasearch-client/algoliasearch-client.types';

const mockedHits: IContentfulSearchItem[] = [
  {
    entityId: 'entityId',
    spaceId: 'spaceId',
    _highlightResult: {
      parameters: {
        description: {
          fullyHighlighted: true,
          matchedWords: ['a test'],
          matchLevel: 'full',
          value: 'This is a test.',
        },
      },
    },
    objectId: 'objectId',
    parameters: {
      description: 'This is a sample description',
      slug: 'this-is-test',
      title: 'This is test',
      tags: ['test', 'unit-test'],
    },
  },
];

// Mock the algoliasearchClient methods
jest.mock('@/_lib/algoliasearch-client', () => ({
  initIndex: () => ({
    search: jest.fn(() =>
      Promise.resolve({
        hits: mockedHits,
      })
    ),
  }),
}));

describe('TESTING AlgoliaSearchProvider', () => {
  describe('GIVEN a child component', () => {
    const ChildComponent = <div>Child Component</div>;

    describe('WHEN it successfully renders', () => {
      it('THEN it renders ChildComponent and provides context', () => {
        const { getByText } = render(
          <AlgoliaSearchProvider>{ChildComponent}</AlgoliaSearchProvider>
        );

        expect(getByText('Child Component')).toBeInTheDocument();
      });
    });
  });

  describe('GIVEN a TestComponent and a keyword', () => {
    const keywordToSet = 'testKeyword';
    const TestComponent = () => {
      const { keyword, setKeyword, data } = useAlgoliaSearch();

      const handleButtonClick = () => {
        setKeyword(keywordToSet);
      };

      return (
        <div>
          <button data-testid='search-btn' onClick={handleButtonClick}>
            Search
          </button>
          <p data-testid='keyword'>Keyword: {keyword}</p>
          <p data-testid='data'>Data: {data.length}</p>
        </div>
      );
    };

    describe('WHEN the keyword changes', () => {
      it('THEN it updates keyword and data', async () => {
        const { getByTestId } = render(
          <AlgoliaSearchProvider>
            <TestComponent />
          </AlgoliaSearchProvider>
        );

        fireEvent.click(getByTestId('search-btn'));

        await waitFor(() => {
          expect(getByTestId('keyword')).toHaveTextContent(
            `Keyword: ${keywordToSet}`
          );
          expect(getByTestId('data')).toHaveTextContent('Data: 1');
        });
      });
    });
  });
});
