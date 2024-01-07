import { useAlgoliaSearch } from '../../context/search-provider';
import DATA_TEST from './global-search-modal-search-bar.constants';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import Row from '@/_components/layouts/row';
import classNames from 'classnames';
import SearchIcon from '@/_components/icons/search-icon';

interface Props {
  onEsc: () => void;
}

const GlobalSearchModalSearchBar: FunctionComponent<Props> = ({ onEsc }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { keyword, setKeyword } = useAlgoliaSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEsc();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEsc]);

  return (
    <Row className='items-center justify-between relative'>
      <label className='hidden' htmlFor='globalSearch'>
        Search
      </label>
      <div className='absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-new-highlight'>
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        id='globalSearch'
        className={classNames(
          'pl-16 p-6 rounded-t-xl w-full',
          'border-slate-400 focus:outline-none focus:ring ring-new-accent focus:border-new-black'
        )}
        value={keyword}
        onChange={handleChange}
        placeholder='Search...'
        data-testid={DATA_TEST.input}
      />
      <button
        className={classNames(
          'absolute top-1/2 -translate-y-1/2 right-6',
          'rounded-lg',
          'px-4 py-2 border border-new-highlightLighter md:hover:bg-new-white text-new-highlight w-fit h-fit'
        )}
        onClick={onEsc}
        data-testid={DATA_TEST.escapeBtn}
      >
        Esc
      </button>
    </Row>
  );
};

export default GlobalSearchModalSearchBar;
