import { createContext, useState } from "react";
import { useScreenSize } from "../hooks";
import { NavContextType } from "../types";

export const NavContext = createContext<NavContextType>({
  expanded: false,
  setExpanded: () => {},
});

export const NavContextProvider = ({ children }: any) => {
  const { isMobile } = useScreenSize();
  const [expanded, setExpanded] = useState<boolean>(!isMobile);

  return (
    <NavContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </NavContext.Provider>
  );
};
