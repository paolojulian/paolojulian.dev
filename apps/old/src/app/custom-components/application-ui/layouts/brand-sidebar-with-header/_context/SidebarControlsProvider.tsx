import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';

const SidebarControlsContext = createContext<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}>({
  isOpen: false,
  setIsOpen() {
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

  return (
    <SidebarControlsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarControlsContext.Provider>
  );
};

export const useSidebarControls = () => useContext(SidebarControlsContext);

export default SidebarControlsProvider;
