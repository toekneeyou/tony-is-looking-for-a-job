import { useContext, useEffect, useRef } from "react";
import { INTRO_SECTION_ID } from "../../constants/id";
import tony from "../../assets/tony-iceland.jpg";
import NavBar from "../../features/navBar/NavBar";
import { AppContext } from "../../App";
import "./intro.css";

type IntroProps = {};

export default function Intro({}: IntroProps) {
  const { isLoading, sectionIndex, setIsLoading } = useContext(AppContext);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current as HTMLElement;
    if (!intro.classList.contains("INTRO__initial")) {
      intro.classList.add("INTRO__initial");
      const navLinks = intro.querySelectorAll(
        ".nav_list__item"
      ) as unknown as HTMLElement[];
      setTimeout(() => {
        navLinks.forEach((nl) => {
          nl.style.transition = "all 0.25s ease";
          nl.style.transitionDelay = "0ms";
          nl.style.pointerEvents = "all";
        });
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const intro = introRef.current as HTMLElement;
    if (!isLoading) {
      if (sectionIndex === 0) {
        intro.classList.add("INTRO__show");
        intro.classList.remove("INTRO__hide");
      } else {
        intro.classList.add("INTRO__hide");
        intro.classList.remove("INTRO__show");
      }
    }
  }, [isLoading, sectionIndex]);

  return (
    <div ref={introRef} id={INTRO_SECTION_ID} className="INTRO">
      <div className="josefin_sans_bold intro__name">
        <span className="intro__name__full_name">Tony Yu</span>
        <div className="divider" />
        <span className="intro__name__title">Frontend Developer</span>
      </div>

      <div className="intro__photo">
        <div className="overlay" />
        <img src={tony} />
      </div>

      <NavBar className="intro__nav" />
    </div>
  );
}
