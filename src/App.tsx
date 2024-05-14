import "./index.css";

import Hero from "./sections/hero/Hero";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import { APP_ID } from "./constants/id";
import { classNames } from "./helpers/helpers";
import Footer from "./sections/footer/Footer";
import Header from "./features/Header";
import Projects from "./sections/projects/Projects";
import SideMenu from "./features/SideMenu";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { Section, sections } from "./constants/data";
import Loading from "./features/loading/Loading";

type LoadingState = { [section in Section]: boolean };

const initialLoadingState: LoadingState = sections.reduce((p, c) => {
  if (c.label === "skills") {
    p.skills = false;
  } else {
    p[c.label] = true;
  }
  return p;
}, {} as LoadingState);

type AppContextState = {
  isLoading: boolean;
  setLoadingState: Dispatch<SetStateAction<LoadingState>>;
};
export const AppContext = createContext({} as AppContextState);

export default function App() {
  const [loadingState, setLoadingState] =
    useState<LoadingState>(initialLoadingState);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => setIsSideMenuOpen((p) => !p);

  const isLoading = useMemo(() => {
    const loadingStateValues = Object.values(loadingState);
    let value = false;
    for (let i = 0; i < loadingStateValues.length; i++) {
      if (loadingStateValues[i]) {
        value = true;
        break;
      }
    }
    return value;
  }, [loadingState]);

  return (
    <AppContext.Provider value={{ isLoading, setLoadingState }}>
      <div
        id={APP_ID}
        className={classNames("overflow-y-scroll overflow-x-hidden relative", [
          "h-svh",
          "lg:vh",
        ])}
      >
        <Loading />
        <Header
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />
        <SideMenu isMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
        <main
          className={classNames(
            "max-w-[var(--app-max-width)] mx-auto",
            "lg:space-y-[10rem]"
          )}
        >
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
