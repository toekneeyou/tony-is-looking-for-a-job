import { useEffect, useState } from "react";
import {
  ABOUT_ME_ID,
  APP_ID,
  HERO_ID,
  SKILLS_ID,
  PROJECTS_ID,
} from "../constants/id";
import { SectionDetail, sections } from "../constants/data";

export default function useSectionObserver() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useEffect(() => {
    const app = document.getElementById(APP_ID)!;
    const heroSection = document.getElementById(HERO_ID)!;
    const aboutMeSection = document.getElementById(ABOUT_ME_ID)!;
    const skillsSection = document.getElementById(SKILLS_ID)!;
    const projectsSection = document.getElementById(PROJECTS_ID)!;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSection = sections.find((s) => {
              switch (entry.target.id) {
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

    observer.observe(heroSection);
    observer.observe(aboutMeSection);
    observer.observe(skillsSection);
    observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return currentSection;
}
