'use client';
import GlobalSearchModal from '@/_components/partials/global-search-modal';
import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface IGlobalSearchContext {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const GlobalSearchContext = createContext<IGlobalSearchContext>({
  setIsOpen: () => {},
  isOpen: false,
});

export function useGlobalSearchModal() {
  return useContext(GlobalSearchContext);
}

interface Props {
  children: ReactNode;
}

const GlobalSearchProvider: FunctionComponent<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <GlobalSearchContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
      <GlobalSearchModal isOpen={isOpen} onClose={handleClose} />
    </GlobalSearchContext.Provider>
  );
};

export default GlobalSearchProvider;
