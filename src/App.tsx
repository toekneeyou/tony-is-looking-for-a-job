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
import { useState } from "react";

export default function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => setIsSideMenuOpen((p) => !p);

  return (
    <div
      id={APP_ID}
      className={classNames("overflow-y-scroll overflow-x-hidden relative", [
        "h-svh",
        "lg:vh",
      ])}
    >
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
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
  );
}
