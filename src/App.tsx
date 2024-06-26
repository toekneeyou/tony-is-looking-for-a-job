import Hero from "./sections/hero/Hero";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import Footer from "./sections/footer/Footer";
import Header from "./features/Header";
import Projects from "./sections/projects/Projects";
import SideMenu from "./features/SideMenu";
import Loading from "./features/loading/Loading";
import LoadingContextProvider from "./contexts/LoadingContext";
import SectionContextProvider from "./contexts/SectionContext";
import SideMenuContextProvider from "./contexts/SideMenuContext";
import { APP_ID } from "./constants/id";
import { classNames } from "./helpers/helpers";

import "./index.css";

export default function App() {
  return (
    <LoadingContextProvider>
      <SectionContextProvider>
        <SideMenuContextProvider>
          <div
            id={APP_ID}
            className={classNames(
              "overflow-y-scroll overflow-x-hidden relative",
              ["h-svh", "lg:vh"]
            )}
          >
            <Loading />

            <Header />
            <SideMenu />
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
        </SideMenuContextProvider>
      </SectionContextProvider>
    </LoadingContextProvider>
  );
}
