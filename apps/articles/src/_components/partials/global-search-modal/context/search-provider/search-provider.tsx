'use client';
import algoliasearchClient from '@/_lib/algoliasearch-client';
import { IContentfulSearchItem } from '@/_lib/algoliasearch-client/algoliasearch-client.types';
import { createContext, useContext, useEffect, useState } from 'react';

const index = algoliasearchClient.initIndex('production');

interface IAlgoliaSearchProvider {
  data: IContentfulSearchItem[];
  keyword: string;
  isError: boolean;
  isLoading: boolean;
  setKeyword: (keyword: string) => void;
}

const AlgoliaSearchContext = createContext<IAlgoliaSearchProvider>({
  data: [],
  keyword: '',
  isError: false,
  isLoading: false,
  setKeyword: () => {},
});

export default function AlgoliaSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<IContentfulSearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!keyword) return;

    setIsLoading(true);
    setIsError(false);
    const searchData = setTimeout(() => {
      index
        .search<IContentfulSearchItem>(keyword)
        .then(({ hits }) => {
          setIsLoading(false);
          setData(hits);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }, 300);

    return () => clearTimeout(searchData);
  }, [keyword]);

  return (
    <AlgoliaSearchContext.Provider
      value={{ data, isLoading, isError, keyword, setKeyword }}
    >
      {children}
    </AlgoliaSearchContext.Provider>
  );
}

export const useAlgoliaSearch = () => useContext(AlgoliaSearchContext);
