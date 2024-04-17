import { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./sections/introduction/Introduction";
import Skills from "./sections/skills/Skills";

// IDs
const APP_ID = "app";
export const INTRODUCTION_SECTION_ID = "introduction-section";
export const INTRODUCTION_SECTION_RIGHT_ID = "introduction-section-right";
export const SKILLS_SECTION_ID = "skills-section";
// Breakpoints
export const MOBILE_BREAKPOINT = 428;
export const TABLET_BREAKPOINT = 768;
// Z-indices
export const INTRODUCTION_SECTION_Z_INDEX = 0;
export const SKILLS_SECTION_Z_INDEX = 1;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = document.getElementById("root");
    const app = document.getElementById(APP_ID);
    const introSection = document.getElementById(INTRODUCTION_SECTION_ID);
    const introSectionRight = document.getElementById(
      INTRODUCTION_SECTION_RIGHT_ID
    );

    if (root && app && introSection && introSectionRight) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === root) {
            handleIntro();
          }
        }
      });

      observer.observe(root);

      const handleIntro = () => {
        const isInView = introSection?.getBoundingClientRect().bottom >= 0;
        const isSmallViewport = window.innerWidth <= TABLET_BREAKPOINT;

        if (isInView) {
          if (isSmallViewport) {
            // right section has with of 100% in small viewports
            if (introSectionRight.style.width !== "100%") {
              introSectionRight.style.width = "100%";
            }
          } else {
            const right = (window.innerWidth - app.clientWidth) / 2;
            introSectionRight.style.right = `${right}px`;
            introSectionRight.style.width = `${0.45 * app.clientWidth}px`;
            introSectionRight.style.top = `${
              -0.1 * introSection.getBoundingClientRect().top
            }px`;
          }
        }
      };

      const handleScroll = (e: Event) => {
        if (isLoading) {
          e.preventDefault();
        } else {
          handleIntro();
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: false });
      setIsLoading(false);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    setIsLoading(false);
  }, [isLoading]);

  return (
    <main id={APP_ID}>
      <Introduction />
      <Skills />
    </main>
  );
}

export default App;
