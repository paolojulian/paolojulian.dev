'use client';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import usePortal from '@/_hooks/use-portal/use-portal';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import GlobalSearchModalSearchBar from '@/_components/partials/global-search-modal/components/global-search-modal-search-bar';
import AlgoliaSearchProvider from '@/_components/partials/global-search-modal/context/search-provider/search-provider';
import GlobalSearchModalItems from '@/_components/partials/global-search-modal/components/global-search-modal-items';
import AlgoliaIcon from '@/_components/partials/global-search-modal/components/icons/algolia-icon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalSearchModal: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const modalRoot = usePortal('modal-root');

  if (modalRoot === null) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <AlgoliaSearchProvider>
      <div
        className={classNames(
          'fixed inset-0 backdrop-blur-sm z-50 p-2 flex flex-col justify-start lg:justify-center items-center'
        )}
      >
        {/* Overlay */}
        <div
          className={classNames('fixed inset-0 bg-new-black/50 -z-10')}
          role='button'
          onClick={onClose}
        ></div>

        {/* Card */}
        <Stack
          className={classNames(
            'bg-white rounded-xl max-w-screen-md w-full',
            'shadow-highBlur'
          )}
        >
          <GlobalSearchModalSearchBar onEsc={onClose} />
          <Stack className='border-t border-slate-300'>
            <GlobalSearchModalItems />
          </Stack>
          <Row className='p-4 border-t border-slate-300 justify-end items-center gap-4'>
            <span className='text-gray-400 font-medium text-sm'>Search by</span>
            <AlgoliaIcon />
          </Row>
        </Stack>
      </div>
    </AlgoliaSearchProvider>,
    modalRoot
  );
};

export default GlobalSearchModal;
