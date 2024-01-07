'use client';
import SearchIcon from '@/_components/icons/search-icon';
import { useGlobalSearchModal } from '@/_context/global-search-provider/global-search-provider';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GlobalSearchButtonIcon: FunctionComponent<Props> = () => {
  const { setIsOpen: setIsGlobalSearchModalOpen } = useGlobalSearchModal();

  const handleClick = () => {
    setIsGlobalSearchModalOpen(true);
  };

  return (
    <>
      <button
        className='text-new-accent lg:hover:text-new-white lg:transition-colors'
        onClick={handleClick}
      >
        <SearchIcon />
      </button>
    </>
  );
};

export default GlobalSearchButtonIcon;
