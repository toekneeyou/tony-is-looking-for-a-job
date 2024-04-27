import { ABOUT_ME_SECTION_ID } from "../../constants/id";
import TextContent from "../../components/textContent/TextContent";
import uclaLogo from "../../assets/ucla-logo.webp";
import lewagonLogo from "../../assets/lewagon-logo.jpg";
import nielsenLogo from "../../assets/nielsen-logo.svg";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { combineClasses } from "../../helpers/helpers";
import "./aboutMe.css";
import Button from "../../components/button/Button";
import { AppContext } from "../../App";

export default function AboutMe() {
  const { sectionIndex } = useContext(AppContext);
  const [hoveredItem, setHoveredItem] = useState<
    "ucla" | "lewagon" | "nielsen" | null
  >(null);
  const aboutMeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const aboutMeEl = aboutMeRef.current as HTMLElement;
    if (sectionIndex === 1) {
      aboutMeEl.classList.remove("ABOUT_ME__hide");
      aboutMeEl.classList.add("ABOUT_ME__show");
    } else {
      aboutMeEl.classList.remove("ABOUT_ME__show");
      aboutMeEl.classList.add("ABOUT_ME__hide");
    }
  }, [sectionIndex]);

  return (
    <section ref={aboutMeRef} id={ABOUT_ME_SECTION_ID} className="ABOUT_ME">
      <div className="about_me_left">
        <TextContent
          title="About Me"
          bodyText="The only thing that excites me more than a beautiful, intuitive user interface is hitting the slopes on my snowboard or sending a fun bouldering route. With over four years of experience in collaborative development environments, I've honed my skills in building engaging applications using React. Though my expertise lies in frontend development, I've been actively involved in every phase of the development lifecycle."
          button={
            <a href={nielsenLogo} download={"Resume"}>
              <Button onClick={() => {}} rightIcon="download">
                Download Resume
              </Button>
            </a>
          }
        />
      </div>
      <div className="about_me_right">
        <div
          className="about_me_visual"
          onMouseOut={() => setHoveredItem(null)}
        >
          <div className="overlay about_me_visual__overlay" />
          <AboutMeVisualItem
            src={nielsenLogo}
            onMouseOver={() => setHoveredItem("nielsen")}
            width="55%"
            isExpanded={hoveredItem === "nielsen"}
            isCollapsed={hoveredItem !== null && hoveredItem !== "nielsen"}
            backgroundColor="linear-gradient(45deg, rgba(80,48,170,1) 18%, rgba(48,78,105,1) 50%, rgba(31,44,102,1) 100%)"
            company="Gracenote, a Nielsen Company"
            title="Sr. Software Engineer"
            date="2020 - Present"
          />
          <AboutMeVisualItem
            src={lewagonLogo}
            onMouseOver={() => setHoveredItem("lewagon")}
            width="25%"
            isExpanded={hoveredItem === "lewagon"}
            isCollapsed={hoveredItem !== null && hoveredItem !== "lewagon"}
            backgroundColor="#e71005"
            company="Le Wagon"
            title="Web Development Program"
            date="2019"
          />
          <AboutMeVisualItem
            src={uclaLogo}
            onMouseOver={() => setHoveredItem("ucla")}
            width="35%"
            isExpanded={hoveredItem === "ucla"}
            isCollapsed={hoveredItem !== null && hoveredItem !== "ucla"}
            backgroundColor="#0f7bb6"
            company="UCLA Health - Jules Stein Eye Institute"
            title="Ophthalmic Technician II"
            date="2016 - 2019"
          />
        </div>
      </div>
    </section>
  );
}

type AboutMeVisualItemProps = {
  backgroundColor: string;
  width: string;
  onMouseOver: () => void;
  isExpanded: boolean;
  isCollapsed: boolean;
  src: string;
  title: string;
  company: string;
  date: string;
};
function AboutMeVisualItem({
  backgroundColor,
  width,
  onMouseOver,
  isExpanded,
  isCollapsed,
  src,
  title,
  company,
  date,
}: AboutMeVisualItemProps) {
  return (
    <div
      className={combineClasses(["about_me_visual__item"])}
      onMouseOver={onMouseOver}
      style={{
        background: backgroundColor,
        width: isExpanded ? "100%" : isCollapsed ? "0%" : width,
      }}
    >
      <img src={src} />
      <div
        className={combineClasses([
          "overlay about_me_visual__item__content",
          isExpanded ? "about_me_visual__item__content__show" : null,
        ])}
        style={{
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <span className="title">{title}</span>
        <br />
        <span className="company">{company}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}
