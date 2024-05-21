import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { SectionDetail, sections } from "../constants/data";
import { ABOUT_ME_ID, HERO_ID, PROJECTS_ID, SKILLS_ID } from "../constants/id";

interface SectionContextState {
  currentSection: SectionDetail;
  setCurrentSection: Dispatch<SetStateAction<SectionDetail>>;
}

const SectionContext = createContext<SectionContextState | null>(null);

interface SectionContextProviderProps {
  children: ReactNode;
}

export default function SectionContextProvider({
  children,
}: SectionContextProviderProps) {
  const [currentSection, setCurrentSection] = useState(sections[0]);

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
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSectionContext = () => {
  const sectionState = useContext(SectionContext);
  if (!sectionState) {
    throw new Error("useSectionContext must be used within a Provider");
  }
  return sectionState;
};
