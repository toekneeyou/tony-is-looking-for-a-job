import { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./sections/introduction/Introduction";
import Skills from "./sections/skills/Skills";
import Abby from "./sections/abby/Abby";
import NavHeader from "./features/navHeader/NavHeader";
import "./styles/animations.css";
import Contacts from "./features/contacts/Contacts";

// IDs
export const APP_ID = "app";
export const INTRODUCTION_SECTION_ID = "introduction-section";
export const INTRODUCTION_SECTION_LEFT_ID = "introduction-section-left";
export const INTRODUCTION_SECTION_RIGHT_ID = "introduction-section-right";
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
const EGGPLANT = "#786570";
const BLACK = "#13141b";
const WHITE = "#e5e5e5";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(WHITE);

  useEffect(() => {
    const root = document.getElementById("root");
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
    const skillsSection = document.getElementById(SKILLS_SECTION_ID);
    const abbySection = document.getElementById(ABBY_SECTION_ID);
    const abbyImageIntro = document.getElementById(ABBY_IMAGE_INTRO_ID);

    if (
      root &&
      app &&
      nav &&
      navLinks &&
      introSection &&
      introSectionLeft &&
      introSectionRight &&
      skillsSection &&
      abbySection &&
      abbyImageIntro
    ) {
      const handleColors = () => {
        if (introSection.getBoundingClientRect().bottom >= 1) {
          navLinks.forEach((link) => {
            link.style.color = BLACK;
          });
          nav.style.backgroundColor = "transparent";
          setBackgroundColor(WHITE);
        } else if (
          abbyImageIntro.getBoundingClientRect().top >
          0.1 * window.innerHeight
        ) {
          navLinks.forEach((link) => {
            link.style.color = WHITE;
          });
          nav.style.backgroundColor = BLACK;
          setBackgroundColor(WHITE);
        } else {
          navLinks.forEach((link) => {
            link.style.color = WHITE;
          });
          nav.style.backgroundColor = "rgb(120, 101, 112, 0.95)";
          setBackgroundColor(EGGPLANT);
        }
      };

      const handleIntro = () => {
        const isInView = introSection?.getBoundingClientRect().bottom >= 0;
        const isSmallViewport = window.innerWidth <= TABLET_BREAKPOINT;

        const makeVisible = () => {
          if (introSectionRight.style.visibility !== "visible") {
            introSectionRight.style.visibility = "visible";
          }
        };

        const makeHidden = () => {
          if (introSectionRight.style.visibility !== "hidden") {
            introSectionRight.style.visibility = "hidden";
          }
        };

        const makeWidth100Percent = () => {
          // right section has width of 100% in small viewports
          if (introSectionRight.style.width !== "100%") {
            introSectionRight.style.width = "100%";
          }
        };

        if (isInView) {
          makeVisible();
          if (isSmallViewport) {
            makeWidth100Percent();
          } else {
            const right = (window.innerWidth - app.clientWidth) / 2;
            introSectionRight.style.right = `${right}px`;
            introSectionRight.style.width = `${0.45 * app.clientWidth}px`;
            introSectionLeft.style.transform = `translateY(${
              -0.2 * introSection.getBoundingClientRect().top
            }px)`;
          }
        } else {
          if (isSmallViewport) {
            makeWidth100Percent();
          } else {
            makeHidden();
          }
        }
      };

      // Resize Handler
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === root) {
            handleIntro();
            handleColors();
          }
        }
      });
      observer.observe(root);

      // Scroll Handler
      const handleScroll = (e: Event) => {
        if (isLoading) {
          e.preventDefault();
        } else {
          handleIntro();
          handleColors();
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: false });

      setIsLoading(false);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }
    setIsLoading(false);
  }, [isLoading]);

  return (
    <main id={APP_ID} style={{ backgroundColor }}>
      <NavHeader />
      <Introduction />
      <Skills />
      <Abby />
      <Contacts />
    </main>
  );
}

export default App;
