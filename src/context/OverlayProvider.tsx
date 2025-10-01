import { createContext, useState } from 'react';

interface OverlayContextType {
  showOverlay: boolean;
  setShowOverlay: (value: boolean) => void;
}

export const OverlayContext = createContext<OverlayContextType>({
  showOverlay: false,
  setShowOverlay: () => {}
});

interface OverlayProviderProps {
  children: React.ReactNode;
}

function OverlayProvider({ children }: OverlayProviderProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <OverlayContext value={{ showOverlay, setShowOverlay }}>
      {children}
    </OverlayContext>
  );
}

export default OverlayProvider;
