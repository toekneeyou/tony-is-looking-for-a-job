import { createContext, useCallback, useEffect, useRef, useState } from "react";

import Intro from "./sections/intro/Intro";
import { APP_ID } from "./constants/id";
import Header from "./features/header/Header";
import ScrollDisabler from "./features/scrollDisabler/ScrollDisabler";
import Aboutme from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import Abby from "./sections/abby/Abby";
import Actions from "./features/actions/Actions";

import "./App.css";

type AppContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  sectionIndex: number;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);
  const appRef = useRef<HTMLElement>(null);
  // used to store last scrollTop
  let scrollTopRef = useRef(0);

  // handles sections
  const handleSections = useCallback(() => {
    const appEl = appRef.current as HTMLElement;
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
    const appEl = appRef.current as HTMLElement;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === appEl) {
          handleSections();
        }
      }
    });

    observer.observe(appEl);

    return () => {
      observer.disconnect();
    };
  }, [handleSections]);

  return (
    <AppContext.Provider value={{ isLoading, sectionIndex, setIsLoading }}>
      <main ref={appRef} id={APP_ID} onScroll={handleSections}>
        <ScrollDisabler />
        <Header />
        <Intro />
        <Aboutme />
        <Skills />
        <Abby />
        <Actions />
      </main>
    </AppContext.Provider>
  );
}

export default App;
