import { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./sections/introduction/Introduction";
import Skills from "./sections/skills/Skills";
import Abby from "./sections/abby/Abby";
import NavHeader from "./features/navHeader/NavHeader";
import "./styles/animations.css";
import Contacts from "./features/contacts/Contacts";
import AboutMe from "./sections/aboutMe/AboutMe";

// IDs NB K
export const APP_ID = "app";
export const INTRODUCTION_SECTION_ID = "introduction-section";
export const INTRODUCTION_SECTION_LEFT_ID = "introduction-section-left";
export const INTRODUCTION_SECTION_RIGHT_ID = "introduction-section-right";
export const ABOUT_ME_SECTION_ID = "about-me-section";
export const ABOUT_ME_SECTION_LEFT_ID = "about-me-section-left";
export const ABOUT_ME_SECTION_RIGHT_ID = "about-me-section-right";
export const SKILLS_SECTION_ID = "skills-section";
export const ABBY_SECTION_ID = "abby-section";
export const ABBY_IMAGE_INTRO_ID = "abby-bold-intro";
export const ABBY_HIGHLIGHTS_SECTION_ID = "abby-highlights-section";
export const NAV_HEADER_ID = "nav-header";
// Breakpoints
export const MOBILE_BREAKPOINT = 428;
export const TABLET_BREAKPOINT = 768;
// Z-indices
export const INTRODUCTION_SECTION_Z_INDEX = 0;
export const SKILLS_SECTION_Z_INDEX = 1;
export const ABBY_SECTION_Z_INDEX = 2;
export const NAV_HEADER_Z_INDEX = 100;
export const CONTACTS_Z_INDEX = 100;
// colors
export const EGGPLANT = "#786570";
export const BLACK = "#13141b";
export const WHITE = "#e5e5e5";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(WHITE);

  useEffect(() => {
    const root = document.getElementById("root");
    const body = document.querySelector("body") as HTMLElement;
    const app = document.getElementById(APP_ID);
    const nav = document.getElementById(NAV_HEADER_ID);
    const navLinks = document.querySelectorAll(
      `#${NAV_HEADER_ID} li`
    ) as unknown as HTMLElement[];
    const introSection = document.getElementById(INTRODUCTION_SECTION_ID);
    const introSectionLeft = document.getElementById(
      INTRODUCTION_SECTION_LEFT_ID
    );
    const introSectionRight = document.getElementById(
      INTRODUCTION_SECTION_RIGHT_ID
    );
    const aboutMeSection = document.getElementById(ABOUT_ME_SECTION_ID);
    const aboutMeSectionLeft = document.getElementById(
      ABOUT_ME_SECTION_LEFT_ID
    );
    const aboutMeSectionRight = document.getElementById(
      ABOUT_ME_SECTION_RIGHT_ID
    );
    const skillsSection = document.getElementById(SKILLS_SECTION_ID);
    const abbySection = document.getElementById(ABBY_SECTION_ID);
    const abbyImageIntro = document.getElementById(ABBY_IMAGE_INTRO_ID);

    if (
      root &&
      body &&
      app &&
      nav &&
      navLinks &&
      introSection &&
      introSectionLeft &&
      introSectionRight &&
      aboutMeSection &&
      aboutMeSectionLeft &&
      aboutMeSectionRight &&
      skillsSection &&
      abbySection &&
      abbyImageIntro
    ) {
      body.style.overflowY = isLoading ? "hidden" : "scroll";

      const handleColors = () => {
        if (
          abbyImageIntro.getBoundingClientRect().top <
            0.1 * window.innerHeight &&
          abbyImageIntro.getBoundingClientRect().bottom > 0
        ) {
          setBackgroundColor(EGGPLANT);
        } else {
          setBackgroundColor(WHITE);
        }
      };

      const handleIntro = () => {
        introSectionLeft.style.transform = `translateY(${
          0.15 * introSection.getBoundingClientRect().top
        }px)`;
        introSectionRight.style.transform = `translateY(${
          -0.15 * introSection.getBoundingClientRect().top
        }px)`;
      };

      const handleAboutMe = () => {
        // aboutMeSectionLeft.style.transform = `translateY(${
        //   0.05 * introSection.getBoundingClientRect().top
        // }px)`;
        aboutMeSectionRight.style.transform = `translateY(${
          -0.1 * introSection.getBoundingClientRect().top
        }px)`;
      };

      const handleSkills = () => {};

      const handleAbby = () => {};

      // Resize Handler
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === root) {
            handleColors();
            handleIntro();
            handleAboutMe();
            handleSkills();
            handleAbby();
          }
        }
      });
      observer.observe(root);

      // Scroll Handler
      const handleScroll = (e: Event) => {
        handleColors();
        handleIntro();
        handleAboutMe();
        handleSkills();
        handleAbby();
      };
      window.addEventListener("scroll", handleScroll, { passive: false });
      setIsLoading(false);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }
    // setIsLoading(false);
  }, [isLoading]);

  return (
    <main id={APP_ID} style={{ backgroundColor }}>
      <NavHeader />
      <Introduction />
      <AboutMe />
      <Skills />
      <Abby showBackground={backgroundColor === EGGPLANT} />
      <Contacts />
    </main>
  );
}

export default App;
