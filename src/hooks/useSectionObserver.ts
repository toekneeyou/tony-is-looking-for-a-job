import { useEffect, useState } from "react";
import {
  ABBY_SECTION_FEATURES_ID,
  ABBY_SECTION_HERO_ID,
  ABBY_SECTION_ID,
  ABOUT_ME_SECTION_ID,
  ACTIONS_ID,
  APP_ID,
  FOOTER_ID,
  INTRO_SECTION_ID,
  SKILLS_SECTION_ID,
} from "../constants/id";
import { SectionDetail, sections } from "../constants/data";

export default function useSectionObserver() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useEffect(() => {
    const app = document.getElementById(APP_ID) as HTMLElement;
    const introSection = document.getElementById(
      INTRO_SECTION_ID
    ) as HTMLElement;
    const aboutMeSection = document.getElementById(
      ABOUT_ME_SECTION_ID
    ) as HTMLElement;
    const skillsSection = document.getElementById(
      SKILLS_SECTION_ID
    ) as HTMLElement;
    const abbySection = document.getElementById(ABBY_SECTION_ID) as HTMLElement;
    const abbyHeroSection = document.getElementById(
      ABBY_SECTION_HERO_ID
    ) as HTMLElement;
    const abbyFeaturesSection = document.getElementById(
      ABBY_SECTION_FEATURES_ID
    ) as HTMLElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            const newSection = sections.find((s) => {
              switch (entry.target.id) {
                case ABBY_SECTION_HERO_ID:
                case ABBY_SECTION_FEATURES_ID:
                  return s.id === ABBY_SECTION_ID;
                default:
                  return s.id === entry.target.id;
              }
            }) as SectionDetail;
            setCurrentSection(newSection);
          }
        });
      },
      {
        root: app,
        threshold: 0.5,
      }
    );

    observer.observe(introSection);
    observer.observe(aboutMeSection);
    observer.observe(skillsSection);
    observer.observe(abbySection);
    observer.observe(abbyHeroSection);
    observer.observe(abbyFeaturesSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Hide Actions when Footer is in view. Don't need to show the same links twice
  useEffect(() => {
    const app = document.getElementById(APP_ID) as HTMLElement;
    const footer = document.getElementById(FOOTER_ID) as HTMLElement;
    const actions = document.getElementById(ACTIONS_ID) as HTMLElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            actions.classList.add("hide");
          } else {
            actions.classList.remove("hide");
          }
        });
      },
      {
        root: app,
        threshold: 0.5,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return currentSection;
}
