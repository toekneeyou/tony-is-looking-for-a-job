import { ReactNode, createContext, useContext, useState } from "react";

interface SideMenuState {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}
const SideMenuContext = createContext<SideMenuState | null>(null);

interface SideMenuContextProviderProps {
  children: ReactNode;
}

export default function SideMenuContextProvider({
  children,
}: SideMenuContextProviderProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen((p) => !p);

  return (
    <SideMenuContext.Provider value={{ isSideMenuOpen, toggleSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export const useSideMenuContext = () => {
  const sideMenuState = useContext(SideMenuContext);
  if (!sideMenuState) {
    throw new Error("useSideMenuContext must be used within a Provider");
  }
  return sideMenuState;
};
