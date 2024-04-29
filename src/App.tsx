import { createContext, useCallback, useEffect, useRef, useState } from "react";

import Intro from "./sections/intro/Intro";
import { APP_ID } from "./constants/id";
import Header from "./features/header/Header";
import ScrollDisabler from "./features/scrollDisabler/ScrollDisabler";
import Aboutme from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import Abby from "./sections/abby/Abby";
import Actions from "./features/actions/Actions";
import MobileHeader from "./features/mobileHeader/MobileHeader";

import "./App.css";
import NavSideMenu from "./features/navSideMenu/NavSideMenu";

type AppContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sectionIndex: number;
  isMobile: boolean;
  isSideMenuOpen: boolean;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const appContainerRef = useRef<HTMLDivElement>(null);
  // used to store last scrollTop
  let scrollTopRef = useRef(0);

  // handles sections
  const handleSections = useCallback(() => {
    const appEl = appContainerRef.current as HTMLElement;
    const position = appEl.scrollTop / window.innerHeight;
    const newSectionIndex =
      position > scrollTopRef.current
        ? Math.ceil(position)
        : Math.floor(position);

    setSectionIndex(newSectionIndex);
    scrollTopRef.current = position;
  }, []);

  // handle sections when window is resized
  useEffect(() => {
    const appEl = appContainerRef.current as HTMLElement;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === appEl) {
          handleSections();
          setIsMobile(appEl.clientWidth <= 768);
        }
      }
    });

    observer.observe(appEl);

    return () => {
      observer.disconnect();
    };
  }, [handleSections]);

  useEffect(() => {
    if (!isMobile) {
      setIsSideMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        sectionIndex,
        setIsLoading,
        isMobile,
        isSideMenuOpen,
        setIsSideMenuOpen,
      }}
    >
      <div
        ref={appContainerRef}
        className="app-container"
        onScroll={handleSections}
      >
        <main id={APP_ID}>
          <ScrollDisabler />
          {isMobile ? <MobileHeader /> : <Header />}
          <Intro />
          <Aboutme />
          <Skills />
          <Abby />
          <Actions />
          <NavSideMenu />
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
