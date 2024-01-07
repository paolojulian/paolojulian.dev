import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';

const SidebarControlsContext = createContext<{
  isOpen: boolean;
  isMini: boolean;
  setIsOpen: (state: boolean) => void;
  setIsMini: (state: boolean) => void;
}>({
  isOpen: false,
  isMini: false,
  setIsOpen() {
    // empty
  },
  setIsMini() {
    // empty
  },
});

export type SidebarControlsProviderProps = {
  children: React.ReactNode;
};

const SidebarControlsProvider: FunctionComponent<
  SidebarControlsProviderProps
> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMini, setIsMini] = useState(false);

  return (
    <SidebarControlsContext.Provider
      value={{ isOpen, isMini, setIsOpen, setIsMini }}
    >
      {children}
    </SidebarControlsContext.Provider>
  );
};

export const useSidebarControls = () => useContext(SidebarControlsContext);

export default SidebarControlsProvider;
