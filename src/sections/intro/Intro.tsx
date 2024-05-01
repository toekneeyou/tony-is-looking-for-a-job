import { INTRO_SECTION_ID } from "../../constants/id";
import tony from "../../assets/tony-iceland.jpg";
import "./intro.css";
import NavBar from "../../features/navBar/NavBar";
import { SectionDetail } from "../../constants/data";

type IntroProps = {
  currentSection: SectionDetail;
  isMobile: boolean;
};

export default function Intro({ currentSection, isMobile }: IntroProps) {
  return (
    <section id={INTRO_SECTION_ID} className="INTRO hide">
      <div className="intro__name">
        <div className="josefin_sans_bold intro__name__full_name">TONY YU</div>
        <div className="divider" />
        <div className="josefin_sans_bold intro__name__job_title">
          FRONTEND DEVELOPER
        </div>
      </div>
      <div className="intro__photo">
        <img
          src={tony}
          alt="Photo of author wearing a red jacket standing in front of a snow-capped mountain"
        />
        <div className="overlay" />
      </div>
      {!isMobile && (
        <div className="intro__nav">
          <NavBar currentSection={currentSection} />
        </div>
      )}
    </section>
  );
}
