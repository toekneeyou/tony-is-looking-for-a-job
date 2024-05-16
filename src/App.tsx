import "./index.css";

import Hero from "./sections/hero/Hero";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import {
  ABOUT_ME_ID,
  APP_ID,
  HERO_ID,
  PROJECTS_ID,
  SKILLS_ID,
} from "./constants/id";
import { classNames } from "./helpers/helpers";
import Footer from "./sections/footer/Footer";
import Header from "./features/Header";
import Projects from "./sections/projects/Projects";
import SideMenu from "./features/SideMenu";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Section, SectionDetail, sections } from "./constants/data";
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
  currentSection: SectionDetail;
};
export const AppContext = createContext({} as AppContextState);

export default function App() {
  const [loadingState, setLoadingState] =
    useState<LoadingState>(initialLoadingState);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(sections[0]);
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

  useEffect(() => {
    const intObs = new IntersectionObserver(
      (entries) => {
        setCurrentSection((p) => {
          let newSection = p;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newSection = sections.find((s) => s.id === entry.target.id)!;
            }
          });
          return newSection;
        });
      },
      { threshold: 0.25 }
    );

    intObs.observe(document.getElementById(HERO_ID)!);
    intObs.observe(document.getElementById(ABOUT_ME_ID)!);
    intObs.observe(document.getElementById(SKILLS_ID)!);
    intObs.observe(document.getElementById(PROJECTS_ID)!);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, setLoadingState, currentSection }}>
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
