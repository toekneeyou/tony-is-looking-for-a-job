import { useState } from "react";

import { APP_ID } from "./constants/id";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import useViewport from "./hooks/useViewport";
import useSectionObserver from "./hooks/useSectionObserver";
import MobileHeader from "./features/mobileHeader/MobileHeader";
import Actions from "./features/actions/Actions";
import NavSideMenu from "./features/navSideMenu/NavSideMenu";
import Header from "./features/header/Header";
import Abby from "./sections/abby/Abby";
import Footer from "./sections/footer/Footer";

import "./App.css";

export default function App() {
  const currentSection = useSectionObserver();
  const { isMobile } = useViewport();

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <main id={APP_ID}>
      {isMobile ? (
        <MobileHeader
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      ) : (
        <Header currentSection={currentSection} />
      )}
      {isMobile && (
        <NavSideMenu
          isSideMenuOpen={isSideMenuOpen}
          isMobile={isMobile}
          currentSection={currentSection}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      )}
      <Intro currentSection={currentSection} />
      <AboutMe isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Abby isMobile={isMobile} />
      <Footer />
      {!isMobile && <Actions />}
    </main>
  );
}
