import { DATA_TEST } from './global-search-modal-items.constants';
import GlobalSearchModalItem, {
  GlobalSearchModalItemSkeleton,
} from '@/_components/partials/global-search-modal/components/global-search-modal-items/global-search-modal-item';
import { useAlgoliaSearch } from '@/_components/partials/global-search-modal/context/search-provider';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GlobalSearchModalItems: FunctionComponent<Props> = () => {
  const { data, isLoading, isError, keyword } = useAlgoliaSearch();

  if (isLoading) {
    return (
      <div
        className='flex flex-col max-h-[500px] overflow-y-auto p-8'
        data-testid={DATA_TEST.loadingContainer}
      >
        <GlobalSearchModalItemSkeleton />
        <GlobalSearchModalItemSkeleton />
      </div>
    );
  }

  if (keyword === '') {
    return (
      <div
        className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'
        data-testid={DATA_TEST.noRecentContainer}
      >
        <span className='text-new-highlight text-lg'>
          {'No recent searches'}
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'
        data-testid={DATA_TEST.errorContainer}
      >
        <span className='text-new-accent italic'>
          {'Something went wrong. Please try again later.'}
        </span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div
        className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'
        data-testid={DATA_TEST.noDataContainer}
      >
        <span className='text-new-highlight text-lg'>{`No data for ${keyword}`}</span>
      </div>
    );
  }

  return (
    <div
      className='flex flex-col max-h-[500px] overflow-y-auto p-8'
      data-testid={DATA_TEST.container}
    >
      {data.map((item, i) => (
        <GlobalSearchModalItem
          datePublished={'Updated 13-Sep-2023'}
          title={item.parameters.title}
          slug={item.parameters.slug}
          description={item.parameters.description}
          key={i}
        />
      ))}
    </div>
  );
};

export default GlobalSearchModalItems;
