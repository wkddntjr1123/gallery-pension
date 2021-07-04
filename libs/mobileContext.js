import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const MobileContext = createContext();

export function AppWrapper({ children }) {
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });

  return <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>;
}

export function useMobileContext() {
  return useContext(MobileContext);
}
